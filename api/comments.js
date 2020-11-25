/* eslint-disable camelcase */
import { request, post } from './api'

export const getComments = async (id) => {
  const comments = await request(`/comments/${id}`)

  return comments
}

// eslint-disable-next-line require-await
export const postComment = async (name, description, image_id) =>
  post('/comments/add/', {
    name,
    description,
    image_id
  })
