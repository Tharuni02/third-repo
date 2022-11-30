import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import Aboutview from '@/views/Aboutview'
import Logform from '@/views/Logform'
import Help from '@/views/Help'

Vue.use(Router)

export default new Router({
  routes: [
  /*  {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    } */
	{
		path: '/home',
		name: 'home',
		component: home
		
	},
	{
		path: '/AboutView',
		name: 'Aboutview',
		component: Aboutview
		
	},
	{
		path: '/Logform',
		name: 'Logform',
		component: Logform
		
	},
	{	  
	      path: '/Help',
		  name: 'Help',
		  component: Help
		} 	
  ]
})
