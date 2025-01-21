import React from 'react';
import one from '../assets/1.jpeg';

const WhyUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white flex flex-col px-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 py-12 relative">
          <h1 className="text-5xl font-extrabold mb-2 tracking-wider">
            Why Choose Us
          </h1>
          <hr className="border-t-4 border-orange-300 w-[45%] mb-4" />
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-20 h-2 bg-white rounded-full"></div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 px-8 sm:px-12 lg:px-32 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-orange-700 mb-6">Our Specialties</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in offering tailor-made electrical solutions with an emphasis on quality, cost-effectiveness, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Well-Designed Manufacturing Unit</h3>
            <p className="text-gray-700">
              Our manufacturing units are equipped with the latest technology to ensure precision and quality in all our products.
            </p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Timely Delivery</h3>
            <p className="text-gray-700">
              We understand the importance of time, and we strive to deliver high-quality products within the agreed-upon timeframe.
            </p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Cost Effectiveness</h3>
            <p className="text-gray-700">
              Our solutions are designed to provide value for money, ensuring both performance and cost-effectiveness in the long run.
            </p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Customized production facility</h3>
            <p className="text-gray-700">
              Our state-of-the-art production facility allows for tailored solutions that match the specific needs of every client, ensuring precision and quality in every product.
            </p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Our products are according to client's requirements</h3>
            <p className="text-gray-700">
              We work closely with our clients to design and manufacture products that align with their exact specifications, ensuring optimal performance and satisfaction.
            </p>
          </div>
        </div>
        
        {/* Adding Images Outside the List */}
        <div className="flex justify-center gap-8 mt-16 flex-wrap">
          <div className="flex-none w-full md:w-1/3">
            <img src={one} alt="Facility" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="flex-none w-full md:w-1/3">
            <img src={one} alt="Manufacturing Process" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="flex-none w-full md:w-1/3">
            <img src={one} alt="Electrical Solutions" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Scope of Supply and Services Section */}
      <section className="py-24 px-8 sm:px-12 lg:px-32 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-orange-700 mb-12 text-center">Scope of Supply and Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Electrical Components', description: 'High-quality electrical components for a variety of industrial applications.' },
              { title: 'Distribution Boards', description: 'Customized distribution boards to meet your specific electrical needs.' },
              { title: 'Low Voltage Panels', description: 'Reliable and durable low voltage panels to ensure safe and efficient power distribution.' },
              { title: 'Control Panels', description: 'Our control panels are designed to give you full control over your electrical systems.' },
              { title: 'Mimic Display Panels', description: 'Advanced mimic display panels for monitoring and controlling electrical systems.' },
              { title: 'Motor Control Centers', description: 'Motor control centers for controlling and protecting motors in various applications.' },
              { title: 'Lighting Control Panels', description: 'Panels designed to control lighting systems efficiently and effectively.' },
              { title: 'Annunciator Panels', description: 'High-quality annunciator panels for easy monitoring of electrical systems.' },
              { title: 'Variable Speed Drive Panels (VFDs)', description: 'Variable frequency drives (VFDs) for controlling the speed of electric motors.' },
              { title: 'ATS Panels', description: 'Automatic Transfer Switch (ATS) panels for power failure management.' },
              { title: 'Feeder Pillars', description: 'Feeder pillars designed for electrical distribution and protection.' },
              { title: 'UPS Systems', description: 'Uninterrupted Power Supply (UPS) systems for reliable backup power.' },
              { title: 'Battery Charger Panels', description: 'Efficient battery charger panels to ensure a steady power supply.' },
              { title: 'Automatic P.F Control Panels (APFC)', description: 'APFC panels designed to improve power factor and enhance system efficiency.' },
              { title: 'LT Bus Ducts', description: 'Low Voltage Bus Ducts for efficient power distribution.' },
              { title: 'Junction Boxes', description: 'Junction boxes for safe and organized electrical connections.' },
              { title: 'Soft Starter Panels', description: 'Panels for soft starting of motors to avoid electrical surge.' },
              { title: 'Relay Panels', description: 'Relay panels for controlling and protecting electrical circuits.' },
              { title: 'HVAC Control Panels', description: 'Control panels for HVAC systems to maintain optimal performance.' },
              { title: 'Marshalling Cabinets', description: 'Custom marshalling cabinets for electrical control and distribution systems.' },
              { title: 'Isolator Enclosures', description: 'Isolator enclosures for electrical safety and system protection.' },
              { title: 'Bus Bar Enclosures', description: 'Bus bar enclosures to safely house electrical bus bars.' },
              { title: 'Enclosed Circuit Breakers', description: 'Circuit breakers housed in enclosures to prevent electrical faults.' },
              { title: 'Special Purpose Panels', description: 'Custom-designed panels for specialized electrical requirements.' },
              { title: 'PLC Panels', description: 'PLC panels for automation and control of industrial processes.' },
              { title: 'Electrical Maintenance', description: 'Comprehensive electrical maintenance services to ensure system reliability.' },
              { title: 'Panel Repair Services', description: 'Expert panel repair services for restoring your electrical systems.' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
