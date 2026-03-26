import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { usePost } from '../hooks/usePost'
import { useUpdatePost } from '../hooks/useUpdatePost'
import { useDeletePost } from '../hooks/useDeletePost'

export default function DetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { post, setPost, loading, error } = usePost(id)
  const { updatePost, loading: updateLoading, error: updateError } = useUpdatePost()
  const { deletePost } = useDeletePost()

  const [isEditMode, setIsEditMode] = useState(false)
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  function handleEditClick() {
    setTitle(post.title)
    setContents(post.contents)
    setIsEditMode(true)
  }

  async function handleDelete() {
    const confirmed = window.confirm('정말 삭제하시겠습니까?')
    if (!confirmed) return

    const success = await deletePost(id)
    if (success) {
      navigate('/')
    }
  }

  function handleCancel() {
    setIsEditMode(false)
  }

  async function handleSave() {
    const success = await updatePost(id, { title, contents })
    if (success) {
      setPost({ ...post, title, contents })
      setIsEditMode(false)
    }
  }

  if (loading) {
    return <p className="text-center text-gray-400 py-20">불러오는 중...</p>
  }

  if (error || !post) {
    return <p className="text-center text-red-400 py-20">게시글을 찾을 수 없습니다.</p>
  }

  // 수정 모드
  if (isEditMode) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-10">
        <div className="mb-5">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors"
          />
        </div>

        <div className="mb-8">
          <textarea
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            rows={10}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors resize-y"
          />
        </div>

        {updateError && (
          <p className="text-red-400 text-sm mb-4">오류가 발생했습니다. 다시 시도해주세요.</p>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={handleSave}
            disabled={updateLoading}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {updateLoading ? '저장 중...' : '저장'}
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-100 text-gray-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            취소
          </button>
        </div>
      </div>
    )
  }

  // 조회 모드
  return (
    <div className="bg-white rounded-xl shadow-sm p-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h1>
      <p className="text-gray-400 text-sm mb-6">{post.date}</p>
      <hr className="border-gray-200 mb-6" />
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.contents}</p>

      <div className="flex justify-between mt-10">
        <button
          onClick={() => navigate('/')}
          className="bg-gray-100 text-gray-600 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          목록으로
        </button>
        <div className="flex gap-3">
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            수정
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  )
}
