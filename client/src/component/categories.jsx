import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { title: 'Vegetables', products: 52, image: '/assets/collection vegitable.jpg', link: '/category/fruits', },
  { title: 'Fresh Fruits', products: 48, image: '/assets/fruit.png', link: '/category/fruits', },
  { title: 'Milk & Eggs', products: 12, image: '/assets/EggMilk.png', link: '/dairy-bread-eggs', },
  { title: 'Bakery', products: 62, image: '/assets/bekry.png', link: '/category/fruits', },
  { title: 'House Hold', products: 25, image: '/assets/household.png', link: '/category/fruits', },
  { title: 'Dry Fruits', products: 8, image: '/assets/Dryfruits.png', link: '/category/fruits', },
];

const Categories = () => {
  return (
    <section className="px-6 py-10 bg-gray-50">
      <h2 className="text-2xl font-semibold text-green-900 mb-6 text-center">
        Featured Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((item, index) => (
                <Link to={item.link} key={index}>
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-full mx-auto mb-3"
            />
            <h3 className="font-semibold text-green-800">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.products} Products</p>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
