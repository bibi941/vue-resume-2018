<template>
  <div class="wrapper">
    <h1>技能</h1>
    <div v-for="(item, index) in skillNumber" :key="index">
      <h3>xxxx</h3>
      <div class="describe">
        了解xxxxx，根据xxxxxxx，会xxxxxxx
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data(){
    return {
      skillNumber:6
    }
  }
}
</script>
 
<style lang="scss" scoped>
   .wrapper{
    display: flex;
    flex-direction: column;
  }
</style>
