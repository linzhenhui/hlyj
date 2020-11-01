<template>
  <div id="fl">
    <van-search placeholder="请输入搜索关键词" />
    <van-row>
      <van-col span="5">
        <ul>
          <li
            v-for="(item, index) in items"
            :key="index"
            :class="index == mainActiveIndex ? 'active' : ''"
            @click="
              () => {
                mainActiveIndex = index;
              }
            "
          >
            {{ item.text }}
          </li>
        </ul>
      </van-col>
      <van-col class="white show" span="18">
        <div class="tip">{{ items[mainActiveIndex].text }}</div>
        <van-card
          v-for="(good, index) in goods[mainActiveIndex]"
          :key="index"
          centered="false"
          :price="good.price"
          :tags="good.tags"
          :desc="'已售' + good.over"
          :title="good.name"
          :thumb="good.img"
          :origin-price="good.beforprice"
        >
          <div slot="tags" class="card__tags">
            <van-tag
              plain
              type="success"
              v-for="(tag, n) in good.tags"
              :key="n"
            >
              {{ tag }}
            </van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini" round class="color" @click="buy(item)"
              >购买</van-button
            >
          </div>
        </van-card>
      </van-col>
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
export default {
  data() {
    return {
      active: 1,
      items: [
        {
          text: "所有",
        },
        {
          text: "推荐",
        },
        {
          text: "新品",
        },
        {
          text: "促销",
        },
      ],
      mainActiveIndex: 0,
      goods: [
        [
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
        ],
        [
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
          {
            name: "牛丸",
            sum: 100,
            price: "4.88",
            img: img,
          },
        ],
      ],
    };
  },
  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
    },
    buy(data) {
      data.num = 1;
      data.price = parseFloat(data.price);
      this.$store.commit("edit", data);
    },
  },
};
</script>

<style lang="less">
#fl {
  width: 100%;
  height: 100%;
  li {
    height: 2rem;
    font-size: 0.5rem;
    line-height: 2rem;
  }
  .van-row {
    height: 100%;
  }
  .white {
    height: 100%;
  }
  .active {
    background: white;
  }
  .color {
    color: #f0fef5;
  }
  .show {
    padding-left: 1rem;
    .tip {
      width: 3rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.5rem;
      font-weight: 500;
      color: #1b8d3a;
      background: rgba(27, 141, 58, 0.2);
      border-radius: 4px;
    }
  }
}
</style>