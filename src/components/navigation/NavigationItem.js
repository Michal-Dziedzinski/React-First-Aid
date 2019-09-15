import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
  padding-bottom: 2px;
`;

const NavigationItem = props => {
  const { name, link } = props;
  return (
    <li>
      <StyledLink activeClassName="navActive" to={link}>
        {name}
      </StyledLink>
    </li>
  );
};

export default NavigationItem;
