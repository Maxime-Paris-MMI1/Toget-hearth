<template>
    <div class="relative">
        <img class=" max-h-[333px] min-h-[333px] w-full h-48 object-cover" :src="image" alt="">
        <div class="-mt-[290px]">
          <div class="w-[100%] h-[107px] absolute mt-[266px] rounded-t-18xl  bg-blanc-background"></div>
          <div class=" flex justify-center">
          <h1 class="absolute  mt-[150px] text-3xl font-poppins font-semibold text-center text-blanc-background  ">{{titre1}} <br> {{titre2}}</h1>
          </div>
        </div>
        
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
