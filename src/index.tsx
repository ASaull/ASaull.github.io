import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import ProjectsEntry from './components/main/ProjectsEntry';
import Error from './components/main/Error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProjectsEntry/>,
        errorElement: <Error />,
    },
]);

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement)
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
