<template>
  <header>
    <HeadercoClair/>
  </header>
  <main>
    <h1 class="mt-10 ml-5 font-poppins text-2xl text-vert-fonce-typographie ">Conseils et Astuces écologiques</h1>
    
    <CarrouselConseil class="mt-16" 
    image="/images/carroussel1.webp"
    titre1="Éviter les"
    titre2="déchets plastiques"
    intro="90% de la faune marine est impactée par la pollution du plastique ! "
    lien="/conseil1co"/>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel2.webp"
    titre1="Adopter une"
    titre2="alimentation durable"
    intro="En France, 20% des émissions de gaz à effet de serre sont dues à l’agriculture et principalement à cause de notre alimentation."
    lien="/conseil2co"/>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel3.webp"
    titre1="Adopter un"
    titre2="transport écologique"
    intro="D’après une étude de l'ADEME, le moyen de transport le plus écologique et le moins polluant est le train."
    lien="/conseil3"/>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel4.webp"
    titre2="Éviter le gaspillage"
    intro="10 millions de tonnes de nourriture sont gaspillées chaque année en France ! "
    lien="/conseil4"/>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel5.webp"
    titre1="Réduire sa"
    titre2="consommation d'énergie"
    intro="De nos jours la consommation d’énergie impacte très fortement l’écologie et pourtant c’est elle qui est la plus simple à corriger !"
    lien="/conseil5"/>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel6.webp"
    titre2="Recycler"
    intro="90% de la faune marine est impactée par la pollution du plastique !"
    lien="/conseil6"/>
    <CarrouselConseil class="mt-8" 
    image="/images/carroussel7.webp"
    titre1="Autosuffisance"
    titre2="individuelle"
    intro="En 2020, notre consommation individuelle a été multiplié par 7 ! "
    lien="/conseil7"/>
  </main>
  <footer>
    <FootercoPage/>
  </footer>

 
        
        
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HeadercoClair from "../../components/HeadercoClair.vue" 
import CarrouselConseil from "../../components/CarrouselConseil.vue"
import FootercoPage from "../../components/FootercoPage.vue" 

export default {
  name: "Header",
  components: {HeadercoClair, FootercoPage, CarrouselConseil }
};
</script>