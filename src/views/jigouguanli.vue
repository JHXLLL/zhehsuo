<template>
  

  <!-- 机构管理 -->
  <div class="w jggl">
    <!-- 头部 -->
    <div class="jggl-top">
      <span class="jggl-t">机构管理</span>
      <el-input class="jggl-put" placeholder="请输入内容" v-model="input10" clearable></el-input>
      <el-row class="jggl-a">
        <el-button  type="success">搜索</el-button>
      </el-row>
      <el-row class="jggl-b">
        <i class="tj el-icon-circle-plus-outline"></i>
        <el-button class="addjg" type="text" @click="dialogFormVisible = true">添加机构</el-button>
        <!-- 弹窗 -->
        <el-dialog :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="账号：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="机构名称：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="添加人员：" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder>
                <el-option label="1" value="shanghai"></el-option>
                <el-option label="2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="机构余额：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="添加日期：" :label-width="formLabelWidth">
              <div class="block">
                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="机构logo：" :label-width="formLabelWidth">
                    <div class="el-icon-picture-outline">

                    </div>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            
          </div>
        </el-dialog>
      </el-row>
    </div>
    <!-- 内容 -->
    <el-card class="box-card">
      <div class="text item">
        <!-- 表格 -->
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="ID" label="ID"></el-table-column>
            <el-table-column prop="name" label="机构名称"></el-table-column>
            <el-table-column prop="zhanghao" label="账号"></el-table-column>
            <el-table-column prop="date" label="添加日期"></el-table-column>
            <el-table-column prop="address" label="联系人电话"></el-table-column>
            <el-table-column prop="address" label="机构余额"></el-table-column>
            <el-table-column prop="address" label="添加人员"></el-table-column>
            <el-table-column property="status" align="center" label="操作">
              <!-- 按钮 -->
              <template slot-scope="scope">
                <el-button type="text" @click="open2">
                  <el-switch
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    v-model="scope.row.status"
                  ></el-switch>
                </el-button>
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
  data() {
    return {
       pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          
        },
        value1: '',
        value2: '',
        
      input10: "",

      // switch
      value1: true,
      value2: true,
      // 表格
      tableData: [
        {
          ID: "1",
          name: "林家崖社区卫生服务中心",
          zhanghao: "linjiayashequ",
          date: 121
        },
        {
          ID: "2",
          name: "乐家湾镇卫生院",
          zhanghao: "lejiawanzhenweiyuan",
          date: 121
        }
      ],
      // 弹窗
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
      formLabelWidth: "120px"
    };
  },
  methods: {
    open2() {
      this.$confirm("确定启用该机构吗？?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "启用成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "禁用成功"
          });
        });
    }
  }
};
</script>

<style>

.el-icon-picture-outline{
    font-size:50px;
}
</style>
<style lang="less">
.box-card {
  margin-top: 20px;
  height: 800px;
}
</style>

