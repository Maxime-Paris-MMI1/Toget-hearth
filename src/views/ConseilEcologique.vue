<template>
  <header>
    <HeaderClair/>
  </header>
  <main>
    <h1 class="mt-10 ml-5 font-poppins text-2xl text-vert-fonce-typographie ">Conseils et Astuces écologiques</h1>
    <CarrouselConseil 
    image="/images/carroussel1.webp"
    titre1="Éviter les"
    titre2="déchets plastiques"
    intro="90% de la faune marine est impactée par la pollution du plastique ! "/>
  </main>
  <footer>
    <FooterPage/>
  </footer>
</template>

<script>
import HeaderClair from "../components/HeaderClair.vue" 
import CarrouselConseil from "../components/CarrouselConseil.vue"
import FooterPage from "../components/FooterPage.vue" 

export default {
  name: "Header",
  components: {HeaderClair, FooterPage, CarrouselConseil }
};
</script>