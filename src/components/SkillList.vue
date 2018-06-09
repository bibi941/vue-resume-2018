<template>
  <div class="wrapper">

    <h1>技能</h1>
    <div class="skill">

      <echarts class="radar" name="search"></echarts>

      <section class="list">
        <div v-for="(item, index) in skill.num" :key="index">
          <h3>{{skill.name[index]}}</h3>
          <div class="describe">
            <p> {{descrip[index]}}</p>
          </div>
        </div>
      </section>

    </div>

  </div>
</template>

<script>
  import Echarts from './Echarts.vue'

  export default {

    data() {
      return {
        skill: {
          num: 11,
          name: ['HTML 5&CSS 3', '原生javaScript',
            'Vue全家桶', '移动端页面', 'jQuery', 'ES6', '前端工程化',
            'HTTP', 'AJAX', 'MVC&MVVM', '命令行&git'
          ]
        },

        descrip: [
          '根据 HTML5 标准编写具有语义化的文档结构，了解canvas基本使用,了解CSS布局，各种居中方法，了解CSS 3新特性，例如box-shadow、transition、animation等',
          '能够使用原生 JS 常用 API 完成部分需求,了解DOM事件,this,闭包,原型链等概念',
          '熟悉ue.js常用功能,了解双向绑定,响应式原理,组件通信方法,了解vuex状态管理,vue-router前端路由,vue-cli脚手架使用',
          '了解 动态REM、vw/vh、FastClick、媒体查询等技术制作适配手机设备的页面',
          '能使用jQuery常用API,以及进行 DOM 操作，事件代理、轮播、Tab 组件等',
          '了解ES6大部分新特性,并能熟练使用',
          '了解前端工程化，能基础使用webpack、parcel等打包工具',
          '了解常用状态码,了解请求响应格式',
          '了解AJAX、Promise、await&async的概念及实现',
          '了解MVC以及MVVM设计模式,并能应用到实际项目中',
          '了解命令行和git的基本使用'
        ]

      }
    },
    components: {
      Echarts
    }
  }

</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .skill {
    display: flex;
    justify-content: center;
    .radar {
      position: relative;
      right: 100px;
    }
    .list {
      // box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
      position: relative;
      right: 50px;
      max-width: 550px;
      >div {
        >h3 {
          margin: 0;
        }
      }
    }
    .describe {
      display: flex;
      >p {
        letter-spacing: 1px;
        text-align: left;
        display: inline-block;
      }
    }
  }

</style>
