import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppProvider } from "./contexts/AppContext.tsx";

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <AppProvider>
    <App />
  </AppProvider>
);
