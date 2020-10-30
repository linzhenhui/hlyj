<template>
  <div id="grzx">
    <div class="header">
      <van-row v-if="login">
        <van-col
          ><img class="header_img" :src="img" alt="" srcset=""
        /></van-col>
        <van-col>
          <p class="name">王-03</p>
          <p class="qy">新勇元有限公司</p>
          <p class="address">商户号：231193</p>
        </van-col>
      </van-row>
      <van-row v-else class="login">
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
      <van-row class="title">
        <van-col span="6">采购订单</van-col>
        <van-col span="6" offset="10">查看全部</van-col>
      </van-row>
      <van-row type="flex" justify="space-around" class="dd" gutter="20">
        <van-col>
          <van-icon name="todo-list" />
          <p>待付款</p>
        </van-col>
        <van-col>
          <van-icon name="send-gift" />
          <p>待发货</p>
        </van-col>
        <van-col>
          <van-icon name="clock" />
          <p>待取货</p>
        </van-col>
        <van-col>
          <van-icon name="label" />
          <p>已完成</p>
        </van-col>
        <van-col>
          <van-icon name="bookmark" />
          <p>售后</p>
        </van-col>
      </van-row>
      <van-row type="flex" class="dd" gutter="20">
        <van-col>
          <van-icon name="location" />
          <p>配送地址管理</p>
        </van-col>
        <van-col>
          <van-icon name="coupon" />
          <p>提货地址管理</p>
        </van-col>
      </van-row>
      <van-row class="tip">
        <van-col> <van-icon name="comment" /> </van-col>
        <van-col>创建帮助</van-col>
      </van-row>
      <van-row class="tip">
        <van-col> <van-icon name="chat" /> </van-col>
        <van-col>联系客服</van-col>
      </van-row>
      <van-row class="tip">
        <van-col> <van-icon name="user-circle-o" /> </van-col>
        <van-col>退出登录</van-col>
      </van-row>
    </div>
    <van-row v-if="login" class="info" type="flex" justify="center">
      <van-col><img src="../assets/ewm.jpg" alt="" srcset="" /></van-col>
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
import img from "../assets/1.jpg";
import ewm from "../assets/ewm.jpg";

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
    padding-top: 3rem;
    text-align: left;
    height: 7rem;
    background: url(../assets/webp.jpg) no-repeat ;
    background-size: 100% 10rem;
    font-size: 14px;
    color: white;
    .login {
      text-align: center;
    }
    .header_img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin: 0 1rem 0 3rem;
    }
    .qy {
      font-size: 8px;
    }
    .address {
      font-size: 8px;
    }
  }
  .body {
    margin: 1rem;
    margin-top: -2rem;
    border-radius: 5px;
    background: white;
    .title {
      font-size: 1rem;
      font-weight: 700;
      padding: 1rem;
    }
    .dd {
      margin-bottom: 1rem;
      .van-icon {
        font-size: 2rem;
        color: #5eba87;
      }
      p {
        font-size: 0.7rem;
      }
    }
    .tip {
      padding-left: 0.4rem;
      height: 27px;
      margin: 1rem 0;
      border-bottom: 1px solid #f6f6f6;
      :nth-child(2) {
        font-size: 10px;
        line-height: 24px;
      }
      :nth-child(1) {
        font-size: 26px;
      }
    }
  }
  .info {
    margin: 0 1rem;
    background: white;
    border-radius: 10px;
    margin-bottom: 50px;
    padding:10px 20px ;
    text-align: center;
    img {
      width: 6rem;
      height: 6rem;
    }
  }
}
</style>