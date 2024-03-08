import Home from '@page/Home'
import SearchPage from '@page/SearchPage'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

export const routerObj = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },
])
