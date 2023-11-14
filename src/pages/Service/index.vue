<template>
  <div>
    <Header class="bgService" id="four"></Header>
    <div class="circleBg">
      <transition name="down">
        <h2 v-if="show">{{ this.content.applicationName }}</h2>
      </transition>
    </div>
    <div class="elevator">
      <ul style="cursor: pointer">
        <li ref="elevator" @click="goAnchor('#one')">服务概述</li>
        <li ref="elevator" @click="goAnchor('#two')">核心功能</li>
        <li ref="elevator" @click="goAnchor('#three')">应用场景</li>
        <li ref="elevator" @click="goAnchor('#four')">返回顶部</li>
      </ul>
    </div>
    <div class="introduceService" id="one">
      <div class="introduceTest">
        <h2>服务概述</h2>
        <span class="bottomLine"></span>
        <div class="introduceTest2">
          {{ this.content.desperation }}
        </div>
      </div>
    </div>

    <div class="applyName">核心功能</div>
    <div class="Core">
      <div class="lCore" id="two">
        <div class="textBox" v-for="(item,index) in content.listFunctions" :key="index">
          <h2 style="font-family: var(--ff-almm);">{{ item.functionName }}</h2>
          <div class="t">{{ item.description }}</div>
        </div>
        <!--        <div class="textBox">-->
        <!--          <h2>文本文本</h2>-->
        <!--          <div class="t">文本文本文本文本文本文本</div>-->
        <!--        </div>-->
        <!--        <div class="textBox">-->
        <!--          <h2>文本文本</h2>-->
        <!--          <div class="t">文本文本文本文本文本文本</div>-->
        <!--        </div>-->
        <!--        <div class="textBox">-->
        <!--          <h2>文本文本</h2>-->
        <!--          <div class="t">文本文本文本文本文本文本</div>-->
        <!--        </div>-->
      </div>
      <div class="rCore"></div>
    </div>
    <div class="applyName">应用场景</div>
    <div class="applyPlace" id="three">
      <div class="apply-Container">
        <div class="bigLeft" @mouseover="maskUp">
          <transition-group name="change">
            <img :src="item.url" v-for="(item) in allImg" :key="item.id" v-show="isShow(item)">
          </transition-group>
          <div class="mask" ref="mask">
          </div>
        </div>
        <div class="smallRight">
          <ul>
            <li v-for="item in allImg" :key="item.id" @click="changImg(item)">
              <img :src="item.url"></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="applyName">订阅</div>
    <div class="purchase">
      <div class="purchasetext">
        <h1>订阅此服务</h1>
        <span style="letter-spacing: 1px">
        订阅后您可进入控制台查看并使用本项服务，开始碳管理
        </span>
      </div>
      <div class="purchaseBtn" @click="goPurchase">购买</div>
    </div>

    <div style="height: 80px"></div>

    <Footer></Footer>

  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from '@/components/footer';

export default {
  name: "service",
  components: {Header, Footer},
  data() {
    return {
      show: false,
      imgNum: 1,
      applyList: [
        {
          id: 1,
          url: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: 2,
          url: 'https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: 3,
          url: 'https://images.pexels.com/photos/2169286/pexels-photo-2169286.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: 4,
          url: 'https://images.pexels.com/photos/261045/pexels-photo-261045.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
      ],
      imgList: [],
      allImg: [],
      url: '',
      contentId: '',
      content: ''
    };
  },
  mounted() {
    this.show = true;
    this.contentId = this.$route.query.id
    this.getContent(this.contentId)
    setTimeout(() => {
      this.getImg()
      setTimeout(() => {
        for (var i = 0; i < this.imgList.length; i++) {
          var a = {
            id: i,
            url: this.imgList[i]
          }
          this.allImg.push(a)
          console.log(this.allImg);
        }
      }, 300);
    }, 500)
  },
  // created(){
  // this.contentId =this.$route.params.id
  //   this.getContent(this.contentId)
  //绑定自定义事件
  //  this.$bus.$on('getServiceId',(itemId)=>{
  // this.contentId = itemId
  // })
  // },
  beforeDestroy() {
    this.$bus.$off('getServiceId')
  },
  methods: {
    goAnchor(id) {
      var anchor = document.querySelector(id);
      window.scrollTo({
        top: anchor.offsetTop - 180,
        behavior: "smooth",
      });
    },
    goPurchase() {
      this.$router.push({
        name: 'Purchase', query: {
          sid: this.contentId,
          name: this.content.applicationName
        }
      })

    },
    changImg(item) {
      this.imgNum = item.id
    },
    isShow(item) {
      if (this.imgNum == item.id) {
        return true
      } else {
        return false
      }
    },
    maskUp() {
      const {mask} = this.$refs
    },
    // 服务详情接口
    getContent(contentId) {
      this.getRequest(`tance-service-serve/service/base/BG/getById/${contentId}`).then(res => {
        this.content = res.data
        console.log(res);
      }).catch(err => {
      })
    },
    getImg() {
      setTimeout(() => {
        for (var i = 0; i < this.content.resourceIds.length; i++) {
          this.getRequest(`media-control/media/preview/${this.content.resourceIds[i]}`).then(res => {
            this.imgList.push(res.data)
          })
        }
      }, 100);
    }
  },
};
</script>

<style scoped>
.bgService {
  position: absolute;
}

.circleBg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 370px;
  clip-path: polygon(50% 0%, 100% 0, 100% 50%, 50% 100%, 0 50%, 0 0);
  background-image: url(https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqI8?ver=3f68);
  background-size: 100% 100%;
}

.circleBg h2 {
  user-select: none;
  font-size: 40px;
  color: var(--cultured);
  font-family: var(--ff-albb-semibold);
}

.introduceService {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 150px;
}

.introduceTest {
  margin-top: 1%;
  width: 25%;
  height: 50%;
}

.introduceTest h2 {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
}

.bottomLine {
  display: inline-block;
  height: 3px;
  width: 40%;
  margin-left: 30%;
  border-radius: 50px;
  background-color: var(--youth-green-3);
}

.introduceTest2 {
  margin-top: 1%;
  width: 100%;
  height: 50%;
  font-size: 15px;
  text-align: center;
  color: rgb(143, 139, 139);
  font-family: var(--ff-albb-light);
}

.elevator {
  position: sticky;
  top: 51px;
  margin-top: 2%;
  margin-bottom: 1%;
  margin-left: 30%;
  height: 60px;
  width: 40%;
  border-radius: 40px;
  box-shadow: 0 0 2px gray;
  z-index: 333;
}

.elevator ul {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 40px;
}

.elevator ul li {
  width: 25%;
  height: 100%;
  font-size: 15px;
  /*line-height: 55px;*/
  display: flex;
  align-items: center;
  justify-content: center;
  color: #717171;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  transition: 0.2s;
  font-weight: 600;
}

.elevator ul li:nth-child(1) {
  border-radius: 40px 0 0 40px;
}

.elevator ul li:nth-child(4) {
  border-radius: 0px 40px 40px 0;
}

.elevator ul li:hover {
  background-color: var(--youth-green);
  color: rgb(252, 252, 252);
}

.applyPlace {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 410px;
  /*margin-bottom: 30px;*/
  margin-bottom: 5%;

}

.applyName {
  margin: auto;
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  border-bottom: 4px var(--youth-green-3) solid;
}

.apply-Container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 400px;
  border-radius: 20px;
  margin-top: 30px;
}

.bigLeft {
  position: relative;
  margin-left: 5%;
  width: 40%;
  height: 100%;
  overflow: hidden;
}

.bigLeft img {
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}

.mask {
  position: absolute;
  z-index: 22;
  width: 100%;
  height: 50%;
  top: 400px;
  transition: 1s;
  background-color: rgba(218, 218, 218, 0.8);
  animation: dowm 1s forwards;

}

.bigLeft:hover .mask {
  animation: up 1s forwards;
}

@keyframes up {
  0% {
    top: 450px;
  }

  100% {
    top: 200px;
  }
}

@keyframes dowm {
  0% {
    top: 200px;
  }

  100% {
    top: 450px;
  }
}

.smallRight {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 45%;
  height: 100%;
}

.smallRight ul li {
  float: left;
  margin-top: 5%;
  margin-left: 10%;
  width: 230px;
  height: 40%;
}

.smallRight ul li img {
  border-radius: 30px;
  width: 230px;
  height: 100%;
  transition: .5s;
}

.smallRight ul li img:hover {
  scale: 1.1;
  box-shadow: 0 0 10px gray;
}

.Core {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 2%;
  width: 100%;
  height: 400px;
  margin-bottom: 3%;
}

.lCore {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 42%;
  height: 400px;
}

.rCore {
  width: 37%;
  height: 93%;
  border-radius: 10px;
  background: url(https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=600) no-repeat;
  background-size: 100% 100%;
}

.textBox {
  width: 80%;
  height: 20%;
  margin-left: 10%;
  margin-bottom: 4%;
  border-radius: 10px;
  transition: 0.3s;
  background-color: var(--bg-green);
  padding-top: 15px;
}

.textBox h2 {
  margin-left: 20px;
  /*color: rgb(121, 233, 126);*/
  color: var(--youth-green-2);
  font-size: var(--fs-5);
}

.t {
  height: 70%;
  width: 80%;
  font-size: 13px;
  margin-left: 20px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #6e6d6d;
}

.textBox:hover {
  /*box-shadow: 0 0 5px gray;*/
  box-shadow: var(--shadow-6);
  transform: scale(1.03);
  transition: var(--transition-3);
}

.purchase {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  margin-left: 10%;
  width: 80%;
  height: 120px;
  gap: 40px;
}

.purchasetext {
  width: 35%;
  height: 90%;
  text-align: center;
  font-size: 14px;
  color: rgb(134, 134, 134);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.purchasetext h1 {
  text-align: center;
  color: var(--youth-green);
  font-size: var(--fs-3);
  margin-bottom: 10px;
}

.purchaseBtn {
  margin-left: 5%;
  width: 20%;
  height: 58%;
  font-size: var(--fs-3-5);
  color: white;
  font-family: var(--ff-almm);
  letter-spacing: 5px;
  border-radius: 10px;
  background-color: var(--youth-green-2);
  cursor: pointer;
  transition: .9s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.purchaseBtn:hover {
  /*background-color: #67a85f;*/
  background-color: #89e8a7;
  transition: var(--transition-3);
}

/* 动画  上*/
.change-enter-active,
.change-leave-active {
  transition: all 0.5s ease;
}

.change-enter-from,
.change-leave-to {
  opacity: 0;
}

@media (max-width: 1360px) {
  .smallRight ul li {
    float: left;
    margin-top: 5%;
    margin-left: 10%;
    width: 180px;
    height: 42%;
  }

  .smallRight ul li img {
    border-radius: 30px;
    width: 180px;
    height: 100%;
    transition: .5s;
  }
}

@media (max-width: 1160px) {
  .elevator {
    position: sticky;
    top: 51px;
    margin-top: 2%;
    margin-bottom: 1%;
    margin-left: 22%;
    height: 60px;
    width: 55%;
    border-radius: 40px;
    box-shadow: 0 0 5px gray;
  }

  .smallRight ul li {
    float: left;
    margin-top: 5%;
    margin-left: 10%;
    width: 150px;
    height: 42%;
  }

  .smallRight ul li img {
    border-radius: 30px;
    width: 150px;
    height: 100%;
    transition: .5s;
  }
}

@media (max-width: 960px) {
  .elevator {
    position: sticky;
    top: 51px;
    margin-top: 2%;
    margin-bottom: 1%;
    margin-left: 22%;
    height: 60px;
    width: 55%;
    border-radius: 40px;
    box-shadow: 0 0 5px gray;
  }

  .smallRight ul li {
    float: left;
    margin-top: 8%;
    margin-left: 10%;
    width: 110px;
    height: 40%;
  }

  .smallRight ul li img {
    border-radius: 30px;
    width: 110px;
    height: 100%;
    transition: .5s;
  }
}

@media (max-width: 660px) {
  .smallRight ul li {
    float: left;
    margin-top: 5%;
    margin-left: 10%;
    width: 120px;
    height: 22%;
  }

  .smallRight ul li img {
    border-radius: 30px;
    width: 120px;
    height: 100%;
    transition: .5s;
  }
}
</style>