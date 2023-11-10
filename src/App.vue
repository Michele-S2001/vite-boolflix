<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import store from './store';

export default {
  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      rootComponent: 'App',
    }
  },

  methods: {
    fetchFilms() {
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: store.API_KEY,
            query: store.searchText
          }
        }).then((par) => {
          console.log(par.data.results);
          store.movies = par.data.results;
        })
    }
  },
}

</script>

<template>
  <!-- AppHeader + AppMain -->
  <AppHeader @performSearch="fetchFilms"/>
  <AppMain/>
</template>

<style lang="scss">
  /* global style */
  @use "./styles/general.scss";
</style>
