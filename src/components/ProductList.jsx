import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = ({ search = "" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.error("❌ Fetch error:", err);
        setError("❌ Failed to fetch products.");
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 QuickShop Products</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-sm text-gray-500">${product.price}</p>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <p className="text-xs text-gray-400 mt-1">📦 Stock: {product.stock}</p>
              <p className="text-xs text-gray-400">🏷️ Category: {product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
