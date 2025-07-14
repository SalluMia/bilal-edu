import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventBoxes from './components/EventBoxes';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-gray-800 scroll-smooth">
      <Navbar />
      <div id="home"><Hero /></div>
      <EventBoxes />
      <div id="about"><About /></div>
      <div id="whatwedo"><WhatWeDo /></div>
      <div id="contact"><Footer /></div>
    </div>
  );
}
export default App;