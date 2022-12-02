<template>
  <div id="app">
  
 
 
 <!-- <study/> -->
  <First />
   <router-view/>
   <pathhome/>
  
 
  <Last/>
 

  
  
  
  </div>
 
</template>

<script>
 //import Swal from 'sweetalert2'

 import First from './components/First.vue'
 import pathhome from './components/pathhome.vue'
 import Last from './components/Last.vue' 
 import EditForm from './components/EditForm.vue'  
 export default {

  
  components : {
   
   First,
   pathhome,
   Last,
   EditForm
   
   }
}
</script>
<style>

   .card btn{
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),
	           .3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    padding: 14px 80px 18px 36px;
    cursor: pointer;
}

.card:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
.btn:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

</style>