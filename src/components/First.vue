<template>
  
<div>
          <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Examsdaily</title> 
		  <meta name="robots" content="noindex,nofollow">
 
    
		   <b-navbar  toggleable="lg"  type="light" variant="info">
		     <div class="img-fluid">  
			   <img src="../assets/ed.png" style= "margin-left:20px; width:100px; height:80px;"/><br>
			  </div> 
			   <b-navbar-brand   style="color:white;" href="#">ExamsDaily</b-navbar-brand>
			   <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			   <b-collapse id="nav-collapse" is-nav>
               <b-navbar-nav>
               <div class="nb"><b-nav-item href="#">Home</b-nav-item></div>
			   <div><router-link to="/AboutView"><b-nav-item>About</b-nav-item></router-link></div>
			   <div><router-link to="/Help"><b-nav-item>Help</b-nav-item></router-link></div>
			   </b-navbar-nav>
			   </b-collapse>
			   </b-navbar>   
                

   
 </div>
  
</template>
<script>
export default{


}
</script>
<style>
.bg1{

background-size: 100% 100%;
}




</style>