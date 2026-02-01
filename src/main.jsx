import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Maine '!' nishan hata diya hai jo document.getElementById ke baad tha
createRoot(document.getElementById("root")).render(<App />);