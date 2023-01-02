import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShipsPage.module.scss';

const ShipsPage = () => (
  <div className={styles.ShipsPage}>
     <div class="container">


<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
<div class="col">
    <div class="card shadow-sm bg-dark">
      <img src="https://www.revell.de/out/pictures/generated/product/1/540_540_88/05422_kmw_cutty_sark.jpg"></img>
      <div class="card-body">
      <h6 class="card-text text-white">Cutty Shark</h6>
      <h5 class="card-text text-white">92,99 €</h5>
      <p class="card-text text-muted">Scale: 1:96</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm bg-dark">
      <img src="https://www.revell.de/out/pictures/generated/product/1/540_540_88/65408_model_set_hms_victory_01.jpg"></img>
      <div class="card-body">
      <h6 class="card-text text-white">Model Set HMS Victory</h6>
      <h5 class="card-text text-white">36,99 €</h5>
      <p class="card-text text-muted">Scale: 1:225</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm bg-dark">
      <img src="https://www.revell.de/out/pictures/generated/product/1/540_540_88/05432_gorch_fock_01.jpg"></img>
      <div class="card-body">
      <h6 class="card-text text-white">Gorch Fock</h6>
      <h5 class="card-text text-white">19,99 €</h5>
      <p class="card-text text-muted">Scale: 1:350</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm bg-dark">
      <img height="270" src="https://www.revell.de/out/pictures/generated/product/1/540_540_88/05040_bismarck_01.jpg"></img>
      <div class="card-body">
      <h6 class="card-text text-white">Battleship Bismarck</h6>
      <h5 class="card-text text-white">92,99 €</h5>
      <p class="card-text text-muted">Scale: 1:350</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</div>
  </div>
);

ShipsPage.propTypes = {};

ShipsPage.defaultProps = {};

export default ShipsPage;
