import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { TodoContext } from "./context/TodoContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContext>
        <App />
      </TodoContext>
    </BrowserRouter>
  </React.StrictMode>
);
