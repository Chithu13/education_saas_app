import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Data Science',
    text: 'Data Science is a structured and unstructured model to extract insight from data in different forms and add value to the businesses. ',
  },
  {
    title: 'Data Warehousing',
    text: 'Data warehouse system is a powerful, scalable, and affordable—enabling organizations to share petabytes of data across thousands of users.', 
    
  },
  {
    title: 'Data Analytics',
    text: 'Data analytics is the process to analyze data sets in order to attract conclusions about the information they receive frequently with the help of specific systems and software',
  },
  {
    title: 'Data Visualization',
    text: 'Data visualizations perform the best role in addressing this challenge and help with interacting science outputs to a wide variety of audiences..',
  },
  {
    title: 'Data Migration',
    text: 'Data Migration is the process of transferring data from one storage system to another to save necessary and relevant data.',
    
  }, 
  {
    title: 'Big Data Implementation',
    text: 'Big Data implementation helps you to make decisions on the basis of insightful data and forecast business future.',
  }, 
  {
    title: 'Predictive Analytics',
    text: 'Advance Analytics is a tool that help you to extract more data and forecast trends, behaviors, events and more to perform better..',
  }, 
  {
    title: 'IoT Analytics',
    text: 'IoT Analytics is an application of data analysis tools and adds value to the data to facilities by connecting with the Internet of Things.',
    
  }, 
  {
    title: 'Customer 360',
    text: 'Customer 360 provides data with a 360 degree view and enables you to interact and support every detail about the customer.',
    
    
  }, 
  {
    title: 'DevOps',
    text: ' DevOps is a set of practices that merge IT operations and software development to deliver high quality software and improved software life cycle.',
    
  }, 
  {
    title: 'Microsoft Power BI',
    text: '  Microsoft Power BI is a business analytics service that provides interactive visualizations & business intelligence to create dashboards & reports.',
    
    
  }, 
  {
    title: 'Qlik Sense & QlikView',
    text: '  Qlik Sense & QlikView is an analytics solution and platform to integrate data, analysis and data-driven intelligence that deliver business growth.',
    
    
    
  }, 





  
];
const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen With Us</h1>
      <p style={{marginRight:"5%"}}>What are the Services we Offered?</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;