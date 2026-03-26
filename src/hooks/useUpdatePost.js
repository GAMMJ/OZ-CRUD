import { useState } from 'react'
import { supabase } from '../lib/supabase'
import usePostStore from '../store/usePostStore'

export function useUpdatePost() {
  const { updatePostInStore } = usePostStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function updatePost(id, { title, contents }) {
    setLoading(true)
    setError(null)

    const { error } = await supabase
      .from('posts')
      .update({ title, contents })
      .eq('id', id)

    setLoading(false)

    if (error) {
      setError(error)
      return false
    }

    updatePostInStore(id, { title, contents })
    return true
  }

  return { updatePost, loading, error }
}
