<script>

export default {
  data() {
    return {
      componentName: 'AppHeader',
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
          <input class="input" type="text" placeholder="cerca un film nel catalogo">
          <button class="cta-search">Cerca</button>
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
