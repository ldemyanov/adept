import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { initStore } from "./store";
import { App } from "./components/App";
import "@/index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={initStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);
