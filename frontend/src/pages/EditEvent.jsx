import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';

const EditEvent = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const eventResponse = await axios.get(`http://localhost:5000/api/events/${id}`);
                const event = eventResponse.data.event;
                setName(event.name);
                setDescription(event.description);
                setStartDateTime(event.start_date_time);
                setEndDateTime(event.end_date_time);
                console.log("event.categories", event.Categories);

                setSelectedCategories(
                    event.Categories.map((category) => ({
                        value: category.id,
                        label: category.name,
                    }))
                );
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/categories');

                setCategories(
                    response.data.categories.map((category) => ({
                        value: category.id,
                        label: category.name,
                    }))
                );
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchEvent();
        fetchCategories();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const categoryIds = selectedCategories.map((category) => category.value);

        try {
            await axios.patch(`http://localhost:5000/api/events/${id}`, {
                name,
                description,
                start_date_time: startDateTime,
                end_date_time: endDateTime,
                categoryIds,
            });
            toast.success('Event updated successfully!');

            setTimeout(() => {
                navigate('/');
            }, 5000);

        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-xl mt-6">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Edit Event</h1>
            <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Event Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter event name"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter event description"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Start Date & Time</label>
                        <input
                            type="datetime-local"
                            value={startDateTime}
                            onChange={(e) => setStartDateTime(e.target.value)}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">End Date & Time</label>
                        <input
                            type="datetime-local"
                            value={endDateTime}
                            onChange={(e) => setEndDateTime(e.target.value)}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Categories</label>
                    <Select
                        options={categories}
                        isMulti
                        value={selectedCategories}
                        onChange={setSelectedCategories}
                        className="w-full border-2 border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                        classNamePrefix="react-select"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none transition duration-300"
                    >
                        Update Event
                    </button>
                </div>
            </form>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={true} />
        </div>
    );
};

export default EditEvent;
