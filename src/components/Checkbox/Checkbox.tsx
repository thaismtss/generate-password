import styled from 'styled-components';
import * as CheckboxRadix from '@radix-ui/react-checkbox';

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxRadix.Root> {
  children: string;
}

const CheckboxRoot = styled(CheckboxRadix.Root)`
  appearance: none;
  border: 2px solid #e5e5e9;
  background-color: transparent;
  cursor: pointer;
  height: 1.5rem;
  outline: none;
  transition: all 0.2s ease-in-out;
  width: 1.5rem;

  &[data-state='checked'] {
    background-color: #a5ffaf;
    border-color: #a5ffaf;
  }

  &[data-state='checked']::before {
    content: '✔';
    font-size: 1rem;
    position: relative;
    left: -0.1rem;
  }
`;

const Label = styled.label`
  color: #e5e5e9;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Checkbox({
  children = 'Checkbox',
  ...props
}: CheckboxProps) {
  return (
    <Wrapper>
      <CheckboxRoot {...props} />
      <Label>{children}</Label>
    </Wrapper>
  );
}
