import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", price: "", image: "", stock: "", category: "" });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => alert("❌ Failed to fetch products"));
  };
  const totalRevenue = products.reduce((sum, p) => sum + p.price * (p.soldCount || 0), 0);
const totalSold = products.reduce((sum, p) => sum + (p.soldCount || 0), 0);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/products", form)
      .then(() => {
        fetchProducts();
        setForm({ title: "", description: "", price: "", image: "", stock: "", category: "" });
      });
  };

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`, {
  headers: { Authorization: `Bearer ${token}` }
})
.then(() => fetchProducts());

  };

  return (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-4">Admin: Manage Products</h2>

    {/* 📊 Stats Card */}
    <div className="bg-yellow-50 p-4 mb-6 rounded shadow text-sm">
      <p><strong>Total Revenue:</strong> ₹{totalRevenue.toFixed(2)}</p>
      <p><strong>Total Items Sold:</strong> {totalSold}</p>
    </div>

    {/* ➕ Product Form */}
    <form onSubmit={handleSubmit} className="space-y-2 bg-white p-4 rounded shadow-md mb-6">
      {/* form inputs here... */}
    </form>

    {/* 🧾 Product List */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded shadow">
          <img src={p.image} alt={p.title} className="w-full h-32 object-cover rounded" />
          <h3 className="font-bold">{p.title}</h3>
          <p>${p.price}</p>
          <p>{p.description}</p>
          <p className="text-sm text-gray-500">Stock: {p.stock}</p>
          <p className="text-sm text-gray-500">Sold: {p.soldCount || 0}</p>
          <button
            onClick={() => deleteProduct(p.id)}
            className="mt-2 text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
);

};

export default AdminDashboard;
