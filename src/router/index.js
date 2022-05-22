import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import Conseil1 from '../views/Conseil1View.vue'
import ConseilEco from '../views/ConseilEcologique.vue'
import Conseil2 from  '../views/Conseil2View.vue'
import ConseilEcoCo from '../views/espace_connecte/ConseilEcologique.vue'
import Conseil1Co from '../views/espace_connecte/Conseil1View.vue'
import Conseil2Co from  '../views/espace_connecte/Conseil2View.vue'
import Conseil3 from '../views/espace_connecte/Conseil3View.vue'
import Conseil4 from '../views/espace_connecte/Conseil4View.vue'
import Conseil5 from '../views/espace_connecte/Conseil5View.vue'
import Conseil6 from '../views/espace_connecte/Conseil6View.vue'
import Conseil7 from '../views/espace_connecte/Conseil7View.vue'
import Conseilramassage from '../views/Conseilramassage.vue'
import MentionLegales from '../views/MentionLegales.vue'
import Newsletter from '../views/NewsletterView.vue'
import News2 from '../views/News2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/conseil1', name: 'Conseil1', component: Conseil1 },
    { path: '/conseileco', name: 'ConseilEco', component: ConseilEco },
    { path: '/conseil2', name: 'Conseil2', component: Conseil2 },
    { path: '/conseil1co', name: 'Conseil1Co', component: Conseil1Co },
    { path: '/conseilecoco', name: 'ConseilEcoCo', component: ConseilEcoCo },
    { path: '/conseil2co', name: 'Conseil2Co', component: Conseil2Co },
    { path: '/conseil3', name: 'Conseil3', component: Conseil3 },
    { path: '/conseil4', name: 'Conseil4', component: Conseil4 },
    { path: '/conseil5', name: 'Conseil5', component: Conseil5 },
    { path: '/conseil6', name: 'Conseil6', component: Conseil6 },
    { path: '/conseil7', name: 'Conseil7', component: Conseil7 },
    { path: '/ConseilRamassage', name: 'Conseilramassage', component: Conseilramassage },
    { path: '/MentionLegales', name: 'Mentionlegales', component: MentionLegales },
    { path: '/newsletter', name: 'Newsletter', component: Newsletter },
    { path: '/news2', name: 'News2', component: News2 },

  ]
})

export default router
