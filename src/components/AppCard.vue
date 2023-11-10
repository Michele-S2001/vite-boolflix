<script>

export default {

  data() {
    return {
      componentName: 'AppCard',
    }
  },

  props: {
    film: {
      type: Object,
      required: true
    }
  }
}

</script>

<template>
  <!-- film or tv card -->
  <div class="card">
    <ul class="card__movie-details">
      <li class="movie-detail">
        <span >Titolo:</span> {{ film.title }}
      </li>
      <li class="movie-detail">
        <span>Titolo originale:</span> {{ film.original_title }}
      </li>
      <li class="movie-detail">
        <span>Lingua:</span> {{ film.original_language }}
      </li>
      <li class="movie-detail">
        <span>Voto:</span> {{ film.vote_average }}
      </li>
    </ul>
  </div>

</template>

<style lang="scss">
@use '../styles/partial/variables' as *;
  /* style */
  .card {
    margin-bottom: 25px;
    padding: 10px;
    flex: 0 0 180px;
    border: 2px solid $lightGrey;
    color: $white;
    font-size: 16px;

    &__movie-details {
      .movie-detail  {
        margin-bottom: 10px;
        & span {
          font-weight: bold;
        }
      }
    }
  }

</style>