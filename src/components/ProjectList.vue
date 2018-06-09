<template>
  <div class="project-wai">
    <h1>作品</h1>
    <div v-for="(img, index) in ImgUrl" :key="index" class="project-wrapper">
      <img :src="ImgUrl[index]" alt="project">
      <ul>
        <li>
          <h3>{{list.name[index]}}</h3>
          <hr>
          <div class="map">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-msnui-code"></use>
              </svg>
              <a :href="source[index]" target="_blank">项目源码</a>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yulan"></use>
              </svg>
              <a :href="viewLink[index]" target="_blank">预览链接</a>
            </div>
          </div>
        </li>
        <li>
          <h3>作品简介</h3>
          <hr>
          <section class="descrip">{{descrip[index]}}</section>
        </li>
        <li>
          <h3>技术栈</h3>
          <hr>
          <section class="tecStack">{{tecStack[index]}}</section>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: { num: 6, name: ['移动端有赞商城', '在线简历编辑器', '移动端网易云音乐', '移动端轻画板', 'ToDo-List', 'CSS3 乔巴'] },
      ImgUrl: ['../../static/youzan/8.png', '../../static/resume/QQ截图20180609175159.png',
        '../../static/music/QQ截图20180609180110.png', '../../static/canvas/1.jpg',
        '../../static/todolist/QQ截图20180609182353.png', '../../static/qiaoba/qiaoba.png'
      ],
      descrip: [`基于Vue多页面应用实现的移动端有赞商城,采用Rap+Mock.js模拟后台数据,实现了原网站https://maijia.youzan.com/中的商城首页、分类页、商品详情页、购物车页以及地址管理页的大部分功能,使用mint-ui、swiper、velocity-animate等插件实
      现轮播图以及购物车商品左滑删除功能，并在地址管理页使用Vue-router实现了新增地址、地址编辑的页面路由,使用Vuex进行地址状态管理。`,
        `基于Vue实现的在线简历编辑器，具有注册、登录、编辑、分享、打印等功能，目前已发布上线。主要使用 Vue.js、Element-ui、LeanCloud 实现。`,
        `移动端播放,移动端具有歌曲播放、切换、暂停、搜索、循环等功能，PC 端歌曲上传、删除、修改等功能。使用 jQuery、MVC设计模式以及 LeanCloud、七牛作为数据库实现。`,
        `移动端在线画板，可以选择画笔颜色、画笔粗细、橡皮檫、下载你的作品等功能，利用 <canvas> 以及原生 JavaScript 实现。`,
        `基于vue实现的todo-list,具有注册、登录、新增、删除、选中已完成等功能,`,
        '利用js动态向 <style> 标签添加样式以及 <pre> 标签添加文本，模拟绘制乔巴的过程。主要使用原生 JavaScript 以及 CSS3 实现。'
      ],
      source: ['https://github.com/bibi941/vue-youzan',
        'https://github.com/bibi941/vue-resume3-demo',
        'https://github.com/bibi941/music-163-demo',
        'https://github.com/bibi941/canvas-mobile-demo',
        'https://github.com/bibi941/vue-demo',
        'https://github.com/bibi941/chopper-animation',
      ],
      viewLink: ['http://bibi94.gitee.io/vue-youzan/dist/index.html',
        'https://bibi941.github.io/vue-resume3-demo/src/index.html',
        'https://bibi941.github.io/music-163-demo/src/',
        'https://bibi941.github.io/canvas-mobile-demo/index.html',
        'https://bibi941.github.io/vue-demo/page.html',
        'https://bibi941.github.io/chopper-animation/index.html',
      ],
      tecStack:['Vue \\ Vuex \\ Vue-router \\ Vue-cli \\ SASS \\ Rap \\ mint-ui \\ swiper \\ velocity-animate',
      'Vue \\ Element-ui \\ LeanCloud',
      'jQuery \\ LeanCloud \\ Qiniu',
      '原生javaScript \\ canvas',
      'vue',
      '原生javaScript \\CSS 3'
      ]
    }
  },
  computed: {

  }
}

</script>

<style lang="scss" scoped>
.project-wai {
  margin-top: 100px;
}
.project-wrapper {
  display: flex;
  justify-content: center;
  margin: 50px 0;
  > ul {
    max-width: 550px;
    padding: 0 20px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 10px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  > img {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
}
.map {
  display: flex;
  justify-content: center;
  > div {
    margin: 0 10px;
  }
}
.descrip {
  max-width: 550px;
  letter-spacing: 1px;
  text-align: left;
  line-height: 1.5;
}
.icon{
  position: relative;
  top: 5px;
  width: 25px;
  height: 25px;
}
hr {
  background: rgb(204, 204, 204);
  height: 1px;
  border: none;
  border-radius: 4px;
}
.tecStack{
  text-align: left;
}
</style>
