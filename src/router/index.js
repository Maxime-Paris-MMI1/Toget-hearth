
// Fonction d'authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Fonctions Firestore
import { 
  getFirestore, 
  collection, 
  onSnapshot, 
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


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
import News3 from '../views/News3View.vue'
import Connexion from '../views/ConnexionView.vue'
import Dons from '../views/DonsView.vue'
import NousContacter from '../views/NousContacter.vue'
import ListeDefis from '../views/espace_connecte/ListeDefis.vue'
import Defis1 from '../views/espace_connecte/Defis1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/conseil1', name: 'Conseil1', component: Conseil1 },
    { path: '/conseileco', name: 'ConseilEco', component: ConseilEco },
    { path: '/conseil2', name: 'Conseil2', component: Conseil2 },
    { path: '/conseil1co', name: 'Conseil1Co', component: Conseil1Co, beforeEnter:guard  },
    { path: '/conseilecoco', name: 'ConseilEcoCo', component: ConseilEcoCo, beforeEnter:guard },
    { path: '/conseil2co', name: 'Conseil2Co', component: Conseil2Co, beforeEnter:guard },
    { path: '/conseil3', name: 'Conseil3', component: Conseil3, beforeEnter:guard },
    { path: '/conseil4', name: 'Conseil4', component: Conseil4, beforeEnter:guard },
    { path: '/conseil5', name: 'Conseil5', component: Conseil5, beforeEnter:guard },
    { path: '/conseil6', name: 'Conseil6', component: Conseil6, beforeEnter:guard },
    { path: '/conseil7', name: 'Conseil7', component: Conseil7, beforeEnter:guard },
    { path: '/ConseilRamassage', name: 'Conseilramassage', component: Conseilramassage },
    { path: '/MentionLegales', name: 'Mentionlegales', component: MentionLegales },
    { path: '/newsletter', name: 'Newsletter', component: Newsletter },
    { path: '/news2', name: 'News2', component: News2 },
    { path: '/news3', name: 'News3', component: News3 },
    { path: '/connexion', name: 'Connexion', component: Connexion},
    { path: '/dons', name: 'Dons', component: Dons},
    { path: '/NousContacter', name: 'NousContacter', component: NousContacter},
    { path: '/ListeDefis', name: 'ListeDefis', component: ListeDefis, beforeEnter:guard},
    { path: '/Defis1', name: 'Defis1', component: Defis1, beforeEnter:guard},

  ]
})

function guard(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function(user) {
    if(user) {
      // User connecté
      console.log('router OK => user ', user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
          let userInfo = snapshot.docs.map(doc => ( {id:doc.id, ...doc.data()}));
          // userInfo étant un tableau, on récupère
          // ses informations dans la 1° cellule du tableau : 0
          let isAdmin=userInfo[0].admin;
          if(isAdmin){
            // Utilisateur administrateur, on autorise la page/vue
            next(to.params.name);
            return;
          }else{
            // Utilisateur non administrateur, renvoi sur accueil
            alert("Vous n'avez pas l'autorisation pour cette fonction");
            next({name: "AccueilView"});
            return;
          }
      })
    }else {
      // Utilisateur non connecté, renvoi sur accueil
      console.log('router NOK => user ', user);
      next({name: "AccueilView"});
    }
  });
}

export default router
