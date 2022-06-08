<template>
    <header>
        <HeaderClair/>
    </header>
    <main>
        <h2 class="font-asap text-lg font-semibold ml-14 mr-12 mt-12 leading-5">
            Les précautions à adopter avant et pendant la récolte de déchets 
        </h2>

<img class=" mt-8 object-contain absolute" src="../../../public/images/fond_precaution1.webp" alt="">
        <div class="flex flex-row gap-4 mt-6 z-30 ">
            <p class="w-52 mt-[60px] ml-5 font-poppins leading-6 font-semibold">
                Triez vos déchets dans plusieurs bacs différents pour faciliter le travail
            </p>

       <img src="../../../public\images\conseil_img1.webp" alt="Poubelle">
            
        </div>




        <div>
            <p class="font-poppins text-xs font-medium ml-5 mr-14 mt-7">
                En effet lors d’un ramassage vous allez être confronter a plusieurs type de dechets
                dans la nature; verre, carton, mégots... Il faudra donc trier ces déchets pour faciliter
                le travail dans les endroits de recyclage 
            </p>
        </div>
        <div>
            <h3 class="font-poppins leading-6 font-semibold mt-7 ml-28">
                Respectez la nature !!
            </h3>
            <div class="flex justify-center">
                <img class="mt-3" src="../../../public\images\conseil_img2.webp" alt="Promeneur">
            </div>
            <p class="font-poppins text-xs font-medium ml-5 mt-4 mr-4">
                Ne dégradez pas la nature! Si vous participez à un rammassage collectif,
                ce n’est pas pour dégrader mais pour aider la nature.
                Alors soyez indulgent et ne rammassez pas n’importe quel fleur,
                ne déranger pas les animaux... En adoptant ces gestes simples vous aidez et respectez la planète
                :)
            </p>
        </div>
        <div>
            <h3 class="font-poppins leading-6 font-semibold mt-7 ml-28">
                Portez des protections 
            </h3>
            <div class="flex justify-center">
                <img class="mt-3 " src="../../../public\images\conseil_img3.webp" alt="Protections">
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
                <img class="mt-3" src="../../../public\images\conseil_img4.webp" alt="Croix">
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