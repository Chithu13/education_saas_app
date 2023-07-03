import React from 'react';
import Article from '../../components/article/Article';
import { img1, img2, img3, img4, img5 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA" >
        <Article imgUrl={img1} date="Mar 13, 2023" text="Tenets of IT Modernization for Business Agility, Speed and Productivity" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={img2} date="Dec 20, 2022" text="Don’t just meet customer expectations: the complete lowdown on exceeding them" />
        <Article imgUrl={img3} date="Feb 10, 2023" text="Turn Your Container Into a Trusted Cloud Identity" />
        <Article imgUrl={img4} date="Mar 24, 2023" text="Solutioning at the Edge!" />
        <Article imgUrl={img5} date="Oct 07, 2022" text="How to Design a Hybrid Cloud Architecture?" />
      </div>
    </div>
  </div>
);

export default Blog;