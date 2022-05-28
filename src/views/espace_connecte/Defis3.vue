<template>
<div class="bg-gradient-to-b from-vert-moyen-deco to-vert-pastel-deco">
<header>
    <HeaderClair/>
</header>

<main>

    <BackDefis/>

<div class="flex justify-center mt-8">
    <img src="../../../public/images/defi3.webp" alt=" defi 3 image">
    </div>
    <div class=" bg-vert-fonce-typographie opacity-80 p-3 ml-14 mr-14 rounded-20xl -mt-14 mb-10 ">
        <p class=" text-center font-poppins text-white text-xl font-medium">Niveau de difficultés</p>
    <stars4/>

    </div>


<StatsDefi
    stat1="400 points"
    stat2="≈ 1- 5h"
    stat3="2-30"
    
    titre="Organiser une collecte de déchets"
    description="Pour cette tâche vous devez vous rendre dans l’onglet calendrier, et organiser une collecte de déchets dans votre ville, pour valider cette tâche vous pouvez également participer à une collecte si une est déjà en cours proche de chez vous" />





</main>

<footer>
    <FooterPage/>
</footer>
</div>

</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderClair from "../../components/HeaderClair.vue" 

import FooterPage from "../../components/FooterPage.vue" 
import BoutonAction from "../../components/Boutonaction.vue" 
import BackDefis from "../../components/BackDefis.vue" 
import stars1 from "../../components/icons/stars1.vue" 
import stars2 from "../../components/icons/stars2.vue" 
import stars3 from "../../components/icons/stars3.vue" 
import stars4 from "../../components/icons/stars4.vue" 
import stars5 from "../../components/icons/stars5.vue" 
import StatsDefi from "../../components/StatsDefi.vue" 
import UserLogo from "../../components/icons/UserLogo.vue" 

export default {
  name: "Header",
  components: {HeaderClair, FooterPage, BoutonAction, BackDefis, stars1, stars2, stars3, stars4, stars5, StatsDefi,UserLogo,   }
};
</script>