import * as ToastRadix from '@radix-ui/react-toast';
import { createContext, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

export interface ToastProviderProps {
  children: React.ReactNode;
}

export interface ToastProps extends Omit<ToastRadix.ToastProps, 'asChild'> {
  title: string;
  description?: string;
  variant?: 'success' | 'error' | 'warning';
}

interface ToastRootProps extends Omit<ToastProps, 'title' | 'description'> {}

type ToastContextType = {
  toast: (props: ToastProps) => void;
};

export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType
);

const toastVariants = {
  success: css`
    background-color: #41c13c;
  `,
  warning: css`
    background-color: #f3a01b;
  `,
  error: css`
    background-color: #f13637;
  `,
};

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const ToastRoot = styled(ToastRadix.Root)<ToastRootProps>`
  ${props => props.variant && toastVariants[props.variant]}
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  width: 320px;

  @media (max-width: 768px) {
    width: calc(100vw - 4rem);
    margin: 0 auto;
  }

  &:focus {
    outline: none;
  }
  &[data-state='open'] {
    animation: ${slideIn} 500ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-state='closed'] {
    animation: ${hide} 100ms ease-in;
  }
  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }
  &[data-swipe='end'] {
    animation: ${swipeOut} 100ms ease-out;
  }
`;

const ToastTitle = styled(ToastRadix.Title)`
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
`;

const ToastDescription = styled(ToastRadix.Description)`
  font-size: 0.875rem;
  line-height: 1.5;
  color: #fff;
`;

const ToastViewport = styled(ToastRadix.Viewport)`
  position: fixed;
  left: 50%;
  top: 5%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  /* gap: 8px; */
  margin: 0;
  list-style: none;
  outline: none;
  padding: ${VIEWPORT_PADDING}px;
  width: 320px;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export default function ToastProvider({ children }: ToastProviderProps) {
  const [open, setOpen] = useState(false);
  const [currentToast, setCurrentToast] = useState<ToastProps>(
    {} as ToastProps
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
          <ToastTitle className="font-semibold mb-1">
            {currentToast.title}
          </ToastTitle>
          <ToastDescription>{currentToast.description}</ToastDescription>
        </ToastRoot>
        <ToastViewport />
      </ToastRadix.Provider>
    </ToastContext.Provider>
  );
}
