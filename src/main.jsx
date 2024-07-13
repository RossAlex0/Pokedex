import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

import getPokemon from "./divers/getPokemon.js";

const router = createBrowserRouter([
  {
    element: <App />,
    id: "app",

    children: [
      {
        path: "/",
        element: <Home />,
        loader: getPokemon,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
