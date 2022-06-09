<template>
    <header>
        <HeaderClair/>
    </header>
    <main>
        <h2 class="font-asap text-lg font-semibold ml-14 mr-12 mt-12 leading-5">
            Les précautions à adopter avant et pendant la récolte de déchets 
        </h2>

<!-- partie -->
<div>

        <div class=" flex absolute mt-[50px] leading-6 p-10 ">
            <p class="  font-poppins  font-semibold ml-5">
                Triez vos déchets dans plusieurs bacs différents pour faciliter le travail
            </p>
<img class=" w-16 h-16" src="/public/images/Validation.svg" alt=" validation checkbox">             
        </div>


        <div class=" flex justify-center ">
<img class=" absolute mt-44 ml-10 w-24 " src="/public\images\conseil_img1.webp" alt="Poubelle">
</div>
<img class=" mt-8 object-cover w-screen max-w-xl mr-auto mb-16" src="/public/images/fond_precaution1.webp" alt=" image precaution">

</div>


<!-- partie -->
<div>

        <div class=" flex absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3 ">
            <p class="  font-poppins  font-semibold ml-5">
                Respectez la nature !!
            </p>
<img class=" w-16 h-16" src="/public/images/Validation.svg" alt=" validation checkbox">             
        </div>


        <div class=" flex justify-center ">
<img class=" absolute mt-44  w-60 z-10 " src="/public\images\conseil_img2.webp" alt="Nature">
</div>
<img class=" mt-8 object-cover w-screen max-w-xl mr-auto mb-16 rotate-180" src="/public/images/fond_precaution1.webp" alt=" image precaution">

</div>


<!-- partie -->
<div>

        <div class=" flex absolute mt-[15px] leading-6 p-10 z-10 items-center gap-3 ">
            <p class="  font-poppins  font-semibold ml-5">
               Portez des protections 
            </p>
<img class=" w-16 h-16" src="/public/images/Validation.svg" alt=" validation checkbox">             
        </div>


        <div class=" flex justify-center ">
<img class=" absolute mt-28 ml-7 w-52 z-10 " src="/public\images\conseil_img3.webp" alt="accessoire de protection">
</div>
<img class=" mt-8 object-cover w-screen max-w-xl mr-auto mb-16 " src="/public/images/fond_precaution2.webp" alt=" image precaution">

</div>

<!-- partie -->
<div>

        <div class=" flex absolute mt-[15px] leading-6 p-10 z-10 items-center gap-3 ">
            <p class="  font-poppins  font-semibold ml-5">
               Ne prenez aucun risque  
            </p>
<img class=" w-16 h-16" src="/public/images/Validation.svg" alt=" validation checkbox">             
        </div>


        <div class=" flex justify-center ">
<img class=" absolute mt-32  w-16 z-10 " src="/public\images\conseil_img4.webp" alt="croix">
</div>
<img class=" mt-8 object-cover w-screen max-w-xl mr-auto mb-16 rotate-180 " src="/public/images/fond_precaution2.webp" alt=" image precaution">

</div>

<p class=" font-poppins font-light p-10 mb-7">
    Pour plus d’informations vous pouvez lire notre page spécialement conçu pour les précautions à adopter avant et pendant un ramassage. 
</p>

              <BoutonAction 
                :fluo="true"
                titrebouton= "En savoir plus "/>


<div class=" flex justify-center items-center p-7 mt-6 mb-16">

    <p class="font-poppins font-light text-xs ">
        J’ai pris connaissance des conditions avant le ramassage et je m’engage à les respecter 
    </p>
<input type="checkbox" required >
    
</div>


              <BoutonAction 
                :fluo="true"
                titrebouton= "Participer au rendez-vous "
                lien="/"
                
                />






    </main>
    <footer class=" mt-20">
        <FooterPage/>
    </footer>
</template>

<script>
import HeaderClair from "../../components/HeaderClair.vue"
import FooterPage from "../../components/FooterPage.vue"
import BoutonAction from "../../components/BoutonAction.vue"

export default {
   components: { HeaderClair, FooterPage,BoutonAction } 
}
</script>