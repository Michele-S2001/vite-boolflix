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
    fetchResults() {
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: store.API_KEY,
            query: store.searchText,
            language: 'it-IT'
          }
        }).then((par) => {
          console.log(par.data.results);
          store.movies = par.data.results;
        });
      axios
        .get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: store.API_KEY,
            query: store.searchText,
            language: 'it-IT'
          }
        }).then((par) => {
          console.log(par.data.results);
          store.series = par.data.results;
        })
    }
  },
}

</script>

<template>
  <!-- AppHeader + AppMain -->
  <AppHeader @performSearch="fetchResults"/>
  <AppMain/>
</template>

<style lang="scss">
  /* global style */
  @use "./styles/general.scss";
</style>
