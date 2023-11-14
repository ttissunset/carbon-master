<template>
  <div>
    <div class="right-container">
      <div class="Head">
        <div class="search" @mouseleave="hideSearch">
          <input type="text" placeholder="请输入关键字" v-model="searchName" ref="searchInput" v-show="ifShow"></input>
          <div class="fontBox">
            <div class="iconfont icon-sousuo" @mouseover="showSearch"></div>
          </div>
        </div>
        <div class="delete" @click="searchRole" v-show="ifShow">搜索</div>
        <div class="add" @click="showAddBox">增加</div>
      </div>
      <transition name="leftDrag">
        <div class="rightAddBox" v-show="isHideAdd">
          <div class="x" @click="hideAddBox">x</div>
          <h2 style="color:grey">添加角色</h2>
          <div class="createArea">
            <form>
              <div class="line">
                <label>角色名</label>
                <input type="text" class="mine-input" ref="inputText" v-model="roleName"></input>
              </div>
            </form>
            <div class="selectBox">
              <label>选择权限</label>
              <div class="selectsmallBox">
                <div class="select" @click='isShowOption' ref="selectFirst">请选择权限</div>
                <transition name="down2">
                  <div class="select-optionBox" v-show="hideOption">
                    <div class="options" v-for="item in optionsList" :key="item.id" ref="options"
                         @click="getOptionValue(item.id)">{{ item.name }}
                    </div>
                  </div>
                </transition>
              </div>
              <!-- <div class="selectsmallBox">
              <div class="select" @click='isShowOption1'></div>
              <transition name="down2">
              <div class="select-optionBox" v-show="hideOption1">
                  <div class="options" v-for="item in optionsList" :key="item.id">{{item.name}}</div>
              </div>
              </transition>
              </div> -->
              <div class="add" @click="pushPersission">添加</div>
            </div>
            <!-- :data="data" 要展示的数据 -->
            <el-table style="width: 100%" :style="tableStyle" :data="this.permissionList">
              <el-table-column type="index" label="序号" width="120px" align="center">
              </el-table-column>
              <el-table-column prop="name" label="角色权限" width="width">
                <!-- <template slot-scope="{row}">
                  <span>row.</span>
                </template> -->
              </el-table-column>
              <el-table-column prop="prop" label="操作" width="width">
                <template slot-scope="{ row }">
                  <el-button type="danger" icon="el-icon-delete" size="mini" @click="deletePermisson(row)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="selectArea">
            <div class="sure" @click="addRole">确认</div>
            <div class="reWrite" @click="reWrite">重置</div>
          </div>
        </div>
      </transition>
      <transition name="leftDrag">
        <div class="leftAddBox" v-show="isHideChange">
          <div class="x" @click="hideChangeBox">x</div>
          <h2 style="color:grey">修改角色</h2>
          <div class="createArea">
            <form>
              <div class="line">
                <label>角色名</label>
                <input type="text" class="mine-input" ref="inputText" v-model="roleName"></input>
              </div>
            </form>
            <div class="selectBox">
              <label>选择权限</label>
              <div class="selectsmallBox">
                <div class="select" @click='isShowOption' ref="selectFirst1">请选择权限</div>
                <transition name="down2">
                  <div class="select-optionBox" v-show="hideOption">
                    <div class="options" v-for="item in optionsList" :key="item.id" ref="options"
                         @click="getOptionValue(item.id)">{{ item.name }}
                    </div>
                  </div>
                </transition>
              </div>

              <div class="add" @click="pushNewPersission">添加</div>
            </div>
            <!-- :data="data" 要展示的数据 -->
            <el-table style="width: 100%" :style="tableStyle" :data="this.newPermissionList">
              <el-table-column type="index" label="序号" width="120px" align="center">
              </el-table-column>
              <el-table-column prop="name" label="角色权限" width="width">
                <!-- <template slot-scope="row">
                <span>{{row.name}}</span> 
                </template> -->
              </el-table-column>
              <el-table-column prop="prop" label="操作" width="width">
                <template slot-scope="{ row }">
                  <el-button type="danger" icon="el-icon-delete" size="mini" @click="deletePermisson1(row)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="selectArea">
            <div class="sure" @click="changeInformation">修改</div>
            <div class="reWrite" @click="reWrite">重置</div>
          </div>
        </div>
      </transition>
      <div class="cardBox">
        <div class="roleCard" v-for="(item,index) in allRole" :key="index">
          <div class="topInformation">
            <div class="firstNameBox" :style="{'background': isLong(item.permissionKey.length)? '#fec9c9' : '#d1edc6'}">
              {{ item.name.substring(0, 1) }}
            </div>
            <div class="roleName">
              <div class="name">{{ item.name }}</div>
              <div class="num">{{ item.permissionKey.length }}项权限</div>
            </div>
            <div class="more" @click="showMore(item.id)">...</div>
            <transition name="down">
              <div class="moreBox" v-show="moreShow==item.id ? true:false">
                <div class="roleDelete" @click="deleteRole(item.id)">删除</div>
              </div>
            </transition>
          </div>
          <div class="centerInformation">
            <h2>拥有权限</h2>
            <div class="permission">
              <ul>
                <li v-for="(pItem,index) in item.permissionKey" :key="index">
                  <div class="point">
                    <a class="iconfont icon-duigou"></a>
                  </div>
                  <div class="permissons">{{ pItem }}</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottomInformation">
            <div class="more-btn" @click="showChangeBox(item.id)">修改信息</div>
          </div>
        </div>
      </div>
      <PopComponent ref="pop"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PopComponent from '@/components/pop/PopComponent'
import {Notification} from "element-ui";

export default {
  name: "role",
  components: {PopComponent},
  data() {
    return {
      ifShow: false,
      moreShow: 1,
      isHideAdd: false,
      isHideChange: false,
      hideOption: false,
      hideOption1: false,
      pop: false,
      tableStyle: {
        borderRadius: '20px',
        marginTop: '50px',
        backgroundColor: 'rgb(251, 251, 251)',
        width: '500px',
        height: '250px',
      },
      optionsList: [
        {
          id: 1,
          name: "组织管理",
        },
        {
          id: 2,
          name: "行业资讯",
        },
        {
          id: 3,
          name: "订单管理",
        },
        {
          id: 4,
          name: "工作台",
        },
      ],
      roleName: '',
      permissionList: [],
      newPermissionList: [],
      roleIdList: [],
      eachRoleList: [],
      allRole: [],
      thisRoleList: [],
      searchName: '',
      companyId: '',
      thisRoleId: '',
      roleList: '',
      bgColor: '#d1edc6',
    };
  },
  mounted() {
    this.companyId = localStorage.getItem('companyId')
    this.getRoleList()
    setTimeout(() => {
      for (var i = 0; i < this.roleList.length; i++) {
        var array = {rid: ''}
        array.rid = this.roleList[i].id
        this.roleIdList.push(array)
        this.getRoleById(i)
      }
    }, 500);
  },
  computed: {
    isLong() {
      return function (num) {
        if (num > 2) {
          return true
        } else {
          return false
        }
      }
    }
  },
  methods: {
    showSearch() {
      this.ifShow = true;
    },
    hideSearch() {
      if (this.$refs.searchInput.value === "") {
        this.ifShow = false;
      }
    },
    showMore(itemId) {
      this.moreShow = itemId
    },
    showAddBox() {
      this.isHideChange = false
      this.roleName = ''
      this.permissionList = []
      this.isHideAdd = true
    },
    hideAddBox() {
      this.isHideAdd = false
      this.roleName = ''
      this.permissionList = []
    },
    showChangeBox(rid) {
      this.isHideAdd = false
      this.isHideChange = true
      this.roleName = ''
      this.newPermissionList = []
      var roleId = rid
      this.thisRoleId = rid
      this.postRequest(`/auth-user/auth-admin/AuthRole/getRoleById/${this.companyId}`, roleId).then(res => {
        this.thisRoleList = res.data
        this.roleName = this.thisRoleList.name
        this.permissionList = this.thisRoleList.permissionKey
      })
      setTimeout(() => {
        for (var i = 0; i < this.permissionList.length; i++) {
          let a = {name: ''}
          a.name = this.permissionList[i]
          this.newPermissionList.push(a)
          console.log(this.permissionList);
          console.log(this.newPermissionList);

        }
      }, 200)

    },
    hideChangeBox() {
      const {options, selectFirst1} = this.$refs;
      this.isHideChange = false
      this.roleName = ''
      this.newPermissionList = []
    },
    isShowOption() {
      this.hideOption = !this.hideOption;
    },
    isShowOption1() {
      this.hideOption1 = !this.hideOption1;
    },
    getOptionValue(oid) {
      const {options, selectFirst, selectFirst1} = this.$refs;
      selectFirst.innerText = options[oid - 1].innerText;
      selectFirst1.innerText = options[oid - 1].innerText;
      this.hideOption = false;
    },
    popOut() {
      this.pop = !this.pop
    },
    reWrite() {
      this.roleName = '',
          this.permissionList.splice(0, this.permissionList.length)
    },
    // 添加权限
    pushPersission() {
      const {selectFirst} = this.$refs;
      if (selectFirst.innerHTML === '请选择权限') {
        alert('请选择权限')
      } else {
        var permissionName = selectFirst.innerText
        let a = {name: ''}
        a.name = permissionName
        for (var i = 0; i < this.permissionList.length; i++) {
          if (a.name === this.permissionList[i].name) {
            alert('权限重复')
            return
          }
        }
        if (this.permissionList.length >= 4) {
          alert('权限已满')
          return
        }
        this.permissionList.push(a)
      }
    },
    pushNewPersission() {
      const {selectFirst} = this.$refs;
      if (selectFirst.innerHTML === '请选择权限') {
        alert('请选择权限')
      } else {
        var permissionName = selectFirst.innerText
        let a = {name: ''}
        a.name = permissionName
        for (var i = 0; i < this.newPermissionList.length; i++) {
          if (a.name === this.newPermissionList[i].name) {
            alert('权限重复')
            return
          }
        }
        if (this.newPermissionList.length >= 4) {
          alert('权限已满')
          return
        }
        this.newPermissionList.push(a)
      }
    },
    // 删除权限
    deletePermisson(row) {
      // console.log(row.name);
      var Index
      for (var i = 0; i < this.permissionList.length; i++) {
        if (row.name == this.permissionList[i].name) {
          Index = i
        }
      }
      console.log(Index);
      this.permissionList.splice(Index, 1)
    },
    deletePermisson1(row) {
      // console.log(row.name);
      var Index
      for (var i = 0; i < this.newPermissionList.length; i++) {
        if (row.name == this.newPermissionList[i].name) {
          Index = i
        }
      }

      this.newPermissionList.splice(Index, 1)
    },
    // 添加角色
    addRole() {
      var roleName = this.roleName
      roleName = roleName.replace(/\s*/g, '');
      if (roleName == '') {
        alert('请输入完整信息')
        return
      }
      if (this.$refs.selectFirst.innerHTML === '请选择权限') {
        alert('请输入完整信息')
        return
      }
      var permissionKey = []
      for (var i = 0; i < this.permissionList.length; i++) {
        permissionKey.push(this.permissionList[i].name)
      }
      var addAuthRoleDto = {
        "name": roleName,
        "permissionKey": permissionKey
      }
      this.postRequest(`/auth-user/auth-admin/AuthRole/addRole/${this.companyId}`, addAuthRoleDto).then(res => {
        // this.$refs.pop.messagePopShow('添加成功')

        location.reload()
        if (res.code ==="00000"){
          Notification({
            title: '成功',
            message: '添加成功！',
            type: 'success',
          });
        }

      })
      this.isHideAdd = false
    },
    // 修改角色
    changeInformation() {
      var permissionKey = []
      for (var i = 0; i < this.newPermissionList.length; i++) {
        permissionKey.push(this.newPermissionList[i].name)
      }
      var updateRoleDto = {
        "description": "aaa",
        "id": this.thisRoleId,
        "name": this.roleName,
        "permissionKey": permissionKey
      }
      //  this.$axios.putRequset(`/auth-user/auth-admin/AuthRole/updateRoleById/${this.companyId}`,updateRoleDto).then(res=>{
      //     console.log(res);
      //   })
      this.$axios.putRequest(`/auth-user/auth-admin/AuthRole/updateRoleById/${this.companyId}`, updateRoleDto).then(res => {
        this.$refs.pop.messagePopShow('修改成功')
        location.reload()
      })
      setTimeout(() => {
        this.isHideChange = false
        this.roleName = ''
        this.newPermissionList = []
        location.reload()
      }, 100)
    },
    //获取角色列表
    getRoleList() {
      var pageParamsDto = {
        "pageNo": 1,
        "pageSize": 1
      }
      this.postRequest(`/auth-user/auth-admin/AuthRole/getPage/${this.companyId}`, pageParamsDto).then(res => {
        this.roleList = res.items
      })
    },
    // 根据id获取角色
    getRoleById(i) {
      var roleId = this.roleIdList[i].rid
      this.postRequest(`/auth-user/auth-admin/AuthRole/getRoleById/${this.companyId}`, roleId).then(res => {
        this.eachRoleList = res.data
        this.allRole.push(this.eachRoleList)
      })
    },
    // 删除角色
    async deleteRole(id) {
      var roleId = id
      var action = await this.$refs.pop.confirmPopShow('确认删除？')
      if (action.action == 'ensure') {
        this.$axios.deleteRequest(`/auth-user/auth-admin/AuthRole/downRoleById/${this.companyId}`, roleId).then(res => {
          this.$refs.pop.messagePopShow('删除成功')
          location.reload()
        })
      }
    },
    // 搜索角色
    searchRole() {
      var index = ''
      for (var i = 0; i < this.roleList.length; i++) {
        if (this.searchName == this.roleList[i].name) {
          index = i
        }
      }
      var roleId = this.roleList[index].id
      this.postRequest(`/auth-user/auth-admin/AuthRole/getRoleById/${this.companyId}`, roleId).then(res => {
        this.eachRoleList = res.data
        //  this.allRole.push(this.eachRoleList)
        this.allRole = []
        this.allRole.push(this.eachRoleList)
      })
    }
  },
};
</script>

<style scoped>
.right-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 580px;
}

.rightAddBox {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  right: 0;
  height: 80%;
  width: 550px;
  border-radius: 20px 0 0 20px;
  box-shadow: 0 0 8px rgb(212, 211, 211);
  background-color: rgba(255, 255, 255, .8);
  z-index: 33;
  overflow: hidden;
}

.leftAddBox {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  right: 0px;
  height: 80%;
  width: 550px;
  border-radius: 20px 0 0 20px;
  box-shadow: 0 0 8px rgb(212, 211, 211);
  background-color: rgb(247, 247, 247);
  z-index: 33;
  overflow: hidden;
}

.x {
  text-align: center;
  margin-left: 90%;
  font-size: 25px;
  color: #a3a3a3;
  width: 5%;
  height: 6%;
  cursor: pointer;
  user-select: none;
}

.createArea {
  width: 90%;
  height: 80%;
}

.line {
  width: 250px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.line label {
  float: left;
  width: 55px;
  font-size: 15px;
  text-align: right;
  line-height: 30px;
  font-weight: 700;
  margin-right: 35px;
}

.selectBox {
  display: flex;
  width: 100%;
  height: 35px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.selectBox .add {
  width: 15%;
  height: 120%;
  margin-left: 6%;
  border-radius: var(--radius-10);
  background-color: rgba(143, 234, 178, 0.4);
  text-align: center;
  line-height: 40px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
}

.selectBox label {
  float: left;
  width: 70px;
  height: 35px;
  font-size: 15px;
  text-align: right;
  line-height: 35px;
  font-weight: 700;
  margin-right: 20px;
}

.select {
  position: relative;
  margin-right: 20px;
  height: 35px;
  width: 250px;
  border-radius: 5px;
  background-color: rgb(251, 251, 251);
  border: 2px solid rgb(222, 222, 222);
  transition: 0.5s;
  text-align: center;
  line-height: 35px;
  font-weight: 700;
}

.select:hover {
  border: 2px solid rgb(174, 174, 174);
}

.select::after {
  content: "^";
  position: absolute;
  font-size: 15px;
  right: 5px;
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
  left: 50px;
  border-radius: 10px;
  z-index: 21;
  background-color: #e5e5e5;
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
  background-color: #f5f5f5;
}

.options:hover {
  background-color: #cacaca;
}

.mine-input {
  border: none;
  height: 30px;
  border-radius: 7px;
  width: 130px;
  text-indent: 10px;
  outline: none;
  background-color: #fbfbfb;
  border: 2px solid rgb(228, 226, 226);
}

.selectArea {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
}

.sure {
  margin-right: 40%;
  width: 20%;
  height: 90%;
  border-radius: 10px;
  background-color: #83d178;
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
  transition: .5s;
}

.sure:hover {
  background-color: #91e585;
}

.reWrite {
  width: 20%;
  height: 90%;
  border-radius: 10px;
  background-color: #94b1f6;
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
}

.reWrite:hover {
  background-color: #7a93ce;

}

.roleCard {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 5%;
  height: 220px;
  width: 330px;
  border-radius: var(--radius-10);
  background-color: rgba(252, 251, 251, 0.5);
  box-shadow: var(--shadow-2);
}

.cardBox::-webkit-scrollbar {
  width: 0em;
}

.cardBox {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 99%;
  overflow-y: scroll;
}

.Head {
  position: absolute;
  top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15%;
  width: 50%;
  margin-left: 30%;
  margin-bottom: 1%;
}

.search {
  position: relative;
  margin-right: 25%;
  width: 30%;
  height: 50%;
}

.fontBox {
  position: absolute;
  top: 3px;
  left: 1px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #ffffff;
  animation-name: right;
  animation-duration: 1s;
  background-color: #fff;
}

.iconfont {
  font-size: 25px;
  text-align: center;
  line-height: 50px;
}

.search input {
  width: 150%;
  height: 100%;
  padding-left: 15px;
  padding-right: 32px;
  font-size: var(--fs-7);
  border: var(--light-gray) solid 1px;
  border-radius: 40px;
  text-indent: 40px;
  animation-name: leftDrag;
  animation-duration: 1s;
}

input:focus {
  outline: none; /* 隐藏默认的选中边框 */
  border: 1px solid var(--blackish-green); /* 设置选中状态下的边框样式 */
  transition: var(--transition-2);
}

.add {
  width: 15%;
  height: 50%;
  margin-left: 6%;
  border-radius: var(--radius-10);
  background-color: rgba(143, 234, 178, 0.4);
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
}

.add:hover {
  transform: translateY(-3px);
}

.delete {
  width: 15%;
  height: 50%;
  margin-left: 2%;
  border-radius: var(--radius-10);
  background-color: rgba(245, 133, 104, 0.9);
  text-align: center;
  line-height: 50px;
  color: rgb(255, 255, 255);
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  transition: 0.5s;
}

.delete:hover {
  transform: translateY(-3px);
}

.topInformation {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
}

/* 动画代码 */
@keyframes leftDrag {
  from {
    width: 0;
  }
  to {
    width: 150%;
  }
}

@keyframes back {
  0% {
    top: 150%;
  }

  100% {
    top: 0px;
  }
}

.name {
  height: 55%;
  width: 100%;
  font-size: 18px;
  text-align: center;
  line-height: 25px;
  font-family: var(--ff-almm);
  color: var(--youth-green-2);
}

.num {
  height: 45%;
  width: 100%;
  border-radius: 5px;
  font-size: 10px;
  text-align: center;
  line-height: 22px;
  font-weight: 100;
  background-color: #b5e384;
  color: #494949;
  user-select: none;
}

.firstNameBox {
  margin-right: 10%;
  width: 18%;
  height: 80%;
  border-radius: 8px;
  font-size: 30px;
  text-align: center;
  line-height: 45px;
  color: rgb(158, 203, 91);
  font-family: var(--ff-almm);
}

.roleName {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 10%;
  width: 30%;
  height: 80%;
}

.more {
  text-align: center;
  line-height: 1px;
  font-size: 25px;
  width: 15%;
  height: 20%;
  cursor: pointer;
  user-select: none;
}

.moreBox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 27px;
  width: 50px;
  height: 33px;
  border-radius: 4px;
  background-color: rgba(207, 207, 207, 0.4);
  overflow: hidden;
}

.centerInformation {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
}

.centerInformation h2 {
  margin-left: 30px;
  font-size: 15px;
  margin-bottom: 3px;
}

.permission {
  height: 80%;
  width: 100%;
}

.permission ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.permission li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 60%;
  margin-top: 1%;
  border-radius: 10px;
  background-color: #d4e2ff;
  box-shadow: 0 0 1px grey;
}

.point {
  width: 10%;
  height: 80%;
  margin-top: 2px;
  margin-right: 5%;
}

.point a {
  line-height: 18px;
  font-size: 20px;
  color: #6ed16e;
}

.permissons {
  width: 30%;
  height: 80%;
  color: rgb(129, 129, 129);
  font-size: 13px;
}

.more-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 70%;
  height: 70%;
  background-color: var(--youth-blue);
  text-align: center;
  line-height: 45px;
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  color: white;
  overflow: hidden;
  z-index: 2;
  border-radius: var(--radius-10);
  cursor: pointer;
  user-select: none;
}

.more-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: var(--youth-green-2);
  border-radius: var(--radius-10);
  z-index: -1;
  transition: width 0.5s ease-out;
}

.more-btn:hover::before {
  width: 100%;
}

.more-btn:hover {
  color: #fff;
}

.roleDelete {
  position: relative;
  text-align: center;
  line-height: 35px;
  font-size: 13px;
  margin-top: 4%;
  height: 100%;
  width: 80%;
  user-select: none;
  cursor: pointer;
}

.roleDelete::before {
  content: "";
  position: absolute;
  bottom: 3px;
  left: 0px;
  width: 0px;
  height: 2px;
  background-color: #fc5142;
  z-index: 2;
  transition: 0.5s ease-in-out;
}

.roleDelete:hover::before {
  width: 100%;
}

.bottomInformation {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
}

/* 动画  下*/
.down-enter-active,
.down-leave-active {
  transition: all 0.5s;
}

.down-enter {
  height: 0;
}

.down-enter-to {
  height: 33px;
}

.down-leave-to {
  opacity: 0;
}

.down2-enter-active,
.down2-leave-active {
  transition: all 0.5s;
}

.down2-enter {
  color: none;
  height: 0;
}

.down2-enter-to {
  height: 150px;
}

.down2-leave {
  height: 150px;
}

.down2-leave-to {
  height: 0;
}

/* 左拉抽屉动画 */
.leftDrag-enter-active,
.leftDrag-leave-active {
  transition: all 0.5s ease-in-out;
}

.leftDrag-enter {
  width: 0;
}

.leftDrag-enter-to {
  width: 550px;
}

.leftDrag-leave {
  width: 550px;
}

.leftDrag-leave-to {
  width: 0;
}

/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1280px) {
  .cardBox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 99%;
    overflow-y: scroll;
  }

  .Head {
    position: absolute;
    top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15%;
    width: 50%;
    margin-left: 30%;
    margin-bottom: 1%;
  }
}

@media (max-width: 880px) {
  .cardBox {
    margin-left: 5%;
    display: grid;
    grid-template-columns: 1fr;
    width: 99%;
    overflow-y: scroll;
  }

  .Head {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15%;
    width: 50%;
    margin-left: 30%;
    margin-bottom: 1%;
    background-color: #f45050;
    display: none;
  }
}
</style>