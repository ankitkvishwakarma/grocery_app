import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FaqAccordion from './FaqAccordion';


const Footer = () => {
  return (
    <footer
      className="bg-green-900 text-white px-4 sm:px-6 py-10 bg-[url('/assets/why-choose-one-shape-2.png')] bg-no-repeat bg-center "
    >
      <div className="bg-black/60 p-6 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="text-lg font-semibold mb-2">Grocery.</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="flex space-x-4 text-green-500 text-xl mt-4">
              <FaFacebookF className="hover:text-blue-600 transition" />
              <FaInstagram className="hover:text-pink-500 transition" />
              <FaTwitter className="hover:text-sky-500 transition" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Customer Services</h4>
            <ul className="space-y-1 text-gray-300">
              <li><Link to="#">My Account</Link></li>
              <li><Link to="#">Track Your Order</Link></li>
              <li><Link to="#">Return</Link></li>
              <li><Link to="/FaqAccordion">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact Info</h4>
            <p className="text-gray-300">+0123-456-789</p>
            <p className="text-gray-300">10M!nt@gmail.com</p>
            <p className="text-gray-300">8502 Main Rd. Inglewood, Maine 98380</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; 2025 Grocery Website Design. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
