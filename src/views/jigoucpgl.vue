<template>
  <!-- 机构管理 -->
  <div class="w jggl">
    <!-- 头部 -->
    <div class="jggl-top">
      <span class="jggl-t">机构产品管理</span>
      <el-input class="jggl-put" placeholder="请输入内容" v-model="input10" clearable></el-input>
      <el-row class="jggl-a">
        <el-button type="success">搜索</el-button>
      </el-row>
      <el-row id="jggl-tjys">
        <i class="iconfont icon-ic_upload"></i>
        <el-button class="tjys" type="text" @click="dialogFormVisible = true">添加产品</el-button>
        <el-dialog class="tjys-dialog" title="慢性病添加" :visible.sync="dialogFormVisible">
          <el-form id="tjys-form" :model="form">
            <!-- 缩略图 -->
            <span class="tjys-form-slu left">缩略图：</span>
            <el-upload
              id="left suoluetu"
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
            <el-form-item class="tjyi-put" label="类型：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="tjyi-put" label="地址：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-row>
    </div>

    <!-- 内容 -->
    <el-card id="j-card">
      <div class="text item">
        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="date" label="日期"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="province" label="省份"></el-table-column>
          <el-table-column prop="city" label="市区"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="zip" label="邮编"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
           
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      // 弹出框
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",

      input10: "",

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
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleClick(row) {
      console.log(row);
    }
  }
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

