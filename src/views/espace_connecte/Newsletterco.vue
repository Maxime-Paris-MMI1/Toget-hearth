<template>
    <header>
    <HeadercoClair/>
  </header>
  <main>
      <h1 class="ml-5 mt-3 font-poppins text-xl font-medium text-vert-fonce-typographie">Bienvenue <br/> dans la Newsletter</h1>
      <h2 class="mt-9 ml-5 font-poppins text-sm font-medium text-vert-fonce-typographie">Les dernières actualités</h2>
    <div class="mt-5 ">
      <div class="w-full flex gap-4 snap-x overflow-x-auto">
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselNews  
        image="/images/news_carroussel3.webp"
        title="La journée de l'environnement"
        intro="La journée mondiale de l'environnement de plus en plus importante."
        lien="/news4co"/>
      </div>
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselNews  
        image="/images/news_carroussel1.webp"
        title="L’Australie sous les inondations"
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        lien="/news1co"/>
      </div>
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselNews  
        image="/images/news_carroussel2.webp"
        title="Pic de pollution à Paris"
        intro="Prévision d’ une concentration en particules fines entre 45 et 55 µg/m³."
        lien="/news2co"/>
      </div>
      </div>
    </div>
    <div>
      <h2 class="mt-9 ml-5 font-poppins text-sm font-medium text-vert-fonce-typographie">D’autres articles :</h2>
      <Vignette
      image="/images/small_desc_news1.webp"
      titre="L’Europe et la biodiversité"
      intro="L’Europe s’engage à renforcer la protection de la biodiversité."
      lien="/news3co"/>
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
import Vignette from "../../components/VignetteNews2.vue"  
import FootercoPage from "../../components/FootercoPage.vue" 

export default {
  components: {HeadercoClair, FootercoPage, CarrouselNews, Vignette}
};
</script>