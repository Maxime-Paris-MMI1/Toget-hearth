import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import Conseil1 from '../views/Conseil1View.vue'
import ConseilEco from '../views/ConseilEcologique.vue'
import Conseil2 from  '../views/Conseil2View.vue'
import Conseil3 from '../views/Conseil3View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/conseil1', name: 'Conseil1', component: Conseil1 },
    { path: '/conseileco', name: 'ConseilEco', component: ConseilEco },
    { path: '/conseil2', name: 'Conseil2', component: Conseil2 },
    { path: '/conseil3', name: 'Conseil3', component: Conseil3 },
  ]
})

export default router
