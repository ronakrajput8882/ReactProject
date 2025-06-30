import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
  title: "",
  description: "",
  price: "",
  image: "",
  stock: 0,
  category: "",
});

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "quickshop_upload"); // Make sure your Cloudinary uses this preset
    setUploading(true);

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dq5ulwwby/image/upload",
        data
      );
      setFormData({ ...formData, image: res.data.secure_url });
    } catch (err) {
      console.error("Image upload failed:", err);
      setMessage("❌ Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem("token");

    await axios.post("http://localhost:5000/api/products", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setMessage("✅ Product added!");
    setFormData({ name: "", description: "", price: "", image: "" });
  } catch (err) {
    console.error("Failed to add product:", err);
    setMessage("❌ Failed to add product");
  }
};


  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      {message && <p className="mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
  type="text"
  name="title"
  placeholder="Product Title"
  value={formData.title}
  onChange={handleChange}
  className="w-full p-2 border rounded"
  required
/>
<input
  type="number"
  name="stock"
  placeholder="Stock"
  value={formData.stock}
  onChange={handleChange}
  className="w-full p-2 border rounded"
/>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input type="file" onChange={handleImageUpload} className="w-full p-2" />
        {formData.image && (
          <img src={formData.image} alt="Preview" className="h-40 object-contain rounded" />
        )}
        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {uploading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
