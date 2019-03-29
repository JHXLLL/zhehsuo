<template>
  <!-- 机构管理 -->
  <div class="w jggl">
    <!-- 头部 -->
    <div class="jggl-top">
      <span class="jggl-t">文章管理</span>
      <el-input class="jggl-put" placeholder="请输入内容" v-model="input10" clearable></el-input>
      <el-row class="jggl-a">
        <el-button type="success">搜索</el-button>
      </el-row>
      <el-row class="jggl-r">
        <i class="iconfont icon-ic_upload"></i>
        <router-link class="a" v-bind:to="'shangchuanwenzhang'">上传文章</router-link>
      </el-row>
    </div>
    <div class="jggl-nav">
      <div class="input">
        <span>所属模块：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="input">
        <span>所属类型：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <!-- 内容 -->
    <el-card id="jggl-card " class="box-card">
      <div class="text item">
        <!-- 表格 -->
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="缩略图"></el-table-column>
            <el-table-column prop="name" label="文章标题"></el-table-column>
            <el-table-column prop="province" label="所属模块"></el-table-column>
            <el-table-column prop="city" label="类型"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="zip" label="浏览量"></el-table-column>
            <el-table-column prop="zip" label="状态">
              <template slot-scope="scope">
                <el-switch
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  v-model="scope.row.status"
                  @change="change(scope.$index,scope.row)"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    change:function(index,row){
                console.log(index,row);
           }
  },
  data() {
    return {
      input10: "",
      // switch
      value1: true,
      value2: true,
      // 表格
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],
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
      value: ""
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
#jggl-card {
  height: 800px;
  .icon-ink-pen-write-office-stationery-fountain-product-bcbfea {
    font-size: 20px;
  }
}
.jggl {
  .jggl-top {
    .jggl-r {
      width: 85px;
      height: 20px;
      margin-left: 650px;
      font-size: 14px;
      color: #4cb559;
    }
  }
  .jggl-nav {
    height: 64px;
    background-color: #ececec;
    margin-top: 20px;
    display: flex;
    line-height: 64px;
    .input {
      margin-left: 50px;
    }
  }
}
</style>

