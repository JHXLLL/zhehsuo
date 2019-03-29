<template>
  <el-container class="container">
    <el-header class="header">
      <div class>
        <!-- logo -->
        <img src="../assets/image/logo.png" alt>
      </div>
      <h2>哲硕网络科技</h2>

      <!-- 管理员信息 -->
      <div id="header-xinxi">
        <img src="../assets/image/logo.png" alt>
        <span class="nicheng">昵称：xxx</span>
        <el-dropdown class="gly" @command="handleCommand">
          <span class="el-dropdown-link">
            设置
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">黄金糕</el-dropdown-item>
            <el-dropdown-item command="b">狮子头</el-dropdown-item>
            <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
            <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>

    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu default-active="2-1" class="menu" :unique-opened="true" :router="true">
          <!-- 机构管理-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>机构管理</span>
            </template>
            <el-menu-item index="/Jigouguanli">
              <i class="el-icon-location"></i>
              机构列表
            </el-menu-item>
          </el-submenu>
          <!-- 文章管理-->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item index="wenzhangguanli">
              <i class="el-icon-menu"></i>
              文章管理
            </el-menu-item>
          </el-submenu>
          <!--管理员管理-->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理员管理</span>
            </template>
            <el-menu-item index="/guanliyuanguanli">
              <i class="el-icon-menu"></i>
              管理员列表
            </el-menu-item>
          </el-submenu>
          <!--机构模块管理-->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>机构模块管理</span>
            </template>
            <el-menu-item index="/jgmokuaigl">
              <i class="el-icon-menu"></i>
              模块管理
            </el-menu-item>
          </el-submenu>
          <!-- 机构科室部门 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>机构科室部门</span>
            </template>
            <el-menu-item index="/jgksbumen">
              <i class="el-icon-menu"></i>
              科室部门列表
            </el-menu-item>
          </el-submenu>
          <!-- 机构医师管理 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>机构医师管理</span>
            </template>
            <el-menu-item index="/yishiguanli">
              <i class="el-icon-menu"></i>
              医师管理
            </el-menu-item>
          </el-submenu>
          <!-- 机构产品管理 -->
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>机构产品管理</span>
            </template>
            <el-menu-item index="/jigoucpgl">
              <i class="el-icon-menu"></i>
              机构产品管理
            </el-menu-item>
          </el-submenu>
          <!-- 机构订单管理 -->
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>机构订单管理</span>
            </template>
            <el-menu-item index="/yuuyuedd">
              <i class="el-icon-menu"></i>
              预约订单
            </el-menu-item>
            <el-menu-item index="/dangdangl">
              <i class="el-icon-menu"></i>
              已就诊订单
            </el-menu-item>
            <el-menu-item index="/yqxdd">
              <i class="el-icon-menu"></i>
              已取消订单
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <!--视图容器 -->
        <div class="tjmk">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">机构模块管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加模块</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main-tjmk">
          <div class="main-jgmk">
            <div class="main-jgmk-1">机构模块</div>
            <div class="main-jgmk-2">
              <!-- 按钮 -->
              <el-row>
                <el-button type="success" round>继续添加</el-button>
              </el-row>
            </div>
          </div>
          <div id="main-cz" class="main-cz">
            <!-- 表格 -->
            <el-table class :data="tableData" style="width:100%">
              <el-table-column prop="date" label="操作">
                <template slot-scope="scope">
                 
                  <el-checkbox-group v-model="scope.row.status">
                    <el-checkbox label="复选框 A"></el-checkbox>
                    
                  </el-checkbox-group>
                 
                </template>
              </el-table-column>
              <el-table-column prop="name" label="ID"></el-table-column>
              <el-table-column prop="address" label="模块"></el-table-column>
            </el-table>
            <el-row class="main-cztj">
              <router-link class="a" v-bind:to="'wenzhanglxtj'">确定添加</router-link>
            </el-row>
          </div>
        </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      checked: true,
      
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  }
};
</script>

<style>
.container {
  height: 100%;
}
/* header */
.header {
  height: 100px !important;
  display: flex;
}

.header img {
  height: 70px;
  width: 90px;
}
/* 管理员信息 */
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
/* 头像 */
.header .header-bgc .el-button--primary {
  background-color: #fff !important;
}
.header #header-xinxi {
  margin-left: 70%;
  width: 300px;
  position: relative;
}
.header #header-xinxi img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px red solid;
  position: absolute;
  top: 30%;
}
.header #header-xinxi .nicheng {
  position: absolute;
  top: 43%;
  left: 20%;
  color: #a5bcd6;
}

.header #header-xinxi .gly {
  position: absolute;
  top: 45%;
  left: 50%;
}
/* aside */
.aside {
  width: 250px !important;
}
.aside,
.el-menu {
  background-color: #f6f8f9;
}
.main {
  background-color: #f6f8f9;
  height: 100%;
}
</style>
<style lang="less" >
.tjmk {
  height: 70px;
  background-color: #fff;
  .el-breadcrumb {
    font-size: 20px;
    line-height: 70px;
    margin-left: 20px;
  }
}
.main-tjmk {
  display: flex;
  padding: 40px;

  .main-jgmk {
    width: 30%;
    height: 700px;
    text-align: center;
    border: 1px #708873 solid;
    .main-jgmk-1 {
      height: 50px;
      background-color: #4cb559;
      line-height: 50px;
      color: #fff;
    }
    .main-jgmk-2 {
      background-color: #fff;
      height: 650px;
      position: relative;
      .el-row {
        position: absolute;
        top: 80%;
        left: 35%;
      }
    }
  }
  #main-cz {
    width: 100%;
    text-align: center;
    margin-left: 20px;
    .el-button {
      margin-top: 30%;
    }
    .main-cztj a {
      display: block;
      width: 104px;
      height: 40px;
      background-color: #4cb559;
      color: #fff;
      border-radius: 5px;
      line-height: 40px;
      margin: auto;
      margin-top: 30%;
    }
  }
}
</style>
