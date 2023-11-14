<template>
  <div>
    <Header/>
    <div class="home-body">
      <div class="home-body-top">
        <div class="home-body-top-left">
          <transition name="down">
            <div class="dazi stop-select" v-show="show">
              <div class="black">为您提供优质的</div>
              <div class="green">数字化企业碳管理</div>
              <div class="black">解决方案</div>
            </div>
          </transition>
          <transition name="up">
            <div class="xiaozi stop-select" v-show="show">
              我们针对企业在经营过程中产生的碳排放量提供跟踪、监测、计量、报告、披露和管理的服务，并通过协助您购买碳信用证、参与碳交易等方式为您实现碳中和的目标
              ，完美应对您企业服务产品的“碳双控”问题。
            </div>
          </transition>
          <div class="button-list">
            <div class="experience" @click="$router.push('/Navigationhome')">立即体验</div>
            <div class="content">联系我们</div>
          </div>
        </div>
        <div class="circleBox">
          <div class="bgcircle"></div>
          <div class="bgcircle1"></div>
          <div class="bgcircle2"></div>
          <div class="bgcircle3"></div>
          <div class="bgcircle4"></div>
          <div class="bgcircle5"></div>
          <div class="bgcircle6"></div>
          <div class="bgcircle7"></div>
          <div class="bgcircle8"></div>
          <div class="bgcircle9"></div>
        </div>
        <Carousel/>
      </div>
      <Introduce/>

      <div class="home-body-steps">
        <div class="home-body-steps-left">
          <div class="home-body-steps-circle"></div>
          <div class="home-body-steps-list">
            <div class="home-body-steps-item">
              <div class="home-body-steps-item-top-container">
                <div class="home-body-steps-item-top">
                  1
                </div>
              </div>

              <div class="home-body-steps-item-main">
                <div class="home-body-steps-item-title">
                  注册账号
                </div>
                <div class="home-body-steps-item-text">
                  拥有碳进制的账号，它将是打开碳中和新世界大门的一把钥匙
                </div>
              </div>
            </div>

            <div class="home-body-steps-item">
              <div class="home-body-steps-item-top-container">
                <div class="home-body-steps-item-top top-white">
                  2
                </div>
              </div>

              <div class="home-body-steps-item-main">
                <div class="home-body-steps-item-title">
                  创建组织
                </div>
                <div class="home-body-steps-item-text">
                  为您所在的公司创建一个组织，它将用于后续服务的订阅
                </div>
              </div>
            </div>

            <div class="home-body-steps-item">
              <div class="home-body-steps-item-top-container">
                <div class="home-body-steps-item-top top-white">
                  4
                </div>
              </div>

              <div class="home-body-steps-item-main">
                <div class="home-body-steps-item-title">
                  进入控制台
                </div>
                <div class="home-body-steps-item-text">
                  订阅服务后进入控制台，享受我们为您带来的高效服务
                </div>
              </div>
            </div>


            <div class="home-body-steps-item">
              <div class="home-body-steps-item-top-container">
                <div class="home-body-steps-item-top">
                  3
                </div>
              </div>

              <div class="home-body-steps-item-main">
                <div class="home-body-steps-item-title">
                  订阅服务
                </div>
                <div class="home-body-steps-item-text">
                  我们为您提供了不同的碳管理相关服务，一定能够符合您的需求
                </div>
              </div>
            </div>

          </div>

        </div>

        <div class="home-body-steps-right">
          <div class="home-body-steps-right-top">
            <div class="home-body-steps-right-top-title">
              仅需4步，我们马上就能为您提供针对性的解决方案
            </div>
          </div>
          <div class="home-body-steps-right-bottom">
            <div class="home-body-steps-right-top-bottom-text">
              无论您是初学者还是专业用户，我们的产品都非常易于使用，让您可以轻松地管理和使用您的数据，提高工作效率。
              现在就开始使用我们的产品，体验简单易用的功能和快捷的服务！
            </div>
            <div class="home-body-steps-right-btn"  @click="$router.push('/Navigationhome')">
              前往订阅
            </div>
          </div>

        </div>
      </div>

      <div class="home-body-suit">
        <div class="home-body-suit-left">
          <div class="home-body-suit-left-title">
            我们的服务都适用于哪些组织？
          </div>
          <div class="home-body-suit-left-list">
            <div class="home-body-suit-left-list-item">
              <div class="home-body-suit-icon-container">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
              <div class="home-body-suit-left-text">无论您是大型企业、中小型公司，还是非营利组织，我们的SAAS碳计算碳中和碳管理系统都能满足您的碳减排需求。</div>
            </div>
            <div class="home-body-suit-left-list-item">
              <div class="home-body-suit-icon-container">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
              <div class="home-body-suit-left-text">我们的SAAS数字碳管理系统对冶金外贸碳减排有最顶尖的探索研究，帮助您实现减排目标并提高品牌形象，展现您对环境的关注和承诺。</div>
            </div>
            <div class="home-body-suit-left-list-item">
              <div class="home-body-suit-icon-container">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
              <div class="home-body-suit-left-text">让您的组织加入碳减排行列，并为未来可持续发展做出贡献。我们的SAAS碳计算碳中和碳管理系统适用于任何有志于减少碳足迹的组织。</div>
            </div>
            <div class="home-body-suit-left-list-item">
              <div class="home-body-suit-icon-container">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
              <div class="home-body-suit-left-text">我们的SAAS碳计算碳中和碳管理系统专门为企业和组织量身打造，旨在帮助您量化碳排放、制定减排策略，并实现碳中和目标。</div>
            </div>
            <div class="home-body-steps-right-btn-container" style="width: 85%">
              <div class="home-body-steps-right-btn" style="margin-top: 3%;"  @click="$router.push('/Navigationhome')">
                前往订阅
              </div>
            </div>

          </div>
        </div>
        <div class="home-body-suit-right stop-select">
          <img class="home-body-suit-right-img-1"
               src="https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-yaroslav-shuraev-6282599.jpg">

          <img class="home-body-suit-right-img-2"
               src="https://myalybucket.oss-cn-shenzhen.aliyuncs.com/pexels-hicret-13880696.jpg">
        </div>
      </div>

      <Accordion class="accordion"/>

      <div class="home-body-cooperate stop-select">
        <div class="home-body-cooperate-list">
          <div class="home-body-cooperate-list-item" v-for="(item,index) in cooperateList" :key="index">
            <img :style="{width:item.size+'px'}" :src="item.url">
          </div>
        </div>
      </div>

      <!--      <div class="placeholder-150"></div>-->
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import Carousel from "@/components/Carousel";
import Accordion from "@/pages/Home/Accordion";
import Introduce from "@/pages/Home/Introduce";

export default {
  name: "home",
  data() {
    return {
      show: false,
      cooperateList: [
        {url: "https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg", size: 160},
        {url: "https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg", size: 80},
        {url: "https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg", size: 100},
        {url: "https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg", size: 100},
        {url: "https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg", size: 100},
        {url: "https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg", size: 100}
      ]
    };
  },
  components: {Carousel, Header, Footer, Accordion, Introduce},
  mounted() {
    this.show = true;
  },
};
</script>

<style>

.home-body-cooperate {
  width: 90%;
  height: fit-content;
  padding: 150px 0 80px 0;
}

.home-body-cooperate-list {
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  z-index: 33;
}

.home-body-cooperate-list-item {
  width: 95%;
  padding: 20px 0;
  background-color: white;
  border-radius: var(--radius-10);
  box-shadow: var(--shadow-5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 33;
}

.home-body-cooperate-list-item:hover {
  transform: scale(1.06);
  transition: var(--transition-3);
  box-shadow: var(--shadow-6);
}

.home-body-cooperate-list-item img {
  width: 100px;
}

.home-body-suit {
  height: 500px;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-top: 3%;
  margin-bottom: 4%;
  z-index: 66;
}

.home-body-suit-left {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home-body-suit-left-title {
  width: 100%;
  font-size: var(--fs-2);
  font-weight: var(--fw-600);
  letter-spacing: 1px;
}

.home-body-suit-left-list {
  width: 100%;
  margin-top: 7%;
}

.home-body-suit-left-list-item {
  min-height: 65px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.home-body-suit-icon-container {
  width: 20px;
  height: 20px;
  margin-top: 0.5%;
}

.home-body-suit-left-text {
  width: 80%;
  line-height: 25px;
  font-size: var(--fs-7);
  letter-spacing: 1px;
  text-align: start;
  color: #484848;
}

.home-body-suit-left-list-item ion-icon {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 10%;
  color: var(--youth-blue-purple);
}

.home-body-suit-right {
  width: 90%;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
}

.home-body-suit-right-img-1 {
  width: 400px;
  height: 500px;
  align-self: flex-end;
  border-radius: var(--radius-20);
  box-shadow: var(--shadow-3);
}

.home-body-suit-right-img-2 {
  width: 200px;
  height: 250px;
  align-self: flex-end;
  border-radius: var(--radius-10);
  box-shadow: var(--shadow-3);
}

.home-body-steps {
  margin-top: 8%;
  width: 75%;
  height: 450px;
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-body-steps-left {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-body-steps-list {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center; /*让grid布局下的每列元素水平居中*/
}

.home-body-steps-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 85%;
  background-color: rgba(241, 243, 250, 0.88);
  z-index: 88;
  border-radius: var(--radius-10);
  box-shadow: var(--shadow-1);
}

.home-body-steps-item:hover {
  transform: scale(1.1);
  transition: var(--transition-2);
}

.home-body-steps-item-title {
  text-align: center;
}

.home-body-steps-item-text {
  text-align: center;
}


.home-body-steps-circle {
  width: 500px;
  height: 500px;
  position: absolute;
  border-radius: var(--radius-circle);
  border: var(--blue-purple) solid 1px;
}

.home-body-steps-item-top {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-circle);
  background-color: #e8e5fa;
  box-shadow: var(--shadow-3);
  font-size: var(--fs-5);
  font-family: "Adobe Garamond Pro Bold";
}

.top-white {
  background-color: white;
}

.home-body-steps-item-top-container {
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
}

.home-body-steps-item-main {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-body-steps-item-title {
  font-weight: var(--fw-600);
  font-size: var(--fs-6);
  letter-spacing: 1px;
}

.home-body-steps-item-text {
  width: 75%;
  line-height: 25px;
  letter-spacing: 1px;
  margin-top: 5%;
  color: #6e6d6d;
}

.home-body-steps-right {
  width: 50%;
  margin-left: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-body-steps-right-top {
  width: 100%;
  height: 30%;
  font-size: var(--fs-2);
  font-weight: var(--fw-600);
  display: flex;
  align-items: flex-end;
  z-index: 30;
}

.home-body-steps-right-bottom {
  width: 100%;
  height: 30%;
  align-self: flex-start;
  margin-top: 5%;
  z-index: 30;

}

.home-body-steps-right-top-bottom-text {
  font-size: var(--fs-7);
  color: #6e6d6d;
  line-height: 25px;
  z-index: 30;
}

.home-body-steps-right-btn {
  font-size: var(--fs-6);
  width: 150px;
  height: 45px;
  margin-top: 5%;
  background-color: var(--youth-green-2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: var(--ff-almm);
  border-radius: var(--radius-10);
  letter-spacing: 2px;
  box-shadow: var(--shadow-3);
  cursor: pointer;
}

.home-body-steps-right-btn-container {
  width: 95%;
  display: flex;
  justify-content: end;
}

.home-body-steps-right-btn:hover {
  transform: translateY(-5px);
  transition: var(--transition-3);
}

.home-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-body-top {
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
}

.home-body-top-left {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dazi {
  position: relative;
  width: 100%;
  height: 300px;
  color: rgb(16, 17, 17);
  z-index: 29;
}

.xiaozi {
  position: relative;
  width: 90%;
  height: 120px;
  font-size: 16px;
  line-height: 30px;
  color: rgb(143, 139, 139);
  font-family: var(--ff-albb-light);
  z-index: 29;
}

.black {
  font-size: 68px;
  font-weight: 600;
  color: #212121;
}

.green {
  font-size: 70px;
  font-weight: 600;
  color: var(--youth-green-2);
}

.button-list {
  display: flex;
  gap: 23px;
  align-items: center;
}

/*disply: flex;align-items: center;justify-content: center;flex-direction: column*/
.experience {
  position: relative;
  width: 180px;
  height: 45px;
  background-color: var(--youth-green-2);
  border: 2px var(--youth-green-2) solid;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 45px;
  font-family: var(--ff-almm);
  border-radius: var(--radius-6);
  letter-spacing: 2px;
  transition: all 0.3s;
  color: white;
  cursor: pointer;
  z-index: 3;
  box-shadow: var(--shadow-3);
}

.content {
  position: relative;
  width: 180px;
  height: 45px;
  background-color: rgb(255, 255, 255);
  border: 2px var(--youth-green-2) solid;
  border-radius: var(--radius-6);
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 45px;
  font-family: var(--ff-almm);
  letter-spacing: 2px;
  transition: all 0.3s;
  color: var(--youth-green-2);
  cursor: pointer;
  z-index: 3;
}

.experience:hover {
  box-shadow: 0 0 3px #999;
}

.content:hover {
  box-shadow: 0 0 3px #999;
}

/* 动画  下*/
.down-enter-active,
.down-leave-active {
  transition: all 1s;
}

.down-enter {
  transform: translateY(-30px);
  opacity: 0;
}

.down-enter-to {
  opacity: 1;
}

/* 动画  上*/
.up-enter-active,
.up-leave-active {
  transition: all 1s;
}

.up-enter {
  transform: translateY(30px);
  opacity: 0;
}

.up-enter-to {
  opacity: 1;
}

.accordion {
  margin-top: 50px;
}

/*.circleBox{*/
/*  overflow-x: hidden;*/
/*  width: 100%;*/
/*  height: fit-content;*/
/*}*/

.bgcircle {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 150px;
  background: radial-gradient(rgb(192, 246, 209), rgb(245, 245, 245));
  filter: blur(2.5rem);
}

.bgcircle1 {
  position: absolute;
  top: -200px;
  left: -130px;
  width: 450px;
  height: 450px;
  border-radius: 350px;
  background: radial-gradient(rgba(219, 202, 252, 0.8), rgba(245, 245, 245, 0.8));
  filter: blur(2.8rem);
}

.bgcircle2 {
  position: absolute;
  top: 400px;
  left: 200px;
  width: 280px;
  height: 280px;
  border-radius: 280px;
  background: radial-gradient(rgba(199, 209, 254, 0.8), rgba(245, 245, 245, 0.8));
  filter: blur(2.5rem);
}

.bgcircle3 {
  position: absolute;
  top: 50px;
  right: 1px;
  width: 500px;
  height: 500px;
  border-radius: 500px;
  background: radial-gradient(rgb(255, 200, 200), rgb(245, 245, 245));
  filter: blur(2.5rem);
}

.bgcircle4 {
  position: absolute;
  top: 1110px;
  right: 80px;
  width: 350px;
  height: 350px;
  border-radius: 500px;
  background: radial-gradient(rgba(255, 200, 200, 0.8), rgba(245, 245, 245, 0.8));
  filter: blur(2.5rem);
}

.bgcircle5 {
  position: absolute;
  top: 1350px;
  right: 150px;
  width: 260px;
  height: 260px;
  border-radius: 500px;
  background: radial-gradient(rgba(248, 255, 200, 0.8), rgba(241, 255, 255, 0.85));
  filter: blur(2.5rem);
}

.bgcircle6 {
  position: absolute;
  top: 1180px;
  right: 340px;
  width: 220px;
  height: 220px;
  border-radius: 500px;
  background: radial-gradient(rgba(156, 191, 255, 0.8), rgba(241, 255, 251, 0.85));
  filter: blur(2.5rem);
}

.bgcircle7 {
  position: absolute;
  top: 2040px;
  left: 120px;
  width: 240px;
  height: 240px;
  border-radius: 500px;
  background: radial-gradient(rgba(156, 191, 255, 0.4), rgba(241, 255, 251, 0.55));
  filter: blur(2.5rem);
}

.bgcircle8 {
  position: absolute;
  top: 1720px;
  right: 200px;
  width: 400px;
  height: 400px;
  border-radius: 500px;
  background: radial-gradient(rgba(253, 204, 204, 0.7), rgba(245, 245, 245, 0.75));
  filter: blur(2.7rem);
}

.bgcircle8 {
  position: absolute;
  top: 1680px;
  right: 200px;
  width: 400px;
  height: 400px;
  border-radius: 500px;
  background: radial-gradient(rgba(253, 206, 206, 0.8), rgba(245, 245, 245, 0.7));
  filter: blur(2.5rem);
}

.bgcircle9 {
  position: absolute;
  top: 2120px;
  right: 700px;
  width: 200px;
  height: 200px;
  border-radius: 500px;
  background: radial-gradient(rgba(192, 246, 209, 0.8), rgba(245, 245, 245, 0.8));
  filter: blur(2.1rem);
}


@media (max-width: 1480px) {
  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    z-index: 33;
  }

  .home-body-cooperate-list-item {
    width: 95%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 100px;
  }

  .home-body-suit {
    height: 500px;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top: 3%;
    margin-bottom: 4%;
    z-index: 66;
  }

  .home-body-suit-left {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home-body-suit-left-title {
    width: 100%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 100%;
    margin-top: 7%;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 80%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    width: 90%;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
  }

  .home-body-suit-right-img-1 {
    width: 400px;
    height: 500px;
    align-self: flex-end;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 200px;
    height: 250px;
    align-self: flex-end;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
  }

  .home-body-steps {
    margin-top: 8%;
    width: 75%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-left {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;
  }

  .home-body-steps-right {
    width: 50%;
    margin-left: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;

  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6e6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 5%;
    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    justify-content: end;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-top {
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
  }

  .home-body-top-left {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dazi {
    position: relative;
    width: 100%;
    height: 280px;
    color: rgb(16, 17, 17);
    z-index: 29;
  }

  .xiaozi {
    position: relative;
    width: 90%;
    height: 140px;
    font-size: 16px;
    line-height: 30px;
    color: rgb(143, 139, 139);
    font-family: var(--ff-albb-light);
    z-index: 29;
  }

  .black {
    font-size: 60px;
    font-weight: 600;
    color: #212121;
  }

  .green {
    font-size: 65px;
    font-weight: 600;
    color: var(--youth-green-2);
  }

  .button-list {
    display: flex;
    gap: 23px;
    align-items: center;
  }

  /*disply: flex;align-items: center;justify-content: center;flex-direction: column*/
  .experience {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: var(--youth-green-2);
    border: 2px var(--youth-green-2) solid;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    border-radius: var(--radius-6);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: white;
    cursor: pointer;
    z-index: 3;
    box-shadow: var(--shadow-3);
  }

  .content {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: rgb(255, 255, 255);
    border: 2px var(--youth-green-2) solid;
    border-radius: var(--radius-6);
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: var(--youth-green-2);
    cursor: pointer;
    z-index: 3;
  }

  .experience:hover {
    box-shadow: 0 0 3px #999;
  }

  .content:hover {
    box-shadow: 0 0 3px #999;
  }

  /* 动画  下*/
  .down-enter-active,
  .down-leave-active {
    transition: all 1s;
  }

  .down-enter {
    transform: translateY(-30px);
    opacity: 0;
  }

  .down-enter-to {
    opacity: 1;
  }

  /* 动画  上*/
  .up-enter-active,
  .up-leave-active {
    transition: all 1s;
  }

  .up-enter {
    transform: translateY(30px);
    opacity: 0;
  }

  .up-enter-to {
    opacity: 1;
  }

  .accordion {
    margin-top: 50px;
  }

  .bgcircle {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background: radial-gradient(rgb(192, 246, 209), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle1 {
    position: absolute;
    top: -200px;
    left: -130px;
    width: 450px;
    height: 450px;
    border-radius: 350px;
    background: radial-gradient(rgba(219, 202, 252, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.8rem);
  }

  .bgcircle2 {
    position: absolute;
    top: 400px;
    left: 200px;
    width: 280px;
    height: 280px;
    border-radius: 280px;
    background: radial-gradient(rgba(199, 209, 254, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle3 {
    position: absolute;
    top: 50px;
    right: 1px;
    width: 500px;
    height: 500px;
    border-radius: 500px;
    background: radial-gradient(rgb(255, 200, 200), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle4 {
    position: absolute;
    top: 1110px;
    right: 80px;
    width: 350px;
    height: 350px;
    border-radius: 500px;
    background: radial-gradient(rgba(255, 200, 200, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle5 {
    position: absolute;
    top: 1350px;
    right: 150px;
    width: 260px;
    height: 260px;
    border-radius: 500px;
    background: radial-gradient(rgba(248, 255, 200, 0.8), rgba(241, 255, 255, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle6 {
    position: absolute;
    top: 1180px;
    right: 340px;
    width: 220px;
    height: 220px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.8), rgba(241, 255, 251, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle7 {
    position: absolute;
    top: 2040px;
    left: 120px;
    width: 240px;
    height: 240px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.4), rgba(241, 255, 251, 0.55));
    filter: blur(2.5rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1720px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 204, 204, 0.7), rgba(245, 245, 245, 0.75));
    filter: blur(2.7rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1680px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 206, 206, 0.8), rgba(245, 245, 245, 0.7));
    filter: blur(2.5rem);
  }

  .bgcircle9 {
    position: absolute;
    top: 2120px;
    right: 700px;
    width: 200px;
    height: 200px;
    border-radius: 500px;
    background: radial-gradient(rgba(192, 246, 209, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.1rem);
  }
}

@media (max-width: 1380px) {
  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    z-index: 33;
  }

  .home-body-cooperate-list-item {
    width: 95%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 100px;
  }

  .home-body-suit {
    height: 500px;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top: 3%;
    margin-bottom: 4%;
    z-index: 66;
  }

  .home-body-suit-left {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home-body-suit-left-title {
    width: 100%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 100%;
    margin-top: 7%;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 80%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    width: 90%;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
  }

  .home-body-suit-right-img-1 {
    width: 300px;
    height: 500px;
    align-self: flex-end;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 160px;
    height: 250px;
    align-self: flex-end;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);

  }

  .home-body-steps {
    margin-top: 8%;
    width: 75%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-left {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;
  }

  .home-body-steps-right {
    width: 50%;
    margin-left: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;

  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6e6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 5%;
    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    justify-content: end;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-top {
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
  }

  .home-body-top-left {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dazi {
    position: relative;
    width: 100%;
    height: 240px;
    color: rgb(16, 17, 17);
    z-index: 29;
  }

  .xiaozi {
    position: relative;
    width: 90%;
    height: 160px;
    font-size: 16px;
    line-height: 30px;
    color: rgb(143, 139, 139);
    font-family: var(--ff-albb-light);
    z-index: 29;
  }

  .black {
    font-size: 55px;
    font-weight: 600;
    color: #212121;
  }

  .green {
    font-size: 55px;
    font-weight: 600;
    color: var(--youth-green-2);
  }

  .button-list {
    display: flex;
    gap: 23px;
    align-items: center;
  }

  /*disply: flex;align-items: center;justify-content: center;flex-direction: column*/
  .experience {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: var(--youth-green-2);
    border: 2px var(--youth-green-2) solid;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    border-radius: var(--radius-6);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: white;
    cursor: pointer;
    z-index: 3;
    box-shadow: var(--shadow-3);
  }

  .content {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: rgb(255, 255, 255);
    border: 2px var(--youth-green-2) solid;
    border-radius: var(--radius-6);
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: var(--youth-green-2);
    cursor: pointer;
    z-index: 3;
  }

  .experience:hover {
    box-shadow: 0 0 3px #999;
  }

  .content:hover {
    box-shadow: 0 0 3px #999;
  }

  /* 动画  下*/
  .down-enter-active,
  .down-leave-active {
    transition: all 1s;
  }

  .down-enter {
    transform: translateY(-30px);
    opacity: 0;
  }

  .down-enter-to {
    opacity: 1;
  }

  /* 动画  上*/
  .up-enter-active,
  .up-leave-active {
    transition: all 1s;
  }

  .up-enter {
    transform: translateY(30px);
    opacity: 0;
  }

  .up-enter-to {
    opacity: 1;
  }

  .accordion {
    margin-top: 50px;
  }

  .bgcircle {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background: radial-gradient(rgb(192, 246, 209), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle1 {
    position: absolute;
    top: -200px;
    left: -130px;
    width: 450px;
    height: 450px;
    border-radius: 350px;
    background: radial-gradient(rgba(219, 202, 252, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.8rem);
  }

  .bgcircle2 {
    position: absolute;
    top: 400px;
    left: 200px;
    width: 280px;
    height: 280px;
    border-radius: 280px;
    background: radial-gradient(rgba(199, 209, 254, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle3 {
    position: absolute;
    top: 50px;
    right: 1px;
    width: 500px;
    height: 500px;
    border-radius: 500px;
    background: radial-gradient(rgb(255, 200, 200), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle4 {
    position: absolute;
    top: 1110px;
    right: 80px;
    width: 350px;
    height: 350px;
    border-radius: 500px;
    background: radial-gradient(rgba(255, 200, 200, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle5 {
    position: absolute;
    top: 1350px;
    right: 150px;
    width: 260px;
    height: 260px;
    border-radius: 500px;
    background: radial-gradient(rgba(248, 255, 200, 0.8), rgba(241, 255, 255, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle6 {
    position: absolute;
    top: 1180px;
    right: 340px;
    width: 220px;
    height: 220px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.8), rgba(241, 255, 251, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle7 {
    position: absolute;
    top: 2040px;
    left: 120px;
    width: 240px;
    height: 240px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.4), rgba(241, 255, 251, 0.55));
    filter: blur(2.5rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1720px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 204, 204, 0.7), rgba(245, 245, 245, 0.75));
    filter: blur(2.7rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1680px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 206, 206, 0.8), rgba(245, 245, 245, 0.7));
    filter: blur(2.5rem);
  }

  .bgcircle9 {
    position: absolute;
    top: 2120px;
    right: 700px;
    width: 200px;
    height: 200px;
    border-radius: 500px;
    background: radial-gradient(rgba(192, 246, 209, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.1rem);
  }
}

@media (max-width: 1220px) {
  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    z-index: 33;
  }

  .home-body-cooperate-list-item {
    width: 95%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 100px;
  }

  .home-body-suit {
    height: 500px;
    width: 80%;
    justify-items: center;
    margin-top: 3%;
    margin-bottom: 4%;
    z-index: 66;
  }

  .home-body-suit-left {
    width: 150%;
    margin-left: 130%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home-body-suit-left-title {
    width: 100%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 100%;
    margin-top: 7%;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 80%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    width: 90%;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: none;
  }

  .home-body-suit-right-img-1 {
    width: 100%;
    height: 45%;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 100%;
    height: 20%;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
  }

  .home-body-steps {
    margin-top: 8%;
    width: 75%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-left {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;
  }

  .home-body-steps-right {
    width: 50%;
    margin-left: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;

  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6e6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 5%;
    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    justify-content: end;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-top {
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
  }

  .home-body-top-left {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dazi {
    position: relative;
    width: 100%;
    height: 250px;
    color: rgb(16, 17, 17);
    z-index: 29;
  }

  .xiaozi {
    position: relative;
    width: 90%;
    height: 120px;
    font-size: 16px;
    line-height: 30px;
    color: rgb(143, 139, 139);
    font-family: var(--ff-albb-light);
    z-index: 29;
    transition: .5s;
    margin-bottom: 50px;
  }

  .black {
    font-size: 50px;
    font-weight: 600;
    color: #212121;
  }

  .green {
    font-size: 52px;
    font-weight: 600;
    color: var(--youth-green-2);
  }

  .button-list {
    display: flex;
    gap: 23px;
    align-items: center;
  }

  /*disply: flex;align-items: center;justify-content: center;flex-direction: column*/
  .experience {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: var(--youth-green-2);
    border: 2px var(--youth-green-2) solid;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    border-radius: var(--radius-6);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: white;
    cursor: pointer;
    z-index: 3;
    box-shadow: var(--shadow-3);
  }

  .content {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: rgb(255, 255, 255);
    border: 2px var(--youth-green-2) solid;
    border-radius: var(--radius-6);
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: var(--youth-green-2);
    cursor: pointer;
    z-index: 3;
  }

  .experience:hover {
    box-shadow: 0 0 3px #999;
  }

  .content:hover {
    box-shadow: 0 0 3px #999;
  }

  /* 动画  下*/
  .down-enter-active,
  .down-leave-active {
    transition: all 1s;
  }

  .down-enter {
    transform: translateY(-30px);
    opacity: 0;
  }

  .down-enter-to {
    opacity: 1;
  }

  /* 动画  上*/
  .up-enter-active,
  .up-leave-active {
    transition: all 1s;
  }

  .up-enter {
    transform: translateY(30px);
    opacity: 0;
  }

  .up-enter-to {
    opacity: 1;
  }

  .accordion {
    margin-top: 50px;
  }

  .bgcircle {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background: radial-gradient(rgb(192, 246, 209), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle1 {
    position: absolute;
    top: -200px;
    left: -130px;
    width: 450px;
    height: 450px;
    border-radius: 350px;
    background: radial-gradient(rgba(219, 202, 252, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.8rem);
  }

  .bgcircle2 {
    position: absolute;
    top: 400px;
    left: 200px;
    width: 280px;
    height: 280px;
    border-radius: 280px;
    background: radial-gradient(rgba(199, 209, 254, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle3 {
    position: absolute;
    top: 50px;
    right: 1px;
    width: 500px;
    height: 500px;
    border-radius: 500px;
    background: radial-gradient(rgb(255, 200, 200), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle4 {
    position: absolute;
    top: 1110px;
    right: 80px;
    width: 350px;
    height: 350px;
    border-radius: 500px;
    background: radial-gradient(rgba(255, 200, 200, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle5 {
    position: absolute;
    top: 1350px;
    right: 150px;
    width: 260px;
    height: 260px;
    border-radius: 500px;
    background: radial-gradient(rgba(248, 255, 200, 0.8), rgba(241, 255, 255, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle6 {
    position: absolute;
    top: 1180px;
    right: 340px;
    width: 220px;
    height: 220px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.8), rgba(241, 255, 251, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle7 {
    position: absolute;
    top: 2040px;
    left: 120px;
    width: 240px;
    height: 240px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.4), rgba(241, 255, 251, 0.55));
    filter: blur(2.5rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1720px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 204, 204, 0.7), rgba(245, 245, 245, 0.75));
    filter: blur(2.7rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1680px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 206, 206, 0.8), rgba(245, 245, 245, 0.7));
    filter: blur(2.5rem);
  }

  .bgcircle9 {
    position: absolute;
    top: 2120px;
    right: 700px;
    width: 200px;
    height: 200px;
    border-radius: 500px;
    background: radial-gradient(rgba(192, 246, 209, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.1rem);
  }
}

@media (max-width: 1050px) {
  .home-body-top-left {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dazi {
    position: relative;
    width: 100%;
    height: 280px;
    color: rgb(16, 17, 17);
    z-index: 29;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .black {
    font-size: 65px;
    font-weight: 600;
    color: #212121;
    letter-spacing: 2px;
  }

  .green {
    font-size: 60px;
    font-weight: 600;
    color: var(--youth-green-2);
  }

  .xiaozi {
    position: relative;
    width: 100%;
    height: 120px;
    font-size: 18px;
    line-height: 30px;
    color: rgb(143, 139, 139);
    font-family: var(--ff-albb-light);
    z-index: 29;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-list {
    display: flex;
    gap: 60px;
    align-items: center;
    justify-content: center;
  }

  /*disply: flex;align-items: center;justify-content: center;flex-direction: column*/
  .experience {
    position: relative;
    width: 160px;
    height: 40px;
    background-color: var(--youth-green-2);
    border: 2px var(--youth-green-2) solid;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    line-height: 40px;
    font-family: var(--ff-almm);
    border-radius: var(--radius-6);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: white;
    cursor: pointer;
    z-index: 3;
    box-shadow: var(--shadow-3);
  }

  .content {
    position: relative;
    width: 160px;
    height: 40px;
    background-color: rgb(255, 255, 255);
    border: 2px var(--youth-green-2) solid;
    border-radius: var(--radius-6);
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    line-height: 40px;
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: var(--youth-green-2);
    cursor: pointer;
    z-index: 3;
  }
}

@media (max-width: 900px) {
  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    z-index: 33;
  }

  .home-body-cooperate-list-item {
    width: 95%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 100px;
  }

  .home-body-suit {
    height: fit-content;
    width: 100vw;
    display: flex;
    justify-items: center;
    align-items: center;
    /*margin-top: 3%;*/
    /*margin-bottom: 4%;*/
    z-index: 66;
  }

  .home-body-suit-left {
    width: 100%;
    margin-top: 5%;
    margin-left: 0;
    /*width: 150%;*/
    /*margin-left: 130%;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home-body-suit-left-title {
    width: 80%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 80%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: auto;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 100%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    /*width: 90%;*/
    /*display: flex;*/
    gap: 40px;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-suit-right-img-1 {
    width: 250px;
    height: 500px;
    align-self: flex-end;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 160px;
    height: 250px;
    align-self: flex-end;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
  }

  .home-body-steps {
    margin-top: 8%;
    width: 90%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-left {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;
  }

  .home-body-steps-right {
    width: 50%;
    margin-left: 5%;
    height: 100%;
    gap: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;
  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6e6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 5%;
    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    justify-content: end;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-top {
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
  }

  .home-body-top-left {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dazi {
    position: relative;
    width: 100%;
    height: 250px;
    color: rgb(16, 17, 17);
    z-index: 29;
  }

  .xiaozi {
    position: relative;
    width: 100%;
    height: 120px;
    font-size: 15px;
    line-height: 27px;
    color: rgb(143, 139, 139);
    font-family: var(--ff-albb-light);
    z-index: 29;
    transition: .5s;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .black {
    font-size: 52px;
    font-weight: 600;
    color: #212121;
  }

  .green {
    font-size: 44px;
    font-weight: 600;
    color: var(--youth-green-2);
  }

  .button-list {
    display: flex;
    gap: 23px;
    align-items: center;
  }

  /*disply: flex;align-items: center;justify-content: center;flex-direction: column*/
  .experience {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: var(--youth-green-2);
    border: 2px var(--youth-green-2) solid;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    border-radius: var(--radius-6);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: white;
    cursor: pointer;
    z-index: 3;
    box-shadow: var(--shadow-3);
  }

  .content {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: rgb(255, 255, 255);
    border: 2px var(--youth-green-2) solid;
    border-radius: var(--radius-6);
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: var(--youth-green-2);
    cursor: pointer;
    z-index: 3;
  }

  .experience:hover {
    box-shadow: 0 0 3px #999;
  }

  .content:hover {
    box-shadow: 0 0 3px #999;
  }

  /* 动画  下*/
  .down-enter-active,
  .down-leave-active {
    transition: all 1s;
  }

  .down-enter {
    transform: translateY(-30px);
    opacity: 0;
  }

  .down-enter-to {
    opacity: 1;
  }

  /* 动画  上*/
  .up-enter-active,
  .up-leave-active {
    transition: all 1s;
  }

  .up-enter {
    transform: translateY(30px);
    opacity: 0;
  }

  .up-enter-to {
    opacity: 1;
  }

  .accordion {
    margin-top: 50px;
  }

  .bgcircle {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background: radial-gradient(rgb(192, 246, 209), rgb(245, 245, 245));
    filter: blur(2.5rem);
    display: none;
  }

  .bgcircle1 {
    position: absolute;
    top: -200px;
    left: -130px;
    width: 450px;
    height: 450px;
    border-radius: 350px;
    background: radial-gradient(rgba(219, 202, 252, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.8rem);
  }

  .bgcircle2 {
    position: absolute;
    top: 400px;
    left: 200px;
    width: 280px;
    height: 280px;
    border-radius: 280px;
    background: radial-gradient(rgba(199, 209, 254, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle3 {
    position: absolute;
    top: 50px;
    right: 1px;
    width: 500px;
    height: 500px;
    border-radius: 500px;
    background: radial-gradient(rgb(255, 200, 200), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle4 {
    position: absolute;
    top: 1110px;
    right: 80px;
    width: 350px;
    height: 350px;
    border-radius: 500px;
    background: radial-gradient(rgba(255, 200, 200, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle5 {
    position: absolute;
    top: 1350px;
    right: 150px;
    width: 260px;
    height: 260px;
    border-radius: 500px;
    background: radial-gradient(rgba(248, 255, 200, 0.8), rgba(241, 255, 255, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle6 {
    position: absolute;
    top: 1180px;
    right: 340px;
    width: 220px;
    height: 220px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.8), rgba(241, 255, 251, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle7 {
    position: absolute;
    top: 2040px;
    left: 120px;
    width: 240px;
    height: 240px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.4), rgba(241, 255, 251, 0.55));
    filter: blur(2.5rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1720px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 204, 204, 0.7), rgba(245, 245, 245, 0.75));
    filter: blur(2.7rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1680px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 206, 206, 0.8), rgba(245, 245, 245, 0.7));
    filter: blur(2.5rem);
  }

  .bgcircle9 {
    position: absolute;
    top: 2120px;
    right: 700px;
    width: 200px;
    height: 200px;
    border-radius: 500px;
    background: radial-gradient(rgba(192, 246, 209, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.1rem);
  }

  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    z-index: 33;
    gap: 10px;
  }

  .home-body-cooperate-list-item {
    width: 90%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
    overflow: hidden;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 20px;
  }


}

@media (max-width: 720px) {

  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    z-index: 33;
    gap: 8px;
  }

  .home-body-cooperate-list-item {
    width: 90%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
    overflow: hidden;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 20px;
  }

  .home-body-suit {
    height: 500px;
    width: 80%;
    justify-items: center;
    margin-top: 3%;
    margin-bottom: 4%;
    z-index: 66;
  }

  .home-body-suit-left {
    width: 150%;
    margin-left: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home-body-suit-left-title {
    width: 100%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 100%;
    margin-top: 7%;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 80%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    width: 90%;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-suit-right-img-1 {
    width: 400px;
    height: 500px;
    align-self: flex-end;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 200px;
    height: 250px;
    align-self: flex-end;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
  }

  .home-body-steps {
    margin-top: 8%;
    width: 75%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-left {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-list {
    width: 10%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
    display: none;
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
    display: none;
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
    display: none;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;

  }

  .home-body-steps-right {
    width: 100%;
    margin-right: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;
  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6d6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 5%;
    margin-left: 10%;
    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    justify-content: end;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-top {
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
  }

  .home-body-top-left {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dazi {
    position: relative;
    width: 100%;
    height: 250px;
    color: rgb(16, 17, 17);
    z-index: 29;
  }

  .xiaozi {
    position: relative;
    width: 100%;
    height: 120px;
    font-size: 13px;
    line-height: 25px;
    color: rgb(143, 139, 139);
    font-family: var(--ff-albb-light);
    z-index: 29;
    transition: .5s;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .black {
    font-size: 48px;
    font-weight: 600;
    color: #212121;
    letter-spacing: 4px;
  }

  .green {
    font-size: 42px;
    font-weight: 600;
    color: var(--youth-green-2);
    letter-spacing: 4px;

  }

  .button-list {
    display: flex;
    gap: 23px;
    align-items: center;
  }

  /*disply: flex;align-items: center;justify-content: center;flex-direction: column*/
  .experience {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: var(--youth-green-2);
    border: 2px var(--youth-green-2) solid;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    border-radius: var(--radius-6);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: white;
    cursor: pointer;
    z-index: 3;
    box-shadow: var(--shadow-3);
  }

  .content {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: rgb(255, 255, 255);
    border: 2px var(--youth-green-2) solid;
    border-radius: var(--radius-6);
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: var(--youth-green-2);
    cursor: pointer;
    z-index: 3;
  }

  .experience:hover {
    box-shadow: 0 0 3px #999;
  }

  .content:hover {
    box-shadow: 0 0 3px #999;
  }

  /* 动画  下*/
  .down-enter-active,
  .down-leave-active {
    transition: all 1s;
  }

  .down-enter {
    transform: translateY(-30px);
    opacity: 0;
  }

  .down-enter-to {
    opacity: 1;
  }

  /* 动画  上*/
  .up-enter-active,
  .up-leave-active {
    transition: all 1s;
  }

  .up-enter {
    transform: translateY(30px);
    opacity: 0;
  }

  .up-enter-to {
    opacity: 1;
  }

  .accordion {
    margin-top: 50px;
  }

  .bgcircle {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background: radial-gradient(rgb(192, 246, 209), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle1 {
    position: absolute;
    top: -200px;
    left: -130px;
    width: 450px;
    height: 450px;
    border-radius: 350px;
    background: radial-gradient(rgba(219, 202, 252, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.8rem);
  }

  .bgcircle2 {
    position: absolute;
    top: 400px;
    left: 200px;
    width: 280px;
    height: 280px;
    border-radius: 280px;
    background: radial-gradient(rgba(199, 209, 254, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle3 {
    position: absolute;
    top: 50px;
    right: 1px;
    width: 500px;
    height: 500px;
    border-radius: 500px;
    background: radial-gradient(rgb(255, 200, 200), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle4 {
    position: absolute;
    top: 1110px;
    right: 80px;
    width: 350px;
    height: 350px;
    border-radius: 500px;
    background: radial-gradient(rgba(255, 200, 200, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle5 {
    position: absolute;
    top: 1350px;
    right: 150px;
    width: 260px;
    height: 260px;
    border-radius: 500px;
    background: radial-gradient(rgba(248, 255, 200, 0.8), rgba(241, 255, 255, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle6 {
    position: absolute;
    top: 1180px;
    right: 340px;
    width: 220px;
    height: 220px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.8), rgba(241, 255, 251, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle7 {
    position: absolute;
    top: 2040px;
    left: 120px;
    width: 240px;
    height: 240px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.4), rgba(241, 255, 251, 0.55));
    filter: blur(2.5rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1720px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 204, 204, 0.7), rgba(245, 245, 245, 0.75));
    filter: blur(2.7rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1680px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 206, 206, 0.8), rgba(245, 245, 245, 0.7));
    filter: blur(2.5rem);
  }

  .bgcircle9 {
    position: absolute;
    top: 2120px;
    right: 700px;
    width: 200px;
    height: 200px;
    border-radius: 500px;
    background: radial-gradient(rgba(192, 246, 209, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.1rem);
  }


  .home-body-steps {
    margin-top: 5%;
    width: 85%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .home-body-steps-left {
    width: 50%;
    height: 100%;
    /*display: flex;*/
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-steps-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;
  }

  .home-body-steps-right {
    width: 80%;
    margin-left: 0%;
    margin-right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;

  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6e6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 8%;
    margin-left: 0;

    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body-suit {
    height: fit-content;
    width: 100vw;
    display: flex;
    justify-items: center;
    align-items: center;
    /*margin-top: 3%;*/
    /*margin-bottom: 4%;*/
    z-index: 66;
  }

  .home-body-suit-left {
    width: 100%;
    margin-top: 5%;
    margin-left: 0;
    /*width: 150%;*/
    /*margin-left: 130%;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home-body-suit-left-title {
    width: 80%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 80%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: auto;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 100%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    /*width: 90%;*/
    /*display: flex;*/
    gap: 40px;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-suit-right-img-1 {
    width: 250px;
    height: 500px;
    align-self: flex-end;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 160px;
    height: 250px;
    align-self: flex-end;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
  }

}

@media (max-width: 460px) {
  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    z-index: 33;
  }

  .home-body-cooperate-list-item {
    width: 90%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
    overflow: hidden;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 20px;
  }

  .home-body-suit {
    height: 500px;
    width: 80%;
    justify-items: center;
    margin-top: 3%;
    margin-bottom: 4%;
    z-index: 66;
  }

  .home-body-suit-left {
    width: 150%;
    margin-left: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home-body-suit-left-title {
    width: 100%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 100%;
    margin-top: 7%;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 80%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    width: 90%;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-suit-right-img-1 {
    width: 400px;
    height: 500px;
    align-self: flex-end;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 200px;
    height: 250px;
    align-self: flex-end;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
  }

  .home-body-steps {
    margin-top: 8%;
    width: 75%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-left {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-list {
    width: 10%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
    display: none;
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
    display: none;
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
    display: none;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;

  }

  .home-body-steps-right {
    width: 100%;
    margin-right: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;
  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6d6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 5%;
    margin-left: 10%;
    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    justify-content: end;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-top {
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
  }

  .home-body-top-left {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dazi {
    position: relative;
    width: 100%;
    height: 250px;
    color: rgb(16, 17, 17);
    z-index: 29;
  }

  .xiaozi {
    position: relative;
    width: 100%;
    height: 120px;
    font-size: 13px;
    line-height: 25px;
    color: rgb(143, 139, 139);
    font-family: var(--ff-albb-light);
    z-index: 29;
    transition: .5s;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .black {
    font-size: 40px;
    font-weight: 600;
    color: #212121;
    letter-spacing: 4px;
  }

  .green {
    font-size: 32px;
    font-weight: 600;
    color: var(--youth-green-2);
    letter-spacing: 4px;

  }

  .button-list {
    display: flex;
    gap: 23px;
    align-items: center;
  }

  /*disply: flex;align-items: center;justify-content: center;flex-direction: column*/
  .experience {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: var(--youth-green-2);
    border: 2px var(--youth-green-2) solid;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    border-radius: var(--radius-6);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: white;
    cursor: pointer;
    z-index: 3;
    box-shadow: var(--shadow-3);
  }

  .content {
    position: relative;
    width: 180px;
    height: 45px;
    background-color: rgb(255, 255, 255);
    border: 2px var(--youth-green-2) solid;
    border-radius: var(--radius-6);
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: var(--youth-green-2);
    cursor: pointer;
    z-index: 3;
  }

  .experience:hover {
    box-shadow: 0 0 3px #999;
  }

  .content:hover {
    box-shadow: 0 0 3px #999;
  }

  /* 动画  下*/
  .down-enter-active,
  .down-leave-active {
    transition: all 1s;
  }

  .down-enter {
    transform: translateY(-30px);
    opacity: 0;
  }

  .down-enter-to {
    opacity: 1;
  }

  /* 动画  上*/
  .up-enter-active,
  .up-leave-active {
    transition: all 1s;
  }

  .up-enter {
    transform: translateY(30px);
    opacity: 0;
  }

  .up-enter-to {
    opacity: 1;
  }

  .accordion {
    margin-top: 50px;
  }

  .bgcircle {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background: radial-gradient(rgb(192, 246, 209), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle1 {
    position: absolute;
    top: -200px;
    left: -130px;
    width: 450px;
    height: 450px;
    border-radius: 350px;
    background: radial-gradient(rgba(219, 202, 252, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.8rem);
  }

  .bgcircle2 {
    position: absolute;
    top: 400px;
    left: 200px;
    width: 280px;
    height: 280px;
    border-radius: 280px;
    background: radial-gradient(rgba(199, 209, 254, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle3 {
    position: absolute;
    top: 50px;
    right: 1px;
    width: 500px;
    height: 500px;
    border-radius: 500px;
    background: radial-gradient(rgb(255, 200, 200), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle4 {
    position: absolute;
    top: 1110px;
    right: 80px;
    width: 350px;
    height: 350px;
    border-radius: 500px;
    background: radial-gradient(rgba(255, 200, 200, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle5 {
    position: absolute;
    top: 1350px;
    right: 150px;
    width: 260px;
    height: 260px;
    border-radius: 500px;
    background: radial-gradient(rgba(248, 255, 200, 0.8), rgba(241, 255, 255, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle6 {
    position: absolute;
    top: 1180px;
    right: 340px;
    width: 220px;
    height: 220px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.8), rgba(241, 255, 251, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle7 {
    position: absolute;
    top: 2040px;
    left: 120px;
    width: 240px;
    height: 240px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.4), rgba(241, 255, 251, 0.55));
    filter: blur(2.5rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1720px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 204, 204, 0.7), rgba(245, 245, 245, 0.75));
    filter: blur(2.7rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1680px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 206, 206, 0.8), rgba(245, 245, 245, 0.7));
    filter: blur(2.5rem);
  }

  .bgcircle9 {
    position: absolute;
    top: 2120px;
    right: 700px;
    width: 200px;
    height: 200px;
    border-radius: 500px;
    background: radial-gradient(rgba(192, 246, 209, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.1rem);
  }


  .home-body-steps {
    margin-top: 5%;
    width: 85%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .home-body-steps-left {
    width: 50%;
    height: 100%;
    /*display: flex;*/
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-steps-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;
  }

  .home-body-steps-right {
    width: 80%;
    margin-left: 0%;
    margin-right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;

  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6e6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 8%;
    margin-left: 0;

    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body-suit {
    height: fit-content;
    width: 100vw;
    display: flex;
    justify-items: center;
    align-items: center;
    /*margin-top: 3%;*/
    /*margin-bottom: 4%;*/
    z-index: 66;
  }

  .home-body-suit-left {
    width: 100%;
    margin-top: 5%;
    margin-left: 0;
    /*width: 150%;*/
    /*margin-left: 130%;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home-body-suit-left-title {
    width: 80%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 80%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: auto;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 100%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    /*width: 90%;*/
    /*display: flex;*/
    gap: 40px;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-suit-right-img-1 {
    width: 250px;
    height: 500px;
    align-self: flex-end;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 160px;
    height: 250px;
    align-self: flex-end;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
  }

  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    z-index: 33;
  }

  .home-body-cooperate-list-item {
    width: 95%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 100px;
  }

}

@media (max-width: 390px) {
  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    z-index: 33;
  }

  .home-body-cooperate-list-item {
    width: 90%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
    overflow: hidden;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 20px;
  }

  .home-body-suit {
    height: 500px;
    width: 80%;
    justify-items: center;
    margin-top: 3%;
    margin-bottom: 4%;
    z-index: 66;
  }

  .home-body-suit-left {
    width: 150%;
    margin-left: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home-body-suit-left-title {
    width: 100%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 100%;
    margin-top: 7%;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 80%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    width: 90%;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-suit-right-img-1 {
    width: 400px;
    height: 500px;
    align-self: flex-end;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 200px;
    height: 250px;
    align-self: flex-end;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
  }

  .home-body-steps {
    margin-top: 8%;
    width: 75%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-left {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-list {
    width: 10%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
    display: none;
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
    display: none;
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
    display: none;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;

  }

  .home-body-steps-right {
    width: 100%;
    margin-right: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;
  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6d6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 5%;
    margin-left: 10%;
    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    justify-content: end;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-top {
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
  }

  .home-body-top-left {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .dazi {
    position: relative;
    width: 100%;
    height: 250px;
    color: rgb(16, 17, 17);
    z-index: 29;
  }

  .xiaozi {
    position: relative;
    width: 90%;
    height: 100px;
    font-size: 13px;
    line-height: 25px;
    color: rgb(143, 139, 139);
    font-family: var(--ff-albb-light);
    z-index: 29;
    transition: .5s;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .black {
    font-size: 40px;
    font-weight: 600;
    color: #212121;
    letter-spacing: 4px;
  }

  .green {
    font-size: 32px;
    font-weight: 600;
    color: var(--youth-green-2);
    letter-spacing: 4px;

  }

  .button-list {
    display: flex;
    gap: 23px;
    align-items: center;
    width: 90%;
  }

  /*disply: flex;align-items: center;justify-content: center;flex-direction: column*/
  .experience {
    position: relative;
    width: 160px;
    height: 38px;
    background-color: var(--youth-green-2);
    border: 2px var(--youth-green-2) solid;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    line-height: 40px;
    font-family: var(--ff-almm);
    border-radius: var(--radius-6);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: white;
    cursor: pointer;
    z-index: 3;
    box-shadow: var(--shadow-3);
  }

  .content {
    position: relative;
    width: 160px;
    height: 38px;
    background-color: rgb(255, 255, 255);
    border: 2px var(--youth-green-2) solid;
    border-radius: var(--radius-6);
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    line-height: 40px;
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: var(--youth-green-2);
    cursor: pointer;
    z-index: 3;
  }

  .experience:hover {
    box-shadow: 0 0 3px #999;
  }

  .content:hover {
    box-shadow: 0 0 3px #999;
  }

  /* 动画  下*/
  .down-enter-active,
  .down-leave-active {
    transition: all 1s;
  }

  .down-enter {
    transform: translateY(-30px);
    opacity: 0;
  }

  .down-enter-to {
    opacity: 1;
  }

  /* 动画  上*/
  .up-enter-active,
  .up-leave-active {
    transition: all 1s;
  }

  .up-enter {
    transform: translateY(30px);
    opacity: 0;
  }

  .up-enter-to {
    opacity: 1;
  }

  .accordion {
    margin-top: 50px;
  }

  .bgcircle {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background: radial-gradient(rgb(192, 246, 209), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle1 {
    position: absolute;
    top: -200px;
    left: -130px;
    width: 450px;
    height: 450px;
    border-radius: 350px;
    background: radial-gradient(rgba(219, 202, 252, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.8rem);
  }

  .bgcircle2 {
    position: absolute;
    top: 400px;
    left: 200px;
    width: 280px;
    height: 280px;
    border-radius: 280px;
    background: radial-gradient(rgba(199, 209, 254, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle3 {
    position: absolute;
    top: 50px;
    right: 1px;
    width: 500px;
    height: 500px;
    border-radius: 500px;
    background: radial-gradient(rgb(255, 200, 200), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle4 {
    position: absolute;
    top: 1110px;
    right: 80px;
    width: 350px;
    height: 350px;
    border-radius: 500px;
    background: radial-gradient(rgba(255, 200, 200, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle5 {
    position: absolute;
    top: 1350px;
    right: 150px;
    width: 260px;
    height: 260px;
    border-radius: 500px;
    background: radial-gradient(rgba(248, 255, 200, 0.8), rgba(241, 255, 255, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle6 {
    position: absolute;
    top: 1180px;
    right: 340px;
    width: 220px;
    height: 220px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.8), rgba(241, 255, 251, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle7 {
    position: absolute;
    top: 2040px;
    left: 120px;
    width: 240px;
    height: 240px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.4), rgba(241, 255, 251, 0.55));
    filter: blur(2.5rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1720px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 204, 204, 0.7), rgba(245, 245, 245, 0.75));
    filter: blur(2.7rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1680px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 206, 206, 0.8), rgba(245, 245, 245, 0.7));
    filter: blur(2.5rem);
  }

  .bgcircle9 {
    position: absolute;
    top: 2120px;
    right: 700px;
    width: 200px;
    height: 200px;
    border-radius: 500px;
    background: radial-gradient(rgba(192, 246, 209, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.1rem);
  }


  .home-body-steps {
    margin-top: 5%;
    width: 85%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .home-body-steps-left {
    width: 50%;
    height: 100%;
    /*display: flex;*/
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-steps-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;
  }

  .home-body-steps-right {
    width: 80%;
    margin-left: 0%;
    margin-right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;

  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6e6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 8%;
    margin-left: 0;

    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body-suit {
    height: fit-content;
    width: 100vw;
    display: flex;
    justify-items: center;
    align-items: center;
    /*margin-top: 3%;*/
    /*margin-bottom: 4%;*/
    z-index: 66;
  }

  .home-body-suit-left {
    width: 100%;
    margin-top: 5%;
    margin-left: 0;
    /*width: 150%;*/
    /*margin-left: 130%;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home-body-suit-left-title {
    width: 80%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 80%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: auto;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 100%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    /*width: 90%;*/
    /*display: flex;*/
    gap: 40px;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-suit-right-img-1 {
    width: 250px;
    height: 500px;
    align-self: flex-end;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 160px;
    height: 250px;
    align-self: flex-end;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
  }

  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    z-index: 33;
  }

  .home-body-cooperate-list-item {
    width: 95%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 100px;
  }

}

@media (max-width: 308px) {
  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    z-index: 33;
  }

  .home-body-cooperate-list-item {
    width: 90%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
    overflow: hidden;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 20px;
  }

  .home-body-suit {
    height: 500px;
    width: 80%;
    justify-items: center;
    margin-top: 3%;
    margin-bottom: 4%;
    z-index: 66;
  }

  .home-body-suit-left {
    width: 150%;
    margin-left: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home-body-suit-left-title {
    width: 100%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 100%;
    margin-top: 7%;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 80%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    width: 90%;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-suit-right-img-1 {
    width: 400px;
    height: 500px;
    align-self: flex-end;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 200px;
    height: 250px;
    align-self: flex-end;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
  }

  .home-body-steps {
    margin-top: 8%;
    width: 75%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-left {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-list {
    width: 10%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
    display: none;
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
    display: none;
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
    display: none;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;

  }

  .home-body-steps-right {
    width: 100%;
    margin-right: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;
  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6d6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 5%;
    margin-left: 10%;
    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    justify-content: end;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-top {
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
  }

  .home-body-top-left {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .dazi {
    position: relative;
    width: 100%;
    height: 220px;
    color: rgb(16, 17, 17);
    z-index: 29;
  }

  .xiaozi {
    position: relative;
    width: 90%;
    height: 80px;
    font-size: 11px;
    line-height: 20px;
    color: rgb(143, 139, 139);
    font-family: var(--ff-albb-light);
    z-index: 29;
    transition: .5s;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .black {
    font-size: 35px;
    font-weight: 600;
    color: #212121;
    letter-spacing: 4px;
  }

  .green {
    font-size: 28px;
    font-weight: 600;
    color: var(--youth-green-2);
    letter-spacing: 4px;

  }

  .button-list {
    display: flex;
    gap: 23px;
    align-items: center;
    width: 90%;
  }

  /*disply: flex;align-items: center;justify-content: center;flex-direction: column*/
  .experience {
    position: relative;
    width: 160px;
    height: 38px;
    background-color: var(--youth-green-2);
    border: 2px var(--youth-green-2) solid;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    line-height: 40px;
    font-family: var(--ff-almm);
    border-radius: var(--radius-6);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: white;
    cursor: pointer;
    z-index: 3;
    box-shadow: var(--shadow-3);
  }

  .content {
    position: relative;
    width: 160px;
    height: 38px;
    background-color: rgb(255, 255, 255);
    border: 2px var(--youth-green-2) solid;
    border-radius: var(--radius-6);
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    line-height: 40px;
    font-family: var(--ff-almm);
    letter-spacing: 2px;
    transition: all 0.3s;
    color: var(--youth-green-2);
    cursor: pointer;
    z-index: 3;
  }

  .experience:hover {
    box-shadow: 0 0 3px #999;
  }

  .content:hover {
    box-shadow: 0 0 3px #999;
  }

  /* 动画  下*/
  .down-enter-active,
  .down-leave-active {
    transition: all 1s;
  }

  .down-enter {
    transform: translateY(-30px);
    opacity: 0;
  }

  .down-enter-to {
    opacity: 1;
  }

  /* 动画  上*/
  .up-enter-active,
  .up-leave-active {
    transition: all 1s;
  }

  .up-enter {
    transform: translateY(30px);
    opacity: 0;
  }

  .up-enter-to {
    opacity: 1;
  }

  .accordion {
    margin-top: 50px;
  }

  .bgcircle {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background: radial-gradient(rgb(192, 246, 209), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle1 {
    position: absolute;
    top: -200px;
    left: -130px;
    width: 450px;
    height: 450px;
    border-radius: 350px;
    background: radial-gradient(rgba(219, 202, 252, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.8rem);
  }

  .bgcircle2 {
    position: absolute;
    top: 400px;
    left: 200px;
    width: 280px;
    height: 280px;
    border-radius: 280px;
    background: radial-gradient(rgba(199, 209, 254, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle3 {
    position: absolute;
    top: 50px;
    right: 1px;
    width: 500px;
    height: 500px;
    border-radius: 500px;
    background: radial-gradient(rgb(255, 200, 200), rgb(245, 245, 245));
    filter: blur(2.5rem);
  }

  .bgcircle4 {
    position: absolute;
    top: 1110px;
    right: 80px;
    width: 350px;
    height: 350px;
    border-radius: 500px;
    background: radial-gradient(rgba(255, 200, 200, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.5rem);
  }

  .bgcircle5 {
    position: absolute;
    top: 1350px;
    right: 150px;
    width: 260px;
    height: 260px;
    border-radius: 500px;
    background: radial-gradient(rgba(248, 255, 200, 0.8), rgba(241, 255, 255, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle6 {
    position: absolute;
    top: 1180px;
    right: 340px;
    width: 220px;
    height: 220px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.8), rgba(241, 255, 251, 0.85));
    filter: blur(2.5rem);
  }

  .bgcircle7 {
    position: absolute;
    top: 2040px;
    left: 120px;
    width: 240px;
    height: 240px;
    border-radius: 500px;
    background: radial-gradient(rgba(156, 191, 255, 0.4), rgba(241, 255, 251, 0.55));
    filter: blur(2.5rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1720px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 204, 204, 0.7), rgba(245, 245, 245, 0.75));
    filter: blur(2.7rem);
  }

  .bgcircle8 {
    position: absolute;
    top: 1680px;
    right: 200px;
    width: 400px;
    height: 400px;
    border-radius: 500px;
    background: radial-gradient(rgba(253, 206, 206, 0.8), rgba(245, 245, 245, 0.7));
    filter: blur(2.5rem);
  }

  .bgcircle9 {
    position: absolute;
    top: 2120px;
    right: 700px;
    width: 200px;
    height: 200px;
    border-radius: 500px;
    background: radial-gradient(rgba(192, 246, 209, 0.8), rgba(245, 245, 245, 0.8));
    filter: blur(2.1rem);
  }


  .home-body-steps {
    margin-top: 5%;
    width: 85%;
    height: 450px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .home-body-steps-left {
    width: 50%;
    height: 100%;
    /*display: flex;*/
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-steps-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center; /*让grid布局下的每列元素水平居中*/
  }

  .home-body-steps-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
    background-color: rgba(241, 243, 250, 0.88);
    z-index: 88;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-1);
  }

  .home-body-steps-item:hover {
    transform: scale(1.1);
    transition: var(--transition-2);
  }

  .home-body-steps-item-title {
    text-align: center;
  }

  .home-body-steps-item-text {
    text-align: center;
  }


  .home-body-steps-circle {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: var(--radius-circle);
    border: var(--blue-purple) solid 1px;
  }

  .home-body-steps-item-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    background-color: #e8e5fa;
    box-shadow: var(--shadow-3);
    font-size: var(--fs-5);
    font-family: "Adobe Garamond Pro Bold";
  }

  .top-white {
    background-color: white;
  }

  .home-body-steps-item-top-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
  }

  .home-body-steps-item-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-body-steps-item-title {
    font-weight: var(--fw-600);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .home-body-steps-item-text {
    width: 75%;
    line-height: 25px;
    letter-spacing: 1px;
    margin-top: 5%;
    color: #6e6d6d;
  }

  .home-body-steps-right {
    width: 80%;
    margin-left: 0%;
    margin-right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-top {
    width: 100%;
    height: 30%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    display: flex;
    align-items: flex-end;
    z-index: 30;
  }

  .home-body-steps-right-bottom {
    width: 100%;
    height: 30%;
    align-self: flex-start;
    margin-top: 5%;
    z-index: 30;

  }

  .home-body-steps-right-top-bottom-text {
    font-size: var(--fs-7);
    color: #6e6d6d;
    line-height: 25px;
    z-index: 30;
  }

  .home-body-steps-right-btn {
    font-size: var(--fs-6);
    width: 150px;
    height: 45px;
    margin-top: 8%;
    margin-left: 0;

    background-color: var(--youth-green-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: var(--ff-almm);
    border-radius: var(--radius-10);
    letter-spacing: 2px;
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .home-body-steps-right-btn-container {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-body-steps-right-btn:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
  }

  .home-body-suit {
    height: fit-content;
    width: 100vw;
    display: flex;
    justify-items: center;
    align-items: center;
    /*margin-top: 3%;*/
    /*margin-bottom: 4%;*/
    z-index: 66;
  }

  .home-body-suit-left {
    width: 100%;
    margin-top: 5%;
    margin-left: 0;
    /*width: 150%;*/
    /*margin-left: 130%;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home-body-suit-left-title {
    width: 80%;
    font-size: var(--fs-2);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .home-body-suit-left-list {
    width: 80%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .home-body-suit-left-list-item {
    min-height: 65px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: auto;
  }

  .home-body-suit-icon-container {
    width: 20px;
    height: 20px;
    margin-top: 0.5%;
  }

  .home-body-suit-left-text {
    width: 100%;
    line-height: 25px;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    text-align: start;
    color: #484848;
  }

  .home-body-suit-left-list-item ion-icon {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 10%;
    color: var(--youth-blue-purple);
  }

  .home-body-suit-right {
    /*width: 90%;*/
    /*display: flex;*/
    gap: 40px;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .home-body-suit-right-img-1 {
    width: 250px;
    height: 500px;
    align-self: flex-end;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
  }

  .home-body-suit-right-img-2 {
    width: 160px;
    height: 250px;
    align-self: flex-end;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-3);
  }

  .home-body-cooperate {
    width: 90%;
    height: fit-content;
    padding: 150px 0 80px 0;
  }

  .home-body-cooperate-list {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    z-index: 33;
  }

  .home-body-cooperate-list-item {
    width: 95%;
    padding: 20px 0;
    background-color: white;
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
  }

  .home-body-cooperate-list-item:hover {
    transform: scale(1.06);
    transition: var(--transition-3);
    box-shadow: var(--shadow-6);
  }

  .home-body-cooperate-list-item img {
    width: 100px;
  }

}

</style>