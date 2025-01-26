import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import EventDetails from '../pages/EventDetails';
import AddEvent from '../pages/AddEvent';
import EditEvent from '../pages/EditEvent';
import Navbar from '../components/NavBar';

const AppRoutes = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-event" element={<AddEvent />} />
            <Route path="/edit-event/:id" element={<EditEvent />} />
            <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
    </Router>
);

export default AppRoutes;
