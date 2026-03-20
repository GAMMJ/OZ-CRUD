import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
