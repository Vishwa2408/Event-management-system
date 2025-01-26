const express = require('express');
const {
    createEvent,
    getEvents,
    updateEvent,
    deleteEvent,
    getEventById,
} = require('../controllers/eventController');

const router = express.Router();

router.post('/', createEvent);

router.get('/', getEvents);

router.get("/:id", getEventById)

router.patch('/:id', updateEvent);

router.delete('/:id', deleteEvent);


module.exports = router;
