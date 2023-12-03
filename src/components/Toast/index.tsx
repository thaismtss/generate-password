import * as ToastRadix from "@radix-ui/react-toast";
import { createContext, useState } from "react";
import {
  ToastDescription,
  ToastProps,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "./styles";
export interface ToastProviderProps {
  children: React.ReactNode;
}

type ToastContextType = {
  toast: (props: ToastProps) => void;
};

export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType,
);

export default function ToastProvider({ children }: ToastProviderProps) {
  const [open, setOpen] = useState(false);
  const [currentToast, setCurrentToast] = useState<ToastProps>(
    {} as ToastProps,
  );

  function toast(props: ToastProps) {
    setCurrentToast({ ...props });
    setOpen(true);
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastRadix.Provider swipeDirection="left">
        {children}
        <ToastRoot
          {...currentToast}
          duration={2000}
          variant={currentToast.variant}
          open={open}
          onOpenChange={setOpen}
        >
          <ToastTitle>
            {currentToast.title}
          </ToastTitle>
          <ToastDescription>{currentToast.description}</ToastDescription>
        </ToastRoot>
        <ToastViewport />
      </ToastRadix.Provider>
    </ToastContext.Provider>
  );
}
