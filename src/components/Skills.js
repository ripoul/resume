import React, { Component } from 'react';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";

import ReactTooltip from 'react-tooltip'

const progressbarStyle = buildStyles({
  pathColor: "#6f42c1"
})

export class Skills extends Component {
  render() {
    return (
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
                        <i data-tip="HTML" className="fab fa-html5"></i>
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
                        <i data-tip="CSS" className="fab fa-css3-alt"></i>
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
                        <i data-tip="JavaSript" className="fab fa-js-square"></i>
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
                        <i data-tip="Python" className="fab fa-python"></i>
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
                        <i data-tip="Java" className="fab fa-java"></i>
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
                    const percentage = isVisible ? 60 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i data-tip="reactJS" className="fab fa-react"></i>
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
                        <i data-tip="nodeJS" className="fab fa-node-js"></i>
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
                    const percentage = isVisible ? 60 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <strong data-tip="Gatsby">Gatsby</strong>
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
                    const percentage = isVisible ? 60 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i data-tip="vueJS" className="fab fa-vuejs"></i>
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
                        <strong data-tip="Django">Django</strong>
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
                        <strong data-tip="Flask">Flask</strong>
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
                        <strong data-tip="PostgreSQL" style={{ fontSize: "0.75rem" }}>PostgreSQL</strong>
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
                        <i data-tip="git" className="fab fa-git-alt"></i>
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
                    const percentage = isVisible ? 55 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <strong data-tip="Android Studio" style={{ fontSize: "0.75rem" }}>Android<br />Studio</strong>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
          </ul>

          <div className="subheading mb-3">
            Hosting and CI tools
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
                        <strong data-tip="Google Cloud Plateform">GCP</strong>
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
                    const percentage = isVisible ? 60 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <strong data-tip="Microsoft azure">Azure</strong>
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
                        <strong data-tip="Travis CI">Travis CI</strong>
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
                    const percentage = isVisible ? 50 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i data-tip="Github Action" class="fab fa-github"></i>
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
                        <strong data-tip="Heroku">Heroku</strong>
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
                    const percentage = isVisible ? 60 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <i data-tip="Jenkins" class="fab fa-jenkins"></i>
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
                        <strong data-tip="Ansible">Ansible</strong>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </li>
          </ul>
        </div>
        <ReactTooltip />
      </section>
    );
  }
}
export default Skills;