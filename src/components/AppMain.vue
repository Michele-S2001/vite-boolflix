<script>
import AppCard from './AppCard.vue';
import store from '../store';

export default {
  components: {
    AppCard
  },

  data() {
    return {
      componentName: 'AppMain',
      open: false,
      currentItem: {}
    }
  },
  
  methods: {
    showModal(item) {
      this.currentItem = item;
      this.open = true;
    },
    closeModal() {
      this.open = false;
      this.currentItem = {};
    }
  },

  computed: {
    movies() {
      return store.movies
    },

    series() {
      return store.series
    },

    modalImg() {
      if(!this.currentItem.backdrop_path) {
        return '/img/noImg.png'
      } else {
        return `https://image.tmdb.org/t/p/w300${this.currentItem.backdrop_path}`
      }
    }
  }
}

</script>

<template>
  <!-- cards -->
  <main class="main-content">
    <div class="container">
      <section class="searched-films">
        <AppCard @showDescription="showModal" v-for="movie in movies" :item="movie"/>
        <AppCard @showDescription="showModal" v-for="show in series" :item="show"/>
      </section>
    </div>
  </main>

  <div v-if="open" class="modal" @click="closeModal">
    <div class="modal__text-area">
      <div class="modal-title">
        <h3>Overview</h3>
        <font-awesome-icon @click.stop="closeModal" icon="x" class="close"/>
      </div>
      <img class="thumbnail" :src="modalImg">
      <p class="description">{{ currentItem.overview }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@use '../styles/partial/variables' as *;
@use '../styles/partial/mixins' as *;
  /* style */
  .main-content {
    padding: 30px 10px 0 10px;

    .searched-films {
      display: flex;
      gap: 7px;
      overflow: auto;
    }
  }

  .modal {
    position: absolute;
    z-index: 99;
    inset: 0;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__text-area {
      color: $white;
      max-width: 500px;
      background-color: $darkGrey;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 2px 2px 10px $black;

      .modal-title {
        @include flexSetUp(space-between);

        .close {
          cursor: pointer;
        }
      }

      .description {
        line-height: 20px;
        font-size: 16px;
      }

      .thumbnail {
        margin: 40px auto;
        border-radius: 15px;
        max-width: 300px;
      }
    }
  }
</style>