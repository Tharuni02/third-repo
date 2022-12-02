<template>

<div>
<div class="bck2">
		<i> <h4 style="text-align:center; padding:30px;"> 
		No.1 Online Teaching Hub To Give You Guys<br> The Perfect Guidence.<hr>
		</h4></i>  <br><br>
		<b-container>
<b-row><b-col offset="1">  
  <i> <h5 style="margin-left:55px;">Journey For Education <br>Stars Here...... </h5></i>
 </b-col></b-row> 
	<b-row> <b-col cols="3" offset="1"class="mt-5">
    <a href="#" class="btn btn-lg" style="background-color:#4B0082; color:white;">Why Choose Examsdaily?</a>
   </b-col></b-row></b-container>

</div>
<b-container>
<h5 class="text-center mt-5"> Learn more about us </h5>

<b-row class="mt-5 mb-5"><b-col cols="md-5">
  <b-card style="height:400px;">
   <h3 class="mt-5 text-center"> Buy Course</h3>
   <p class="mt-3"> For getting online live classes you have to buy the course packages. 
   Choose the correct course package you need.</p>
   <b-row> <b-col cols="lg-3" offset="lg-4"><a href="#" class="btn btn-lg mt-3" style="background-color:#4B0082; color:white;">Buy courses</a>
   </b-col></b-row>

<b-row class="mt-5">
 <b-col cols="2" offset="3"> <b-icon icon="facebook"  font-scale="2.5" class="rounded-circle p-2" variant="light"
		style="background-color:#4B0082;"></b-icon> </b-col>
 <b-col cols="2"> <b-icon icon="telegram"  font-scale="2.5" class="rounded-circle p-2" variant="light"
		style="background-color:#4B0082;"></b-icon> </b-col>
 <b-col cols="2"> <b-icon icon="instagram"  font-scale="2.5" class="rounded-circle p-2" variant="light"
		style="background-color:#4B0082;"></b-icon> </b-col>

	  </b-row>

  </b-card></b-col>
  <b-col cols="md-5" offset="2">
  <b-card style="height:400px;">
   <h3 class="mt-5 text-center">Buy Tests</h3>
   <p class="mt-3"> For getting online mock test sinarios you have to buy the test packages. 
   Choose the correct test package you need.</p>
   <b-row> <b-col cols="3" offset="4"><a href="#" class="btn btn-lg mt-3" style="background-color:#4B0082; color:white;">Buy Tests</a>
   </b-col></b-row>
  <b-row class="mt-5">
 <b-col cols="2" offset="3"> <b-icon icon="facebook"  font-scale="2.5" class="rounded-circle p-2" variant="light"
		style="background-color:#4B0082;"></b-icon> </b-col>
 <b-col cols="2"> <b-icon icon="telegram"  font-scale="2.5" class="rounded-circle p-2" variant="light"
		style="background-color:#4B0082;"></b-icon> </b-col>
 <b-col cols="2"> <b-icon icon="instagram"  font-scale="2.5" class="rounded-circle p-2" variant="light"
		style="background-color:#4B0082;"></b-icon> </b-col>

	  </b-row>
  </b-card></b-col>

</b-row>

<b-row><b-col cols="5" offset="md-3">
<b-card class="mt-5" style="background-color:#4B0082; color:white;">
 <b-form-rating class="mt-5"  v-model="value" color="#4B0082"></b-form-rating>
    <b><p class="mt-2 text-center">Rate Us {{ value }}</p></b>
</b-card></b-col></b-row></b-container>
<div>
<b-container>
<b-row class="mt-5 mb-3"><b-col cols="2" offset="2">
 <b-icon font-scale="3.5" icon="cloud-arrow-down-fill" class="p-2" bg-light style="color:#4B0082;">
 </b-icon>
 <p> Students able to store and retrive course study materials in cloud.</p>
</b-col>

<b-col cols="2" style="margin-left: 20px;">
 <b-icon font-scale="3.5" icon="collection-play-fill" class="p-2" bg-light style="color:#4B0082;">
 </b-icon> 
 <p> Students can able to play back our course vedios whenever after once you buy it.</p>
</b-col>

<b-col cols="2"  style="margin-left: 20px;">
 <b-icon font-scale="3.5" icon="file-earmark-pdf-fill" class="p-2" bg-light style="color:#4B0082;">
 </b-icon>
 <p> Course study materials are provided in the file PDF format for your convinience.</p>
</b-col>

<b-col cols="2" style="margin-left: 20px;">
 <b-icon font-scale="3.5" icon="twitter" class="p-2" bg-light style="color:#4B0082;">
 </b-icon> 
 <p> Follow our Twitter page for more study details and also course starting, ending date schedules.</p>
</b-col>

</b-row></b-container></div> 

</div>
</template>
<script>
 export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>
<style>

 .bck2{
  background-image:  url("../assets/top1.jpg");
  background-repeat : no-repeat;
  width : 100%;
  height : 500px;
  background-size: 100% 100%;
  position: relative;
  color : white;
 
  } 



</style>