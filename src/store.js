import { reactive } from 'vue';

const store = reactive({
  movies: [],
  series: [],
  API_KEY: 'c5bd1483fbfedee1324a94aeb3df2102',
  searchText: ''
});

export default store;