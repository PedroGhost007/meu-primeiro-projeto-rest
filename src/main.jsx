import { StrictMode } from "react";
import App from "./App.jsx";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PromotorPage from "./pages/promotorPage.jsx";
import LoginForm from "./components/loginForm.jsx";
import ParquePage from "./pages/parquePage.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/promotor",
    element: <PromotorPage />,
  },
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/parque",
    element: <ParquePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
