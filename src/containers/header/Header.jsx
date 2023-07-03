import React from 'react';
import people from '../../assets/people.png';
import banner from '../../assets/banner.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Obtain Data-Driven Insights and Analysis<br></br>Data Science Company
</h1>
      <p>Transform your business with our excellent innovative technologies and Insights
</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={banner} />
    </div>
  </div>
);

export default Header;