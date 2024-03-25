<template>
    <div>
      <form @submit.prevent="dataFn">
        <p>
          <input type="text" name="id" v-model="name">
          <!-- <input type="text" name="id" :value="text" @input="text=$event.target.value"/> -->
          <button>저장</button>
        </p>
      </form>
      <hr/>
      <!-- <form>
        <ul class="days">
          <li v-for="number in 30" :key="number"
          @click="liClick(number)"
          v-bind:class="isActive ? 'active' : ''"
          >{{ number }}</li>
        </ul>
      </form> -->
    </div>
  </template>
  
  <script>
  import {mapActions} from 'vuex';

  export default {
    methods:{
      ...mapActions(['guide']),

      dataFn(){
        this.guide({type:'insert', data:{id:Date.now(), name:this.name}});
        this.$router.push('list');
        // this.$router.push({name:'list', query:{num:100}})
      },

      // liClick(number){
      //   console.log(number)
      //   this.isActive = !this.isActive
      // },
    }
  }
  </script>
  
  <style scoped lang="scss">
    .days{
      padding: 2rem;
      width: 430px;
      margin: 0 auto;
      border-radius: 1rem;
      border: 1px solid gray;

      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      li{
        display: flex;
        justify-content: center;
        align-items: center;

        list-style-type: none;
        width: calc((430px - 2rem)/7);
        height: calc((430px - 3rem)/7);
        background-color: #eee;
        border-radius: 50%;
      }

      .active{
        background-color: #000;
        color: #fff;
      }
    }
  </style>
  