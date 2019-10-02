import React from 'react';
import styled from 'styled-components';
import mapImage from 'assets/mapa.png';

const StyledMap = styled.div`
  background-image: url(${mapImage});
  background-size: cover;
  padding-bottom: calc(100vh - 24rem);
  position: absolute;
  top: 0rem;
  width: 100%;
  z-index: -1;
  @media only screen and (min-width: 768px) {
    padding-bottom: calc(100vh - 17rem);
  }
`;

const StyledDescription = styled.div`
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => theme.colorWhite};
  position: absolute;
  bottom: 0rem;
  width: 100%;
  text-align: center;
  padding: 1.6rem 2rem;
  z-index: -1;
`;

const StyledDescriptionTextBig = styled.p`
  font-size: 1.8rem;
`;

const StyledDescriptionTextSmall = styled.p`
  font-size: 1.4rem;
`;
const StyledPlaceholder = styled.div`
  position: relative;
  height: calc(100vh - 17.2rem);
  background-color: rgba(255, 255, 255, 0.8);
  @media only screen and (min-width: 768px) {
    height: calc(100vh - 10.2rem);
  }
`;

const StyledPlaceholderDescription = styled.h1`
  position: absolute;
  color: ${({ theme }) => theme.colorPrimary};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
`;

export const Maps = () => (
  <StyledPlaceholder>
    <StyledPlaceholderDescription>To Be Done...</StyledPlaceholderDescription>
    <StyledMap />
    <StyledDescription>
      <StyledDescriptionTextBig>Białostocka 11, Białystok</StyledDescriptionTextBig>
      <StyledDescriptionTextSmall>Total grabs: 6231</StyledDescriptionTextSmall>
    </StyledDescription>
  </StyledPlaceholder>
);
