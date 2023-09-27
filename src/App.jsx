import './App.css'
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import { Dashboard, Login, PrivateRoute, Error } from './pages'

const App = () => {

  return (
    <Router>
      <Routes>
          <Route
            exact
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          {/* <Route exact path='/' element={<Dashboard/>}/> */}
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
    </Router>
  )
}

export default App

/* import './App.css'
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

export default App */
