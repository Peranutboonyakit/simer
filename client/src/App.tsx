import { useRoutes } from "react-router-dom";

import LoginPage from "./pages/login.page";
import NotFoundPage from "./pages/notFound.page";
import HomePage from "./pages/home.page";
import AuthLayout from "./components/layouts/authLayout";
import CollectionPage from "./pages/collection.page";

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
        {
          path: "/collection/:brand",
          element: <CollectionPage />,
        },
      ],
    },
  ]);
  return element;
};

export default App;
