<template>



<header>
    <HeaderClair/>
</header>




<h2 class=" font-asap font-medium text-xl text-center mt-10 mb-10 ">Bienvenue sur la page à propos ! </h2>
<p class=" font-poppins font-medium text-base mt-8mb-10 pl-10 pr-10 ">Ici vous trouverez les personnes qui ont pû réaliser ce site web dans le cadre de notre projet collectif au sein du département MMI de montbéliard </p>

<AProposCard
   image="../../public/images/maxime.webp"

    lienlinkedin="https://www.linkedin.com/in/maxime-paris-730322215/"
    lieninsta="https://www.linkedin.com/in/maxime-paris-730322215/"

    nom="Maxime Paris"
    formation="BUT MMI - Première année "
    texte_description="Bonjour! je m’appelle Maxime Paris et pour ce projet, j’ai pu réaliser le logo ainsi qu’une partie de la maquette graphique. Je compte m’orienter vers le design plus tard pour faire infographiste. "/>
<AProposCard
  image="../../public/images/bryan.webp"

      lienlinkedin="https://www.linkedin.com/in/bryan-ferry-523546216/"
    lieninsta="https://www.instagram.com/bryan.fzz/"

    nom="Bryan Ferry"
    formation="BUT MMI - Première année "
    texte_description="Bonjour je m’appelle Bryan ferry et pour ce projet j’ai réaliser une partie de la maquette ainsi que le guide de style, j’ai également développer la landing page. Je compte m’orienter vers le design plus tard pour devenir UX designer.  "/>
<AProposCard
  image="../../public/images/justine.webp"

    lienlinkedin="https://www.linkedin.com/in/justine-duval-28b3a2224/"
    lieninsta="https://www.instagram.com/jdxl.pro/?hl=fr"

    nom="Justine Duval"
    formation="BUT MMI - Première année "
    texte_description="Bonjour, je m’appelle Justine Duval ! Pour ce projet je me suis occupée de la partie communication et du design avec la réalisation de certaines page de cette maquette graphique. Plus tard j’aimerai devenir Infographiste ou Web-Designer. "/>



<footer>
    <FooterPage/>
</footer>


</template>


<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderClair from "../components/HeaderClair.vue"  

import FooterPage from "../components/FooterPage.vue" 
import AProposCard from "../components/AProposCard.vue" 


export default {
  components: {HeaderClair, FooterPage, AProposCard,  }
};
</script>