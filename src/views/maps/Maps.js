import React from 'react';
import styled from 'styled-components';
import mapImage from 'assets/mapa.png';

const StyledMap = styled.div`
  background-image: url(${mapImage});
  background-size: cover;
  padding-bottom: 500px;
  position: absolute;
  bottom: 140px;
  width: 100%;
`;

const StyledDescription = styled.div`
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => theme.colorWhite};
  position: absolute;
  bottom: 70px;
  width: 100%;
  text-align: center;
  padding: 20px;
`;

const StyledDescriptionTextBig = styled.p`
  font-size: 18px;
`;

const StyledDescriptionTextSmall = styled.p`
  font-size: 14px;
`;

export const Maps = () => (
  <>
    <StyledMap />
    <StyledDescription>
      <StyledDescriptionTextBig>Białostocka 11, Białystok</StyledDescriptionTextBig>
      <StyledDescriptionTextSmall>Total grabs: 6231</StyledDescriptionTextSmall>
    </StyledDescription>
  </>
);
