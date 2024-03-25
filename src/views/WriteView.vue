<template>
    <div>
        <h1>출석 체크</h1>
        <AttendanceCheck/>
    </div>
</template>
  
<script>
import AttendanceCheck from '@/components/AttendanceCheck.vue'

export default {
  name: 'WriteView',
  components: {
    AttendanceCheck
  }
}
</script>
  