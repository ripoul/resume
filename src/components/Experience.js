import React, { Component } from 'react';

import insynium from '../assets/img/experience/insynium.png';
import sopra from '../assets/img/experience/sopra.png';

export class Experience extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5 align-items-center">
            <div className="p-3">
              <img
                src={sopra}
                alt="sopra logo"
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
              <span className="text-primary">March 2019 - August 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5 align-items-center justify-content-between">
            <div className="p-3">
              <img
                src={insynium}
                alt="sopra logo"
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
    );
  }
}
export default Experience;