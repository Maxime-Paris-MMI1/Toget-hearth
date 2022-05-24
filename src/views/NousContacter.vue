<template>

    <header class="mb-16">
    <HeaderClair/>
  </header>


      <p class=" font-poppins  pl-10 pr-10  text-xl mb-20  drop-shadow-lg">
        Si vous voulez nous contacter pour nous faire parvenir toute questions éventuelles ou bien des conseils pour améliorer notre site, vous êtes au bon endroit !
       <br> Vous avez juste à remplir ce court formulaire de contact.

      </p>


          <div class="formulaire">
           
            <form action="/action_page.php">
              <label for="fname">Nom </label>
              <input type="text" id="fname" name="firstname" placeholder="Votre nom">
          
              <label for="sujet">Prénom</label>
              <input type="text" id="sujet" name="sujet" placeholder="Votre prénom">
          
              <label for="emailAddress">Email</label>
              <input id="emailAddress" type="email" name="email" placeholder="Votre email" required>
          
          
              <label for="subject">Message</label>
              <textarea id="subject" name="subject" placeholder="Votre message" style="height:200px"></textarea>

              <input class="condutilisation" type="checkbox" required> J’accepte les conditions d’utilisations 
              <div class="sendbutton">
              <input type="submit" value="Envoyer">
              </div>
            </form>
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