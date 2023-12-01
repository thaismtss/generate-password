import { StyledButton } from './styles';

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
