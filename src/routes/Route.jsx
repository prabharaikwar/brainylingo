import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Route = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/design-one" element={<DesignOne />} />
        <Route exact path="/design-two/:id" element={<DesignTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Route;
