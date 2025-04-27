import React from 'react';

// Mock booking data
const mockBookings = [
  {
    id: 1,
    listing: {
      title: "Downtown Parking Spot",
      image: "https://via.placeholder.com/300x200",
      location: "123 Main St, City"
    },
    date: "2024-04-28",
    duration: "1 day",
    price: "$15",
    status: "upcoming"
  },
  {
    id: 2,
    listing: {
      title: "Secure Garage Space",
      image: "https://via.placeholder.com/300x200",
      location: "456 Park Ave, City"
    },
    date: "2024-04-25",
    duration: "2 days",
    price: "$40",
    status: "completed"
  },
  {
    id: 3,
    listing: {
      title: "Residential Street Parking",
      image: "https://via.placeholder.com/300x200",
      location: "789 Oak St, City"
    },
    date: "2024-04-20",
    duration: "3 days",
    price: "$30",
    status: "cancelled"
  }
];

export default function MyBookings() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              My Bookings
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="bg-white divide-y divide-gray-200">
              {mockBookings.map((booking) => (
                <div key={booking.id} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-20 w-20">
                        <img
                          className="h-20 w-20 rounded-lg object-cover"
                          src={booking.listing.image}
                          alt={booking.listing.title}
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          {booking.listing.title}
                        </h4>
                        <p className="text-sm text-gray-500">{booking.listing.location}</p>
                        <div className="mt-1 flex items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            booking.status === 'upcoming' ? 'bg-green-100 text-green-800' :
                            booking.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-6">
                      <div className="flex flex-col items-end">
                        <p className="text-lg font-medium text-gray-900">{booking.price}</p>
                        <p className="text-sm text-gray-500">{booking.duration}</p>
                        <p className="text-sm text-gray-500">{booking.date}</p>
                      </div>
                      <div className="mt-4 flex space-x-3">
                        {booking.status === 'upcoming' && (
                          <>
                            <button
                              type="button"
                              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Modify
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              Cancel
                            </button>
                          </>
                        )}
                        {booking.status === 'completed' && (
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Leave Review
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 