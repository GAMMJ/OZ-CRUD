import { useParams, useNavigate } from 'react-router-dom'
import { usePost } from '../hooks/usePost'

export default function DetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { post, loading, error } = usePost(id)

  if (loading) {
    return <p className="text-center text-gray-400 py-20">불러오는 중...</p>
  }

  if (error || !post) {
    return <p className="text-center text-red-400 py-20">게시글을 찾을 수 없습니다.</p>
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h1>
      <p className="text-gray-400 text-sm mb-6">{post.date}</p>
      <hr className="border-gray-200 mb-6" />
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.contents}</p>

      <div className="flex justify-start mt-10">
        <button
          onClick={() => navigate('/')}
          className="bg-gray-100 text-gray-600 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          목록으로
        </button>
      </div>
    </div>
  )
}
