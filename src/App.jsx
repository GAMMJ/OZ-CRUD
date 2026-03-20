import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import MainPage from './pages/MainPage'
import WritePage from './pages/WritePage'
import DetailPage from './pages/DetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'write', element: <WritePage /> },
      { path: 'posts/:id', element: <DetailPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
