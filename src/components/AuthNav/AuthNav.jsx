import { NavWrapper, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavWrapper>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </NavWrapper>
  );
};
