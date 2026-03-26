import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function usePost(id) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        setError(error)
      } else {
        setPost(data)
      }
      setLoading(false)
    }

    fetchPost()
  }, [id])

  return { post, setPost, loading, error }
}
