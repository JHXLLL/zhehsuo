<template>
  <!-- 机构管理 -->
  <div class="w jggl">
    <!-- 头部 -->
    <div class="jggl-top">
      <span class="jggl-t">管理员列表</span>
      <el-input class="jggl-put" placeholder="请输入内容" v-model="input10" clearable></el-input>
      <el-row class="jggl-a">
        <el-button  type="success">搜索</el-button>
      </el-row>
      <el-row class="jggl-b">
        <i class="tj el-icon-circle-plus-outline"></i>
        <el-button class="addjg" type="text" @click="dialogFormVisible = true">添加管理员</el-button>
        <!-- 弹窗 -->
        <div id="dia">
          <el-dialog title="管理员基本资料" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="头像：" :label-width="formLabelWidth">
                <div class="el-icon-picture-outline"></div>
              </el-form-item>
              <el-form-item label="姓名：" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="所属单位：" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="联系方式：" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button class="queding" type="primary" @click="dialogFormVisible = false">提 交</el-button>
              <el-button class="quxiao" @click="dialogFormVisible = false">取 消</el-button>
            </div>
          </el-dialog>
        </div>
      </el-row>
    </div>
    <!-- 内容 -->
    <el-card class="box-card">
      <div class="text item">
        <!-- 表格 -->
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="ID" label="头像">
              <div>ww</div>
            </el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="zhanghao" label="单位"></el-table-column>
            <el-table-column prop="date" label="联系方式"></el-table-column>
            <el-table-column prop="address" label="权限"></el-table-column>

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
     
      value1: "",
      value2: "",

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
.el-icon-picture-outline {
  font-size: 50px;
}
#dia .el-dialog__header {
  background-color: #4cb559;
  text-align: center;
}
</style>
<style lang="less">
.box-card {
  margin-top: 20px;
  height: 800px;
}
</style>

