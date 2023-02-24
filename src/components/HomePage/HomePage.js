import React from "react";
import PropTypes from "prop-types";
import styles from "./HomePage.scss";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { carousel } from "bootstrap";
import Carousel from "bootstrap";
import data from "../../api/data.json";

const HomePage = () => {
  const navigate = useNavigate();
  const redirect = (param) => {
    navigate(`/products/${param}`);
  };

  return (
    <div className={styles.HomePage}>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.revell.de/out/pictures/promo/06784.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.revell.de/out/pictures/promo/06783(1).jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.revell.de/out/pictures/promo/24555.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.categories.map((category) => {
            return (
              <div
                class="col"
                key={category.name}
                onClick={() => redirect(category.name)}
              >
                <div class="card shadow-sm bg-dark">
                  <img src={category.image} alt="" />
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Link to="news">
          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/04_newsletter.jpg  "
                alt=" "
              />

              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>
          </Link>
          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/05_sale.jpg"
                alt=""
              ></img>

              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/06_charts.jpg"
                alt=""
              ></img>

              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/07_starwars.jpg"
                alt=""
              ></img>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/08_jurassic_world.jpg"
                alt=""
              ></img>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/09_harrypotter.jpg"
                alt=""
              ></img>

              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/13_easy-click-system.jpg"
                alt=" "
              ></img>

              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/11_first_construction.jpg"
                alt=" "
              ></img>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/12_workstation.jpg"
                alt=""
              ></img>

              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/revell_community.jpg"
                alt=""
              ></img>

              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/revell_blog.jpg"
                alt=""
              ></img>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm bg-dark">
              <img
                src="https://www.revell.de/out/pictures/ddmedia/adventskalender_kachel.jpg"
                alt=""
              ></img>

              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        class="homeVid"
        width="1000"
        height="562"
        src="https://www.youtube.com/embed/3pKj0ukJ_VA"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="textHome" align="left">
        <h1>Welcome to the world of model making! Welcome to Revell!</h1>
        <p class="par1" align="left">
          In the Revell online shop, model hobbyists can find what they are most
          interested in with just a few clicks. Customers who are specifically
          looking for a certain product can use the search function and narrow
          it down with the help of the filter function. Those who want to be
          inspired are guaranteed to discover more ideas for their next model
          building craft project while browsing. Hobbyists will find the
          necessary accessories to match the model kits. In order to be able to
          recreate the model true to the original, the matching colours are
          listed in the product description. In addition, the clearly arranged
          assortment of the online shop offers high-quality glues, brushes,
          precision tools and other important accessories for model building.
        </p>
        <h2>Large selection, competent advice and comprehensive service</h2>
        <p class="par1" align="left">
          Building model kits of vehicles, aircraft and ships of all kinds
          yourself is one of the most enjoyable leisure activities for
          technology and model building enthusiasts in many countries around the
          world. Detailed kits, such as those offered by the model building
          company Revell, are characterised by true-to-the-original
          representations with many important details and high-quality
          workmanship. In addition, the descriptions provide further information
          about the historical significance of the original. Cars, trucks,
          aeroplanes, ships or RC Cars? In the Revell model building online
          shop, every model building fan will find his or her desired models.
        </p>
        <h2>Space Shuttle Discovery model kit</h2>
        <p class="par1" align="left">
          The Space Shuttle Discovery is a model kit of the space shuttle and
          boosters in 1:144 scale and consists of 97 parts. It makes an
          excellent gift for space fans and budding astronauts! With the Space
          Shuttle Discovery, you can learn how the space shuttle works and share
          with friends and family who share your passion for space exploration.
          The Space Shuttle Discovery is sure to be a hit with anyone who
          appreciates the wonders of space travel. Have fun discovering.
        </p>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
