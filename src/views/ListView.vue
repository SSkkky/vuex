<template>
    <div>
        <h1>출결 체크({{ limit }})</h1>
        
        <p v-for="(item, idx) in data"  :key="idx">
          {{ item.name }}
        </p>
    </div>
</template>
  
<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'ListView',
  computed:{
    ...mapGetters(['limit']),
    ...mapState(['data'])
  },
  updated(){
    console.log(this.data)
  }
}
</script>
  