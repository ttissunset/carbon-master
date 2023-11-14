<template>
  <div class="body">
    <Header/>
    <div class="bg">
      <span class="samllText" v-show="show">选择您需要的数字化碳管理解决方案</span>
      <span class="samllText-sub">—— &nbsp;&nbsp;提供多种不同服务，只为满足贵公司的不同需求&nbsp;&nbsp; ——</span>
    </div>
    <!--@mousedown="drag($event, index)"  -->
    <transition name="right">
      <div class="newsBox" v-show="show">
        <div class="newsBox-input-container">
          <input placeholder="搜索你需要的服务" class="newsBox-input"/>
          <div class="newsBox-input-search-container">
            <ion-icon name="search"></ion-icon>
          </div>
        </div>

        <div class="newsBox-box-list-container">
          <div class="newsBox-box-list">
            <div class="newsBox-box-item" @click="goService(boxs)" v-for="(boxs) in boxData" :key="boxs.id" ref="dragbox">
              <div class="newsBox-box-item-top">
                <div class="newsBox-box-item-top-icon-container">
                  <ion-icon name="desktop"></ion-icon>
                </div>
                <div class="newsBox-box-item-top-text-container">
                  <div class="newsBox-box-item-top-text">
                    {{boxs.applicationName}}
                  </div>
                  <div class="newsBox-box-item-top-text-price">
                    最低
                    <div class="newsBox-box-item-top-text-price-hightline">
                      ￥3000
                    </div>
                    /月起
                  </div>
                </div>
              </div>
              <div class="newsBox-box-item-main">
                <div class="newsBox-box-item-main-functions">
                  <div class="newsBox-box-item-main-function-item">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    碳核算有很多功能碳核算
                  </div>
                  <div class="newsBox-box-item-main-function-item">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    碳核算有很多功能碳核算
                  </div>
                  <div class="newsBox-box-item-main-function-item">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    碳核算有很多功能碳核算
                  </div>
                  <div class="newsBox-box-item-main-function-item">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    碳核算有很多功能碳核算
                  </div>
                </div>
              </div>
              <div class="newsBox-box-item-bottom">
                <div class="newsBox-box-item-top-btn">
                  订阅此服务
                  <ion-icon name="caret-forward"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="placeholder-150"></div>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  name: "NavigationHome",
  components: {Header},
  data() {
    return {
      show: false,
      boxData:'',
      itemId:''
    };
  },
  mounted() {
    const {dragbox} = this.$refs;
    this.show = true;
    this.getlist()
  },
  methods: {
    //  drag(e, index) {
    //    const { dragbox } = this.$refs;
    //    // 获取当前鼠标以及盒子在父元素的坐标
    //    let boxX = event.pageX - dragbox[index].offsetLeft;
    //    document.onmousemove = (e) => {
    //      let leftCurrent = event.pageX - boxX;
    //      dragbox[index].style.left = leftCurrent + "px";
    //      console.log(leftCurrent);
    //      if (leftCurrent < -40) {
    //        dragbox[index].style.left = -40 + "px";
    //    }
    //    };
    //    document.onmouseup = (e) => {
    //      document.onmousemove = null;
    //    };
    //  },\
  goService(item){
        this.itemId = item.id
      this.$router.push({name:'Service',query:{id:this.itemId}})
  },
  getlist(){
    this.getRequest('/tance-service-serve/service/base/getAll').then(res=>{
     this.boxData = res.data
    })
  }
  },
  //   beforeDestroy () {
  //   this.$bus.$emit('getServiceId',this.itemId)
  // }
};
</script>

<style scoped>
.bg {
  height: 230px;
  width: 100%;
  /*background-image: url("https://img.zcool.cn/community/012c575a7414b8a80120a123d6869a.jpg@1280w_1l_2o_100sh.jpg");*/
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.body {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at top left, #f1e0de 15%, transparent 40%),
  radial-gradient(circle at top right, #e7e1f1 20%, transparent 50%),
  radial-gradient(circle at bottom left, #e6fde7 25%, transparent 70%),
  radial-gradient(circle at bottom right, #d1e8f6 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}

.samllText {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  text-align: center;
  height: fit-content;
  /*color: white;*/
  color: rgba(0, 0, 0, 0.6);
  font-size: var(--fs-1);
  font-weight: var(--fw-600);
  letter-spacing: 5px;
}

.samllText-sub {
  font-size: var(--fs-7);
  color: #838383;
}

.newsBox {
  width: 90%;
  height: fit-content;
  /*height: 500px;*/
  /*white-space: nowrap;*/
  /*background-color: rgb(243, 242, 242);*/
  background-color: rgba(255, 255, 255, 0.7);
  margin-left: 5%;
  border-radius: var(--radius-30);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
}

.newsBox-input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80px;
  border-radius: var(--radius-30);
  margin-top: 2%;
  position: relative;
  flex-grow: 0;
}

.newsBox-input {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60px;
  background-color: rgba(255, 255, 255, .7);
  border-radius: var(--radius-30);
  box-shadow: none;
  border: #d7d7d7 solid 1px;
  font-size: var(--fs-6);
  padding-left: 2%;
  position: relative;
  letter-spacing: 1px;
}

.newsBox-input::placeholder {
  font-size: var(--fs-6);
  color: #8a8a8a;
}

.newsBox-input:focus {
  border: none;
  outline: #c5c5c5 solid 1px;
  box-shadow: var(--shadow-5);
  /*transition: var(--transition-2);*/
}

.newsBox-input-search-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 60px;
  background-color: var(--youth-blue-dark);
  color: white;
  border-radius: 3px var(--radius-30) var(--radius-30) 3px;
  /*border-radius: var(--radius-circle);*/
  box-shadow: var(--shadow-2);
  right: 3.5%;
  cursor: pointer;
}

.newsBox-input-search-container ion-icon {
  width: 40%;
  height: 40%;
}

.newsBox-box-list-container {
  /*width: 100%;*/
  width: 95%;
  height: fit-content;
  /*flex-grow: 1;*/
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3%;
  position: relative;
}

.newsBox-box-list {
  width: 100%;
  height: fit-content;
  /*height: 45%;*/
  /*height: 100%;*/
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  gap: 40px;
  position: relative;
  margin-top: 3%;
  margin-left: 2%;
}

.newsBox-box-item {
  width: 300px;
  height: 280px;
  background-color: #fff;
  box-shadow: var(--shadow-2);
  border-radius: var(--radius-10);
  margin-top: 1%;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
}

.newsBox-box-item:hover {
  box-shadow: var(--shadow-6);
  transform: scale(1.02);
  transition: var(--transition-3);
}

.newsBox-box-item-top {
  width: 90%;
  height: 25%;
  margin-top: 2%;
  display: flex;
  align-items: center;
}

.newsBox-box-item-top-icon-container {
  width: 60px;
  height: 60px;
  background-color: #ebe8ff;
  border-radius: var(--radius-10);
  box-shadow: var(--shadow-5);
  color: var(--youth-blue-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
}

.newsBox-box-item-top-icon-container ion-icon {
  font-size: var(--fs-3-5);
}

.newsBox-box-item-top-text-container {
  width: 50%;
  height: fit-content;
  margin-left: 5%;
  gap: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.newsBox-box-item-top-text {
  font-size: var(--fs-5);
  font-weight: var(--fw-600);
  letter-spacing: 2px;
  font-family: var(--ff-almm);
}

.newsBox-box-item-top-text-price {
  font-size: var(--fs-8);
  font-weight: var(--fw-600);
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  color: #4f4f4f;
}

.newsBox-box-item-top-text-price-hightline {
  font-size: var(--fs-6);
  font-weight: var(--fw-600);
  letter-spacing: 0px;
  margin-right: 3px;
  color: black;
  font-family: "Kozuka Gothic Pr6N R";
}

.newsBox-box-item-top-btn {
  width: 80%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--youth-green-2);
  color: white;
  border-radius: var(--radius-10);
  font-size: var(--fs-7);
  font-weight: var(--fw-600);
  cursor: pointer;
  letter-spacing: 5px;
  box-shadow: var(--shadow-5);
}

.newsBox-box-item-top-btn ion-icon {
  font-size: var(--fs-5);
}

.newsBox-box-item-main {
  width: 90%;
  height: 45%;
  margin-top: 3%;
  display: flex;
  background-color: rgba(239, 248, 253, 0.5);
  border-radius: var(--radius-10);
}

.newsBox-box-item-main ion-icon {
  color: var(--blue-crayola);
}

.newsBox-box-item-main-functions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-left: 6%;
}

.newsBox-box-item-main-function-item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6e6d6d;
  gap: 5px;
  letter-spacing: 1px;
}

.newsBox-box-item-bottom {
  width: 90%;
  height: 25%;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boxs {
  display: inline-block;
  height: 350px;
  width: 300px;
  margin-top: 20px;
  margin-left: 10px;
  background-color: #e1e1e1;
  border-radius: 8px;
  transition: all .5s;
}

.boxs:hover {
  background-color: #b0b0b0;
}

.title {
  display: inline-block;
  padding-left: 20px;
  height: 100px;
  width: 300px;
  line-height: 100px;
  font-size: 25px;
}

.smallImg {
  display: inline-block;
  width: 300px;
  height: 250px;
  background-color: #d97676;
}

.boxIntroduce {
  display: inline-block;
  width: 300px;
  height: 180px;
  background-color: #7cd266;
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

/* 动画  下*/
.right-enter-active,
.right-leave-active {
  transition: all 1s;
}

.right-enter {
  transform: translateX(-30px);
  opacity: 0;
}

.right-enter-to {
  opacity: 1;
}

</style>