import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px;
  height: 100vh;
  border-right: 1px solid #dee2e6;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 10px;
    text-decoration: none;
    color: #007bff;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/migration">Migration</Link>
        <Link to="/reports">Reporting</Link>
      </Nav>
    </SidebarContainer>
  );
};

export default Sidebar;
