import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HomeLayout, Landing, Error, AllMedications, Details } from "./pages";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 mins to keep data
    },
  },
});

import { loader as allMedicationsLoader } from "./pages/AllMedications";
// npm install dompurify

const router = createBrowserRouter(
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
        {
          path: "details/:category/:name",
          element: <Details />,
        },
      ],
    },
  ],
  {
    basename: "/medsearch-spa-react",
  }
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

/**
 * npm install @tanstack/react-query @tanstack/react-query-devtools axios dayjs? react-icons react-router-dom react-toastify recharts? styled-components
 */
