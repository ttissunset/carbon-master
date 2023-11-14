<template>
  <div>
    <div class="top">
      <div class="header stop-select" ref="head">
        <div class="header-container">
          <div class="logo" @click="goHome">
            <img class="logo-img" src="https://myalybucket.oss-cn-shenzhen.aliyuncs.com/GHOSTER-dark.png">
          </div>
          <ul class="navigation">
            <li>
              <!--  -->
              <div class="liName" @click="goPath">服务</div>
              <span class="line"></span>
              <div class="details">
                <div class="choseBox" v-for="item in serviceList" :key="item.id" @click="headergoService(item)">
                  <div class="textBox">{{ item.applicationName }}</div>
                </div>
              </div>
            </li>
            <li>
              <div class="liName" @click="goCase">案例</div>
              <span class="line"></span>
              <div class="details">
                <div class="choseBox" v-for="item in allCase" :key="item.id" @click="getCaseId(item.id)">
                  <div class="textBox">{{ item.caseName }}</div>
                </div>
              </div>
            </li>
          </ul>
          <div class="login" @mouseover="mo" @mouseleave="ml">
            <div class="login-avatar img-before" v-if="this.haveToken == false"></div>
            <div class="login-avatar img-after" v-else></div>
            <transition name="downSlow">
              <div class="userDetail" v-show="show">
                <div class="items" v-if="this.haveToken== true">
                  <h2>{{ this.userName }}</h2>
                  <ul>
                    <li>所属组织 : <span>{{ this.comName }}</span></li>
                    <li>注册邮箱 :<span> {{ this.userInfo.email }}</span></li>
                    <li>&nbsp;&nbsp;用户 ID :<span> {{ this.userInfo.id }}</span></li>
                  </ul>
                </div>
                <div class="items2" v-else-if="this.haveToken==false">
                  <div class="unLoginBox">
                    <h1>请登录，登陆后您可享有：</h1>
                    <div class="privilege">
                      <div class="privilege-item">
                        <a class="iconfont icon-goumai"></a>购买服务
                      </div>
                      <div class="privilege-item">
                        <a class="iconfont icon-gongzuotai"></a>进工作台
                      </div>
                      <div class="privilege-item">
                        <a class="iconfont icon-guanliyuanrenzheng"></a>管理员工
                      </div>
                      <div class="privilege-item">
                        <a class="iconfont icon-ling"></a>获取通知
                      </div>
                    </div>
                  </div>
                </div>
                <div class="contorl" @click="goDashBoard" v-if="this.haveToken== true">我的控制台</div>
                <div class="logout" @click="loginOut" v-if="this.haveToken== true">退出登录</div>
                <div class="loginIn" @click="goLogin" v-else-if="this.haveToken==false">登录</div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Notification} from "element-ui";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      keyword: '1',
      head: this.$refs.head,
      show: false,
      serviceList: [],
      code: '00000',
      haveToken: '',
      itemId: '',
      caseId: '',
      allCase: [],
      userInfo: [],
      userName: '',
      comName: ''
    }
  },
  created() {
    this.postRequest('/case-control/caseBase/page').then(res => {
      // console.log(res);
      this.allCase = res.items
      // console.log(this.allCase);
    })
  },
  mounted() {
    window.addEventListener('scroll', this.changeCss)
    this.getlist()
    this.testToken()
    if (localStorage.getItem("Authorization")) {
      this.getUserInfo()
      setTimeout(() => {
        this.getRealUserInfo()
        this.comName = localStorage.getItem('companyName')
      }, 1000);
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.changeCss)
  },
  methods: {
    // 路由跳转
    goPath() {
      // this.$router.push({name: 'Navigationhome', params: {keyword: this.keyword}})
      this.$router.push('/Navigationhome')
    },
    goHome() {
      this.$router.push('/home')
    },
    goLogin() {
      this.$router.push('/login')
    },
    goCase() {
      this.$router.push('/case')
    },
    goDashBoard() {
      this.$router.push('/dashboard/home')
    },
    headergoService(item) {
      this.itemId = item.id
      // this.$router.push({name:'Service',params:{id:this.itemId}})
      this.$router.push({name: 'Service', query: {id: this.itemId}})
      setTimeout(() => {
        // this.$bus.$emit('getServiceId',this.itemId)
        location.reload()
      }, 100);
    },
    // 获取案例列表
    getCaseId(item) {
      // item即获取到的案例的id
      this.caseId = item
      // console.log(this.caseId);
      this.$bus.$emit('caseId', this.caseId)
      this.$router.push('Case?id=' + this.caseId)
      // 将item传出去在case中接收该id再根据该id渲染数据即可

      setTimeout(() => {
        // this.$bus.$emit('getServiceId',this.itemId)
        location.reload()
      }, 100);
    },
    // 导航栏改变样式
    changeCss() {
      const {head} = this.$refs
      var scrollTop = window.pageYOffset
      if (scrollTop > head.style.height) {
        head.className = 'header-change'
      }
      if (scrollTop < 70) {
        head.className = 'header'
      }
    },
    // 改变show状态
    mo() {
      this.show = true;
    },
    ml() {
      this.show = false;
    },
    //调用服务接口
    getlist() {
      this.getRequest('/tance-service-serve/service/base/getAll').then(res => {
        this.serviceList = res.data
      })
    },
    //  获取token判断是否登录
    testToken() {
      if (localStorage.getItem('Authorization')) {
        this.haveToken = true
      } else {
        this.haveToken = false
      }
    },
    //获取用户信息
    getUserInfo() {
      // this.getRequest(`/auth-user/auth-admin/AuthUser/username/${this.userName}`).then(res=>{
      //   console.log(res.data);
      // })
      this.postRequest('/tance-service-serve/service/base/testPayLoad').then(res => {
        this.userName = res.data.user_name
        console.log(res);
      })
          .catch(err => {
          })
    },
    getRealUserInfo() {
      this.getRequest(`/auth-user/auth-admin/AuthUser/BG/username/${this.userName}`).then(res => {
        this.userInfo = res.data
        console.log(this.userName);
        console.log(res);
      })
    },
    // 退出登录
    loginOut() {
      this.getRequest(`security-oauth/oauth/logout`).then(res => {
        console.log(res);
        if (res.code === "00000") {
          Notification({
            title: '成功',
            message: '登录成功！',
            type: 'success',
            position: "bottom-right"
          });
        }
        localStorage.clear()
        location.reload()
      })
    },
  },
};
</script>

<style scoped>
.top {
  height: 50px;
  width: 100%;
}

.header {
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  background-color: transparent;
  transition: .5s;
  z-index: 9999;
}

.header-container {
  position: relative;
  width: 100%;
  z-index: 13;
}

.header-change {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  transition: .5s;
  z-index: 9999;
}

.logo {
  display: inline-block;
  float: left;
  margin-left: 90px;
  height: 50px;
  width: 160px;
}

.logo-img {
  height: 50px;
  width: 160px;
}

.navigation {
  display: inline-block;
  margin-left: 40px;
}

.navigation li {
  position: relative;
  float: left;
  width: 120px;
  height: 50px;
  font-size: 15px;
  line-height: 50px;
  text-align: center;
  transition: all 1s;
  color: rgb(28, 28, 28);
}

.navigation li:hover {
  color: var(--youth-green-2);
  /*box-shadow: 0px 0px 5px rgb(89, 87, 87);*/
  transform: translateY(-3px);
  display: block;
  cursor: pointer;
}

.navigation li:hover .line {
  display: block;
}

.navigation li:hover .details {
  visibility: visible;
  opacity: .9;
}

.login {
  position: absolute;
  top: 1px;
  right: 200px;
  width: 50px;
  height: 50px;
  transition: .5s;
}

.login-avatar {
  position: absolute;
  width: 85%;
  height: 85%;
  margin-top: 10%;
  border-radius: var(--radius-circle);
  background-size: 100%;
  z-index: 33;
}

.img-before {
  background-image: url("https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png");
}

.img-after {
  background-image: url("https://p3-passport.byteimg.com/img/user-avatar/e3004c671a547800f0ca5db8c0add42d~100x100.awebp");
}

.login:hover .login-avatar {
  margin-top: 30%;
  right: 20%;
  width: 120%;
  height: 120%;
}

.userDetail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50px;
  right: -80px;
  width: 240px;
  height: 240px;
  background-color: #fcfcfc;
  border-radius: 10px;
  padding-bottom: 10px;
}

.items {
  width: 100%;
  height: 60%;
}

.items2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60%;
}

.items h2 {
  margin-top: 15px;
  text-align: center;
  line-height: 40px;
}

.items ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.items ul li {
  margin-bottom: 10px;
  padding-left: 50px;
  width: 90%;
  height: 20px;
  font-weight: 700;
  text-align: left;
}

.items ul li span {
  font-weight: 500;
}

.unLoginBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 70%;
}

.unLoginBox h1 {
  text-align: center;
  font-size: 16px;
  color: #77c049;
  font-weight: 700;
}

.privilege {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 80%;
  width: 100%;
}

.privilege-item {
  width: 100%;
  height: 100%;
  line-height: 40px;
  font-size: 13px;
  font-weight: 600;
  color: rgb(135, 135, 135);
}

.privilege-item a {
  color: #77c049;
  font-size: 20px;
  margin-right: 10px;
}

.contorl {
  width: 80%;
  height: 17%;
  border-radius: 10px;
  font-size: 15px;
  font-family: var(--ff-almm);
  text-align: center;
  line-height: 43px;
  color: white;
  background-color: var(--youth-green-2);
  cursor: pointer;
  transition: .5s;
}

.logout {
  margin-top: 3%;
  width: 80%;
  height: 17%;
  border-radius: 10px;
  font-size: 15px;
  font-family: var(--ff-almm);
  text-align: center;
  line-height: 43px;
  color: white;
  background-color: var(--dark-pink);
  cursor: pointer;
  transition: .5s;
}

.loginIn {
  width: 80%;
  height: 17%;
  border-radius: 10px;
  font-size: 15px;
  font-family: var(--ff-almm);
  text-align: center;
  line-height: 43px;
  color: white;
  background-color: var(--youth-green-2);
  cursor: pointer;
  transition: .5s;
}

.contorl:hover {
  box-shadow: 0 0 3px #999;
}

.logout:hover {
  box-shadow: 0 0 3px #999;
}

.loginIn:hover {
  box-shadow: 0 0 3px #999;
}

.details {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  position: absolute;
  z-index: 2;
  height: 200px;
  width: 400px;
  background-color: #eae9e9;
  transition: visibility .5s, opacity .5s;
  visibility: hidden;
  opacity: 0;
  border-radius: 0 20px 20px 20px;
  box-shadow: 0px 0px 10px rgb(177, 172, 172);
}

.choseBox {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
  margin-top: 5%;
  width: 90%;
  height: 90%;
}

.choseBox:hover .textBox {
  border-top: 3px solid rgb(138, 138, 138);
  color: rgb(120, 221, 124);
}

.textBox {
  width: 70%;
  height: 60%;
  color: rgb(138, 138, 138);
  border-top: 3px solid rgb(135, 198, 41);
  transition: .5s;
}

/* 动画  下*/
.downSlow-enter-active,
.downSlow-leave-active {
  transition: all .5s;
}

.downSlow-enter {
  opacity: 0;
}

.downSlow-leave-to, .downSlow-leave {
  opacity: 0;
}

.downSlow-enter-to {
  opacity: 1;
}

@media (max-width: 1380px) {
  .top {
    height: 50px;
    width: 100%;
  }

  .header {
    position: fixed;
    top: 0;
    height: 70px;
    width: 100%;
    background-color: transparent;
    transition: .5s;
    z-index: 9999;
  }

  .header-container {
    position: relative;
    width: 100%;
    z-index: 13;
  }

  .header-change {
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    transition: .5s;
    z-index: 9999;
  }

  .logo {
    display: inline-block;
    float: left;
    margin-left: 90px;
    height: 50px;
    width: 160px;
  }

  .logo-img {
    height: 50px;
    width: 160px;
  }

  .navigation {
    display: inline-block;
    margin-left: 40px;
  }

  .navigation li {
    position: relative;
    float: left;
    width: 120px;
    height: 50px;
    font-size: 15px;
    line-height: 50px;
    text-align: center;
    transition: all 1s;
    color: rgb(28, 28, 28);
  }

  .navigation li:hover {
    color: var(--youth-green-2);
    /*box-shadow: 0px 0px 5px rgb(89, 87, 87);*/
    transform: translateY(-3px);
    display: block;
    cursor: pointer;
  }

  .navigation li:hover .line {
    display: block;
  }

  .navigation li:hover .details {
    visibility: visible;
    opacity: .9;
  }

  .login {
    position: absolute;
    top: 1px;
    right: 200px;
    width: 50px;
    height: 50px;
    transition: .5s;
  }

  .login-avatar {
    position: absolute;
    width: 85%;
    height: 85%;
    margin-top: 10%;
    border-radius: var(--radius-circle);
    background-size: 100%;
    z-index: 33;
  }

  .img-before {
    background-image: url("https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png");
  }

  .img-after {
    background-image: url("https://p3-passport.byteimg.com/img/user-avatar/e3004c671a547800f0ca5db8c0add42d~100x100.awebp");
  }

  .login:hover .login-avatar {
    margin-top: 30%;
    right: 20%;
    width: 120%;
    height: 120%;
  }

  .userDetail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50px;
    right: -80px;
    width: 250px;
    height: 240px;
    background-color: #fcfcfc;
    border-radius: 10px;
  }

  .items {
    width: 100%;
    height: 60%;
  }

  .items2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;
  }

  .items h2 {
    margin-top: 15px;
    text-align: center;
    line-height: 40px;
  }

  .items ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .items ul li {
    margin-bottom: 10px;
    width: 90%;
    height: 20px;
    font-weight: 700;
  }

  .unLoginBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 70%;
  }

  .unLoginBox h1 {
    text-align: center;
    font-size: 16px;
    color: #77c049;
    font-weight: 700;
  }

  .privilege {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 80%;
    width: 100%;
  }

  .privilege-item {
    width: 100%;
    height: 100%;
    line-height: 40px;
    font-size: 13px;
    font-weight: 600;
    color: rgb(135, 135, 135);
  }

  .privilege-item a {
    color: #77c049;
    font-size: 20px;
    margin-right: 10px;
  }

  .contorl {
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--youth-green-2);
    cursor: pointer;
    transition: .5s;
  }

  .logout {
    margin-top: 3%;
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--dark-pink);
    cursor: pointer;
    transition: .5s;
  }

  .loginIn {
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--youth-green-2);
    cursor: pointer;
    transition: .5s;
  }

  .contorl:hover {
    box-shadow: 0 0 3px #999;
  }

  .logout:hover {
    box-shadow: 0 0 3px #999;
  }

  .loginIn:hover {
    box-shadow: 0 0 3px #999;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    z-index: 2;
    height: 200px;
    width: 400px;
    background-color: #eae9e9;
    transition: visibility .5s, opacity .5s;
    visibility: hidden;
    opacity: 0;
    border-radius: 0 20px 20px 20px;
    box-shadow: 0px 0px 10px rgb(177, 172, 172);
  }

  .choseBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
    margin-top: 5%;
    width: 90%;
    height: 90%;
  }

  .choseBox:hover .textBox {
    border-top: 3px solid rgb(138, 138, 138);
    color: rgb(120, 221, 124);
  }

  .textBox {
    width: 70%;
    height: 60%;
    color: rgb(138, 138, 138);
    border-top: 3px solid rgb(135, 198, 41);
    transition: .5s;
  }

  /* 动画  下*/
  .downSlow-enter-active,
  .downSlow-leave-active {
    transition: all .5s;
  }

  .downSlow-enter {
    opacity: 0;
  }

  .downSlow-leave-to, .downSlow-leave {
    opacity: 0;
  }

  .downSlow-enter-to {
    opacity: 1;
  }
}

@media (max-width: 1020px) {
  .top {
    height: 50px;
    width: 100%;
  }

  .header {
    position: fixed;
    top: 0;
    height: 70px;
    width: 100%;
    background-color: transparent;
    transition: .5s;
    z-index: 9999;
  }

  .header-container {
    position: relative;
    width: 100%;
    z-index: 13;
  }

  .header-change {
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    transition: .5s;
    z-index: 9999;
  }

  .logo {
    display: inline-block;
    float: left;
    margin-left: 90px;
    height: 50px;
    width: 160px;
  }

  .logo-img {
    height: 50px;
    width: 160px;
  }

  .navigation {
    display: inline-block;
    margin-left: 40px;
  }

  .navigation li {
    position: relative;
    float: left;
    width: 100px;
    height: 50px;
    font-size: 15px;
    line-height: 50px;
    text-align: center;
    transition: all 1s;
    color: rgb(28, 28, 28);
  }

  .navigation li:hover {
    color: var(--youth-green-2);
    /*box-shadow: 0px 0px 5px rgb(89, 87, 87);*/
    transform: translateY(-3px);
    display: block;
    cursor: pointer;
  }

  .navigation li:hover .line {
    display: block;
  }

  .navigation li:hover .details {
    visibility: visible;
    opacity: .9;
  }

  .login {
    position: absolute;
    top: 1px;
    right: 100px;
    width: 50px;
    height: 50px;
    transition: .5s;

  }

  .login-avatar {
    position: absolute;
    width: 85%;
    height: 85%;
    margin-top: 10%;
    border-radius: var(--radius-circle);
    background-size: 100%;
    z-index: 33;
  }

  .img-before {
    background-image: url("https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png");
  }

  .img-after {
    background-image: url("https://p3-passport.byteimg.com/img/user-avatar/e3004c671a547800f0ca5db8c0add42d~100x100.awebp");
  }

  .login:hover .login-avatar {
    margin-top: 30%;
    right: 20%;
    width: 120%;
    height: 120%;
  }

  .userDetail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50px;
    right: -80px;
    width: 250px;
    height: 240px;
    background-color: #fcfcfc;
    border-radius: 10px;
  }

  .items {
    width: 100%;
    height: 60%;
  }

  .items2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;
  }

  .items h2 {
    margin-top: 15px;
    text-align: center;
    line-height: 40px;
  }

  .items ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .items ul li {
    margin-bottom: 10px;
    width: 90%;
    height: 20px;
    font-weight: 700;
  }

  .unLoginBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 70%;
  }

  .unLoginBox h1 {
    text-align: center;
    font-size: 16px;
    color: #77c049;
    font-weight: 700;
  }

  .privilege {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 80%;
    width: 100%;
  }

  .privilege-item {
    width: 100%;
    height: 100%;
    line-height: 40px;
    font-size: 13px;
    font-weight: 600;
    color: rgb(135, 135, 135);
  }

  .privilege-item a {
    color: #77c049;
    font-size: 20px;
    margin-right: 10px;
  }

  .contorl {
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--youth-green-2);
    cursor: pointer;
    transition: .5s;
  }

  .logout {
    margin-top: 3%;
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--dark-pink);
    cursor: pointer;
    transition: .5s;
  }

  .loginIn {
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--youth-green-2);
    cursor: pointer;
    transition: .5s;
  }

  .contorl:hover {
    box-shadow: 0 0 3px #999;
  }

  .logout:hover {
    box-shadow: 0 0 3px #999;
  }

  .loginIn:hover {
    box-shadow: 0 0 3px #999;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    z-index: 2;
    height: 200px;
    width: 400px;
    background-color: #eae9e9;
    transition: visibility .5s, opacity .5s;
    visibility: hidden;
    opacity: 0;
    border-radius: 0 20px 20px 20px;
    box-shadow: 0px 0px 10px rgb(177, 172, 172);
  }

  .choseBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
    margin-top: 5%;
    width: 90%;
    height: 90%;
  }

  .choseBox:hover .textBox {
    border-top: 3px solid rgb(138, 138, 138);
    color: rgb(120, 221, 124);
  }

  .textBox {
    width: 70%;
    height: 60%;
    color: rgb(138, 138, 138);
    border-top: 3px solid rgb(135, 198, 41);
    transition: .5s;
  }

  /* 动画  下*/
  .downSlow-enter-active,
  .downSlow-leave-active {
    transition: all .5s;
  }

  .downSlow-enter {
    opacity: 0;
  }

  .downSlow-leave-to, .downSlow-leave {
    opacity: 0;
  }

  .downSlow-enter-to {
    opacity: 1;
  }
}

@media (max-width: 800px) {
  .top {
    height: 50px;
    width: 100%;
  }

  .header {
    position: fixed;
    top: 0;
    height: 70px;
    width: 100%;
    background-color: transparent;
    transition: .5s;
    z-index: 9999;
  }

  .header-container {
    position: relative;
    width: 100%;
    z-index: 13;
  }

  .header-change {
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    transition: .5s;
    z-index: 9999;
  }

  .logo {
    display: inline-block;
    float: left;
    margin-left: 90px;
    height: 50px;
    width: 160px;
  }

  .logo-img {
    height: 50px;
    width: 160px;
  }

  .navigation {
    display: inline-block;
    margin-left: 40px;
  }

  .navigation li {
    position: relative;
    float: left;
    width: 80px;
    height: 50px;
    font-size: 15px;
    line-height: 50px;
    text-align: center;
    transition: all 1s;
    color: rgb(28, 28, 28);
  }

  .navigation li:hover {
    color: var(--youth-green-2);
    /*box-shadow: 0px 0px 5px rgb(89, 87, 87);*/
    transform: translateY(-3px);
    display: block;
    cursor: pointer;
  }

  .navigation li:hover .line {
    display: block;
  }

  .navigation li:hover .details {
    visibility: visible;
    opacity: .9;
  }

  .login {
    position: absolute;
    top: 1px;
    right: 10px;
    width: 50px;
    height: 50px;
  }

  .login-avatar {
    position: absolute;
    width: 85%;
    height: 85%;
    margin-top: 10%;
    border-radius: var(--radius-circle);
    background-size: 100%;
    z-index: 33;
  }

  .img-before {
    background-image: url("https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png");
  }

  .img-after {
    background-image: url("https://p3-passport.byteimg.com/img/user-avatar/e3004c671a547800f0ca5db8c0add42d~100x100.awebp");
  }

  .login:hover .login-avatar {
    margin-top: 30%;
    right: 20%;
    width: 120%;
    height: 120%;
  }

  .userDetail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50px;
    right: -80px;
    width: 250px;
    height: 240px;
    background-color: #fcfcfc;
    border-radius: 10px;
  }

  .items {
    width: 100%;
    height: 60%;
  }

  .items2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;
  }

  .items h2 {
    margin-top: 15px;
    text-align: center;
    line-height: 40px;
  }

  .items ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .items ul li {
    margin-bottom: 10px;
    width: 90%;
    height: 20px;
    font-weight: 700;
  }

  .unLoginBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 70%;
  }

  .unLoginBox h1 {
    text-align: center;
    font-size: 16px;
    color: #77c049;
    font-weight: 700;
  }

  .privilege {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 80%;
    width: 100%;
  }

  .privilege-item {
    width: 100%;
    height: 100%;
    line-height: 40px;
    font-size: 13px;
    font-weight: 600;
    color: rgb(135, 135, 135);
  }

  .privilege-item a {
    color: #77c049;
    font-size: 20px;
    margin-right: 10px;
  }

  .contorl {
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--youth-green-2);
    cursor: pointer;
    transition: .5s;
  }

  .logout {
    margin-top: 3%;
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--dark-pink);
    cursor: pointer;
    transition: .5s;
  }

  .loginIn {
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--youth-green-2);
    cursor: pointer;
    transition: .5s;
  }

  .contorl:hover {
    box-shadow: 0 0 3px #999;
  }

  .logout:hover {
    box-shadow: 0 0 3px #999;
  }

  .loginIn:hover {
    box-shadow: 0 0 3px #999;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    z-index: 2;
    height: 200px;
    width: 400px;
    background-color: #eae9e9;
    transition: visibility .5s, opacity .5s;
    visibility: hidden;
    opacity: 0;
    border-radius: 0 20px 20px 20px;
    box-shadow: 0px 0px 10px rgb(177, 172, 172);
  }

  .choseBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
    margin-top: 5%;
    width: 90%;
    height: 90%;
  }

  .choseBox:hover .textBox {
    border-top: 3px solid rgb(138, 138, 138);
    color: rgb(120, 221, 124);
  }

  .textBox {
    width: 70%;
    height: 60%;
    color: rgb(138, 138, 138);
    border-top: 3px solid rgb(135, 198, 41);
    transition: .5s;
  }

  /* 动画  下*/
  .downSlow-enter-active,
  .downSlow-leave-active {
    transition: all .5s;
  }

  .downSlow-enter {
    opacity: 0;
  }

  .downSlow-leave-to, .downSlow-leave {
    opacity: 0;
  }

  .downSlow-enter-to {
    opacity: 1;
  }
}

@media (max-width: 540px) {
  .top {
    height: 50px;
    width: 100%;
  }

  .header {
    position: fixed;
    top: 0;
    height: 70px;
    width: 100%;
    background-color: transparent;
    transition: .5s;
    z-index: 9999;
  }

  .header-container {
    position: relative;
    width: 100%;
    z-index: 13;
  }

  .header-change {
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    transition: .5s;
    z-index: 9999;
  }

  .logo {
    display: inline-block;
    float: left;
    margin-left: 20px;
    height: 50px;
    width: 160px;
  }

  .logo-img {
    height: 50px;
    width: 160px;
  }

  .navigation {
    display: inline-block;
    margin-left: 40px;
  }

  .navigation li {
    position: relative;
    float: left;
    width: 60px;
    height: 50px;
    font-size: 15px;
    line-height: 50px;
    text-align: center;
    transition: all 1s;
    color: rgb(28, 28, 28);

  }

  .navigation li:hover {
    color: var(--youth-green-2);
    /*box-shadow: 0px 0px 5px rgb(89, 87, 87);*/
    transform: translateY(-3px);
    display: block;
    cursor: pointer;
  }

  .navigation li:hover .line {
    display: block;
  }

  .navigation li:hover .details {
    visibility: visible;
    opacity: .9;
  }

  .login {
    position: absolute;
    top: 1px;
    right: 70px;
    width: 50px;
    height: 50px;
    transition: .5s;
  }

  .login-avatar {
    position: absolute;
    width: 85%;
    height: 85%;
    margin-top: 10%;
    border-radius: var(--radius-circle);
    background-size: 100%;
    z-index: 33;
  }

  .img-before {
    background-image: url("https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png");
  }

  .img-after {
    background-image: url("https://p3-passport.byteimg.com/img/user-avatar/e3004c671a547800f0ca5db8c0add42d~100x100.awebp");
  }

  .login:hover .login-avatar {
    margin-top: 30%;
    right: 20%;
    width: 120%;
    height: 120%;
  }

  .userDetail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50px;
    right: -80px;
    width: 250px;
    height: 240px;
    background-color: #fcfcfc;
    border-radius: 10px;
  }

  .items {
    width: 100%;
    height: 60%;
  }

  .items2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;
  }

  .items h2 {
    margin-top: 15px;
    text-align: center;
    line-height: 40px;
  }

  .items ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .items ul li {
    margin-bottom: 10px;
    width: 90%;
    height: 20px;
    font-weight: 700;
  }

  .unLoginBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 70%;
  }

  .unLoginBox h1 {
    text-align: center;
    font-size: 16px;
    color: #77c049;
    font-weight: 700;
  }

  .privilege {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 80%;
    width: 100%;
  }

  .privilege-item {
    width: 100%;
    height: 100%;
    line-height: 40px;
    font-size: 13px;
    font-weight: 600;
    color: rgb(135, 135, 135);
  }

  .privilege-item a {
    color: #77c049;
    font-size: 20px;
    margin-right: 10px;
  }

  .contorl {
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--youth-green-2);
    cursor: pointer;
    transition: .5s;
  }

  .logout {
    margin-top: 3%;
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--dark-pink);
    cursor: pointer;
    transition: .5s;
  }

  .loginIn {
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--youth-green-2);
    cursor: pointer;
    transition: .5s;
  }

  .contorl:hover {
    box-shadow: 0 0 3px #999;
  }

  .logout:hover {
    box-shadow: 0 0 3px #999;
  }

  .loginIn:hover {
    box-shadow: 0 0 3px #999;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    position: absolute;
    z-index: 2;
    height: 200px;
    width: 200px;
    background-color: #eae9e9;
    transition: visibility .5s, opacity .5s;
    visibility: hidden;
    opacity: 0;
    border-radius: 0 20px 20px 20px;
    box-shadow: 0px 0px 10px rgb(177, 172, 172);
  }

  .choseBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
    margin-top: 5%;
    width: 90%;
    height: 90%;
  }

  .choseBox:hover .textBox {
    border-top: 3px solid rgb(138, 138, 138);
    color: rgb(120, 221, 124);
  }

  .textBox {
    width: 70%;
    height: 60%;
    color: rgb(138, 138, 138);
    border-top: 3px solid rgb(135, 198, 41);
    transition: .5s;
  }

  /* 动画  下*/
  .downSlow-enter-active,
  .downSlow-leave-active {
    transition: all .5s;
  }

  .downSlow-enter {
    opacity: 0;
  }

  .downSlow-leave-to, .downSlow-leave {
    opacity: 0;
  }

  .downSlow-enter-to {
    opacity: 1;
  }
}

@media (max-width: 410px) {
  .top {
    height: 50px;
    width: 100%;
  }

  .header {
    position: fixed;
    top: 0;
    height: 70px;
    width: 100%;
    background-color: transparent;
    transition: .5s;
    z-index: 9999;
  }

  .header-container {
    position: relative;
    width: 100%;
    z-index: 13;
  }

  .header-change {
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    transition: .5s;
    z-index: 9999;
  }

  .logo {
    display: inline-block;
    float: left;
    margin-left: 20px;
    height: 50px;
    width: 160px;
  }

  .logo-img {
    height: 50px;
    width: 160px;
  }

  .navigation {
    display: inline-block;
    margin-left: 0px;
  }

  .navigation li {
    position: relative;
    float: left;
    width: 60px;
    height: 50px;
    font-size: 15px;
    line-height: 50px;
    text-align: center;
    transition: all 1s;
    color: rgb(28, 28, 28);

  }

  .navigation li:hover {
    color: var(--youth-green-2);
    /*box-shadow: 0px 0px 5px rgb(89, 87, 87);*/
    transform: translateY(-3px);
    display: block;
    cursor: pointer;
  }

  .navigation li:hover .line {
    display: block;
  }

  .navigation li:hover .details {
    visibility: visible;
    opacity: .9;
  }

  .login {
    position: absolute;
    top: 1px;
    right: 70px;
    width: 50px;
    height: 50px;
    transition: .5s;
  }

  .login-avatar {
    position: absolute;
    width: 85%;
    height: 85%;
    margin-top: 10%;
    border-radius: var(--radius-circle);
    background-size: 100%;
    z-index: 33;
  }

  .img-before {
    background-image: url("https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png");
  }

  .img-after {
    background-image: url("https://p3-passport.byteimg.com/img/user-avatar/e3004c671a547800f0ca5db8c0add42d~100x100.awebp");
  }

  .login:hover .login-avatar {
    margin-top: 30%;
    right: 20%;
    width: 120%;
    height: 120%;
  }

  .userDetail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50px;
    right: 0px;
    width: 250px;
    height: 240px;
    background-color: #fcfcfc;
    border-radius: 10px;
  }

  .items {
    width: 100%;
    height: 60%;
  }

  .items2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;
  }

  .items h2 {
    margin-top: 15px;
    text-align: center;
    line-height: 40px;
  }

  .items ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .items ul li {
    margin-bottom: 10px;
    width: 90%;
    height: 20px;
    font-weight: 700;
  }

  .unLoginBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 70%;
  }

  .unLoginBox h1 {
    text-align: center;
    font-size: 16px;
    color: #77c049;
    font-weight: 700;
  }

  .privilege {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 80%;
    width: 100%;
  }

  .privilege-item {
    width: 100%;
    height: 100%;
    line-height: 40px;
    font-size: 13px;
    font-weight: 600;
    color: rgb(135, 135, 135);
  }

  .privilege-item a {
    color: #77c049;
    font-size: 20px;
    margin-right: 10px;
  }

  .contorl {
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--youth-green-2);
    cursor: pointer;
    transition: .5s;
  }

  .logout {
    margin-top: 3%;
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--dark-pink);
    cursor: pointer;
    transition: .5s;
  }

  .loginIn {
    width: 80%;
    height: 17%;
    border-radius: 10px;
    font-size: 15px;
    font-family: var(--ff-almm);
    text-align: center;
    line-height: 43px;
    color: white;
    background-color: var(--youth-green-2);
    cursor: pointer;
    transition: .5s;
  }

  .contorl:hover {
    box-shadow: 0 0 3px #999;
  }

  .logout:hover {
    box-shadow: 0 0 3px #999;
  }

  .loginIn:hover {
    box-shadow: 0 0 3px #999;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    position: absolute;
    z-index: 2;
    height: 200px;
    width: 200px;
    background-color: #eae9e9;
    transition: visibility .5s, opacity .5s;
    visibility: hidden;
    opacity: 0;
    border-radius: 0 20px 20px 20px;
    box-shadow: 0px 0px 10px rgb(177, 172, 172);
  }

  .choseBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
    margin-top: 5%;
    width: 90%;
    height: 90%;
  }

  .choseBox:hover .textBox {
    border-top: 3px solid rgb(138, 138, 138);
    color: rgb(120, 221, 124);
  }

  .textBox {
    width: 70%;
    height: 60%;
    color: rgb(138, 138, 138);
    border-top: 3px solid rgb(135, 198, 41);
    transition: .5s;
  }

  /* 动画  下*/
  .downSlow-enter-active,
  .downSlow-leave-active {
    transition: all .5s;
  }

  .downSlow-enter {
    opacity: 0;
  }

  .downSlow-leave-to, .downSlow-leave {
    opacity: 0;
  }

  .downSlow-enter-to {
    opacity: 1;
  }
}


</style>