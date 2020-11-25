/* eslint-disable vue/attribute-hyphenation */
<template>
  <div>
    <Header />
    <div class="container">
      <Photos @show="showModal" />
      <Modal :img-url="currentPhoto" :comments="comments" />
    </div>
  </div>
</template>

<script>
import Photos from '../components/Photos.vue'
import { getImg } from '../api/images.js'
import { getComments } from '../api/comments.js'
export default {
  components: { Photos },
  data () {
    return {
      currentPhoto: '',
      comments: []
    }
  },
  methods: {
    showModal (id) {
      this.loadImg(id)
        .then((response) => { this.currentPhoto = response.src })
      this.loadComments(id)
        .then((response) => { this.comments = response })
      setTimeout(() => {
        this.$bvModal.show('my-modal')
      }, 250)
    },
    async loadImg (id) {
      const img = await getImg(id)

      return img
    },
    async loadComments (id) {
      const comments = await getComments(id)

      return comments
    }
  }
}
</script>

<style>
</style>
