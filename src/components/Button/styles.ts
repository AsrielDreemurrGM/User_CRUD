import styled from 'styled-components';

export const StyledButton = styled.button<{
  $variant?: 'edit' | 'delete' | 'save' | 'cancel' | 'confirm';
}>`
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  background-color: ${({ $variant }) => {
    switch ($variant) {
      case 'edit':
        return '#0166ebff';
      case 'delete':
        return '#ff1f1fff';
      case 'save':
        return '#028a0f';
      case 'cancel':
        return '#888888';
      case 'confirm':
        return '#006400';
      default:
        return '#333333';
    }
  }};

  &:hover {
    background-color: ${({ $variant }) => {
      switch ($variant) {
        case 'edit':
          return '#005cd4ff';
        case 'delete':
          return '#be2020ff';
        case 'save':
          return '#02690c';
        case 'cancel':
          return '#666666';
        case 'confirm':
          return '#004d00';
        default:
          return '#111111';
      }
    }};
  }
`;
