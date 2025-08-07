import BlogCard from "./blog/BlogCard";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6", // replace with real images
    category: "Shopping Tips",
    title: "How to Create a Grocery Shopping List: Stay Organized...",
    date: "14 August 2024",
    author: "Jenny Alexander",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e17b",
    category: "Seasonal Guides",
    title: "Summer Produce Guide: Fresh Fruits and Vegetables to Enjoy",
    date: "13 August 2024",
    author: "Jenny Alexander",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606813902784-d7f444cab41b",
    category: "Healthy Eating",
    title: "Top 10 Superfoods for a Balanced Diet: Boost Your Health",
    date: "12 August 2024",
    author: "Jenny Alexander",
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-gray-500">News & Blogs</p>
            <h2 className="text-3xl font-bold">
              Our Latest <span className="text-green-600">News & Blogs</span>
            </h2>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium">
            View All →
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
