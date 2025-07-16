import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Video from './components/Video';
import EventBoxes from './components/EventBoxes';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';
// import UnderConstruction from './components/UnderConstruction';

function App() {
  return (
    <div className="font-sans bg-white text-gray-800 scroll-smooth">
      <Navbar />
      <div id="home"><Hero /></div>
      {/* <Video /> */}
      <EventBoxes />
      <div id="about"><About /></div>
      <div id="what we do"><WhatWeDo /></div>
      {/* <div id="underconstruction"><UnderConstruction /></div> */}
      <div id="contact"><Footer /></div>
    </div>
  );
}
export default App;