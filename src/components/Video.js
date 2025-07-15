import React from 'react';
import eduWelcomeVideo from '../assets/eduwelcome.mp4';

const Video = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-center text-green-700 mb-8 drop-shadow-lg">
        Watch Our Introduction
      </h2>
      <div className="w-full max-w-3xl aspect-video rounded-2xl shadow-2xl overflow-hidden border-4 border-green-100 mb-6">
        <video
          src={eduWelcomeVideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster={require('../assets/hero.png')}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="text-gray-800 text-lg max-w-2xl text-center">
        Discover how EduGive CIC is making education creative, practical, and accessible for all. Watch our short video to learn more about our mission, our community, and how you can get involved!
      </p>
    </div>
  );
};

export default Video;
