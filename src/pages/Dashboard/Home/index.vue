<template>
  <div class="body">
    <div class="dashboard-container">
      <DashboardLeft/>
      <div class="dashboard-container-middle">
        <div class="dashboard-container-middle-top stop-select">
          <img class="stop-select" src="https://myalybucket.oss-cn-shenzhen.aliyuncs.com/bg-white.png">
          <div class="dashboard-container-middle-top-text">
            <span>请您先选择一个组织</span><br>
            <span>再使用其他的服务。</span>
          </div>
          <div class="dashboard-container-middle-top-btn-container">
            <div class="dashboard-container-middle-top-btn">
              续费订阅
            </div>
            <div class="dashboard-container-middle-top-btn-right">
              所在组织的服务已过期？
            </div>
          </div>
        </div>

        <div class="dashboard-container-middle-main stop-select">
          <div class="dashboard-container-title">
            <div class="dashboard-container-title-main">
              选择组织
            </div>
            <div class="dashboard-container-title-sub">
              Select Group
            </div>
          </div>

          <div class="dashboard-container-middle-main-group-list">
            <div class="dashboard-container-middle-main-group-list-item" v-for="(item) in groups" :key="item.index">
              <div class="dashboard-container-middle-main-group-list-item-top">
                <div class="dashboard-container-middle-main-group-list-item-top-name">
                  {{ item.companyName }}
                </div>
                <div class="dashboard-container-middle-main-group-list-item-top-status" v-if="item.serviceNames.length&gt;0">
                  <ion-icon name="checkmark-circle"></ion-icon>
                  订阅中
                </div>
                <div class="dashboard-container-middle-main-group-list-item-top-status disable" v-else>
                  <ion-icon name="close-circle"></ion-icon>
                  无订阅
                </div>
              </div>
              <div class="dashboard-container-middle-main-group-list-item-address">
              {{ item.companyAddress }}
              </div>
              <div class="dashboard-container-middle-main-group-list-item-book">
                <span class="dashboard-container-middle-main-group-list-item-book-t1">
                  订阅服务数:
                </span>
                <span class="dashboard-container-middle-main-group-list-item-book-t2">
                  {{item.serviceNames.length}}
                </span>
              </div>
              <div class="dashboard-container-middle-main-group-list-item-book">
                <span class="dashboard-container-middle-main-group-list-item-book-t1">创建人: </span>
                <span class="dashboard-container-middle-main-group-list-item-book-t2">{{ item.createUser }}</span>
              </div>
              <div class="dashboard-container-middle-main-group-list-item-progressBar-container">
                <div class="dashboard-container-middle-main-group-list-item-progressBar-text">
                  <span class="dashboard-container-middle-main-group-list-item-progressBar-text-1">距离目标</span>
                  <span class="dashboard-container-middle-main-group-list-item-progressBar-text-2">{{number(item.companyId)}}%</span>
                </div>
                
                <div class="dashboard-container-middle-main-group-list-item-progressBar progress-bar" v-if="number(item.companyId) &gt;= 60" >
                  <div class="progress"  >
                  </div>
                </div>
                <div class="dashboard-container-middle-main-group-list-item-progressBar progress-bar" v-else>
                  <div class="progress progress-smaller-than-50" :style="{width: number(item.companyId)+'%'}">
                  </div>
                </div>
              </div>
             <div class="dashboard-container-middle-main-group-list-item-btn-selectd" v-if="changeBtn(item)" >
                <ion-icon name="checkmark"></ion-icon>
                已选择
              </div>
              <div class="dashboard-container-middle-main-group-list-item-btn" v-else @click="selectTheGroup(item.companyId)">
                选择
              </div>
            </div>
            <div class="dashboard-container-middle-main-group-list-item">
                <div class="iconDiv" @click="showAddBox">
                  <h1>+</h1>
                  新建组织
                </div>
            </div>
            <div class="addBox" v-if="showAdd">
              <div class="addTitle">创建组织</div>
              <div class="line">
                <label>组织名称</label>
                <input type="text" class="mine-input"  ref="inputName" @blur="getInfo"></input> 
              </div>
               <div class="line">
              <div class="selectsmallBox">
               <label>所在省区</label>
            <div class="select" @click="ShowOption" ref="selectFirst">请选择省区</div>
            <div class="select-optionBox" v-show="hideOption">
                <div class="options" v-for="(item,index) in provinces" :key="item.index" ref="options" @click="getPlace(item)">{{item}}</div>
            </div>
            </div>
              </div>
                <div class="line">
                <label>详细地址</label>
                <input type="text" class="mine-input"  ref="inputAddress" @blur="getInfo" ></input> 
              </div>
              <div class="bottomBox">
               <div class="sure" @click="addCompany">添加</div>
              <div class="cancel" @click="boxDisappear">取消</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dashboard-container-right stop-select">
        <div class="dashboard-container-right-top">
          <div class="dashboard-container-right-top-container">
            <div class="dashboard-container-right-top-mine">
              <div class="dashboard-container-right-top-avatar-container">
                <img
                    src="https://p3-passport.byteimg.com/img/user-avatar/e3004c671a547800f0ca5db8c0add42d~100x100.awebp">
              </div>
              <div class="dashboard-container-right-top-username">
                <div class="dashboard-container-right-top-username-main">
                  {{this.userName}}
                </div>
                <div class="dashboard-container-right-top-username-sub">
                  {{this.userRole}}
                </div>
              </div>
            </div>
            <div class="dashboard-container-right-split">
              <ion-icon name="git-commit-outline"></ion-icon>
              <span>当前所选组织</span>
              <ion-icon name="git-commit-outline"></ion-icon>
            </div>
            <div class="dashboard-container-right-top-business">
              <div class="dashboard-container-right-top-business-text">
                <div class="dashboard-container-right-top-business-text-1">
                  组织名:
                </div>
                <div class="dashboard-container-right-top-business-text-2">
                  {{selectGroup.companyName}}
                </div>
              </div>

              <div class="dashboard-container-right-top-business-text">
                <div class="dashboard-container-right-top-business-text-1">
                  组织地点:
                </div>
                <div class="dashboard-container-right-top-business-text-2">
                  {{selectGroup.location}}
                </div>
              </div>

              <div class="dashboard-container-right-top-business-text">
                <div class="dashboard-container-right-top-business-text-1">
                  创建人:
                </div>
                <div class="dashboard-container-right-top-business-text-2">
                  {{selectGroup.createUser}}
                </div>
              </div>

              <div class="dashboard-container-right-top-business-text">
                <div class="dashboard-container-right-top-business-text-1">
                  创建时间:
                </div>
                <div class="dashboard-container-right-top-business-text-2">
                  {{selectGroup.createTime}}
                </div>
              </div>

              <div class="dashboard-container-right-top-business-text">
                <div class="dashboard-container-right-top-business-text-1">
                  组织人数:
                </div>
                <div class="dashboard-container-right-top-business-text-2">
                  {{selectGroup.employeeCounts}}
                </div>
              </div>

              <div class="dashboard-container-right-top-business-text">
                <div class="dashboard-container-right-top-business-text-1">
                  Email:
                </div>
                <div class="dashboard-container-right-top-business-text-2">
                  {{selectGroup.email}}
                </div>
              </div>
              <!--              <div class="dashboard-container-right-top-btn">-->
              <!--                组织详情-->
              <!--              </div>-->
            </div>

          </div>

        </div>
        <div class="dashboard-container-right-main">
          <div class="dashboard-container-right-main-item" v-for="(item,index) in serviceList" :key="index">
            <div class="dashboard-container-right-main-item-top">
              <div class="dashboard-container-right-main-item-avatar main-item-avatar-active" v-if="item.status">
                {{ item.serviceName.substring(0, 1) }}
              </div>
              <div class="dashboard-container-right-main-item-avatar main-item-avatar-disabled" v-else>
                {{ item.serviceName.substring(0, 1) }}
              </div>
              <div class="dashboard-container-right-main-item-avatar-info">
                <div class="dashboard-container-right-main-item-avatar-info-name">
                  {{ item.serviceName }}
                </div>
                   <div class="dashboard-container-right-main-item-avatar-info-status avatar-info-status-disabled" v-if="item.status ==1" >
                  <ion-icon name="ellipse"></ion-icon>
                  已过期
                </div>
                <div class="dashboard-container-right-main-item-avatar-info-status avatar-info-status-active"
                    v-else >
                  <ion-icon name="ellipse"></ion-icon>
                  订阅中
                </div>

              </div>
            </div>
            <div class="dashboard-container-right-main-item-main">
              <div class="dashboard-container-right-main-item-main-item-text">
                <div class="dashboard-container-right-main-item-main-item-text-left">
                  开始时间:
                </div>
                <div class="dashboard-container-right-main-item-main-item-text-right">
                  {{ item.beginTime.substring(0,10) }}
                </div>
              </div>

              <div class="dashboard-container-right-main-item-main-item-text">
                <div class="dashboard-container-right-main-item-main-item-text-left">
                  租借时长:{{ item.rentTime }}
                </div>
                <div class="dashboard-container-right-main-item-main-item-text-right">
                  
                </div>
              </div>

              <div class="dashboard-container-right-main-item-main-item-text">
                <div class="dashboard-container-right-main-item-main-item-text-left">
                  结束时间:
                </div>
                <div class="dashboard-container-right-main-item-main-item-text-right">
                  {{ item.overTime.substring(0,10) }}
                </div>
              </div>

            </div>
          </div>
        </div>


        <div style="width: 100%;height: 20px"></div>
      </div>
    </div>
    <div class="dashboard-drawer-right stop-select" ref="RightDrawer">
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>
      <div class="dashboard-container-right-top">
        <div class="dashboard-container-right-top-container">
          <div class="dashboard-container-right-top-mine">
            <div class="dashboard-container-right-top-avatar-container">
              <img
                  src="https://p3-passport.byteimg.com/img/user-avatar/e3004c671a547800f0ca5db8c0add42d~100x100.awebp">
            </div>
            <div class="dashboard-container-right-top-username">
              <div class="dashboard-container-right-top-username-main">
                {{this.userName}}
              </div>
              <div class="dashboard-container-right-top-username-sub">
                {{this.userRole}}
              </div>
            </div>
          </div>
          <div class="dashboard-container-right-split">
            <ion-icon name="git-commit-outline"></ion-icon>
            <span>当前所选组织</span>
            <ion-icon name="git-commit-outline"></ion-icon>
          </div>
          <div class="dashboard-container-right-top-business">
            <div class="dashboard-container-right-top-business-text">
              <div class="dashboard-container-right-top-business-text-1">
                组织名:
              </div>
              <div class="dashboard-container-right-top-business-text-2">
                {{selectGroup.companyName}}
              </div>
            </div>

            <div class="dashboard-container-right-top-business-text">
              <div class="dashboard-container-right-top-business-text-1">
                组织地点:
              </div>
              <div class="dashboard-container-right-top-business-text-2">
                {{selectGroup.location}}
              </div>
            </div>

            <div class="dashboard-container-right-top-business-text">
              <div class="dashboard-container-right-top-business-text-1">
                创建人:
              </div>
              <div class="dashboard-container-right-top-business-text-2">
                {{selectGroup.createUser}}
              </div>
            </div>

            <div class="dashboard-container-right-top-business-text">
              <div class="dashboard-container-right-top-business-text-1">
                创建时间:
              </div>
              <div class="dashboard-container-right-top-business-text-2">
                {{selectGroup.createTime}}
              </div>
            </div>

            <div class="dashboard-container-right-top-business-text">
              <div class="dashboard-container-right-top-business-text-1">
                组织人数:
              </div>
              <div class="dashboard-container-right-top-business-text-2">
                {{selectGroup.employeeCounts}}
              </div>
            </div>

            <div class="dashboard-container-right-top-business-text">
              <div class="dashboard-container-right-top-business-text-1">
                Email:
              </div>
              <div class="dashboard-container-right-top-business-text-2">
                {{selectGroup.email}}
              </div>
            </div>
            <!--              <div class="dashboard-container-right-top-btn">-->
            <!--                组织详情-->
            <!--              </div>-->
          </div>

        </div>

      </div>
      <div class="dashboard-container-right-main">
        <div class="dashboard-container-right-main-item" v-for="(item,index) in serviceList" :key="index">
          <div class="dashboard-container-right-main-item-top">
            <div class="dashboard-container-right-main-item-avatar main-item-avatar-active" v-if="item.status">
              {{ item.serviceName.substring(0, 1) }}
            </div>
            <div class="dashboard-container-right-main-item-avatar main-item-avatar-disabled" v-else>
              {{ item.serviceName.substring(0, 1) }}
            </div>
            <div class="dashboard-container-right-main-item-avatar-info">
              <div class="dashboard-container-right-main-item-avatar-info-name">
                {{ item.serviceName }}
              </div>
              <div class="dashboard-container-right-main-item-avatar-info-status avatar-info-status-active"
                   v-if="item.status ==0">
                <ion-icon name="ellipse"></ion-icon>
                订阅中
              </div>
              <div class="dashboard-container-right-main-item-avatar-info-status avatar-info-status-disabled" v-else>
                <ion-icon name="ellipse"></ion-icon>
                已过期
              </div>
            </div>
          </div>
          <div class="dashboard-container-right-main-item-main">
            <div class="dashboard-container-right-main-item-main-item-text">
              <div class="dashboard-container-right-main-item-main-item-text-left">
                开始时间 :{{ item.beginTime }}
              </div>
            </div>

            <div class="dashboard-container-right-main-item-main-item-text">
              <div class="dashboard-container-right-main-item-main-item-text-left">
                租借时长:{{ item.rentTime }}
              </div>
            </div>

            <div class="dashboard-container-right-main-item-main-item-text">
              <div class="dashboard-container-right-main-item-main-item-text-left"> 
                结束时间 :{{ item.overTime }}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import DashboardLeft from "../../../../src/components/DashboardComponents/Left/index.vue"

// 控制台首页
export default {
  name: "index",
  components: {
    DashboardLeft
  },
  data() {
    return {
      groups: [
      ],
      selectGroup:[
      ],
      services: [
        {name: "碳核算", status: 1, rentTime: "180天", start: "2023-3-18", end: "2023-9-18"},
        {name: "碳排查", status: 1, rentTime: "180天", start: "2023-3-18", end: "2023-9-18"},
        {name: "链路跟踪", status: 1, rentTime: "180天", start: "2023-3-18", end: "2023-9-18"},
        {name: "勾勾", status: 0, rentTime: "30天", start: "2022-4-5", end: "2023-5-5"},
      ],
      comInformation:{
        address:'',
        companyName: '',
        location: '',
      },
      provinces: [
  '北京市',
  '天津市',
  '河北省',
  '山西省',
  '内蒙古自治区',
  '辽宁省',
  '吉林省',
  '黑龙江省',
  '上海市',
  '江苏省',
  '浙江省',
  '安徽省',
  '福建省',
  '江西省',
  '山东省',
  '河南省',
  '湖北省',
  '湖南省',
  '广东省',
  '广西壮族自治区',
  '海南省',
  '重庆市',
  '四川省',
  '贵州省',
  '云南省',
  '西藏自治区',
  '陕西省',
  '甘肃省',
  '青海省',
  '宁夏回族自治区',
  '新疆维吾尔自治区',
  '台湾省'
      ],
      hideOption:false,
      showAdd:false,
      selectCom: -1,
      pageWidth: 0,
      serviceList:[],
      empList:[],
      userName:'',
      userRole:'',
      companyId:'',
      allList:[]
      // a
    }
  },
  created(){
   if(localStorage.getItem('companyId')){
    this.companyId = localStorage.getItem('companyId')
    this.selectCom = this.companyId
   }
  },
  mounted(){
   this.getCompanyInfo()
   this.getUserInfo()
   
   if(localStorage.getItem('companyId')){
    this.selectTheGroup(this.companyId)
   }

  },
  watch:{
		comInformation(newVal, oldVal) {
			console.log('newVal', newVal);// 1234
			console.log('oldVal', oldVal);// 123
		}
  },
  computed:{
    changeBtn(){
     return function(item){
       if(this.selectCom == item.companyId){
        return true
       }else{
        return false
       }
      }
    },
    number(){
      return function (id) {
        for(var i =0;i<this.allList.length;i++){
          if(id == this.allList[i].id){
            if(this.allList[i].data =='订阅碳中和服务，助力企业在目标时间完成碳中和目标'){
              return 0
            }else{
              return (this.allList[i].data *100).toFixed(1)
            }
          }
        }
      }
    }
  },
  methods:{
    selectTheGroup(comId) {
      this.selectCom = comId
      localStorage.setItem('companyId',this.selectCom)
      // 更改组织，获取该组织的具体信息并缓存下来，然后渲染到右边或者抽屉上
      this.pageWidth = window.innerWidth
      if (this.pageWidth < 1160) {
        var rightDrawer = this.$refs.RightDrawer;
        rightDrawer.style.display = 'block'
      }
      this.getRequest(`/auth-user/auth-admin/AuthUser/auth-company/getCompanyDetail/${comId}`).then(res=>{
        this.selectGroup = res.data
        localStorage.setItem('companyName',this.selectGroup.companyName) 
      })
      //  获取订单
      //  this.getRequest(`tance-service-serve/service/company/getServices/${comId}`).then(res=>{
      //   this.serviceList = res.data
      // })
      this.getRequest(`tance-service-serve/service/company/getServices/${comId}`).then(res=>{
        this.serviceList =res.data
        console.log(this.serviceList);
      })
      //   this.getRequest(`carbon-service/CarbonService/getTargetDistance/${comId}`).then(res=>{
      //   console.log(res);
      // })
    },

    // endTime(i){
    //     var time = this.serviceList[i].createDate
    //     var long = this.serviceList[i].rentTime
    //     var a
    //     var startIndex 
    //          for(var j =0;i<time.length;j++){
    //            if(time.substring(j,j+1) === '-'){
    //              startIndex = j+4
    //             break
    //            }
    //          }
    //           setTimeout(()=>{
    //         var endIndex = startIndex+2
    //          var date = time.substring(startIndex,endIndex)
    //          var newDate = parseInt(date) + parseInt(long)
    //          a = time.replace(date,newDate)
    //           console.log(a);
    //          return a
    //            },100)
    // },
    // getEndTime(i,callback){
    //   endTime(i).then(res=>{
    //     callback(res.a)
    //   })
    // },
    closeTheDrawer() {
      var rightDrawer = this.$refs.RightDrawer;
      rightDrawer.style.display = 'none'
    },
    getCompanyInfo(){
      this.getRequest('/auth-user/auth-admin/AuthUser/auth-role-company/getRoleCompany').then(res=>{
           this.groups = res.data
              for(var i =0;i<this.groups.length;i++){
                this.getNumber(this.groups[i].companyId)
      }
      })
      .catch((err)=>{
        // console.log(err);
      })

    },
    showAddBox(){
      this.showAdd = true
    },
    getInfo(){
      if(this.$refs.inputName.value != ''){
     this.comInformation.companyName = this.$refs.inputName.value
      }
      if(this.$refs.inputAddress.value != ''){
     this.comInformation.address= this.$refs.inputAddress.value
      }
    },
    boxDisappear(){
      this.showAdd = false
    },
    ShowOption() {
      this.hideOption = !this.hideOption;
    },
    getPlace(item){
      const {selectFirst} = this.$refs
      selectFirst.innerHTML = item
      this.comInformation.location = selectFirst.innerHTML
      this.hideOption = false
    },
    addCompany(){
      let {address,companyName,location} = this.comInformation
       const {inputName,selectFirst,inputAddress} = this.$refs
      var authCompany = {
        "address": address,
        "companyName": companyName,
        "location": location
      }
     if(address && companyName && location){
      this.postRequest('/auth-user/auth-admin/AuthUser/auth-company/add',authCompany).then(res=>{
        alert('创建成功')
        address = ''
        companyName = ''
        location = ''
        this.showAdd = false
        location.reload()
      })
     }else{
      alert('请填入完整信息')
     }
    },
    getUserInfo(){
        this.postRequest('/tance-service-serve/service/base/testPayLoad').then(res=>{
        this.userName = res.data.user_name
      //  this.getRequest(`/auth-user/auth-admin/AuthUser/username/${this.userName}`).then(res=>{
      //    console.log(res.data);
      //  })
      })
    },
    getNumber(comId){
      var a ={
        id:comId,
        data:{}
      }
      this.getRequest(`carbon-service/CarbonService/getTargetDistance/${comId}`).then(res=>{
        console.log(res);
        a.data =res.data
        this.allList.push(a)
        console.log(this.allList);
      })
    }
    // getRoleList(){
    //    var pageParamsDto = {
    //     "pageNo": 1,
    //     "pageSize": 1
    //   }
    //   this.postRequest(`/auth-user/auth-admin/employee/getEmployeeList/${this.companyId}`,pageParamsDto).then(res=>{
    //     this.empList =res.items
    //     // console.log(this.empList);
    //     var index
    //        for(var i =0;i<this.empList.length;i++){
    //           if(this.userName == this.empList[i].authUser.username){
    //            index = i
    //           }
    //        }
    //        this.userRole = this.empList[index].authRole.name
    //   })
    // },
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
  position: relative;
  min-height: 300px; /* 设置初始高度 */
  max-height: 92vh;
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


.dashboard-container-title {
  width: fit-content;
  height: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  margin-left: 1%;
  margin-bottom: 2%;
}

.dashboard-container-title-main {
  font-size: var(--fs-4);
  color: var(--black);
  font-weight: var(--fw-600);
  letter-spacing: 1px;
}

.dashboard-container-title-sub {
  color: #606060;
}

/*left：16%*/

/*middle：62%*/

/*right：22%*/
.dashboard-container-middle {
  width: 60%;
  height: 100%;
  padding-left: 1%;
  padding-right: 1%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  /*在火狐浏览器中隐藏滚动条*/
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
}

/* 隐藏滚动条 */
.dashboard-container-middle::-webkit-scrollbar {
  width: 0em;
  background-color: #F5F5F5;
}

/* 滚动条滑块 */
.dashboard-container-middle::-webkit-scrollbar-thumb {
  background-color: #000000;
  opacity: 0.7;
  max-height: 50px;
}

.dashboard-container-middle::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  height: 92%;
  border-right: #dadada solid 1px;
}

.dashboard-container-middle-top {
  width: 95%;
  height: auto;
  margin-top: 4%;
  border-radius: var(--radius-20);
  position: relative;
  display: flex;
}

.dashboard-container-middle-top img {
  width: 100%;
  border-radius: var(--radius-20);
  pointer-events: none;
  opacity: 0.65;
}

.dashboard-container-middle-top-text {
  position: absolute;
  z-index: 100;
  font-size: var(--fs-2);
  font-weight: var(--fw-600);
  font-family: var(--ff-almm);
  top: 20%;
  left: 8%;
  letter-spacing: 3px;
}

.dashboard-container-middle-top-btn-container {
  min-width: 280px;
  position: absolute;
  bottom: 14%;
  left: 8%;
  display: flex;
}

.dashboard-container-middle-top-btn {
  width: 130px;
  height: 50px;
  z-index: 100;
  background-color: var(--youth-green);
  font-size: var(--fs-6);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-10);
  letter-spacing: 2px;
  font-weight: var(--fw-600);
  box-shadow: var(--shadow-2);
  cursor: pointer;
}

.dashboard-container-middle-top-btn:is(:hover,:focus-visible) {
  transform: translateY(-5px);
  transition: var(--transition-3);
  box-shadow: var(--shadow-2);
}

.dashboard-container-middle-top-btn-right {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-left: 5%;
  margin-bottom: 1%;
  color: #757575;
}


.dashboard-container-middle-main {
  min-height: 350px;
  width: 95%;
  margin-top: 3%;
}

.dashboard-container-middle-main-group-list {
  position: relative;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.dashboard-container-middle-main-group-list-item {
  width: 95%;
  min-width: 250px;
  height: 320px;
  background-color: rgba(252, 251, 251, 0.5);
  box-shadow: var(--shadow-2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: var(--radius-20);
  margin-bottom: 5%;
}

.iconDiv{
  width: 50%;
  height: 50%;
  text-align: center;
  font-size: 20px;
  margin-bottom: 15%;
  font-weight: 200;
  transition: .5s;
  cursor: pointer;
}
.iconDiv:hover{
  color: #79c87b;
}
.iconDiv h1{
  text-align: center;
  font-size: 100px;
  font-weight: 100;
  color: #a7a7a7;
  transition: .5s;
}
.iconDiv:hover h1{
  color: #79c87b;
}
.addBox{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10px;
  left: 300px;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  background-color: rgb(247, 247, 247);
  box-shadow: var(--shadow-2);
  z-index: 333;
}
.addTitle{
  height: 10%;
  width: 40%;
  margin-top: 5%;
  text-align: center;
  font-size: 23px;
  font-weight: 700;
  color: #79c87b;
}
.line {
  display: flex;
  float: left;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 2px;
  width: 100%;
}
.line label {
  width: fit-content;
  font-size: 13px;
  text-align: right;
  margin-right: 10px;
  color: #757575;
  line-height:30px;
}
.mine-input {
  height: 25px;
  outline: none;
  border-radius: 5px;
  /* width: 280px; */
  width: 63%;
  text-indent:10px;
  background-color: #fbfbfb;
 border: 1px solid rgb(123, 123, 123);
}
.mine-input:focus{
 border: 1px solid rgb(156, 167, 230);
  transition: border .5s;
}
.selectsmallBox{
  float: left;
}
.selectsmallBox label{
  width: fit-content;
  float: left;
}
.select {
  position: relative;
  display: inline-block;
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
.select-optionBox {
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2px;
  max-height: 150px;
  width: 30%;
  height: 200px;
  left: 185px;
  border-radius: 10px;
  z-index: 21;
  background-color: #e5e5e5;
  overflow-y: scroll;
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
.bottomBox{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;       
  width: 80%;
  height: 20%;
}
.sure{
  display: flex;
  width: 40%;
  height: 60%;
  margin-right: 10%;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-6);
  color: var(--white);
  border-radius: var(--radius-10);
  font-weight: var(--fw-600);
  box-shadow: var(--shadow-2);
  cursor: pointer;
  background-color: #aadc8c;
  transition: .5s;
}
.sure:hover{
  transform:translateY(-2px)
}
.cancel{
  display: flex;
  width: 40%;
  height: 60%;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-6);
  color: var(--white);
  border-radius: var(--radius-10);
  font-weight: var(--fw-600);
  box-shadow: var(--shadow-2);
  cursor: pointer;
  background-color: #e17f55;
  transition: .5s;
}
.cancel:hover{
  transform:translateY(2px)
}
.dashboard-container-middle-main-group-list-item-top {
  width: 100%;
  display: flex;
  align-items: center;
  height: 20%;
}

.dashboard-container-middle-main-group-list-item-top-name {
  width: 50%;
  display: flex;
  align-items: center;
  margin-left: 10%;
  height: 100%;
  font-size: var(--fs-5);
  font-weight: var(--fw-600);
  text-align: center;
}

.dashboard-container-middle-main-group-list-item-top-status {
  width: 35%;
  display: flex;
  align-items: center;
  margin-left: 5%;
  height: 100%;
  font-size: var(--fs-7);
  font-weight: var(--fw-600);
  text-align: center;
  gap: 5px;
  color: var(--youth-green-2);
}

.disable {
  color: var(--dark-pink);
}

.dashboard-container-middle-main-group-list-item-address {
  width: 65%;
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 5px;
  margin-left: 10%;
  margin-bottom: 2%;
  color: #6e6d6d;
}

.dashboard-container-middle-main-group-list-item-book {
  width: 75%;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
  margin-top: 3%;
  font-size: var(--fs-7);
  align-self: flex-start;
  margin-left: 10%;
}

.dashboard-container-middle-main-group-list-item-book-t1 {
  font-size: var(--fs-8);
}

.dashboard-container-middle-main-group-list-item-book-t2 {
  font-size: var(--fs-7);
  font-weight: var(--fw-600);
}

.dashboard-container-middle-main-group-list-item-progressBar-container {
  width: 65%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  margin-top: 6%;
  font-size: var(--fs-7);
  align-self: flex-start;
  margin-left: 10%;
  background-color: rgba(243, 238, 238, 0.8);
  border-radius: var(--radius-10);
  padding: 6%;
}

.dashboard-container-middle-main-group-list-item-progressBar-text {
  width: 100%;
  align-self: start;
  display: flex;
  justify-content: space-between;
}

.dashboard-container-middle-main-group-list-item-progressBar-text-1 {
  font-size: var(--fs-8);
}

.dashboard-container-middle-main-group-list-item-progressBar-text-2 {
  font-weight: var(--fw-600);
}

/* 进度条容器样式 */
.progress-bar {
  width: 100%;
  height: 12px;
  background-color: white;
  border-radius: var(--radius-6);
  overflow: hidden;
  margin-top: 5%;

}

/* 进度条样式 */
.progress {
  height: 100%;
  background-image: linear-gradient(to right, #69d9d9, #76e3b9);
  border-radius: var(--radius-6);
  transition: width 0.5s ease;
  position: relative;
}

.progress-smaller-than-50 {
  background-image: linear-gradient(to right, #f59aa8, #f3d6c4);
}

/* 进度条文字样式 */
.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: bold;
  font-size: 12px;
}

.dashboard-container-middle-main-group-list-item-btn-selectd {
  width: 70%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--youth-green-2);
  /*border: var(--youth-green-2) solid 1px;*/
  color: white;
  border-radius: var(--radius-10);
  margin-top: 5%;
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  cursor: pointer;
  opacity: 0.9;
  gap: 5px;
}

.dashboard-container-middle-main-group-list-item-btn-selectd ion-icon {
  font-size: var(--fs-4);
}

.dashboard-container-middle-main-group-list-item-btn {
  width: 70%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /*border: var(--youth-green-2) solid 2px;*/
  /*color: var(--youth-green-2);*/
  background-color: var(--youth-blue);
  color: white;
  border-radius: var(--radius-10);
  margin-top: 5%;
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: var(--shadow-1);
}


.dashboard-container-middle-main-group-list-item-btn::before {
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

.dashboard-container-middle-main-group-list-item-btn:hover::before {
  width: 100%;
}

/*dashboard-container-right*/

.dashboard-container-right {
  flex-grow: 1;
  padding-right: 1.2%;
  overflow-y: scroll;
  /*在火狐浏览器中隐藏滚动条*/
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
}

/* 隐藏滚动条 */
.dashboard-container-right::-webkit-scrollbar {
  width: 0em;
  background-color: #F5F5F5;
}

/* 滚动条滑块 */
.dashboard-container-right::-webkit-scrollbar-thumb {
  background-color: #000000;
  opacity: 0.7;
  max-height: 50px;
}

.dashboard-container-right-top {
  width: 100%;
  height: 267px;
  margin-top: 12%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-20);
}

.dashboard-container-right-top-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.dashboard-container-right-top-mine {
  width: 80%;
  height: 70px;
  flex-grow: 0;
  display: flex;
  align-items: center;
  margin-top: 8%;
  gap: 20px;
}

.dashboard-container-right-top-avatar-container {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-circle);
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-2);
}

.dashboard-container-right-top-avatar-container img {
  width: 55px;
  height: 55px;
  border-radius: var(--radius-circle);
  pointer-events: none;
}

.dashboard-container-right-top-business {
  flex-grow: 1;
  width: 65%;
}

.dashboard-container-right-top-username {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.dashboard-container-right-top-username-main {
  font-size: var(--fs-5);
  font-weight: var(--fw-600);
  letter-spacing: 1px;
}

.dashboard-container-right-top-username-sub {
  color: #6e6d6d;
}

.dashboard-container-right-split {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-8);
  gap: 8px;
  color: #a6a6a6;
  margin-bottom: 3%;
}

.dashboard-container-right-split ion-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-7);
}

.dashboard-container-right-top-business-text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3%;
}

.dashboard-container-right-top-business-text-1 {
  font-size: var(--fs-8);
  color: #6e6d6d;
}

.dashboard-container-right-top-business-text-2 {
  font-size: var(--fs-8);
  font-family: var(--ff-almm);
}

.dashboard-container-right-top-btn {
  width: 100%;
  height: 38px;
  margin-top: 2%;
  background-color: var(--youth-green-2);
  justify-self: right;
  color: var(--white);
  font-size: var(--fs-7);
  font-weight: var(--fw-600);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-8);
}


.dashboard-container-right-main {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  gap: 18px;
}

.dashboard-container-right-main-item {
  width: 95%;
  height: 160px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: var(--radius-20);
  box-shadow: var(--shadow-3);
  transition: 0.5s ease-in-out;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.dashboard-container-right-main-item:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.dashboard-container-right-main-item-top {
  width: 80%;
  margin-top: 5%;
  display: flex;
  gap: 5%;
}

.dashboard-container-right-main-item-avatar {
  width: 50px;
  height: 50px;
  flex-grow: 0;
  color: white;
  font-size: var(--fs-5);
  font-weight: var(--fw-600);
  border-radius: var(--radius-8);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(30px);
}

.main-item-avatar-active {
  background-color: rgba(68, 81, 217, 0.56);
}

.main-item-avatar-disabled {
  background-color: rgba(245, 96, 100, 0.8);
}

.dashboard-container-right-main-item-avatar-info {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
}

.dashboard-container-right-main-item-avatar-info-name {
  font-size: var(--fs-5);
  font-family: var(--ff-almm);
  letter-spacing: 2px;
  margin-top: 1%;

}

.dashboard-container-right-main-item-avatar-info-status {
  font-size: var(--fs-8);
  margin-top: 4%;
}

.avatar-info-status-active {
  color: var(--youth-green-3);
}

.avatar-info-status-disabled {
  color: var(--dark-pink);
}

.dashboard-container-right-main-item-avatar-info-status ion-icon {
  font-size: 0.5rem;
}

.dashboard-container-right-main-item-main {
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: var(--fs-8);
}

.dashboard-container-right-main-item-main-item-text {
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dashboard-container-right-main-item-main-item-text-left {
  color: #818181;
}

.dashboard-container-right-main-item-main-item-text-right {
  margin-top: 1%;
  width: 150px;
  text-align: center;
}


.dashboard-drawer-right {
  background-color: #fff;
  position: absolute;
  width: 40%;
  height: 100%;
  top: 0;
  right: 0;
  overflow-y: scroll;
  box-shadow: var(--shadow-2);
  display: none;
  z-index: 1000;
}


/*媒体查询meitichaxunmtcxmediaquery*/

@media (max-width: 1450px) {

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
    position: relative;
    min-height: 300px; /* 设置初始高度 */
    max-height: 92vh;
    margin-top: 2%;
    /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
    display: flex;
    border-radius: var(--radius-20);
    background: linear-gradient(to right bottom,
    rgba(255, 255, 255, 0.45),
    rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(1px);
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
  }


  .dashboard-container-title {
    width: fit-content;
    height: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    margin-left: 1%;
    margin-bottom: 2%;
  }

  .dashboard-container-title-main {
    font-size: var(--fs-4);
    color: var(--black);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .dashboard-container-title-sub {
    color: #606060;
  }

  /*left：16%*/
  /*middle：62%*/
  /*right：22%*/
  .dashboard-container-middle {
    width: 60%;
    height: 100%;
    padding-left: 1%;
    padding-right: 1%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;

    /*在火狐浏览器中隐藏滚动条*/
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
  }

  /* 隐藏滚动条 */
  .dashboard-container-middle::-webkit-scrollbar {
    width: 0em;
    background-color: #F5F5F5;
  }

  /* 滚动条滑块 */
  .dashboard-container-middle::-webkit-scrollbar-thumb {
    background-color: #000000;
    opacity: 0.7;
    max-height: 50px;
  }

  .dashboard-container-middle::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 92%;
    border-right: #dadada solid 1px;
  }

  .dashboard-container-middle-top {
    width: 95%;
    height: auto;
    margin-top: 4%;
    border-radius: var(--radius-20);
    position: relative;
    display: flex;
  }

  .dashboard-container-middle-top img {
    width: 100%;
    border-radius: var(--radius-20);
    pointer-events: none;
    opacity: 0.65;
  }

  .dashboard-container-middle-top-text {
    position: absolute;
    z-index: 100;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    font-family: var(--ff-almm);
    top: 12%;
    left: 8%;
    letter-spacing: 3px;
  }

  .dashboard-container-middle-top-btn-container {
    min-width: 280px;
    position: absolute;
    bottom: 9%;
    left: 8%;
    display: flex;
  }

  .dashboard-container-middle-top-btn {
    width: 130px;
    height: 50px;
    z-index: 100;
    font-size: var(--fs-6);
    background-color: var(--youth-green);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    font-weight: var(--fw-600);
    box-shadow: var(--shadow-2);
    cursor: pointer;
  }

  .dashboard-container-middle-top-btn:is(:hover,:focus-visible) {
    transform: translateY(-5px);
    transition: var(--transition-3);
    box-shadow: var(--shadow-2);
  }

  .dashboard-container-middle-top-btn-right {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-left: 5%;
    margin-bottom: 1%;
    color: #757575;
  }


  .dashboard-container-middle-main {
    min-height: 350px;
    width: 95%;
    margin-top: 3%;
  }

  .dashboard-container-middle-main-group-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .dashboard-container-middle-main-group-list-item {
    width: 95%;
    min-width: 200px;
    height: 320px;
    background-color: rgba(252, 251, 251, 0.5);
    box-shadow: var(--shadow-2);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: var(--radius-20);
    margin-bottom: 5%;
  }


  .dashboard-container-middle-main-group-list-item-top {
    width: 100%;
    display: flex;
    align-items: center;
    height: 20%;

  }

  .dashboard-container-middle-main-group-list-item-top-name {
    width: 50%;
    display: flex;
    align-items: center;
    margin-left: 10%;
    height: 100%;
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    text-align: center;
  }

  .dashboard-container-middle-main-group-list-item-top-status {
    width: 35%;
    display: flex;
    align-items: center;
    margin-left: 5%;
    height: 100%;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    text-align: center;
    gap: 5px;
    color: var(--youth-green-2);
  }

  .disable {
    color: var(--dark-pink);
  }

  .dashboard-container-middle-main-group-list-item-address {
    width: 65%;
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 5px;
    margin-left: 10%;
    margin-bottom: 2%;
    color: #6e6d6d;
  }

  .dashboard-container-middle-main-group-list-item-book {
    width: 75%;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
    margin-top: 3%;
    font-size: var(--fs-7);
    align-self: flex-start;
    margin-left: 10%;
  }

  .dashboard-container-middle-main-group-list-item-book-t1 {
    font-size: var(--fs-8);
  }

  .dashboard-container-middle-main-group-list-item-book-t2 {
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
  }

  .dashboard-container-middle-main-group-list-item-progressBar-container {
    width: 65%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    margin-top: 6%;
    font-size: var(--fs-7);
    align-self: flex-start;
    margin-left: 10%;
    background-color: rgba(243, 238, 238, 0.8);
    border-radius: var(--radius-10);
    padding: 6%;
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text {
    width: 100%;
    align-self: start;
    display: flex;
    justify-content: space-between;
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text-1 {
    font-size: var(--fs-8);
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text-2 {
    font-weight: var(--fw-600);
  }

  .dashboard-container-middle-main-group-list-item-progressBar {

  }

  /* 进度条容器样式 */
  .progress-bar {
    width: 100%;
    height: 12px;
    background-color: white;
    border-radius: var(--radius-6);
    overflow: hidden;
    margin-top: 5%;

  }

  /* 进度条样式 */
  .progress {
    height: 100%;
    background-image: linear-gradient(to right, #69d9d9, #76e3b9);
    border-radius: var(--radius-6);
    transition: width 0.5s ease;
    position: relative;
  }

  .progress-smaller-than-50 {
    background-image: linear-gradient(to right, #f59aa8, #f3d6c4);
  }

  /* 进度条文字样式 */
  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: bold;
    font-size: 12px;
  }

  .dashboard-container-middle-main-group-list-item-btn-selectd {
    width: 70%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--youth-green-2);
    /*border: var(--youth-green-2) solid 1px;*/
    color: white;
    border-radius: var(--radius-10);
    margin-top: 5%;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    cursor: pointer;
    opacity: 0.9;
    gap: 5px;
  }

  .dashboard-container-middle-main-group-list-item-btn-selectd ion-icon {
    font-size: var(--fs-4);
  }

  .dashboard-container-middle-main-group-list-item-btn {
    width: 70%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*border: var(--youth-green-2) solid 2px;*/
    /*color: var(--youth-green-2);*/
    background-color: var(--youth-blue);
    color: white;
    border-radius: var(--radius-10);
    margin-top: 5%;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: var(--shadow-1);
  }


  .dashboard-container-middle-main-group-list-item-btn::before {
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

  .dashboard-container-middle-main-group-list-item-btn:hover::before {
    width: 100%;
  }

  .dashboard-container-middle-main-group-list-item-btn:hover {
    color: #fff;
  }


  /*dashboard-container-right*/
  .dashboard-container-right {
    flex-grow: 1;
    padding-right: 1.2%;
    overflow-y: scroll;
    /*在火狐浏览器中隐藏滚动条*/
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
  }

  /* 隐藏滚动条 */
  .dashboard-container-right::-webkit-scrollbar {
    width: 0em;
    background-color: #F5F5F5;
  }

  /* 滚动条滑块 */
  .dashboard-container-right::-webkit-scrollbar-thumb {
    background-color: #000000;
    opacity: 0.7;
    max-height: 50px;
  }

  .dashboard-container-right-top {
    width: 100%;
    height: 267px;
    margin-top: 12%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-20);
  }

  .dashboard-container-right-top-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .dashboard-container-right-top-mine {
    width: 80%;
    height: 70px;
    flex-grow: 0;
    display: flex;
    align-items: center;
    margin-top: 8%;
    gap: 20px;
  }

  .dashboard-container-right-top-avatar-container {
    width: 60px;
    height: 60px;
    border-radius: var(--radius-circle);
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-2);
  }

  .dashboard-container-right-top-avatar-container img {
    width: 55px;
    height: 55px;
    border-radius: var(--radius-circle);
    pointer-events: none;
  }

  .dashboard-container-right-top-business {
    flex-grow: 1;
    width: 65%;
  }

  .dashboard-container-right-top-username {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .dashboard-container-right-top-username-main {
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .dashboard-container-right-top-username-sub {
    color: #6e6d6d;
  }

  .dashboard-container-right-split {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-8);
    gap: 8px;
    color: #a6a6a6;
    margin-bottom: 3%;
  }

  .dashboard-container-right-split ion-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-7);
  }

  .dashboard-container-right-top-business-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3%;
  }

  .dashboard-container-right-top-business-text-1 {
    font-size: var(--fs-8);
    color: #6e6d6d;
  }

  .dashboard-container-right-top-business-text-2 {
    font-size: var(--fs-8);
    font-family: var(--ff-almm);
  }

  .dashboard-container-right-top-btn {
    width: 100%;
    height: 38px;
    margin-top: 2%;
    background-color: var(--youth-green-2);
    justify-self: right;
    color: var(--white);
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-8);
  }


  .dashboard-container-right-main {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
    gap: 18px;
  }

  .dashboard-container-right-main-item {
    width: 95%;
    height: 160px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
    transition: 0.5s ease-in-out;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .dashboard-container-right-main-item:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .dashboard-container-right-main-item-top {
    width: 80%;
    margin-top: 5%;
    display: flex;
    gap: 5%;
  }

  .dashboard-container-right-main-item-avatar {
    width: 50px;
    height: 50px;
    flex-grow: 0;
    color: white;
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    border-radius: var(--radius-8);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(30px);
  }

  .main-item-avatar-active {
    background-color: rgba(68, 81, 217, 0.56);
  }

  .main-item-avatar-disabled {
    background-color: rgba(245, 96, 100, 0.8);
  }

  .dashboard-container-right-main-item-avatar-info {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
  }

  .dashboard-container-right-main-item-avatar-info-name {
    font-size: var(--fs-5);
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    margin-top: 1%;

  }

  .dashboard-container-right-main-item-avatar-info-status {
    font-size: var(--fs-8);
    margin-top: 4%;
  }

  .avatar-info-status-active {
    color: var(--youth-green-3);
  }

  .avatar-info-status-disabled {
    color: var(--dark-pink);
  }

  .dashboard-container-right-main-item-avatar-info-status ion-icon {
    font-size: 0.5rem;
  }

  .dashboard-container-right-main-item-main {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: var(--fs-8);
  }

  .dashboard-container-right-main-item-main-item-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .dashboard-container-right-main-item-main-item-text-left {
    color: #818181;
  }

  .dashboard-container-right-main-item-main-item-text-right {
    margin-top: 1%;
  }
}

@media (max-width: 1160px) {

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
.addBox{
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 20px;
  left: 200px;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  background-color: rgba(252, 251, 251, .9);
  box-shadow: var(--shadow-2);
  z-index: 333;
}
  .dashboard-container {
    width: 95%;
    position: relative;
    min-height: 300px; /* 设置初始高度 */
    max-height: 92vh;
    margin-top: 2%;
    /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
    display: flex;
    border-radius: var(--radius-20);
    background: linear-gradient(to right bottom,
    rgba(255, 255, 255, 0.45),
    rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(1px);
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
  }


  .dashboard-container-title {
    width: fit-content;
    height: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    margin-left: 1%;
    margin-bottom: 2%;
  }

  .dashboard-container-title-main {
    font-size: var(--fs-4);
    color: var(--black);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .dashboard-container-title-sub {
    color: #606060;
  }

  /*left：16%*/
  /*middle：62%*/
  /*right：22%*/
  .dashboard-container-middle {
    flex-grow: 1;
    height: 100%;
    padding-left: 1%;
    padding-right: 1%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;

    /*在火狐浏览器中隐藏滚动条*/
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
  }

  /* 隐藏滚动条 */
  .dashboard-container-middle::-webkit-scrollbar {
    width: 0em;
    background-color: #F5F5F5;
  }

  /* 滚动条滑块 */
  .dashboard-container-middle::-webkit-scrollbar-thumb {
    background-color: #000000;
    opacity: 0.7;
    max-height: 50px;
  }

  .dashboard-container-middle::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 92%;
    border-right: #dadada solid 1px;
  }

  .dashboard-container-middle-top {
    width: 95%;
    height: auto;
    margin-top: 4%;
    border-radius: var(--radius-20);
    position: relative;
    display: flex;
  }

  .dashboard-container-middle-top img {
    width: 100%;
    border-radius: var(--radius-20);
    pointer-events: none;
    opacity: 0.65;
  }

  .dashboard-container-middle-top-text {
    position: absolute;
    z-index: 100;
    font-size: var(--fs-3);
    font-weight: var(--fw-600);
    font-family: var(--ff-almm);
    top: 12%;
    left: 8%;
    letter-spacing: 3px;
  }

  .dashboard-container-middle-top-btn-container {
    min-width: 220px;
    position: absolute;
    bottom: 9%;
    left: 8%;
    display: flex;
  }

  .dashboard-container-middle-top-btn {
    width: 100px;
    height: 40px;
    z-index: 100;
    font-size: var(--fs-7);
    background-color: var(--youth-green);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    font-weight: var(--fw-600);
    box-shadow: var(--shadow-2);
    cursor: pointer;
  }

  .dashboard-container-middle-top-btn:is(:hover,:focus-visible) {
    transform: translateY(-5px);
    transition: var(--transition-3);
    box-shadow: var(--shadow-2);
  }

  .dashboard-container-middle-top-btn-right {
    width: fit-content;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-left: 5%;
    margin-bottom: 1%;
    color: #757575;
    font-size: var(--fs-9);
  }


  .dashboard-container-middle-main {
    min-height: 350px;
    width: 95%;
    margin-top: 3%;
  }

  .dashboard-container-middle-main-group-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .dashboard-container-middle-main-group-list-item {
    width: 95%;
    min-width: 200px;
    height: 320px;
    background-color: rgba(252, 251, 251, 0.5);
    box-shadow: var(--shadow-2);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: var(--radius-20);
    margin-bottom: 5%;
  }


  .dashboard-container-middle-main-group-list-item-top {
    width: 100%;
    display: flex;
    align-items: center;
    height: 20%;

  }

  .dashboard-container-middle-main-group-list-item-top-name {
    width: 50%;
    display: flex;
    align-items: center;
    margin-left: 10%;
    height: 100%;
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    text-align: center;
  }

  .dashboard-container-middle-main-group-list-item-top-status {
    width: 35%;
    display: flex;
    align-items: center;
    margin-left: 5%;
    height: 100%;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    text-align: center;
    gap: 5px;
    color: var(--youth-green-2);
  }

  .disable {
    color: var(--dark-pink);
  }

  .dashboard-container-middle-main-group-list-item-address {
    width: 65%;
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 5px;
    margin-left: 10%;
    margin-bottom: 2%;
    color: #6e6d6d;
  }

  .dashboard-container-middle-main-group-list-item-book {
    width: 75%;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
    margin-top: 3%;
    font-size: var(--fs-7);
    align-self: flex-start;
    margin-left: 10%;
  }

  .dashboard-container-middle-main-group-list-item-book-t1 {
    font-size: var(--fs-8);
  }

  .dashboard-container-middle-main-group-list-item-book-t2 {
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
  }

  .dashboard-container-middle-main-group-list-item-progressBar-container {
    width: 65%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    margin-top: 6%;
    font-size: var(--fs-7);
    align-self: flex-start;
    margin-left: 10%;
    background-color: rgba(243, 238, 238, 0.8);
    border-radius: var(--radius-10);
    padding: 6%;
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text {
    width: 100%;
    align-self: start;
    display: flex;
    justify-content: space-between;
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text-1 {
    font-size: var(--fs-8);
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text-2 {
    font-weight: var(--fw-600);
  }

  .dashboard-container-middle-main-group-list-item-progressBar {

  }

  /* 进度条容器样式 */
  .progress-bar {
    width: 100%;
    height: 12px;
    background-color: white;
    border-radius: var(--radius-6);
    overflow: hidden;
    margin-top: 5%;

  }

  /* 进度条样式 */
  .progress {
    height: 100%;
    background-image: linear-gradient(to right, #69d9d9, #76e3b9);
    border-radius: var(--radius-6);
    transition: width 0.5s ease;
    position: relative;
  }

  .progress-smaller-than-50 {
    background-image: linear-gradient(to right, #f59aa8, #f3d6c4);
  }

  /* 进度条文字样式 */
  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: bold;
    font-size: 12px;
  }

  .dashboard-container-middle-main-group-list-item-btn-selectd {
    width: 70%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--youth-green-2);
    /*border: var(--youth-green-2) solid 1px;*/
    color: white;
    border-radius: var(--radius-10);
    margin-bottom: 2%;

    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    cursor: pointer;
    opacity: 0.9;
    gap: 5px;
  }

  .dashboard-container-middle-main-group-list-item-btn-selectd ion-icon {
    font-size: var(--fs-4);
  }

  .dashboard-container-middle-main-group-list-item-btn {
    width: 70%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*border: var(--youth-green-2) solid 2px;*/
    /*color: var(--youth-green-2);*/
    background-color: var(--youth-blue);
    color: white;
    border-radius: var(--radius-10);
    margin-bottom: 2%;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: var(--shadow-1);
  }


  .dashboard-container-middle-main-group-list-item-btn::before {
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

  .dashboard-container-middle-main-group-list-item-btn:hover::before {
    width: 100%;
  }

  .dashboard-container-middle-main-group-list-item-btn:hover {
    color: #fff;
  }


  /*dashboard-container-right*/
  .dashboard-container-right {
    /*flex-grow: 1;*/
    padding-right: 1.2%;
    overflow-y: scroll;
    /*在火狐浏览器中隐藏滚动条*/
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
    display: none;
  }

  /* 隐藏滚动条 */
  .dashboard-container-right::-webkit-scrollbar {
    width: 0em;
    background-color: #F5F5F5;
  }

  /* 滚动条滑块 */
  .dashboard-container-right::-webkit-scrollbar-thumb {
    background-color: #000000;
    opacity: 0.7;
    max-height: 50px;
  }

  .dashboard-container-right-top {
    width: 100%;
    height: 267px;
    margin-top: 12%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-20);
  }

  .dashboard-container-right-top-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .dashboard-container-right-top-mine {
    width: 80%;
    height: 70px;
    flex-grow: 0;
    display: flex;
    align-items: center;
    margin-top: 8%;
    gap: 20px;
  }

  .dashboard-container-right-top-avatar-container {
    width: 60px;
    height: 60px;
    border-radius: var(--radius-circle);
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-2);
  }

  .dashboard-container-right-top-avatar-container img {
    width: 55px;
    height: 55px;
    border-radius: var(--radius-circle);
    pointer-events: none;
  }

  .dashboard-container-right-top-business {
    flex-grow: 1;
    width: 65%;
  }

  .dashboard-container-right-top-username {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .dashboard-container-right-top-username-main {
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .dashboard-container-right-top-username-sub {
    color: #6e6d6d;
  }

  .dashboard-container-right-split {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-8);
    gap: 8px;
    color: #a6a6a6;
    margin-bottom: 3%;
  }

  .dashboard-container-right-split ion-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-7);
  }

  .dashboard-container-right-top-business-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3%;
  }

  .dashboard-container-right-top-business-text-1 {
    font-size: var(--fs-8);
    color: #6e6d6d;
  }

  .dashboard-container-right-top-business-text-2 {
    font-size: var(--fs-8);
    font-family: var(--ff-almm);
  }

  .dashboard-container-right-top-btn {
    width: 100%;
    height: 38px;
    margin-top: 2%;
    background-color: var(--youth-green-2);
    justify-self: right;
    color: var(--white);
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-8);
  }


  .dashboard-container-right-main {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
    gap: 18px;
  }

  .dashboard-container-right-main-item {
    width: 95%;
    height: 160px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
    transition: 0.5s ease-in-out;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .dashboard-container-right-main-item:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .dashboard-container-right-main-item-top {
    width: 80%;
    margin-top: 5%;
    display: flex;
    gap: 5%;
  }

  .dashboard-container-right-main-item-avatar {
    width: 50px;
    height: 50px;
    flex-grow: 0;
    color: white;
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    border-radius: var(--radius-8);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(30px);
  }

  .main-item-avatar-active {
    background-color: rgba(68, 81, 217, 0.56);
  }

  .main-item-avatar-disabled {
    background-color: rgba(245, 96, 100, 0.8);
  }

  .dashboard-container-right-main-item-avatar-info {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
  }

  .dashboard-container-right-main-item-avatar-info-name {
    font-size: var(--fs-5);
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    margin-top: 1%;

  }

  .dashboard-container-right-main-item-avatar-info-status {
    font-size: var(--fs-8);
    margin-top: 4%;
  }

  .avatar-info-status-active {
    color: var(--youth-green-3);
  }

  .avatar-info-status-disabled {
    color: var(--dark-pink);
  }

  .dashboard-container-right-main-item-avatar-info-status ion-icon {
    font-size: 0.5rem;
  }

  .dashboard-container-right-main-item-main {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: var(--fs-8);
  }

  .dashboard-container-right-main-item-main-item-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .dashboard-container-right-main-item-main-item-text-left {
    color: #818181;
  }

  .dashboard-container-right-main-item-main-item-text-right {
    margin-top: 1%;
  }

  .dashboard-container-right-main-item {
    width: 95%;
    height: 180px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
    transition: 0.5s ease-in-out;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

@media (max-width: 650px) {

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
.addBox{
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 350px;
  left: 1px;
  width: 340px;
  height: 300px;
  border-radius: 10px;
  background-color: rgba(252, 251, 251, .9);
  box-shadow: var(--shadow-2);
  z-index: 333;
}
  .dashboard-container {
    width: 95%;
    position: relative;
    min-height: 300px; /* 设置初始高度 */
    max-height: 92vh;
    margin-top: 2%;
    /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
    display: flex;
    border-radius: var(--radius-20);
    background: linear-gradient(to right bottom,
    rgba(255, 255, 255, 0.45),
    rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(1px);
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
  }


  .dashboard-container-title {
    width: fit-content;
    height: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    margin-left: 1%;
    margin-bottom: 2%;
  }

  .dashboard-container-title-main {
    font-size: var(--fs-4);
    color: var(--black);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .dashboard-container-title-sub {
    color: #606060;
  }

  /*left：16%*/
  /*middle：62%*/
  /*right：22%*/
  .dashboard-container-middle {
    flex-grow: 1;
    height: 100%;
    padding-left: 1%;
    padding-right: 1%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;

    /*在火狐浏览器中隐藏滚动条*/
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
  }

  /* 隐藏滚动条 */
  .dashboard-container-middle::-webkit-scrollbar {
    width: 0em;
    background-color: #F5F5F5;
  }

  /* 滚动条滑块 */
  .dashboard-container-middle::-webkit-scrollbar-thumb {
    background-color: #000000;
    opacity: 0.7;
    max-height: 50px;
  }

  .dashboard-container-middle::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 92%;
    border-right: #dadada solid 1px;
  }

  .dashboard-container-middle-top {
    width: 95%;
    height: auto;
    margin-top: 4%;
    border-radius: var(--radius-20);
    position: relative;
    display: flex;
  }

  .dashboard-container-middle-top img {
    width: 100%;
    border-radius: var(--radius-20);
    pointer-events: none;
    opacity: 0.65;
  }

  .dashboard-container-middle-top-text {
    position: absolute;
    z-index: 100;
    font-size: var(--fs-4);
    font-weight: var(--fw-600);
    font-family: var(--ff-almm);
    top: 12%;
    left: 8%;
    letter-spacing: 3px;
  }

  .dashboard-container-middle-top-btn-container {
    min-width: 220px;
    position: absolute;
    bottom: 9%;
    left: 8%;
    display: flex;
  }

  .dashboard-container-middle-top-btn {
    width: 90px;
    height: 35px;
    z-index: 100;
    font-size: var(--fs-8);
    background-color: var(--youth-green);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    font-weight: var(--fw-600);
    box-shadow: var(--shadow-2);
    cursor: pointer;
  }

  .dashboard-container-middle-top-btn:is(:hover,:focus-visible) {
    transform: translateY(-5px);
    transition: var(--transition-3);
    box-shadow: var(--shadow-2);
  }

  .dashboard-container-middle-top-btn-right {
    width: fit-content;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-left: 5%;
    margin-bottom: 1%;
    color: #757575;
    font-size: var(--fs-9);
  }


  .dashboard-container-middle-main {
    min-height: 350px;
    width: 95%;
    margin-top: 3%;
  }

  .dashboard-container-middle-main-group-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .dashboard-container-middle-main-group-list-item {
    width: 95%;
    min-width: 200px;
    height: 320px;
    background-color: rgba(252, 251, 251, 0.5);
    box-shadow: var(--shadow-2);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: var(--radius-20);
    margin-bottom: 5%;
  }


  .dashboard-container-middle-main-group-list-item-top {
    width: 100%;
    display: flex;
    align-items: center;
    height: 20%;

  }

  .dashboard-container-middle-main-group-list-item-top-name {
    width: 50%;
    display: flex;
    align-items: center;
    margin-left: 10%;
    height: 100%;
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    text-align: center;
  }

  .dashboard-container-middle-main-group-list-item-top-status {
    width: 35%;
    display: flex;
    align-items: center;
    margin-left: 5%;
    height: 100%;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    text-align: center;
    gap: 5px;
    color: var(--youth-green-2);
  }

  .disable {
    color: var(--dark-pink);
  }

  .dashboard-container-middle-main-group-list-item-address {
    width: 65%;
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 5px;
    margin-left: 10%;
    margin-bottom: 2%;
    color: #6e6d6d;
  }

  .dashboard-container-middle-main-group-list-item-book {
    width: 75%;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
    margin-top: 3%;
    font-size: var(--fs-7);
    align-self: flex-start;
    margin-left: 10%;
  }

  .dashboard-container-middle-main-group-list-item-book-t1 {
    font-size: var(--fs-8);
  }

  .dashboard-container-middle-main-group-list-item-book-t2 {
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
  }

  .dashboard-container-middle-main-group-list-item-progressBar-container {
    width: 65%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    margin-top: 6%;
    font-size: var(--fs-7);
    align-self: flex-start;
    margin-left: 10%;
    background-color: rgba(243, 238, 238, 0.8);
    border-radius: var(--radius-10);
    padding: 6%;
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text {
    width: 100%;
    align-self: start;
    display: flex;
    justify-content: space-between;
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text-1 {
    font-size: var(--fs-8);
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text-2 {
    font-weight: var(--fw-600);
  }

  .dashboard-container-middle-main-group-list-item-progressBar {

  }

  /* 进度条容器样式 */
  .progress-bar {
    width: 100%;
    height: 12px;
    background-color: white;
    border-radius: var(--radius-6);
    overflow: hidden;
    margin-top: 5%;

  }

  /* 进度条样式 */
  .progress {
    height: 100%;
    background-image: linear-gradient(to right, #69d9d9, #76e3b9);
    border-radius: var(--radius-6);
    transition: width 0.5s ease;
    position: relative;
  }

  .progress-smaller-than-50 {
    background-image: linear-gradient(to right, #f59aa8, #f3d6c4);
  }

  /* 进度条文字样式 */
  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: bold;
    font-size: 12px;
  }

  .dashboard-container-middle-main-group-list-item-btn-selectd {
    width: 70%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--youth-green-2);
    /*border: var(--youth-green-2) solid 1px;*/
    color: white;
    border-radius: var(--radius-10);
    margin-bottom: 2%;

    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    cursor: pointer;
    opacity: 0.9;
    gap: 5px;
  }

  .dashboard-container-middle-main-group-list-item-btn-selectd ion-icon {
    font-size: var(--fs-4);
  }

  .dashboard-container-middle-main-group-list-item-btn {
    width: 70%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*border: var(--youth-green-2) solid 2px;*/
    /*color: var(--youth-green-2);*/
    background-color: var(--youth-blue);
    color: white;
    border-radius: var(--radius-10);
    margin-bottom: 2%;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: var(--shadow-1);
  }


  .dashboard-container-middle-main-group-list-item-btn::before {
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

  .dashboard-container-middle-main-group-list-item-btn:hover::before {
    width: 100%;
  }

  .dashboard-container-middle-main-group-list-item-btn:hover {
    color: #fff;
  }


  /*dashboard-container-right*/
  .dashboard-container-right {
    /*flex-grow: 1;*/
    padding-right: 1.2%;
    overflow-y: scroll;
    /*在火狐浏览器中隐藏滚动条*/
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
    display: none;
  }

  /* 隐藏滚动条 */
  .dashboard-container-right::-webkit-scrollbar {
    width: 0em;
    background-color: #F5F5F5;
  }

  /* 滚动条滑块 */
  .dashboard-container-right::-webkit-scrollbar-thumb {
    background-color: #000000;
    opacity: 0.7;
    max-height: 50px;
  }

  .dashboard-container-right-top {
    width: 100%;
    height: 267px;
    margin-top: 12%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-20);
  }

  .dashboard-container-right-top-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .dashboard-container-right-top-mine {
    width: 80%;
    height: 70px;
    flex-grow: 0;
    display: flex;
    align-items: center;
    margin-top: 8%;
    gap: 20px;
  }

  .dashboard-container-right-top-avatar-container {
    width: 60px;
    height: 60px;
    border-radius: var(--radius-circle);
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-2);
  }

  .dashboard-container-right-top-avatar-container img {
    width: 55px;
    height: 55px;
    border-radius: var(--radius-circle);
    pointer-events: none;
  }

  .dashboard-container-right-top-business {
    flex-grow: 1;
    width: 65%;
  }

  .dashboard-container-right-top-username {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .dashboard-container-right-top-username-main {
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .dashboard-container-right-top-username-sub {
    color: #6e6d6d;
  }

  .dashboard-container-right-split {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-8);
    gap: 8px;
    color: #a6a6a6;
    margin-bottom: 3%;
  }

  .dashboard-container-right-split ion-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-7);
  }

  .dashboard-container-right-top-business-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3%;
  }

  .dashboard-container-right-top-business-text-1 {
    font-size: var(--fs-8);
    color: #6e6d6d;
  }

  .dashboard-container-right-top-business-text-2 {
    font-size: var(--fs-8);
    font-family: var(--ff-almm);
  }

  .dashboard-container-right-top-btn {
    width: 100%;
    height: 38px;
    margin-top: 2%;
    background-color: var(--youth-green-2);
    justify-self: right;
    color: var(--white);
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-8);
  }


  .dashboard-container-right-main {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
    gap: 18px;
  }

  .dashboard-container-right-main-item {
    width: 95%;
    height: 160px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
    transition: 0.5s ease-in-out;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .dashboard-container-right-main-item:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .dashboard-container-right-main-item-top {
    width: 80%;
    margin-top: 5%;
    display: flex;
    gap: 5%;
  }

  .dashboard-container-right-main-item-avatar {
    width: 50px;
    height: 50px;
    flex-grow: 0;
    color: white;
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    border-radius: var(--radius-8);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(30px);
  }

  .main-item-avatar-active {
    background-color: rgba(68, 81, 217, 0.56);
  }

  .main-item-avatar-disabled {
    background-color: rgba(245, 96, 100, 0.8);
  }

  .dashboard-container-right-main-item-avatar-info {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
  }

  .dashboard-container-right-main-item-avatar-info-name {
    font-size: var(--fs-5);
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    margin-top: 1%;

  }

  .dashboard-container-right-main-item-avatar-info-status {
    font-size: var(--fs-8);
    margin-top: 4%;
  }

  .avatar-info-status-active {
    color: var(--youth-green-3);
  }

  .avatar-info-status-disabled {
    color: var(--dark-pink);
  }

  .dashboard-container-right-main-item-avatar-info-status ion-icon {
    font-size: 0.5rem;
  }

  .dashboard-container-right-main-item-main {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: var(--fs-8);
  }

  .dashboard-container-right-main-item-main-item-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .dashboard-container-right-main-item-main-item-text-left {
    color: #818181;
  }

  .dashboard-container-right-main-item-main-item-text-right {
    margin-top: 1%;
  }
}

@media (max-width: 545px) {

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
    position: relative;
    min-height: 300px; /* 设置初始高度 */
    max-height: 92vh;
    margin-top: 2%;
    /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
    display: flex;
    border-radius: var(--radius-20);
    background: linear-gradient(to right bottom,
    rgba(255, 255, 255, 0.45),
    rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(1px);
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
  }


  .dashboard-container-title {
    width: fit-content;
    height: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    margin-left: 1%;
    margin-bottom: 2%;
  }

  .dashboard-container-title-main {
    font-size: var(--fs-4);
    color: var(--black);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .dashboard-container-title-sub {
    color: #606060;
  }

  /*left：16%*/
  /*middle：62%*/
  /*right：22%*/
  .dashboard-container-middle {
    flex-grow: 1;
    height: 100%;
    padding-left: 1%;
    padding-right: 1%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;

    /*在火狐浏览器中隐藏滚动条*/
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
  }

  /* 隐藏滚动条 */
  .dashboard-container-middle::-webkit-scrollbar {
    width: 0em;
    background-color: #F5F5F5;
  }

  /* 滚动条滑块 */
  .dashboard-container-middle::-webkit-scrollbar-thumb {
    background-color: #000000;
    opacity: 0.7;
    max-height: 50px;
  }

  .dashboard-container-middle::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 92%;
    border-right: #dadada solid 1px;
  }

  .dashboard-container-middle-top {
    width: 95%;
    height: auto;
    margin-top: 4%;
    border-radius: var(--radius-20);
    position: relative;
    display: flex;
  }

  .dashboard-container-middle-top img {
    width: 100%;
    border-radius: var(--radius-20);
    pointer-events: none;
    opacity: 0.65;
  }

  .dashboard-container-middle-top-text {
    position: absolute;
    z-index: 100;
    font-size: var(--fs-4);
    font-weight: var(--fw-600);
    font-family: var(--ff-almm);
    top: 15%;
    left: 8%;
    letter-spacing: 3px;
  }

  .dashboard-container-middle-top-btn-container {
    min-width: 220px;
    position: absolute;
    bottom: 9%;
    left: 8%;
    display: flex;
  }

  .dashboard-container-middle-top-btn {
    display: none;
    width: 90px;
    height: 35px;
    z-index: 100;
    font-size: var(--fs-8);
    background-color: var(--youth-green);
    color: var(--white);
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    font-weight: var(--fw-600);
    box-shadow: var(--shadow-2);
    cursor: pointer;
  }

  .dashboard-container-middle-top-btn:is(:hover,:focus-visible) {
    transform: translateY(-5px);
    transition: var(--transition-3);
    box-shadow: var(--shadow-2);
  }

  .dashboard-container-middle-top-btn-right {
    width: fit-content;
    /*display: flex;*/
    /*align-items: flex-end;*/
    /*justify-content: center;*/
    display: none;
    margin-left: 5%;
    margin-bottom: 1%;
    color: #757575;
    font-size: var(--fs-9);
  }


  .dashboard-container-middle-main {
    min-height: 350px;
    width: 95%;
    margin-top: 3%;
  }

  .dashboard-container-middle-main-group-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr;
  }

  .dashboard-container-middle-main-group-list-item {
    width: 95%;
    min-width: 200px;
    height: 320px;
    background-color: rgba(252, 251, 251, 0.5);
    box-shadow: var(--shadow-2);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: var(--radius-20);
    margin-bottom: 5%;
  }


  .dashboard-container-middle-main-group-list-item-top {
    width: 100%;
    display: flex;
    align-items: center;
    height: 20%;

  }

  .dashboard-container-middle-main-group-list-item-top-name {
    width: 50%;
    display: flex;
    align-items: center;
    margin-left: 10%;
    height: 100%;
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    text-align: center;
  }

  .dashboard-container-middle-main-group-list-item-top-status {
    width: 35%;
    display: flex;
    align-items: center;
    margin-left: 5%;
    height: 100%;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    text-align: center;
    gap: 5px;
    color: var(--youth-green-2);
  }

  .disable {
    color: var(--dark-pink);
  }

  .dashboard-container-middle-main-group-list-item-address {
    width: 65%;
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 5px;
    margin-left: 10%;
    margin-bottom: 2%;
    color: #6e6d6d;
  }

  .dashboard-container-middle-main-group-list-item-book {
    width: 75%;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
    margin-top: 3%;
    font-size: var(--fs-7);
    align-self: flex-start;
    margin-left: 10%;
  }

  .dashboard-container-middle-main-group-list-item-book-t1 {
    font-size: var(--fs-8);
  }

  .dashboard-container-middle-main-group-list-item-book-t2 {
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
  }

  .dashboard-container-middle-main-group-list-item-progressBar-container {
    width: 65%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    margin-top: 6%;
    font-size: var(--fs-7);
    align-self: flex-start;
    margin-left: 10%;
    background-color: rgba(243, 238, 238, 0.8);
    border-radius: var(--radius-10);
    padding: 6%;
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text {
    width: 100%;
    align-self: start;
    display: flex;
    justify-content: space-between;
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text-1 {
    font-size: var(--fs-8);
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text-2 {
    font-weight: var(--fw-600);
  }

  .dashboard-container-middle-main-group-list-item-progressBar {

  }

  /* 进度条容器样式 */
  .progress-bar {
    width: 100%;
    height: 12px;
    background-color: white;
    border-radius: var(--radius-6);
    overflow: hidden;
    margin-top: 5%;

  }

  /* 进度条样式 */
  .progress {
    height: 100%;
    background-image: linear-gradient(to right, #69d9d9, #76e3b9);
    border-radius: var(--radius-6);
    transition: width 0.5s ease;
    position: relative;
  }

  .progress-smaller-than-50 {
    background-image: linear-gradient(to right, #f59aa8, #f3d6c4);
  }

  /* 进度条文字样式 */
  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: bold;
    font-size: 12px;
  }

  .dashboard-container-middle-main-group-list-item-btn-selectd {
    width: 70%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--youth-green-2);
    /*border: var(--youth-green-2) solid 1px;*/
    color: white;
    border-radius: var(--radius-10);
    margin-bottom: 3%;

    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    cursor: pointer;
    opacity: 0.9;
    gap: 5px;
  }

  .dashboard-container-middle-main-group-list-item-btn-selectd ion-icon {
    font-size: var(--fs-4);
  }

  .dashboard-container-middle-main-group-list-item-btn {
    width: 70%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*border: var(--youth-green-2) solid 2px;*/
    /*color: var(--youth-green-2);*/
    background-color: var(--youth-blue);
    color: white;
    border-radius: var(--radius-10);
    margin-bottom: 2%;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: var(--shadow-1);
  }


  .dashboard-container-middle-main-group-list-item-btn::before {
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

  .dashboard-container-middle-main-group-list-item-btn:hover::before {
    width: 100%;
  }

  .dashboard-container-middle-main-group-list-item-btn:hover {
    color: #fff;
  }


  /*dashboard-container-right*/
  .dashboard-container-right {
    /*flex-grow: 1;*/
    padding-right: 1.2%;
    overflow-y: scroll;
    /*在火狐浏览器中隐藏滚动条*/
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
    display: none;
  }

  /* 隐藏滚动条 */
  .dashboard-container-right::-webkit-scrollbar {
    width: 0em;
    background-color: #F5F5F5;
  }

  /* 滚动条滑块 */
  .dashboard-container-right::-webkit-scrollbar-thumb {
    background-color: #000000;
    opacity: 0.7;
    max-height: 50px;
  }

  .dashboard-container-right-top {
    width: 100%;
    height: 267px;
    margin-top: 12%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-20);
  }

  .dashboard-container-right-top-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .dashboard-container-right-top-mine {
    width: 80%;
    height: 70px;
    flex-grow: 0;
    display: flex;
    align-items: center;
    margin-top: 8%;
    gap: 20px;
  }

  .dashboard-container-right-top-avatar-container {
    width: 60px;
    height: 60px;
    border-radius: var(--radius-circle);
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-2);
  }

  .dashboard-container-right-top-avatar-container img {
    width: 55px;
    height: 55px;
    border-radius: var(--radius-circle);
    pointer-events: none;
  }

  .dashboard-container-right-top-business {
    flex-grow: 1;
    width: 65%;
  }

  .dashboard-container-right-top-username {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .dashboard-container-right-top-username-main {
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .dashboard-container-right-top-username-sub {
    color: #6e6d6d;
  }

  .dashboard-container-right-split {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-8);
    gap: 8px;
    color: #a6a6a6;
    margin-bottom: 3%;
  }

  .dashboard-container-right-split ion-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-7);
  }

  .dashboard-container-right-top-business-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3%;
  }

  .dashboard-container-right-top-business-text-1 {
    font-size: var(--fs-8);
    color: #6e6d6d;
  }

  .dashboard-container-right-top-business-text-2 {
    font-size: var(--fs-8);
    font-family: var(--ff-almm);
  }

  .dashboard-container-right-top-btn {
    width: 100%;
    height: 38px;
    margin-top: 2%;
    background-color: var(--youth-green-2);
    justify-self: right;
    color: var(--white);
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-8);
  }


  .dashboard-container-right-main {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
    gap: 18px;
  }

  .dashboard-container-right-main-item {
    width: 95%;
    height: 160px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
    transition: 0.5s ease-in-out;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .dashboard-container-right-main-item:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .dashboard-container-right-main-item-top {
    width: 80%;
    margin-top: 5%;
    display: flex;
    gap: 5%;
  }

  .dashboard-container-right-main-item-avatar {
    width: 50px;
    height: 50px;
    flex-grow: 0;
    color: white;
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    border-radius: var(--radius-8);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(30px);
  }

  .main-item-avatar-active {
    background-color: rgba(68, 81, 217, 0.56);
  }

  .main-item-avatar-disabled {
    background-color: rgba(245, 96, 100, 0.8);
  }

  .dashboard-container-right-main-item-avatar-info {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
  }

  .dashboard-container-right-main-item-avatar-info-name {
    font-size: var(--fs-5);
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    margin-top: 1%;

  }

  .dashboard-container-right-main-item-avatar-info-status {
    font-size: var(--fs-8);
    margin-top: 4%;
  }

  .avatar-info-status-active {
    color: var(--youth-green-3);
  }

  .avatar-info-status-disabled {
    color: var(--dark-pink);
  }

  .dashboard-container-right-main-item-avatar-info-status ion-icon {
    font-size: 0.5rem;
  }

  .dashboard-container-right-main-item-main {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: var(--fs-8);
  }

  .dashboard-container-right-main-item-main-item-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .dashboard-container-right-main-item-main-item-text-left {
    color: #818181;
  }

  .dashboard-container-right-main-item-main-item-text-right {
    margin-top: 1%;
  }


  .dashboard-drawer-right {
    background-color: #fff;
    position: absolute;
    width: 60%;
    height: 100%;
    top: 0;
    right: 0;
    overflow-y: scroll;
    box-shadow: var(--shadow-2);
    display: none;
    z-index: 1000;
  }


}

@media (max-width: 370px) {

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
    position: relative;
    min-height: 300px; /* 设置初始高度 */
    max-height: 92vh;
    margin-top: 2%;
    /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
    display: flex;
    border-radius: var(--radius-20);
    background: linear-gradient(to right bottom,
    rgba(255, 255, 255, 0.45),
    rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(1px);
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
  }


  .dashboard-container-title {
    width: fit-content;
    height: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    margin-left: 1%;
    margin-bottom: 2%;
  }

  .dashboard-container-title-main {
    font-size: var(--fs-4);
    color: var(--black);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .dashboard-container-title-sub {
    color: #606060;
  }

  /*left：16%*/
  /*middle：62%*/
  /*right：22%*/
  .dashboard-container-middle {
    flex-grow: 1;
    height: 100%;
    padding-left: 1%;
    padding-right: 1%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;

    /*在火狐浏览器中隐藏滚动条*/
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
  }

  /* 隐藏滚动条 */
  .dashboard-container-middle::-webkit-scrollbar {
    width: 0em;
    background-color: #F5F5F5;
  }

  /* 滚动条滑块 */
  .dashboard-container-middle::-webkit-scrollbar-thumb {
    background-color: #000000;
    opacity: 0.7;
    max-height: 50px;
  }

  .dashboard-container-middle::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 92%;
    border-right: #dadada solid 1px;
  }

  .dashboard-container-middle-top {
    width: 95%;
    height: auto;
    margin-top: 4%;
    border-radius: var(--radius-20);
    position: relative;
    display: flex;
  }

  .dashboard-container-middle-top img {
    width: 100%;
    border-radius: var(--radius-20);
    pointer-events: none;
    opacity: 0.65;
  }

  .dashboard-container-middle-top-text {
    position: absolute;
    z-index: 100;
    font-size: var(--fs-4);
    font-weight: var(--fw-600);
    font-family: var(--ff-almm);
    top: 15%;
    left: 8%;
    letter-spacing: 3px;
  }

  .dashboard-container-middle-top-btn-container {
    min-width: 220px;
    position: absolute;
    bottom: 9%;
    left: 8%;
    display: flex;
  }

  .dashboard-container-middle-top-btn {
    display: none;
    width: 90px;
    height: 35px;
    z-index: 100;
    font-size: var(--fs-8);
    background-color: var(--youth-green);
    color: var(--white);
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    font-weight: var(--fw-600);
    box-shadow: var(--shadow-2);
    cursor: pointer;
  }

  .dashboard-container-middle-top-btn:is(:hover,:focus-visible) {
    transform: translateY(-5px);
    transition: var(--transition-3);
    box-shadow: var(--shadow-2);
  }

  .dashboard-container-middle-top-btn-right {
    width: fit-content;
    /*display: flex;*/
    /*align-items: flex-end;*/
    /*justify-content: center;*/
    display: none;
    margin-left: 5%;
    margin-bottom: 1%;
    color: #757575;
    font-size: var(--fs-9);
  }


  .dashboard-container-middle-main {
    min-height: 350px;
    width: 95%;
    margin-top: 3%;
  }

  .dashboard-container-middle-main-group-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr;
  }

  .dashboard-container-middle-main-group-list-item {
    width: 95%;
    min-width: 200px;
    height: 320px;
    background-color: rgba(252, 251, 251, 0.5);
    box-shadow: var(--shadow-2);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: var(--radius-20);
    margin-bottom: 5%;
  }


  .dashboard-container-middle-main-group-list-item-top {
    width: 100%;
    display: flex;
    align-items: center;
    height: 20%;

  }

  .dashboard-container-middle-main-group-list-item-top-name {
    width: 50%;
    display: flex;
    align-items: center;
    margin-left: 10%;
    height: 100%;
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    text-align: center;
  }

  .dashboard-container-middle-main-group-list-item-top-status {
    width: 35%;
    display: flex;
    align-items: center;
    margin-left: 5%;
    height: 100%;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    text-align: center;
    gap: 5px;
    color: var(--youth-green-2);
  }

  .disable {
    color: var(--dark-pink);
  }

  .dashboard-container-middle-main-group-list-item-address {
    width: 65%;
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 5px;
    margin-left: 10%;
    margin-bottom: 2%;
    color: #6e6d6d;
  }

  .dashboard-container-middle-main-group-list-item-book {
    width: 75%;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
    margin-top: 3%;
    font-size: var(--fs-7);
    align-self: flex-start;
    margin-left: 10%;
  }

  .dashboard-container-middle-main-group-list-item-book-t1 {
    font-size: var(--fs-8);
  }

  .dashboard-container-middle-main-group-list-item-book-t2 {
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
  }

  .dashboard-container-middle-main-group-list-item-progressBar-container {
    width: 65%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    margin-top: 6%;
    font-size: var(--fs-7);
    align-self: flex-start;
    margin-left: 10%;
    background-color: rgba(243, 238, 238, 0.8);
    border-radius: var(--radius-10);
    padding: 6%;
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text {
    width: 100%;
    align-self: start;
    display: flex;
    justify-content: space-between;
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text-1 {
    font-size: var(--fs-8);
  }

  .dashboard-container-middle-main-group-list-item-progressBar-text-2 {
    font-weight: var(--fw-600);
  }

  .dashboard-container-middle-main-group-list-item-progressBar {

  }

  /* 进度条容器样式 */
  .progress-bar {
    width: 100%;
    height: 12px;
    background-color: white;
    border-radius: var(--radius-6);
    overflow: hidden;
    margin-top: 5%;

  }

  /* 进度条样式 */
  .progress {
    height: 100%;
    background-image: linear-gradient(to right, #69d9d9, #76e3b9);
    border-radius: var(--radius-6);
    transition: width 0.5s ease;
    position: relative;
  }

  .progress-smaller-than-50 {
    background-image: linear-gradient(to right, #f59aa8, #f3d6c4);
  }

  /* 进度条文字样式 */
  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: bold;
    font-size: 12px;
  }

  .dashboard-container-middle-main-group-list-item-btn-selectd {
    width: 70%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--youth-green-2);
    /*border: var(--youth-green-2) solid 1px;*/
    color: white;
    border-radius: var(--radius-10);
    margin-bottom: 3%;

    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    cursor: pointer;
    opacity: 0.9;
    gap: 5px;
  }

  .dashboard-container-middle-main-group-list-item-btn-selectd ion-icon {
    font-size: var(--fs-4);
  }

  .dashboard-container-middle-main-group-list-item-btn {
    width: 70%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*border: var(--youth-green-2) solid 2px;*/
    /*color: var(--youth-green-2);*/
    background-color: var(--youth-blue);
    color: white;
    border-radius: var(--radius-10);
    margin-bottom: 2%;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: var(--shadow-1);
  }


  .dashboard-container-middle-main-group-list-item-btn::before {
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

  .dashboard-container-middle-main-group-list-item-btn:hover::before {
    width: 100%;
  }

  .dashboard-container-middle-main-group-list-item-btn:hover {
    color: #fff;
  }


  /*dashboard-container-right*/
  .dashboard-container-right {
    /*flex-grow: 1;*/
    padding-right: 1.2%;
    overflow-y: scroll;
    /*在火狐浏览器中隐藏滚动条*/
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
    display: none;
  }

  /* 隐藏滚动条 */
  .dashboard-container-right::-webkit-scrollbar {
    width: 0em;
    background-color: #F5F5F5;
  }

  /* 滚动条滑块 */
  .dashboard-container-right::-webkit-scrollbar-thumb {
    background-color: #000000;
    opacity: 0.7;
    max-height: 50px;
  }

  .dashboard-container-right-top {
    width: 100%;
    height: 267px;
    margin-top: 12%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-20);
  }

  .dashboard-container-right-top-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .dashboard-container-right-top-mine {
    width: 80%;
    height: 70px;
    flex-grow: 0;
    display: flex;
    align-items: center;
    margin-top: 8%;
    gap: 20px;
  }

  .dashboard-container-right-top-avatar-container {
    width: 60px;
    height: 60px;
    border-radius: var(--radius-circle);
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-2);
  }

  .dashboard-container-right-top-avatar-container img {
    width: 55px;
    height: 55px;
    border-radius: var(--radius-circle);
    pointer-events: none;
  }

  .dashboard-container-right-top-business {
    flex-grow: 1;
    width: 65%;
  }

  .dashboard-container-right-top-username {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .dashboard-container-right-top-username-main {
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .dashboard-container-right-top-username-sub {
    color: #6e6d6d;
  }

  .dashboard-container-right-split {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-8);
    gap: 8px;
    color: #a6a6a6;
    margin-bottom: 3%;
  }

  .dashboard-container-right-split ion-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-7);
  }

  .dashboard-container-right-top-business-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3%;
  }

  .dashboard-container-right-top-business-text-1 {
    font-size: var(--fs-8);
    color: #6e6d6d;
  }

  .dashboard-container-right-top-business-text-2 {
    font-size: var(--fs-8);
    font-family: var(--ff-almm);
  }

  .dashboard-container-right-top-btn {
    width: 100%;
    height: 38px;
    margin-top: 2%;
    background-color: var(--youth-green-2);
    justify-self: right;
    color: var(--white);
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-8);
  }


  .dashboard-container-right-main {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
    gap: 18px;
  }

  .dashboard-container-right-main-item {
    width: 95%;
    height: 160px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
    transition: 0.5s ease-in-out;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .dashboard-container-right-main-item:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .dashboard-container-right-main-item-top {
    width: 80%;
    margin-top: 5%;
    display: flex;
    gap: 5%;
  }

  .dashboard-container-right-main-item-avatar {
    width: 50px;
    height: 50px;
    flex-grow: 0;
    color: white;
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    border-radius: var(--radius-8);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(30px);
  }

  .main-item-avatar-active {
    background-color: rgba(68, 81, 217, 0.56);
  }

  .main-item-avatar-disabled {
    background-color: rgba(245, 96, 100, 0.8);
  }

  .dashboard-container-right-main-item-avatar-info {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
  }

  .dashboard-container-right-main-item-avatar-info-name {
    font-size: var(--fs-5);
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    margin-top: 1%;

  }

  .dashboard-container-right-main-item-avatar-info-status {
    font-size: var(--fs-8);
    margin-top: 4%;
  }

  .avatar-info-status-active {
    color: var(--youth-green-3);
  }

  .avatar-info-status-disabled {
    color: var(--dark-pink);
  }

  .dashboard-container-right-main-item-avatar-info-status ion-icon {
    font-size: 0.5rem;
  }

  .dashboard-container-right-main-item-main {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: var(--fs-8);
  }

  .dashboard-container-right-main-item-main-item-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .dashboard-container-right-main-item-main-item-text-left {
    color: #818181;
  }

  .dashboard-container-right-main-item-main-item-text-right {
    margin-top: 1%;
  }


  .dashboard-drawer-right {
    background-color: #fff;
    position: absolute;
    width: 80%;
    height: 100%;
    top: 0;
    right: 0;
    overflow-y: scroll;
    box-shadow: var(--shadow-2);
    display: none;
    z-index: 1000;
  }


}


</style>