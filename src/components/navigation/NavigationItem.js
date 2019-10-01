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
  position: relative;
  &::after {
    content: '';
    position: absolute;
    /* width: 0; */
    height: 3px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: red;
    transition: transform 0.3s ease;
    transform: scaleX(0);
  }
  &.navActive {
    &::after {
      transform: scaleX(1);
      transform-origin: left;
      left: 0;
      background: ${({ theme }) => theme.colorMain};
    }
  }
`;

const NavigationItem = props => {
  const { name, link } = props;
  return (
    <li>
      <StyledLink exact activeClassName="navActive" to={link}>
        {name}
      </StyledLink>
    </li>
  );
};

export default NavigationItem;
