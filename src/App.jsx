import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
