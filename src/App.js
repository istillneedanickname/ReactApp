import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Route, Routes, Link, Navigate,useLocation} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import ProductPage from "./components/ProductPage/ProductPage";
import Login from './components/Login/Login';
import axios from "axios"
import React from 'react';
import Box from './components/Box/Box'
import About from './components/About/About';
import SingUp from './components/signUp/signUp';
import AircraftPage from './components/AircraftPage/AircraftPage';
import ShipsPage from './components/ShipsPage/ShipsPage';
import CarsPage from './components/CarsPage/CarsPage';
import Catalog from './components/Catalog/Catalog';
import CatalogItem from './components/CatalogItem/CatalogItem';
import ModelPage from './components/ModelPage/ModelPage';


function App() {
  return (
    <div className="App"> 
      <Header/>

<Routes>
  <Route path="/home" element={<HomePage/>}/>
  <Route path="/product" element={< ModelPage/>}/>
  <Route path="/products" element={<ProductPage/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/login" element={<Login/>}/> 
  <Route path="/signUp" element={<SingUp/>}/>
  <Route path='/catalog' element={<Catalog />} />
  <Route path="/catalog/:id" element={<ProductPage/>} />
  <Route path="/products/aircraft" element={<AircraftPage/>}/>
  <Route path="/products/ships" element={<ShipsPage/>}/>
  <Route path="/products/cars" element={<CarsPage/>}/>
  {/* <Navigate from="/" to="/home" element={<HomePage/>}/> */}
  <Route path="/" element={<Navigate replace to="/home" />} />
</Routes>

<Footer/>
    </div>
  );
}



export default App;
