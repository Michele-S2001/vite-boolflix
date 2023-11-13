<script>
import store from '../store';

export default {

  data() {
    return {
      componentName: 'AppCard'
    }
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    flagPath() {
      return store.flags[this.item.original_language]
    },
  }
}

</script>

<template>
  <!-- film or tv card -->
  <div class="card">
    <ul class="card__movie-details">
      <li class="movie-detail">
        <span>Titolo:</span> {{ item.title || item.name }}
      </li>
      <li class="movie-detail">
        <span>Titolo originale:</span> {{ item.original_title || item.original_name }}
      </li>
      <li class="movie-detail">
        <img class="flag" v-if="flagPath" :src="flagPath" alt="country flag">
        <p v-else>Lingua: {{ item.original_language }}</p> 
      </li>
      <li class="movie-detail">
        <span>Voto:</span> {{ item.vote_average }}
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

    .flag {
      height: 20px;
    }
  }

</style>