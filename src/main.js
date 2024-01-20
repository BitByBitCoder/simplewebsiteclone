import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faUserSecret,faTwitter,faInstagram,faFacebook)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)


app.mount('#app')
