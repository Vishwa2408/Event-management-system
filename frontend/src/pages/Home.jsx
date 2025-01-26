import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';
import Pagination from '../components/Pagination';
import { FaFilter, FaSort } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';


const Home = () => {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(10);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [sortBy, setSortBy] = useState('name');
    const [loading, setLoading] = useState(false);


    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/categories');
            setCategories(response.data.categories || []);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };


    const fetchEvents = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:5000/api/events?page=${page}&limit=${limit}&categoryId=${selectedCategory}&sortBy=${sortBy}`
            );
            setEvents(response.data.events);
            setTotalPages(Math.ceil(response.data.total / limit));
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);


    useEffect(() => {
        fetchEvents();
    }, [page, limit, selectedCategory, sortBy]);

    const handlePrevious = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (page < totalPages) setPage((prev) => prev + 1);
    };

    const onLimitChange = (newLimit) => {
        setLimit(Number(newLimit));
        setPage(1);
    };

    const onCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        setPage(1);
    };


    const onSortChange = (e) => {
        const value = e.target.value === 'date' ? 'start_date_time' : e.target.value;
        setSortBy(value);
    };

    return (
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Upcoming Events</h1>

            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">

                <div className="flex items-center space-x-2">
                    <FaFilter className="text-lg" />
                    <select
                        value={selectedCategory}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="p-3 border-2 border-gray-300 rounded-md text-sm"
                    >
                        <option value="">All Categories</option>
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>Loading categories...</option>
                        )}
                    </select>
                </div>

                <div className="flex items-center space-x-2">
                    <FaSort className="text-lg" />
                    <select
                        value={sortBy === 'start_date_time' ? 'date' : sortBy}
                        onChange={onSortChange}
                        className="p-3 border-2 border-gray-300 rounded-md text-sm"
                    >
                        <option value="name">Sort by Name</option>
                        <option value="date">Sort by Date</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                    <ThreeDots height="50" width="50" color="#4fa94d" ariaLabel="three-dots-loading" />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.length > 0 ? (
                            events.map((event) => <EventCard key={event.id} event={event} />)
                        ) : (
                            <div className="text-center col-span-3 text-lg text-gray-500">
                                No events found for this category.
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center mt-8">
                        <Pagination
                            page={page}
                            totalPages={totalPages}
                            onPrevious={handlePrevious}
                            onNext={handleNext}
                            limit={limit}
                            onLimitChange={onLimitChange}
                            eventsLength={events.length}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
