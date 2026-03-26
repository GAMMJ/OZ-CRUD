import { useState } from 'react'
import { supabase } from '../lib/supabase'
import usePostStore from '../store/usePostStore'

export function useDeletePost() {
  const { removePost } = usePostStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function deletePost(id) {
    setLoading(true)
    setError(null)

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)

    setLoading(false)

    if (error) {
      setError(error)
      return false
    }

    removePost(id)
    return true
  }

  return { deletePost, loading, error }
}
