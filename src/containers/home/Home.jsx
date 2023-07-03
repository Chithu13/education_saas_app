import React from 'react';
import { Navbar } from '../../components';
import Header from '../header/Header';
import WhatGPT3 from '../whatGPT3/WhatGPT3';
import Features from '../features/Features';
import Possibility from '../possibility/Possibility';
import Blog from '../blog/Blog';
import Footer from '../footer/Footer';
const Home = () => (
  <div className="Home">
      <Header />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Blog />
  </div>
);

export default Home;

