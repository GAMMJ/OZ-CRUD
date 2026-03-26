import { create } from 'zustand'

const usePostStore = create((set) => ({
  posts: [],

  setPosts: (posts) => set({ posts }),

  addPost: (newPost) =>
    set((state) => ({ posts: [newPost, ...state.posts] })),

  removePost: (id) =>
    set((state) => ({ posts: state.posts.filter((p) => p.id !== id) })),

  updatePostInStore: (id, data) =>
    set((state) => ({
      posts: state.posts.map((p) => (p.id === id ? { ...p, ...data } : p)),
    })),
}))

export default usePostStore
