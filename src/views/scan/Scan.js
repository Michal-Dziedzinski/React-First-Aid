import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import styled from 'styled-components';

const StyledResult = styled.p`
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.4rem;
`;

const StyledText = styled.p`
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.4rem;
`;

export class Scan extends Component {
  state = {
    result: 0,
  };

  handleScan = data => {
    const { addGrabbs } = this.props;
    if (data) {
      this.setState({
        result: data,
      });
      addGrabbs(data);
    }
  };

  handleError = err => {
    console.error(err);
  };

  render() {
    const { result } = this.state;
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        {result === 0 ? (
          <StyledText>Scan QR code</StyledText>
        ) : (
          <StyledResult>You get {result} Grabbs</StyledResult>
        )}
      </div>
    );
  }
}
