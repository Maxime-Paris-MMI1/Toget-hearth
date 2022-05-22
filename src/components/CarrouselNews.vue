<template>
    <div class="w-[314px] h-[149.97px] relative">
        <img class="rounded-4xl absolute" :src="image" alt="">
        <div>
            <h4 class="font-asap absolute ml-3 mt-[72px] text-lg font-medium text-blanc-background ">{{title}}</h4>
            <p class="font-poppins absolute ml-3 mt-24 text-xs font-medium text-blanc-background ">{{intro}}</p>
            <RouterLink :to="lien">
                  <p class="absolute font-poppins text-xs ml-[275px] mt-[122px] font-medium text-blanc-background underline">Lire</p>
              </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  props: {
    image: String,
    title: String,
    intro: String,
    lien:{
      type: String,
      default:"/"
    },
  }
}
</script>