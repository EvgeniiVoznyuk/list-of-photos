<template>
  <b-modal
    id="my-modal"
    centered
    hide-header
    hide-footer
    size="lg"
  >
    <template #default="{ close }">
      <div class="my-modal">
        <div class="my-modal__img">
          <img :src="imgUrl" alt="" class="my-modal__img">
        </div>
        <div class="my-modal__comments">
          <span v-for="comment in comments" :key="comment.id" class="comments">
            <p class="comments__comment comment comment--name">
              {{ comment.name }}
            </p>
            <p class="comments__comment comment comment--description">
              {{ comment.description }}
            </p>
          </span>
        </div>
        <div class="my-modal__form">
          <form>
            <b-form-input type="text" class="my-modal__input" placeholder="Ваше имя" />
            <b-form-input type="text" class="my-modal__input" placeholder="Ваш комментарий" />
            <b-button variant="primary" class="my-modal__button">
              Оставить комментарий
            </b-button>
          </form>
        </div>
      </div>
      <button class="close__button" @click="close">
        &times;
      </button>
    </template>
  </b-modal>
</template>

<script>

export default {
  props: {
    imgUrl: {
      required: true,
      type: String
    },
    comments: {
      required: true,
      type: Array
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.my-modal {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
}
.my-modal__img {
  padding-top: 10px;
  width: 381px;
  height: 255px;
}
.my-modal__form {
  width: 381px;
  padding-top: 30px;
}
.my-modal__input, .my-modal__button {
  width: 100%;
  margin-bottom: 20px;
}
.close__button {
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  font-weight: bold;
  font-size: 20px;
  background: none;
}
</style>
