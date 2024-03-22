<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ $route.query.num }}</p>
    
    <hr/>
    <div>
      <form @submit.prevent="saveData">
        <!-- <input type="text" name="id" v-model="text"/> -->
        <input type="text" name="id" :value="text" @input="text=$event.target.value"/>
        <button>저장</button>
      </form>
    </div>
  </div>
</template>


<script>
  export default {
    data(){
      return{text:'농담곰'}
    },
    methods:{
      saveData(){
        console.log(this.text)
      }
    },
    // updated(){
    //   console.log(this.text)
    // }
  }
</script>

<style lang="scss" scoped>
.about{
  p{
    font-weight: 700;
    font-style: italic;
    color: orangered;
  }
}
</style>