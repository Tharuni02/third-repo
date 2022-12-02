<template>
 <!DOCTYPE html>

 <div  style="text-align:center">
     <div v-if="table"><b-card style="background-image: url('../static/bg1.jpg'); background-repeat:no-repeat;
	 background-size: 100% 100%;  height:650px" >
     <div class="row h-100 justify-content-center align-items-center"><div class="col-10 col-md-8 col-lg-6">
				<form name="doForm" id="doForm" >
				             <h1 style="color:white"> Register Form </h1>
							<span><b-avatar variant="success" icon="people-fill"></b-avatar>
							<b-form-input type="text" placeholder="Name" v-model="candit.Name"></b-form-input></span><br>
							 <b-form-input type="number" placeholder="Mobile Number" v-model="candit.Mobile"></b-form-input><br>
							 <b-form-input type="email" placeholder="email" name="email" id="email" v-model="candit.Email"></b-form-input><br>
							 <b-form-input type="password" placeholder="Password" v-model="candit.Password"></b-form-input><br>
							 <b-form-input type="password" placeholder="Check Password" v-model="candit.CheckPassword"></b-form-input><br>
							 <b-button @click="register" variant="danger">Submit</b-button>
				 </form></div></div></b-card></div>	 
	<div v-if="forSubmit"><b-card style="background-image: url('../static/bg1.jpg'); background-repeat:no-repeat;
	 background-size: 100% 100%;  height:650px" >
	 <div class="row h-100 justify-content-center align-items-center"><div class="col-10 col-md-8 col-lg-6">
	<b-table striped hover :items="newList"   :fields="fields">
							<b-tr><b-th>S.No</b-th>
							<b-th>Name</b-th>
							<b-th>Mobile</b-th>
							<b-th>Email</b-th>
							<b-th>Password</b-th>
							<b-th>Edit</b-th>
							<b-th>Add</b-th></b-tr>
							<b-tr v-for="(inputs,key,index) in newList" v-bind:key="key">
							<b-td>{{key+1}}</b-td>
							<b-td>{{inputs.name}}</b-td>
							<b-td>{{inputs.mobile}}</b-td>
							<b-td>{{inputs.email}}</b-td>
							<b-td>{{inputs.password}}</b-td>
	<template #cell(edit)="row">
        <b-button size="sm" @click="editData(inputs)" class="mr-1">
          Edit
        </b-button>	</template>	

<template #cell(update)="row1">
        <b-button size="sm" @click="demo" class="mr-1">
          Update
        </b-button>	</template>	
		
							<b-td><b-button  type="button" value="Edit" @click="editData(inputs)"></b-button></b-td> 
							<b-td><b-button type="button" value="Add"  @click="demo"></b-button></b-td></b-tr><br>							
				</b-table></div></div></b-card></div>
		<div v-if="forEdit"> <b-card style="background-image: url('../static/bg1.jpg'); background-repeat:no-repeat;
	              background-size: 100% 100%;  height:650px" >
		        <div class="row h-100 justify-content-center align-items-center">
                   <div class="col-10 col-md-8 col-lg-6">
				<form>
						 <h1 style="color:white"> Form Editing </h1>
						 <b-form-input type="text" v-model="temp_data.name"/></b-form-input><br>
						 <b-form-input type="number" v-model="temp_data.mobile"/></b-form-input><br>
						 <b-form-input type="email" v-model="temp_data.email"/></b-form-input><br>
						 <b-form-input type="password" v-model="temp_data.password"/></b-form-input><br>
						 <b-form-input type="button" value="update" @click="updateData" class="btn btn-primary btn-customized"/>
				</form></div></div></b-card></div>
 </div>		
</template>
<script>
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
			 },
			 
			 fields : [
			 
			 {
			  key : "Edit",
			  label : "Edit"
			 
			  },
			  
			  {
			   key : "Update",
			   label: "Update"
			  
			   }			 					 
			 ]
		   }
		   },
		  methods : {
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
				       if(this.ValidateMail.test(doForm.email.value)){
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
		  },
}
</script>
<style>
 .table{
  border-collapse: collapse;
  width: 100%;
  }
th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

</style>