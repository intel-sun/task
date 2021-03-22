import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import '../component/styles/Notfound.css'



function NotFoundComponent() {
  return (
    <div>
      <div className="container">
      <div className="error-wrapper">
          <div className="man-icon"></div>
          <h3 className="title">404</h3>
          <p className="info">Oh! Page not found</p>
          <a className="home-btn info" href = './login'>home</a>
      </div>
    </div>
    </div>
  );
}

export default NotFoundComponent;