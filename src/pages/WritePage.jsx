import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreatePost } from '../hooks/useCreatePost'

export default function WritePage() {
  const navigate = useNavigate()
  const { createPost, loading, error } = useCreatePost()

  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const success = await createPost({ title, contents })
    if (success) {
      navigate('/')
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">새 글 작성</h1>
        <p className="text-gray-400 text-sm">자유롭게 글을 작성하고 공유해보세요 ✏️</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">내용</label>
          <textarea
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            placeholder="내용을 입력하세요"
            required
            rows={10}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors resize-y"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm mb-4">오류가 발생했습니다. 다시 시도해주세요.</p>
        )}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="bg-red-400 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-red-500 transition-colors"
          >
            돌아가기
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {loading ? '작성 중...' : '작성하기'}
          </button>
        </div>
      </form>
    </div>
  )
}
