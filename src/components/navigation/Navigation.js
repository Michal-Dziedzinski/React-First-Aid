import React from 'react';
import { NavigationItem } from 'components/navigation/NavigationItem';
import styled from 'styled-components';

const StyledNav = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2.5rem;
  position: relative;
  z-index: 3;
  position: fixed;
  top: 5.4rem;
  width: 100%;
  background-color: #fff;
  @media only screen and (min-width: 768px) {
    justify-content: space-around;
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <StyledNav>
        <NavigationItem name="MAIN!" link="/" />
        <NavigationItem name="STATS" link="/stats" />
        <NavigationItem name="REWARDS" link="/rewards" />
        <NavigationItem name="GRABBOMATS" link="/maps" />
      </StyledNav>
    </nav>
  );
};
