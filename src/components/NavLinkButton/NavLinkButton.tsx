import type { NavLinkProps } from 'react-router-dom';

import { StyledNavLinkButton } from './styles';

interface NavLinkButtonProps extends Omit<NavLinkProps, 'children'> {
  buttonText: string;
}

function NavLinkButton({ buttonText, to, ...rest }: NavLinkButtonProps) {
  return (
    <StyledNavLinkButton
      to={to}
      {...rest}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {buttonText}
    </StyledNavLinkButton>
  );
}

export default NavLinkButton;
