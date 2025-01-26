const { Op } = require("sequelize");
const { Category, Event, sequelize } = require("../models");

exports.createEvent = async (req, res) => {

    const { name, description, start_date_time, end_date_time, categoryIds } = req.body;

    if (!name || !start_date_time || !end_date_time) {
        return res.status(400).json({ error: "Event name, start_date_time, and end_date_time are required" });
    }

    try {
        const categories = await Category.findAll({
            where: { id: categoryIds },
        });

        if (categories.length !== categoryIds.length) {
            return res.status(400).json({ error: "Invalid category IDs provided" });
        }

        const event = await Event.create({
            name,
            description,
            start_date_time,
            end_date_time,
        });

        await event.addCategories(categories);

        res.status(201).json({ event, categories });
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ error: "Failed to create event" });
    }
};

exports.getEvents = async (req, res) => {
    try {
        const { categoryId, page = 1, limit = 10, sortBy = 'name' } = req.query;

        const order = sortBy === 'start_date_time' ? [['start_date_time', 'ASC']] : [['name', 'ASC']];

        const validLimit = !isNaN(parseInt(limit)) && parseInt(limit) > 0 ? parseInt(limit) : 10;
        const validPage = !isNaN(parseInt(page)) && parseInt(page) > 0 ? parseInt(page) : 1;

        const whereClause = categoryId
            ? {
                id: {
                    [Op.in]: sequelize.literal(`(
                        SELECT "EventId" FROM "EventCategory" WHERE "CategoryId" = '${categoryId}'
                    )`),
                },
            }
            : {};

        const events = await Event.findAndCountAll({
            where: whereClause,
            include: [{ model: Category }],
            limit: validLimit,
            offset: (validPage - 1) * validLimit,
            order: order,
        });

        return res.status(200).json({
            events: events.rows,
            total: events.count,
            page: validPage,
            pages: Math.ceil(events.count / validLimit),
        });
    } catch (error) {
        console.error('Error fetching events:', error);
        return res.status(500).json({ error: 'An error occurred while fetching events' });
    }
};


exports.getEventById = async (req, res) => {
    try {
        const { id } = req.params;

        const event = await Event.findByPk(id, {
            include: [{ model: Category }]
        });

        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        return res.status(200).json({ event });

    } catch (error) {
        console.error("Error fetching event by ID:", error);
        return res.status(500).json({ error: 'An error occurred while fetching the event' });
    }
}

exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, start_date_time, end_date_time, categoryIds } = req.body;

        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        await event.update({ name, description, start_date_time, end_date_time });

        if (categoryIds) {
            const categories = await Category.findAll({ where: { id: categoryIds } });
            await event.setCategories(categories);
        }

        return res.status(200).json({ message: 'Event updated successfully', event });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while updating the event' });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        await event.destroy();
        return res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while deleting the event' });
    }
};