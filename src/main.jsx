import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Calendario from "./Calendario.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Calendario />
  </StrictMode>,
);
