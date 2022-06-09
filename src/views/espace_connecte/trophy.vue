<template>
<div class=" bg-vert-pastel-deco">
<header>
    <HeadercoClair/>
</header>


<main>

<BackDefis/>


<h1 class=" font-poppins font-medium text-xl text-center p-10 mt-10">
    À quels trophées correspondent vos points
</h1>


<section>




<!-- un trophy -->



<TrophyComp
texte="100 points"
trophyimg="/images/trophy1.svg"
intitule="Débutant"/>


<TrophyComp
texte="250 points"
trophyimg="/images/trophy2.svg"
intitule="Débutant confirmé"/>



<TrophyComp
texte="500 points"
trophyimg="/images/trophy3.svg"
intitule="Apprenti Écolo"/>


<TrophyComp
texte="1000 points"
trophyimg="/images/trophy4.svg"
intitule="Écologiste"/>


<TrophyComp
texte="2500 points"
trophyimg="/images/trophy5.svg"
intitule="Earth Lover"/>


<TrophyComp
texte="5000 points"
trophyimg="/images/trophy6.svg"
intitule="Leader de l’écologie"/>


<TrophyComp
texte="Organiser une collecte"
trophyimg="/images/trophy7.svg"
intitule="Unis pour la planète"/>





</section>


</main>


<footer>
    <FootercoPage/>
</footer>

</div>
</template>




<script>

import HeadercoClair from "../../components/HeadercoClair.vue" 

import FootercoPage from "../../components/FootercoPage.vue" 

import BackDefis from "../../components/BackDefis.vue" 


import TrophyComp from "../../components/TrophyComp.vue" 





export default {
  name: "components",
  components: {HeadercoClair, FootercoPage, BackDefis,TrophyComp,}
};
</script>