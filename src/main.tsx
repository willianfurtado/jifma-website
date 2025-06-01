import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Matches from "./pages/Matches/index.tsx";
import Modalities from "./pages/Modalities/index.tsx";
import Medal from "./pages/Medal/index.tsx";
import Caxias from "./pages/Caxias/index.tsx";
import "./index.css";
import Restaurantes from "./pages/Restaurants/index.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> } ,
  { path: "/partidas", element: <Matches/>},
  { path: "/modalidades", element: <Modalities/>},
  { path: "/quadro-de-medalhas", element: <Medal/>},
  { path: "/conheca-Caxias", element: <Caxias/>},
  { path: "/restaurantes", element: <Restaurantes/>},
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
