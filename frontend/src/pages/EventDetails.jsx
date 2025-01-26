import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/events/${id}`);
                setEvent(response.data.event);
            } catch (error) {
                console.error('Error fetching event:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    if (loading) return <div className="text-center text-xl">
        <ThreeDots height="50" width="50" color="#4fa94d" ariaLabel="three-dots-loading" />
    </div>;

    if (!event) return <div className="text-center text-xl text-red-600">Event not found</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl mt-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{event.name}</h1>
            <p className="text-lg text-gray-700 mb-4">{event.description}</p>

            <div className="flex flex-col sm:flex-row sm:space-x-8 mb-6">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Start Time</h3>
                    <p className="text-gray-600">{new Date(event.start_date_time).toLocaleString()}</p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <h3 className="text-xl font-semibold text-gray-800">End Time</h3>
                    <p className="text-gray-600">{new Date(event.end_date_time).toLocaleString()}</p>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">Categories:</h2>
                <ul className="mt-2">
                    {event.Categories.map((category) => (
                        <li key={category.id} className="text-lg text-gray-600">{category.name}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6">
                <button
                    className="w-full sm:w-auto px-6 py-2 bg-teal-900 text-white rounded-lg shadow-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default EventDetails;
