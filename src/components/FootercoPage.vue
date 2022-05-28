<template>
    <div class="mt-6">
        <img class="w-screen max-h-20 -mb-1" src="../../public/images/Vecteur_Footer.webp" alt="">
        <div class="flex justify-center gap-10 pt-1 pb-2 bg-vert-moyen-deco">
            <a href="https://www.facebook.com/togetheartoff"><FacebookLogo/></a>
            <a href="https://www.instagram.com/toget.heart_/"><InstagramLogo/></a>
            <a href="https://twitter.com/heart_toget"><TwitterLogo/></a>
        </div>
        <div class=
        "flex
        flex-col
        pt-5 
        text-center
        gap-1
        pb-11
        font-poppins
        text-white 
        text-base
        font-normal
        bg-vert-moyen-deco ">
        <RouterLink to="/listeDefis">Défis</RouterLink>
        <RouterLink to="/accueilco">Accueil</RouterLink>
        <RouterLink to="/accueilco">À propos</RouterLink>
        <RouterLink to="/nouscontacterco">Nous contacter</RouterLink>
        <RouterLink class="text-sm pt-2" to="/mentionlegalesco">Mention légales/politique de confidentialité</RouterLink>
        </div>
    </div>
</template>




<script>
import { RouterLink, RouterView } from "vue-router";
import InstagramLogo from "../components/icons/InstagramLogo.vue" 
import FacebookLogo from "../components/icons/FacebookLogo.vue" 
import TwitterLogo from "../components/icons/TwitterLogo.vue" 

export default {
  name: "Footer",
  components: {InstagramLogo, FacebookLogo, TwitterLogo  },
};

</script>