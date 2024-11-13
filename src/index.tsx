import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ListCategory } from "./features/categories/ListCategory";
import { CreateCategory } from "./features/categories/CreateCategory";
import { EditCategory } from "./features/categories/EditCategory";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListCategory />,
  },
  {
    path: "/categories",
    element: <ListCategory />,
  },
  {
    path: "/categories/create",
    element: <CreateCategory />,
  },
  {
    path: "/categories/edit/:id",
    element: <EditCategory />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
