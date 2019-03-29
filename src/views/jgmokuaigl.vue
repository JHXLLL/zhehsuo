<template>
  <!-- 机构管理 -->
  <div class="w jggl">
    <!-- 头部 -->
    <div class="jggl-top">
      <span class="jggl-t">机构模块管理</span>
    </div>
    <!-- 内容 -->
    <el-card class="box-cardl  box-card">
      <div class="card">
        <span>机构：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-row class="jggl-a">
          <el-button type="success">搜索</el-button>
        </el-row>
      </div> 
      <router-link class="tjjgmk a" v-bind:to="'tianjimokuai'">上传文章</router-link>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      input: ""
    };
  }
};
</script>

<style>
.el-icon-picture-outline {
  font-size: 50px;
}
</style>
<style lang="less">
.box-cardl {
  margin-top: 20px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    display: flex;
    line-height: 40px;
    .el-input {
      width: 400px;
      margin-left: 20px;
    }
  }
  
  .tjjgmk{
      display: block;
      width: 150px;
      height: 40px;
      background-color: #67c23a;
      color: #fff;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;
      margin: auto;
      margin-top: 50px;
  }
}
</style>

