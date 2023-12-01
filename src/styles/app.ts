import styled from "styled-components";

export const H5 = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0;
  text-align: center;
  color: #5e5c6a;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(var(--vh, 1vh) * 100);
  max-width: 35rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: calc(100vw - 6rem);
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ContainerWrapper = styled.div`
  background-color: #24232a;
  padding: 2rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const PasswordWrapper = styled.div`
  background-color: #24232a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  width: 100%;
`

export const CaracteresLenghtWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 600;
`

export const SliderWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`

export const Password = styled.p`
  color: #e5e5e9;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  &:empty::before {
    content: 'P4s$w0rd';
    color: #5e5c6a;
  }
`;

export const CopyButton = styled.button`
  background-color: #24232a;
  color: #5e5c6a;
  border-radius: 50%;
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    color: #f5f5f5;
    background-color: #ddffe1ab;
    transition-duration: 0.5s;
    transition-delay: 0.2s;
  }
`