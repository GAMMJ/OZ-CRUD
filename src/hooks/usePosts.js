import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function usePosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('date', { ascending: false })

      if (error) {
        setError(error)
      } else {
        setPosts(data)
      }
      setLoading(false)
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}
