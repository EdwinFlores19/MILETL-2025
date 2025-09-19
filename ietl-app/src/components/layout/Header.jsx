import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 10px 20px;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  a {
    margin: 0 10px;
    text-decoration: none;
    color: #007bff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>IETL App</h1>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
