import { useNavigate } from 'react-router-dom'

export default function PostCard({ post }) {
  const navigate = useNavigate()

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-lg font-bold text-gray-900">{post.title}</h2>
        <span className="text-gray-400 text-sm whitespace-nowrap ml-4">{post.date}</span>
      </div>
      <p className="text-gray-500 text-sm">{post.contents}</p>
      <div className="flex justify-end mt-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          삭제
        </button>
      </div>
    </div>
  )
}
