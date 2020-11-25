<template>
  <div class="photos">
    <img
      v-for="photo in photos"
      :key="photo.image_id"
      class="photos__img"
      :src="photo.src"
      alt=""
      @click="modal(photo.image_id)"
    >
  </div>
</template>

<script>
import { getImages } from '../api/images.js'

export default {
  data () {
    return {
      photos: []
    }
  },
  mounted () {
    this.loadImages()
      .then((respones) => { this.photos = respones })
  },
  methods: {
    modal (id) {
      this.$emit('show', id)
    },
    async loadImages () {
      const images = await getImages()

      return images
    }
  }
}
</script>

<style scoped>
.photos {
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 20px;
  row-gap: 30px;
  justify-content: center;
  margin-top: 80px;
}
.photos__img {
  width: 229px;
  height: 142px;
  cursor: pointer;
}

@media screen and (max-width: 760px) {
  .photos {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .photos__img {
    width: 280px;
    height: 171px;
  }
}
</style>
