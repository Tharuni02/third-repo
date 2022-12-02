<template>
  <div>
          <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Examsdaily</title> 
		  <meta name="robots" content="noindex,nofollow">
   <b-container>
   
  <div v-if="table">
   <b-row  class="mb-5"><b-col  offset="lg-3">
    <b-card style="max-width: 40rem;" class="mt-5">
	
<b-row><b-col offset="lg-4">
  <img src="../assets/ed.png" style="max-width:7rem;"/>
 <!--- <h5>No.1 Online Teaching Hub To Give You Guys The Perfect Guidence.SignIn Here To Connect With Us.</h5> -->
  </b-col></b-row>	
  
   <b-form name="doForm" id="doForm" >
    <div class="input-group mt-3">
	<b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="person-fill" animation="fade" 
		class="rounded-circle p-2" style="background-color:#4B0082;" variant="light"></b-icon>
      </b-input-group-prepend>
  <b-form-input type="text" class="form-control input-lg" placeholder="Name" id="Name" Name="Name"
      v-model="candit.Name"></b-form-input>
    </div><br>
	
    <div class="input-group">
	<b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="envelope" animation="fade"
		class="rounded-circle p-2" style="background-color:#4B0082;" variant="light"></b-icon>
      </b-input-group-prepend>
<b-form-input type="email" class="form-control input-lg" 
placeholder="Email Address" id="Email" Name="Email" v-model="candit.Email"></b-form-input>

    </div><br>
	
	  <div class="input-group">
	<b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="telephone-fill" class="rounded-circle p-2" variant="light"
		style="background-color:#4B0082;" animation="cylon-vertical"></b-icon>
      </b-input-group-prepend>
   <b-form-input type="number" class="form-control input-lg"
   placeholder="Mobile Number" id="Mobile" Name="Mobile" v-model="candit.Mobile"></b-form-input>
    </div><br>
	
	  <div class="input-group">
	<b-input-group-prepend is-text>
        <b-icon  font-scale="2.5" icon="lock-fill" animation="fade"
		class="rounded-circle p-2" style="background-color:#4B0082;" variant="light"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="password" class="form-control input-lg" 
	  placeholder="PassWord" id="Password" Name="Password" v-model="candit.Password"></b-form-input>
    </div><br>
	
	  <div class="input-group">
	<b-input-group-prepend is-text>
        <b-icon  font-scale="2.5" icon="lock-fill" animation="fade"
		class="rounded-circle p-2" style="background-color:#4B0082;" variant="light"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="password" class="form-control input-lg" 
	  placeholder="PassWord" id="Password" Name="Password" v-model="candit.CheckPassword"></b-form-input>
    </div><br>
	
	
	
	  <div class="input-group">
	<b-input-group-prepend is-text>
        <b-icon font-scale="2.5" icon="geo-alt" animation="fade"
		class="rounded-circle  p-2" style="background-color:#4B0082;" variant="light"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" class="form-control input-lg" 
	  placeholder="Nation" id="Nation" Name="Nation"></b-form-input>
    </div><br>
   </b-form> 
   
   <b-row><b-col cols="lg-7">
   <b-row><b-col offset="6 sm-5">
	 <b-button  size="lg" class="mb-3" @click="register" style="background-color: #4B0082;">
Submit</b-button>
	</b-col></b-row>
 </b-col></b-row>
   
   </b-card></b-col>
  </b-row>   
  </div>
<div v-if="forSubmit"> <table border="1px">
	 
	 <tr><th>S.No</th>
							<th>Name</th>
							<th>Mobile</th>
							<th>Email</th>
							<th>Password</th>
							<th>Edit</th>
							<th>Add</th></tr>
							<tr v-for="(inputs,key,index) in newList" v-bind:key="key">
							<td>{{key+1}}</td>
							<td>{{inputs.name}}</td>
							<td>{{inputs.mobile}}</td>
							<td>{{inputs.email}}</td>
							<td>{{inputs.password}}</td>
							<td><button  type="button" value="Edit" @click="editData(inputs)"></button></td> 
							<td><button type="button" value="Add"  @click="demo"></button></td></tr><br>							
				</table>
 
</div>

<div v-if="forEdit">
 
<form>
						 <h1 style="color:white"> Form Editing </h1>
						 <b-form-input type="text" v-model="temp_data.name"/></b-form-input><br>
						 <b-form-input type="number" v-model="temp_data.mobile"/></b-form-input><br>
						 <b-form-input type="email" v-model="temp_data.email"/></b-form-input><br>
						 <b-form-input type="password" v-model="temp_data.password"/></b-form-input><br>
						 <b-form-input type="button" value="update" @click="updateData" class="btn btn-primary btn-customized"/>
				</form>

</div>
   </b-container>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
export default{

data(){
	  return{
	   
	    forSubmit : false,
			 forEdit : false,
			 table:true,
			 newList : [],
			 ValidateMail : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,	
			 candit : { 
			  Name : "",
			  Mobile : "",
			  Email : "",
			  Password : "",
			  CheckPassword : ""
			 },
			 temp_data : {
			  name : "",
			  mobile : "",
			  email : "",
			  password : ""
			 }
	  
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
	
	 },
	 
	 editData : function(user){
		  console.log("variable user is" , user);
			 this.temp_data.name = user.name;
			 this.temp_data.mobile = user.mobile;
			 this.temp_data.email = user.email;
			 this.temp_data.password = user.password;
			 this.forEdit = true;
			 this.table = false;
			 this.forSubmit = false; 
		  }, 
		  updateData : function() {
			   this.forSubmit = true;
			   this.table = false;
			   this.forEdit = false;
			   this.newList.forEach(update => {
				 if(update.key == this.temp_data.key){
				   update.name = this.temp_data.name;
				   update.mobile = this.temp_data.mobile;
				   update.email = this.temp_data.email;
				   update.password = this.temp_data.password;
				   }
			 });
		   },
		  addElement : function(){
				this.newList.push({
					name : this.candit.Name,
					mobile : this.candit.Mobile,
					email : this.candit.Email,
					password : this.candit.Password
				});
					this.table = false;
					this.forEdit = false;
					this.forSubmit = true;
					console.log(this.newList);
			 },
		   demo : function(){
			this.table = true;
			this.forSubmit = false;
			this.forEdit = false;
			this.candit.Name = "",
			this.candit.Mobile = "",
			this.candit.Email = "",
			this.candit.Password = "",
			this.candit.CheckPassword = ""
			},
		   register : function(){ 
			   if(this.candit.Name!="" && this.candit.Mobile!="" && this.candit.Email!="" && this.candit.Password!="" && this.candit.CheckPassword!=""){
					if(this.candit.Mobile.length == 10){	
				       if(this.ValidateMail.test(doForm.Email.value)){
						   if(this.candit.Password.length > 8){		
						        if(this.candit.Password==this.candit.CheckPassword){
								      for(let i=0; i<this.newList.length; i++){
												  if(this.candit.Email== this.newList[i].email){
														alert("Enter Unique Email");
														return false;
															 }
												  if (this.candit.Mobile == this.newList[i].mobile){
												  alert("Enter Unique Mobile Number");
												  return false;
												  }
									 }
														alert("form is submitted");									
														this.addElement();
														return true;
								}else{ 
								alert("Re-enter The Same Password");
								return false;
								}
				          }else{
						  alert("Password Length Must Be Greater Than 8 Characters");
						  return false;
						  }
					 }else{
					 alert("Must Enter The Valid Email Address");
					 return false;
					 }
				  }else{
				  alert("Must Enter 10 Digist Mobile Number");
				  return false;
				  }
			 }else{ 
			 alert("Don't Leave Any Field Empty");
			 return false;
			}	   
			 },
		 
	
	} //method end

}
</script>
<style>


 .back{
  background-image: linear-gradient(rgba(26, 25, 22, 0.5), rgba(6, 6, 6, 9.96)),
                  url("../assets/dessert.jpg");
  background-repeat : no-repeat;
  width : 100%;
  height : auto;
  background-size: 100% 100%;
  background-attachment: fixed;
  position: relative;

 
  } 


</style>