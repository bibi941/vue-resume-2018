<template>
  <div class="wrapper">
    <h1>链接</h1>
    <div class="link-wrapper">
      <div class="link">

        <div>
          <svg class="icon github" aria-hidden="true">
            <use xlink:href="#icon-GitHub"></use>
          </svg>
        </div>
        <a  class="link-first" target="_blank"  href="https://github.com/bibi941">Click me</a>
      </div>

      <div class="link">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ai-book"></use>
          </svg>
        </div>
        <a class="blog" href="https://juejin.im/user/5a6fdfa1f265da3e33049d05/posts" target="_blank">技术博客</a>
      </div>

    </div>
  </div>
</template>
  
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
 
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.icon {
  width: 30px;
  height: 30px;
  position: relative;
  right: 30px;
}
.github {
  width: 70px;
  height: 70px;
}
.link-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  .link{
     display: flex;
     justify-content: center;
     .link-first{
       position: relative;
       top:25px;
     }
     a{
       position: relative;
       top:5px;
       font-size: 20px;
       text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);
     }
  }
}
.blog{
  position: relative;
  left: 20px;
}
</style>
