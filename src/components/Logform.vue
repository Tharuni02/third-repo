<template>
  <div class="back image-fluid">
          <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Examsdaily</title> 
		  <meta name="robots" content="noindex,nofollow">
   <b-container>
  <b-row><b-col cols="md-5" offset="md-4">
   <b-form>
    <div class="input-group mt-5">
	<b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="person-fill" animation="fade" 
		class="rounded-circle bg-danger p-2" variant="light"></b-icon>
      </b-input-group-prepend>
  <b-form-input type="text" class="form-control input-lg" placeholder="Name" id="Name" Name="Name"></b-form-input>
    </div><br><br>
	
    <div class="input-group">
	<b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="envelope" animation="fade"
		class="rounded-circle bg-danger p-2" variant="light"></b-icon>
      </b-input-group-prepend>
<b-form-input type="text" class="form-control input-lg" 
placeholder="Email Address" id="Email" Name="Email"></b-form-input>

    </div><br><br>
	
	  <div class="input-group">
	<b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="telephone-fill" class="rounded-circle bg-danger p-2" variant="light"
		animation="cylon-vertical"></b-icon>
      </b-input-group-prepend>
   <b-form-input type="number" class="form-control input-lg"
   placeholder="Mobile Number" id="Mobile" Name="Mobile"></b-form-input>
    </div><br><br>
	
	  <div class="input-group">
	<b-input-group-prepend is-text>
        <b-icon  font-scale="2.5" icon="lock-fill" animation="fade"
		class="rounded-circle bg-danger p-2" variant="light"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="password" class="form-control input-lg" 
	  placeholder="PassWord" id="Password" Name="Password"></b-form-input>
    </div><br><br>
	
	  <div class="input-group">
	<b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="geo-alt" animation="fade"
		class="rounded-circle bg-danger p-2" variant="light"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" class="form-control input-lg" 
	  placeholder="Nation" id="Nation" Name="Nation"></b-form-input>
    </div><br><br>
   </b-form> </b-col>
  </b-row>   
	<b-row><b-col offset="5">
	 <b-button  size="lg" class="mb-5" @click="demoAlert">Submit</b-button></b-col>
	</b-row>
   
   
  
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