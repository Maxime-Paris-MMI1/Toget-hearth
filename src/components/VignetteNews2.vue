<template>
    <div class="p-5 flex flex-row justify-between gap-8">
        <div class="flex flex-col font-poppins text-vert-fonce-typographie mt-4 mb-2">
            <h3 class="text-xs font-medium">{{titre}}</h3>
            <p class="text-[10px]">{{intro}}</p>
            <RouterLink class="mt-2 font-medium text-vert-fluo-bouton text-[10px] underline text-right" :to="lien">
                Lire plus
            </RouterLink>
        </div>
        <img class="rounded-5xl object-cover w-[110px] h-[110px] " :src="image" alt="">
    </div>
</template>

<script>
export default {
    props: {
    image: String,
    titre: String,
    intro: String,
    lien:{
      type: String,
      default:"/"
    },
    }
}
</script>
