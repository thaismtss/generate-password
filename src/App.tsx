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
  CaracteresLenghtWrapper,
  SliderWrapper,
} from './styles/app';
import { CopyIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import Slider from './components/Slider/Slider';
import { generatePassword } from './utils';

function App() {
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState({
    caracteresLenght: 10,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });

  function handleCheckboxChange(optionKey: string, value: boolean | number[]) {
    setOptions(prevOptions => ({ ...prevOptions, [optionKey]: value }));
  }

  function handleGeneratePassword() {
    const newPassword = generatePassword(options.caracteresLenght, {
      uppercase: options.includeUppercase,
      lowercase: options.includeLowercase,
      numbers: options.includeNumbers,
      symbols: options.includeSymbols,
    });
    setPassword(newPassword);
  }

  async function handleCopyPassword() {
    if (!password) return;
    try {
      await navigator.clipboard.writeText('password');
      alert('Senha copiada com sucesso');
    } catch {
      alert('Não foi possível copiar a senha');
    }
  }

  const checkboxOptions = [
    {
      label: 'Incluir letras maiúsculas',
      checked: options.includeUppercase,
      onCheckedChange: (value: boolean) =>
        handleCheckboxChange('includeUppercase', value),
    },
    {
      label: 'Incluir letras mininúsculas',
      checked: options.includeLowercase,
      onCheckedChange: (value: boolean) =>
        handleCheckboxChange('includeLowercase', value),
    },
    {
      label: 'Incluir números',
      checked: options.includeNumbers,
      onCheckedChange: (value: boolean) =>
        handleCheckboxChange('includeNumbers', value),
    },
    {
      label: 'Incluir símbolos',
      checked: options.includeSymbols,
      onCheckedChange: (value: boolean) =>
        handleCheckboxChange('includeSymbols', value),
    },
  ];

  return (
    <Wrapper>
      <H5>Password Generator</H5>
      <PasswordWrapper>
        <Password>{password}</Password>
        <CopyButton onClick={handleCopyPassword}>
          <CopyIcon color="#a5ffaf" width={25} height={25} />
        </CopyButton>
      </PasswordWrapper>
      <ContainerWrapper>
        <SliderWrapper>
          <CaracteresLenghtWrapper>
            <p>Número de caracteres:</p>
            <p>{options.caracteresLenght}</p>
          </CaracteresLenghtWrapper>
          <Slider
            min={3}
            max={50}
            value={[options.caracteresLenght]}
            onValueChange={value =>
              handleCheckboxChange('caracteresLenght', value)
            }
          />
        </SliderWrapper>
        <CheckboxWrapper>
          {checkboxOptions.map(option => (
            <Checkbox
              key={option.label}
              checked={option.checked}
              onCheckedChange={option.onCheckedChange}
            >
              {option.label}
            </Checkbox>
          ))}
        </CheckboxWrapper>
        <Button onClick={handleGeneratePassword}>Gerar senha</Button>
      </ContainerWrapper>
    </Wrapper>
  );
}

export default App;
