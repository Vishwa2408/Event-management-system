import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [startDateTime, setStartDateTime] = useState("");
    const [endDateTime, setEndDateTime] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/categories");
            setCategories(
                response.data.categories.map((category) => ({
                    value: category.id,
                    label: category.name,
                }))
            );
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const handleCategoryChange = (selectedOptions) => {
        setSelectedCategories(selectedOptions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const eventData = {
                name: eventName,
                description: eventDescription,
                start_date_time: startDateTime,
                end_date_time: endDateTime,
                categoryIds: selectedCategories.map((category) => category.value),
            };

            await axios.post("http://localhost:5000/api/events", eventData);
            toast.success("Event created successfully!")

            setTimeout(() => {
                navigate("/");
            }, 5000);

        } catch (error) {
            console.error("Error creating event:", error);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800">Create Event</h2>

                <div>
                    <input
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Event Name"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <textarea
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        placeholder="Event Description"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="datetime-local"
                            value={startDateTime}
                            onChange={(e) => setStartDateTime(e.target.value)}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <input
                            type="datetime-local"
                            value={endDateTime}
                            onChange={(e) => setEndDateTime(e.target.value)}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Categories</label>
                    <Select
                        isMulti
                        options={categories}
                        value={selectedCategories}
                        onChange={handleCategoryChange}
                        className="w-full border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        classNamePrefix="react-select"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none transition duration-300"
                >
                    Add
                </button>
            </form>

            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={true} />
        </div>
    );
};

export default AddEvent;
