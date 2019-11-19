import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { CircularProgressBar } from 'components/circularProgressbar/CircularProgressbar';

const StyledTitle = styled.h1`
  font-family: 'Karla', sans-serif;
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: 700;
  text-align: center;
  font-size: 2.4rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  @media only screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const StyledWrapper = styled.div`
  text-align: center;
  padding: 2rem 1.5rem 10rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    padding-top: 4rem;
  }
`;

const StyledSwitch = styled.span`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 1.4rem;
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colorMain};
    font-weight: bold;
  }
`;

const StyledRatingWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledRow = styled.div`
  display: flex;
  padding: 1rem;
  font-size: 1.2rem;
  width: 100%;
  color: ${({ theme }) => theme.colorWhite};

  &:first-child {
    font-weight: bold;
  }
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colorLightGrey};
  }
  &:nth-of-type(2) {
    background-color: ${({ theme }) => theme.colorGold};
    font-weight: bold;
    text-transform: uppercase;
  }
  &:nth-of-type(3) {
    background-color: ${({ theme }) => theme.colorSilver};
    font-weight: bold;
    text-transform: uppercase;
  }
  &:nth-of-type(4) {
    background-color: ${({ theme }) => theme.colorBrown};
    font-weight: bold;
    text-transform: uppercase;
  }
`;
const StyledRowUser = styled.div`
  display: flex;
  padding: 1rem;
  font-size: 1.2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colorMain};
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorWhite};
`;

const StyledCol = styled.span`
  width: 40%;
  color: ${({ theme }) => theme.colorPrimary};

  &:first-child {
    text-align: left;
  }

  &:nth-of-type(2) {
    width: 20%;
  }

  &:nth-of-type(3) {
    text-transform: uppercase;
  }

  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.colorWhite};
      font-weight: bold;
    `}
`;

const StyledPanelWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export class Stats extends Component {
  state = {
    currentUser: {
      id: 2,
      name: 'Dziedziuch',
      city: 'Radom',
      grabs: 999,
    },
    users: [
      {
        id: 1,
        name: 'Bondar',
        city: 'Radom',
        grabs: 379,
      },
      {
        id: 2,
        name: 'Dziedziuch',
        city: 'Radom',
        grabs: 999,
      },
      {
        id: 3,
        name: 'Szesnasty',
        city: 'Radom',
        grabs: 186,
      },
      {
        id: 4,
        name: 'Dęboch',
        city: 'Sosnowiec',
        grabs: 674,
      },
      {
        id: 5,
        name: 'Gucci',
        city: 'Sosnowiec',
        grabs: 725,
      },
      {
        id: 6,
        name: 'Paweł',
        city: 'Radom',
        grabs: 296,
      },
      {
        id: 7,
        name: 'Tomek',
        city: 'Sosnowiec',
        grabs: 341,
      },
      {
        id: 8,
        name: 'Patryk',
        city: 'Wałbrzych',
        grabs: 864,
      },
      {
        id: 9,
        name: 'Ramona',
        city: 'Wałbrzych',
        grabs: 761,
      },
      {
        id: 10,
        name: 'Ewelina',
        city: 'Łódź',
        grabs: 598,
      },
      {
        id: 11,
        name: 'Asia',
        city: 'Łódź',
        grabs: 982,
      },
      {
        id: 12,
        name: 'Aneta',
        city: 'Łódź',
        grabs: 351,
      },
      {
        id: 13,
        name: 'Patryk',
        city: 'Wałbrzych',
        grabs: 846,
      },
      {
        id: 14,
        name: 'Michał',
        city: 'Sosnowiec',
        grabs: 953,
      },
      {
        id: 15,
        name: 'Radzias',
        city: 'Radom',
        grabs: 175,
      },
    ],
    localUsers: [],
    userPosition: null,
    userLocalPosition: null,
    isLocal: false,
    globalPercentage: 0,
    localPercentage: 0,
  };

  componentDidMount() {
    const { users, currentUser } = this.state;

    const sortedUsers = users.sort((a, b) => (a.grabs < b.grabs ? 1 : -1));

    const localUsersArr = sortedUsers.filter(
      user => user.city.toLowerCase() === currentUser.city.toLowerCase(),
    );

    const userIndex = sortedUsers.findIndex(user => user.id === currentUser.id) + 1;
    const userLocalIndex = localUsersArr.findIndex(user => user.id === currentUser.id) + 1;
    const localPosition = Math.round(
      ((localUsersArr.length - userLocalIndex) / (localUsersArr.length - 1)) * 100,
    );
    const globalPosition = Math.round(
      ((sortedUsers.length - userIndex) / (sortedUsers.length - 1)) * 100,
    );

    const limitedUsers = sortedUsers.slice(0, 10);

    if (userIndex > 10) {
      limitedUsers.push(currentUser);
    }

    this.setState({
      users: limitedUsers,
      userPosition: userIndex,
      localUsers: localUsersArr,
      userLocalPosition: userLocalIndex,
      globalPercentage: globalPosition,
      localPercentage: localPosition,
    });
  }

  setIsLocal(isLocal) {
    this.setState({ isLocal });
  }

  render() {
    const {
      currentUser,
      users,
      userPosition,
      isLocal,
      localUsers,
      userLocalPosition,
      localPercentage,
      globalPercentage,
    } = this.state;
    return (
      <StyledWrapper>
        <StyledTitle>Your statistics</StyledTitle>
        <StyledSwitch className={isLocal ? '' : 'active'} onClick={() => this.setIsLocal(false)}>
          Global
        </StyledSwitch>
        /{' '}
        <StyledSwitch className={isLocal ? 'active' : ''} onClick={() => this.setIsLocal(true)}>
          Lokal
        </StyledSwitch>
        <StyledRatingWrapper>
          <StyledRow>
            <StyledCol>Name</StyledCol>
            <StyledCol>City</StyledCol>
            <StyledCol>Grabs</StyledCol>
          </StyledRow>
          {(isLocal ? localUsers : users).map((user, index) =>
            user.id !== currentUser.id ? (
              <StyledRow key={user.id}>
                <StyledCol>
                  {index + 1}. {user.name}
                </StyledCol>
                <StyledCol>{user.city}</StyledCol>
                <StyledCol>{user.grabs} Grabs</StyledCol>
              </StyledRow>
            ) : (
              <StyledRowUser key={user.id}>
                <StyledCol>
                  {isLocal ? userLocalPosition : userPosition}. {user.name}
                </StyledCol>
                <StyledCol>{user.city}</StyledCol>
                <StyledCol>{user.grabs} Grabs</StyledCol>
              </StyledRowUser>
            ),
          )}
        </StyledRatingWrapper>
        <StyledPanelWrapper>
          <CircularProgressBar
            percentage={localPercentage}
            headerText="You grabbed more than"
            footerText="Users in your city"
          ></CircularProgressBar>
          <CircularProgressBar
            percentage={globalPercentage}
            headerText="You grabbed more than"
            footerText="Users in your country"
          ></CircularProgressBar>
        </StyledPanelWrapper>
      </StyledWrapper>
    );
  }
}
