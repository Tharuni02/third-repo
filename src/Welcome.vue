<template>
  <div id="app">
  
 
  
   
  <First />
  
  <Logform/>
  
  <Last/>
  <AboutView/>
  <Help/>
  
  
  
  </div>
 
</template>

<script>
 import Swal from 'sweetalert2'
 import First from './components/First.vue'
 import Last from './components/Last.vue'
  import Logform from './components/Logform.vue'
  import AboutView from './components/AboutView.vue'
  import Help from './components/Help.vue'
export default {

  
  components : {
   
   First,
   Last,
   Logform,
   AboutView,
   Help
   
   }
}
</script>