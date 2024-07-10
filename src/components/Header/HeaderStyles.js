import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: #fb103d;
  color: white;
  padding: 10px 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin: 0 15px;
  background-color: #131415;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: orange;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
`;