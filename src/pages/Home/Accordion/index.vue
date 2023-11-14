<template>
  <div>
    <div class="wrap" ref="wrap">
      <div class="card " ref="card" @mouseover="move(index)" v-for="(item,index) in boxData" :key="index"
           :style="`background-image:url(${item.url})`">
        <h3>{{ item.name }}</h3>
        <div class="leftMask" ref="leftMask">
        <div class="inner" ref="inner">{{item.inner}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      boxData: [
        {
          url: 'https://ts1.cn.mm.bing.net/th/id/R-C.7ae4b35ae5e6e581593fe7d611a08452?rik=P1SaNbG79mLYVA&riu=http%3a%2f%2fwww.gjlysy.com%2fupload%2fimage%2f20200314%2f15841688598350370.jpg&ehk=43zi4L10HPqGfoKV%2fPXiKzK9LhFWeyAimk%2b5bz5Ky4A%3d&risl=&pid=ImgRaw&r=0',
          name: '碳排放',
          inner:'碳排放是关于温室气体排放的一个总称或简称。温室气体中最主要的组成部分是二氧化碳(CO2)，因此人们筒单地将“碳排放”理解为“二氧化碳排放” 人类的任何活动都有可能造成碳排放，各种燃油、燃气、石蜡、煤炭、天然气在使用过程中都会产生大量二氧化碳，城市运转、人们日常生活、交通运输(飞机、火车、汽车等)也会排放大量二氧化碳。'
        },
        {
          url: 'https://ts1.cn.mm.bing.net/th/id/R-C.0dee2228031e4ef5b03d0c5734aef866?rik=BD%2bnjbFbllVmEQ&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f01cf02554336f10000019ae9df1dad.jpg%403000w_1l_2o_100sh.jpg&ehk=zvcYgjHlqK2U2x9ploUbmiBIk7BewUd6lyA0AIswegQ%3d&risl=&pid=ImgRaw&r=0',
          name: '碳中和',
          inner:'碳中和是指国家、企业、产品、活动或个人在一定时间内直接或间接产生的二氧化碳或温室气体排放总量，通过植树造林、节能减排等形式，以抵消自身产生的二氧化碳或温室气体排放量，实现正负抵消，达到相对“零排放”。我国政府曾提出：“中国将提高国家自主贡献力度，采取更加有力的政策和措施，二氧化碳排放力争于2030年前达到峰值，努力争取2060年前实现碳中和。'
        },
        {
          url: 'https://img.zcool.cn/community/012c575a7414b8a80120a123d6869a.jpg@1280w_1l_2o_100sh.jpg',
          name: '碳达峰',
          inner:'碳达峰指在某一个时点，二氧化碳的排放不再增长达到峰值，之后逐步回落 。碳达峰是二氧化碳排放量由增转降的历史拐点，标志着碳排放与经济发展实现脱钩，达峰目标包括达峰年份和峰值达峰与碳中和一起，简称“双碳”。中国承诺在2030年前，二氧化碳的排放不再增长，达到峰值之后再慢慢减下去 。'
        },
        {
          url: 'https://ts1.cn.mm.bing.net/th/id/R-C.e9e9bfd9a202c5cddd593f04e8346d0a?rik=NJBCn%2buR6GPaVQ&riu=http%3a%2f%2fup.deskcity.org%2fpic_source%2fe9%2fe9%2fbf%2fe9e9bfd9a202c5cddd593f04e8346d0a.jpg&ehk=rYsGQu6a%2fprJyYe2BqPtu2uaH8%2fA%2fy9NoPaF1ljqTnA%3d&risl=&pid=ImgRaw&r=0',
          name: '碳资产',
          inner:'碳资产是指强制碳排放权交易机制或者自愿排放权交易机制下,产生的可以直接或间接影响组织温室气体排放的配额排放权、减排信用额及相关活动。企业内部通过节能技改活动，减少企业的碳排放量。由于该行为使得企业可在市场流转交易的排放量配额增加，因此可以被称为碳资产；'
        },
      ]
    }
  },
  methods: {
    move(index) {
      const {card,leftMask,inner} = this.$refs
      for (var i = 0; i < card.length; i++) {
        card[i].className = "card"
        leftMask[i].className = 'leftMask'
        inner[i].className = 'inner'
      }
      card[index].className = "card active"
      leftMask[index].className = 'leftMask active'
      inner[index].className = 'inner active'

    },
  }
};
</script>

<style scoped>
body {
  display: flex;
}

.wrap {
  display: flex;
  margin-top: 10px;
  margin-left: 65px;
  width: 80vw;

}

.card {
  position: relative;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50px;
  color: #fff;
  flex: 0.5;
  /*鼠标样式*/
  cursor: pointer;
  height: 650px;
  margin: 10px;
  transition: flex 1s cubic-bezier(0.05, 0.6, 0.4, 0.9);
  overflow: hidden;
}

.card h3 {
  font-size: 20px;
  position: absolute;
  top: 20px;
  left: 35px;
  margin: 0;
}
.inner{
  font-size: 18px;
  padding-top: 150px;
  padding-left: 35px;
  display: none;
}
.inner.active{
  display: block;
}
.card.active {
  /*通过弹性布局的方式 改变每个盒子的收缩*/
  flex:3
}
.leftMask{
  width: 0px;
  height: 650px;
  background-color: rgba(111, 111, 111, .5);
  border-radius: 50px 0 0 50px;
  transition: width 1s;
}
.leftMask.active{
  width: 300px;
}
/* 窗口缩小让元素消失 */
@media (max-width: 550px) {
  .wrap {
    width: 90vw;
    margin-left: 0;
  }
.card.active {
  /*通过弹性布局的方式 改变每个盒子的收缩*/
  flex:2.1
}
  .card:nth-child(4) {
    display: none;
  }
}
</style>