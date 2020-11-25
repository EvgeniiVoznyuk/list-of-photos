/* eslint-disable vue/attribute-hyphenation */
<template>
  <div>
    <Header />
    <div class="container">
      <Photos @show="showModal" />
      <Modal :img-url="currentPhoto" />
    </div>
  </div>
</template>

<script>
import Photos from '../components/Photos.vue'
import { getImg } from '../api/images.js'
export default {
  components: { Photos },
  data () {
    return {
      currentPhoto: ''
    }
  },
  methods: {
    showModal (id) {
      this.loadImg(id)
        .then((response) => { this.currentPhoto = response.src })
      this.$bvModal.show('my-modal')
    },
    async loadImg (id) {
      const img = await getImg(id)

      return img
    }
  }
}
</script>

<style>
</style>
