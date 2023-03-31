import './App.css';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "bootswatch/dist/lux/bootstrap.min.css";
import NavBar from "./Components/NavBar";

function App() {

  return (
    <HashRouter>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
         {/* <Route path="/" element={} /> */}
        
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;