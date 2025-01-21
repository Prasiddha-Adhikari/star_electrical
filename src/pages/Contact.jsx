import React from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/solid';

const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-orange-600 text-white py-14">
        <div className="container mx-auto px-8 sm:px-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase mb-4">Contact Us</h1>
          <hr className="border-t-4 border-orange-300 w-[25%] mx-auto mb-4" />
          <p className="text-lg font-light">
            We are here to assist you. Reach out to us through any of the options below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPinIcon className="h-12 w-12 text-white bg-orange-600 p-3 rounded-full" />
              <div>
                <p className="text-lg font-bold">Our Location</p>
                <p className="text-gray-600">Bhrikutichwk, Boudha - 6, Kathmandu</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <PhoneIcon className="h-12 w-12 text-white bg-orange-600 p-3 rounded-full" />
              <div>
                <p className="text-lg font-bold">Call Us</p>
                <p className="text-gray-600">00977-1-4812884, 977-98-511-37661</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="h-12 w-12 text-white bg-orange-600 p-3 rounded-full" />
              <div>
                <p className="text-lg font-bold">Email Us</p>
                <p className="text-gray-600">starelectrical89@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <PaperAirplaneIcon className="h-12 w-12 text-white bg-orange-600 p-3 rounded-full" />
              <div>
                <p className="text-lg font-bold">Follow Us on Facebook</p>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Visit Page
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-2">
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.3732488760165!2d85.35442481113097!3d27.72845212446072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bcc4c2b36e5%3A0x72e3742d3ccae1b8!2sStar%20electrical%20engineering!5e1!3m2!1sen!2snp!4v1737452713900!5m2!1sen!2snp"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
