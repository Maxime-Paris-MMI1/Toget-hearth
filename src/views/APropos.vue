<template>



<header>
    <HeaderClair/>
</header>




<h2 class=" font-asap font-medium text-xl text-center mt-10 mb-10 ">Bienvenue sur la page à propos ! </h2>
<p class=" font-poppins font-medium text-base mt-8mb-10 pl-10 pr-10 ">Ici vous trouverez les personnes qui ont pû réaliser ce site web dans le cadre de notre projet collectif au sein du département MMI de montbéliard </p>

<AProposCard/>



<footer>
    <FooterPage/>
</footer>


</template>


<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderClair from "../components/HeaderClair.vue"  

import FooterPage from "../components/FooterPage.vue" 
import AProposCard from "../components/AProposCard.vue" 

export default {
  components: {HeaderClair, FooterPage, AProposCard, }
};
</script>