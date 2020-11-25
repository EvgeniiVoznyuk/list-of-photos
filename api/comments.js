import { request } from './api'

export const getComments = async (id) => {
  const comments = await request(`/comments/${id}`)

  return comments
}
