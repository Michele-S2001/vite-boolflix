<script>
import store from '../store';
import axios from 'axios';

export default {

  data() {
    return {
      componentName: 'AppCard',
      maxStarNum: 5,
      cast: []
    }
  },

  props: {
    item: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },

  methods: {
    fetchCast() {
      axios
        .get(`https://api.themoviedb.org/3/${this.category}/${this.item.id}/credits`,{
          params: {
            api_key: store.API_KEY,
          }
        }).then((res) => {
          this.cast = res.data.cast
        })
    }
  },

  computed: {
    flagPath() {
      return store.flags[this.item.original_language];
    },
    getVote() {
      return Math.ceil(this.item.vote_average / 2);
    },
    imgUrl() {
      if(!this.item.poster_path) {
        return '/img/imgNotFound.png'
      } else {
        return `https://image.tmdb.org/t/p/w300${this.item.poster_path}`;
      }
    },
    firstFiveActors() {
      return this.cast.slice(0, 5)
    }
  },

  created() {
    this.fetchCast()
  }
}

</script>

<template>
  <!-- film or tv card -->
  <div class="card">
    <div class="card__thumbnail">
      <img :src="imgUrl" alt="Poster not found">
    </div>
    <ul class="card__item-details">
      <!-- title -->
      <li class="item-detail">
        <span>Titolo:</span> 
        {{ item.title ?? item.name }}
      </li>
      <!-- original title -->
      <li class="item-detail">
        <span>Titolo originale:</span> 
        {{ item.original_title ?? item.original_name }}
      </li>
      <!-- linguage or flag -->
      <li class="item-detail">
        <img @click="fetchCast" class="flag" v-if="flagPath" :src="flagPath" alt="country flag">
        <p v-else>Lingua: {{ item.original_language }}</p> 
      </li>
      <!-- stars vote -->
      <li class="item-detail">
        <span>Voto: </span>
        <font-awesome-icon
          class="vote-stars"
          :class="{starCounted: i <= getVote}"
          v-for="(i) in maxStarNum"
          icon="star" />
      </li>
      <li>
        <ul class="cast">
          <li v-for="actor in firstFiveActors">{{ actor.name }}</li>
        </ul>
        <span>. . .</span>
      </li>
      <!-- info icon -->
      <li class="item-detail">
        Info:
        <font-awesome-icon @click="$emit('showDescription', item)" icon="circle-info" class="info"/>
      </li>
    </ul>
  </div>

</template>

<style lang="scss">
@use '../styles/partial/variables' as *;
  
  .card {
    flex: 0 0 210px;
    color: $white;
    position: relative;
    font-size: 14px;
    user-select: none;

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
        span {
          font-weight: bold;
        }

        .backdrop-img {
          filter: drop-shadow(2px 2px 10px $white);
        }

        .info {
          cursor: pointer;
          height: 16px;
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