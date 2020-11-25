/* eslint-disable vue/attribute-hyphenation */
<template>
  <div>
    <Header />
    <div class="container">
      <Photos @show="showModal" />
      <Modal :img-url="currentPhoto" :comments="comments" :img-id="imgId" />
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
      comments: [],
      imgId: 0
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
      this.imgId = id
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
