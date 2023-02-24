import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import styles from "./News.scss";

const News = () => {
  return (
    <div className={styles.News}>
      <div class="allText">
        <h2>Newsettler</h2>
        <img class="newsImg" src="https://www.revell.de/out/pictures/ddmedia/newsletter_header_en.jpg"/>
        <h2 class="header">Sign up now for the Revell newsletter and get a 10,- EUR voucher* for our online shop.</h2>
        <div class="form">
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <label for="exampleInputEmail1" class="form-label">Data protection: * </label>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Yes, I have read the <Link to="/privacy-policy">data protection</Link> statement of Revell and I do agree to it.</label>
  </div>
  <button type="submit" class="btn btn-primary">Subscribe</button>
  </form>
  <div class="fields">Fields marked with * are mandatory</div>
  <div class="par1">The voucher can be redeemed once for a minimum order value of 30,- € and is not redeemable. Vouchers cannot be combined with other vouchers and promotions from
Revell and are only valid for the Revell Online Shop.</div>
  <div class="par2">*We regret that voucher is not valid for UK/southern Ireland residents and shipment to the UK/southern Ireland is currently not possible. Valid until 31.07.2023</div>

        </div>
      </div>
    </div>
  );
};

News.propTypes = {};

News.defaultProps = {};

export default News;
