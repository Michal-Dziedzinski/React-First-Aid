import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;
const StyledImage = styled.img``;

const StyledDescription = styled.div``;

export const RewardsItem = ({ product }) => (
  <StyledItem>
    <StyledImage>{product.image}</StyledImage>
    <StyledDescription>{product.description}</StyledDescription>
  </StyledItem>
);
