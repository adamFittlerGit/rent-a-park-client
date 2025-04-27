import React from 'react';

// Mock booking data
const mockBooking = {
  id: 1,
  listing: {
    title: "Downtown Parking Spot",
    image: "https://via.placeholder.com/300x200",
    location: "123 Main St, City",
    price: 15,
    type: "outdoor",
    size: "standard",
    amenities: ["security", "lighting", "surveillance"]
  },
  date: "2024-04-28",
  startTime: "09:00",
  endTime: "17:00",
  duration: "8 hours",
  totalPrice: 120,
  status: "upcoming",
  vehicle: {
    make: "Toyota",
    model: "Camry",
    color: "Silver",
    license: "ABC123"
  },
  specialRequests: "Please ensure the spot is well-lit",
  payment: {
    method: "Visa",
    last4: "4242",
    status: "paid",
    transactionId: "TRX123456789"
  }
};

export default function ViewBooking() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Booking Details
              </h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                mockBooking.status === 'upcoming' ? 'bg-green-100 text-green-800' :
                mockBooking.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                'bg-red-100 text-red-800'
              }`}>
                {mockBooking.status.charAt(0).toUpperCase() + mockBooking.status.slice(1)}
              </span>
            </div>

            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <img
                  className="h-20 w-20 rounded-lg object-cover"
                  src={mockBooking.listing.image}
                  alt={mockBooking.listing.title}
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{mockBooking.listing.title}</h4>
                  <p className="text-sm text-gray-500">{mockBooking.listing.location}</p>
                  <p className="text-sm text-gray-500">${mockBooking.listing.price}/day</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Booking Information</h4>
                <dl className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Date</dt>
                    <dd className="text-sm text-gray-900">{mockBooking.date}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Time</dt>
                    <dd className="text-sm text-gray-900">{mockBooking.startTime} - {mockBooking.endTime}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Duration</dt>
                    <dd className="text-sm text-gray-900">{mockBooking.duration}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Total Price</dt>
                    <dd className="text-sm text-gray-900">${mockBooking.totalPrice}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900">Vehicle Information</h4>
                <dl className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Make & Model</dt>
                    <dd className="text-sm text-gray-900">{mockBooking.vehicle.make} {mockBooking.vehicle.model}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Color</dt>
                    <dd className="text-sm text-gray-900">{mockBooking.vehicle.color}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">License Plate</dt>
                    <dd className="text-sm text-gray-900">{mockBooking.vehicle.license}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900">Payment Information</h4>
                <dl className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Payment Method</dt>
                    <dd className="text-sm text-gray-900">{mockBooking.payment.method} •••• {mockBooking.payment.last4}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Status</dt>
                    <dd className="text-sm text-gray-900">{mockBooking.payment.status}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Transaction ID</dt>
                    <dd className="text-sm text-gray-900">{mockBooking.payment.transactionId}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900">Parking Spot Details</h4>
                <dl className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Type</dt>
                    <dd className="text-sm text-gray-900">{mockBooking.listing.type}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Size</dt>
                    <dd className="text-sm text-gray-900">{mockBooking.listing.size}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Amenities</dt>
                    <dd className="text-sm text-gray-900">
                      {mockBooking.listing.amenities.map((amenity, index) => (
                        <span key={amenity}>
                          {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                          {index < mockBooking.listing.amenities.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {mockBooking.specialRequests && (
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900">Special Requests</h4>
                <p className="mt-2 text-sm text-gray-500">{mockBooking.specialRequests}</p>
              </div>
            )}

            <div className="mt-6 flex justify-end space-x-3">
              {mockBooking.status === 'upcoming' && (
                <>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Modify Booking
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Cancel Booking
                  </button>
                </>
              )}
              {mockBooking.status === 'completed' && (
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Leave Review
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 