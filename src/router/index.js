
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
import Conseilramassage from '../views/ConseilRamassage.vue'
import MentionLegales from '../views/MentionLegales.vue'
import Newsletter from '../views/NewsletterView.vue'
import News2 from '../views/News2View.vue'
import News3 from '../views/News3View.vue'
import Connexion from '../views/ConnexionView.vue'
import Inscription from '../views/InscriptionView.vue'
import Dons from '../views/DonsView.vue'
import NousContacter from '../views/NousContacter.vue'
import APropos from '../views/APropos.vue'



import Accueilco from '../views/espace_connecte/AccueilcoView.vue'
import ConseilEcoCo from '../views/espace_connecte/ConseilEcologique.vue'
import Conseil1Co from '../views/espace_connecte/Conseil1View.vue'
import Conseil2Co from  '../views/espace_connecte/Conseil2View.vue'
import Conseil3 from '../views/espace_connecte/Conseil3View.vue'
import Conseil4 from '../views/espace_connecte/Conseil4View.vue'
import Conseil5 from '../views/espace_connecte/Conseil5View.vue'
import Conseil6 from '../views/espace_connecte/Conseil6View.vue'
import Conseil7 from '../views/espace_connecte/Conseil7View.vue'
import ListeDefis from '../views/espace_connecte/ListeDefis.vue'
import Defis1 from '../views/espace_connecte/Defis1.vue'
import Defis2 from '../views/espace_connecte/Defis2.vue'
import Defis3 from '../views/espace_connecte/Defis3.vue'
import Dons_co from '../views/espace_connecte/Dons_co.vue'
import Newsletterco from '../views/espace_connecte/Newsletterco.vue'
import Calendrier from '../views/espace_connecte/Calendrier.vue'
import Profil from '../views/espace_connecte/ProfilView.vue'
import NousContacterco from '../views/espace_connecte/NousContacterco.vue'
import MentionLegalesco from '../views/espace_connecte/MentionLegalesco.vue'
import RassemblementInfo from '../views/espace_connecte/RassemblementInfo.vue'
import RassemblementOff from '../views/espace_connecte/RassemblementOff.vue'
import RemerciementFinal from '../views/espace_connecte/RemerciementFinal.vue'
import Remerciement from '../views/espace_connecte/Remerciement.vue'
import news1co from '../views/espace_connecte/News1co.vue'
import news2co from '../views/espace_connecte/News2co.vue'
import news3co from '../views/espace_connecte/News3co.vue'
import news4co from '../views/espace_connecte/News4co.vue'
import Aproposco from '../views/espace_connecte/Aproposco.vue'
import Precaution from '../views/espace_connecte/Precaution.vue'
import PrecautionParticip from '../views/espace_connecte/PrecautionParticip.vue'
import conseilramassageco from '../views/espace_connecte/Conseilramassageco.vue'
import organisationramassage from '../views/espace_connecte/OrganisationRamassage.vue'
import gestionramassage from '../views/admin/GestionRamassage.vue'
import deleteramassage from '../views/admin/DeleteRamassage.vue'
import modiframassage from '../views/admin/ModifRamassage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/conseil1', name: 'Conseil1', component: Conseil1 },
    { path: '/conseileco', name: 'ConseilEco', component: ConseilEco },
    { path: '/conseil2', name: 'Conseil2', component: Conseil2 },
    { path: '/ConseilRamassage', name: 'Conseilramassage', component: Conseilramassage },
    { path: '/MentionLegales', name: 'Mentionlegales', component: MentionLegales },
    { path: '/newsletter', name: 'Newsletter', component: Newsletter },
    { path: '/news2', name: 'News2', component: News2 },
    { path: '/news3', name: 'News3', component: News3 },
    { path: '/connexion', name: 'Connexion', component: Connexion},
    { path: '/inscription', name: 'Inscription', component: Inscription},
    { path: '/dons', name: 'Dons', component: Dons},
    { path: '/NousContacter', name: 'NousContacter', component: NousContacter},
    { path: '/APropos', name: 'APropos', component: APropos},



    { path: '/accueilco', name: 'Accueilco', component: Accueilco, beforeEnter:guard  },
    { path: '/conseil1co', name: 'Conseil1Co', component: Conseil1Co, beforeEnter:guard  },
    { path: '/conseilecoco', name: 'ConseilEcoCo', component: ConseilEcoCo, beforeEnter:guard },
    { path: '/conseil2co', name: 'Conseil2Co', component: Conseil2Co, beforeEnter:guard },
    { path: '/conseil3', name: 'Conseil3', component: Conseil3, beforeEnter:guard },
    { path: '/conseil4', name: 'Conseil4', component: Conseil4, beforeEnter:guard },
    { path: '/conseil5', name: 'Conseil5', component: Conseil5, beforeEnter:guard },
    { path: '/conseil6', name: 'Conseil6', component: Conseil6, beforeEnter:guard },
    { path: '/conseil7', name: 'Conseil7', component: Conseil7, beforeEnter:guard },
    { path: '/ListeDefis', name: 'ListeDefis', component: ListeDefis, beforeEnter:guard},
    { path: '/Defis1', name: 'Defis1', component: Defis1, beforeEnter:guard},
    { path: '/Defis2', name: 'Defis2', component: Defis2, beforeEnter:guard},
    { path: '/Defis3', name: 'Defis3', component: Defis3, beforeEnter:guard},
    { path: '/dons_co', name: 'Dons_co', component: Dons_co, beforeEnter:guard},
    { path: '/newsletterco', name: 'Newsletterco', component: Newsletterco, beforeEnter:guard},
    { path: '/calendrier', name: 'Calendrier', component: Calendrier, beforeEnter:guard},
    { path: '/profil', name: 'Profil', component: Profil, beforeEnter:guard},
    { path: '/nouscontacterco', name: 'NousContacterco', component: NousContacterco, beforeEnter:guard},
    { path: '/mentionlegalesco', name: 'MentionLegalesco', component: MentionLegalesco, beforeEnter:guard},
    { path: '/RassemblementInfo', name: 'RassemblementInfo', component: RassemblementInfo, beforeEnter:guard},
    { path: '/RassemblementOff', name: 'RassemblementOff', component: RassemblementOff, beforeEnter:guard},
    { path: '/RemerciementFinal', name: 'RemerciementFinal', component: RemerciementFinal, beforeEnter:guard},
    { path: '/Remerciement', name: 'Remerciement', component: Remerciement, beforeEnter:guard},
    { path: '/news1co', name: 'news1co', component: news1co, beforeEnter:guard},
    { path: '/news2co', name: 'news2co', component: news2co, beforeEnter:guard},
    { path: '/news3co', name: 'news3co', component: news3co, beforeEnter:guard},
    { path: '/news4co', name: 'news4co', component: news4co, beforeEnter:guard},
    { path: '/Aproposco', name: 'Aproposco', component: Aproposco, beforeEnter:guard},
    { path: '/Precaution', name: 'Precaution', component: Precaution, beforeEnter:guard},
    { path: '/PrecautionParticip', name: 'PrecautionParticip', component: PrecautionParticip, beforeEnter:guard},


    { path: '/conseilramassageco', name: 'conseilramassageco', component: conseilramassageco, beforeEnter:guard},
    { path: '/organisationramassage', name: 'organisationramassage', component: organisationramassage, beforeEnter:guard},
    { path: '/gestionramassage', name: 'gestionramassage', component: gestionramassage, beforeEnter:guardadmin},
    { path: '/deleteramassage', name: 'deleteramassage', component: deleteramassage, beforeEnter:guardadmin},
    { path: '/modiframassage', name: 'modiframassage', component: modiframassage, beforeEnter:guardadmin},
    //Appel de la fonction guard admin, pour que les personnes admin et que ces personnes puissent accéder à la page.
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
          let isConnecte=userInfo[0].connecte;
            if(isConnecte){
            // Utilisateur administrateur, on autorise la page/vue
            next(to.params.name);
            return;
          }else{
            // Utilisateur non administrateur, renvoi sur accueil
            alert("Vous n'avez pas l'autorisation pour cette fonction");
            next({name: ""});
            return;
          }
      })
    }else {
      // Utilisateur non connecté, renvoi sur accueil
      console.log('router NOK => user ', user);
      next({name: ""});
    }
  });
}

function guardadmin(to, from, next) {
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
            next({name: ""});
            return;
          }
      })
    }else {
      // Utilisateur non connecté, renvoi sur accueil
      console.log('router NOK => user ', user);
      next({name: ""});
    }
  });
}

export default router
