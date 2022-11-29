<template>

 <div>
    <input type="text" placeholder="Name" v-model="Name"/>
	<div v-for="(inputs,key,index) in items" v-bind:key="key">
    <b-table striped hover :items="items">
	<td>{{inputs.Name}}</td>
	
      <template #cell(actions)="row">
        <b-button size="sm" class="mr-1">
          Info modal
        </b-button></template>
<!---	<td> <input type="button" @click="add"/> </td> --->
	</b-table>		
	</div>
	
  </div>

</template>

<script>
  export default {
    data() {
      return {
        items: [],
		Name:""
      }
    },
	methods : {
	add : function(){
	
	 this.items.push({Name:this.Name});
	console.log(this.items);
	
	}
	}
  }
</script>