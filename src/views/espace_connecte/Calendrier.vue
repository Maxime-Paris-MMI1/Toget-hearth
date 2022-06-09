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