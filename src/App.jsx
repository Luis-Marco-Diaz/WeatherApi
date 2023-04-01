import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "bootswatch/dist/lux/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import ProductsDetail from "./Pages/ProductDetalis";
import Login from "./Pages/Login";
import Favorites from "./Pages/Favorites";

function App() {

  return (
    <HashRouter>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<ProductsDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;