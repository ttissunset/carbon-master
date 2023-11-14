<template>
  <div class="body">
    <div class="dashboard-container">
      <DashboardLeft/>
      <div class="organization">
        <div class="topBox">
          <ul>
            <li v-for="item in List" :key="item.id" @click="goPath(item)" 
            :class="chosenId === item.id ? 'active':''"
            >{{item.name}}</li>
          </ul>
        </div>
        <div class="bottomBox">
          <Information v-if="this.chosenId ===1"/>
         <Employee v-else-if="this.chosenId ===2"/>
         <Role v-else-if="this.chosenId===3"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardLeft from "../../../../src/components/DashboardComponents/Left/index.vue"
import Information from'@/pages/Dashboard/Permissions/Information'
import Employee from'@/pages/Dashboard/Permissions/Employee'
import Role from'@/pages/Dashboard/Permissions/Role'


export default {
  name: "index",
  components: {
    DashboardLeft,
    Information,
  Employee,
  Role
  },
  data() {
    return {
      List:[
        {
          id:1,
          name:'组织信息',
          path:'/dashboard/permissions/information'
        },
        {
          id:2,
          name:'员工管理',
          path:'/dashboard/permissions/employee'
        },
        {
          id:3,
          name:'角色管理',
          path:'/dashboard/permissions/role'
        },
        ],
        chosenId:1
    }
  },  
  watch:{
    $route(to,from){
      console.log('to',to)
      console.log('from',from);
    }
  },
  methods:{
    goPath(item){
       this.chosenId = item.id
    },
    showItem(item){
        if(this.chosenId=item.id){
          return true
        }else{
          return false
        }
    }
  }
}
</script>

<style scoped>
.body {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at top left, #F6E5EF 15%, transparent 40%),
  radial-gradient(circle at top right, #e1effd 20%, transparent 50%),
  radial-gradient(circle at bottom left, #f0e6fd 25%, transparent 70%),
  radial-gradient(circle at bottom right, #c9c3ea 30%, transparent 70%);
  display: flex;
  justify-content: center;
  overflow-y: auto;
}
.dashboard-container {
  width: 95%;
  min-height: 300px; /* 设置初始高度 */
  max-height: 720px;
  margin-top: 2%;
  /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
  display: flex;
  border-radius: var(--radius-20);
background: linear-gradient(to right bottom,
  rgba(252, 228, 228, 0.45),
  rgba(255, 255, 255, 0.1)); 
  backdrop-filter: blur(1px);
  box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
}
.organization{
  width: 84%;
  height: 92%;
  margin-top: 2%;
}
.topBox{
  width: 30%;
  height: 10%;
  margin-left: 3%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
.topBox ul{
  width: 94%;
  height: 100%;
  margin-left: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.topBox ul li{
  width: 25%;
  height: 60%;
  margin-right: 5%;
  font-size: 15px;
  text-align: center;
  line-height: 40px;
  user-select: none;
  cursor: pointer;
}
.active{
  background-color: #cbdebe;
  border-radius: 10px;
}
.bottomBox{
  margin-top: 2%;
  width: 96%;
  margin-left: 3%;
  height: 85%;
}
@media (max-width:1150px) {
    .topBox{
  min-width: 260px;
  height: 10%;
  margin-left: 3%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
}
@media (max-width:850px) {
    .topBox{
  min-width: 260px;
  height: 10%;
  margin-left: 3%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
}
</style>