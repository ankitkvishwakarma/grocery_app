import React from "react";

const BlogCard = ({ image, category, title, date, author }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute bottom-2 left-2 bg-yellow-400 text-black text-sm px-3 py-1 rounded-full font-medium">
          {category}
        </span>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">
          {author} <span className="mx-1">•</span> {date}
        </div>
        <h3 className="font-semibold text-lg mb-2 leading-snug">
          {title}
        </h3>
        <a
          href="#"
          className="text-green-600 hover:underline font-medium text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
