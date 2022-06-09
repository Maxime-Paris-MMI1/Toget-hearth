<template>
<div class="bg-vert-pastel-deco">
  <header>
    <HeadercoClair/>
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
        lien= "/Defis2"
        />

        <BoutonAction
        :kaki="true"
        titrebouton="Organiser une collecte"
        lien= "/Defis3"
        />

        <BoutonAction
        :kaki="true"
        titrebouton="Se faire un repas 100% bio"
        lien="/accueilco"
        />

        <BoutonAction
        :kaki="true"
        titrebouton="Supprimer des mails inutiles"
        lien="/accueilco"
        />

        <BoutonAction
        :kaki="true"
        titrebouton="Sécher ses vêtements à l’air"
        lien="/accueilco"
        />

<div class=" mt-24">
        <BoutonAction
        
        :fluo="true"
        titrebouton="Liste des trophées"
        lien="/trophy"
        />
</div>
  </div>

        
</main>
  <footer>
    <FootercoPage/>
  </footer>
</div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HeadercoClair from "../../components/HeadercoClair.vue" 

import FootercoPage from "../../components/FootercoPage.vue" 
import BoutonAction from "../../components/BoutonAction.vue" 

export default {
  name: "Header",
  components: {HeadercoClair, FootercoPage, BoutonAction, }
};
</script>