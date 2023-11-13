<script>
import store from '../store';

export default {

  data() {
    return {
      componentName: 'AppCard',
      maxStarNum: 5
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
      return store.flags[this.item.original_language];
    },
    getVote() {
      return Math.ceil(this.item.vote_average / 2);
    }
  },
}

</script>

<template>
  <!-- film or tv card -->
  <div class="card">
    <ul class="card__item-details">
      <li class="item-detail">
        <span>Titolo:</span> {{ item.title || item.name }}
      </li>
      <li class="item-detail">
        <span>Titolo originale:</span> {{ item.original_title || item.original_name }}
      </li>
      <li class="item-detail">
        <img class="flag" v-if="flagPath" :src="flagPath" alt="country flag">
        <p v-else>Lingua: {{ item.original_language }}</p> 
      </li>
      <li class="item-detail">
        <font-awesome-icon
          class="vote-stars"
          :class="{starCounted: i < getVote && getVote > 0}"
          v-for="(star, i) in maxStarNum"
          icon="star" />
      </li>
      <li class="item-detail">
        <img 
          :src="`https://image.tmdb.org/t/p/w300${this.item.backdrop_path}`"
          alt="thumbnail not found"
        >
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

    &__item-details {
      .item-detail  {
        margin-bottom: 10px;
        & span {
          font-weight: bold;
        }
      }
    }

    .flag {
      height: 20px;
    }

    .vote-stars {
      &.starCounted {
        color: $yellow;
      }
    }
  }

</style>