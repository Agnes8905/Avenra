import React, { useEffect, useState } from "react";
import background from "../assets/background.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className={`flex items-center justify-center h-full transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } transition-all duration-700`}
        >
          <h1 className="text-white text-6xl font-bold z-10">Avenra</h1>
        </div>
      </div>

      <div
        className={`bg-white py-16 px-8 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } transition-all duration-700 delay-200`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Avenra</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Avenra is a company that provides world-class services in wellness,
            beauty, and lifestyle. Our mission is to empower people with premium
            products and exceptional experiences. Discover a journey of luxury
            and elegance with Avenra.
          </p>
        </div>
      </div>

      <div
        className={`bg-gray-100 py-16 px-8 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } transition-all duration-700 delay-400`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From personalized skincare to luxury spa treatments, Avenra is here
            to help you redefine beauty. Experience innovative products and
            exclusive services tailored just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
