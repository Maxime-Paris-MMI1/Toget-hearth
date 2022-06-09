<template>
    
<div class="w-[350px] h-[307px] mb-16">
  <svg
    width="350"
    height="307"
    viewBox="0 0 350 307"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute"
    preserveAspectRatio="none"
  >
    <path
      d="M0 14.5V293C1.2 304.2 9.16667 307 13 307H335C345.4 307 349.333 298.333 350 294V13C348.4 3 340.333 0.166667 336.5 0H14C2.8 1.2 0 10.1667 0 14.5Z"
      fill="#C4DCBE"
    ></path>
  </svg>
  <p
    class="relative left-[23px] top-[30px] text-[14px] font-medium text-left text-black"
  >
    Date
  </p>
  <p
    class="relative left-[23px] top-[60px] text-[14px] font-medium text-left text-black"
  >
    Lieu
  </p>

  <p
    class="relative left-[23px] z-40 top-[90px] text-[14px] mt-1 font-medium text-left text-black"
  >
    Heure
  </p>

  <p
    class="relative left-[23px] top-[120px] text-[14px] font-medium text-left text-black"
  >
    Description
  </p>






  <p
    class="relative left-[130px] pl-2 z-40 -top-[60px] text-[11px] mt-1 font-medium text-left text-black bg-white w-[200px] rounded-full"
  >
    {{date}}
  </p>
  <p
    class="relative left-[130px] pl-2 z-40 -top-[30px] text-[11px] mt-1 font-medium text-left text-black w-[200px] bg-white rounded-full"
  >
    {{lieu}}
  </p>
  <p
    class="relative left-[130px] pl-2 z-40 top-[0px] text-[11px] mt-1 font-medium text-left text-black bg-white w-[200px] rounded-full h-[20px]"
  >
    {{heure}}
  </p>
  <p
    class="relative left-[130px] pl-2 z-40 top-[35px] text-[11px] mt-1 font-medium text-left text-black bg-white w-[200px] h-[90px] rounded-xl"
  >
    {{description}}
  </p>

</div>

</template>


<script>

export default {

    props: {
    date: String,
    lieu: String,
    description: String,
    heure: String,
  },

}
</script>
