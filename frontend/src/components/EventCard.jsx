import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col justify-between h-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{event.name}</h2>
            <div className="flex-grow"></div>
            <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 space-y-4 sm:space-y-0">
                <Link
                    to={`/event/${event.id}`}
                    className="bg-green-900 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 w-full sm:w-1/3 sm:mr-2"
                >
                    View Event
                </Link>
                <Link
                    to={`/edit-event/${event.id}`}
                    className="bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-500 transition duration-300 w-full sm:w-1/3 sm:ml-2"
                >
                    Edit Event
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
