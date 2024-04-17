import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/layout";
import Home from "./components/home";
import Account from "./components/account";
import Transaction from "./components/transaction";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "accounts",
        element: <Account />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
