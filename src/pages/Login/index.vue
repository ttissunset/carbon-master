<template>
  <div class="container">
    <div class="login-box">
      <div class="login-box-left stop-select">
        <img @click="$router.push('home')"
             class="login-box-left-icon"
             src="https://myalybucket.oss-cn-shenzhen.aliyuncs.com/GHOSTER-dark.png"
             alt="#"
        />
        <div class="login-box-left-title stop-select">欢迎来访碳进制</div>
        <div class="login-box-left-login" v-if="loginPart === 'password'">
          <div class="login-box-left-description">
            在您进行购买、使用控制台、获得一线资讯前，我们需要对您的身份进行验证。
          </div>
          <div class="login-box-left-top-btn-container">
            <div class="login-box-left-top-btn" @click="loginPart = 'phone'">
              <ion-icon name="mail-outline"></ion-icon>
              <span>使用邮箱验证码登录</span>
            </div>

            <div
                class="login-box-left-top-btn top-btn-green"
                @click="loginPart = 'register'"
            >
              <ion-icon
                  style="color: var(--white)"
                  name="person-add"
              ></ion-icon>
              <span style="color: var(--white)">创建一个新的账号</span>
            </div>
          </div>
          <div class="login-box-left-split-container">
            <div class="login-box-left-split-item"></div>
            <span class="login-box-left-split-text">或者</span>
            <div class="login-box-left-split-item"></div>
          </div>
          <div class="login-box-left-form">
            <div class="input-container">
              <input
                  class="login-box-left-form-input"
                  placeholder="账户名"
                  type="text"
                  v-model="inputValue.username"
              />
            </div>
            <div class="input-container">
              <input
                  class="login-box-left-form-input"
                  placeholder="密码"
                  :type="inputType"
                  v-model="inputValue.password"
                  @keyup.enter="Login"
              />
              <button
                  class="show-password-button"
                  @click="showPSW"
                  v-if="inputValue.password !== ''"
              >
                <ion-icon
                    name="eye-outline"
                    v-if="inputType === 'password'"
                ></ion-icon>
                <ion-icon name="eye-off-outline" v-else></ion-icon>
              </button>
            </div>
          </div>
          <div class="login-box-left-bottom-btn-container">
            <div class="login-box-left-bottom-btn-container-total">
              <div class="login-box-left-bottom-btn-container-total-item-left">
                <a>忘记密码？</a>
              </div>
              <div class="login-box-left-bottom-btn-container-total-item-right">
                <div class="login-box-left-bottom-btn-container-total-item-btn bk1" @click="Login">
                  <span>登录</span>
                  <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="loginPart === 'register'">
          <div class="login-box-left-description">
            创建一个专属于您的碳进制服务账号，您可以获得我们更优质的服务。
          </div>
          <div class="login-box-left-top-btn-container">
            <div class="login-box-left-top-btn" @click="loginPart = 'phone'">
              <ion-icon name="mail-outline"></ion-icon>
              <span>使用邮箱验证码登录</span>
            </div>

            <div
                class="login-box-left-top-btn top-btn-green"
                @click="loginPart = 'password'"
            >
              <ion-icon
                  style="color: var(--white)"
                  name="lock-closed"
              ></ion-icon>
              <span style="color: var(--white)">使用账号密码登录</span>
            </div>
          </div>
          <div class="login-box-left-split-container">
            <div class="login-box-left-split-item"></div>
            <span class="login-box-left-split-text">或者</span>
            <div class="login-box-left-split-item"></div>
          </div>
          <div class="login-box-left-form">
            <div class="input-container">
              <input
                  class="login-box-left-form-input"
                  style="width:120px"
                  placeholder="账户名"
                  type="text"
                  name="1"
                  @blur="change"
                  maxlength="19"
                  v-model="inputValue.username"
              />
              <div class="promptLeft" v-show="flag">请输入正确的格式，字数在4-12之间</div>
              <input
                  class="login-box-left-form-input"
                  style="width:270px"
                  placeholder="邮箱号码"
                  type="text"
                  name="4"
                  @blur="change"
                  maxlength="19"
                  v-model="inputValue.email"
              />
              <div class="prompt" v-show="flag4">请输入的邮箱格式</div>
            </div>
            <div class="input-container">
              <input
                  class="login-box-left-form-input"
                  placeholder="密码"
                  :type="inputType"
                  @blur="change"
                  name="2"
                  ref="psw"
                  v-model="inputValue.password"
              />
              <div class="prompt" v-show="flag2">密码格式错误</div>
              <button
                  class="show-password-button"
                  @click="showPSW"
                  v-if="inputValue.password !== ''"
              >
                <ion-icon
                    name="eye-outline"
                    v-if="inputType === 'password'"
                ></ion-icon>
                <ion-icon name="eye-off-outline" v-else></ion-icon>
              </button>
            </div>
            <div class="input-container">
              <input
                  class="login-box-left-form-input"
                  placeholder="请确认您的密码"
                  @blur="change"
                  :type="inputType"
                  name="3"
                  v-model="inputValue.password1"
              />
              <div class="prompt" v-show="flag3">两次输入密码不符</div>
              <button
                  class="show-password-button"
                  @click="showPSW"
                  v-if="inputValue.password !== ''"
              >
                <ion-icon
                    name="eye-outline"
                    v-if="inputType === 'password'"
                ></ion-icon>
                <ion-icon name="eye-off-outline" v-else></ion-icon>
              </button>
            </div>
          </div>
          <div class="login-box-left-bottom-btn-container">
            <div class="login-box-left-bottom-btn-container-total">
              <div class="login-box-left-bottom-btn-container-total-item-left">
                <input
                    v-model="inputValue.code"
                    class="login-box-left-form-input-valid"
                    placeholder="验证码"
                />
                <div class="login-box-left-form-input-btn" @click="getRegisterCode">
                  发送验证码
                </div>
              </div>
              <div class="login-box-left-bottom-btn-container-total-item-right">
                <div class="login-box-left-bottom-btn-container-total-item-btn">
                  <span @click="goRegister">注册</span>
                  <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="loginPart === 'phone'">
          <div class="login-box-left-description">
            我们还可以使用邮箱验证码的方式对您的身份进行验证。
          </div>
          <div class="login-box-left-top-btn-container">
            <div class="login-box-left-top-btn" @click="loginPart = 'password'">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <span>使用账号密码登录</span>
            </div>

            <div
                class="login-box-left-top-btn top-btn-green"
                @click="loginPart = 'register'"
            >
              <ion-icon
                  style="color: var(--white)"
                  name="person-add"
              ></ion-icon>
              <span style="color: var(--white)">创建一个新的账号</span>
            </div>
          </div>
          <div class="login-box-left-split-container">
            <div class="login-box-left-split-item"></div>
            <span class="login-box-left-split-text">或者</span>
            <div class="login-box-left-split-item"></div>
          </div>
          <div class="login-box-left-form">
            <div class="input-container">
              <input
                  class="login-box-left-form-input"
                  placeholder="邮箱号码"
                  type="text"
                  v-model="inputValue.email"
              />
            </div>
            <div class="input-container">

              <input
                  class="login-box-left-form-input"
                  placeholder="账户名"
                  type="text"
                  v-model="inputValue.username"
              />
              <input class="login-box-left-form-input" v-model="inputValue.code" placeholder="验证码"/>
              <div class="login-box-left-form-input-btn-2" @click="sendEmailCode">发送验证码</div>
            </div>
          </div>
          <div class="login-box-left-bottom-btn-container">
            <div class="login-box-left-bottom-btn-container-total">
              <div
                  class="login-box-left-bottom-btn-container-total-item-left"
              ></div>
              <div class="login-box-left-bottom-btn-container-total-item-right">
                <div class="login-box-left-bottom-btn-container-total-item-btn">
                  <span @click="codeLogin">登录</span>
                  <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="login-box-right"></div>
    </div>
  </div>
</template>

<script>

import {Notification} from 'element-ui'

export default {
  name: "index",
  data() {
    return {
      inputType: "password",
      flag: false,
      flag2: false,
      flag3: false,
      flag4: false,
      user_token: '',
      loginValue: {
        client_id: '',
        client_secret: '',
        grant_type: ''
      },
      inputValue: {
        email: "",
        password: "",
        phoneNumber: "",
        username: "",
        password1: "",
        code: '',
      },
      loginPart: "password",
    };
  },
  watch: {
    $route(to, from) {
      console.log(to.path);
      //  window.location.reload()
    }
  },
  methods: {
    showPSW() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    //注册用户接口
    registerUser() {
      const {username, password, email, phoneNumber, password1, code} = this.inputValue;
      var user = {
        "username": username,
        "password": password,
        "email": email,
        "registerSysCode": code,
        "phoneNumber": phoneNumber,
      };
      username && password == password1 && this.postRequest("/auth-user/auth-admin/AuthUser/AuthUserRegister", user).then((res) => {
        alert("注册成功");
        console.log(res);
      });
    },
    // 用户登录接口
    async userLogin() {
      const {username, password} = this.inputValue;
      let a = await this.postRequest(`/security-oauth/oauth/token?grant_type=password&client_id=tanjinzhi&client_secret=abcxyz&username=${username}&password=${password}`)
      console.log(a);
      let code = '00000'
      if (a.code == code) {
        this.user_token = a.data.access_token
        var bearerToken = ` Bearer ${this.user_token}`
        localStorage.setItem('Authorization', bearerToken)
        Notification({
          title: '成功',
          message: '登录成功！',
          type: 'success',
          position: "bottom-right"
        });
        this.$router.push('/home')
      } else {
        alert('您的账号或密码错误')
        return
      }
    },
    async codeLogin() {
      const {username, email, code} = this.inputValue;
      let a = await this.postRequest(`/security-oauth/oauth/token?grant_type=sms_code&client_id=tanjinzhi&client_secret=abcxyz&username=${username}&email=${email}&code=${code}`)
      console.log(a);
      if (a.code == '00000') {
        this.user_token = a.data.access_token
        var bearerToken = ` Bearer ${this.user_token}`
        localStorage.setItem('Authorization', bearerToken)
        this.$router.push('/home')
      } else {
        alert('您的账号或密码错误')
        return
      }
    },
    validEmail() {
      let reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
      console.log(reg.test(this.inputValue.email))
      return reg.test(this.inputValue.email)
    },
    // 获取注册验证码
    getRegisterCode() {
      if (this.inputValue.email === null || this.inputValue.email === "") {
        console.log("------------")
        Notification({
          title: '邮箱验证码发送失败',
          message: '邮箱为空，请填写邮箱',
          type: 'error'
        });
        return
      }
      if (!this.validEmail()) {
        Notification({
          title: '邮箱验证码发送失败',
          message: '邮箱格式有误，请检查您的格式',
          type: 'error'
        });
        return
      }
      this.postRequest(`/auth-user/auth-admin/AuthUser/Systoken?email=${this.inputValue.email}`).then((res) => {
        console.log(res);
        if (res.code === "00000") {
          Notification({
            title: '成功',
            message: '邮箱验证码发送成功',
            type: 'success'
          });
        } else {
          Notification({
            title: '错误',
            message: '邮箱验证码发送失败',
            type: 'error'
          });
        }
      });
    },
    sendEmailCode() {
      if (this.inputValue.email === null || this.inputValue.email === "") {
        console.log("------------")
        Notification({
          title: '邮箱验证码发送失败',
          message: '邮箱为空，请填写邮箱',
          type: 'error'
        });
        return
      }
      if (!this.validEmail()) {
        Notification({
          title: '邮箱验证码发送失败',
          message: '邮箱格式有误，请检查您的格式',
          type: 'error'
        });
        return
      }
      this.postRequest(`security-oauth/oauth/Systoken?email=${this.inputValue.email}`).then((res) => {
        console.log(res);
      });
    },
    // 注册
    goRegister() {
      const {password, username, password1, code} = this.inputValue;
      if (username && password && password1 && code) {
        if (this.flag == false && this.flag2 == false && this.flag3 == false) {
          this.registerUser()
        } else {
          alert("输入格式有误");
          return;
        }
      } else {
        alert("请输入完整信息");
        return;
      }
    },
    //登录
    Login() {
      this.userLogin()
    },
    // 表单验证
    change(e) {
      const {psw} = this.$refs
      if (e.target.name == 1) {
        var a = /^[a-zA-Z0-9_-]{4,12}$/
        if (a.test(e.target.value)) {
          this.flag = false;
        } else {
          this.flag = true;
        }
      }
      if (e.target.name == 2) {
        var b = /^[a-zA-Z0-9]{6,18}$/
        if (b.test(e.target.value)) {
          this.flag2 = false;
        } else {
          this.flag2 = true;
        }
      }
      if (e.target.name == 3) {
        var b = psw.value
        var c = e.target.value
        if (c != b) {
          this.flag3 = true;
        } else {
          this.flag3 = false;
        }
      }
      if (e.target.name == 4) {
        var b = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/
        if (b.test(e.target.value)) {
          this.flag4 = false
        } else {
          this.flag4 = true
        }
      }
    },
  },

  created() {
    this.showPSW = this.$clickThrottle(this.showPSW);
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--bg-green);
}

.login-box {
  width: 75%;
  height: 550px;
  margin-top: 4%;
  border-radius: var(--radius-20);
  display: flex;
  padding: 10px;
  background-color: var(--white);
  box-shadow: var(--shadow-3);
}

.login-box-left {
  width: 68%;
  height: 100%;
  border-radius: var(--radius-20);
}

.login-box-left-icon {
  width: 180px;
}

.login-box-left-title {
  width: 100%;
  height: 90px;
  text-align: center;
  font-size: var(--fs-2);
  font-family: var(--ff-albb-semibold);
  font-weight: var(--fw-600);
  color: var(--blackish-green);
  letter-spacing: 3px;
  line-height: 90px;
}

.login-box-left-login {
  width: 100%;
  height: auto;
}

.login-box-left-description {
  width: 100%;
  height: 25px;
  text-align: center;
  font-size: var(--fs-7);
  color: var(--light-raisin-black);
}

.login-box-left-top-btn-container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.login-box-left-top-btn {
  width: 55%;
  height: 42px;
  border-radius: var(--radius-10);
  border: var(--light-gray) solid 1px;
  text-align: center;
  font-size: var(--fs-7);
  line-height: 42px;
  font-weight: var(--fw-600);
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 2%;
}

.top-btn-green {
  background-color: var(--youth-green);
  border: none;
}

.login-box-left-top-btn:is(:hover, :focus-visible) {
  transform: translateY(-3px);
  transition: var(--transition-3);
}

.login-box-left-top-btn ion-icon {
  font-size: 16px;
  margin-right: 10px;
  position: relative;
}

.login-box-left-split-container {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  margin-top: 2%;
}

.login-box-left-split-item {
  width: 25%;
  height: 10px;
  border-bottom: var(--light-gray) solid 1px;
}

.login-box-left-split-text {
  height: 20px;
  line-height: 20px;
  margin: 0 3%;
  color: var(--light-raisin-black);
}

.login-box-left-form {
  width: 100%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-box-left-form-input {
  width: 100%;
  height: 40px;
  margin-bottom: 3%;
  border: var(--light-gray) solid 1px;
  border-radius: var(--radius-10);
  padding-left: 15px;
  padding-right: 32px;
  font-size: var(--fs-7);
  position: relative;
  display: flex;
}

.login-box-left-form-input-valid {
  width: 100%;
  height: 40px;
  margin-bottom: 3%;
  border: var(--light-gray) solid 1px;
  border-radius: var(--radius-10);
  padding-left: 15px;
  padding-right: 80px;
  font-size: var(--fs-7);
  position: relative;
  display: flex;
}

.login-box-left-form-input-btn {
  width: 100px;
  height: 42px;
  background-color: var(--youth-green);
  border-radius: var(--radius-8);
  position: absolute;
  font-size: var(--fs-7);
  font-weight: var(--fw-600);
  color: var(--white);
  text-align: center;
  line-height: 40px;
  margin-left: 120px;
}

.login-box-left-form-input-btn-2 {
  width: 100px;
  height: 42px;
  background-color: var(--youth-green);
  border-radius: var(--radius-8);
  position: absolute;
  font-size: var(--fs-7);
  font-weight: var(--fw-600);
  color: var(--white);
  text-align: center;
  line-height: 40px;
  margin-left: 290px;
  right: 0;
  border: none;
  z-index: 9999999;
  cursor: pointer;
}

.show-password-button {
  position: absolute;
  right: 1px;
  border: none;
  background: transparent;
  z-index: 9999999;
  width: 30px;
  height: 20px;
  margin-top: 12px;
  cursor: pointer;
}

.show-password-button ion-icon {
  font-size: 18px;
  color: #333;
}

input:focus {
  outline: none; /* 隐藏默认的选中边框 */
  border: 1px solid var(--blackish-green); /* 设置选中状态下的边框样式 */
  transition: var(--transition-2);
}

.input-container {
  position: relative;
  width: 55%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #fff;
}

.login-box-right {
  width: 42%;
  background-image: url("https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-markus-winkler-4069051.jpg");
  background-size: 100% 100%;
  border-radius: var(--radius-20);
}

.login-box-left-bottom-btn-container {
  float: left;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
}

.login-box-left-bottom-btn-container-total {
  width: 55%;
  height: 50px;
  display: flex;
}

.login-box-left-bottom-btn-container-total-item-left {
  width: 50%;
  height: 100%;
  display: flex;
  position: relative;
}

.login-box-left-bottom-btn-container-total-item-right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

.login-box-left-bottom-btn-container-total-item-btn {
  width: 150px;
  height: 42px;
  background-color: var(--blue-purple);
  border-radius: var(--radius-6);
  color: var(--white);
  font-size: var(--fs-6);
  font-weight: var(--fw-600);
  letter-spacing: 3px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.login-box-left-bottom-btn-container-total-item-btn ion-icon {
  font-size: var(--fs-4);
}

.prompt {
  position: absolute;
  font-weight: 600;
  font-size: 12px;
  width: 130px;
  height: 25px;
  color: rgb(231, 113, 113);
  right: -140px;
  top: 10px;
}

.promptLeft {
  position: absolute;
  font-weight: 600;
  font-size: 12px;
  width: 130px;
  height: 25px;
  color: rgb(231, 113, 113);
  left: -150px;
  top: 10px;
}

/*媒体查询*/
@media (max-width: 1480px) {
  .login-box {
    width: 85%;
    height: 550px;
    margin-top: 4%;
    border-radius: var(--radius-20);
    display: flex;
    padding: 10px;
    background-color: var(--white);
    box-shadow: var(--shadow-3);
  }

  .login-box-left {
    width: 60%;
    height: 100%;
    border-radius: var(--radius-20);
  }

  .login-box-left-icon {
    width: 180px;
  }

  .login-box-left-title {
    width: 100%;
    height: 75px;
    text-align: center;
    font-size: var(--fs-2);
    font-family: var(--ff-albb-semibold);
    font-weight: var(--fw-600);
    color: var(--blackish-green);
    letter-spacing: 3px;
    line-height: 75px;
  }

  .login-box-left-login {
    width: 100%;
    height: auto;
  }

  .login-box-left-description {
    width: 100%;
    height: 25px;
    text-align: center;
    font-size: var(--fs-7);
    color: var(--light-raisin-black);
  }

  .login-box-left-top-btn-container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .login-box-left-top-btn {
    width: 60%;
    height: 42px;
    border-radius: var(--radius-10);
    border: var(--light-gray) solid 1px;
    text-align: center;
    font-size: var(--fs-7);
    line-height: 42px;
    font-weight: var(--fw-600);
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 2%;
  }

  .top-btn-green {
    background-color: var(--youth-green);
    border: none;
  }

  .login-box-left-top-btn:is(:hover, :focus-visible) {
    transform: translateY(-3px);
    transition: var(--transition-3);
  }

  .login-box-left-top-btn ion-icon {
    font-size: 16px;
    margin-right: 10px;
    position: relative;
  }

  .login-box-left-split-container {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    margin-top: 2%;
  }

  .login-box-left-split-item {
    width: 25%;
    height: 10px;
    border-bottom: var(--light-gray) solid 1px;
  }

  .login-box-left-split-text {
    height: 20px;
    line-height: 20px;
    margin: 0 3%;
    color: var(--light-raisin-black);
  }

  .login-box-left-form {
    width: 100%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-box-left-form-input {
    width: 100%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 32px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-valid {
    width: 80%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 80px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-btn {
    width: 100px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    right: 0;
    border: none;
    z-index: 9999999;
    cursor: pointer;
  }

  .login-box-left-form-input-btn-2 {
    width: 100px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    right: 0;
    border: none;
    z-index: 9999999;
    cursor: pointer;
  }

  .show-password-button {
    position: absolute;
    right: 1px;
    border: none;
    background: transparent;
    z-index: 9999999;
    width: 30px;
    height: 20px;
    margin-top: 12px;
    cursor: pointer;
  }

  .show-password-button ion-icon {
    font-size: 18px;
    color: #333;
  }

  input:focus {
    outline: none; /* 隐藏默认的选中边框 */
    border: 1px solid var(--blackish-green); /* 设置选中状态下的边框样式 */
    transition: var(--transition-2);
  }

  .input-container {
    width: 60%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .login-box-right {
    width: 40%;
    background-image: url("https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-markus-winkler-4069051.jpg");
    background-size: 100% 100%;
    border-radius: var(--radius-20);
  }

  .login-box-left-bottom-btn-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
  }

  .login-box-left-bottom-btn-container-total {
    width: 60%;
    height: 50px;
    display: flex;
  }

  .login-box-left-bottom-btn-container-total-item-left {
    width: 50%;
    height: 100%;
    display: flex;
    position: relative;
  }

  .login-box-left-bottom-btn-container-total-item-right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .login-box-left-bottom-btn-container-total-item-btn {
    width: 150px;
    height: 42px;
    background-color: var(--blue-purple);
    border-radius: var(--radius-6);
    color: var(--white);
    font-size: var(--fs-6);
    font-weight: var(--fw-600);
    letter-spacing: 3px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .login-box-left-bottom-btn-container-total-item-btn ion-icon {
    font-size: var(--fs-4);
  }
}

@media (max-width: 1280px) {
  .login-box {
    width: 85%;
    height: 550px;
    margin-top: 4%;
    border-radius: var(--radius-20);
    display: flex;
    padding: 10px;
    background-color: var(--white);
    box-shadow: var(--shadow-3);
  }

  .login-box-left {
    width: 60%;
    height: 100%;
    border-radius: var(--radius-20);
  }

  .login-box-left-icon {
    width: 180px;
  }

  .login-box-left-title {
    width: 100%;
    height: 75px;
    text-align: center;
    font-size: var(--fs-2);
    font-family: var(--ff-albb-semibold);
    font-weight: var(--fw-600);
    color: var(--blackish-green);
    letter-spacing: 3px;
    line-height: 75px;
  }

  .login-box-left-login {
    width: 100%;
    height: auto;
  }

  .login-box-left-description {
    width: 100%;
    height: 25px;
    text-align: center;
    font-size: var(--fs-7);
    color: var(--light-raisin-black);
  }

  .login-box-left-top-btn-container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .login-box-left-top-btn {
    width: 70%;
    height: 42px;
    border-radius: var(--radius-10);
    border: var(--light-gray) solid 1px;
    text-align: center;
    font-size: var(--fs-7);
    line-height: 42px;
    font-weight: var(--fw-600);
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 2%;
  }

  .top-btn-green {
    background-color: var(--youth-green);
    border: none;
  }

  .login-box-left-top-btn:is(:hover, :focus-visible) {
    transform: translateY(-3px);
    transition: var(--transition-3);
  }

  .login-box-left-top-btn ion-icon {
    font-size: 16px;
    margin-right: 10px;
    position: relative;
  }

  .login-box-left-split-container {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    margin-top: 2%;
  }

  .login-box-left-split-item {
    width: 25%;
    height: 10px;
    border-bottom: var(--light-gray) solid 1px;
  }

  .login-box-left-split-text {
    height: 20px;
    line-height: 20px;
    margin: 0 3%;
    color: var(--light-raisin-black);
  }

  .login-box-left-form {
    width: 100%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-box-left-form-input {
    width: 100%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 32px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-valid {
    width: 100%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 80px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-btn {
    width: 100px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    margin-left: 120px;
  }

  .login-box-left-form-input-btn-2 {
    width: 100px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    right: 0;
    border: none;
    z-index: 9999999;
    cursor: pointer;
  }

  .show-password-button {
    position: absolute;
    right: 1px;
    border: none;
    background: transparent;
    z-index: 9999999;
    width: 30px;
    height: 20px;
    margin-top: 12px;
    cursor: pointer;
  }

  .show-password-button ion-icon {
    font-size: 18px;
    color: #333;
  }

  input:focus {
    outline: none; /* 隐藏默认的选中边框 */
    border: 1px solid var(--blackish-green); /* 设置选中状态下的边框样式 */
    transition: var(--transition-2);
  }

  .input-container {
    width: 70%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .login-box-right {
    width: 40%;
    background-image: url("https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-markus-winkler-4069051.jpg");
    background-size: 100% 100%;
    border-radius: var(--radius-20);
  }

  .login-box-left-bottom-btn-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
  }

  .login-box-left-bottom-btn-container-total {
    width: 70%;
    height: 50px;
    display: flex;
  }

  .login-box-left-bottom-btn-container-total-item-left {
    width: 50%;
    height: 100%;
    display: flex;
    position: relative;
  }

  .login-box-left-bottom-btn-container-total-item-right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .login-box-left-bottom-btn-container-total-item-btn {
    width: 150px;
    height: 42px;
    background-color: var(--blue-purple);
    border-radius: var(--radius-6);
    color: var(--white);
    font-size: var(--fs-6);
    font-weight: var(--fw-600);
    letter-spacing: 3px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .login-box-left-bottom-btn-container-total-item-btn ion-icon {
    font-size: var(--fs-4);
  }
}

@media (max-width: 1020px) {
  .login-box {
    width: 75%;
    height: 550px;
    margin-top: 4%;
    border-radius: var(--radius-20);
    display: flex;
    padding: 10px;
    background-color: var(--white);
    box-shadow: var(--shadow-3);
  }

  .login-box-left {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-20);
  }

  .login-box-left-icon {
    width: 180px;
  }

  .login-box-left-title {
    width: 100%;
    height: 70px;
    text-align: center;
    font-size: var(--fs-2);
    font-family: var(--ff-albb-semibold);
    font-weight: var(--fw-600);
    color: var(--blackish-green);
    letter-spacing: 3px;
    line-height: 70px;
  }

  .login-box-left-login {
    width: 100%;
    height: auto;
  }

  .login-box-left-description {
    width: 100%;
    height: 25px;
    text-align: center;
    font-size: var(--fs-7);
    color: var(--light-raisin-black);
  }

  .login-box-left-top-btn-container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .login-box-left-top-btn {
    width: 70%;
    height: 42px;
    border-radius: var(--radius-10);
    border: var(--light-gray) solid 1px;
    text-align: center;
    font-size: var(--fs-7);
    line-height: 42px;
    font-weight: var(--fw-600);
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 2%;
  }

  .top-btn-green {
    background-color: var(--youth-green);
    border: none;
  }

  .login-box-left-top-btn:is(:hover, :focus-visible) {
    transform: translateY(-3px);
    transition: var(--transition-3);
  }

  .login-box-left-top-btn ion-icon {
    font-size: 16px;
    margin-right: 10px;
    position: relative;
  }

  .login-box-left-split-container {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    margin-top: 2%;
  }

  .login-box-left-split-item {
    width: 25%;
    height: 10px;
    border-bottom: var(--light-gray) solid 1px;
  }

  .login-box-left-split-text {
    height: 20px;
    line-height: 20px;
    margin: 0 3%;
    color: var(--light-raisin-black);
  }

  .login-box-left-form {
    width: 100%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-box-left-form-input {
    width: 100%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 32px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-valid {
    width: 50%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 60px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-btn {
    width: 100px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    right: 0;
    border: none;
    z-index: 9999999;
    cursor: pointer;
  }

  .login-box-left-form-input-btn-2 {
    width: 30%;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    right: 0;
    border: none;
    z-index: 9999999;
    cursor: pointer;
  }

  .show-password-button {
    position: absolute;
    right: 1px;
    border: none;
    background: transparent;
    z-index: 9999999;
    width: 30px;
    height: 20px;
    margin-top: 12px;
    cursor: pointer;
  }

  .show-password-button ion-icon {
    font-size: 18px;
    color: #333;
  }

  input:focus {
    outline: none; /* 隐藏默认的选中边框 */
    border: 1px solid var(--blackish-green); /* 设置选中状态下的边框样式 */
    transition: var(--transition-2);
  }

  .input-container {
    width: 70%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .login-box-right {
    width: 0;
    /*background-image: url("https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-markus-winkler-4069051.jpg");*/
    /*background-size: 100% 100%;*/
    /*border-radius: var(--radius-20);*/
  }

  .login-box-left-bottom-btn-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
  }

  .login-box-left-bottom-btn-container-total {
    width: 70%;
    height: 50px;
    display: flex;
  }

  .login-box-left-bottom-btn-container-total-item-left {
    width: 50%;
    height: 100%;
    display: flex;
    position: relative;
  }

  .login-box-left-bottom-btn-container-total-item-right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .login-box-left-bottom-btn-container-total-item-btn {
    width: 150px;
    height: 42px;
    background-color: var(--blue-purple);
    border-radius: var(--radius-6);
    color: var(--white);
    font-size: var(--fs-6);
    font-weight: var(--fw-600);
    letter-spacing: 3px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .login-box-left-bottom-btn-container-total-item-btn ion-icon {
    font-size: var(--fs-4);
  }
}

@media (max-width: 940px) {
  .login-box {
    width: 75%;
    height: 550px;
    margin-top: 4%;
    border-radius: var(--radius-20);
    display: flex;
    padding: 10px;
    background-color: var(--white);
    box-shadow: var(--shadow-3);
  }

  .login-box-left {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-20);
  }

  .login-box-left-icon {
    width: 180px;
  }

  .login-box-left-title {
    width: 100%;
    height: 90px;
    text-align: center;
    font-size: var(--fs-2);
    font-family: var(--ff-albb-semibold);
    font-weight: var(--fw-600);
    color: var(--blackish-green);
    letter-spacing: 3px;
    line-height: 90px;
  }

  .login-box-left-login {
    width: 100%;
    height: auto;
  }

  .login-box-left-description {
    width: 100%;
    height: 25px;
    text-align: center;
    font-size: var(--fs-7);
    color: var(--light-raisin-black);
  }

  .login-box-left-top-btn-container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .login-box-left-top-btn {
    width: 55%;
    height: 42px;
    border-radius: var(--radius-10);
    border: var(--light-gray) solid 1px;
    text-align: center;
    font-size: var(--fs-7);
    line-height: 42px;
    font-weight: var(--fw-600);
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 2%;
  }

  .top-btn-green {
    background-color: var(--youth-green);
    border: none;
  }

  .login-box-left-top-btn:is(:hover, :focus-visible) {
    transform: translateY(-3px);
    transition: var(--transition-3);
  }

  .login-box-left-top-btn ion-icon {
    font-size: 16px;
    margin-right: 10px;
    position: relative;
  }

  .login-box-left-split-container {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    margin-top: 2%;
  }

  .login-box-left-split-item {
    width: 25%;
    height: 10px;
    border-bottom: var(--light-gray) solid 1px;
  }

  .login-box-left-split-text {
    height: 20px;
    line-height: 20px;
    margin: 0 3%;
    color: var(--light-raisin-black);
  }

  .login-box-left-form {
    width: 100%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-box-left-form-input {
    width: 100%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 32px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-valid {
    width: 80%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 80px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-btn {
    width: 100px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    margin-left: 100px;
  }

  .login-box-left-form-input-btn-2 {
    width: 100px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    right: 0;
    border: none;
    z-index: 9999999;
    cursor: pointer;
  }

  .show-password-button {
    position: absolute;
    right: 1px;
    border: none;
    background: transparent;
    z-index: 9999999;
    width: 30px;
    height: 20px;
    margin-top: 12px;
    cursor: pointer;
  }

  .show-password-button ion-icon {
    font-size: 18px;
    color: #333;
  }

  input:focus {
    outline: none; /* 隐藏默认的选中边框 */
    border: 1px solid var(--blackish-green); /* 设置选中状态下的边框样式 */
    transition: var(--transition-2);
  }

  .input-container {
    width: 55%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .login-box-right {
    width: 0;
    /*background-image: url("https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-markus-winkler-4069051.jpg");*/
    /*background-size: 100% 100%;*/
    /*border-radius: var(--radius-20);*/
  }

  .login-box-left-bottom-btn-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
  }

  .login-box-left-bottom-btn-container-total {
    width: 55%;
    height: 50px;
    display: flex;
  }

  .login-box-left-bottom-btn-container-total-item-left {
    width: 50%;
    height: 100%;
    display: flex;
    position: relative;
  }

  .login-box-left-bottom-btn-container-total-item-right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .login-box-left-bottom-btn-container-total-item-btn {
    width: 120px;
    height: 42px;
    background-color: var(--blue-purple);
    border-radius: var(--radius-6);
    color: var(--white);
    font-size: var(--fs-6);
    font-weight: var(--fw-600);
    letter-spacing: 3px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .login-box-left-bottom-btn-container-total-item-btn ion-icon {
    font-size: var(--fs-4);
  }
}

@media (max-width: 800px) {
  .login-box {
    width: 75%;
    height: 550px;
    margin-top: 4%;
    border-radius: var(--radius-20);
    display: flex;
    padding: 10px;
    background-color: var(--white);
    box-shadow: var(--shadow-3);
  }

  .login-box-left {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-20);
  }

  .login-box-left-icon {
    width: 180px;
  }

  .login-box-left-title {
    width: 100%;
    height: 90px;
    text-align: center;
    font-size: var(--fs-2);
    font-family: var(--ff-albb-semibold);
    font-weight: var(--fw-600);
    color: var(--blackish-green);
    letter-spacing: 3px;
    line-height: 90px;
  }

  .login-box-left-login {
    width: 100%;
    height: auto;
  }

  .login-box-left-description {
    width: 100%;
    height: 25px;
    text-align: center;
    font-size: var(--fs-7);
    color: var(--light-raisin-black);
  }

  .login-box-left-top-btn-container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .login-box-left-top-btn {
    width: 70%;
    height: 42px;
    border-radius: var(--radius-10);
    border: var(--light-gray) solid 1px;
    text-align: center;
    font-size: var(--fs-7);
    line-height: 42px;
    font-weight: var(--fw-600);
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 2%;
  }

  .top-btn-green {
    background-color: var(--youth-green);
    border: none;
  }

  .login-box-left-top-btn:is(:hover, :focus-visible) {
    transform: translateY(-3px);
    transition: var(--transition-3);
  }

  .login-box-left-top-btn ion-icon {
    font-size: 16px;
    margin-right: 10px;
    position: relative;
  }

  .login-box-left-split-container {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    margin-top: 2%;
  }

  .login-box-left-split-item {
    width: 25%;
    height: 10px;
    border-bottom: var(--light-gray) solid 1px;
  }

  .login-box-left-split-text {
    height: 20px;
    line-height: 20px;
    margin: 0 3%;
    color: var(--light-raisin-black);
  }

  .login-box-left-form {
    width: 100%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-box-left-form-input {
    width: 100%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 32px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-valid {
    width: 80%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 80px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-btn {
    width: 100px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    margin-left: 110px;
  }

  .login-box-left-form-input-btn-2 {
    width: 100px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    right: 0;
    border: none;
    z-index: 9999999;
    cursor: pointer;
  }

  .show-password-button {
    position: absolute;
    right: 1px;
    border: none;
    background: transparent;
    z-index: 9999999;
    width: 30px;
    height: 20px;
    margin-top: 12px;
    cursor: pointer;
  }

  .show-password-button ion-icon {
    font-size: 18px;
    color: #333;
  }

  input:focus {
    outline: none; /* 隐藏默认的选中边框 */
    border: 1px solid var(--blackish-green); /* 设置选中状态下的边框样式 */
    transition: var(--transition-2);
  }

  .input-container {
    width: 70%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .login-box-right {
    width: 0;
    /*background-image: url("https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-markus-winkler-4069051.jpg");*/
    /*background-size: 100% 100%;*/
    /*border-radius: var(--radius-20);*/
  }

  .login-box-left-bottom-btn-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
  }

  .login-box-left-bottom-btn-container-total {
    width: 70%;
    height: 50px;
    display: flex;
  }

  .login-box-left-bottom-btn-container-total-item-left {
    width: 50%;
    height: 100%;
    display: flex;
    position: relative;
  }

  .login-box-left-bottom-btn-container-total-item-right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .login-box-left-bottom-btn-container-total-item-btn {
    width: 120px;
    height: 42px;
    background-color: var(--blue-purple);
    border-radius: var(--radius-6);
    color: var(--white);
    font-size: var(--fs-6);
    font-weight: var(--fw-600);
    letter-spacing: 3px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .login-box-left-bottom-btn-container-total-item-btn ion-icon {
    font-size: var(--fs-4);
  }
}

@media (max-width: 640px) {
  .login-box {
    width: 92%;
    height: 550px;
    margin-top: 4%;
    border-radius: var(--radius-20);
    display: flex;
    padding: 10px;
    background-color: var(--white);
    box-shadow: var(--shadow-3);
  }

  .login-box-left {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-20);
  }

  .login-box-left-icon {
    width: 180px;
  }

  .login-box-left-title {
    width: 100%;
    height: 90px;
    text-align: center;
    font-size: var(--fs-2);
    font-family: var(--ff-albb-semibold);
    font-weight: var(--fw-600);
    color: var(--blackish-green);
    letter-spacing: 3px;
    line-height: 90px;
  }

  .login-box-left-login {
    width: 100%;
    height: auto;
  }

  .login-box-left-description {
    width: 100%;
    height: 25px;
    text-align: center;
    font-size: var(--fs-8);
    color: var(--light-raisin-black);
  }

  .login-box-left-top-btn-container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .login-box-left-top-btn {
    width: 70%;
    height: 42px;
    border-radius: var(--radius-10);
    border: var(--light-gray) solid 1px;
    text-align: center;
    font-size: var(--fs-7);
    line-height: 42px;
    font-weight: var(--fw-600);
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 2%;
  }

  .top-btn-green {
    background-color: var(--youth-green);
    border: none;
  }

  .login-box-left-top-btn:is(:hover, :focus-visible) {
    transform: translateY(-3px);
    transition: var(--transition-3);
  }

  .login-box-left-top-btn ion-icon {
    font-size: 16px;
    margin-right: 10px;
    position: relative;
  }

  .login-box-left-split-container {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    margin-top: 2%;
  }

  .login-box-left-split-item {
    width: 25%;
    height: 10px;
    border-bottom: var(--light-gray) solid 1px;
  }

  .login-box-left-split-text {
    height: 20px;
    line-height: 20px;
    margin: 0 3%;
    color: var(--light-raisin-black);
  }

  .login-box-left-form {
    width: 100%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-box-left-form-input {
    width: 100%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 32px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-valid {
    width: 30%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 80px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-btn {
    width: 80px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-8);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    margin-left: 80px;
  }

  .login-box-left-form-input-btn-2 {
    width: 100px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    right: 0;
    border: none;
    z-index: 9999999;
    cursor: pointer;
  }

  .show-password-button {
    position: absolute;
    right: 1px;
    border: none;
    background: transparent;
    z-index: 9999999;
    width: 30px;
    height: 20px;
    margin-top: 12px;
    cursor: pointer;
  }

  .show-password-button ion-icon {
    font-size: 18px;
    color: #333;
  }

  input:focus {
    outline: none; /* 隐藏默认的选中边框 */
    border: 1px solid var(--blackish-green); /* 设置选中状态下的边框样式 */
    transition: var(--transition-2);
  }

  .input-container {
    width: 70%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .login-box-right {
    width: 0;
    /*background-image: url("https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-markus-winkler-4069051.jpg");*/
    /*background-size: 100% 100%;*/
    /*border-radius: var(--radius-20);*/
  }

  .login-box-left-bottom-btn-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
  }

  .login-box-left-bottom-btn-container-total {
    width: 70%;
    height: 50px;
    display: flex;
  }

  .login-box-left-bottom-btn-container-total-item-left {
    width: 50%;
    height: 100%;
    display: flex;
    position: relative;
  }

  .login-box-left-bottom-btn-container-total-item-right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .login-box-left-bottom-btn-container-total-item-btn {
    width: 120px;
    height: 42px;
    background-color: var(--blue-purple);
    border-radius: var(--radius-6);
    color: var(--white);
    font-size: var(--fs-6);
    font-weight: var(--fw-600);
    letter-spacing: 3px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .login-box-left-bottom-btn-container-total-item-btn ion-icon {
    font-size: var(--fs-4);
  }
}

@media (max-width: 430px) {
  .login-box {
    width: 92%;
    height: 550px;
    margin-top: 4%;
    border-radius: var(--radius-20);
    display: flex;
    padding: 10px;
    background-color: var(--white);
    box-shadow: var(--shadow-3);
  }

  .login-box-left {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-20);
  }

  .login-box-left-icon {
    width: 180px;
  }

  .login-box-left-title {
    width: 100%;
    height: 90px;
    text-align: center;
    font-size: var(--fs-3);
    font-family: var(--ff-albb-semibold);
    font-weight: var(--fw-600);
    color: var(--blackish-green);
    letter-spacing: 3px;
    line-height: 90px;
  }

  .login-box-left-login {
    width: 100%;
    height: auto;
  }

  .login-box-left-description {
    width: 100%;
    height: 25px;
    text-align: center;
    font-size: var(--fs-9);
    color: var(--light-raisin-black);
  }

  .login-box-left-top-btn-container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .login-box-left-top-btn {
    width: 80%;
    height: 42px;
    border-radius: var(--radius-10);
    border: var(--light-gray) solid 1px;
    text-align: center;
    font-size: var(--fs-7);
    line-height: 42px;
    font-weight: var(--fw-600);
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 2%;
  }

  .top-btn-green {
    background-color: var(--youth-green);
    border: none;
  }

  .login-box-left-top-btn:is(:hover, :focus-visible) {
    transform: translateY(-3px);
    transition: var(--transition-3);
  }

  .login-box-left-top-btn ion-icon {
    font-size: 16px;
    margin-right: 10px;
    position: relative;
  }

  .login-box-left-split-container {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    margin-top: 2%;
  }

  .login-box-left-split-item {
    width: 25%;
    height: 10px;
    border-bottom: var(--light-gray) solid 1px;
  }

  .login-box-left-split-text {
    height: 20px;
    line-height: 20px;
    margin: 0 3%;
    color: var(--light-raisin-black);
  }

  .login-box-left-form {
    width: 100%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-box-left-form-input {
    width: 100%;
    height: 40px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 32px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-valid {
    width: 90%;
    height: 38px;
    margin-bottom: 3%;
    border: var(--light-gray) solid 1px;
    border-radius: var(--radius-10);
    padding-left: 15px;
    padding-right: 55px;
    font-size: var(--fs-7);
    position: relative;
    display: flex;
  }

  .login-box-left-form-input-btn {
    width: 80px;
    height: 39px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-8);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    margin-left: 75px;
  }

  .login-box-left-form-input-btn-2 {
    width: 100px;
    height: 42px;
    background-color: var(--youth-green);
    border-radius: var(--radius-8);
    position: absolute;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: var(--white);
    text-align: center;
    line-height: 40px;
    right: 0;
    border: none;
    z-index: 9999999;
    cursor: pointer;
  }

  .show-password-button {
    position: absolute;
    right: 1px;
    border: none;
    background: transparent;
    z-index: 9999999;
    width: 30px;
    height: 20px;
    margin-top: 12px;
    cursor: pointer;
  }

  .show-password-button ion-icon {
    font-size: 18px;
    color: #333;
  }

  input:focus {
    outline: none; /* 隐藏默认的选中边框 */
    border: 1px solid var(--blackish-green); /* 设置选中状态下的边框样式 */
    transition: var(--transition-2);
  }

  .input-container {
    width: 80%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .login-box-right {
    width: 0;
    /*background-image: url("https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-markus-winkler-4069051.jpg");*/
    /*background-size: 100% 100%;*/
    /*border-radius: var(--radius-20);*/
  }

  .login-box-left-bottom-btn-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
  }

  .login-box-left-bottom-btn-container-total {
    width: 80%;
    height: 50px;
    display: flex;
    margin-top: 2%;
  }

  .login-box-left-bottom-btn-container-total-item-left {
    width: 55%;
    height: 100%;
    display: flex;
    position: relative;
  }

  .login-box-left-bottom-btn-container-total-item-right {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .login-box-left-bottom-btn-container-total-item-btn {
    width: 90px;
    height: 38px;
    background-color: var(--blue-purple);
    border-radius: var(--radius-6);
    color: var(--white);
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    letter-spacing: 3px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: var(--shadow-3);
  }

  .login-box-left-bottom-btn-container-total-item-btn ion-icon {
    font-size: var(--fs-5);
  }
}
</style>