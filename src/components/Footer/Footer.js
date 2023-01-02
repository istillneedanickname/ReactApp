import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import {Routes, Route, Link} from 'react-router-dom'

const Footer = () => (
  <div className={styles.Footer}>
<footer class="py-3 my-4 bg-dark">
    <img src="https://i.ibb.co/B2sjCtK/Footer.png"></img>
    <p class="text-center text-muted">Revell Online Shop</p>
  </footer>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
