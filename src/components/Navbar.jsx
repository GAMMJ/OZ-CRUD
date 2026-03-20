import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center relative">
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-xl font-bold text-gray-900 hover:text-blue-500 transition-colors">
          게시판
        </Link>
        <Link
          to="/write"
          className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
        >
          글쓰기
        </Link>
      </div>
    </nav>
  )
}
