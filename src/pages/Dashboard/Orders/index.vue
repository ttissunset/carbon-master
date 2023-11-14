<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="body">
    <div class="dashboard-container">
      <DashboardLeft />
      <div class="orders">
          <div class="noneBox" v-if="haveOrder">
          暂无订单
        </div>
        <div class="order"  v-for="(item, index) in orderList" :key="index">
          <div :class="(item.status == 0) ? 'status-0' : 'status-1'">
            支付{{ (item.status == 0) ? '失败' : '成功' }}
          </div>
          <div class="main">
            <div class="divs service">
              <div class="iconfont  icon-fuwu"></div>
              <div class="service-name">{{item.serviceName}}</div>
            </div>
            <div class="divs user">
              <div class="userinfo">
                <p class="name">{{ item.user }}</p>
                <p class="group">{{companyName}}</p>
                 {{ item.createDate.substring(0,10) }}
              </div>
            </div>
          </div>
          <div class="descripe" v-if="item.description">
            <!-- <div class="title">订单备注:</div>
            <p class="description" ref="descriptionText" :style="{ height: pHeight + 'px',display:display }">
              {{ item.description }}
            </p> -->
          </div>
          <div class="button">
            <button @click="seeAll(item)" ref="clickButton">查看所有</button>
          </div>
        </div>

      </div>
      <div class="showBox" v-show="isShow">
        <h2 @click="close">x</h2>
        <div class="innerBox">
          <div class="orderName">
            <h2>订单名称</h2>
          <div class="orderTitle">{{this.thisOrderList.serviceName}}</div>
          </div>
          <div class="comName">公司名称 :<span>{{this.companyName}}</span></div>
          <div class="comName">订单编号 :<span>{{this.thisOrderList.orderNo}}</span></div>
          <div class="comName">创建日期 :<span>{{this.thisOrderList.createDate}}</span></div>
          <div class="comName">订单状态 :<span style="marginRight:23px">{{this.thisOrderList.status ==1? '激活':'失效'}}</span>
                               金额数量 :<span>{{this.thisOrderList.totalPrice}}$</span></div>
          <div class="descripton">订单描述 :<span>{{this.thisOrderList.description = null? '无':this.thisOrderList.description}}$</span></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import DashboardLeft from "../../../../src/components/DashboardComponents/Left/index.vue"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  components: {
    DashboardLeft
  },
  data() {
    return {
      // 订单中的数据
      orders: [
        { name: "碳计算", status: 1, number: '5718365176', useTime: '188Days', user: 'Jack Smith', createTime: '2023-3-21 3:11', price: 3888, description: '暗示健康的hi青奥会带哦文化哦啊hdiawh外挂的结果把我家的我的你看好你到底水果吧欧大哥还哦收到货熊打包碗里的卡巴按我国对啦干部吕秀 ' },
        { name: "碳追踪", status: 0, number: '2118367363', useTime: '0Days', user: '詹姆斯', createTime: '2022-11-03 6:48', price: 3324 },
      ],
      pHeight: 60,
      display: '-webkit-box',
      companyId:'',
      companyName:'',
      orderId:'',
      isShow:false,
      orderList:[],
      thisOrderList:[]
    }
  },
  computed:{
    haveOrder(){
      if(this.orderList.length ==0){
      return true
      }
  // if(this.orderList.data == 'null'){
  //   return true
  // }
  }
  },
  mounted(){
    this.companyId = localStorage.getItem('companyId')
    this.companyName = localStorage.getItem('companyName')
    console.log(this.companyId);
    this.getOrder()
  },
  methods: {
    seeAll(item) {
      this.isShow = true
      let orderNo = item.orderNo
      console.log(orderNo);
      this.postRequest(`tance-order/orders/order-detail/selectByOrderNoAndCompanyId/${this.companyId}`,orderNo).then(res=>{
        console.log(res);
        this.thisOrderList = res.data
      })
    },
    close(){
      this.isShow = false

    },
    getOrder(){
      this.getRequest(`tance-order/orders/order-detail/selectAllOrders/${this.companyId}`).then(res=>{
        this.orderList = res.data
        console.log(res);
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
  position: relative;
  width: 95%;
  min-height: 300px;
  /* 设置初始高度 */
  max-height: 92vh;
  margin-top: 2%;
  /* !* 添加滚动条以防止内容溢出 *!*/
  // overflow-y: auto;
  display: flex;
  border-radius: var(--radius-20);
  background: linear-gradient(to right bottom,
      rgba(255, 255, 255, 0.45),
      rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(1px);
  box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  overflow-y: scroll;
}
.dashboard-container::-webkit-scrollbar{
  width: 0;
}
.iconfont {
  font-size: 20px;
  padding: 10px;
}

.orders {
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns:1fr 1fr 1fr ;
  // 瀑布流效果---无效果
  // column-count: 3;
  // column-gap: 0;
}

.order {
  margin-left: 50px;
  width: 280px;
  height: max-content;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 0 0 12px grey;
  margin-bottom: 20px;
}
.noneBox{
  font-size: 25px;
  width: 100%;
  height: 5%;
 text-align: center;
}
.status-1 {
  width: 100%;
  height: 35px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #95d889;
  font-weight: 800;
  font-size: 1.1rem;
  line-height: 35px;
  text-align: center;
}

.status-0 {
  width: 100%;
  height: 35px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #f9adad;
  font-weight: 800;
  font-size: 1.1rem;
  line-height: 35px;
  text-align: center;
}

.main {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  border-bottom: 2.5px dashed transparent;
  background:;
}

.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95px;
  height: 95px;
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 10px;
  background-color: #e3e3e3;

  .icon-fuwu {
    font-size: 18px;
  }

  .service-name {
    font-size: 15px;
    font-weight: 700;
  }
}

.user {
  // align-self: flex-end;
  display: flex;
  align-items: center;
  margin-left: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .userinfo {
    text-align: center;

    .name {
      font-size: 1.1rem;
      width: 90px;
      border-bottom: 1px solid #7D7171;
    }

    .group {
      font-size: 15px;
      color: #a6a6a6;
      margin-bottom: 10px;
    }
  }
}

.number {
  font-size: 1rem;
  font-weight: 200;
  margin: 20px 0 0 15px;
}

.price {
  font-size: 1.1rem;
  margin-left:50px ;
  margin-top: 18px;
}

.useTime {
  background-color: #3bdd8c;
  padding: 7px 9px;
  color: #fff;
  font-size: 1rem;
  font-weight: bolder;
  margin-top: 15px;
  margin-left:60px ;
  border-radius: 10px;
}

.createTime {
  font-size: 1rem;
  line-height: 50px;
  height: 50px;
  width: 300px;
}

.icon-fangbian {
  font-size: 1.1rem;
  margin-right: -10px;
}

.descripe {
  width: 280px;
  padding: 10px 0 0 7px;
  padding-bottom: 0;

  .title {
    color: #7e68ea;
    font-size: 1rem;
  }

  .description {
    // height: 60px;
    width: 270px;
    padding-top: 5px;
    color: #9b9fa3;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-indent: 1.5em;
    font-size: 1rem;
  }
}

.showBox{
  position: absolute;
  width: 300px;
  height: 350px;
  top: 150px;
  left: 650px;
  border-radius: 20px;
  background-color: rgba(253, 253, 253, 0.9);
  box-shadow:  0 0 10px rgb(249, 218, 218);
}
.showBox h2{
  margin-top: 10px;
  margin-right: 10px;
  font-size: 18px;
  text-align: right;
  user-select: none;
  cursor: pointer;
}
.innerBox{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90%;
  width: 100%;
}
.orderName{
  width: 80%;
  height: 20%;
}
.orderName h2{
  text-align: center;
  margin: 0;
  font-weight: 400;
  font-size: 18px;
}
.orderTitle{
  width: fit-content;
  text-align: center;
  border-top: 1px solid rgb(132, 190, 95);
  margin-left: 20%;
  margin-top: 5px;
  padding-top: 2px;
  color: #747474;
}
.comName{
  text-align: left;
  width: 80%;
  height: 10%;
  font-size: 15px;

}
.comName span{
  color: #a6a6a6;
  font-weight: 500;
}
.descripton{
  font-size: 15px;
  margin-top: 5%;
  height: 30%;
  width: 80%;

}
.descripton span{
  font-size: 14px;
  font-weight: 500;
  color: #a6a6a6;
}
.button {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}

.button button {
  background-color: #dc6161;
  font-size: .8rem;
  letter-spacing: 0.1em;
  margin: 10px 0;
  padding: 10px 40px;
  color: #333;
  border: none;
  border-radius: 20px;
  bottom: 80px;
  transition: all .6s;
  background-image: linear-gradient(to right, #b1f4d8, #d8cef8);
}

.button button:hover {
  letter-spacing: 0.3em;
}
</style>