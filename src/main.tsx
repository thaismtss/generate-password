import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/globalStyle.ts";
import ToastProvider from "./components/Toast/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>,
);
