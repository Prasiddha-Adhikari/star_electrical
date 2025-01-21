import React from 'react';
import one from '../assets/1.jpeg'

const AboutUs = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-orange-600 text-white py-14">
        <div className="container mx-auto px-8 sm:px-16 lg:px-24">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase mb-4">About Us</h1>
          <hr className="border-t-4 border-orange-300 w-[20%] mb-4" />
          <p className="text-lg font-light">
            Learn more about our company and our commitment to quality and service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-8 sm:px-16 lg:px-24 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About Us Text */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-orange-600">Who We Are</h2>
            <p className="text-lg text-gray-600">
              Star Electrical Engineering & Fabricators Pvt. Ltd. was established in 2013. We specialize in a range of Power & Control panels for industries such as chemical, textile, pharmaceuticals, and more. Our mission is to provide innovative solutions with the highest quality standards.
            </p>
            <p className="text-lg text-gray-600">
              Our team of experienced engineers and professionals are dedicated to delivering reliable, energy-efficient solutions for all our clients' needs. We believe in quality, excellence, and client satisfaction above all else.
            </p>
          </div>

          {/* Image or Visual Representation */}
          <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src={one} // Replace with a real image of your company or products
              alt="About Us"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
         {/* Manager & Director Information */}
         <div className="space-y-8">
          <h2 className="text-3xl font-bold text-orange-600">Management Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Manager Info */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-600">Managing Director</h3>
              <p className="text-gray-600">Mukunda Prasad Dahal</p>
              <p className="text-gray-600">Mobile: 00977-98-511-37661</p>
            </div>

            {/* Director Info */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-600">Director</h3>
              <p className="text-gray-600">Kamal Bahadur Lama</p>
              <p className="text-gray-600">Mobile: 00977-98-49-059880</p>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-600">Our Expertise</h2>
          <p className="text-lg text-gray-600">
            We are experts in designing and manufacturing high-quality control panels tailored to the specific needs of our clients. Our extensive experience spans across several industries, including chemical, pharmaceuticals, textile, and more.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <span className="bg-orange-600 text-white p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m0 0a9 9 0 11-5.586-2.586A9 9 0 0117 10z" />
                </svg>
              </span>
              <p className="text-gray-600">Industries served: Chemical, Textile, Heavy Metal, Pharmaceuticals, and more.</p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="bg-orange-600 text-white p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-gray-600">State-of-the-art testing facilities for all types of panel boards.</p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="bg-orange-600 text-white p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l4-4m0 0l4-4m-4 4H4m16 4a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <p className="text-gray-600">Commitment to superior quality and client satisfaction.</p>
            </li>
          </ul>
        </div>
        
      </div>

      {/* Call to Action */}
      <div className="bg-orange-600 text-white py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Partner with Us</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Let us help you elevate your business with our reliable and efficient electrical solutions. Contact us today to discuss how we can meet your specific needs.
        </p>
        <a
          href="/contact-us"
          className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </>
  );
};

export default AboutUs;
