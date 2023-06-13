import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LanguageProvider from "./Contex/LanguageProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Suspense fallback={<h2>Loading...</h2>}>
    <React.StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </React.StrictMode>
  </React.Suspense>
);
