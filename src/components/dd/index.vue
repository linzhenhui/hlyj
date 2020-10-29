<template>
  <div id="dd">
    订单
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="shop-o">首页</van-tabbar-item>
      <van-tabbar-item to="fl" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="car" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="gr" icon="manager-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 3,
    };
  },
};
</script>

<style>
</style>