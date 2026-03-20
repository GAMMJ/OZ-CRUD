import { useParams } from 'react-router-dom'

export default function DetailPage() {
  const { id } = useParams()

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">게시글 상세</h1>
      <p className="text-gray-500">Post ID: {id}</p>
    </div>
  )
}
