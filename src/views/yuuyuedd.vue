<template>
  <!-- 机构管理 -->
  <div class="w jggl">
    <!-- 头部 -->
    <div class="jggl-top">
      <span class="jggl-t">机构订单管理</span>
      <el-input class="jggl-put" placeholder="请输入内容" v-model="input10" clearable></el-input>
      <el-row class="jggl-a">
        <el-button type="success">搜索</el-button>
      </el-row>
    </div>

    <!-- 内容 -->
    <el-card id="j-card">
      <div class="text item">
        <!-- 表格 -->
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="订单号" ></el-table-column>
            <el-table-column prop="name" label="名称" ></el-table-column>
            <el-table-column prop="province" label="日期" ></el-table-column>
            <el-table-column prop="city" label="预约时间" ></el-table-column>
            <el-table-column prop="address" label="批号"></el-table-column>
            <el-table-column prop="zip" label="价格" ></el-table-column>
            <el-table-column prop="zip" label="状态" ></el-table-column>
            <el-table-column fixed="right" label="操作" >
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" >确认订单</el-button>
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
      }
    },
  data() {
    return {
      input10: "",

      // 表格
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
    };
  },
 
};
</script>

<style>
.el-icon-picture-outline {
  font-size: 50px;
}
</style>
<style lang="less">
#j-card {
  height: 800px;
  margin-top: 20px;
  .icon-ink-pen-write-office-stationery-fountain-product-bcbfea {
    font-size: 20px;
  }
}
.jggl {
  .jggl-top {
    #jggl-tjys {
      width: 105px;
      height: 40px;
      margin-left: 650px;
      font-size: 14px;
      color: #fff;
      background-color: #4cb559;
      line-height: 40px;
      text-align: center;
      border-radius: 5px;
      margin-top: 5px;
      .tjys {
        color: #fff;
      }
      .tjys-dialog {
        #tjys-form {
          text-align: left;
          .tjys-form-slu {
            margin-top: 50px;
            margin-left: 65px;
          }
          .tjyi-put {
            margin-top: 20px;
          }
        }
        .el-dialog__header {
          background-color: #4cb559;
        }
      }
    }
  }
}
</style>

