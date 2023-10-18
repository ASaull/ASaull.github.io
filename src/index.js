import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ProjectsEntry from './components/main/ProjectsEntry';
import Error from './components/main/Error';
import SingleProject, {
  loader as projectLoader
} from './components/main/SingleProject';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectsEntry/>,
    errorElement: <Error />,
    // children: [
    //   {
    //     path: "projects/:projectID",
    //     element: <SingleProject />,
    //     loader: projectLoader,
    //   },
    // ],
  },
  // {
  //   path: "projects/:projectID",
  //   element: <SingleProject />,
  //   loader: projectLoader,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
