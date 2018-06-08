<template>
  <div>
    <el-row class="project" v-for="(item, index) in listNum" :key="index" type="flex" justify="center">

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <div>
            <img class="projectImg" :src="ImgUrl[index]" alt="">
          </div>
        </div>
      </el-col>

      <el-col class="project-introduce-wrapper" :key="index" :span="5">
        <div class="grid-content bg-purple">
          <ul class="project-introduce">
            <li>
              <div>移动端有赞商城</div>
              <div class="project-title">
                <div>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-msnui-code-copy"></use>
                  </svg>
                  <a href="">项目源码</a>
                </div>
                <div>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yulan"></use>
                  </svg>
                  <a href="">预览连接</a>
                </div>
              </div>
            </li>
            <li>
              <div>作品简介</div>
              <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            </li>
            <li>
              <div>技术栈</div>
              <div>xxxxxxxxxx</div>
            </li>
          </ul>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listNum: 6,
      ImgUrl: ['../../static/youzan/8.png', '../../static/youzan/2.png',
        '../../static/youzan/3.png', '../../static/youzan/4.png',
        '../../static/youzan/5.png', '../../static/canvas/1.jpg'
      ]
    }
  },
  computed: {

  }
}

</script>

<style lang="scss" scoped>
* {
  color: #617c8c;
}
a {
  list-style: none;
  text-decoration: none;
}
.bg-purple {
  background: #ffffff;
  border-radius: 2px;
  box-shadow: -1px 0px 17px 0px rgba(50, 50, 50, 0.25);
}
.project {
  margin: 30px 0px;
}
.projectImg {
  display: flex;
}
li {
  list-style: none;
}
.project-title {
  > div {
    margin-right: 20px;
    margin-top: 5px;
    color: #174c6d;
  }
}
.project-introduce-wrapper {
  margin-left: 10px;
}
.project-introduce {
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 432px;
  > li {
    margin: 20px 0;
    > div {
      margin: 5px 0;
      display: flex;
    }
  }
}
.icon{
  width: 25px;
  height: 25px;
  position: relative;
  top: 5px;
}
</style>
