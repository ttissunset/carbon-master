<template>
  <div>
    <div class="right-container">
        <div class="topBox">
          <!-- @click="showAddEmpBox" -->
           <div class="toadd" @click="goAdd" v-if="changeNum==1">+ 添加员工</div>
           <div class="add" @click="addEmp" v-else>确认添加</div>
           <div class="addBox">
            <form v-if="changeNum==2">
            <div class="line">
            <label> 用户名</label>
            <input type="text" class="mine-input" ref="inputText" v-model="userName"></input> 
            </div>
          </form>
            <div class="selectBox" v-if="changeNum==2">
            <label>选择角色</label>
            <div class="selectsmallBox">
            <div class="select"  ref="selectFirst" @click='isShowOption'>请选择角色</div>
            <div class="select-optionBox" v-show="hideOption">
                <div class="options" v-for=" (item,index) in roleList" :key="item.id" @click="getOptionValue(index)" ref="options" >{{item.name}}</div>
            </div>
            </div>
            </div>
           </div>
           <div class="search">
           <input type="text" placeholder="请输入关键字" ref="searchInput"></input>
           <div class="searchButtom">查询</div>
           </div>
        </div>
        <div class="bottomBox">
               <el-table style="width: 100%"   :style="tableStyle"  :data="this.empList">
              <el-table-column type="index" label="序号" width="80px" align="center" >
              </el-table-column>
              <el-table-column prop="authUser.username" label="员工ID" width="100px">
              </el-table-column>
              <el-table-column prop="authRole.name" label="所属角色" width="width">
              </el-table-column>
              <el-table-column prop="authUser.email" label="EMAIL" width="width">
              </el-table-column>
              <el-table-column prop="prop" label="操作" width="width">
               <template slot-scope="{ row }">
                <!-- @click="deleteEmp(row)" -->
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteEmp(row)" >删除</el-button>
               </template>
              </el-table-column>
            </el-table>
                <!-- 分页器 -->
    <!-- current-page：当前第几页
    total:数据总条数
    page-size:每一页展示数
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange" 
    layout：可以实现分页器布局
    pager-count:按钮的数量
    -->
      <el-pagination :style="pagination"
         layout="prev, pager, next"
         :total="50">
     </el-pagination>
        </div>
    </div>
    
    <PopComponent ref="pop"/>
  </div>
</template>

<script>
import PopComponent from '@/components/pop/PopComponent'
export default {
  name: "employee",
  components:{PopComponent},
  data() {
    return {
      tableStyle: {
        borderRadius: "20px",
        backgroundColor: "rgb(251, 251, 251)",
        height: "90%",
      },
      pagination:{
        marginLeft:'5%'
      },
      // 分页器第几页
      page: 1,
      // 当前页面展示条数
      limit: 3,
      // 总共数据的条数
      total: 10,
      changeNum:'1',
      hideOption:false,
      roleName:'',
      userName:'',
      companyId:'',
      roleList:[],
      empList:[],
    };
  },
  mounted(){
    this.companyId = localStorage.getItem('companyId')
    this.getRoleList()
    this.getEmp()
  },
  methods:{
        isShowOption() {
      this.hideOption = !this.hideOption;
    },
        getRoleList(){
      var pageParamsDto = {
        "pageNo": 1,
        "pageSize": 1
      }
      this.postRequest(`/auth-user/auth-admin/AuthRole/getPage/${this.companyId}`,pageParamsDto).then(res=>{
       this.roleList = res.items
      })
    },
        getOptionValue(index) {
      const { options, selectFirst } = this.$refs;
       selectFirst.innerText = options[index].innerText;
       this.roleName = selectFirst.innerText
      this.hideOption = false;
    },
    addEmp(){
      var addAuthEmployeeDto = {
        "roleName": this.roleName,
        "username": this.userName
      }
      this.postRequest(`/auth-user/auth-admin/employee/addEmployee/${this.companyId}`,addAuthEmployeeDto).then(res=>{
      this.$refs.pop.messagePopShow('添加成功')
        location.reload()
      })
      this.changeNum = 1
    },
   async deleteEmp(row){
       var userId = row.authUser.id
       var action = await this.$refs.pop.confirmPopShow('确认删除？')
       if(action.action == 'ensure'){
      this.$axios.deleteRequest(`/auth-user/auth-admin/employee/deleteEmployee/${this.companyId}`,userId).then(res=>{
         this.$refs.pop.messagePopShow('删除成功')
         location.reload()
     })
       }
    },
    getEmp(){
       var pageParamsDto = {
        "pageNo": 1,
        "pageSize": 1
      }
      this.postRequest(`/auth-user/auth-admin/employee/getEmployeeList/${this.companyId}`,pageParamsDto).then(res=>{
        this.empList =res.items
        console.log(this.empList);
      })
    },
    goAdd(){
      this.changeNum = 2
    },
    
  }
};
</script>

<style scoped>
body{
  width: 100%;
  height: 100%;
  background-color: #d03a3a;
}
.right-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 580px;
}
.topBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 15%;
  margin-bottom: 2%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50%;
  margin-left: 1%;
}
.toadd {
  height: 60%;
  width: 10%;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(121, 194, 149, 0.4);
}
.add {
  height: 60%;
  width: 10%;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(96, 107, 135, 0.4);
}
.add:hover{
  background-color: rgba(53, 207, 74, 0.4);
}
.search input {
  width: 80%;
  height: 100%;
  padding-left: 15px;
  padding-right: 32px;
  font-size: var(--fs-7);
  border: var(--light-gray) solid 1px;
  border-radius: 10px;
  text-indent: 5px;
}
.searchButtom {
  height: 100%;
  width: 15%;
  margin-left: 5%;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 45px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(137, 137, 232, 0.4);
}
.bottomBox {
  height: 75%;
  width: 95%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}
.addBox{
    display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  margin-left: 2%;
}
.line {
  width: 180px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.line label {
  float: left;
  width: 55px;
  font-size: 15px;
  text-align: right;
  line-height: 30px;
  font-weight: 700;
  margin-right: 15px;
}
.mine-input {
  border: none;
  height: 30px;
  border-radius: 7px;
  width: 100px;
  text-indent: 10px;
  outline: none;
  background-color: #fbfbfb;
  border: 2px solid rgb(228, 226, 226);
}
.selectBox {
  display: flex;
  width: 240px;
  height: 45px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.selectBox label {
  float: left;
  width:100px;
  height: 35px;
  font-size: 15px;
  text-align: right;
  line-height: 45px;
  font-weight: 700;
  margin-right: 10px;
}
.select {
  position: relative;
  height: 35px;
  width: 150px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: rgb(251, 251, 251);
  border: 2px solid rgb(222, 222, 222);
  transition: 0.5s;
  text-align: center;
  line-height: 35px;
  font-weight: 700;
  background-color: #fff;
}
.selectsmallBox {
  position: relative;
}
.select-optionBox {
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2px;
  max-height: 120px;
  width: 60%;
  left: 30px;
  border-radius: 10px;
  z-index: 21;
  box-shadow: 0 0 10px rgb(196, 196, 196);
  overflow-y: scroll;
}
.el-table::-webkit-scrollbar {
      width: 0px;
    }
.select-optionBox::-webkit-scrollbar {
  width: 0em;
}
.options {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  user-select: none;
  background-color: #ffffff;
}
.options:hover {
  background-color: #cacaca;
}

@media (max-width:1180px) {
  .right-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 580px;
}
.topBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 15%;
  margin-bottom: 2%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  height: 50%;
  margin-left: 5%;
}
.add {
  height: 60%;
  min-width: 80px;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(121, 194, 149, 0.4);
}
.search input {
  min-width: 200px;
  height: 100%;
  padding-left: 15px;
  padding-right: 32px;
  font-size: var(--fs-7);
  border: var(--light-gray) solid 1px;
  border-radius: 10px;
  text-indent: 5px;
}
.searchButtom {
  height: 100%;
  min-width: 50px;
  margin-left: 5%;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 45px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(137, 137, 232, 0.4);
}
.bottomBox {
  height: 75%;
  width: 95%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}
}
@media (max-width:980px) {
  .right-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 580px;
}
.topBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 15%;
  margin-bottom: 2%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  height: 50%;
  margin-left: 5%;
}
.add {
  height: 60%;
  min-width: 80px;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(121, 194, 149, 0.4);
}
.search input {
  min-width: 200px;
  height: 100%;
  padding-left: 15px;
  padding-right: 32px;
  font-size: var(--fs-7);
  border: var(--light-gray) solid 1px;
  border-radius: 10px;
  text-indent: 5px;
}
.searchButtom {
  height: 100%;
  min-width: 50px;
  margin-left: 5%;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 45px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(137, 137, 232, 0.4);
}
.bottomBox {
  height: 75%;
  width: 95%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}
}
@media (max-width:830px) {
  .right-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 580px;
}
.topBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 15%;
  margin-bottom: 2%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  height: 50%;
  margin-left: 5%;
}
.add {
  height: 60%;
  min-width: 80px;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(121, 194, 149, 0.4);
}
.search input {
  min-width: 200px;
  height: 100%;
  padding-left: 15px;
  padding-right: 32px;
  font-size: var(--fs-7);
  border: var(--light-gray) solid 1px;
  border-radius: 10px;
  text-indent: 5px;
}
.searchButtom {
  height: 100%;
  min-width: 50px;
  margin-left: 5%;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 45px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(137, 137, 232, 0.4);
}
.bottomBox {
  height: 75%;
  width: 95%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}
}
@media (max-width:730px) {
  .right-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 580px;
}
.topBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 15%;
  margin-bottom: 2%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  height: 50%;
  margin-left: 5%;
}
.add {
  height: 60%;
  min-width: 80px;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(121, 194, 149, 0.4);
}
.search input {
  min-width: 150px;
  height: 100%;
  padding-left: 15px;
  padding-right: 32px;
  font-size: var(--fs-7);
  border: var(--light-gray) solid 1px;
  border-radius: 10px;
  text-indent: 5px;
}
.searchButtom {
  height: 100%;
  min-width: 50px;
  margin-left: 5%;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 45px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(137, 137, 232, 0.4);
}
.bottomBox {
  height: 75%;
  width: 95%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}
}
@media (max-width:630px) {
  .right-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 580px;
}
.topBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 15%;
  margin-bottom: 2%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  height: 50%;
  margin-left: 5%;
}
.add {
  height: 60%;
  min-width: 80px;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(121, 194, 149, 0.4);
}
.search input {
  min-width: 100px;
  height: 100%;
  padding-left: 15px;
  padding-right: 32px;
  font-size: var(--fs-7);
  border: var(--light-gray) solid 1px;
  border-radius: 10px;
  text-indent: 5px;
}
.searchButtom {
  height: 100%;
  min-width: 50px;
  margin-left: 5%;
  border-radius: var(--radius-10);
  text-align: center;
  line-height: 45px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  background-color: rgba(137, 137, 232, 0.4);
}
.bottomBox {
  height: 75%;
  width: 95%;
  background-color: rgb(251, 251, 251);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(226, 226, 226);
}

}
</style>