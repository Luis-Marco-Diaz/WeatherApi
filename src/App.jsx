import './App.css';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "bootswatch/dist/lux/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

function App() {

  return (
    <HashRouter>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;