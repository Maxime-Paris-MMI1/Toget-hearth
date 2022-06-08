<template>
  <header>
    <HeadercoFonce/>
  </header>
    <div>
        <VignetteArticle class="-z-10"
        image="/images/photo_recycler.webp"
        titre2="Recycler"
        intro="90% de la faune marine est impactée par la pollution du plastique ! "/>  
    </div>
    <div>
        <p class="z-2 mt-[370px] ml-5 mr-6 font-poppins text-xs ">
            Tout d’abord, cela permet 
            <span class="font-medium text-vert-kaki-elements-importants">d’optimiser l’utilisation des matières premières</span> 
             puisque ces déchets peuvent être recyclés et réutilisés.</p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/public/images/recycler1.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            De plus, le recyclage permet de promouvoir 
            <span class="font-medium text-vert-kaki-elements-importants">la conservation des ressources naturelles.</span>
             Il est donc important de recycler ses déchets en adoptant des gestes simples: 
            <span class="font-medium text-vert-kaki-elements-importants">trier chez soi</span>
             les différents types de déchets (carton, verre) et  
            <span class="font-medium text-vert-kaki-elements-importants">aller le plus souvent à la benne de tri</span>
              pour que ces déchets puissent être collectés puis recyclés.</p>
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
