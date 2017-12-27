<template>
  <div>
    <!--将获取的seller对象，传递给header，并在header中使用-->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评价</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <!--路由出口-->
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import header from 'components/header/header';
  // 定义状态码常量
  const ERR_OK = 0;
  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      // 发送ajax请求，获取商家数据
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
          // console.log(this.seller);
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    border-1px(rgba(7, 17, 21, 0.1))
    // border-bottom :1px solid rgba(7, 17, 21, 0.1)
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
      & > a // 自动充满父容器
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
