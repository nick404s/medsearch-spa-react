import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HomeLayout, Landing, Error, AllMedications } from "./pages";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 mins to keep data
    },
  },
});

import { loader as allMedicationsLoader } from "./pages/AllMedications";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "all-medications",
          element: <AllMedications />,
          loader: allMedicationsLoader(queryClient),
        },
      ],
    },
  ]
  // {
  //   basename: import.meta.env.BASE_URL, // no need with the hash router
  // }
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
