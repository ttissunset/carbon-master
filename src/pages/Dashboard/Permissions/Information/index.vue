<template>
  <div>
    <div class="information-container">
      <div class="leftInformation">
        <div class="bigBox">
            <div class="basicInformation">
              <h3>基本信息</h3>
          <div class="btn-change"  v-if="showChange" @click="changeInfo" ref="btn">完成</div>
          <div class="btn-change" v-else @click="changeInput(1,$event)" ref="btn">编辑</div>
               <form>
              <div class="line">
                 <div class="changeBox">
                <label>组织名称 :</label>
                 <input type="text" class="mine-input" v-if="showChange" v-model="comInfo.companyName" ref="inputText"></input> 
                <div class="text" v-else ref="text">{{this.comInfo.companyName}}</div>
                </div>
            </div>
              <div class="line">
                 <div class="changeBox">
                <label>创建者ID :</label>
                <div class="text"  ref="text">{{this.comInfo.createUser}}</div>
                </div>
            </div>
           <div class="line">
                 <div class="changeBox">
                <label>组织ID :</label>
                <div class="text" ref="text">{{this.companyId}}</div>
                </div>
            </div>
            <div class="line">
                 <div class="changeBox">
                <label>创建时间 :</label>
                <div class="text" ref="text">{{this.comInfo.createTime}}</div>
                </div>
            </div>
            <div class="line">
                <label>组织详情 :</label></label>
                <div class="text" v-if="isShow" ref="text">{{message}}</div>
                <textarea cols="40" rows="5" v-if="showChange" v-model="message"></textarea>
            </div>
            
            </form>
            </div>
            <div class="specific">
           <h3 class="rightH3">具体信息</h3>
              <form>
                <div class="line">
               <div class="changeBox">
                <label>所在省区 :</label>
                 <input type="text" class="mine-input" v-if="showChange" v-model="comInfo.location" ref="inputText" ></input> 
                 <div class="text" v-else ref="text">{{this.comInfo.location}}</div>
                </div>
            </div>
              <div class="line">
               <div class="changeBox">
                <label>详细地址 :</label>
                 <input type="text" class="mine-input" v-if="showChange" v-model="comInfo.address" ref="inputText" ></input> 
                 <div class="text" v-else ref="text">{{this.comInfo.address}}</div>
                </div>
            </div>
               <div class="line">
               <div class="changeBox">
                <label>组织人数 :</label>
                 <div class="text" ref="text">{{this.comInfo.employeeCounts}}</div>
                </div>
            </div>
            </form>
            </div>
        </div>
      </div>
      <div class="rightInformation">
        <div class="SmallBox">
           <h3 class="rightH3">创建人信息</h3>
          <!-- <div class="btn-change" @click="changeInput(2,$event)" ref="btn">编辑</div> -->
                <form>
                <div class="line">
               <div class="changeBox">
                <label>创建人名称 :</label>
                 <div class="text" ref="text">{{this.createUser.username}}</div>
                </div>
            </div>
              <div class="line">
               <div class="changeBox">
                <label>创建人邮箱 :</label>
                 <div class="text" ref="text">{{this.createUser.email}}</div>
                </div>
            </div>
                 <div class="line">
               <div class="changeBox">
                <label>创建人地区 :</label>
                 <div class="text" ref="text">{{this.comInfo.location}}</div>
                </div>
            </div>
                <div class="line">
               <div class="changeBox">
                <label>联系电话 :</label>
                 <div class="text" ref="text">{{this.comInfo.phoneNumber}}</div>
                </div>
            </div>
            </form>
        </div>
        <div class="SmallBox">
                     <h3 class="rightH3">联系人信息</h3>
                <form>
                <div class="line" v-for="item in contactBox" :key="item.id">
               <div class="changeBox">
                <label>{{item.name}}</label>
                 <div class="text" v-if="isShow2" ref="text">{{item.value}}</div>
                 <input type="text" class="mine-input" v-else-if="!isShow2" ref="inputText" v-model="item.value"></input> 
                </div>
            </div>
            </form>
        </div>
      </div>
    </div>
        <PopComponent ref="pop"/>
  </div>
</template>

<script>
import PopComponent from '@/components/pop/PopComponent'
export default {
  name: "information",
  components:{PopComponent},
  data() {
    return {
      contactBox:[
        { 
          id:1,
          name:'联系人姓名 :'
        },
         {
          id:2,
          name:'联系人邮箱 :'
        },
         {
          id:3,
          name:'联系人手机 :'
        },
        {
          id:4,
          name:'联系人地区 :'
        },
          {
          id:5,
          name:'邮编 :'
        },
      ],
      isShow:true,
      isShow1:true,
      isShow2:true,
      showChange:false,
      companyId:'',
      username:'',
      comInfo:[],
      createUser:[],
      message:''
    }
  },
  mounted(){
    this.companyId = localStorage.getItem('companyId')
    this.getComInfo()
    setTimeout(()=>{
    this.username = this.comInfo.createUser
    this.getCreateUser(this.username)
    },500)
  },
  methods:{
    changeInput(i,e){
      if(i == 1){
        this.showChange = true
      }
    },
    getComInfo(){
      this.getRequest(`/auth-user/auth-admin/AuthUser/auth-company/getCompanyDetail/${this.companyId}`).then(res=>{
        this.comInfo = res.data
        console.log(this.comInfo);
      })
    },
    getCreateUser(username){
      this.getRequest(`/auth-user/auth-admin/AuthUser/username/${username}`).then(res=>{
        this.createUser = res.data
        console.log(this.createUser);
      })
    },
    changeInfo(){
      var updateCompany = {
          "address":this.comInfo.address ,
          "companyName": this.comInfo.companyName,
          "location": this.comInfo.location
      }
      this.postRequest(`/auth-user/auth-admin/AuthUser/auth-company/update/${this.companyId}`,updateCompany).then(res=>{
      this.$refs.pop.messagePopShow('修改成功')
        this.showChange = false
      })
    }
  }
};
</script>

<style scoped>
.information-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
}
.leftInformation {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
}
.leftInformation h3 {
  margin-left: 20px;
  padding-top: 20px;
  font-size: 15px;
}

.bigBox {
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* height: 550px; */
  height: 100%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
.bigBox h3 {
  padding-top: 20px;
  font-weight: 700;
  font-size: 18px;
}
.rightInformation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 550px;
}
.SmallBox {
  padding-top: 10px;
  margin-bottom: 10px;
  height: 260px;
  width: 90%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
.SmallBox .line{
  float: left;
}
.SmallBox .line .changeBox{
width: 240px;
}
.SmallBox .mine-input{
  width: 140px;
}
.btn-change {
  width: 80px;
  height: 35px;
  margin-left: 80%;
  border-radius: var(--radius-20);
  background-color: #ace392;
  user-select: none;
  cursor: pointer;
  transition: .2s;
}
.btn-change:hover{
  box-shadow: 0 0 2px gray;
}
.btn-change {
  font-size: 10px;
  line-height: 35px;
  font-weight: 700;
  text-align: center;
}

.line {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  
}
.line label {
  float: left;
  width: 85px;
  font-size: 15px;
  text-align: right;
  margin-right: 10px;
}
.mine-input {
  border: none;
  height: 19px;
  border-radius: 4px;
  width: 150px;
  text-indent:10px;
  outline:1px solid #6e6e6e;
  background-color: #fbfbfb;
}
textarea {
  border-radius: 7543 43Qpx;
    text-indent:10px;
  background-color: #fbfbfb;
  border: 2px solid rgb(228, 226, 226);
  resize: none;
  outline: none;
}
.basicInformation {
  width: 100%;
  height: 55%;
}
.specific{
  width: 100%;
  height: 40%;
  margin-top: 1%;
  
}
.specific .rightH3{
  margin-bottom: 25px;
}
.rightH3 {
    margin-left: 20px;
  padding-top: 20px;
  font-size: 15px;
}
.changeBox{
  width: 250px;
}
.text{ 
  font-size: 13px;
}
@media (max-width:1530px) {
  .information-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
}
.leftInformation {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
}
.leftInformation h3 {
  margin-left: 20px;
  padding-top: 20px;
  font-size: 15px;
}

.bigBox {
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* height: 550px; */
  height: 100%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
.bigBox h3 {
  padding-top: 20px;
  font-weight: 700;
  font-size: 18px;
}
.rightInformation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 550px;
}
.SmallBox {
  display: grid;
  padding-top: 10px;
  margin-bottom: 10px;
  height: 260px;
  width: 90%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
.SmallBox .line{
  float: left;
}
.SmallBox .line .changeBox{
width: 150px;
}
.SmallBox .mine-input{
  width: 140px;
}
.btn-change {
  width: 80px;
  height: 35px;
  margin-left: 80%;
  border-radius: var(--radius-20);
  background-color: #ace392;
  user-select: none;
  cursor: pointer;
  transition: .2s;
}
.btn-change:hover{
  box-shadow: 0 0 2px gray;
}
.btn-change {
  font-size: 10px;
  line-height: 35px;
  font-weight: 700;
  text-align: center;
}

.line {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 2px;
}
.line label {
  float: left;
  width: 85px;
  font-size: 15px;
  text-align: right;
  margin-right: 10px;
}
.mine-input {
  border: none;
  height: 25px;
  border-radius: 7px;
  width: 150px;
  text-indent:10px;
  outline: none;
  background-color: #fbfbfb;
  border: 2px solid rgb(228, 226, 226);
}
textarea {
  border-radius: 7543 43Qpx;
    text-indent:10px;
  background-color: #fbfbfb;
  border: 2px solid rgb(228, 226, 226);
  resize: none;
  outline: none;
}
.basicInformation {
  width: 100%;
  height: 55%;
}
.specific{
  width: 100%;
  height: 40%;
  margin-top: 1%;
}
.specific .rightH3{
  margin-bottom: 25px;
}
.rightH3 {
    margin-left: 20px;
  padding-top: 20px;
  font-size: 15px;
}
.changeBox{
  width: 250px;
}
.text{ 
  font-size: 15px;
  height: 25px;
}
}
@media (max-width:1180px) {
  .information-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
}
.leftInformation {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
}
.leftInformation h3 {
  margin-left: 20px;
  padding-top: 20px;
  font-size: 15px;
}

.bigBox {
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* height: 550px; */
  height: 100%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
.bigBox h3 {
  padding-top: 20px;
  font-weight: 700;
  font-size: 18px;
}
.rightInformation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 550px;
}
.SmallBox {
  display: grid;
  padding-top: 10px;
  margin-bottom: 10px;
  height: 260px;
  width: 90%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
.SmallBox .line{
  float: left;
}
.SmallBox .line .changeBox{
width: 250px;
}
.SmallBox .mine-input{
  width: 140px;
}
.btn-change {
  width: 80px;
  height: 35px;
  margin-left: 70%;
  border-radius: var(--radius-20);
  background-color: #ace392;
  user-select: none;
  cursor: pointer;
  transition: .2s;
}
.btn-change:hover{
  box-shadow: 0 0 2px gray;
}
.btn-change {
  font-size: 10px;
  line-height: 35px;
  font-weight: 700;
  text-align: center;
}

.line {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 2px;
}
.line label {
  float: left;
  width: 85px;
  font-size: 15px;
  text-align: right;
  margin-right: 10px;
}
.mine-input {
  border: none;
  height: 22px;
  border-radius: 7px;
  width: 140px;
  text-indent:10px;
  outline: none;
  background-color: #fbfbfb;
  border: 2px solid rgb(228, 226, 226);
}
textarea {
  border-radius: 7543 43Qpx;
    text-indent:10px;
    height: 50px;
  background-color: #fbfbfb;
  border: 2px solid rgb(228, 226, 226);
  resize: none;
  outline: none;
}
.basicInformation {
  width: 100%;
  height: 55%;
}
.specific{
  width: 100%;
  height: 40%;
  margin-top: 1%;
}
.specific .rightH3{
  margin-bottom: 25px;
}
.rightH3 {
    margin-left: 20px;
  padding-top: 20px;
  font-size: 15px;
}
.changeBox{
  width: 250px;
}
.text{ 
  font-size: 15px;
  height: 25px;
}
}
@media (max-width:880px) {
  .information-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
}
.leftInformation {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
}
.leftInformation h3 {
  margin-left: 20px;
  padding-top: 20px;
  font-size: 15px;
}

.bigBox {
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* height: 550px; */
  height: 100%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
.bigBox h3 {
  padding-top: 20px;
  font-weight: 700;
  font-size: 18px;
}
.rightInformation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 550px;
}
.SmallBox {
  display: grid;
  padding-top: 10px;
  margin-bottom: 10px;
  height: 260px;
  width: 90%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
.SmallBox .line{
  float: left;
}
.SmallBox .line .changeBox{
width: 250px;
}
.SmallBox .mine-input{
  width: 100px;
}
.btn-change {
  width: 80px;
  height: 35px;
  margin-left: 50%;
  border-radius: var(--radius-20);
  background-color: #ace392;
  user-select: none;
  cursor: pointer;
  transition: .2s;
}
.btn-change:hover{
  box-shadow: 0 0 2px gray;
}
.btn-change {
  font-size: 10px;
  line-height: 35px;
  font-weight: 700;
  text-align: center;
}

.line {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 2px;
}
.line label {
  float: left;
  width: 85px;
  font-size: 15px;
  text-align: right;
  margin-right: 10px;
}
.mine-input {
  border: none;
  height: 22px;
  border-radius: 7px;
  width: 100px;
  text-indent:10px;
  outline: none;
  background-color: #fbfbfb;
  border: 2px solid rgb(228, 226, 226);
}
textarea {
    text-indent:10px;
    width: 200px;
    height: 50px;
  background-color: #fbfbfb;
  border: 2px solid rgb(228, 226, 226);
  resize: none;
  outline: none;
}
.basicInformation {
  width: 100%;
  height: 55%;
}
.specific{
  width: 100%;
  height: 40%;
  margin-top: 1%;
}
.specific .rightH3{
  margin-bottom: 25px;
}
.rightH3 {
    margin-left: 20px;
  padding-top: 20px;
  font-size: 15px;
}
.changeBox{
  width: 250px;
}
.text{ 
  font-size: 15px;
  height: 25px;
}
}
@media (max-width:680px) {
  .information-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
}
.leftInformation {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
}
.leftInformation h3 {
  margin-left: 20px;
  padding-top: 20px;
  font-size: 15px;
}

.bigBox {
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* height: 550px; */
  height: 100%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
.bigBox h3 {
  padding-top: 20px;
  font-weight: 700;
  font-size: 18px;
}
.rightInformation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 550px;
}
.SmallBox {
  display: grid;
  padding-top: 10px;
  margin-bottom: 10px;
  height: 260px;
  width: 90%;
  box-shadow: 0 0 2px rgb(198, 198, 198);
  background-color: rgba(252, 251, 251, 0.4);
  border-radius: var(--radius-20);
}
.SmallBox .line{
  float: left;
}
.SmallBox .line .changeBox{
width: 250px;
}
.SmallBox .mine-input{
  width: 100px;
  display: none;
}
.btn-change {
  width: 80px;
  height: 35px;
  margin-left: 50%;
  border-radius: var(--radius-20);
  background-color: #ace392;
  user-select: none;
  cursor: pointer;
  transition: .2s;
  display: none;
}
.btn-change:hover{
  box-shadow: 0 0 2px gray;
}
.btn-change {
  font-size: 10px;
  line-height: 35px;
  font-weight: 700;
  text-align: center;
}

.line {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 2px;
}
.line label {
  float: left;
  width: 85px;
  font-size: 15px;
  text-align: right;
  margin-right: 10px;
}
.mine-input {
  border: none;
  height: 22px;
  border-radius: 7px;
  width: 100px;
  text-indent:10px;
  outline: none;
  background-color: #fbfbfb;
  border: 2px solid rgb(228, 226, 226);
  display: none;
}
textarea {
  border-radius: 13px;
    text-indent:10px;
    width: 200px;
    height: 50px;
  background-color: #fbfbfb;
  border: 2px solid rgb(228, 226, 226);
  resize: none;
  outline: none;
  display: none;

}
.basicInformation {
  width: 100%;
  height: 55%;
}
.specific{
  width: 100%;
  height: 40%;
  margin-top: 1%;
}
.specific .rightH3{
  margin-bottom: 25px;
}
.rightH3 {
    margin-left: 20px;
  padding-top: 20px;
  font-size: 15px;
}
.changeBox{
  width: 250px;
}
.text{ 
  font-size: 15px;
  height: 25px;
}
}
</style>