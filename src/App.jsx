import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'

const MainPage = lazy(() => import('./pages/MainPage'))
const WritePage = lazy(() => import('./pages/WritePage'))
const DetailPage = lazy(() => import('./pages/DetailPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Suspense fallback={null}><MainPage /></Suspense> },
      { path: 'write', element: <Suspense fallback={null}><WritePage /></Suspense> },
      { path: 'posts/:id', element: <Suspense fallback={null}><DetailPage /></Suspense> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
