import React from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ModelPage.scss';
import data from "../../api/data.json"

const ModelPage = () => (
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

  </div>
);

ModelPage.propTypes = {};

ModelPage.defaultProps = {};

export default ModelPage;