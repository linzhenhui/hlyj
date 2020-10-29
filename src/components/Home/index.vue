<template>
  <div id="home">
    <p class="titie">新联心</p>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <van-cell-group>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </van-cell-group>
    <van-cell-group>
      <van-cell>
        <img class="tx" :src="images" alt="" />
        <span>定位地址</span>
      </van-cell>
      <van-cell>定位地址</van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-notice-bar
        text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
        left-icon="volume-o"
      />
    </van-cell-group>
    <van-cell-group>
      <van-row type="flex" justify="space-around">
        <van-col span="6">
          <img class="tx" :src="images" alt="" />
          <p>蛋糕面点</p>
        </van-col>
        <van-col span="6">
          <img class="tx" :src="images" alt="" />
          <p>蛋糕面点</p>
        </van-col>
        <van-col span="6">
          <img class="tx" :src="images" alt="" />
          <p>蛋糕面点</p>
        </van-col>
        <van-col span="6">
          <img class="tx" :src="images" alt="" />
          <p>蛋糕面点</p>
        </van-col>
        <van-col span="6">
          <img class="tx" :src="images" alt="" />
          <p>蛋糕面点</p>
        </van-col>
        <van-col span="6">
          <img class="tx" :src="images" alt="" />
          <p>蛋糕面点</p>
        </van-col>
        <van-col span="6">
          <img class="tx" :src="images" alt="" />
          <p>蛋糕面点</p>
        </van-col>
        <van-col span="6">
          <img class="tx" :src="images" alt="" />
          <p>蛋糕面点</p>
        </van-col>
      </van-row>
    </van-cell-group>
    <van-cell-group>
      <van-tabs>
        <van-tab title="标签 1">
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="images"
          />
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="images"
          />
        </van-tab>
        <van-tab title="标签 1">
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="images"
          />
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="images"
          />
        </van-tab>
        <van-tab title="标签 1">
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="images"
          />
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="images"
          />
        </van-tab>
        <van-tab title="标签 1">
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="images"
          />
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="images"
          />
        </van-tab>
      </van-tabs>
    </van-cell-group>

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
  name: "home",
  data() {
    return {
      active: 0,
      images: img,
    };
  },
};
</script>

<style  >
#home {
  margin-bottom: 60px;
}
#home .van-swipe-item {
  height: 4rem;
  background: blueviolet;
}
.tx {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.flground img {
  width: 20%;
}
</style>