import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "../src/Routes/Simple Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
