import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "../src/Routes/Simple Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
