import React, { Component } from 'react';

import epsi from '../assets/img/education/epsi.png';
import iutNantes from '../assets/img/education/iutNantes.jpg';

export class Education extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5 align-items-center">
            <div className="p-3">
              <img
                src={epsi}
                alt="epsi logo"
                width="130px"
              />
            </div>
            <div className="resume-content">
              <h3 className="mb-0">EPSI Nantes</h3>
              <div className="subheading mb-3">IT Master</div>
              <p>Management and IT skill development (cloud, project management, frameworks, good practice on development...)</p>
            </div>
            <div className="resume-date text-md-right ml-auto">
              <span className="text-primary">September 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5 align-items-center">
            <div className="p-3">
              <img
                src={iutNantes}
                alt="iut nantes logo"
                width="130px"
              />
            </div>
            <div className="resume-content">
              <h3 className="mb-0">IUT Nantes</h3>
              <div className="subheading mb-3">Licence Pro MiAR (Métiers de l'informatique : Applications Réparties)</div>
              <p>development java, go, python, javascript...</p>
            </div>
            <div className="resume-date text-md-right ml-auto">
              <span className="text-primary">September 2017 - August 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5 align-items-center">
            <div className="p-3">
              <img
                src={iutNantes}
                alt="iut nantes logo"
                width="130px"
              />
            </div>
            <div className="resume-content">
              <h3 className="mb-0">IUT Nantes</h3>
              <div className="subheading mb-3">DUT Informatique</div>
              <p>development java, go, python, javascript and some algebra</p>
            </div>
            <div className="resume-date text-md-right ml-auto">
              <span className="text-primary">September 2015 - August 2017</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Education;