import React from 'react';

// Mock data for demonstration
const mockListings = [
  {
    id: 1,
    title: "Downtown Parking Spot",
    location: "123 Main St, City",
    price: "$15/day",
    image: "https://via.placeholder.com/300x200",
    description: "Convenient parking spot in the heart of downtown."
  },
  {
    id: 2,
    title: "Secure Garage Space",
    location: "456 Park Ave, City",
    price: "$20/day",
    image: "https://via.placeholder.com/300x200",
    description: "Covered parking in a secure garage."
  },
  {
    id: 3,
    title: "Residential Street Parking",
    location: "789 Oak St, City",
    price: "$10/day",
    image: "https://via.placeholder.com/300x200",
    description: "Quiet residential street parking."
  }
];

export default function Listings() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Parking</h1>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Search Filters */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price Range</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>Any</option>
                    <option>$0 - $10</option>
                    <option>$10 - $20</option>
                    <option>$20+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>Any</option>
                    <option>Street</option>
                    <option>Garage</option>
                    <option>Lot</option>
                  </select>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Listings Grid */}
            <div className="sm:col-span-2">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {mockListings.map((listing) => (
                  <div key={listing.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">{listing.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{listing.location}</p>
                      <p className="mt-1 text-lg font-medium text-indigo-600">{listing.price}</p>
                      <p className="mt-2 text-sm text-gray-600">{listing.description}</p>
                      <div className="mt-4">
                        <a
                          href={`/listings/view?id=${listing.id}`}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 