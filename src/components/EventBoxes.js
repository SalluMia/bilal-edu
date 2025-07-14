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

const EventBox = ({ event, big, center }) => {
  const { month, day } = getDateParts(event.date);
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition p-6 flex flex-col sm:flex-row items-center gap-4 group min-h-[10rem] ${center ? 'mx-auto justify-center' : ''}`}
      style={{ minHeight: big ? '10rem' : '8rem', maxWidth: center ? '700px' : '100%' }}
    >
      {/* Image */}
      <img
        src={event.img}
        alt={event.title}
        className="rounded-lg object-cover shadow border w-40 h-40 sm:w-40 sm:h-40 mb-2 sm:mb-0"
        onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
      />
      {/* Content */}
      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
        <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 border border-gray-200 w-16 h-16 sm:w-20 sm:h-20 mb-2 sm:mb-0">
          <span className="text-xs sm:text-sm font-bold text-red-600">{month}</span>
          <span className={`font-extrabold text-gray-800 ${big ? 'text-3xl' : 'text-2xl'}`}>{day}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-green-800 group-hover:underline break-words whitespace-normal w-full" style={{wordBreak:'break-word'}}>{event.title}</h3>
        <div className="text-gray-700 text-sm">{event.location}</div>
        <div className="text-gray-500 text-xs">{event.date}</div>
      </div>
    </a>
  );
};

const EventBoxes = () => (
  <div className="py-12 px-4 bg-green-50">
    <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Current Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <EventBox event={events[0]} />
      <EventBox event={events[1]} />
      <div className="md:col-span-2 flex justify-center">
        <EventBox event={events[2]} big center />
      </div>
    </div>
  </div>
);

export default EventBoxes; 