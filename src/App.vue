<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  text-align: center;
  font-family: PingFang SC;
}
.van-cell-group {
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
}
.white {
  background-color: white;
}
.color {
  background: #5eba87;
}
</style>
