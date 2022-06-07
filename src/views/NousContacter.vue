<template>

    <header class="mb-16">
    <HeaderClair/>
  </header>


      <p class=" font-poppins  pl-10 pr-10  text-xl mb-20  drop-shadow-lg">
        Si vous voulez nous contacter pour nous faire parvenir toute questions éventuelles ou bien des conseils pour améliorer notre site, vous êtes au bon endroit !
       <br> Vous avez juste à remplir ce court formulaire de contact.

      </p>

    <div class=" flex justify-center p-4">
          <div class="box-border rounded-10xl bg-vert-pastel-deco p-8  w-full max-w-lg shadow-lg ">


            <form method="post" action="../contact.php"  class=" font-poppins font-medium" id="form">
              <label for="fname" class="ml-0 mr-0 w-full font-poppins font-medium text-lg">Nom </label>
              <input type="text" id="fname" name="name" placeholder="Votre nom" class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-4 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl">

              <label for="sujet" class="ml-0 mr-0 w-full font-poppins font-medium text-lg">Prénom</label>
              <input type="text" id="sujet" name="prenom" placeholder="Votre prénom" class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-4 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl">
          
              <label for="emailAddress" class="ml-0 mr-0 w-full font-poppins font-medium text-lg">Email</label>
              <input id="emailAddress" type="email" name="email" placeholder="Votre email" required class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-4 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl">
          
          
              <label for="subject" class="ml-0 mr-0 w-full font-poppins font-medium text-lg ">Message</label>
              <textarea id="subject" name="message" placeholder="Votre message" style="height:150px" class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-4 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl"></textarea>

              <input class="mb-7" type="checkbox" required> 
              <span class="font-poppins font-normal text-sm"> J’accepte les conditions d’utilisations </span>
              <div class=" text-center">
              <input type="submit" value="Envoyer" name="submit" class=" bg-vert-fluo-bouton text-white px-16 py-3 rounded-3xl border-none cursor-pointer shadow-lg text-lg font-poppins font-medium hover:bg-[#1fa126]">
              </div>
            </form>
          </div>
          </div>









      <footer>
    <FooterPage/>
  </footer>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderClair from "../components/HeaderClair.vue"  

import FooterPage from "../components/FooterPage.vue" 

export default {
  components: {HeaderClair, FooterPage,}
};
</script>