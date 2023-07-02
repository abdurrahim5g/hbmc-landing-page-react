import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./RTL.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import router from "./Routers/router";
import { useState } from "react";
import { useEffect } from "react";
import Placeholder from "./components/Shared/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* {!loading && <Placeholder />} */}
    </>
  );
}

export default App;
