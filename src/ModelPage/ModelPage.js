import React from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ModelPage.scss';
import data from "../api/data.json"

const ModelPage = () => {
  const navigate = useNavigate ()
  const redirect = (param) =>{
    navigate (`/products/${param}`)
  }

  return(
  <div className={styles.ModelPage}>
    <div class="image">
      <img src="https://lightwidget.com/wp-content/uploads/local-file-not-found-480x488.png"></img>
    </div>

    <div class="modelInfo">
      <h1>Model Name</h1>
      <p class="price">Price €</p>
      <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
      <input class="number" type="number" placeholder=" 1" step="10" min="0" max="100" />
      <button type="button" class="btn btn-outline-light"> Add to Cart</button>
    </div>

    <div class="relatedProd">
      <h1 class="relatedText">Related Products</h1>
      <div class="relatedCards">
      {
          data.relatedProd.map(category => {
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

ModelPage.propTypes = {};

ModelPage.defaultProps = {};

export default ModelPage;