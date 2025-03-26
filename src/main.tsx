import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx'
import Users from './pages/Users.tsx'
import Settings from './pages/Settings.tsx'
const routes = createBrowserRouter([
  {
    element:<App />,
    path:"",
    children:[
      {
        element: <Dashboard />,
        index: true,
      },
      {
        element:<Dashboard />,
        path:"/dashboard"
      },
      {
        element:<Users />,
        path:"/users"
      },
      {
        element:<Settings />,
        path:"/settings"
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
