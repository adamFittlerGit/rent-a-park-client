import React from 'react';

// Mock listing data
const mockListing = {
  id: 1,
  title: "Downtown Parking Spot",
  description: "A secure parking spot in the heart of downtown. Perfect for daily commuters and visitors.",
  image: "https://via.placeholder.com/300x200",
  location: "123 Main St, City",
  price: 15,
  type: "outdoor",
  size: "standard",
  amenities: ["security", "lighting", "surveillance"],
  availability: {
    start: "08:00",
    end: "20:00",
    days: ["monday", "tuesday", "wednesday", "thursday", "friday"]
  }
};

export default function EditListing() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Edit Listing
            </h3>
            <form className="mt-5 space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  defaultValue={mockListing.title}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  defaultValue={mockListing.description}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  defaultValue={mockListing.location}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price per day ($)
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  defaultValue={mockListing.price}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div className="flex items-center">
                    <input
                      id="outdoor"
                      name="type"
                      type="radio"
                      defaultChecked={mockListing.type === "outdoor"}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="outdoor" className="ml-3 block text-sm font-medium text-gray-700">
                      Outdoor
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="indoor"
                      name="type"
                      type="radio"
                      defaultChecked={mockListing.type === "indoor"}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="indoor" className="ml-3 block text-sm font-medium text-gray-700">
                      Indoor
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Size
                </label>
                <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div className="flex items-center">
                    <input
                      id="standard"
                      name="size"
                      type="radio"
                      defaultChecked={mockListing.size === "standard"}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="standard" className="ml-3 block text-sm font-medium text-gray-700">
                      Standard
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="large"
                      name="size"
                      type="radio"
                      defaultChecked={mockListing.size === "large"}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="large" className="ml-3 block text-sm font-medium text-gray-700">
                      Large
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Amenities
                </label>
                <div className="mt-2 space-y-2">
                  {["security", "lighting", "surveillance", "covered", "electric_charging"].map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <input
                        id={amenity}
                        name="amenities"
                        type="checkbox"
                        defaultChecked={mockListing.amenities.includes(amenity)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor={amenity} className="ml-3 block text-sm font-medium text-gray-700">
                        {amenity.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Availability
                </label>
                <div className="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="start-time" className="block text-sm font-medium text-gray-700">
                      Start Time
                    </label>
                    <input
                      type="time"
                      name="start-time"
                      id="start-time"
                      defaultValue={mockListing.availability.start}
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
                      defaultValue={mockListing.availability.end}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Available Days
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-y-2 gap-x-4 sm:grid-cols-3">
                    {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                      <div key={day} className="flex items-center">
                        <input
                          id={day}
                          name="days"
                          type="checkbox"
                          defaultChecked={mockListing.availability.days.includes(day)}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor={day} className="ml-3 block text-sm font-medium text-gray-700">
                          {day.charAt(0).toUpperCase() + day.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
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
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 