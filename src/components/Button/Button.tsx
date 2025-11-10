import { StyledButton } from './styles';

interface ButtonProps {
  buttonText: string;
  variant?: 'edit' | 'delete' | 'save' | 'cancel' | 'confirm';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

function Button({
  buttonText,
  variant,
  onClick,
  type = 'button'
}: ButtonProps) {
  return (
    <StyledButton type={type} $variant={variant} onClick={onClick}>
      {buttonText}
    </StyledButton>
  );
}

export default Button;
