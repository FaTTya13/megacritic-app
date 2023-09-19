import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const RootPage = ({ children }) => {
  return (
  <React.Fragment>
    <Header /> 
    {children}
    <Footer />
  </React.Fragment>
  );
}

export default RootPage;