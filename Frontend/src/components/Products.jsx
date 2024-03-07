import React, { useState } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", packSize: "Pack Size 1", category: "Category 1", mrp: 20.0, image: "image1.jpg", status: true },
    { id: 2, name: "Product 2", packSize: "Pack Size 2", category: "Category 2", mrp: 30.0, image: "image2.jpg", status: false },
    // Add more initial data if needed
  ]);

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      packSize: `Pack Size ${products.length + 1}`,
      category: `Category ${products.length + 1}`,
      mrp: 25.0, // Set a default value for demonstration
      image: `image${products.length + 1}.jpg`, // Set a default image for demonstration
      status: true,
    };

    setProducts([...products, newProduct]);
  };

  const updateStatus = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, status: !product.status } : product
    );

    setProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex">
            <SideNav />
            <div className="flex flex-col flex-1 items-center justify-center mb-32">
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr>
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Product Name</th>
                    <th className="border p-2">Pack Size</th>
                    <th className="border p-2">Category</th>
                    <th className="border p-2">MRP</th>
                    <th className="border p-2">Image</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="border p-2">{product.id}</td>
                      <td className="border p-2">{product.name}</td>
                      <td className="border p-2">{product.packSize}</td>
                      <td className="border p-2">{product.category}</td>
                      <td className="border p-2">{product.mrp}</td>
                      <td className="border p-2">{product.image}</td>
                      <td className="border p-2">{product.status ? "Active" : "Inactive"}</td>
                      <td className="border p-2">
                        <button className="mr-2" onClick={() => updateStatus(product.id)}>
                          Toggle Status
                        </button>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="bg-green-500 text-white px-4 py-2" onClick={addProduct}>
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
