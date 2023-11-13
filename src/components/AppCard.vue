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
    <div class="card__thumbnail">
      <img :src="`https://image.tmdb.org/t/p/w300${this.item.poster_path}`" alt="Poster not found">
    </div>
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
        <span>Voto: </span>
        <font-awesome-icon
          class="vote-stars"
          :class="{starCounted: i < getVote && getVote > 0}"
          v-for="(star, i) in maxStarNum"
          icon="star" />
      </li>
      <!-- <li class="item-detail">
        <p class="overview">
          {{ item.overview }}
        </p>
      </li> -->
      <li class="item-detail">
        <img 
          class="backdrop-img"
          :src="`https://image.tmdb.org/t/p/w300${this.item.backdrop_path}`"
          alt="thumbnail not found"
        >
      </li>
    </ul>
  </div>

</template>

<style lang="scss">
@use '../styles/partial/variables' as *;
  
  .card {
    flex: 0 0 210px;
    color: $white;
    font-size: 16px;
    position: relative;
    font-size: 14px;

    &__thumbnail {
      position: relative;
    }

    &__item-details {
      position: absolute;
      opacity: 0;
      transform: translateY(-20px);
      padding: 10px;
      background-color: rgba($black, $alpha: 0.65);
      inset: 0;
      transition: 0.2s ease-in;
      .item-detail  {
        margin-bottom: 10px;
        & span {
          font-weight: bold;
        }

        & .backdrop-img {
          filter: drop-shadow(2px 2px 10px $white);
        }
      }

      &:hover {
        opacity: 1;
        transform: translateX(0);
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