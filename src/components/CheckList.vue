<template>
    <div class="check">
      출석체크 리스트
    </div>
  </template>
  
  <script>
  export default {
    props:['title'],
    data(){
      return{text:'농담곰'}
    },
    methods:{
      saveData(){
        console.log(this.text)
        this.$router.push('list')
        // this.$router.push({name:'list', query:{num:100}})
      }
    },
  }
  </script>
  
  <style scoped lang="scss">
  </style>
  