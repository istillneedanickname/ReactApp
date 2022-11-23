import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import {Routes, Route, Link} from 'react-router-dom'

const Footer = () => (
  <div className={styles.Footer}>
<footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><Link to="home" class="nav-link px-2 text-muted">Home</Link></li>
      <li class="nav-item"><Link to="products" class="nav-link px-2 text-muted">Products</Link></li>
      <li class="nav-item"><Link to="#" class="nav-link px-2 text-muted">About</Link></li>
    </ul>
    <p class="text-center text-muted">© 2022 Company, Inc</p>
  </footer>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
