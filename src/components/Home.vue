<template>
  <div id="home">
    <van-cell-group class="adressgroud">
      <van-cell class="address">
        <van-row>
          <van-col><img class="tx addressimg" :src="images" alt="" /></van-col>
          <van-col offset="1" span="18">
            <p class="address1" @click="RoutetTo('/Sh')">天汇世纪花苑-高-041</p>
            <p>
              <van-tag round plain color="#FFFFFF" type="success"
                >团队数量：280</van-tag
              >
              <van-tag round plain color="#FFFFFF" type="success"
                >下单数量：818</van-tag
              >
            </p>
            <p class="addresstext">
              <van-icon name="location" />
              <span>新疆维吾尔自治区乌鲁木齐市磨沟区水磨沟街道米多超市</span>
            </p>
          </van-col>
        </van-row>
      </van-cell>
    </van-cell-group>
    <van-search placeholder="请输入搜索关键词" />
    <van-cell-group>
      <van-swipe :autoplay="3000" indicator-color="white" class="swipe">
        <van-swipe-item
          ><img src="../assets/组 3.png" alt="" srcset=""
        /></van-swipe-item>
      </van-swipe>
    </van-cell-group>
    <van-cell-group>
      <van-notice-bar :text="ShopHornListContext" left-icon="volume-o" />
    </van-cell-group>
    <van-cell-group>
      <van-row type="flex" justify="space-around" class="flground">
        <van-col
          span="6"
          v-for="(item, index) in ShopGoodsTypeList"
          :key="index"
        >
          <img
            class="tx"
            :src="
              item.imgUrl
                ? 'http://39.100.233.170:8888/img/' + item.imgUrl
                : images
            "
            alt=""
          />
          <p>{{ item.name }}</p>
        </van-col>
      </van-row>
    </van-cell-group>
    <van-cell-group class="goods">
      <van-tabs>
        <van-tab
          v-for="(item, index) in goodslist"
          :key="index"
          :title="item.title"
        >
          <div v-for="(good, i) in goods" :key="i" class="good">
            <van-card
              :price="good.price"
              :tags="good.tags"
              :desc="good.goodsDetails"
              :num="good.repertoryNum"
              :title="good.goodsName"
              :thumb="'http://39.100.233.170:8888/img/' + good.imgPath"
              :origin-price="good.originalSprice"
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
                <van-button size="mini" round class="color" @click="buy(good)"
                  >购买</van-button
                >
              </div>
            </van-card>
            <van-row class="good_bottom" type="flex" justify="space-around">
              <van-col>开始：{{ good.rushBeginTime }}</van-col>
              <van-col>截止：{{ good.rushEndTime }}</van-col>
            </van-row>
          </div>
        </van-tab>
      </van-tabs>
    </van-cell-group>
    <skuVue :showSoldout="showSoldout" />
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
import skuVue from "./sku";
export default {
  components: {
    skuVue,
  },
  name: "home",
  data() {
    return {
      active: 0,
      images: img,
      ShopHornList: [{}],
      showSoldout: false,
      ShopGoodsTypeList: [],
      goods: [
        {
          img: img,
          isoff: false,
          over: 200,
          name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
          tags: ["推荐", "新品", "热卖"],
          price: 29.5,
          beforprice: 30.5,
          time: "10-23 11:00 - 10-23 23:00",
          date: "2020-10-24",
        },
        {
          img: img,
          isoff: false,
          over: 200,
          name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
          tags: ["推荐", "新品", "热卖"],
          price: 29.5,
          beforprice: 30.5,
          time: "10-23 11:00 - 10-23 23:00",
          date: "2020-10-24",
        },
        {
          img: img,
          isoff: false,
          over: 200,
          name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
          tags: ["推荐", "新品", "热卖"],
          price: 29.5,
          beforprice: 30.5,
          time: "10-23 11:00 - 10-23 23:00",
          date: "2020-10-24",
        },
      ],
      goodslist: [
        {
          title: "全部",
        },
        {
          title: "推荐",
          goods: [
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
          ],
        },
        {
          title: "新品",
          goods: [
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
          ],
        },
        {
          title: "热卖",
          goods: [
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
          ],
        },
        {
          title: "促销",
          goods: [
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
          ],
        },
        {
          title: "生鲜",
          goods: [
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
            {
              img: img,
              isoff: false,
              over: 200,
              name: "太黑黑猪夹心肉糜（馄饨饺子肉馅）300g",
              tags: ["推荐", "新品", "热卖"],
              price: 29.5,
              beforprice: 30.5,
              time: "10-23 11:00 - 10-23 23:00",
              date: "2020-10-24",
            },
          ],
        },
      ],
    };
  },
  computed: {
    ShopHornListContext: function () {
      let str = "";
      this.ShopHornList.map((item) => {
        str += item.content + ";";
      });
      return str;
    },
  },
  mounted() {
    this.getquery();
  },
  methods: {
    RoutetTo(name, data) {
      this.$router.push({
        path: name, //这个path就是你在router/index.js里边配置的路径
        query: data,
      });
    },
    getquery() {
      fetch("http://39.100.233.170:8764/shopGoodsType/queryShopGoodsTypeList", {
        // 查询商品类型信息
        method: "GET", // or 'PUT'
        // body: JSON.stringify(data), // data can be `string` or {object}!
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          this.ShopGoodsTypeList = response.list;
        });
      fetch("http://39.100.233.170:8764/shopGoodsInfo/queryShopGoodsInfoList", {
        // 查询商品信息信息
        method: "GET", // or 'PUT'
        // body: JSON.stringify(data), // data can be `string` or {object}!
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          console.log(response.list);
          this.goods = response.list;
        });
      fetch("http://39.100.233.170:8764/shopHorn/queryShopHornList", {
        //查询公告管理信息
        method: "GET", // or 'PUT'
        // body: JSON.stringify(data), // data can be `string` or {object}!
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          this.ShopHornList = response.list;
        });
    },
    
    buy(data) {
      data.indexNum = 1;
      data.price = parseFloat(data.price);
      this.$store.commit("edit", data);
    },
  },
};
</script>

<style lang="less"  >
#home {
  .van-card__content {
    text-align: left;
  }
  margin-bottom: 60px;
  .adressgroud {
    margin: 0;
    .tx {
      width: 2.5rem;
      height: 2.5rem;
    }
    > div {
      background-color: #1b8d3a;
    }
    .address {
      padding: 1rem 1rem;
      .van-tag {
        opacity: 0.6;
        background-color: rgba(220, 38, 38, 0);
      }
      .address1 {
        font-size: 1rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ffffff;
      }
    }
    .addresstext {
      span {
        opacity: 0.6;
        color: white;
        font-size: 12px;
      }
    }
  }
  .van-swipe-item {
    img {
      width: 100%;
    }
  }
  .tx {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .flground {
    padding: 1rem 10px;
    p {
      font-size: 0.7rem;
      margin-bottom: 10px;
      font-family: PingFang SC;
      font-weight: 500;
    }
  }
  .van-cell-group,
  .van-tabs__nav {
    background: #f2f2f2;
  }
  .goods {
    .van-card__title {
      font-size: 0.8rem;
      font-family: PingFang SC;
      font-weight: 800;
    }
    .van-card__price {
      color: #1b8d3a;
      font-weight: 800;
    }
    .good {
      position: relative;
      box-sizing: border-box;
      padding: 8px 16px;
      color: #323233;
      font-size: 12px;
      background-color: #fafafa;
      margin: 10px;
      border-radius: 10px;
      .good_bottom {
        font-size: 0.3rem;
        font-weight: 500;
        color: #666666;
      }
    }
  }
}
</style>