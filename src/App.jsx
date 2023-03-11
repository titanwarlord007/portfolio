import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Shared from "./Shared";
import { links } from "./data";
import Preloader from "./components/Preloader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  window.onload = function () {
    setIsLoading(false);
  };
  // useEffect(() => {
  //   // !isLoading
  //   <style>

  //   </style>
  // },[isLoading])
  return (
    isLoading ? (
      <Preloader />
    ) : (
      // <body className="bg-img">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Shared />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    // </body>
    )

  );
}
