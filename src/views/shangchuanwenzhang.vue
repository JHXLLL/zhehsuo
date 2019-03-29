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
      <el-main id="main" class="w main">
        <!--视图容器 -->
        <el-card class="box-card">
          <div class="wztj">
            <span>文章添加</span>
            <el-button class="quxiao" type="text">
              取消上传
              <i class="cha">×</i>
            </el-button>
          </div>
          <div class="main-box">
            <div class="miai-left">
              <div class="demo-input-suffix">
                标题：
                <el-input class="main-bt" placeholder="请输入内容" v-model="input21"></el-input>
              </div>
              <!-- 日期 -->
              <div class="block">
                <span class="demonstration">日期：</span>
                <el-date-picker class="main-bt" v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
              </div>
              <!-- select -->
              <div class="lanmu">
                <span>栏目1：</span>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="last">
                <span>栏目2：</span>
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
            <!-- 缩略图 -->
            <div class="slt">
              <span class="left">缩略图：</span>
              <el-upload class="left"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt>
              </el-dialog>
            </div>
          </div>
          <div class="txt">

          </div>
        </el-card>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      // select
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
      // 日期
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      input: "",
      value1: "",
      value2: "",
      input21: "",
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
<style lang="less">
#main {
  width: 1137px;
  .box-card {
    
    padding: 0 20px 0 20px;
    .wztj {
      height: 69px;
      line-height: 69px;
      display: flex;
      justify-content: space-between;
      position: relative;
      border-bottom: 1px #a2b5bf solid;
      .quxiao {
        font-size: 17px;
      }
      .cha {
        font-size: 25px;
        color: #e51c23;
        position: absolute;
        right: -20px;
        top: 20px;
      }
    }
    .main-bt {
      width: 300px;
    }
    .main-box {
      display: flex;
      margin-top: 30px;
      .miai-left {
        display: flex;
        width: 800px;
        flex-wrap:wrap;
        .block{
          margin-left: 5%;
        }
        .last{
          margin-left: 5%;
          .el-select{
            width: 292px;
          }
        }
        .lanmu{
          .el-select{
            width: 292px;
          }
        }
      }
      .slt{
        margin-left: 50px;
        span{
          margin-top: 50px;
        }
      }
    }
  }
  .txt{
    margin-top: 20px;
    width: 80%;
    height: 800px;
    border: 1px red solid;
  }
}
</style>
