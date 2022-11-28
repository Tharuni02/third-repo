<template>
<div>
<First/>
 
<div class="bck"> </div>




<Last/>

</div>
</template>
<script>
import First from './First'
import Last from './Last'

export default{

components : {

  First,
  Last   
 
 
 }

}
</script>
<style>

.bck{
  background-image: linear-gradient(rgba(26, 25, 22, 0.5), rgba(6, 6, 6, 9.96)),
                  url("../assets/abt.jpg");
  background-repeat : no-repeat;
  width : 100%;
  height : 700px;
  background-size: 100% 100%;
  position: relative;

 
  } 
 </style> 