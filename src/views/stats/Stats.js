import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  text-align: center;
  padding: 15px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorPrimary};

  &.active {
    color: ${({ theme }) => theme.colorMain};
    font-weight: bold;
  }
`;

const StyledRatingWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorWhite};
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 12px;

  &:first-child {
    font-weight: bold;
  }

  &:last-child {
    background-color: ${({ theme }) => theme.colorMain};
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const StyledCol = styled.span`
  display: inline-block;
  width: 40%;

  &:nth-of-type(2) {
    width: 20%;
  }

  &:nth-of-type(3) {
    color: ${({ theme }) => theme.colorMain};
    text-transform: uppercase;
  }

  /* &:last-child {
    color: ${({ theme }) => theme.colorWhite};
  } */
`;

const StyledPanelWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colorWhite};
  width: 45%;
  padding: 10px;
`;

const StyledPanelText = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`;

const StyledCircleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const StyledCircle = styled.div`
  width: 80px;
  height: 80px;
  border: 10px solid ${({ theme }) => theme.colorMain};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  /* position: absolute; */
`;

const Stats = () => (
  <>
    <StyledWrapper>
      <StyledLink className="active" href="">
        Global
      </StyledLink>
      / <StyledLink href="">Lokal</StyledLink>
      <StyledRatingWrapper>
        <StyledRow>
          <StyledCol>1. Imie nazwisko</StyledCol>
          <StyledCol>-</StyledCol>
          <StyledCol>1234 Grabs</StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol>2. Imie nazwisko</StyledCol>
          <StyledCol>-</StyledCol>
          <StyledCol>1233 Grabs</StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol>3. Imie nazwisko</StyledCol>
          <StyledCol>-</StyledCol>
          <StyledCol>1232 Grabs</StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol>110. You</StyledCol>
          <StyledCol>-</StyledCol>
          <StyledCol>932 Grabs</StyledCol>
        </StyledRow>
      </StyledRatingWrapper>
      <StyledPanelWrapper>
        <StyledPanel>
          <StyledPanelText>Your grabbed more than</StyledPanelText>
          <StyledCircleWrapper>
            <StyledCircle>64%</StyledCircle>
          </StyledCircleWrapper>
          <StyledPanelText>Users in your country</StyledPanelText>
        </StyledPanel>
        <StyledPanel>
          <StyledPanelText>Your grabbed more than</StyledPanelText>
          <StyledCircleWrapper>
            <StyledCircle>89%</StyledCircle>
          </StyledCircleWrapper>
          <StyledPanelText>Users in your country</StyledPanelText>
        </StyledPanel>
      </StyledPanelWrapper>
    </StyledWrapper>
  </>
);

export default Stats;
