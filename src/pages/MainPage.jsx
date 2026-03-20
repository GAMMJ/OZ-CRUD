import { usePosts } from '../hooks/usePosts'
import PostCard from '../components/PostCard'

export default function MainPage() {
  const { posts, loading, error } = usePosts()

  if (loading) {
    return <p className="text-center text-gray-400 py-20">불러오는 중...</p>
  }

  if (error) {
    return <p className="text-center text-red-400 py-20">오류가 발생했습니다.</p>
  }

  if (posts.length === 0) {
    return <p className="text-center text-gray-400 py-20">등록된 게시글이 없습니다.</p>
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
