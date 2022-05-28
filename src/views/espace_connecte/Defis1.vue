<template>
<div class="bg-gradient-to-b from-vert-moyen-deco to-vert-pastel-deco">
<header>
    <HeadercoClair/>
</header>

<main>

    <BackDefis/>

<div class="flex justify-center mt-8">
    <img src="../../../public/images/defi1.webp" alt=" defi 1 image">
    </div>
    <div class=" bg-vert-fonce-typographie opacity-80 p-3 ml-14 mr-14 rounded-20xl -mt-14 mb-10 ">
        <p class=" text-center font-poppins text-white text-xl font-medium">Niveau de difficultés</p>
    <stars2/>

    </div>


<StatsDefi
    stat1="70 points"
    stat2="≈ 10 min"
    stat3="1"
    
    titre="Ramassez 5 déchets dans la rue"
    description="Cette tâche consiste à ramasser 5 déchets dans la rue lorsque vous irez au travail ou alors dès que vous sortirez dehors. Il vous suffira de prendre les déchets et de les mettres dans une poubelle qui se trouve à proximité !" />





</main>

<footer>
    <FootercoPage/>
</footer>
</div>

</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HeadercoClair from "../../components/HeadercoClair.vue" 

import FootercoPage from "../../components/FootercoPage.vue" 
import BoutonAction from "../../components/BoutonAction.vue" 
import BackDefis from "../../components/BackDefis.vue" 
import stars1 from "../../components/icons/stars1.vue" 
import stars2 from "../../components/icons/stars2.vue" 
import stars3 from "../../components/icons/stars3.vue" 
import stars4 from "../../components/icons/stars4.vue" 
import stars5 from "../../components/icons/stars5.vue" 
import StatsDefi from "../../components/StatsDefi.vue" 
import UserLogo from "../../components/icons/Userlogo.vue" 

export default {
  name: "Header",
  components: {HeadercoClair, FootercoPage, BoutonAction, BackDefis, stars1, stars2, stars3, stars4, stars5, StatsDefi,UserLogo,   }
};
</script>