import { HeaderContainer, Nav, NavList, NavItem, NavLink } from './HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem><NavLink href="#hero">Inicio</NavLink></NavItem>
          <NavItem><NavLink href="#featured-products">Productos</NavLink></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;