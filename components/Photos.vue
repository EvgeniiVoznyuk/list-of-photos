<template>
  <div class="photos">
    <img
      v-for="photo in photos"
      :key="photo.image_id"
      class="photos__img"
      :src="photo.src"
      alt=""
      @click="log"
    >
  </div>
</template>

<script>

export default {
  data () {
    return {
      photos: []
    }
  },
  mounted () {
    const api = 'https://tzfrontend.herokuapp.com/images/'
    fetch(api)
      .then(response => response.json())
      .then((json) => { this.photos = json })
  },
  methods: {
    log () {
      // eslint-disable-next-line no-console
      console.log(this.photos)
    }
  }
}
</script>

<style scoped>
.photos {
  display: grid;
  grid-area: auto;
  gap: 20px;
}
</style>
