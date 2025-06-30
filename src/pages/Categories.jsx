import React from "react";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "Electronics", image: "https://via.placeholder.com/200x150?text=Electronics" },
  { name: "Clothing", image: "https://via.placeholder.com/200x150?text=Clothing" },
  { name: "Shoes", image: "https://via.placeholder.com/200x150?text=Shoes" },
  { name: "Accessories", image: "https://via.placeholder.com/200x150?text=Accessories" },
  { name: "Beauty", image: "https://via.placeholder.com/200x150?text=Beauty" },
  { name: "Home", image: "https://via.placeholder.com/200x150?text=Home" },
];

const Categories = () => {
  return (
    <section className="bg-white py-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">Shop by Category</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <NavLink
              key={index}
              to={`/products?category=${category.name.toLowerCase()}`}
              className="group block border border-gray-200 rounded-xl shadow hover:shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={category.image}
                alt={`${category.name} category`}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-500 transition">
                  {category.name}
                </h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
