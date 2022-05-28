<template>
<div class="bg-vert-pastel-deco">
  <header>
    <HeaderClair/>
  </header>

<main>

  <h2 class=" text-center font-poppins text-2xl mt-16 mb-10">Liste des défis</h2>


  <div class="space-x-1 mb-16">


          <BoutonAction
        :kaki="true"
        titrebouton="Ramasser des déchets"
        lien= "/Defis1"
        />

        <BoutonAction
        :kaki="true"
        titrebouton="Venir en vélo au travail"
        />

        <BoutonAction
        :kaki="true"
        titrebouton="Organiser une collecte"
        />

        <BoutonAction
        :kaki="true"
        titrebouton="Se faire un repas 100% bio"
        />

        <BoutonAction
        :kaki="true"
        titrebouton="Supprimer des mails inutiles"
        />

        <BoutonAction
        :kaki="true"
        titrebouton="Sécher ses vêtements à l’air"
        />


  </div>

        
</main>
  <footer>
    <FooterPage/>
  </footer>
</div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderClair from "../../components/HeaderClair.vue" 

import FooterPage from "../../components/FooterPage.vue" 
import BoutonAction from "../../components/BoutonAction.vue" 

export default {
  name: "Header",
  components: {HeaderClair, FooterPage, BoutonAction, }
};
</script>