<template>
    <div class="relative">
        <img class="absolute " :src="image" alt="">
        <div class="w-[375px] h-[107px] absolute mt-[266px] rounded-t-18xl  bg-blanc-background"></div>
        <h1 class="absolute ml-5 mt-[150px] text-3xl font-asap text-left text-blanc-background">{{titre1}} <br> {{titre2}}</h1>
    </div>
    
</template>

<script>
export default {
  props: {
    image: String,
    titre1: String,
    titre2: String,
  }
}
</script>
