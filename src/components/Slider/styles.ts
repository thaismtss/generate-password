import * as SliderRadix from "@radix-ui/react-slider";
import styled from "styled-components";

export const SliderRoot = styled(SliderRadix.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;
  height: 20px;
`;

export const SliderThumb = styled(SliderRadix.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  z-index: 1;
  background-color: #e5e5e9;
  border-radius: 10px;
  &:hover {
    background-color: #d2d2d5;
  }
  &:focus {
    outline: none;
  }
`;

export const SliderTrack = styled(SliderRadix.Track)`
  background-color: #18171f;
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 8px;
`;

export const SliderRange = styled(SliderRadix.Range)`
  position: absolute;
  background-color: #a5ffaf;
  border-radius: 9999px;
  height: 100%;
`;
