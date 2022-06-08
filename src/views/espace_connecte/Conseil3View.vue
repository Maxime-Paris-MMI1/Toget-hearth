<template>
  <header>
    <HeadercoFonce/>
  </header>
    <div>
        <VignetteArticle class="-z-10"
        image="/images/photo_transport.webp"
        titre1="Adopter un"
        titre2="transport écologique"/>  
    </div>
    <div>
        <p class="z-2 mt-[300px] ml-5 mr-6 font-poppins text-xs ">
            Nous devons opter pour 
            <span class="font-medium text-vert-kaki-elements-importants">un mode de transport écologique</span> 
             en utilisant les moyens de transports jugés moins nuisibles pour l’environnement notamment au niveau des 
            <span class="font-medium text-vert-kaki-elements-importants">émissions de gaz à effet de serre.</span> </p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/public/images/transport1.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            D’après une étude de l'ADEME, le moyen de transport le plus écologique et  
            <span class="font-medium text-vert-kaki-elements-importants">le moins polluant</span>
             est le train. Pour les voyages assez long nous vous conseillons donc de prendre  
            <span class="font-medium text-vert-kaki-elements-importants">le train</span>
             ou bien de réaliser 
             <span class="font-medium text-vert-kaki-elements-importants">du covoiturage.</span>
             Aujourd’hui de nombreuses applications pour réaliser du covoiturage existent comme “Blablacar” ou encore “Citygo”.</p>
         <div class="flex justify-center">
        <img class="mt-8 " src="/public/images/transport2.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            Pour les trajets  
            <span class="font-medium text-vert-kaki-elements-importants">les plus courts,</span>
              nous vous recommandons d’utiliser  
             <span class="font-medium text-vert-kaki-elements-importants">le vélo, le skate ou encore la trottinette.</span>
               D’après une étude réalisée par l'INSEE, moins de 3% des actifs réalisent le vélotaf et cela leur permet de réaliser une activité sportive chaque jour ! Alors pourquoi pas commencer dès aujourd’hui ?</p>
    </div>
    <footer>
      <FootercoPage/>
    </footer>
</template>

<script>
import VignetteArticle from "../../components/VignetteArticle.vue"
import FlecheGauche from "../../components/icons/FlecheGauche.vue"
import LogoSite from "../../components/icons/LogoSite.vue"
import IconConnexion from "../../components/icons/IconConnexion.vue"
import FootercoPage from "../../components/FootercoPage.vue"
import HeadercoFonce from "../../components/HeadercoFonce.vue"

export default {
   components: { VignetteArticle, FlecheGauche, LogoSite, IconConnexion, FootercoPage, HeadercoFonce } 
}
</script>
