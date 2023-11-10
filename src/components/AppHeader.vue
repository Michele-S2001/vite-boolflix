<script>
import store from '../store.js';

export default {
  data() {
    return {
      componentName: 'AppHeader',
      store,
    }
  },

  methods: {
    search() {
      this.$emit('performSearch');
    }
  }
}

</script>

<template>
  <!-- header => logo + search bar -->
  <header class="page-header">
    <div class="container">
      <nav class="navbar">
        <h1 class="logo">Boolflix</h1>
        <div class="input-field">
          <input 
            class="input" 
            type="text" 
            v-model="store.searchText"
            @keyup.enter="search"
            placeholder="cerca un film nel catalogo">
          <button @click="search" class="cta-search">
            Cerca
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  /* style */
  @use '../styles/partial/mixins.scss' as *;
  @use '../styles/partial/variables' as *;

  .page-header {
    background-color: $black;
  }
  .navbar {
    @include flexSetUp(space-between);
    padding: 10px;

    .logo {
      color: $netflixRed;
      font-size: 34px;
      letter-spacing: 1.4px;
      text-transform: uppercase;
    }

    .input-field {
      @include flexSetUp(center);
      gap: 10px;

      .input {
        border: none;
        padding: 0 10px;
        line-height: 30px;
      }

      .cta-search {
        line-height: 30px;
        padding: 0 5px;
        background-color: $white;
      }
    }
  }
</style>
