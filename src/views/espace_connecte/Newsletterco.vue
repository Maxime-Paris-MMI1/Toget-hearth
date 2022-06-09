<template>
    <header>
    <HeadercoClair/>
  </header>
  <main>
      <h1 class="ml-5 mt-3 font-poppins text-xl font-medium text-vert-fonce-typographie">Bienvenue <br/> dans la Newsletter</h1>
      <h2 class="mt-9 ml-5 font-poppins text-sm font-medium text-vert-fonce-typographie">Les dernières actualités</h2>
    <div class="mt-5 ml-5">
        <CarrouselNews  
        image="/images/news_carroussel3.webp"
        title="La journée mondiale de l'environnement"
        intro="Une journée de l'environnement de plus en plus importante."
        lien="/newsco4"/>
        <CarrouselNews  
        image="/images/news_carroussel1.webp"
        title="L’Australie sous les inondations"
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        lien="/newsco1"/>
        <CarrouselNews  
        image="/images/news_carroussel2.webp"
        title="Pic de pollution à Paris"
        intro="Prévision d’ une concentration en particules fines entre 45 et 55 µg/m³."
        lien="/newsco2"/>
    </div>
  </main>
  <footer>
    <FootercoPage/>
  </footer>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HeadercoClair from "../../components/HeadercoClair.vue"  
import CarrouselNews from "../../components/CarrouselNews.vue"  
import FootercoPage from "../../components/FootercoPage.vue" 

export default {
  components: {HeadercoClair, FootercoPage, CarrouselNews}
};
</script>