import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./RTL.css";
import router from "./Routers/router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
