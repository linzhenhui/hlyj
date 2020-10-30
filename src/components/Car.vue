<template>
  <div id="car">
    <van-nav-bar title="我的购物车" left-arrow @click-left="onClickLeft" />
    <div class="shoppingMain">
      <div
        class="shoppingItem"
        v-for="(item, index) in shoppingList"
        :key="index"
      >
        <!--列表项-->
        <div
          class="selectCircle"
          :class="{ checked: item.isSelect }"
          @click="selectGoods(item)"
        ></div>
        <div class="shoppingImg">
          <img :src="item.img" alt="" />
        </div>
        <div class="itemRight">
          <p class="title">{{ item.name }}</p>
          <div class="numAndMoney">
            <p>￥{{ item.price }}</p>
            <div class="numberControl">
              <a class="btn" @click="numDel(item, index)">-</a>
              <input type="text" v-model="item.num" readonly="readonly" />
              <a class="btn" @click="numAdd(item, index)">+</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomMain">
      <!--底部固定栏-->
      <div
        class="selectCircle"
        :class="{ checked: allSelect }"
        @click="allGoodsSelect"
      ></div>
      <span style="padding: 10px">全选</span>
      <button class="bottombtn2" @click="delGoods">删除</button>
      <button class="bottombtn1" @click="buyGoods">{{ sum }}&nbsp;结算</button>
    </div>
  </div>
</template>

<script>
import img from "../assets/1.jpg";
export default {
  data() {
    return {
      shoppingList: [],
      allSelect: false,
      sum: 0,
    };
  },
  created() {
    this.shoppingList = this.$store.state.goods;
  },
  methods: {
    onClickLeft() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    selectGoods(item) {
      //商品选择方法
      item.isSelect = !item.isSelect; //改变选择状态
      this.allSelect = false;
      if (item.isSelect == true) {
        this.sum = this.sum + item.price * item.num;
      } else {
        this.sum = this.sum - item.price * item.num;
      } //结算处商品总额计算
    },
    allGoodsSelect() {
      //全选商品方法
      this.allSelect = !this.allSelect; //改变选择状态
      if (this.allSelect == true) {
        this.sum = 0;
        for (var i = 0; i < this.shoppingList.length; i++) {
          this.shoppingList[i].isSelect = true;
          this.sum =
            this.sum + this.shoppingList[i].price * this.shoppingList[i].num;
        }
      } else {
        for (var i = 0; i < this.shoppingList.length; i++) {
          this.sum = 0;
          // this.sum - this.shoppingList[i].price * this.shoppingList[i].num;
          this.shoppingList[i].isSelect = false;
        }
      } //结算处商品总额计算
    },
    numAdd(item, index) {
      //商品数量增加
      item.num++;
      if (item.isSelect == true) {
        this.sum = this.sum + item.price;
      } //已选择商品增加数量，需要增加总额
    },
    numDel(item, index) {
      //商品数量减少
      item.num--;
      if (item.isSelect == true) {
        this.sum = this.sum - item.price;
      } //已选择商品减少数量，需要减少总额
      if (item.num == 0) {
        this.shoppingList.splice(index, 1);
      } //数量减少为0，需要删除对应数据
    },
    buyGoods() {
      //购买方法，这里只弹出提示所购买商品总额
      alert("购买成功,共花费" + this.sum + "元");
    },
    delGoods() {
      //删除商品方法
      this.sum = 0; //所选商品被删除，总额置0
      for (var i = 0; i < this.shoppingList.length; i++) {
        if (this.shoppingList[i].isSelect) {
          this.shoppingList.splice(i, 1);
          i--;
        }
      } //对所选商品进行删除操作
      if (this.allSelect) {
        this.shoppingList.splice(0, this.shoppingList.length);
        this.allSelect = false;
      } //全选商品后进行全部删除
    },
  },
};
</script>

<style lang="less">
#car {
  .van-checkbox {
    margin: 0.2rem 1rem;
  }
  .ali-cent {
    margin-top: 3rem;
  }
  .shoppingMain {
    width: 100%;
    height: auto;
    margin-bottom: 70px;
  }
  .shoppingItem {
    width: 96%;
    margin-left: 2%;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 5px;
    display: flex;
  }
  .selectCircle {
    width: 15px;
    height: 15px;
    border: 1px solid #a7a5a5;
    border-radius: 50%;
    margin: auto 0px auto 10px;
  }
  .shoppingImg {
    width: 100px;
    height: 100px;
    padding: 10px;
  }
  .shoppingImg img {
    height: 100%;
    width: 100%;
  }
  .itemRight {
    font-size: 10px;
    width: 200px;
  }
  .title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .numAndMoney {
    display: flex;
  }
  input {
    width: 40px;
    height: 20px;
    margin: 10px;
    text-align: center;
  }
  .numberControl {
    position: absolute;
    right: 30px;
  }
  .bottomMain {
    position: fixed;
    width: 100%;
    height: auto;
    border: 1px #a7a5a5 solid;
    bottom: 0;
    left: 0;
    background: #fff;
    display: flex;
    padding: 10px;
  }
  .bottombtn1 {
    width: auto;
    height: 30px;
    border: none;
    color: #fff;
    background-color: #5eba87;
    border-radius: 25px;
    margin: 5px 0 0 10px;
    padding: 5px;
  }
  .bottombtn2 {
    width: 70px;
    height: 30px;
    border: none;
    color: #fff;
    background-color: #cecac7;
    border-radius: 25px;
    margin: 5px 0 0 20px;
  }
  .checked {
    background: #5eba87;
    border: 1px solid rgba(0, 0, 0, 0);
  }
}
</style>