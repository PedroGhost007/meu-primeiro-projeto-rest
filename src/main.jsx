import { StrictMode } from "react";
import App from "./App.jsx";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PromotorPage from "./pages/promotorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/promotor",
    element: <PromotorPage />,
  },
  {
    path: "/login",
    element: <PromotorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
