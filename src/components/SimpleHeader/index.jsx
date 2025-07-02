import React from 'react';
import Logo from '../Logo';
import './styles.css';

const SimpleHeader = () => {
  return (
    <div className="simple-header">
      <div className="header-main">
        <Logo />
      </div>
    </div>
  );
};

export default SimpleHeader;
