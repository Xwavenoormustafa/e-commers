import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './Components/layout/AppLayout';
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />},
    {
      path: "/sign-in", element: <h1>Sign in Page</h1>
    },
 
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
