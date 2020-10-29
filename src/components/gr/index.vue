<template>
  <div id="grzx">
    <div class="header">
      <van-row v-if="login">
        <van-col
          ><img class="header_img" :src="img" alt="" srcset=""
        /></van-col>
        <van-col>简介</van-col>
      </van-row>
      <van-row v-else>
        <van-button
          size="normal"
          @click="
            () => {
              this.login = true;
              $store.commit('loginIn');
            }
          "
          round
          type="primary"
          >登录</van-button
        >
      </van-row>
    </div>
    <div class="body" v-if="login">
      <van-row>
        <van-col>采购订单</van-col>
        <van-col>查看全部</van-col>
      </van-row>
      <van-row>
        <van-col>图标</van-col>
        <van-col>图标</van-col>
        <van-col>图标</van-col>
        <van-col>图标</van-col>
        <van-col>图标</van-col>
        <van-col>图标</van-col>
      </van-row>
      <van-row>
        <van-col>创建帮助</van-col>
      </van-row>
      <van-row>
        <van-col>联系客服</van-col>
      </van-row>
      <van-row>
        <van-col>退出登录</van-col>
      </van-row>
    </div>
    <van-row v-if="login">
      <van-col>二维码</van-col>
      <van-col>信息</van-col>
    </van-row>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="shop-o">首页</van-tabbar-item>
      <van-tabbar-item to="fl" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="car" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="gr" icon="manager-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import img from "../../assets/1.jpg";
export default {
  data() {
    return {
      active: 4,
      img: img,
      login: null,
    };
  },
  mounted() {
    this.login = this.$store.state.login;
  },
};
</script>

<style lang="less">
#grzx {
  .header {
    padding-top: 5rem;
    text-align: center;
    height: 10rem;
    background: url(../../assets/webp.jpg) no-repeat fixed top;
    background-size: 100% 10rem;
    line-height: 3rem;
    .header_img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin: 0 5rem 0 3rem;
    }
  }
}
</style>