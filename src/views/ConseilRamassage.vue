<template>
    <header>
        <HeaderClair/>
    </header>
    <main>
        <h2 class="font-asap text-lg font-semibold ml-14 mr-12 mt-12 leading-5">
            Les précautions à adopter avant et pendant la récolte de déchets 
        </h2>
        <div class="flex flex-row gap-4 mt-6">
            <p class="w-52 mt-[60px] ml-5 font-poppins leading-6 font-semibold">
                Triez vos déchets dans plusieurs bacs différents pour faciliter le travail
            </p>
            <img src="../../public\images\conseil_img1.webp" alt="Poubelle">
        </div>
        <div>
            <p>
                En effet lors d’un rammassage vous allez être confronter a plusieurs type de dechets
                dans la nature; verre, carton, mégots... Il faudra donc trier ces déchets pour faciliter
                le travail dans les endroits de recyclage 
            </p>
        </div>
    </main>
</template>

<script>
import HeaderClair from "../components/HeaderClair.vue"

export default {
   components: { HeaderClair } 
}
</script>