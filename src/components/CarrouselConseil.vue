<template>
    <div class="m-5 w-[313px] h-[370px] relative">
        <img class="rounded-13xl absolute w-full h-[313px] object-cover" :src="image" alt="">
        <div>
            <a href="">
              <RouterLink to="/conseil1">
                <button class="w-[158px] h-11 absolute left-[139.5px] top-[290.5px] rounded-18xl bg-vert-fluo-bouton">
                  <p class="absolute text-lg ml-8 -mt-3 font-medium text-blanc-background">Lire la suite</p>
                </button>
              </RouterLink>
            </a>
        </div>
        <h4 class="absolute text-xl leading-tight text-left ml-3 text-blanc-background mt-44">{{titre1}}<br />{{titre2}}</h4>
        <p class="absolute text-xs text-left ml-3 mt-60 mr-14 text-blanc-background ">{{intro}}</p>
    </div>
</template>
<script>
export default {
  props: {
    image: String,
    titre1: String,
    titre2: String,
    intro: String,
  }
}
</script>