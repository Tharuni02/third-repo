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
 export default {

  
  components : {
   
   First,
   pathhome,
   Last
   
   }
}
</script>