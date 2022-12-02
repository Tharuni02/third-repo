<template>
  
<div class="bg1">
          <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Examsdaily</title> 
		  <meta name="robots" content="noindex,nofollow">
 
    
	    
		   <b-navbar toggleable="lg"  type="dark"  >
		      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		     <div class="img-fluid">  
			    <b-navbar-brand> <img src="../assets/ed.png" style= "margin-left:20px; width:100px; height:80px;"/><br>
				 </b-navbar-brand>
			  </div> 
			   

   <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      
      <b-nav-item variant="light"> <router-link to="/home">Home</router-link> </b-nav-item>
      <b-nav-item> <router-link to="/AboutView">About</router-link> </b-nav-item>
	  <b-nav-item> <router-link to="/Logform">LogIn</router-link> </b-nav-item>
      <b-nav-item> <router-link to="/Help">Help</router-link> </b-nav-item>
	  <b-nav-item> <router-link to=""></router-link> </b-nav-item>&nbsp;&nbsp;&nbsp;
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
background-color :  #4B0082;
  
background-size: 100% 100%;
 
}

a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a:hover{

color : black;
background-color : white;
 }
</style>