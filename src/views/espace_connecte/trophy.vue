<template>
<div class=" bg-vert-pastel-deco">
<header>
    <HeadercoClair/>
</header>


<main>

<BackDefis/>


<h1 class=" font-poppins font-medium text-xl text-center p-10 mt-10">
    À quels trophées correspondent vos points
</h1>


<section>

<div>

<div class=" bg-vert-moyen-deco m-5  mr-20 ml-20   mb-5   p-5 text-center rounded-10xl">
    <p class=" font-poppins font-medium text-xl text-white">
        100 points
    </p>
</div>

<div class=" bg-vert-moyen-deco opacity-50 text-center  m-5  mr-28 ml-28 p-5 mb-5 rounded-full  ">
<p class="">♻</p>
</div>






</div>





</section>


</main>


<footer>
    <FootercoPage/>
</footer>

</div>
</template>




<script>

import HeadercoClair from "../../components/HeadercoClair.vue" 

import FootercoPage from "../../components/FootercoPage.vue" 

import BackDefis from "../../components/BackDefis.vue" 




export default {
  name: "components",
  components: {HeadercoClair, FootercoPage, BackDefis}
};
</script>