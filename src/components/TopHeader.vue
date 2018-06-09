<template>
  <div>
    <a href="https://github.com/bibi941" target="_blank"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"></a>
    <header class="top">
      <h1>方欣芮</h1>
      <img src="../assets/photo.jpg" alt="">
    </header>
    <main>
      <ul>
        <li class="list-fir">
          <div>男</div>
          <div>23岁</div>
          <div>本科,四川大学锦江学院</div>
          <div>前端工程师</div>
        </li>
        <li>
          <div class="list-sec">
            <div class='icon-warpper'>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-weixin"></use>
                </svg>
              </div>
              <div>
                sssrrr
              </div>
            </div>

            <div class='icon-warpper'>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-youxiang"></use>
                </svg>
              </div>
              <div>
                sssrrr@vip.qq.com
              </div>
            </div>

            <div class='icon-warpper'>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianhua"></use>
                </svg>
              </div>
              <div>
                17608003060
              </div>
            </div>

            <div class='icon-warpper'>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-qq"></use>
                </svg>
              </div>
              <div>
                506206862
              </div>
            </div>

          </div>
        </li>
      </ul>
    </main>
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
.top {
  display: flex;
  justify-content: center;
  > h1 {
    position: relative;
    left: 70px;
  }
  > img {
    position: relative;
    left: 470px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.521);
    border-radius: 4px;
  }
}
main > ul {
  position: relative;
  top: -100px;
}
.list-fir {
  display: flex;
  justify-content: center;
  min-width: 700px;
  > div {
    font-size: 18px;
    margin: 0 5px;
  }
}
.list-sec {
  display: flex;
  justify-content: center;
  min-width: 700px;
}
.icon-warpper {
  margin: 0 10px;
  display: flex;
  > div {
    font-size: 18px;
    margin: 0 5px;
    > svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
