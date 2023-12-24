import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: whitesmoke;
  border-radius: 6px;
  padding: 4px 6px;
  background: #1976d2;
  transition: all 200ms ease-in;
  &:hover,
  :focus {
    background: #1565c0;
  }
`;
