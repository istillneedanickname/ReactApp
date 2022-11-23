import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Route, Routes, Link} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import ProductPage from "./components/ProductPage/ProductPage";
import Login from './components/Login/Login';
import axios from "axios"
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}



export default App;
