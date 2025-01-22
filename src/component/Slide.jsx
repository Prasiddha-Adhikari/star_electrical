import { useState, useEffect } from "react";
import one from "../assets/1.jpeg"; // You can replace with your own images
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"; // Not needed anymore, so you can remove these imports

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const autoSlide = setInterval(() => {
      const isLastSlide = currentSlide === 7; // Assuming 8 slides
      const newIndex = isLastSlide ? 0 : currentSlide + 1;
      setCurrentSlide(newIndex);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoSlide); // Cleanup the interval
  }, [currentSlide]);

  return (
    <div className="w-full relative group">
      {/* Slide Container */}
      <div className="relative w-full h-[550px] overflow-hidden">
        {/* Slide 1 */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 0 ? "translate-x-0" : currentSlide < 0 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img src={one} alt="Canada" className="w-full object-cover h-full" />
        </div>

        {/* Slide 2 */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 1 ? "translate-x-0" : currentSlide < 1 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img src={one} alt="China" className="w-full object-cover h-full" />
        </div>

        {/* Slide 3 */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 2 ? "translate-x-0" : currentSlide < 2 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img src={one} alt="Finland" className="w-full object-cover h-full" />
        </div>

        {/* Slide 4 */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 3 ? "translate-x-0" : currentSlide < 3 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img src={one} alt="Japan" className="w-full object-cover h-full" />
        </div>

        {/* Slide 5 */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 4 ? "translate-x-0" : currentSlide < 4 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img src={one} alt="Korea" className="w-full object-cover h-full" />
        </div>

        {/* Slide 6 */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 5 ? "translate-x-0" : currentSlide < 5 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img src={one} alt="UK" className="w-full object-cover h-full" />
        </div>

        {/* Slide 7 */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 6 ? "translate-x-0" : currentSlide < 6 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img src={one} alt="USA" className="w-full object-cover h-full" />
        </div>

        {/* Slide 8 */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            currentSlide === 7 ? "translate-x-0" : currentSlide < 7 ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img src={one} alt="Sydney" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
