import React, { useState } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const Categories = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", description: "Description 1", status: true },
    { id: 2, name: "Product 2", description: "Description 2", status: false },
    // Add more initial data if needed
  ]);

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      description: `Description ${products.length + 1}`,
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
                    <th className="border p-2">Product Description</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="border p-2">{product.id}</td>
                      <td className="border p-2">{product.name}</td>
                      <td className="border p-2">{product.description}</td>
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

export default Categories;
