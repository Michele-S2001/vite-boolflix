import { reactive } from 'vue';

const store = reactive({
  movies: [],
  series: [],
  API_KEY: 'c5bd1483fbfedee1324a94aeb3df2102',
  searchText: '',
  flags: {
    it: '/img/it.png',
    en: '/img/en.jpg',
    es: '/img/es.png',
    fr: '/img/fr.webp'
  }
});

export default store;