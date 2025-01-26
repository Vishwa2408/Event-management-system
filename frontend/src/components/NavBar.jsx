import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

const NavBar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav className="bg-blue-900 p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-2xl">Event Manager</div>
                <div className="space-x-6 hidden md:flex">
                    <Link
                        to="/"
                        className={`text-white hover:text-yellow-400 mt-2 transition duration-300 ${location.pathname === "/" ? "text-yellow-400" : ""
                            }`}
                    >
                        All Events
                    </Link>
                    <Link
                        to="/add-event"
                        className={`inline-block text-blue-900 bg-white hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ${location.pathname === "/add-event" ? "bg-yellow-500" : ""}`}
                    >
                        Add Event
                    </Link>
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        className="text-white"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <HiOutlineMenu size={25} />
                    </button>
                </div>
            </div>

            <div className={`md:hidden mt-4 space-y-4 text-center ${isMenuOpen ? "block" : "hidden"}`}>
                <Link
                    to="/"
                    className={`block text-white hover:text-yellow-400 transition duration-300 ${location.pathname === "/" ? "text-yellow-400" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    All Events
                </Link>
                <Link
                    to="/add-event"
                    className={`block inline-block text-blue-900 bg-white hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ${location.pathname === "/add-event" ? "bg-yellow-500" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Add Event
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
