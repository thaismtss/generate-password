import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { CheckboxRoot, Label, Wrapper } from './styles';

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxRadix.Root> {
  children: string;
}

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
