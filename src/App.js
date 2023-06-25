import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import OurStore from "./pages/OurStore";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/store" element={<OurStore />} />
        <Route path="/compare" element={<CompareProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
