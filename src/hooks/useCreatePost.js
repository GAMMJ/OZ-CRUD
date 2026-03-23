import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

export function useCreatePost() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function createPost({ title, contents }) {
    setLoading(true)
    setError(null)

    const newPost = {
      id: nanoid(),
      title,
      contents,
      date: dayjs().format('YYYY-MM-DD HH:mm'),
    }

    const { error } = await supabase.from('posts').insert(newPost)

    setLoading(false)

    if (error) {
      setError(error)
      return false
    }

    return true
  }

  return { createPost, loading, error }
}
