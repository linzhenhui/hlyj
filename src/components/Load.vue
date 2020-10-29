<template>
  <div id="login">
    <van-field
      v-model="username"
      label="用户名"
      placeholder="请输入用户名"
      clearable
    />
    <van-field
      v-model="password"
      type="password"
      clearable
      label="密码"
      placeholder="请输入密码"
    />

    <van-button size="normal"   round type="primary">登录</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "18813007814",
      password: "123456",
      code: "",
    };
  },
};
</script>

<style lang="less">
#login {
  width: 80%;
  margin: 0 auto;
  padding-top: 3rem;
  button {
    margin-top: 4rem;
  }
}
</style>