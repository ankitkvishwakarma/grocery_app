// src/components/StatsSection.jsx
import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaTrophy } from "react-icons/fa";
import { GiFoodTruck } from "react-icons/gi";
import { MdCategory } from "react-icons/md";

const statsData = [
  {
    icon: <FaUsers size={30} />,
    value: 1800,
    suffix: "+",
    label: "Satisfied Clients",
    aos: "fade-up",
  },
  {
    icon: <GiFoodTruck size={30} />,
    value: 362,
    suffix: "+",
    label: "Active Products",
    aos: "fade-up",
  },
  {
    icon: <MdCategory size={30} />,
    value: 30,
    suffix: "+",
    label: "Food Categories",
    aos: "fade-up",
  },
  {
    icon: <FaTrophy size={30} />,
    value: 1800,
    suffix: "+",
    label: "Awards Winning",
    aos: "fade-up",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2"
            data-aos={stat.aos}
          >
            <div className="text-green-500">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-green-400">
              <CountUp end={stat.value} duration={2} />
              {stat.suffix}
            </h3>
            <p className="text-sm text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
