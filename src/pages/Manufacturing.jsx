import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip'; // Import the ReactCardFlip component
import one from '../assets/1.jpeg';

const Manufacturing = () => {
  const [flipped, setFlipped] = useState(Array(6).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  const data = [
    {
      title: 'Frames, Load Bearing Members & Large Doors',
      details: '1.6 mm / 2 mm / 2.5 mm',
      image: one,
    },
    {
      title: 'Partitions & Small Doors',
      details: '1.5 mm',
      image: one,
    },
    {
      title: 'Front Back - 2 Side Door Covers',
      details: '1.5 / 2 mm',
      image: one,
    },
    {
      title: 'Gland Plate',
      details: '1.5 / 2 / 2.5 mm',
      image: one,
    },
    {
      title: 'Base or Foundation',
      details: '2 mm sheets channel / 50x50x5 mm Angle',
      image: one,
    },
    {
      title: 'Painting',
      details: `After fabrication and surface finishing, the panel undergoes a
        three/four/seven-tank surface treatment process. After thorough cleaning,
        the surface is powder-coated using high-quality powder paint in the color
        of the customer’s choice. The panels are assembled to the required size and
        switchgear specifications. Hinges are assembled, marking and wiring are completed,
        and busbar work is finalized as per the approved drawing.`,
      image: one,
    },
  ];

  return (
    <div className="manufacturing p-8">
      <h1 className="text-2xl font-bold mb-6">Manufacturing Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full h-64 bg-gray-100 rounded-lg shadow-lg cursor-pointer"
            onClick={() => toggleFlip(index)}
          >
            <ReactCardFlip isFlipped={flipped[index]} flipDirection="horizontal">
              {/* Front Side */}
              <div className="flex flex-col items-center justify-center bg-white p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-1/2 h-1/2 object-contain mb-2"
                />
                <h2 className="text-lg font-semibold text-center">{item.title}</h2>
              </div>

              {/* Back Side */}
              <div className="flex flex-col items-center justify-center bg-blue-100 p-4">
                <h2 className="text-xl font-semibold mb-2 text-center">{item.title}</h2>
                <p className="text-sm text-gray-700 text-center">{item.details}</p>
              </div>
            </ReactCardFlip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manufacturing;
