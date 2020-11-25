import { request } from './api'

export const getImages = async () => {
  const images = await request('/images/')

  return images
}

export const getImg = async (imgId) => {
  const images = await request(`/images/${imgId}`)

  return images
}
