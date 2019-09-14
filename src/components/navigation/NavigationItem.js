import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
  const { name, link } = props;
  return (
    <li>
      <NavLink to={link}>{name}</NavLink>
    </li>
  );
};

export default NavigationItem;
