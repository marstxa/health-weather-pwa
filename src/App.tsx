import { createBrowserRouter } from "react-router";
import Index from "./pages/Index";
import { RouterProvider } from "react-router";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUP";
import Info from "./pages/Info";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import { AuthProvider, ProtectedRoute } from "./components/CustomHooks/useAuth";

const route = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/signIn", element: <SignIn /> },
  { path: "signUp", element: <SignUp /> },
  {
    path: "/info",
    element: (
      <ProtectedRoute>
        <Info />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  { path: "/resetPassword", element: <ForgotPassword /> },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
