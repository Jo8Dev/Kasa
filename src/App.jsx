import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import React from "react";


function App() {
  return (
    <MainLayout>
      <Outlet /> {/* Affiche dynamiquement les pages */}
    </MainLayout>
  );
}

export default App;
