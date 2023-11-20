import Checkbox from './components/Checkbox/Checkbox';
import Button from './components/Button/Button';
import {
  H5,
  ContainerWrapper,
  Wrapper,
  CheckboxWrapper,
  PasswordWrapper,
  CopyButton,
  Password,
} from './styles/app';
import { CopyIcon } from '@radix-ui/react-icons';

function App() {
  return (
    <Wrapper>
      <H5>Password Generator</H5>
      <PasswordWrapper>
        <Password></Password>
        <CopyButton>
          <CopyIcon color="#a5ffaf" width={25} height={25} />
        </CopyButton>
      </PasswordWrapper>
      <ContainerWrapper>
        <CheckboxWrapper>
          <Checkbox>Incluir letras maiúsculas</Checkbox>
          <Checkbox>Incluir letras mininúsculas</Checkbox>
          <Checkbox>Incluir números</Checkbox>
          <Checkbox>Incluir símbolos</Checkbox>
        </CheckboxWrapper>
        <Button onClick={() => {}}>Gerar senha</Button>
      </ContainerWrapper>
    </Wrapper>
  );
}

export default App;
