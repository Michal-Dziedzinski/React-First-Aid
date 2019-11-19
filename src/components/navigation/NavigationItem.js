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
  position: relative;
  padding-bottom: 0.2rem;
  @media only screen and (min-width: 768px) {
    justify-content: space-around;
  }
  &::after {
    content: '';
    position: absolute;
    /* width: 0; */
    height: 0.3rem;
    display: block;
    margin-top: 0.5rem;
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

export const NavigationItem = props => {
  const { name, link } = props;
  return (
    <li>
      <StyledLink exact activeClassName="navActive" to={link}>
        {name}
      </StyledLink>
    </li>
  );
};
