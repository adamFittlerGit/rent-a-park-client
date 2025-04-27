import React from 'react';

// Mock user data
const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  joinedDate: "January 2024",
  stats: {
    listings: 3,
    bookings: 12,
    reviews: 8
  }
};

export default function Account() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl text-gray-500">{mockUser.name[0]}</span>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900">{mockUser.name}</h2>
                    <p className="text-sm text-gray-500">Member since {mockUser.joinedDate}</p>
                  </div>
                </div>

                <nav className="mt-8">
                  <div className="space-y-1">
                    <a
                      href="/account/info"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-100"
                    >
                      Account Information
                    </a>
                    <a
                      href="/account/mybookings"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      My Bookings
                    </a>
                    <a
                      href="/account/mylistings"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      My Listings
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Payment Methods
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Notifications
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Account Overview
                </h3>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Listings
                      </dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">
                        {mockUser.stats.listings}
                      </dd>
                    </div>
                  </div>
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Bookings
                      </dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">
                        {mockUser.stats.bookings}
                      </dd>
                    </div>
                  </div>
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Reviews Received
                      </dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">
                        {mockUser.stats.reviews}
                      </dd>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-900">Recent Activity</h4>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-600">
                          Your listing "Downtown Parking Spot" was booked for tomorrow
                        </p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-600">
                          You created a new listing "Secure Garage Space"
                        </p>
                        <p className="text-xs text-gray-500">1 day ago</p>
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