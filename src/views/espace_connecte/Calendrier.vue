<template>
<div class=" bg-vert-moyen-deco">
    <header>
        <HeaderClair/>
    </header>
<div class=" flex mt-10">
                  <BoutonAction 
                :fluo="true"
                titrebouton= "Organiser un ramassage "
                lien="/"
                
                />
                </div>




<!-- partie -->
<div>

        <div class="  absolute mt-[90px] leading-6 p-10 z-10 items-center gap-3">
            <p class="  font-poppins   ml-5 text-center text-lg">
                Trouver un événement à la date voulu ! 
            </p>
                        <p class="  font-poppins   ml-5 text-center mt-8 font-medium text-2xl mb-10">
                &lt; Janvier &gt;
            </p>


                  <BoutonAction 
                :fluo="true"
                titrebouton= "Rechercher "
                lien="/"
                
                />
        </div>




        <div class=" flex justify-center ">

</div>
<img class=" mt-8 object-cover w-screen max-w-xl mr-auto mb-16 " src="/public/images/fond_calendrier.webp" alt=" image precaution">

</div>

<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Janvier</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 <RouterLink to="/RassemblementInfo" class=" bg-vert-fluo-bouton p-1 rounded-full text-white">3</RouterLink>  4 5 6 </span>  <br class=" mb-4"> 7 8 9  10 11 12 13 <br class=" mb-4"> 14 15 16 17 18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 27 28 29 30 31</p>
</div>

</div>



<img class=" w-1/2 object-cover ml-auto mb-10 " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->


<!-- <RouterLink to="/RassemblementInfo" class=" bg-vert-fluo-bouton p-1 rounded-full text-white">   </RouterLink> -->

<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Février</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 3 4 5 6 </span>  <br class=" mb-4"> 7 8 9 <RouterLink to="/RassemblementInfo" class=" bg-vert-fluo-bouton p-1 rounded-full text-white"> 10</RouterLink>11 12 13 <br class=" mb-4"> 14 15 16 17 18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 27 28 </p>
</div>

</div>



<img class=" w-1/2 object-cover mr-auto rotate-180 " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->



<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Mars</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 3 4 5 6 </span>  <br class=" mb-4"> 7 8 9 10 11 12 13 <br class=" mb-4"> 14 15 16 17 18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 27 28 29 30 31 </p>
</div>

</div>



<img class=" w-1/2 object-cover ml-auto  " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->


<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Avril</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 3 4 5 6 </span>  <br class=" mb-4"> 7 8 9 10 11 12 13 <br class=" mb-4"> 14 15 16 <RouterLink to="/RassemblementInfo" class=" bg-vert-fluo-bouton p-1 rounded-full text-white"> 17</RouterLink>18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 <RouterLink to="/RassemblementInfo" class=" bg-vert-fluo-bouton p-1 rounded-full text-white">27</RouterLink>28 29 30 31 </p>
</div>

</div>



<img class=" w-1/2 object-cover mr-auto rotate-180  " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->

<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Mai</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 3 4 5 6 </span>  <br class=" mb-4"> 7 8 9 10 11 12 13 <br class=" mb-4"> 14 15 16<RouterLink to="/RassemblementInfo" class=" bg-vert-fluo-bouton p-1 rounded-full text-white">17</RouterLink> 18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 27 28 29 30 31 </p>
</div>

</div>



<img class=" w-1/2 object-cover ml-auto  " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->

<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Juin</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 3 4 5 6 </span>  <br class=" mb-4"> 7 8 9 10 11 12 13 <br class=" mb-4"> 14 15 16 17 18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 27 28 29 30 31 </p>
</div>

</div>



<img class=" w-1/2 object-cover mr-auto rotate-180  " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->

<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Juillet</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 3 4 5 6 </span>  <br class=" mb-4"> 7 8 9 10 11 12 13 <br class=" mb-4"> 14 15<RouterLink to="/RassemblementInfo" class=" bg-vert-fluo-bouton p-1 rounded-full text-white">16</RouterLink> 17 18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 27 28 29 30 31 </p>
</div>

</div>



<img class=" w-1/2 object-cover ml-auto  " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->

<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Aout</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 3 4 5 6 </span>  <br class=" mb-4"> 7 8 9 10 11 12 13 <br class=" mb-4"> 14 15 16 17 18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 27 28 29 30 31 </p>
</div>

</div>



<img class=" w-1/2 object-cover mr-auto rotate-180  " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->

<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Septembre</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 3 4 5 6 </span>  <br class=" mb-4"> 7 8 9 10 11 12 13 <br class=" mb-4"> 14 15 16 17 18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 27 28 29 30 31 </p>
</div>

</div>



<img class=" w-1/2 object-cover ml-auto  " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->


<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Octobre</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 3 4 5 6 </span>  <br class=" mb-4"> 7 8 9 10 11 12 13 <br class=" mb-4"> 14 15 16 17 18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 27 28 29 30 31 </p>
</div>

</div>



<img class=" w-1/2 object-cover mr-auto rotate-180 " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->
<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Novembre</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 3 4 5 6 </span>  <br class=" mb-4"> 7 8 9 10 11 12 13 <br class=" mb-4"> 14 15 16 17 18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 27 28 29 30 31 </p>
</div>

</div>



<img class=" w-1/2 object-cover ml-auto  " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->

<!-- debut calendrier -->
<div class="  absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3">

<div class=" bg-vert-pastel-deco p-10 ">
    <h2 class=" font-poppins  font-medium text-2xl mb-10">Decembre</h2>
    <p class=" font-asap text-xl tracking-widest"> <span class=" ml-16">1 2 3 4 5 6 </span>  <br class=" mb-4"> 7 8 9 10 11 12 13 <br class=" mb-4"> 14 15 16 17 18 19 <br class=" mb-4"> 20 21 22 23 24 25 <br class=" mb-4"> 26 27 28 29 30 31 </p>
</div>

</div>

<div class="bg-gradient-to-b from-vert-moyen-deco to-vert-pastel-deco ">

<img class=" w-1/2 object-cover mr-auto rotate-180 mb-16  " src="/public/images/fondvague_calendrier.webp" alt="fond vague">

<!-- fin calendrier pour un mois -->

<footer>
    <FooterPage/>
</footer>
</div>
</div>
</template>


<script>
import HeaderClair from "../../components/HeaderClair.vue"
import FooterPage from "../../components/FooterPage.vue"
import BoutonAction from "../../components/BoutonAction.vue"

export default {
   components: { HeaderClair, FooterPage,BoutonAction } 
}
</script>