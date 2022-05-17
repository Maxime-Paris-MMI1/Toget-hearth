<template>
  <header class="bg-vert-pastel-deco">
    <div class="flex justify-between pb-6 pt-1">
      <div class="pt-8 pl-5">
        <fleche-gauche/>
      </div>
      <div class="pt-3">
        <LogoSite/>
      </div>
      <div class="pt-6 pr-5">
        <IconConnexion/>
      </div>
    </div>
  </header>
    <div>
        <VignetteArticle 
        image="/images/photo_dechet.webp"
        titre1="Éviter les"
        titre2="déchets plastiques"
        intro="90% de la faune marine est impactée par la pollution du plastique ! "/>
        <p>Face à cette situation, nous pouvons agir avec des petits gestes au quotidien. Lors de vos courses, optez pour des sacs en toile pour éviter l’utilisation de sachet plastique.</p>
        
        </div>
</template>

<script>
import VignetteArticle from "../components/VignetteArticle.vue"
import FlecheGauche from "../components/icons/FlecheGauche.vue"
import LogoSite from "../components/icons/LogoSite.vue"
import IconConnexion from "../components/icons/IconConnexion.vue"

export default {
   components: { VignetteArticle, FlecheGauche, LogoSite, IconConnexion } 
}
</script>
