import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
`;

export const Button = styled.button`
  color: whitesmoke;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  padding: 4px 6px;
  background: #1976d2;
  transition: all 200ms ease-in;
  &:hover,
  :focus {
    background: #1565c0;
  }
`;
