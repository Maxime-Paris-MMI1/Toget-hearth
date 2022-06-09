<template>
<div class=" bg-vert-pastel-deco">
<header>
    <HeadercoClair/>
</header>



<h1 class=" font-asap text-xl text-center mt-10 mb-6">
Organisation d’évènement
</h1>


<h2 class="font-poppins text-lg font-light  p-10">Vous souhaitez organiser un évènement ?</h2>
<h2 class="font-poppins text-lg font-light  p-10 pt-4">Remplissez ce formulaire 
afin que votre évènement 
sois publié 💚</h2>








    <div class=" flex justify-center p-4">
          <div class="box-border rounded-10xl bg-vert-moyen-deco p-8  w-full max-w-lg shadow-lg ">


            <form method="post" class=" font-poppins font-medium" id="form">
              <label for="firstname" class="ml-0 mr-0 w-full font-poppins font-medium text-lg">Nom </label>
              <input required type="text" id="firstname" name="name" placeholder="Nom" class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-4 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl">

              <label for="secondname" class="ml-0 mr-0 w-full font-poppins font-medium text-lg">Prénom</label>
              <input required type="text" id="secondname" name="prenom" placeholder="Prénom" class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-4 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl">
          
              <label for="email" class="ml-0 mr-0 w-full font-poppins font-medium text-lg">Email</label>
              <input id="email" type="email" name="email" placeholder="Email" required class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-5 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl">


          <hr class=" h-0 border-0 border-t-2 border-dashed border-black mb-7  ">

     <label for="lieu" class="ml-0 mr-0 w-full font-poppins font-medium text-lg">Où souhaitez vous organiser cet évènement ?</label>
              <input id="lieu" type="lieu" name="lieu" placeholder="Lieu" required class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-5 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl">
        
       <label for="lieu" class="ml-0 mr-0 w-full font-poppins font-medium text-lg">Date de l’évènement</label>
              <input id="lieu" type="lieu" name="lieu" placeholder="jj / mm / aaaa" required class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-5 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl">   

     <label for="heure" class="ml-0 mr-0 w-full font-poppins font-medium text-lg">Heure du début de l’évènement</label>
              <input id="heure" type="heure" name="heure" placeholder="hh : mm" required class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-5 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl">   



              <label for="subject" class="ml-0 mr-0 w-full font-poppins font-medium text-lg ">Description de l'évènement</label>
              <textarea id="subject" name="message" placeholder="Description" style="height:150px" class="w-full p-3 border border-b-vert-moyen-deco  box-border mt-1.5 mb-4 mr-0 ml-0 resize-y font-poppins font-light text-xs rounded-8xl"></textarea>

              <input class="mb-7" type="checkbox" required> 
              <RouterLink to="mentionlegalesco">
                <span class="font-poppins font-normal text-sm underline"> J’accepte les conditions générales d'utilisations </span>
              </RouterLink>
              <div class=" text-center">
              <input type="submit" value="Envoyer" name="submit" class=" bg-vert-fluo-bouton text-white px-16 py-3 rounded-full border-none cursor-pointer shadow-lg text-lg font-poppins font-medium hover:bg-[#1fa126]">
              </div>
            </form>
          </div>
          </div>



<footer>
    <FootercoPage/>
</footer>

    </div>
</template>

<script>
import HeadercoClair from "../../components/HeadercoClair.vue"
import FootercoPage from "../../components/FootercoPage.vue"
import BoutonAction from "../../components/BoutonAction.vue"

export default {
   components: { HeadercoClair, FootercoPage,BoutonAction } 
}
</script>