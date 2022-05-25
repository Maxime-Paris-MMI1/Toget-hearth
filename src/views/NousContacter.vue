<template>

    <header class="mb-16">
    <HeaderClair/>
  </header>


      <p class=" font-poppins  pl-10 pr-10  text-xl mb-20  drop-shadow-lg">
        Si vous voulez nous contacter pour nous faire parvenir toute questions éventuelles ou bien des conseils pour améliorer notre site, vous êtes au bon endroit !
       <br> Vous avez juste à remplir ce court formulaire de contact.

      </p>


          <div class="box-border rounded-3xl bg-vert-pastel-deco p-12 w-full max-w-lg shadow-lg ">


            <form action="/action_page.php" class=" font-poppins font-medium">
              <label for="fname">Nom </label>
              <input type="text" id="fname" name="firstname" placeholder="Votre nom" class="w-full p-3 border border-b-vert-moyen-deco rounded box-border mt-1.5 mb-4 mr-0 ml-0 resize-y">
          
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






}
  
  input[type=text], textarea, input[type=email] {





 


    background-color: #F4FAF3;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    border-radius:20px;
    
  }
  label{margin-right: 0px;
    margin-left: 0px;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    
   }
  
  input[type=submit] {
    background-color: #45D475;
    color: white;
    padding: 12px 45px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    color: #F4FCEE;

    text-shadow: 0px 0px 4.77931px #FFFFFF;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    box-shadow: 0px 3.34821px 3.34821px rgba(0, 0, 0, 0.25);
    
    
  }
  
.sendbutton{
    text-align: center;
}

  input[type=submit]:hover {
    background-color: #1fa126;
  }
  

  }
 .condutilisation{
    font-family: 'Poppins', sans-serif;
    font-weight: 300;

 }


 .condutilisation{
    scale: 1.5;
    margin: 5vh 2vh ;

}

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