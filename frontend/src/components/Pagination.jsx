import React from 'react';

const Pagination = ({ page, totalPages, onPrevious, onNext, limit, onLimitChange, eventsLength }) => {

    const isNextDisabled = eventsLength < limit || page === totalPages;

    return (
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
                onClick={onPrevious}
                className={`${page === 1
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                    } px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-200`}
                disabled={page === 1}
            >
                Previous
            </button>

            <span className="text-xl font-semibold text-gray-700">
                Page {page} of {totalPages}
            </span>

            <button
                onClick={onNext}
                className={`${isNextDisabled
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                    } px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-200`}
                disabled={isNextDisabled}
            >
                Next
            </button>

            <div className="flex items-center space-x-2">
                <span className="text-gray-700">Items per page:</span>
                <select
                    value={limit}
                    onChange={(e) => onLimitChange(e.target.value)}
                    className="p-3 border-2 border-gray-300 rounded-md text-sm"
                >
                    <option value={3}>3</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>
        </div>
    );
};

export default Pagination;
