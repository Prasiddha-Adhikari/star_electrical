import React from 'react';
import Hero from '../component/Hero';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      {/* <section className="bg-gradient-to-r from-orange-50 to-white py-14 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-60">
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
          <span className="text-gray-500">Hero Image Placeholder</span>
        </div>
      </section> */}

      {/* Company Policy Section */}
      <section className="bg-white pb-20 pt-10 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-60">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-orange-700 mb-6">Our Policy</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            Our policy is centered on providing exceptional quality products and services
            that meet stringent safety and regulatory standards. We ensure customer satisfaction
            through consistent quality and reliability.
          </p>
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
            {/* Placeholder for Policy Image */}
            <span className="text-gray-500">Policy Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* Scope of Supply Section */}
      {/* <section className="bg-gray-50 py-20 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-60">
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-orange-700 mb-6">Scope of Supply and Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Electrical Components',
              'Distribution Boards',
              'Low Voltage Panels',
              'Control Panels',
              'Mimic Display Panels',
              'Motor Control Centers',
              'Lighting Control Panels',
              'Annunciator Panels',
              'Variable Speed Drive Panels (VFDs)',
              'ATS Panels',
              'Feeder Pillars',
              'UPS Systems',
              'Battery Charger Panels',
              'Automatic P.F Control Panels (APFC)',
              'LT Bus Ducts',
              'Junction Boxes',
              'Soft Starter Panels',
              'Relay Panels',
              'HVAC Control Panels',
              'Marshalling Cabinets',
              'Isolator Enclosures',
              'Bus Bar Enclosures',
              'Enclosed Circuit Breakers',
              'Special Purpose Panels',
              'PLC Panels',
              'Electrical Maintenance',
              'Cable Installation & Termination',
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Major Clients Section */}
      <section className="bg-orange-50 py-20 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-60">
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-orange-700 mb-6">Major Clients</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              'Delight Electrical Engineering, Santinagar, Kathmandu',
              'Computer Networks Associate, Naxal, Kathmandu',
              'Mahakali Electric & Trade, Mahendranagar',
              'Sunrise Apartment, Kathmandu',
              'Jalpa Infrastructure Company, Kathmandu',
              'Down Town Housing Company',
              'Celltronic Telesolution Pvt Ltd, Thamel, Kathmandu',
              'Akash Light, Sundhara, Kathmandu',
              'Machinery & Electric Complex, Sundhara, Kathmandu',
              'Janapath Construction P Ltd, Kathmandu',
              'New Aacharya Electrical, Pokhara',
              'Sunkeshari Nirman Sewa, Bhaktapur',
              'Life Time Engineering Solutions, Kathmandu',
              'Khwopa College of Engineering, Liwali, Bhaktapur',
              'Mangala Cement Udhyog, Dhading',
              'Power Electric Concern, Lalitpur',
              'ANK Sky J/V, Kathmandu',
              'AG Smart International, Dallu, Kathmandu',
              'Nepal Medical College & Teaching Hospital, Jorpati, Kathmandu',
              'Gaura Atlus Construction Pvt. Ltd., Maharajgunj, Kathmandu',
            ].map((client, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Major Projects Section */}
      <section className="bg-white py-20 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-60">
        <div>
          <h3 className="text-3xl font-bold text-orange-700 mb-6">Major Projects</h3>

          {/* Construction Projects */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-orange-600 mb-4">Construction Projects</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Sunrise Apartment',
                'Jalpa Infrastructure P Ltd.',
                'CE Construction P Ltd.',
                'Janapath Construction P Ltd.',
                'Sunkeshari Nirman Sewa P Ltd.',
                'Ank Sky J/V',
                'Gaura Atlas Construction P Ltd.',
                'Sairam Construction P Ltd.',
                'ZCGIEC ASHISH OM SAIRAM J/V, Lalitpur',
              ].map((project, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow"
                >
                  {project}
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Projects */}
          <div>
            <h4 className="text-2xl font-semibold text-orange-600 mb-4">Institutional Projects</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Presidential Business College, Thapagaun, Kathmandu',
                'Shankharapur Poly Tech, Shankhu, Kathmandu',
                'Khwopa College of Engineering, Bhaktapur',
                'Nepal Medical College Teaching Hospital, Kathmandu',
                'Godawari Residential School, Godawari',
                'B&C Teaching Hospital, Birtamod, Jhapa',
                'Purbanchal Cancer Hospital, Birtamod, Jhapa',
                'Grande Hospital, Dhapasi, Kathmandu',
                'Bhaktapur Cancer Hospital, Bhaktapur',
                'Kathmandu School of Law, Bhaktapur',
              ].map((institution, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow"
                >
                  {institution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
