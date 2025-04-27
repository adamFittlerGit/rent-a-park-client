import React from 'react';

// Mock data for demonstration
const mockListing = {
  id: 1,
  title: "Downtown Parking Spot",
  location: "123 Main St, City",
  price: "$15/day",
  description: "Convenient parking spot in the heart of downtown. Close to shopping, restaurants, and public transportation. 24/7 access with secure entry.",
  type: "Garage",
  images: [
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400"
  ],
  amenities: [
    "24/7 Access",
    "Security Cameras",
    "Well Lit",
    "Electric Vehicle Charging"
  ],
  owner: {
    name: "John Doe",
    rating: 4.8,
    reviews: 42
  }
};

export default function ViewListing() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={mockListing.images[0]}
                alt={mockListing.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              <h1 className="text-3xl font-bold text-white">{mockListing.title}</h1>
              <p className="text-white">{mockListing.location}</p>
            </div>
          </div>

          <div className="px-4 py-5 sm:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900">About this parking spot</h2>
                  <p className="text-gray-600">{mockListing.description}</p>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900">Amenities</h3>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {mockListing.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-2 text-gray-600">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">{mockListing.price}</span>
                    <span className="text-sm text-gray-500">per day</span>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Book Now
                    </button>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-900">Hosted by</h4>
                    <div className="mt-2 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">{mockListing.owner.name[0]}</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{mockListing.owner.name}</p>
                        <div className="flex items-center">
                          <svg
                            className="h-4 w-4 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm text-gray-600">
                            {mockListing.owner.rating} ({mockListing.owner.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
