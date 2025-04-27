import React from 'react';

// Mock listings data
const mockListings = [
  {
    id: 1,
    title: "Downtown Parking Spot",
    image: "https://via.placeholder.com/300x200",
    location: "123 Main St, City",
    price: "$15/day",
    status: "active",
    bookings: 12,
    rating: 4.8
  },
  {
    id: 2,
    title: "Secure Garage Space",
    image: "https://via.placeholder.com/300x200",
    location: "456 Park Ave, City",
    price: "$20/day",
    status: "inactive",
    bookings: 8,
    rating: 4.5
  },
  {
    id: 3,
    title: "Residential Street Parking",
    image: "https://via.placeholder.com/300x200",
    location: "789 Oak St, City",
    price: "$10/day",
    status: "pending",
    bookings: 0,
    rating: null
  }
];

export default function MyListings() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">My Listings</h2>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add New Listing
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockListings.map((listing) => (
            <div key={listing.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={listing.image}
                  alt={listing.title}
                />
                <div className="absolute top-2 right-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    listing.status === 'active' ? 'bg-green-100 text-green-800' :
                    listing.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{listing.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{listing.location}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-medium text-gray-900">{listing.price}</p>
                  {listing.rating && (
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm text-gray-500">{listing.rating}</span>
                    </div>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-gray-500">{listing.bookings} bookings</p>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 