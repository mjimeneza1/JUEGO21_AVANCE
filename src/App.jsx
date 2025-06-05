import "./App.css";
import { Menu } from "./components/Menu";
import Info from "./components/Info";
import Tablero from "./components/mesa";
import Hola from "./components/cartas"
import { Credits } from "./components/Credits";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    errorElement: <h1>Error interno</h1>
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/game",
    element:   <div>
    <div className=" flex items-center justify-center h-full mx-auto  ">
      < Hola />
    </div>

    <div className="flex items-center justify-center h-full mx-auto ">
      <Tablero/>
  </div>
  </div>,
  },
  {
    path: "/credits",
    element: <Credits />,
  }
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
