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
            <p class="comments__comment  comments__comment--description">
              {{ comment.description }}
            </p>
          </span>
        </div>
        <div class="my-modal__form">
          <form @submit.prevent="onSubmit">
            <span
              v-if="newComment.name === '' || newComment.comment === ''"
              class="warning"
            >
              All fields required
            </span>
            <b-form-input
              v-model="newComment.name"
              type="text"
              class="my-modal__input"
              placeholder="Ваше имя"
            />
            <b-form-input
              v-model="newComment.comment"
              type="text"
              class="my-modal__input"
              placeholder="Ваш комментарий"
            />
            <b-button variant="primary" class="my-modal__button" type="submit">
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
import { postComment } from '../api/comments'
export default {
  props: {
    imgUrl: {
      required: true,
      type: String
    },
    comments: {
      required: true,
      type: Array
    },
    imgId: {
      required: true,
      type: Number
    }
  },
  data () {
    return {
      newComment: {
        name: null,
        comment: null
      }
    }
  },
  methods: {
    async onSubmit () {
      const { name, comment } = this.newComment
      if (name.trim() && comment.trim()) {
        await postComment(name, comment, this.imgId)
        this.$bvModal.hide('my-modal')
        this.setDefaultInputs()
      }
    },
    setDefaultInputs () {
      this.newComment.name = null
      this.newComment.comment = null
    }
  }
}
</script>

<style lang="scss" scoped>
.my-modal {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;

  &__img {
    padding-top: 10px;
    width: 381px;
    height: 255px;
  }

  &__form {
    width: 381px;
    padding-top: 30px;
  }

  &__input, &__button {
    width: 100%;
    margin-bottom: 20px;
  }

  &__comments {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}

.warning {
  color: red;
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
.comments {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__comment {
    margin: 0;

    &--description {
      font-weight: bold;
    }
  }
}

@media screen and (max-width: 990px) {
  .my-modal {
    display: grid;
    grid-template-columns: repeat(1, auto);
    gap: 20px;
    justify-items: flex-start;
    justify-content: center;
  }
}

@media screen and (max-width: 500px) {
  .my-modal {
    &__img {
      padding-top: 10px;
      width: 300px;
      height: 255px;
    }

    &__form {
      width: 300px;
    }
  }
}

</style>
