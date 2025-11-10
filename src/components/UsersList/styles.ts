import styled from 'styled-components';
import { Breakpoints } from '../../styles/main';

export const ListContainer = styled.div`
  background-color: #e0e0e0;
  padding: 10px 20px;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  margin-top: 40px;
  box-shadow: 4px 4px 4px 0px darkgrey;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: ${Breakpoints.mobile}) {
    max-width: 350px;
    margin-top: 20px;
    gap: 12px;
  }

  h1 {
    margin-bottom: 8px;
  }
`;

export const UserCard = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 8px;
  border: 1px solid lightgray;
  padding: 12px 16px;
  box-shadow: 2px 2px 4px 0px gray;

  display: grid;
  grid-template-columns: 2fr auto;
  align-items: start;
  gap: 16px;

  @media (max-width: ${Breakpoints.mobile}) {
    grid-template-columns: 1fr;
    align-items: center;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-weight: 600;
    font-size: 14px;
    margin-left: 2px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  max-width: 50px;
  width: 100%;
`;

export const ReadOnlyInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f5f5f5;
  cursor: default;
  user-select: none;

  &:focus {
    outline: none;
  }
`;

export const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 8px;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 12px;

  p {
    font-size: 18px;
    font-weight: 500;
  }
`;
