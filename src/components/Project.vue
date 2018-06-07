<template>
  <div>
    <el-row v-for="(item, index) in ProjectList" :key="ProjectList" class="project-wrapper" type="flex" justify="center">

      <el-col v-for="(item, index) in Inproject" :key="Inproject" class="project" :span="8">
        <div class="grid-content bg-purple">
          <el-row type="flex">
            <el-col :span="10">
              <div class="grid-content bg-purple">
                123
              </div>
            </el-col>
            <!-- 左边分割线 -->
            <el-col :span="14">
              <div class="grid-content bg-purple">
                123
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>

    </el-row>
   

  </div>
</template>
  
<script>
export default {
data(){
  return {
    ProjectList:3,
    Inproject:2,

  }
}
}
</script>
  
<style lang="scss" scoped>
.bg-purple {
  background: #ffffff;
  border-radius: 2px;
  box-shadow: -1px 0px 17px 0px rgba(50, 50, 50, 0.25);
}
.project-wrapper {
  margin: 30px 0px;
  .project {
    margin: 0 30px;
  }
}
</style>
