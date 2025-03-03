import { createBrowserRouter } from "react-router";
import Index from "./pages/Index";
import { RouterProvider } from "react-router";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUP";
import Info from "./pages/Info";
import Dashboard from "./pages/Dashboard";

const route = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/signIn", element: <SignIn /> },
  { path: "signUp", element: <SignUp /> },
  { path: "/info", element: <Info /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
