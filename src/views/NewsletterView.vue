<template>
    <header>
    <HeaderClair/>
  </header>
  <main>
      <h1 class="ml-5 mt-3 font-poppins text-xl font-medium text-vert-fonce-typographie">Bienvenue <br/> dans la Newsletter</h1>
      <h2 class="mt-9 ml-5 font-poppins text-sm font-medium text-vert-fonce-typographie">Les dernières actualités</h2>
    <div class="mt-5">
      <div class="w-full flex gap-4 snap-x overflow-x-auto">
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselNews  
        image="/images/news_carroussel3.webp"
        title="La journée de l'environnement"
        intro="La journée mondiale de l'environnement de plus en plus importante."
        lien="/news3"/>
      </div>
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselNews  
        image="/images/news_carroussel1.webp"
        title="L’Australie sous les inondations"
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        lien="/news1"/>
         </div>
      <div class="snap-center shrink-0 first:pl-5 last:pr-5">
        <CarrouselNews  
        image="/images/news_carroussel2.webp"
        title="Pic de pollution à Paris"
        intro="Prévision d’ une concentration en particules fines entre 45 et 55 µg/m³."
        lien="/news2"/>
      </div>
      </div>
    </div>
    <h2 class="mt-9 ml-5 font-poppins text-sm font-medium text-vert-fonce-typographie">D’autres articles :</h2>
    <p class="mt-4 mx-5 font-poppins text-sm font-light text-vert-fonce-typographie">Pour pouvoir accéder aux autres articles veuillez-vous inscrire.</p>
    <div>
         <RouterLink to="/">
                <button class="w-[273px] h-12 mt-8 mx-[51px] rounded-6xl bg-vert-fluo-bouton">
                  <p class="my-3 mx-[60px] font-poppins text-base drop-shadow-sm text-blanc-background">Créer mon compte</p>
                </button>
        </RouterLink>
    </div>
  </main>
  <footer>
    <FooterPage/>
  </footer>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderClair from "../components/HeaderClair.vue"  
import CarrouselNews from "../components/CarrouselNews.vue"  
import FooterPage from "../components/FooterPage.vue" 

export default {
  components: {HeaderClair, FooterPage, CarrouselNews}
};
</script>