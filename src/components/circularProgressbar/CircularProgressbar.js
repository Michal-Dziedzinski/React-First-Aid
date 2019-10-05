import React from 'react';
import styled from 'styled-components';
import { ProgressProvider } from 'components/progressProvider/ProgressProvider';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colorWhite};
  width: 45%;
  padding: 1rem;
`;

const StyledPanelText = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colorPrimary};
`;

const StyledCircleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const CircularProgressBar = ({ percentage, headerText, footerText }) => (
  <StyledPanel>
    <StyledPanelText>{headerText}</StyledPanelText>
    <StyledCircleWrapper>
      <ProgressProvider valueStart={0} valueEnd={percentage}>
        {value => (
          <CircularProgressbar
            value={value}
            text={`${percentage}%`}
            styles={buildStyles({
              rotation: 1,
              textSize: '2.4rem',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(30, 215, 96, ${percentage / 100})`,
              textColor: '#37003c',
              trailColor: '#f5f5f5',
              backgroundColor: '#ffffff',
            })}
          />
        )}
      </ProgressProvider>
    </StyledCircleWrapper>
    <StyledPanelText>{footerText}</StyledPanelText>
  </StyledPanel>
);
