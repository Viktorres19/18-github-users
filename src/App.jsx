import './App.css'
import {
  RouterProvider, createBrowserRouter
} from 'react-router-dom'
import { Dashboard, Login, Error } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
])

const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
