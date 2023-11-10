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

  created() {
    console.log(store);
  }
}

</script>

<template>
  <!-- AppHeader + AppMain -->
  <AppHeader/>
  <AppMain/>
</template>

<style lang="scss">
  /* global style */
  @use "./styles/general.scss";
</style>
