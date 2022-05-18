<template>
    <div class="absolute w-full z-0">
        <VecteurFooter/>
    </div>
    <div class="flex-row justify-between z-10">
        <FacebookLogo/>
        <InstagramLogo/>
        <TwitterLogo/>
    </div>
</template>



<script>
import InstagramLogo from "../components/icons/InstagramLogo.vue" 
import FacebookLogo from "../components/icons/FacebookLogo.vue" 
import TwitterLogo from "../components/icons/TwitterLogo.vue" 
import VecteurFooter from "../components/icons/VecteurFooter.vue" 

export default {
  name: "Footer",
  components: {InstagramLogo, FacebookLogo, TwitterLogo, VecteurFooter  },


};

</script>