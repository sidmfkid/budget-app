import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  NewProject,
  Dashboard,
  Account,
  Settings,
  Projects,
} from './pages';
import { Header } from './components'

// import.meta.hot

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/new",
        element: <NewProject />
      },
      {
        path: "settings",
        element: <Settings />,
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Header /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
