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

const EventBox = ({ event, big }) => {
  const { month, day } = getDateParts(event.date);
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center bg-green-50 hover:bg-green-100 transition rounded-xl shadow p-6 border border-green-100 group ${big ? 'md:p-10 md:h-48' : 'md:p-8 md:h-40'}`}
    >
      {/* Date block */}
      <div className={`flex flex-col items-center justify-center rounded-lg bg-white border border-gray-200 mr-6 ${big ? 'w-20 h-20' : 'w-16 h-16'}`}>
        <span className="text-sm font-bold text-red-600">{month}</span>
        <span className={`font-extrabold text-gray-800 ${big ? 'text-3xl' : 'text-2xl'}`}>{day}</span>
      </div>
      {/* Event image */}
      <img
        src={event.img}
        alt={event.title}
        className={`rounded-lg object-cover shadow mr-6 border ${big ? 'w-28 h-28' : 'w-20 h-20'}`}
        onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
      />
      {/* Event details */}
      <div className="flex-1 min-w-0">
        <h3 className={`font-semibold text-green-800 group-hover:underline mb-2 truncate ${big ? 'text-2xl' : 'text-lg'}`}>{event.title}</h3>
        <div className={`text-gray-700 mb-1 truncate ${big ? 'text-base' : 'text-sm'}`}>{event.location}</div>
        <div className={`text-gray-500 truncate ${big ? 'text-sm' : 'text-xs'}`}>{event.date}</div>
      </div>
    </a>
  );
};

const EventBoxes = () => (
  <div className="py-12 px-4 bg-white">
    <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Current Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <EventBox event={events[0]} />
      <EventBox event={events[1]} />
      <div className="md:col-span-2">
        <EventBox event={events[2]} big />
      </div>
    </div>
  </div>
);

export default EventBoxes; 