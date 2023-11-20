import styled from 'styled-components';

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  background-color: #a5ffaf;
  color: #24232a;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  padding: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #8df78d;
  }
`;

export default function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
