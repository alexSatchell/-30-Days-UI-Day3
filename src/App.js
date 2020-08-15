import React from 'react';
import GlobalStyles from './styles/global';
import styled from 'styled-components';

import coverPhoto from './cover-photo.jpg';
import profilePicture from './profilePicture.jpg';

const Layout = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 5px;
  padding: 5px;

  -webkit-box-shadow: 0px 0px 5px 4px rgba(191, 191, 191, 0.15);
  -moz-box-shadow: 0px 0px 5px 4px rgba(191, 191, 191, 0.15);
  box-shadow: 0px 0px 5px 4px rgba(191, 191, 191, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoverPhotoContainer = styled.img`
  width: 100%;
  height: 100px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 1;
`;

const ProfilePicture = styled.img`
  width: 40%;
  clip-path: circle(31.8% at 46% 31%);
  z-index: 2;
  margin: -70px;
`;

const UserName = styled.h1`
  font-weight: 500;
  font-size: 20px;
  color: #38393a;
`;

const Location = styled.p`
  color: #afb3bb;
  font-size: 20px;
  font-weight: 400;
  margin-top: 2px;
`;

const LevelBadge = styled.div`
  margin-top: 12px;
  width: 33%;
  background: #2a61ff;
  color: #fefeff;
  font-size: 16px;
  padding: 10px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
`;

const StatsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  padding: 10px 30px;

  display: grid;
  justify-items: center;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
`;

const Followers = styled.div``;

const Projects = styled.div``;

const Rank = styled.div``;

const StatTitle = styled.p`
  color: #939aa5;
`;

const StatNumbers = styled.p`
  color: #4a4c4f;
  font-size: 26px;
  margin-top: 6px;
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Layout>
        <ProfileContainer>
          <CoverPhotoContainer src={coverPhoto} />
          <ProfilePicture src={profilePicture} />
          <UserName>Alexander Satchell</UserName>
          <Location>Orlando</Location>
          <LevelBadge>Pro Level</LevelBadge>
          <StatsContainer>
            <Followers>
              <StatTitle>Followers</StatTitle>
              <StatNumbers>762</StatNumbers>
            </Followers>
            <Projects>
              <StatTitle>Projects</StatTitle>
              <StatNumbers>35</StatNumbers>
            </Projects>
            <Rank>
              <StatTitle>Rank</StatTitle>
              <StatNumbers>118</StatNumbers>
            </Rank>
          </StatsContainer>
        </ProfileContainer>
      </Layout>
    </div>
  );
}

export default App;
