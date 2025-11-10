import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLinkButton = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid black;
  cursor: pointer;
  color: black;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  transition: all 0.1s ease;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    background-color: #e0e0e0;
  }

  &.active {
    background-color: black;
    color: white;

    &:hover {
      background-color: black;
    }
  }
`;
