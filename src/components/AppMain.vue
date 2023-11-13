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
    },

    series() {
      return store.series
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
        <AppCard v-for="show in series" :item="show"/>
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
      gap: 7px;
      overflow: auto;
    }
  }
</style>