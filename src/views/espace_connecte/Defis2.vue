<template>
<div class="bg-gradient-to-b from-vert-moyen-deco to-vert-pastel-deco">
<header>
    <HeaderClair/>
</header>

<main>

    <BackDefis/>

<div class="flex justify-center mt-8">
    <img src="../../../public/images/defi2.webp" alt=" defi 2 image">
    </div>
    <div class=" bg-vert-fonce-typographie opacity-80 p-3 ml-14 mr-14 rounded-20xl -mt-14 mb-10 ">
        <p class=" text-center font-poppins text-white text-xl font-medium">Niveau de difficultés</p>
    <stars3/>

    </div>


<StatsDefi
    stat1="200 points"
    stat2="2 - 30 min"
    stat3="1"
    
    titre="Venir au travail en vélo au moins 1 fois cette semaine"
    description="Cette tâche consiste àà prendre votre vélo pour vous rendre à votre lieu de travail, mais si votre travail se trouve à plus de 20km, ce qui commence à être compliqué vous pouvez prendre le vélo pour allez en ville ou lorsque vous devez rendre visite à quelqu’un." />





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