import React from 'react';
import one from '../assets/1.jpeg'

const Gallery = () => {
  const images = [
    { id: 1, src: one, alt: 'Image 1' },
    { id: 2, src: one, alt: 'Image 2' },
    { id: 3, src: one, alt: 'Image 3' },
    { id: 4, src: one, alt: 'Image 4' },
    { id: 5, src: one, alt: 'Image 5' },
    { id: 6, src: one, alt: 'Image 6' },
    // Add more images as needed
  ];

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white flex flex-col px-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 py-12">
        <h1 className="text-5xl font-extrabold mb-2 tracking-wider">Our Gallery</h1>
        <hr className="border-t-4 border-orange-300 w-[30%] mb-4" />
        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-20 h-2 bg-white rounded-full"></div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-24 px-8 sm:px-12 lg:px-32 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-orange-700 mb-6">Explore Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through our collection of images to see the work we do and the projects we've been a part of.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div key={image.id} className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
