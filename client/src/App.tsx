import { useRoutes } from "react-router-dom";

import LoginPage from "./pages/login.page";
import NotFoundPage from "./pages/notFound.page";
import HomePage from "./pages/home.page";
import AuthLayout from "./authLayout";

const App = () => {
  const element = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        {
          path: "*" || "/404",
          element: <NotFoundPage />,
        },
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return element;
};

export default App;
