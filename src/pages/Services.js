import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <p>Explore the services we offer:</p>
      <nav>
        <Link to="design" className="service-link">Design</Link>
        <Link to="development" className="service-link">Development</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Services;

