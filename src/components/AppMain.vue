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
    }
  },

  computed: {
    movies() {
      return store.movies
    }
  }
}

</script>

<template>
  <!-- cards -->
  <main class="main-content">
    <div class="container">
      <section class="searched-films">
        <AppCard v-for="movie in movies" :item="movie"/>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
@use '../styles/partial/variables' as *;
  /* style */
  .main-content {
    padding: 30px 10px 0 10px;

    .searched-films {
      display: flex;
      gap: 10px;
      overflow: auto;
      min-height: 300px;
    }
  }
</style>