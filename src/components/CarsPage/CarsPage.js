import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarsPage.module.scss';

const CarsPage = () => (
  <div className={styles.CarsPage}>
    <div class="container">


<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

<div class="col">
    <div class="card shadow-sm bg-dark">
      <img src="https://www.revell.de/out/pictures/generated/product/1/540_540_88/07057kopie.jpg"></img>
      <div class="card-body">
      <h6 class="card-text text-white">Audi R8</h6>
      <h5 class="card-text text-white">28,99 €</h5>
      <p class="card-text text-muted">Scale: 1:24</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm bg-dark">
      <img src="https://www.revell.de/out/pictures/generated/product/1/540_540_88/07706_vw_t3_bus_01.jpg"></img>
      <div class="card-body">
      <h6 class="card-text text-white">VW T3 Bus</h6>
      <h5 class="card-text text-white">34,99 €</h5>
      <p class="card-text text-muted">Scale: 1:25</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm bg-dark">
      <img src="https://www.revell.de/out/pictures/generated/product/1/540_540_88/00921_jackson_storm_disney_cars_light_u_sound_01.jpg"></img>
      <div class="card-body">
      <h6 class="card-text text-white">Jackson Storm Disney Car</h6>
      <h5 class="card-text text-white">34,99 €</h5>
      <p class="card-text text-muted">Scale: 1:20</p>
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

CarsPage.propTypes = {};

CarsPage.defaultProps = {};

export default CarsPage;
