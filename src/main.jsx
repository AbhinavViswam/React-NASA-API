import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import router from "./Routes/Routes";

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  <App/>
  </RouterProvider>
)
