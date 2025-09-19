import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const AppLayoutContainer = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
`;

const AppLayout = () => {
  return (
    <>
      <Header />
      <AppLayoutContainer>
        <Sidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </AppLayoutContainer>
    </>
  );
};

export default AppLayout;
