import React from 'react';

import Layout from '../components/Layout';

import Sidebar from '../components/Sidebar';
import config from '../../config';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import epsi from '../assets/img/education/epsi.png';
import iutNantes from '../assets/img/education/iutNantes.jpg';
import insynium from '../assets/img/experience/insynium.png';
import sopra from '../assets/img/experience/sopra.png';

import georide from '../assets/img/portfolio/georide-road-trip.png'
import urlShortener from '../assets/img/portfolio/url-shortener.png'
import urlShortenerApi from '../assets/img/portfolio/url-shortener-api.png'
import resume from '../assets/img/portfolio/resume.png'

const progressbarStyle = buildStyles({
  pathColor: "#6f42c1"
})

const slidderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I'm a Bouguenais based Full Stack Developper. Open-Source enthusiast,
            I spend my free time developing for me or the community.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="p-3">
              <img
                src={sopra}
                alt=""
                width="130px"
              />
            </div>
            <div className="resume-content">
              <h3 className="mb-0">Dev-Ops Big Data</h3>
              <div className="subheading mb-3">Sopra Steria</div>
              <p>
                Ansible, Gitlab, Jenkins. Automation of development process.
              </p>
            </div>
            <div className="resume-date text-md-right ml-auto">
              <span className="text-primary">March 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="p-3">
              <img
                src={insynium}
                alt=""
                width="130px"
              />
            </div>
            <div className="resume-content">
              <h3 className="mb-0">Full stack developer</h3>
              <div className="subheading mb-3">Insynium</div>
              <p>
                Setting up a BI platform with Superset and PostgreSQL
              </p>
            </div>
            <div className="resume-date text-md-right ml-auto">
              <span className="text-primary">April 2017 - February 2019</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="p-3">
              <img
                src={epsi}
                alt=""
                width="130px"
              />
            </div>
            <div className="resume-content">
              <h3 className="mb-0">EPSI Nantes</h3>
              <div className="subheading mb-3">IT Master</div>
              <p>Management and IT skill developpement (cloud, project management, frameworks, good practice on developpement...)</p>
            </div>
            <div className="resume-date text-md-right ml-auto">
              <span className="text-primary">September 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="p-3">
              <img
                src={iutNantes}
                alt=""
                width="130px"
              />
            </div>
            <div className="resume-content">
              <h3 className="mb-0">IUT Nantes</h3>
              <div className="subheading mb-3">Licence Pro MiAR (Métiers de l'informatique : Applications Réparties)</div>
              <p>Developement java, go, python, javascript...</p>
            </div>
            <div className="resume-date text-md-right ml-auto">
              <span className="text-primary">September 2017 - Aout 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="p-3">
              <img
                src={iutNantes}
                alt=""
                width="130px"
              />
            </div>
            <div className="resume-content">
              <h3 className="mb-0">IUT Nantes</h3>
              <div className="subheading mb-3">DUT Informatique</div>
              <p>Developement java, go, python, javascript and some algebra</p>
            </div>
            <div className="resume-date text-md-right ml-auto">
              <span className="text-primary">September 2015 - Aout 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 70 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i className="fab fa-html5"></i>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 70 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i className="fab fa-css3-alt"></i>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 80 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i className="fab fa-js-square"></i>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 90 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i className="fab fa-python"></i>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 75 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i className="fab fa-java"></i>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
          </ul>

          <div className="subheading mb-3">
            Frameworks
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 70 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i className="fab fa-react"></i>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 75 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i className="fab fa-node-js"></i>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 75 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <strong>Gatsby</strong>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 75 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i className="fab fa-vuejs"></i>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 85 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <strong>Django</strong>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 85 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <strong>Flask</strong>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
          </ul>

          <div className="subheading mb-3">
            SGBD and tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 70 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <strong style={{ fontSize: "0.75rem" }}>PostgreSQL</strong>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 85 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i className="fab fa-git-alt"></i>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
            <li className="list-inline-item">
              <div style={{ width: "100px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 70 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <strong style={{ fontSize: "0.75rem" }}>Android<br />Studio</strong>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">Portfolio</h2>
          <div style={{ height: "100%", width: "100%" }}>
            <Slider {...slidderSettings}>
              <div>
                <div className="text-center">
                  <h3>Georide Road Trip <a href="https://georide.ripoul.fr/"><i class="fas fa-link"></i></a> <a href="https://github.com/ripoul/georide-position"><i class="fab fa-github"></i></a></h3>
                  <img src={georide} style={{ maxHeight: "50%", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }}></img>
                  <p>This is a project for sharing raod-trips for the users of the french GPS tracker Georide. I used <strong>django, PostgreSQL, georide API</strong> to create it.</p>
                </div>
              </div>
              <div>
                <div className="text-center">
                  <h3>Url-shortener <a href="https://url-shortener.ripoul.fr/"><i class="fas fa-link"></i></a> <a href="https://github.com/ripoul/url-shortener"><i class="fab fa-github"></i></a></h3>
                  <img src={urlShortener} style={{ maxHeight: "50%", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }}></img>
                  <p>This is an interface to use my url shortener. I used <strong>Gatsby</strong> to create it.</p>
                </div>
              </div>
              <div>
                <div className="text-center">
                  <h3>Url-shortener-api <a href="https://url-shortener.api.ripoul.fr/"><i class="fas fa-link"></i></a> <a href="https://github.com/ripoul/url-shortener-api"><i class="fab fa-github"></i></a></h3>
                  <img src={urlShortenerApi} style={{ maxHeight: "50%", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }}></img>
                  <p>This is an api to create short url with many different providers. I used <strong>Django</strong> to create it.</p>
                </div>
              </div>
              <div>
                <div className="text-center">
                  <h3>This website <a href="https://ripoul.fr/"><i class="fas fa-link"></i></a> <a href="https://github.com/ripoul/resume"><i class="fab fa-github"></i></a></h3>
                  <img src={resume} style={{ maxHeight: "50%", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }}></img>
                  <p>I used <strong>Gatsby</strong> to create it.</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
