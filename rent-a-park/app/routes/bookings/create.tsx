import React from 'react';

// Mock listing data
const mockListing = {
  id: 1,
  title: "Downtown Parking Spot",
  image: "https://via.placeholder.com/300x200",
  location: "123 Main St, City",
  price: 15,
  type: "outdoor",
  size: "standard",
  availability: {
    start: "08:00",
    end: "20:00",
    days: ["monday", "tuesday", "wednesday", "thursday", "friday"]
  }
};

export default function CreateBooking() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Create Booking
            </h3>
            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <img
                  className="h-20 w-20 rounded-lg object-cover"
                  src={mockListing.image}
                  alt={mockListing.title}
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{mockListing.title}</h4>
                  <p className="text-sm text-gray-500">{mockListing.location}</p>
                  <p className="text-lg font-medium text-gray-900">${mockListing.price}/day</p>
                </div>
              </div>
            </div>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="start-time" className="block text-sm font-medium text-gray-700">
                    Start Time
                  </label>
                  <input
                    type="time"
                    name="start-time"
                    id="start-time"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="end-time" className="block text-sm font-medium text-gray-700">
                    End Time
                  </label>
                  <input
                    type="time"
                    name="end-time"
                    id="end-time"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700">
                  Vehicle Information
                </label>
                <div className="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="make" className="block text-sm font-medium text-gray-700">
                      Make
                    </label>
                    <input
                      type="text"
                      name="make"
                      id="make"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                      Model
                    </label>
                    <input
                      type="text"
                      name="model"
                      id="model"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                      Color
                    </label>
                    <input
                      type="text"
                      name="color"
                      id="color"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="license" className="block text-sm font-medium text-gray-700">
                      License Plate
                    </label>
                    <input
                      type="text"
                      name="license"
                      id="license"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="special-requests" className="block text-sm font-medium text-gray-700">
                  Special Requests
                </label>
                <textarea
                  id="special-requests"
                  name="special-requests"
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 