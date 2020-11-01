<template>
  <div id="Sh">
    <van-nav-bar title="选择商户" left-arrow @click-left="onClickLeft" />
    <van-row class="sh" v-for="item in shlist" :key="item.num">
      <van-col><img class="tx addressimg" :src="item.img" alt="" /></van-col>
      <van-col offset="1" span="18">
        <p class="address1" @click="RoutetTo('sh')">{{ item.name }}</p>
        <p>
          <van-tag round plain  type="success"
            >团队数量：{{ item.td }}</van-tag
          >
          <van-tag round plain  type="success"
            >下单数量：{{ item.xd }}</van-tag
          >
        </p>
        <p class="addresstext">
          <van-icon name="location" />
          <span>{{ item.address }}</span>
        </p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import img from "../assets/1.jpg";
export default {
  data() {
    return {
      shlist: [
        {
          num: 1,
          img: img,
          name: "天汇世纪花苑-高-041",
          td: 280,
          xd: 125,
          address: "新疆维吾尔自治区乌鲁木齐市磨沟区水磨沟街道米多超市",
        },
        {
          num: 2,
          img: img,
          name: "天汇世纪花苑-高-041",
          td: 280,
          xd: 125,
          address: "新疆维吾尔自治区乌鲁木齐市磨沟区水磨沟街道米多超市",
        },
        {
          num: 3,
          img: img,
          name: "天汇世纪花苑-高-041",
          td: 280,
          xd: 125,
          address: "新疆维吾尔自治区乌鲁木齐市磨沟区水磨沟街道米多超市",
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style lang="less">
#Sh {
  .sh {
    margin: 1rem;
    padding: 1rem;
    border-radius: 10px;
    background: white;
    .tx {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
    .address {
      padding: 1rem 1rem;
      .van-tag {
        opacity: 0.6;
      }
      .address1 {
        font-size: 1rem;
        font-family: PingFang SC;
        font-weight: bold;
      }
    }
    .addresstext {
      span {
        opacity: 0.6;
        font-size: 12px;
      }
    }
  }
}
</style>