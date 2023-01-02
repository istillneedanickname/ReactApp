import React from 'react';
import PropTypes from 'prop-types';
import styles from './AircraftPage.module.scss';

const AircraftPage = () => (
  <div className={styles.AircraftPage}>
    <div class="container">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
<div class="col">
    <div class="card shadow-sm bg-dark">
      <img src="https://www.revell.de/out/pictures/generated/product/1/540_540_88/03822_airbus_a400m_atlas_raf_01.jpg"></img>
      <div class="card-body">
      <h6 class="card-text text-white">Airbus A400M "Luftwaffe"</h6>
      <h5 class="card-text text-white">69,99 €</h5>
      <p class="card-text text-muted">Scale: 1:72</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
  <div class="card shadow-sm bg-dark">
      <img height="270" src="https://www.revell.de/out/pictures/generated/product/1/540_540_88/04958_antonov_an_225_mrija_01.jpg"></img>
      <div class="card-body">
      <h6 class="card-text text-white">Antonov AN-225 Mrija</h6>
      <h5 class="card-text text-white">125,00 € </h5>
      <p class="card-text text-muted">Scale: 1:144</p>
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

AircraftPage.propTypes = {};

AircraftPage.defaultProps = {};

export default AircraftPage;
