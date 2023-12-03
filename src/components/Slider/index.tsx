import * as SliderRadix from "@radix-ui/react-slider";
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from "./styles";

interface SliderProps extends React.ComponentProps<typeof SliderRadix.Root> {}

export default function Slider({ ...props }: SliderProps) {
  return (
    <SliderRoot {...props}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </SliderRoot>
  );
}
