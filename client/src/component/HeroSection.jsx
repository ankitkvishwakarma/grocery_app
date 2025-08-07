import CountdownTimer from "../component/Livesale/CountdownTimer";
import leftImage from "/assets/download.jpeg";
import rightImage from "/assets/men.png";
import fruitBg from "/assets/Apple Slice Photos - Download Free High-Quality Pictures _ Freepik.jpeg"; // Decorative background

const HeroSection = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 4);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12 px-4"
      style={{
        backgroundImage: `url(${fruitBg})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Image */}
        <div className="h-full">
          <img
            src={leftImage}
            alt="Left"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Center Content */}
        <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-center items-center text-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Summer <span className="text-green-600">Discount</span>
          </h2>
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Get 50% off - Limited Time Offer!
          </p>
          <CountdownTimer targetDate={targetDate} />
          <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
            Shop Now →
          </button>
        </div>

        {/* Right Image */}
        <div className="h-full">
          <img
            src={rightImage}
            alt="Right"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
