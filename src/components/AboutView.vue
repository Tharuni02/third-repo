<template>
<div>
<First/>
 
<div class="bck"> 
<div  class="abt1">
<b>
Lorem ipsum dolor sit amet, 
consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua.<br> Ut enim ad minim veniam, quis nostrud exercitation ullamco<br>
laboris nisi ut aliquip ex ea commodo consequat.<br> Duis aute irure dolor in reprehenderit 
in voluptate velit esse cillum <br>dolore eu fugiat nulla pariatur.<br> Excepteur 
sint occaecat cupidatat non proident,<br> sunt in culpa qui officia deserunt mollit anim id est laborum.

</b></div>
</div>
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
  
  .abt1{
    margin-left:50px; 
	padding-top:70px; 
	color:white; 
	font-family:times new roman;
    font-size:30px;
  
  
  }
 </style> 