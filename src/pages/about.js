import React from "react";
import YouTube from "react-youtube";
import background from '../assets/background.jpg';

const About = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
    },
  };
  const videoId = "OrxN-3TBSM8";

  return (
    <div>
      <div
        className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl md:text-6xl font-bold z-10 text-center">
          About Us
        </h1>
      </div>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Learn More About Our Company
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We are a passionate team committed to delivering high-quality
            services to our clients. Our mission is to help businesses thrive
            with innovative solutions and creative strategies.
          </p>

          <div className="flex justify-center items-center mb-8">
            <div className="w-full max-w-[720px] aspect-w-16 aspect-h-9">
              <YouTube
                videoId={videoId}
                opts={videoOptions}
                className="w-full h-full"
              />
            </div>
          </div>

          <p className="text-lg text-gray-600">
            Watch the video to see our product in action and get a better
            understanding of its features.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
