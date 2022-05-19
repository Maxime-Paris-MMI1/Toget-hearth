<template>
  <header>
    <HeaderClair/>
  </header>
  <main>
    <h1 class="mt-10 ml-5 font-poppins text-2xl text-vert-fonce-typographie ">Conseils et Astuces écologiques</h1>
    <CarrouselConseil class="mt-16" 
    image="/images/carroussel1.webp"
    titre1="Éviter les"
    titre2="déchets plastiques"
    intro="90% de la faune marine est impactée par la pollution du plastique ! "/>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel2.webp"
    titre1="Adopter une"
    titre2="alimentation durable"
    intro="En France, 20% des émissions de gaz à effet de serre sont dues à l’agriculture et principalement à cause de notre alimentation."/>
    <RouterLink to="/conseil2">Alimentation durable</RouterLink>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel3.webp"
    titre1="Adopter un"
    titre2="transport écologique"
    intro="D’après une étude de l'ADEME, le moyen de transport le plus écologique et le moins polluant est le train."/>
    <RouterLink to="/conseil3">Transports Écologiques</RouterLink>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel4.webp"
    titre2="Éviter le gaspillage"
    intro="10 millions de tonnes de nourriture sont gaspillées chaque année en France ! "/>
    <RouterLink to="/conseil4">Gaspillage</RouterLink>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel5.webp"
    titre1="Réduire sa"
    titre2="consommation d'énergie"
    intro="De nos jours la consommation d’énergie impacte très fortement l’écologie et pourtant c’est elle qui est la plus simple à corriger !"/>
    <RouterLink to="/conseil5">Consommation</RouterLink>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel6.webp"
    titre2="Recycler"
    intro="90% de la faune marine est impactée par la pollution du plastique !"/>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel7.webp"
    titre1="Autosuffisance"
    titre2="individuelle"
    intro="En 2020, notre consommation individuelle a été multiplié par 7 ! "/>
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