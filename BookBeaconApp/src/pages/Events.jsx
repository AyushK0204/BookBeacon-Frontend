import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: "Author's Talk",
    date: "2024-10-31",
    time: "2:00 PM - 3:00 PM",
    location: "Auditorium",
    description: "Join us for an informative talk.",
  },
  {
    id: 2,
    title: "Health Session",
    date: "2024-10-25",
    time: "10:00 AM - 11:00 AM",
    location: "Auditorium",
    description: "Must attend to motivate yourself to be healthy",
  },
  {
    id: 3,
    title: "Technology Era",
    date: "2024-10-26",
    time: "10:00 AM - 11:00 AM",
    location: "Auditorium",
    description: "A session to gain some insightful knowledge about IT trends.",
  },
  {
    id: 5,
    title: "Management Techniques",
    date: "2024-10-27",
    time: "11:00 AM - 12:00 PM",
    location: "Auditorium",
    description: "A session to give tips and tricks related to management.",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen  py-10 pl-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-violet-800 mb-6 animate-pulse text-center">Upcoming Events</h1>
        
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">{event.title}</h2>
            <p className="text-gray-600">{event.date} | {event.time}</p>
            <p className="text-gray-600 mb-4">Location: {event.location}</p>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <Link 
              to={`/register/${event.id}`} 
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Register Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;