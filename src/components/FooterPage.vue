<template>
    <div class="mt-6">
        <img class="w-screen max-h-20 -mb-1" src="../../public/images/Vecteur_Footer.webp" alt="">
        <div class="flex justify-center gap-10 pt-1 pb-2 bg-vert-moyen-deco">
            <FacebookLogo/>
            <InstagramLogo/>
            <TwitterLogo/>
        </div>
        <div class="bg-vert-moyen-deco flex-col justify-center">
         <a href="">Défis</a>
         <a href="">Accueil</a>
         <a href="">À propos</a>
         <a href="">Nous contacter</a>
         <a href="">Mention légales/politique de confidentialité</a>
        </div>
    </div>
</template>



<script>
import InstagramLogo from "../components/icons/InstagramLogo.vue" 
import FacebookLogo from "../components/icons/FacebookLogo.vue" 
import TwitterLogo from "../components/icons/TwitterLogo.vue" 

export default {
  name: "Footer",
  components: {InstagramLogo, FacebookLogo, TwitterLogo  },
};

</script>