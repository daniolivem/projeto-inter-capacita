import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import SimpleHeader from '../SimpleHeader';

const HeaderWrapper = () => {
  const location = useLocation();
  const simplePaths = ['/login', '/register', '/criar-conta'];
  const isSimpleHeader = simplePaths.includes(location.pathname);

  return isSimpleHeader ? <SimpleHeader /> : <Header />;
};

export default HeaderWrapper;
