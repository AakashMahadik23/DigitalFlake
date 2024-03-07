// App.js
import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/Home.jsx";
import Categories from "./components/Categories.jsx";
import LoginPage from './components/LoginPage';
import Products from "./components/Products.jsx";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </Router>
  );
};

export default App;