import React from "react";
import background from "../assets/background.jpg";

const Services = () => {
  return (
    <div>
      <div
        className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl md:text-6xl font-bold z-10 text-center">
          Our Services
        </h1>
      </div>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Skincare Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                We provide personalized skincare consultations to help you find
                the perfect products for your skin type and concerns. Let us
                help you achieve radiant and healthy skin.
              </p>
              <a href="/contact" className="text-blue-600 hover:text-blue-800">
                Learn More
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Makeup Application Services
              </h3>
              <p className="text-gray-600 mb-4">
                Our professional makeup artists provide services for special
                occasions, weddings, and everyday looks. We use premium products
                to ensure a flawless and long-lasting finish.
              </p>
              <a href="/contact" className="text-blue-600 hover:text-blue-800">
                Learn More
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Beauty Workshops
              </h3>
              <p className="text-gray-600 mb-4">
                Join our beauty workshops to learn professional skincare and
                makeup techniques. Perfect for beginners or anyone looking to
                improve their skills and confidence.
              </p>
              <a href="/contact" className="text-blue-600 hover:text-blue-800">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Find Us on the Map
          </h2>
          <div style={{ width: "100%" }}>
            <iframe
              title="Google Map"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps</a>
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
