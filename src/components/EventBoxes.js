import React from 'react';

const fallbackImg = process.env.PUBLIC_URL + '/logo192.png';

const events = [
  {
    title: 'Minecraft Coding Course for Kids (Ages 7-10)',
    date: 'Saturday, September 6, 2025 at 11:00 AM BST',
    location: '259 Stratford Rd',
    url: 'https://www.eventbrite.co.uk/e/1483694944519?aff=oddtdtcreator',
    img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1028663823%2F2605837658151%2F1%2Foriginal.20250512-135631?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C308%2C4320%2C2160&s=ff79cf93a9c98fdd53ee6ecb94d59b71',
  },
  {
    title: 'EDU GIVE Presents: Computer for Beginners',
    date: 'Saturday, September 6, 2025 at 1:00 PM BST',
    location: '259 Stratford Rd',
    url: 'https://www.eventbrite.co.uk/e/1485179865959?aff=oddtdtcreator',
    img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1071809663%2F2831799042701%2F1%2Foriginal.20250711-194428?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.797348484848&fp-y=0.293687712711&s=57b998146d7b6c46248ee6b14ad7248f',
  },
  {
    title: 'Digital Photography For Beginners',
    date: 'Wednesday, September 10, 2025 at 11:00 AM BST',
    location: '259 Stratford Rd',
    url: 'https://www.eventbrite.co.uk/e/1487907815329?aff=oddtdtcreator',
    img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1072825793%2F2831799042701%2F1%2Foriginal.20250714-083919?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.609848484848&fp-y=0.450842696629&s=2beec5b3127a22edc87b542a2a880ba9',
  },
];

function getDateParts(dateString) {
  const [weekday, month, day, year] = dateString.match(/([A-Za-z]+), ([A-Za-z]+) (\d+), (\d+)/).slice(1);
  return { month: month.slice(0,3).toUpperCase(), day };
}

const EventBox = ({ event }) => {
  const { month, day } = getDateParts(event.date);
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date Badge */}
        <div className="flex items-center justify-center rounded-lg bg-green-50 border border-gray-200 w-16 h-16 mb-4">
          <div className="text-center">
            <span className="text-xs font-bold text-red-600 block">{month}</span>
            <span className="text-2xl font-extrabold text-gray-800">{day}</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
          {event.title}
        </h3>
        
        {/* Location and Date */}
        <div className="text-sm text-gray-600 mb-4 flex-grow">
          <p className="mb-1">{event.location}</p>
          <p>{event.date}</p>
        </div>
        
        {/* Learn Now Button - pushed to bottom */}
        <button className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 uppercase tracking-wide mt-auto">
          Learn Now
        </button>
      </div>
    </a>
  );
};

const EventBoxes = () => (
  <div className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
    <h2 className="text-4xl font-extrabold text-center text-green-700 mb-12 drop-shadow-lg">Current Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {events.map((event, index) => (
        <EventBox key={index} event={event} />
      ))}
    </div>
  </div>
);

export default EventBoxes; 