import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import Slider from "./components/Slider";
import { ToastContext } from "./components/Toast";
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
} from "./styles/app";
import { CopyIcon } from "@radix-ui/react-icons";
import { useContext, useState } from "react";
import { generatePassword } from "./utils";

function App() {
  const { toast } = useContext(ToastContext);
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState({
    caracteresLenght: 10,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });

  function handleCheckboxChange(optionKey: string, value: boolean | number[]) {
    setOptions((prevOptions) => ({ ...prevOptions, [optionKey]: value }));
  }

  function handleGeneratePassword() {
    const newPassword = generatePassword(options.caracteresLenght, {
      uppercase: options.includeUppercase,
      lowercase: options.includeLowercase,
      numbers: options.includeNumbers,
      symbols: options.includeSymbols,
    });
    if (!newPassword) {
      toast({
        title: "Selecione pelo menos uma opção",
        duration: 5000,
        variant: "warning",
      });
      return;
    }
    setPassword(newPassword);
  }

  async function handleCopyPassword() {
    if (!password) return;
    try {
      await navigator.clipboard.writeText("password");
      toast({
        title: "Senha copiada com sucesso",
        duration: 5000,
        variant: "success",
      });
    } catch {
      toast({
        title: "Erro ao copiar senha",
        duration: 5000,
        variant: "error",
      });
    }
  }

  const checkboxOptions = [
    {
      label: "Incluir letras maiúsculas",
      checked: options.includeUppercase,
      onCheckedChange: (value: boolean) =>
        handleCheckboxChange("includeUppercase", value),
    },
    {
      label: "Incluir letras mininúsculas",
      checked: options.includeLowercase,
      onCheckedChange: (value: boolean) =>
        handleCheckboxChange("includeLowercase", value),
    },
    {
      label: "Incluir números",
      checked: options.includeNumbers,
      onCheckedChange: (value: boolean) =>
        handleCheckboxChange("includeNumbers", value),
    },
    {
      label: "Incluir símbolos",
      checked: options.includeSymbols,
      onCheckedChange: (value: boolean) =>
        handleCheckboxChange("includeSymbols", value),
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
            onValueChange={(value) =>
              handleCheckboxChange("caracteresLenght", value)
            }
          />
        </SliderWrapper>
        <CheckboxWrapper>
          {checkboxOptions.map((option) => (
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
