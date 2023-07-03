import React from 'react';
import saasimage from '../../assets/sass.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={saasimage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Discover how microservices and APIs are influencing the SaaS industry and how they can benefit your business.</h1>
      <p>The global software-as-a-service (SaaS) market is growing over 17% a year and is expected to double in size by 2026. It's estimated that more than 99% of large organizations now rely on SaaS solutions. These solutions are enhanced by the use of application programming interfaces (APIs) and microservices, which are transforming the way companies do business. </p>
    </div>
  </div>
);

export default Possibility;