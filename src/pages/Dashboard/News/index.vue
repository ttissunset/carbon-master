<template>
  <div class="body">
    <div class="dashboard-container">
      <DashboardLeft/>
      <div class="rightBox">
        <transition name="left">
          <div class="bottomBox" v-show="show">
            <div class="dataBox">
              <div class="erChartTitle">成交数据</div>
              <div class="chartsBox">
                <lineCharts v-if="isshow" :lineChart="this.lineCharts1"/>
              </div>
            </div>
            <div class="dataBox">
              <div class="erChartTitle">挂牌协议交易</div>
              <div class="chartsBox">
                <lineCharts v-if="isshow" :lineChart="this.lineCharts2"/>
              </div>
            </div>
            <div class="dataBox">
              <div class="erChartTitle">大宗协议交易</div>
              <div class="chartsBox">
                <lineCharts v-if="isshow" :lineChart="this.lineCharts3"/>
              </div>
            </div>
            <div class="dataBox">
              <div class="erChartTitle">累计成交统计</div>
              <div class="chartsBox">
                <lineCharts v-if="isshow" :lineChart="this.lineCharts4"/>
              </div>
            </div>
          </div>
        </transition>
        <div class="partitionBox">
          <div class="leftBox">
            <div class="hot">行业数据</div>
            <div class="all">热门资讯</div>
          </div>
          <div class="search">
            <input type="text" placeholder="请输入关键字" ref="searchInput"></input>
            <div class="searchButtom">查询</div>
          </div>
        </div>
        <transition name="right">
          <div class="topBox" v-show="show">
            <div class="box-container" ref="boxContainer">
              <div class="newsBox" ref="box" v-for="(item,index) in boxList" :key="item.id">
                <div class="title">
                  {{ item.title }}
                </div>
                <div v-if="item.publishTime" class="date">{{ item.publishTime.substring(0, 10) }}</div>
                <div class="detail">
                  <img :src="eachImgList[index].data">
                </div>
                <div class="more" @click="showDetail(item)">详情</div>
              </div>
            </div>
            <div class="leftClick" @click="leftClick()" v-show="showLeft">
              <a class="iconfont icon-zuo"></a>
            </div>
            <div class="rightClick" v-show="showRight" @click="rightClick()">
              <a class="iconfont icon-you"></a>
            </div>
          </div>
        </transition>
        <div class="showBox" v-show="boxShow">
          <h2 @click="hideBox">x</h2>
          <div class="innerTitle">{{ this.selectNews.title }}</div>
          <div class="innerDate">{{ this.selectNews.publishTime }}</div>
          <div class="innerIntroduce">
            {{ this.selectNews.detail }}
          </div>
          <div class="imgBox">
            <div class="img" v-for="(item,index) in imgList" :key="index">
              <a v-if="!isJpg(item)" @click="showVideo(item)" class="iconfont icon-bofang"></a>
              <img v-if="isJpg(item)" :src="item">
              <video v-else @click="showVideo(item)">
                <source :src="item" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
        <div class="videoBox" v-show="videoShow">
          <div class="closeVideo" @click="closeVideo">x</div>
          <video v-if="this.videoUrl" controls="controls">
            <source :src="this.videoUrl" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import DashboardLeft from "../../../../src/components/DashboardComponents/Left/index.vue";
import lineCharts from '@/pages/Dashboard/News/erCharts/index.vue'
import axios from 'axios';
import {set} from 'vue';

export default {
  name: "index",
  components: {
    DashboardLeft,
    lineCharts
  },
  data() {
    return {
      boxList: [],
      longBoxList: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
      lineCharts1: {
        xData: ['成交总额(千元)', '最高成交(元/吨)', '最低成交(元/吨)'],
        yData: []
      },
      lineCharts2: {
        xData: ['今日成交(吨)', '成交额(元)', '成交均价(元/吨)'],
        yData: []
      },
      lineCharts3: {
        xData: ['今日成交(吨)', '成交额(元)', '成交均价(元/吨)'],
        yData: []
      },
      lineCharts4: {
        xData: ['累计总量(吨)', '累计总额(千元)', '成交均价(万元/吨)'],
        yData: []
      },
      pagination: {
        marginLeft: "8%",
        marginTop: "1%",
      },
      carbonData: {
        //  DATE: "2023.04.12",
        //  T1: "100",
        //  T2: "5600",
        //  T3: "56",
        //  T4: "56",
        //  T5: "56",
        //  T6: "100",
        //  T7: "5600",
        //  T8: "56",
        //  T9: "0",
        //  T10: "0",
        //  T11: "0",
        //  T12: "233538499",
        //  T13: "10686772117.34",
      },
      //最大点击数
      maxClickNum: 0,
      // 当前点击数
      clickNum: 0,
      // 上次移动距离
      lastLeft: 0,
      // 是否显示右箭头
      showRight: true,
      companyId: "",
      isshow: false,
      show: false,
      boxShow: false,
      videoShow: false,
      videoUrl: '',
      selectNews: [],
      allMediaList: [],
      mediaList: [],
      imgList: [],
      eachImgList: []
    };
  },
  async created() {
    await this.getCarbonData()
  },
  mounted() {
    this.companyId = localStorage.getItem("companyId");
    this.show = true;
    this.getNews();
    if (this.boxList.length < 5) {
      this.showRight = false;
    }
  },

  computed: {
    showLeft() {
      return this.clickNum > 0;
    },
    isJpg() {
      return (item) => {
        var a = item.substring(item.length - 3)
        if (a == 'jpg') {
          return true
        }
        if (a == 'mp4') {
          return false
        }
      }
    }
  },
  methods: {
    rightClick() {
      const {box, boxContainer} = this.$refs;
      // 获取盒子的宽度
      let width = box[this.clickNum].offsetWidth;
      // 获取可见区域的宽度
      let lookWidth = boxContainer.offsetWidth;
      // 获取最后一个元素距离左侧的距离
      let lastItemOffsetLeft = box[box.length - 1].offsetLeft;
      setTimeout((e) => {
        if (this.clickNum < box.length - 1) {
          if (lastItemOffsetLeft > lookWidth) {
            box[0].style.marginLeft = `${-width + this.lastLeft - 10}px`;
            this.lastLeft = -width + this.lastLeft;
            this.clickNum += 1;
            this.maxClickNum = this.clickNum;
          }
          this.showRight = lastItemOffsetLeft > lookWidth + width;
        }
      }, 50);
    },
    // 左箭头点击事件
    leftClick() {
      const {box, boxContainer} = this.$refs;
      let width = box[box.length - 1].offsetWidth;
      if (this.clickNum > 0) {
        box[0].style.marginLeft = `${width + this.lastLeft}px`;
        this.lastLeft = width + this.lastLeft;
        this.clickNum--;
        if (this.clickNum < this.maxClickNum) {
          this.showRight = true;
        }
      }
    },

    getNews() {
      var pageParams = {
        pageNo: 1,
        pageSize: 1,
      };
      this.postRequest(
          `information-control/Information/getPage/${this.companyId}`,
          pageParams
      )
          .then((res) => {
            this.boxList = res.items;
            console.log(this.boxList);
            this.getAllImgList();

          })
          .catch((error) => {
          });
    },
    // 获取碳价接口
    getCarbonData() {
      return new Promise((resolve, reject) => {
        axios.get(`https://www.carbonict.com/api/carbonqc/carbontrading?key=vKqyFL9zhBeq1h6R7AvLAVxGjz`).then(res => {
          this.carbonData = res.data.data
          this.pushData()
          console.log(this.carbonData);
          resolve()
        }).catch((err) => {
          reject(err)
        })
      })
    },
    pushData() {
      this.lineCharts1.yData = [this.carbonData.T2 / 10, this.carbonData.T3, this.carbonData.T4]
      this.lineCharts2.yData = [this.carbonData.T6, this.carbonData.T7, this.carbonData.T8]
      this.lineCharts3.yData = [this.carbonData.T9, this.carbonData.T10, this.carbonData.T11]
      this.lineCharts4.yData = [this.carbonData.T5, this.carbonData.T12 / 1000, this.carbonData.T13 / 10000]
      this.isshow = true
    },
    showDetail(item) {
      this.boxShow = true
      var InformationId = item.id
      this.postRequest(`information-control//Information/getInformationById/${this.companyId}`, InformationId).then(res => {
        this.selectNews = res.data
        // console.log(this.selectNews);
        this.mediaList = [this.selectNews.mediaIdOne, this.selectNews.mediaIdTwo, this.selectNews.mediaIdThree]
        // console.log(this.mediaList);
        var a = {}
        setTimeout(() => {
          for (var i = 0; i < this.mediaList.length; i++) {
            this.getRequest(`media-control/media/preview/${this.mediaList[i]}`).then(res => {
              a = res.data
              this.imgList.push(a)
            }, 100)
          }
        })
      })
    },
    hideBox() {
      this.boxShow = false
      this.imgList = []
    },
    showVideo(item) {
      this.videoShow = true
      this.videoUrl = item
    },
    closeVideo() {
      this.videoShow = false
    },
    getAllImgList() {
      for (var i = 0; i < this.boxList.length; i++) {
        var a = {
          id: this.boxList[i].id,
          data: {}
        }
        a.data = [this.boxList[i].mediaIdOne, this.boxList[i].mediaIdTwo, this.boxList[i].mediaIdThree]
        this.allMediaList.push(a)
      }
      setTimeout(() => {
        for (var i = 0; i < this.allMediaList.length; i++) {
          for (var j = 0; j < this.allMediaList[i].data.length; j++) {
            this.getRequest(`media-control/media/preview/${this.allMediaList[i].data[j]}`).then(res => {
              var a = {
                id: i,
                data: {}
              }
              a.data = res.data
              if (a.data.substring(a.data.length - 3) == 'jpg') {
                this.eachImgList.push(a)
                console.log(this.eachImgList);
              }
            }, 100)
            break
          }
        }
      }, 200);
      console.log(this.allMediaList);
    }
  }
};
</script>

<style scoped>
.body {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at top left, #f6e5ef 15%, transparent 40%),
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
  max-height: 92vh;
  margin-top: 2%;
  /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
  display: flex;
  border-radius: var(--radius-20);
  background: linear-gradient(
      to right bottom,
      rgba(252, 228, 228, 0.45),
      rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(1px);
  box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
}

.rightBox {
  margin-top: 0.5%;
  margin-left: 1%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 82%;
  height: 98%;
  border-radius: var(--radius-10);
  background-color: rgba(252, 251, 251, 0.5);
  box-shadow: var(--shadow-2);
}

.topBox {
  float: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39%;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.box-container {
  width: 95%;
  height: 100%;
  overflow: hidden;
}

.newsBox {
  display: inline-block;
  margin-top: 10px;
  text-align: center;
  width: 25%;
  height: 90%;
  border-right: 2px solid gray;
  transition: all 0.5s;
  cursor: pointer;
}

.newsBox:hover .title {
  color: rgb(131, 221, 135);
}

.newsBox:hover .detail {
  color: rgb(131, 221, 135);
}

.newsBox:hover .date {
  background-color: rgb(131, 221, 135);
  color: white;
}

.title {
  margin-top: 2%;
  margin-left: 15%;
  width: 60%;
  height: 15%;
  font-size: 15px;
  line-height: 45px;
  text-align: center;
  transition: all 0.5s;
}

.date {
  margin-left: 4%;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  height: 10%;
  width: 35%;
  border-radius: 20px;
  background-color: #cfcfcf;
  transition: all 0.5s;
}

.detail {
  padding-top: 10px;
  margin-left: 15%;
  width: 70%;
  height: 50%;
  font-size: 15px;
  line-height: 25px;
  color: gray;
  text-align: center;
  white-space: normal;
  box-sizing: border-box;
  transition: 0.5s;
  overflow-y: scroll;
}

.detail::-webkit-scrollbar {
  width: 0px;
}

.detail img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}

.more {
  position: relative;
  margin-top: 5%;
  margin-left: 20%;
  width: 60%;
  height: 15%;
  text-align: center;
  line-height: 38px;
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  color: white;
  border-radius: var(--radius-10);
  z-index: 2;
  overflow: hidden;
  background-color: rgba(177, 177, 177, 0.4);
}

.more::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 100%;
  background-color: var(--youth-green-2);
  border-radius: var(--radius-10);
  z-index: -1;
  transition: height 0.5s ease;
}

.more:hover::before {
  height: 100%;
}

.more:hover {
  color: #fff;
}

.leftClick {
  position: absolute;
  height: 50px;
  width: 50px;
  top: 140px;
  left: 1px;
  transition: all 0.5s;
}

.leftClick a {
  margin-left: 5px;
  font-size: 40px;
  font-weight: 700;
}

.leftClick:hover {
  transform: translateX(-5px);
}

.rightClick {
  position: absolute;
  height: 50px;
  width: 50px;
  top: 140px;
  right: 1px;
  transition: all 0.5s;
}

.rightClick a {
  margin-left: 5px;
  font-size: 40px;
  font-weight: 700;
}

.rightClick:hover {
  transform: translateX(5px);
}

/* 动画  右*/
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

/* 动画  左*/
.left-enter-active,
.left-leave-active {
  transition: all 1s;
}

.left-enter {
  transform: translateX(30px);
  opacity: 0;
}

.left-enter-to {
  opacity: 1;
}

.partitionBox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 3.5%;
  width: 90%;
  height: 8%;
  user-select: none;
}

.leftBox {
  width: 10%;
  height: 100%;
}

.hot {
  width: 100%;
  height: 50%;
  font-size: 17px;
  text-align: center;
  line-height: 30px;
  color: #f4b25b;
  font-weight: 700;
  border-bottom: greenyellow 2px solid;
}

.all {
  width: 100%;
  height: 50%;
  font-size: 17px;
  text-align: center;
  line-height: 30px;
  font-weight: 700;
  color: rgb(193, 183, 242);
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 80%;
  margin-left: 48.5%;
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
  display: flex;
  justify-content: center;
  height: 40%;
  width: 95%;
  overflow: hidden;
}

.dataBox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  height: 65%;
  margin-right: 1%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(223, 223, 223);
  background-color: #fdfdfd;
}

.erChartTitle {
  height: 25%;
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
}

.chartsBox {
  height: 140px;
  width: 270px;
  overflow: hidden;
}

.showBox {
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  height: 60%;
  border-radius: 10px;
  background-color: #ffffff;
  animation-name: back;
  animation-duration: .8s;
  cursor: pointer;
  user-select: none;
}

.showBox h2 {
  text-align: right;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 200;
  margin-top: 10px;
}

.innerTitle {
  margin-left: 5%;
  text-align: left;
  font-weight: 700;
  font-size: 25px;
  width: 100%;
  height: 10%;
}

.innerDate {
  text-align: left;
  margin-left: 5%;
  width: 22%;
  color: #adadad;
  height: 6%;
}

.innerIntroduce {
  margin-left: 5%;
  width: 90%;
  height: 40%;
  font-size: 18px;
}

.imgBox {
  margin-left: 10%;
  width: 90%;
  height: 40%;
}

.img {
  position: relative;
  float: left;
  width: 30%;
  height: 100%;
  background-size: 100% 100%;
  transform: skewX(-20deg);
}

.img img {
  width: 100%;
  height: 100%;
}

.img video {
  position: relative;
  width: 100%;
  height: 100%;
}

.img a {
  position: absolute;
  font-size: 35px;
  top: 60px;
  left: 60px;
  z-index: 11;
  transition: .5s;
}

.img a:hover {
  color: rgb(34, 233, 34);
}

.videoBox {
  position: absolute;
  width: 50%;
  height: 50%;
  border-radius: 10px;
  background-color: #4a4a4a;
}

.videoBox video {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.closeVideo {
  position: absolute;
  right: 20px;
  font-size: 25px;
  color: white;
  z-index: 22;
  user-select: none;
  cursor: pointer;
}

@keyframes back {
  0% {
    opacity: 0;
    top: 0%;
  }
  90% {
    top: 25%;
  }
  100% {
    opacity: 1;
    top: 22%;
  }
}

@media (max-width: 1250px) {
  .body {
    width: 100%;
    min-height: 100vh;
    background: radial-gradient(
        circle at top left,
        #f6e5ef 15%,
        transparent 40%
    ),
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
    max-height: 92vh;
    margin-top: 2%;
    /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
    display: flex;
    border-radius: var(--radius-20);
    background: linear-gradient(
        to right bottom,
        rgba(252, 228, 228, 0.45),
        rgba(255, 255, 255, 0.1)
    );
    backdrop-filter: blur(1px);
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
  }

  .rightBox {
    margin-top: 0.5%;
    margin-left: 1%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 82%;
    height: 98%;
    border-radius: var(--radius-10);
    background-color: rgba(252, 251, 251, 0.5);
    box-shadow: var(--shadow-2);
  }

  .topBox {
    float: left;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 39%;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 7%;
  }

  .box-container {
    width: 95%;
    height: 100%;
    overflow: hidden;
  }

  .newsBox {
    display: inline-block;
    margin-top: 10px;
    width: 25%;
    height: 90%;
    border-right: 2px solid gray;
    transition: all 0.5s;
  }

  .newsBox:hover .title {
    color: rgb(131, 221, 135);
  }

  .newsBox:hover .detail {
    color: rgb(131, 221, 135);
  }

  .newsBox:hover .date {
    background-color: rgb(131, 221, 135);
    color: white;
  }

  .title {
    margin-top: 2%;
    margin-left: 20%;
    width: 60%;
    height: 15%;
    font-size: 20px;
    line-height: 45px;
    text-align: center;
    transition: all 0.5s;
  }

  .date {
    margin-top: 2%;
    margin-left: 4%;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    height: 10%;
    min-width: 80px;
    border-radius: 20px;
    background-color: #cfcfcf;
    transition: all 0.5s;
  }

  .detail {
    padding-top: 10px;
    width: 75%;
    height: 50%;
    font-size: 15px;
    line-height: 25px;
    color: gray;
    text-align: center;
    white-space: normal;
    box-sizing: border-box;
    transition: 0.5s;
  }

  .more {
    position: relative;
    margin-top: 5%;
    margin-left: 20%;
    width: 60%;
    height: 15%;
    text-align: center;
    line-height: 38px;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    color: white;
    border-radius: var(--radius-10);
    z-index: 2;
    overflow: hidden;
    background-color: rgba(177, 177, 177, 0.4);
  }

  .more::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-10);
    z-index: -1;
    transition: height 0.5s ease;
  }

  .more:hover::before {
    height: 100%;
  }

  .more:hover {
    color: #fff;
  }

  .leftClick {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 140px;
    left: 1px;
    transition: all 0.5s;
  }

  .leftClick a {
    margin-left: 5px;
    font-size: 40px;
    font-weight: 700;
  }

  .leftClick:hover {
    transform: translateX(-5px);
  }

  .rightClick {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 140px;
    right: 1px;
    transition: all 0.5s;
  }

  .rightClick a {
    margin-left: 5px;
    font-size: 40px;
    font-weight: 700;
  }

  .rightClick:hover {
    transform: translateX(5px);
  }

  /* 动画  右*/
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

  /* 动画  左*/
  .left-enter-active,
  .left-leave-active {
    transition: all 1s;
  }

  .left-enter {
    transform: translateX(30px);
    opacity: 0;
  }

  .left-enter-to {
    opacity: 1;
  }

  .partitionBox {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 43%;
    left: 3.5%;
    min-width: 90%;
    height: 8%;
    user-select: none;
  }

  .leftBox {
    min-width: 100px;
    height: 100%;
  }

  .hot {
    width: 100%;
    height: 50%;
    font-size: 17px;
    text-align: center;
    line-height: 30px;
    color: #f4b25b;
    font-weight: 700;
    border-bottom: greenyellow 2px solid;
  }

  .all {
    width: 100%;
    height: 50%;
    font-size: 17px;
    text-align: center;
    line-height: 30px;
    font-weight: 700;
    color: rgb(193, 183, 242);
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 80%;
    margin-left: 35%;
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 49%;
    width: 95%;
    margin-top: 1%;
  }
}

@media (max-width: 1200px) {
  .body {
    width: 100%;
    min-height: 100vh;
    background: radial-gradient(
        circle at top left,
        #f6e5ef 15%,
        transparent 40%
    ),
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
    max-height: 92vh;
    margin-top: 2%;
    /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
    display: flex;
    border-radius: var(--radius-20);
    background: linear-gradient(
        to right bottom,
        rgba(252, 228, 228, 0.45),
        rgba(255, 255, 255, 0.1)
    );
    backdrop-filter: blur(1px);
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
  }

  .rightBox {
    margin-top: 0.5%;
    margin-left: 1%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 82%;
    height: 98%;
    border-radius: var(--radius-10);
    background-color: rgba(252, 251, 251, 0.5);
    box-shadow: var(--shadow-2);
  }

  .topBox {
    float: left;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 39%;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 7%;
  }

  .box-container {
    width: 95%;
    height: 100%;
    overflow: hidden;
  }

  .newsBox {
    display: inline-block;
    margin-top: 10px;
    width: 25%;
    height: 90%;
    border-right: 2px solid gray;
    transition: all 0.5s;
  }

  .newsBox:hover .title {
    color: rgb(131, 221, 135);
  }

  .newsBox:hover .detail {
    color: rgb(131, 221, 135);
  }

  .newsBox:hover .date {
    background-color: rgb(131, 221, 135);
    color: white;
  }

  .title {
    margin-top: 2%;
    margin-left: 20%;
    width: 60%;
    height: 15%;
    font-size: 20px;
    line-height: 45px;
    text-align: center;
    transition: all 0.5s;
  }

  .date {
    margin-top: 2%;
    margin-left: 4%;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    height: 10%;
    min-width: 80px;
    border-radius: 20px;
    background-color: #cfcfcf;
    transition: all 0.5s;
  }

  .detail {
    padding-top: 10px;
    margin-left: 10%;
    width: 80%;
    height: 50%;
    font-size: 15px;
    line-height: 25px;
    color: gray;
    text-align: center;
    white-space: normal;
    box-sizing: border-box;
    transition: 0.5s;
  }

  .more {
    position: relative;
    margin-top: 5%;
    margin-left: 20%;
    width: 60%;
    height: 15%;
    text-align: center;
    line-height: 38px;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    color: white;
    border-radius: var(--radius-10);
    z-index: 2;
    overflow: hidden;
    background-color: rgba(177, 177, 177, 0.4);
  }

  .more::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-10);
    z-index: -1;
    transition: height 0.5s ease;
  }

  .more:hover::before {
    height: 100%;
  }

  .more:hover {
    color: #fff;
  }

  .leftClick {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 140px;
    left: 1px;
    transition: all 0.5s;
  }

  .leftClick a {
    margin-left: 5px;
    font-size: 40px;
    font-weight: 700;
  }

  .leftClick:hover {
    transform: translateX(-5px);
  }

  .rightClick {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 140px;
    right: 1px;
    transition: all 0.5s;
  }

  .rightClick a {
    margin-left: 5px;
    font-size: 40px;
    font-weight: 700;
  }

  .rightClick:hover {
    transform: translateX(5px);
  }

  /* 动画  右*/
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

  /* 动画  左*/
  .left-enter-active,
  .left-leave-active {
    transition: all 1s;
  }

  .left-enter {
    transform: translateX(30px);
    opacity: 0;
  }

  .left-enter-to {
    opacity: 1;
  }

  .partitionBox {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 43%;
    left: 3.5%;
    width: 90%;
    height: 8%;
    user-select: none;
  }

  .leftBox {
    width: 10%;
    height: 100%;
  }

  .hot {
    width: 100%;
    height: 50%;
    font-size: 17px;
    text-align: center;
    line-height: 30px;
    color: #f4b25b;
    font-weight: 700;
    border-bottom: greenyellow 2px solid;
  }

  .all {
    width: 100%;
    height: 50%;
    font-size: 17px;
    text-align: center;
    line-height: 30px;
    font-weight: 700;
    color: rgb(193, 183, 242);
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 80%;
    margin-left: 35%;
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 49%;
    width: 95%;
    margin-top: 1%;
  }
}

@media (max-width: 1050px) {
  .body {
    width: 100%;
    min-height: 100vh;
    background: radial-gradient(
        circle at top left,
        #f6e5ef 15%,
        transparent 40%
    ),
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
    max-height: 92vh;
    margin-top: 2%;
    /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
    display: flex;
    border-radius: var(--radius-20);
    background: linear-gradient(
        to right bottom,
        rgba(252, 228, 228, 0.45),
        rgba(255, 255, 255, 0.1)
    );
    backdrop-filter: blur(1px);
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
  }

  .rightBox {
    margin-top: 0.5%;
    margin-left: 1%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 82%;
    height: 98%;
    border-radius: var(--radius-10);
    background-color: rgba(252, 251, 251, 0.5);
    box-shadow: var(--shadow-2);
  }

  .topBox {
    float: left;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 39%;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 7%;
  }

  .box-container {
    width: 95%;
    height: 100%;
    overflow: hidden;
  }

  .newsBox {
    display: inline-block;
    margin-top: 10px;
    width: 25%;
    height: 90%;
    border-right: 2px solid gray;
    transition: all 0.5s;
  }

  .newsBox:hover .title {
    color: rgb(131, 221, 135);
  }

  .newsBox:hover .detail {
    color: rgb(131, 221, 135);
  }

  .newsBox:hover .date {
    background-color: rgb(131, 221, 135);
    color: white;
  }

  .title {
    margin-top: 2%;
    margin-left: 10%;
    width: 60%;
    height: 15%;
    font-size: 17px;
    line-height: 45px;
    text-align: center;
    transition: all 0.5s;
  }

  .date {
    margin-top: 2%;
    margin-left: 4%;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    height: 10%;
    min-width: 80px;
    border-radius: 20px;
    background-color: #cfcfcf;
    transition: all 0.5s;
  }

  .detail {
    padding-top: 10px;
    margin-left: 10%;
    width: 80%;
    height: 50%;
    font-size: 15px;
    line-height: 25px;
    color: gray;
    text-align: center;
    white-space: normal;
    box-sizing: border-box;
    transition: 0.5s;
    overflow-y: scroll;
  }

  .detail::-webkit-scrollbar {
    width: 0px;
  }

  .more {
    position: relative;
    margin-top: 5%;
    margin-left: 20%;
    width: 60%;
    height: 15%;
    text-align: center;
    line-height: 38px;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    color: white;
    border-radius: var(--radius-10);
    z-index: 2;
    overflow: hidden;
    background-color: rgba(177, 177, 177, 0.4);
  }

  .more::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-10);
    z-index: -1;
    transition: height 0.5s ease;
  }

  .more:hover::before {
    height: 100%;
  }

  .more:hover {
    color: #fff;
  }

  .leftClick {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 140px;
    left: 1px;
    transition: all 0.5s;
  }

  .leftClick a {
    margin-left: 5px;
    font-size: 40px;
    font-weight: 700;
  }

  .leftClick:hover {
    transform: translateX(-5px);
  }

  .rightClick {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 140px;
    right: 1px;
    transition: all 0.5s;
  }

  .rightClick a {
    margin-left: 5px;
    font-size: 40px;
    font-weight: 700;
  }

  .rightClick:hover {
    transform: translateX(5px);
  }

  /* 动画  右*/
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

  /* 动画  左*/
  .left-enter-active,
  .left-leave-active {
    transition: all 1s;
  }

  .left-enter {
    transform: translateX(30px);
    opacity: 0;
  }

  .left-enter-to {
    opacity: 1;
  }

  .partitionBox {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 43%;
    left: 3.5%;
    width: 90%;
    height: 8%;
    user-select: none;
  }

  .leftBox {
    width: 10%;
    height: 100%;
  }

  .hot {
    width: 100%;
    height: 50%;
    font-size: 17px;
    text-align: center;
    line-height: 30px;
    color: #f4b25b;
    font-weight: 700;
    border-bottom: greenyellow 2px solid;
  }

  .all {
    width: 100%;
    height: 50%;
    font-size: 17px;
    text-align: center;
    line-height: 30px;
    font-weight: 700;
    color: rgb(193, 183, 242);
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 80%;
    margin-left: 10%;
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 49%;
    width: 95%;
    margin-top: 1%;
  }
}
</style>