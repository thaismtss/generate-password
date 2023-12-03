import styled, { css, keyframes } from "styled-components";
import * as ToastRadix from "@radix-ui/react-toast";

export interface ToastProps extends Omit<ToastRadix.ToastProps, "asChild"> {
  title: string;
  description?: string;
  variant?: "success" | "error" | "warning";
}

interface ToastRootProps extends Omit<ToastProps, "title" | "description"> {}

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

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

export const ToastRoot = styled(ToastRadix.Root)<ToastRootProps>`
  ${(props) =>
    props.variant && toastVariants[props.variant as keyof typeof toastVariants]}
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
  &[data-state="open"] {
    animation: ${slideIn} 500ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-state="closed"] {
    animation: ${hide} 100ms ease-in;
  }
  &[data-swipe="move"] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  &[data-swipe="cancel"] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }
  &[data-swipe="end"] {
    animation: ${swipeOut} 100ms ease-out;
  }
`;

export const ToastTitle = styled(ToastRadix.Title)`
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
`;

export const ToastDescription = styled(ToastRadix.Description)`
  font-size: 0.875rem;
  line-height: 1.5;
  color: #fff;
`;

export const ToastViewport = styled(ToastRadix.Viewport)`
  position: fixed;
  left: 50%;
  top: 5%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  gap: 8px;
  margin: 0;
  list-style: none;
  outline: none;
  padding: ${VIEWPORT_PADDING}px;
  width: 320px;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;
