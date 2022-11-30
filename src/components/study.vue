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
			   < a router-link to="/AboutView">About</a>
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
 <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Examsdaily</title> 
		  <meta name="robots" content="noindex,nofollow">
 
    
		   <b-navbar  toggleable="lg"  type="light" variant="info">
		     <div class="img-fluid">  
			   <img src="../assets/ed.png" style= "margin-left:20px; width:100px; height:80px;"/><br>
			  </div> 
			   
               <div class="navbar-container container">
      <input type="checkbox" name="" id="">
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <ul class="menu-items"style="flex-flow:wrap;">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/AboutView">About</router-link></li>
        <li><router-link to="/apply">Apply</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>&nbsp;&nbsp;&nbsp;
		
      </ul>
	 