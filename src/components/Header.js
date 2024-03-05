import React from 'react';

const Header = () => {
  return (
    <header className="header-container">
      <img src={`${process.env.PUBLIC_URL}/images/kro.png`} 
        alt="Aleksandr Kross" />

      <div className="header-info">
        <h1>Aleksandr Kross</h1>
        <h3 className="occupation">Software Developer</h3>
      </div>
    </header>
  );
};

export default Header;
