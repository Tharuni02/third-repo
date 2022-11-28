<template>
  <div class="back image-fluid">
          <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Examsdaily</title> 
		  <meta name="robots" content="noindex,nofollow">
   <b-container>
   <div>
   <b-row>
   <b-col cols="5"offset="4">
   <div  class="mt-5">
   <form>
     <b-input-group size="lg" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="person-fill" animation="fade" 
		class="rounded-circle bg-danger p-2" variant="light"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" placeholder="Name" id="Name" Name="Name"></b-form-input>
    </b-input-group><br>
	
	  <b-input-group size="lg" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="envelope" animation="fade"
		class="rounded-circle bg-danger p-2" variant="light"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" placeholder="Email Address" id="Email" Name="Email"></b-form-input>
    </b-input-group><br>
	
	  <b-input-group size="lg" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="telephone-fill" class="rounded-circle bg-danger p-2" variant="light"
		animation="cylon-vertical"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="number" placeholder="Mobile Number" id="Mobile" Name="Mobile"></b-form-input>
    </b-input-group><br>
	
	  <b-input-group size="lg" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon  font-scale="2.5" icon="lock-fill" animation="fade"
		class="rounded-circle bg-danger p-2" variant="light"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="password" placeholder="PassWord" id="Password" Name="Password"></b-form-input>
    </b-input-group><br>
	
	  <b-input-group size="lg" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="geo-alt" animation="fade"
		class="rounded-circle bg-danger p-2" variant="light"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" placeholder="Nation" id="Nation" Name="Nation"></b-form-input>
    </b-input-group><br>
	<b-row><b-col offset="3">
	 <b-button  size="lg" class="mb-5" @click="demoAlert">Submit</b-button></b-col>
	</b-row>
   </form>
   </div>
   </b-col>
   </b-row>
   </div>
   </b-container>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
export default{

data(){
	  return{
	  
	  
	  }
	
	},
	methods : {
	
	demoAlert:function(){
	
				 Swal.fire({
			  title: 'Success!!',
			  text: 'Registration Starts...',
			  icon: 'success',
			  confirmButtonText: 'Cool',
			  
			})
	
	 }
	
	
	}

}
</script>
<style>

 .btn{
      margin-left: 40px;
 
  }
  
 .back{
  background-image: linear-gradient(rgba(26, 25, 22, 0.5), rgba(6, 6, 6, 9.96)),
                  url("../assets/dessert.jpg");
  background-repeat : no-repeat;
  width : 100%;
  height : auto;
  background-size: 100% 100%;
  position: relative;

 
  } 

</style>