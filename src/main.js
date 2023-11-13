import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// importa icone specifiche
import { faStar, faCircleInfo, faX } from '@fortawesome/free-solid-svg-icons'
//aggiungo alla libreria
library.add(faStar, faCircleInfo, faX)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
