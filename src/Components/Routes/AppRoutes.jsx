import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DetailsProduct from "../Pages/Details/DetailsProduct";
import FormProduct from "../Pages/Add/FormProduct";
import ProdutsPage from "../Pages/Home/ProdutsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProdutsPage />} />
      <Route path="/detailsproduct/:productId"  element={<DetailsProduct />} />
      <Route path="/formproduct" element={<FormProduct />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
