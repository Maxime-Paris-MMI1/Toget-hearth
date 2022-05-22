<template>
    <div>
        <img class="mt-1 mr-5 rounded-5xl object-cover" :src="image" alt="">
        <div>
            <h4 class="font-asap ml-1 mt-4 text-xs font-medium text-vert-fonce-typographie ">{{title}}</h4>
            <p class="font-asap ml-1 text-xs text-vert-fonce-typographie ">{{intro}}</p>
            <RouterLink :to="lien">
                  <p class="font-asap mt-1 ml-40 text-xs font-medium text-vert-fluo-bouton ">Lire plus</p>
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