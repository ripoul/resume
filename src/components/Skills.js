import React, { Component } from 'react';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";

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
    );
  }
}
export default Skills;