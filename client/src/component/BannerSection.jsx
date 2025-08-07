import React from "react";

const banners = [
  {
    id: 1,
    title: "Fresh vegetable & Fruit basket",
    subtitle: "Super Product for you",
    image: "/assets/banner-img-2-1.png", 
    bgColor: "bg-orange-100",
    textColor: "text-orange-900",
  },
  {
    id: 2,
    title: "Best Cuisine From the sea of America",
    subtitle: "Premium seafood available everyday!",
    image: "/assets/banner-img-1.png", 
    bgColor: "bg-gray-800",
    textColor: "text-white",
  },
];

const BannerSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className={`relative flex-1 h-48 md:h-56 rounded-xl overflow-hidden group ${banner.bgColor} transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
        >
          {/* Text */}
          <div className={`absolute top-5 left-5 z-10 ${banner.textColor}`}>
            <h2 className="text-lg md:text-xl font-bold">{banner.title}</h2>
            <p className="text-sm mt-1">{banner.subtitle}</p>
          </div>

          {/* Image */}
          <img
            src={banner.image}
            alt={banner.title}
            className="absolute right-0 bottom-0 h-full w-auto max-w-[70%] object-cover transition duration-300 group-hover:blur-sm"
          />
        </div>
      ))}
    </div>
  );
};

export default BannerSection;
