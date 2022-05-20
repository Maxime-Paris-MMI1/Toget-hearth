<template>
  <header>
    <HeaderFonce/>
  </header>
    <div>
        <VignetteArticle class="-z-10"
        image="/images/photo_consommation.webp"
        titre1="Réduire sa"
        titre2="consommation d'énergie"
        intro="De nos jours la consommation d’énergie impacte très fortement l’écologie et pourtant c’est elle qui est la plus simple à corriger."/>  
    </div>
    <div>
        <p class="z-2 mt-[370px] ml-5 mr-6 font-poppins text-xs ">
            Une des premières actions à effectuer et
            <span class="font-medium text-vert-kaki-elements-importants">d’éteindre les lumières</span> 
                dès qu’il fait assez jour dans une pièce ou bien même  
            <span class="font-medium text-vert-kaki-elements-importants">débrancher</span>
             tout appareil électronique dont on ne se sert pas, les appareils connectés à internet qui ne sont pas utilisés peuvent également être déconnectés pour 
            <span class="font-medium text-vert-kaki-elements-importants">diminiuer la consommation d'énergie.</span>
             Ce premier point permet de réduire la consommation d’énergie de 10% sur la facture d'électricité. </p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/images/consommation1.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            Deuxièmement il faut remplacer toute source de lumières par de 
            <span class="font-medium text-vert-kaki-elements-importants">la lumière LED</span>
             car elles permettent d’améliorer drastiquement
            <span class="font-medium text-vert-kaki-elements-importants">la consommation d’énergie,</span>
             il faut néanmoins bien savoir utiliser ces ampoules LED, en effet il faut privilégier 
            <span class="font-medium text-vert-kaki-elements-importants">des blancs chauds</span>
             qui varient de 2700 à 3500 kelvins, et surtout acheter des ampoules LED et non LED déco ( qui elle consommes autant qu’une ampoule normal), pour cela il suffit de se fier à 
            <span class="font-medium text-vert-kaki-elements-importants">l’étiquette de classement d’énergie.</span></p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/images/consommation2.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            Troisièmement, il vous faut impérativement utiliser 
            <span class="font-medium text-vert-kaki-elements-importants">le mode éco</span>
              sur les machines à laver et lave-vaisselle, car celui-ci permet 
            <span class="font-medium text-vert-kaki-elements-importants">d’économiser de l’eau ou de l' électricité</span>
              même si la durée d’utilisation est longue. Toujours par rapport au lave-linge ou sèche-linge, il faut les utiliser seulement s' ils sont pleins et pour le sèche linge il faut privilégier
            <span class="font-medium text-vert-kaki-elements-importants">un séchage à l'air libre,</span>
             ce qui permet d’économiser 200 kwh par an.</p>
        <div class="flex justify-center">
        <img class="mt-8 " src="/images/consommation3.webp" alt="">
        </div>
        <p class="mt-8 ml-5 mr-6 font-poppins text-xs ">
            Ensuite lorsque vous cuisinez il faut
            <span class="font-medium text-vert-kaki-elements-importants">couvrir vos casseroles</span>
              pour réduire la consommation d’énergie de près de 25% ! Ce qui est non négligeable car un simple couvercle suffit. Enfin pour les TV il faut se contenter d’un téléviseur de 
            <span class="font-medium text-vert-kaki-elements-importants">80 cm de diagonal</span>
               car pour information, un téléviseur de 160 cm de diagonale consomme autant que 4 téléviseur de 80 cm.</p>
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
