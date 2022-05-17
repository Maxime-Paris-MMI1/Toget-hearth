import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import Conseil1 from '../views/Conseil1View.vue'
import ConseilEco from '../views/ConseilEcologique.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/conseil1', name: 'Conseil1', component: Conseil1 },
    { path: '/conseileco', name: 'ConseilEco', component: ConseilEco },
  ]
})

export default router
