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
<img class=" w-20 h-20" src="/public/images/Validation.svg" alt=" validation checkbox">             
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
<img class=" w-20 h-20" src="/public/images/Validation.svg" alt=" validation checkbox">             
        </div>


        <div class=" flex justify-center ">
<img class=" absolute mt-44 ml-10 w-52 z-10 " src="/public\images\conseil_img2.webp" alt="Nature">
</div>
<img class=" mt-8 object-cover w-screen max-w-xl mr-auto mb-16 rotate-180" src="/public/images/fond_precaution1.webp" alt=" image precaution">

</div>


<!-- partie -->
<div>

        <div class=" flex absolute mt-[50px] leading-6 p-10 z-10 items-center gap-3 ">
            <p class="  font-poppins  font-semibold ml-5">
               Portez des protections 
            </p>
<img class=" w-20 h-20" src="/public/images/Validation.svg" alt=" validation checkbox">             
        </div>


        <div class=" flex justify-center ">
<img class=" absolute mt-44 ml-10 w-52 z-10 " src="/public\images\conseil_img2.webp" alt="Nature">
</div>
<img class=" mt-8 object-cover w-screen max-w-xl mr-auto mb-16 " src="/public/images/fond_precaution2.webp" alt=" image precaution">

</div>




        <div>
            <h3 class="font-poppins leading-6 font-semibold mt-7 ml-28">
                Portez des protections 
            </h3>
            <div class="flex justify-center">
                <img class="mt-3 " src="/public\images\conseil_img3.webp" alt="Protections">
            </div>
            
            <p class="font-poppins text-xs font-medium ml-5 mt-4 mr-4">
                En effet dans la nature il exise des risques de blessures ou de maladies nottament
                avec des bouts de verres coupants ou encore des seringues non stériles. Pour éviter
                tout risques, portez des vêtements qui n’ont peu d’importance mais aussi des gants
                de protections ainsi que des bonnes chaussures.
            </p>
        </div>
        <div>
            <h3 class="font-poppins leading-6 font-semibold mt-7 ml-28">
                Ne prenez aucun risque 
            </h3>
            <div class="flex justify-center">
                <img class="mt-3" src="/public\images\conseil_img4.webp" alt="Croix">
            </div>
            
            <p class="font-poppins text-xs font-medium ml-5 mt-7 mr-4 mb-14">
                Si vous apercevez un déchet qui est au bord d’un précipice ou au beau millieu des ronces
                n’y allez pas! Ces situations sont dangereuses et ne mérites pas d’être risqué.
                il vaut mieux ne pas finir à l’hopital.
            </p>
        </div>
    </main>
    <footer>
        <FooterPage/>
    </footer>
</template>

<script>
import HeaderClair from "../../components/HeaderClair.vue"
import FooterPage from "../../components/FooterPage.vue"

export default {
   components: { HeaderClair, FooterPage } 
}
</script>