import React, {useState,useEffect} from 'react';
import {Routes, Route, Link, useNavigate,useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import data from "../../api/data.json";

const ProductPage = () => {
  const navigate = useNavigate ()
  const redirect = (param) =>{
    navigate (`/products/${param}`)
  }

  return(
  <div className={styles.ProductPage}>
    <div class="container">


<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

{/* {
          data.classes.map(category => {
            return(
              <div class="col" key={category.name}
              onClick={() => redirect(category.name)} >
          <div class="card shadow-sm bg-dark" style={{width:320}}>
            <img src={category.image} alt="" />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
              <p class="card-text text-white">{category.name}</p>
                <div class="btn-group">
                </div>
              </div>  
            </div>
          </div>
        </div>
            )
          })
        } */}

{
          data.data.map(category => {
            return(
              <div class="col" key={category.name}
              onClick={() => redirect(category.name)} >
          <div class="card shadow-sm bg-dark" style={{width:320, height:360}}>
            <img src={category.image} alt="" />
            <div class="card-body">
              <div>
              <h6 class="card-text text-white text-center">{category.name}</h6>
              <h5 class="card-text text-white">{category.price} €</h5>
              <p class="card-text text-muted">Scale: {category.scale}</p>
                <div class="btn-group">
                </div>
              </div>  
            </div>
          </div>
        </div>
            )
          })
        }
</div>
</div>
  </div>
  )
};

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

export default ProductPage;
