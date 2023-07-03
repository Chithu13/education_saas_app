import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About Us" text="EDW SaaS provides business analytics services .Our data model equipped with advanced technologies of Big Data, Data analytics Data Science, and Artificial Intelligence offers precise analytical data that help organizations to empower their business, make better decisions, boost ROI, and accomplish goals. Our company converts structured and unstructured data into precise distinguishable metrics that enable you to analyze the best for your business." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore our Services</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Quality" text="Excellent Commitment to quality,delivery optimization and more satisfaction in our services
" />
      <Feature title="Mission" text="To build best Data Models, Artificial Intelligence that enhances user’s experience and delivers impactful results for their business. The vision is to turn an organization into a data-driven organization through Data Tools to AI." />
      <Feature title="Vision" text="To transform business through advanced data tools, Artificial Intelligence, and Data Science to make decision making less complex and create valuable insights for scalable business.." />
    </div>
  </div>
);

export default WhatGPT3;