<template>
  <div class="dashboard-container-left">
    <div class="dashboard-container-header">
      <div class="dashboard-container-header-icon" @click="goHome">
        <img src="https://myalybucket.oss-cn-shenzhen.aliyuncs.com/GHOSTER-dark-left.png" alt="#">
      </div>
    </div>
    <div class="dashboard-container-btn-list stop-select">
      <div class="dashboard-container-btn-list-item" @click="pushNew(item.path)"
           :class="{'dashboard-container-btn-list-item-active' : btnLeftSelect === index}"
           v-for="(item,index) in btnLeftList" :key="index">
        <ion-icon :name="btnLeftSelect === index ? item.nameSelect : item.name"></ion-icon>
        <span class="dashboard-container-btn-list-item-text">
        {{ item.text }}
        </span>
      </div>
    </div>

    <div class="dashboard-container-bottom">
      <div class="dashboard-container-bottom-link-list stop-select">
        <div class="dashboard-container-bottom-link-list-item" v-for="(item,index) in linkLeftList" :key="index">
          <a :href="item.url">{{ item.text }}</a>
          <ion-icon v-if="item.out" name="arrow-forward-outline"></ion-icon>
        </div>
      </div>

      <div class="dashboard-container-bottom-share">
        <div class="dashboard-container-bottom-share-list">
          <div class="dashboard-container-bottom-share-list-item" v-for="(item,index) in shareLeftList"
               :key="index">
            <ion-icon :name="item.name"></ion-icon>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import {Notification} from "element-ui";

export default {
  name: "index",
  data() {
    return {
      btnLeftList: [
        {path: "home", name: "home-outline", nameSelect: "home", text: "首页"},
        {path: "permissions", name: "git-branch-outline", nameSelect: "git-branch", text: "组织权限"},
        {path: "news", name: "newspaper-outline", nameSelect: "newspaper", text: "行业资讯"},
        {path: "orders", name: "bookmarks-outline", nameSelect: "bookmarks", text: "查看订单"},
        {path: "gallery", name: "desktop-outline", nameSelect: "desktop", text: "进入工作台"},
      ],
      linkLeftList: [
        {url: "", text: "帮助中心", out: false},
        {url: "", text: "关于我们", out: false},
        {url: "", text: "订阅服务", out: true},
        {url: "", text: "隐私政策", out: true}
      ],
      shareLeftList: [
        {url: "", name: "logo-twitter"},
        {url: "", name: "logo-github"},
        {url: "", name: "logo-whatsapp"},
        {url: "", name: "logo-reddit"},
        {url: "", name: "logo-facebook"}
      ],
      btnLeftSelect: 0
    }
  },
  methods: {

    pushNew(path) {
      console.log(path)
      if (localStorage.getItem('companyId')) {
        if (this.fatherHref === 'dashboard/gallery/service') {
          this.$router.push('/dashboard/' + path)
        } else {
          this.$router.push(path)
        }
      } else {
        Notification({
          title: '警告',
          message: '请先选择或创建一个组织',
          type: 'warning',
        });
        // alert('请选择组织')
        return
      }
    },
    goHome() {
      this.$router.push('/home')
    },
  },
  mounted() {
    // console.log(window.location.href)
    var href = window.location.href;
    for (let i = 0; i < href.length; i++) {
      if (href.substring(i, i + 1) === "#") {
        var fatherEnd;
        const fatherStart = i + 2;
        for (let j = i + 2; j < href.length; j++) {
          if (href.substring(j, j + 1) === "/") {
            fatherEnd = j;
          }
        }
        var fatherHref = href.substring(fatherStart, fatherEnd);
        this.fatherHref = fatherHref
        // 先确定这个页面一定是在dashboard中的
        if (fatherHref === "dashboard") {
          var start = fatherEnd + 1;
          var end;
          for (let k = start; k < href.length; k++) {
            // 这部分才是获取dashboard后面那部分
            // 如果后面还有参数，说明这里一定是/或?，则截断
            // 如果后面没用参数，则k也已经到了末端，直接截取到末端即可
            if (href.substring(k, k + 1) === "/" || href.substring(k, k + 1) === "?") {
              end = k;
            }
          }
          console.log("ppp")
          var sonHref = href.substring(start, end);
          this.sonHref = sonHref
          for (let j = 0; j < this.btnLeftList.length; j++) {
            if (this.btnLeftList[j].path === sonHref) {
              this.btnLeftSelect = j
            }
          }
          break;
        } else if (fatherHref === 'dashboard/gallery/service') {
          this.btnLeftSelect = 4
        }
      }
    }
    // console.log(fatherHref)
    // console.log(sonHref)
  }, created() {
    this.pushNew = this.$clickThrottle(this.pushNew, 200);
  }
}
</script>

<style scoped>
.dashboard-container-left {
  width: 15%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 1%;
}

.dashboard-container-left::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  height: 92%;
  border-right: 1px solid #dadada;
}

.dashboard-container-header {
  width: 100%;
  height: 14%;
  display: flex;
  justify-content: center;
  margin-left: 6%;
}

.dashboard-container-header-icon {
  /* pointer-events: none; */
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 8%;
}

.dashboard-container-header-icon img {
  width: 180px;
}

.dashboard-container-btn-list {
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 6%;
  gap: 3px;
  flex-grow: 1;

}

.dashboard-container-btn-list-item {
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: var(--fs-7);
  gap: 15px;
  font-family: var(--ff-almm);
  color: #757575;
  cursor: pointer;
  padding: 0 0 0 5%;
  border-radius: var(--radius-10);
}

.dashboard-container-btn-list-item-active {
  background-color: #e0e0e0;
  color: black;
}

.dashboard-container-btn-list-item:is(:hover,:focus-visible) {
  background-color: #e0e0e0;
  transition: var(--transition-1);
  color: black;
}

.dashboard-container-btn-list-item ion-icon {
  font-size: var(--fs-5);
  font-weight: 600;
}

.dashboard-container-bottom {
  width: 85%;
  height: 30%;
  flex-grow: 0;
  margin-left: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dashboard-container-bottom-link-list {
  width: 100%;
  height: 60%;
  font-size: var(--fs-7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  opacity: 0.6;
}

.dashboard-container-bottom-link-list-item {
  margin-left: 8%;
  display: flex;
  align-items: center;
  gap: 3%;
}

.dashboard-container-bottom-link-list-item ion-icon {
  transform: rotate(-45deg);
  margin-top: 2%;
}

.dashboard-container-bottom-share {
  width: 100%;
  height: 30%;
}

.dashboard-container-bottom-share-list {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.dashboard-container-bottom-share-list-item {
  background-color: #423e3e;
  border-radius: var(--radius-circle);
  width: 28px;
  height: 28px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-6);
  cursor: pointer;
}

.dashboard-container-bottom-share-list-item:is(:hover,:focus-visible) {
  transform: translateY(-5px) scale(1.2);
  transition: var(--transition-3);
  background: #000;
}


@media (max-width: 1125px) {
  .dashboard-container-left {
    width: 15%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 1%;
  }

  .dashboard-container-left::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 92%;
    border-right: 1px solid #dadada;
  }

  .dashboard-container-header {
    width: 100%;
    height: 14%;
    display: flex;
    justify-content: center;
    margin-left: 6%;
  }

  .dashboard-container-header-icon {
    pointer-events: none;
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-top: 8%;
  }

  .dashboard-container-header-icon img {
    width: 140px;
  }

  .dashboard-container-btn-list {
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6%;
    gap: 3px;
    flex-grow: 1;

  }

  .dashboard-container-btn-list-item {
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: var(--fs-7);
    gap: 15px;
    font-family: var(--ff-almm);
    color: #757575;
    cursor: pointer;
    padding: 0 0 0 5%;
    border-radius: var(--radius-10);
  }

  .dashboard-container-btn-list-item-active {
    background-color: #e0e0e0;
    color: black;
  }

  .dashboard-container-btn-list-item:is(:hover,:focus-visible) {
    background-color: #e0e0e0;
    transition: var(--transition-1);
    color: black;
  }

  .dashboard-container-btn-list-item ion-icon {
    font-size: var(--fs-5);
    font-weight: 600;
  }

  .dashboard-container-bottom {
    width: 85%;
    height: 30%;
    flex-grow: 0;
    margin-left: 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dashboard-container-bottom-link-list {
    width: 100%;
    height: 60%;
    font-size: var(--fs-7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    opacity: 0.6;
  }

  .dashboard-container-bottom-link-list-item {
    margin-left: 8%;
    display: flex;
    align-items: center;
    gap: 3%;
  }

  .dashboard-container-bottom-link-list-item ion-icon {
    transform: rotate(-45deg);
    margin-top: 2%;
  }

  .dashboard-container-bottom-share {
    width: 100%;
    height: 30%;
  }

  .dashboard-container-bottom-share-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .dashboard-container-bottom-share-list-item {
    background-color: #423e3e;
    border-radius: var(--radius-circle);
    width: 28px;
    height: 28px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-6);
    cursor: pointer;
  }

  .dashboard-container-bottom-share-list-item:is(:hover,:focus-visible) {
    transform: translateY(-5px) scale(1.2);
    transition: var(--transition-3);
    background: #000;
  }
}

@media (max-width: 1000px) {
  .dashboard-container-bottom-share-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .dashboard-container-bottom-share-list-item {
    background-color: #423e3e;
    border-radius: var(--radius-circle);
    width: 24px;
    height: 24px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-7);
    cursor: pointer;
  }
}

@media (max-width: 845px) {
  .dashboard-container-header-icon img {
    width: 120px;
  }
}

@media (max-width: 765px) {
  .dashboard-container-header {
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: center;
    margin-left: 6%;
    margin-top: 8%;
  }

  .dashboard-container-header-icon {
    pointer-events: none;
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-top: 8%;
  }

  .dashboard-container-header-icon img {
    width: 100px;
  }


  .dashboard-container-btn-list {
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6%;
    gap: 3px;
    flex-grow: 1;
  }

  .dashboard-container-btn-list-item {
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    color: #757575;
    cursor: pointer;
    border-radius: var(--radius-10);
  }

  .dashboard-container-btn-list-item-text {
    display: none;
  }

  .dashboard-container-bottom-link-list {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    opacity: 0.6;
    font-size: var(--fs-8);
  }

  .dashboard-container-bottom-link-list-item {
    margin-left: 8%;
    display: flex;
    align-items: center;
    gap: 3%;
  }

  .dashboard-container-bottom-share-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .dashboard-container-bottom-share-list-item {
    background-color: #423e3e;
    border-radius: var(--radius-circle);
    width: 20px;
    height: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-8);
    cursor: pointer;
  }
}

@media (max-width: 630px) {
  .dashboard-container-header {
    display: none;
  }

  .dashboard-container-btn-list {
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6%;
    gap: 3px;
    flex-grow: 1;
    margin-top: 20%;
    position: relative;
  }

  .dashboard-container-btn-list-item {
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    color: #757575;
    cursor: pointer;
    border-radius: var(--radius-10);
  }

}

@media (max-width: 525px) {
  .dashboard-container-header {
    display: none;
  }

  .dashboard-container-btn-list {
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6%;
    gap: 3px;
    flex-grow: 1;
    margin-top: 20%;
    position: relative;
  }

  .dashboard-container-btn-list-item {
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    color: #757575;
    cursor: pointer;
    border-radius: var(--radius-10);
  }

  .dashboard-container-bottom {
    width: 85%;
    height: 45%;
    flex-grow: 0;
    margin-left: 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dashboard-container-bottom-link-list {
    width: 100%;
    height: 60%;
    /*display: flex;*/
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    opacity: 0.6;
    font-size: var(--fs-9);
    display: none;
  }

  .dashboard-container-bottom-link-list {
    width: 100%;
    height: 40%;
    font-size: var(--fs-9);
    /*display: flex;*/
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    opacity: 0.6;
    display: none;

  }

  .dashboard-container-bottom-share {
    width: 100%;
    position: relative;
    height: 50%;
    align-self: self-end;
  }

  .dashboard-container-bottom-link-list-item {
    margin-left: 8%;
    display: flex;
    align-items: center;
    gap: 3%;
  }

  .dashboard-container-bottom-share-list {
    margin-top: 20%;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
  }

  .dashboard-container-bottom-share-list-item {
    background-color: #423e3e;
    border-radius: var(--radius-circle);
    width: 24px;
    height: 24px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-7);
    cursor: pointer;
  }
}


</style>