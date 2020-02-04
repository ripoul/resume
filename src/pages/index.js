import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <About/>
      <hr className="m-0" />
      <Experience/>
      <hr className="m-0" />
      <Education/>
      <hr className="m-0" />
      <Skills/>
      <hr className="m-0" />
      <Portfolio/>
    </div>
  </Layout>
);

export default IndexPage;
