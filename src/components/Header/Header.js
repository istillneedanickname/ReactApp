import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.scss";
import { Routes, Route, Link } from "react-router-dom";

const Header = () => (
  <div className={styles.Header}>
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            ></svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <a>
              <Link to="home">
                <img
                  class="logo"
                  src="https://www.revell.de/out/revell/img/logo.png"
                  width="100px"
                ></img>
              </Link>
            </a>
            <li>
              <Link to="home" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="products" className="nav-link px-2 text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="about" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
