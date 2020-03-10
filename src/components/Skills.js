import React, { Component } from 'react';

import ReactTooltip from 'react-tooltip'

import SkillItem from './SkillItem'

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
              <SkillItem value="70">
                <i data-tip="HTML" className="fab fa-html5"></i>
              </SkillItem>

            </li>
            <li className="list-inline-item">
              <SkillItem value="70">
                <i data-tip="CSS" className="fab fa-css3-alt"></i>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="80">
                <i data-tip="JavaSript" className="fab fa-js-square"></i>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="90">
                <i data-tip="Python" className="fab fa-python"></i>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="75">
                <i data-tip="Java" className="fab fa-java"></i>
              </SkillItem>
            </li>
          </ul>

          <div className="subheading mb-3">
            Frameworks
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <SkillItem value="60">
                <i data-tip="reactJS" className="fab fa-react"></i>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="75">
                <i data-tip="nodeJS" className="fab fa-node-js"></i>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="60">
                <strong data-tip="Gatsby">Gatsby</strong>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="60">
                <i data-tip="vueJS" className="fab fa-vuejs"></i>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="90">
                <strong data-tip="Django">Django</strong>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="85">
                <strong data-tip="Flask">Flask</strong>
              </SkillItem>
            </li>
          </ul>

          <div className="subheading mb-3">
            SGBD and tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <SkillItem value="70">
                <strong data-tip="PostgreSQL" style={{ fontSize: "0.75rem" }}>PostgreSQL</strong>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="85">
                <i data-tip="git" className="fab fa-git-alt"></i>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="55">
                <strong data-tip="Android Studio" style={{ fontSize: "0.75rem" }}>Android<br />Studio</strong>
              </SkillItem>
            </li>
          </ul>

          <div className="subheading mb-3">
            Hosting and CI tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <SkillItem value="70">
                <strong data-tip="Google Cloud Plateform">GCP</strong>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="60">
                <strong data-tip="Microsoft azure">Azure</strong>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="80">
                <strong data-tip="Travis CI">Travis CI</strong>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="50">
                <i data-tip="Github Action" className="fab fa-github"></i>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="70">
                <strong data-tip="Heroku">Heroku</strong>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="60">
                <i data-tip="Jenkins" className="fab fa-jenkins"></i>
              </SkillItem>
            </li>
            <li className="list-inline-item">
              <SkillItem value="70">
                <strong data-tip="Ansible">Ansible</strong>
              </SkillItem>
            </li>
          </ul>
        </div>
        <ReactTooltip />
      </section>
    );
  }
}
export default Skills;