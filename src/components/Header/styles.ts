import styled from 'styled-components';
import { Breakpoints } from '../../styles/main';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #ffc919ff;
  padding: 16px 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  user-select: none;

  picture {
    margin-bottom: 12px;

    @media (max-width: ${Breakpoints.mobile}) {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 8px 0 2px;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 16px;
  overflow: hidden;
  max-height: 500px;
  transition:
    max-height 0.6s ease-in-out,
    transform 0.6s ease-in-out;

  li {
    width: 100%;
    max-width: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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

    &.highlighted {
      background-color: black;
      color: white;

      &:hover {
        background-color: black;
      }
    }
  }

  li:nth-child(1) {
    grid-column: 1;
    justify-self: end;
  }

  li:nth-child(2) {
    grid-column: 3;
    justify-self: start;
  }

  &.hidden {
    max-height: 0;
    transform: translateY(-16px);
    pointer-events: none;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;

    li {
      margin: 8px 0;
    }
  }
`;

export const ToggleNav = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: black;

  span {
    padding: 0 2px;
    cursor: pointer;
  }
`;
