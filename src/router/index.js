import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Aboutview from '@/components/Aboutview.vue'
import Help from '@/components/Help.vue'

Vue.use(Router)

export default new Router({
  routes: [
  /*  {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    } */
	{
      path: '/Aboutview',
      name: 'Aboutview',
      component: Aboutview
    },
	{	  
	      path: '/Help',
		  name: 'Help',
		  component: Help
		} 	
  ]
})
