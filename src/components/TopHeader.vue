<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <h1>方欣芮</h1>
          <el-row :gutter="0" type="flex" justify="space-around">
            <el-col :span="4">
              <div class="grid-content bg-bibi">男</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-bibi">24岁</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-bibi">本科|四川大学锦江学院</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-bibi">前端工程师</div>
            </el-col>
          </el-row>
        </div>

        <div class="grid-content bg-purple">
          <el-row :gutter="0" type="flex" justify="space-around">
            <el-col :span="4">
              <div class="grid-content bg-bibi">
                <span class="content">sssrrr</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-weixin"></use>
                </svg>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-bibi">
                <span class="content">506206862</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-qq"></use>
                </svg>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-bibi">
                <span class="content">sssrrr@vip.qq.com</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-youxiang"></use>
                </svg>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-bibi">
                <span class="content">17608003060</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianhua"></use>
                </svg>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <el-col :span="2">
        <div class="grid-content bg-purple-light">
          <img class="photo" src="../assets/photo.jpg" alt="">
        </div>
      </el-col>
    </el-row>

  </div>
</template>
  
<script>
export default {

}
</script>
  
<style lang="scss" scoped>
* {
  color: rgb(97, 124, 140);
}
h1 {
  margin: 0;
  font-size: 40px;
  margin-bottom: 10px;
  color: rgb(94, 94, 94);
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: #ffffff00;
  margin-bottom: 20px
}
.bg-bibi {
  position: relative;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: -1px 0px 17px 0px rgba(50, 50, 50, 0.25);
}

.grid-content {
  border-radius: 4px;
  min-height: 20px;
}
.icon {
  position: absolute;
  top: 15px;
  right: 0;
  width: 30px;
  height: 30px;
}
.content{
  position: relative;
  left: -15px;
}
.photo{
  position: absolute;
  top: 50px;
  width: 130px;
  height: 163px;
  box-shadow:0px 0px 9px 0px rgba(50, 50, 50, 1);
  
}
</style>
