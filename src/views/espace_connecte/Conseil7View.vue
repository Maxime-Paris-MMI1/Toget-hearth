<template>
  <header>
    <HeaderFonce/>
  </header>
    <div>
        <VignetteArticle class="-z-10"
        image="/images/photo_autosuffisance.webp"
        titre1="Autosuffisance"
        titre2="individuelle"
        intro="Depuis le XIXeme siècle, notre consommation individuelle a été multiplié par 7 !"/>  
    </div>
    <div>
        <p class="z-2 mt-[370px] ml-5 mr-6 font-poppins text-xs ">
            Aujourd’hui, nous sommes de plus en plus 
            <span class="font-medium text-vert-kaki-elements-importants">dépendant</span> 
             des supermarchés et des commerces autour de chez nous. En effet, dès qu’il nous manque de la nourriture ou encore des produits ménagers nous nous rendons dans la plupart des cas au 
            <span class="font-medium text-vert-kaki-elements-importants">supermarché</span></p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/images/autosuffisance1.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            Dans ces supermarchés, on adopte un comportement de  
            <span class="font-medium text-vert-kaki-elements-importants">surconsommation</span>
              en achetant des produits polluants (emballage plastique) et qui sont souvent des choses 
            <span class="font-medium text-vert-kaki-elements-importants">non essentielles.</span></p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/images/autosuffisance2.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            Pour adopter un comportement  
            <span class="font-medium text-vert-kaki-elements-importants">plus respectueux</span>
               de l’environnement, il faudrait  
            <span class="font-medium text-vert-kaki-elements-importants">planter soi- même</span>
               ses propres légumes dans le jardin pour qu’on est un
            <span class="font-medium text-vert-kaki-elements-importants">minimum d’indépendance</span>
              face à ses grandes surfaces.</p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/images/autosuffisance3.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            De plus, il n’y a pas que dans un potager qu’il faudrait investir: 
            <span class="font-medium text-vert-kaki-elements-importants">l’énergie</span>
              (électrique, gaz) nous y sommes également très dépendant. Il faudrait aussi investir dans  
            <span class="font-medium text-vert-kaki-elements-importants">les panneaux solaires</span>
               qui sont une énergie propre et durable. Si nous faisons tous des efforts pour y parvenir, la planète se portera mieux.</p>
    </div>
    <footer>
      <FooterPage/>
    </footer>
</template>

<script>
import VignetteArticle from "../../components/VignetteArticle.vue"
import FlecheGauche from "../../components/icons/FlecheGauche.vue"
import LogoSite from "../../components/icons/LogoSite.vue"
import IconConnexion from "../../components/icons/IconConnexion.vue"
import FooterPage from "../../components/FooterPage.vue"
import HeaderFonce from "../../components/HeaderFonce.vue"

export default {
   components: { VignetteArticle, FlecheGauche, LogoSite, IconConnexion, FooterPage, HeaderFonce } 
}
</script>
