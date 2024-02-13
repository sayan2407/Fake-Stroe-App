import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";

const root = document.getElementById("root");



createRoot(root).render(
  <AppProvider>
     <BrowserRouter>
    <App />
  </BrowserRouter>

  </AppProvider>
 
);
