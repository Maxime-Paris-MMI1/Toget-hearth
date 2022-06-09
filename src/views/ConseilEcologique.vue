<template>
  <header>
    <HeaderClair/>
  </header>
  <main>
    <h1 class="mt-10 ml-5 font-poppins text-2xl text-vert-fonce-typographie ">Conseils et Astuces écologiques</h1>
    <div class="w-full flex gap-5 snap-x overflow-x-auto">
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselConseil class="mt-16 shrink-0" id="1"
        image="/images/carroussel1.webp"
        titre1="Éviter les"
        titre2="déchets plastiques"
        intro="90% de la faune marine est impactée par la pollution du plastique ! "
        lien="/conseil1"/>
      </div>
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
         <CarrouselConseil class="mt-16" id="2"
        image="/images/carroussel2.webp"
        titre1="Adopter une"
        titre2="alimentation durable"
        intro="En France, 20% des émissions de gaz à effet de serre sont dues à l’agriculture et principalement à cause de notre alimentation."
        lien="/conseil2"/>
      </div>
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselConseil class="mt-16" id="3"
        image="/images/carroussel3.webp"
        titre1="Adopter un"
        titre2="transport écologique"
        intro="D’après une étude de l'ADEME, le moyen de transport le plus écologique et le moins polluant est le train." 
        lien="/connexion"/>
      </div>
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselConseil class="mt-16"  id="4"
        image="/images/carroussel4.webp"
        titre2="Éviter le gaspillage"
        intro="10 millions de tonnes de nourriture sont gaspillées chaque année en France ! "
        lien="/connexion"/>
      </div>
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselConseil class="mt-16" id="5"
        image="/images/carroussel5.webp"
        titre1="Réduire sa"
        titre2="consommation d'énergie"
        intro="De nos jours la consommation d’énergie impacte très fortement l’écologie et pourtant c’est elle qui est la plus simple à corriger !"
        lien="/connexion"/>
      </div>
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselConseil class="mt-16" id="6"
        image="/images/carroussel6.webp"
        titre2="Recycler"
        intro="90% de la faune marine est impactée par la pollution du plastique !"
        lien="/connexion"/>
      </div>
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselConseil class="mt-16 " id="7"
        image="/images/carroussel7.webp"
        titre1="Autosuffisance"
        titre2="individuelle"
        intro="En 2020, notre consommation individuelle a été multiplié par 7 ! "
        lien="/connexion"/>
      </div>
    </div>
    
  </main>
  <footer>
    <FooterPage/>
  </footer>

 
        
        
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderClair from "../components/HeaderClair.vue" 
import CarrouselConseil from "../components/CarrouselConseil.vue"
import FooterPage from "../components/FooterPage.vue" 

export default {
  name: "Header",
  components: {HeaderClair, FooterPage, CarrouselConseil }
};
</script>