import React, { Component } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import georide from '../assets/img/portfolio/georide-road-trip.png'
import urlShortener from '../assets/img/portfolio/url-shortener.png'
import urlShortenerApi from '../assets/img/portfolio/url-shortener-api.png'
import resume from '../assets/img/portfolio/resume.png'

const slidderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export class Portfolio extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 align-items-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">Portfolio</h2>
          <div style={{ height: "100%", width: "100%" }}>
            <Slider {...slidderSettings}>
              <div>
                <div className="text-center">
                  <h3>Georide Road Trip <a target="_blank" href="https://georide.ripoul.fr/"><i class="fas fa-link"></i></a> <a href="https://github.com/ripoul/georide-position"><i class="fab fa-github"></i></a></h3>
                  <img
                    src={georide}
                    style={{ maxHeight: "50%", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                    alt="Georide Project Example"
                  ></img>
                  <p>This is a project for sharing raod-trips for the users of the french GPS tracker Georide. I used <strong>django, PostgreSQL, georide API</strong> to create it.</p>
                </div>
              </div>
              <div>
                <div className="text-center">
                  <h3>Url-shortener <a target="_blank" href="https://url-shortener.ripoul.fr/"><i class="fas fa-link"></i></a> <a href="https://github.com/ripoul/url-shortener"><i class="fab fa-github"></i></a></h3>
                  <img
                    src={urlShortener}
                    style={{ maxHeight: "50%", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                    alt="Url Shortener Project Example"
                  ></img>
                  <p>This is an interface to use my url shortener. I used <strong>Gatsby</strong> to create it.</p>
                </div>
              </div>
              <div>
                <div className="text-center">
                  <h3>Url-shortener-api <a target="_blank" href="https://url-shortener.api.ripoul.fr/"><i class="fas fa-link"></i></a> <a href="https://github.com/ripoul/url-shortener-api"><i class="fab fa-github"></i></a></h3>
                  <img
                    src={urlShortenerApi}
                    style={{ maxHeight: "50%", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                    alt="Url-shortener-api project example"
                  ></img>
                  <p>This is an api to create short url with many different providers. I used <strong>Django</strong> to create it.</p>
                </div>
              </div>
              <div>
                <div className="text-center">
                  <h3>This website <a target="_blank" href="https://ripoul.fr/"><i class="fas fa-link"></i></a> <a href="https://github.com/ripoul/resume"><i class="fab fa-github"></i></a></h3>
                  <img
                    src={resume}
                    style={{ maxHeight: "50%", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                    alt="Resume project example"
                  ></img>
                  <p>I used <strong>Gatsby</strong> to create it.</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio;