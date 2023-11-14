<template>
  <div class="footer">
    <div class="footer-main">
      <div class="footer-main-left">
        <img class="footer-main-left-icon" src="https://myalybucket.oss-cn-shenzhen.aliyuncs.com/GHOSTER-dark.png"/>
        <div class="footer-main-left-text">
          专业的在线碳管理平台
        </div>
        <div class="footer-main-left-share-list">
          <div class="footer-main-left-share-item" v-for="(item,index) in shareLeftList" :key="index">
            <ion-icon :name="item.name"></ion-icon>
          </div>
        </div>
        <div class="footer-main-left-copyright">
          Copyright&copy; 2023 CarbonHEX. All Rights Reserved<br>
          粤公网安备 44031212121212121号<br>
          粤ICP证2120505161号
        </div>
      </div>
      <div class="footer-main-right">
        <div class="footer-main-right-list">
          <ul class="footer-main-right-item">
            <li class="footer-main-right-item-topic">
              服务
            </li>
            <li class="footer-main-right-item-item">
              碳排查
            </li>
            <li class="footer-main-right-item-item">
              碳核算
            </li>
            <li class="footer-main-right-item-item">
              核算碳
            </li>
            <li class="footer-main-right-item-item">
              排查碳
            </li>
          </ul>

          <ul class="footer-main-right-item">
            <li class="footer-main-right-item-topic">
              公司
            </li>
            <li class="footer-main-right-item-item">
              关于我们
            </li>
            <li class="footer-main-right-item-item">
              公司事迹
            </li>
            <li class="footer-main-right-item-item">
              联系我们
            </li>
          </ul>

          <ul class="footer-main-right-item">
            <li class="footer-main-right-item-topic">
              规章
            </li>
            <li class="footer-main-right-item-item">
              隐私政策
            </li>
            <li class="footer-main-right-item-item">
              使用条款
            </li>
            <li class="footer-main-right-item-item">
              订阅须知
            </li>
          </ul>

          <ul class="footer-main-right-item">
            <li class="footer-main-right-item-topic">
              其他
            </li>
            <li class="footer-main-right-item-item">
              帮助中心
            </li>
            <li class="footer-main-right-item-item">
              合作案例
            </li>
            <li class="footer-main-right-item-item">
              友情链接
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      shareLeftList: [
        {url: "", name: "logo-twitter"},
        {url: "", name: "logo-github"},
        {url: "", name: "logo-whatsapp"},
        {url: "", name: "logo-reddit"},
        {url: "", name: "logo-facebook"}
      ],
    }
  }
}
</script>

<style>
.footer {
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-main {
  width: 80%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
}

.footer-main-left {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.footer-main-left-icon {
  width: 180px;
}

.footer-main-left-text {
  margin-left: 4%;
  font-size: var(--fs-7);
  font-weight: var(--fw-600);
  color: #383838;
  font-family: '微軟正黑體';
  letter-spacing: 1px;
}

.footer-main-left-share-list {
  display: flex;
  align-items: flex-start;
  margin-left: 4%;

  font-size: var(--fs-5);
  margin-top: 3%;
  gap: 10px;
}

.footer-main-left-share-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--fs-6);
  padding: 6px;
  background-color: #2c2c2c;
  border-radius: var(--radius-circle);
  color: white;
  cursor: pointer;
}

.footer-main-left-share-item:hover {
  transform: translateY(-5px);
  transition: var(--transition-3);
  background-color: #000000;
}

.footer-main-left-copyright {
  display: flex;
  align-items: center;
  margin-left: 4%;
  margin-top: 9%;
  font-size: var(--fs-8);
  color: #797979;
  line-height: 18px;
  letter-spacing: 1px;
  cursor: pointer;
}

.footer-main-left-copyright:hover {
  text-decoration: underline #989898 solid 1px;
}

.footer-main-right {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-main-right-list {
  width: 100%;
  height: 95%;
  margin-top: 3%;
  display: grid;
  align-items: flex-start;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.footer-main-right-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-main-right-item-topic {
  text-align: center;
  font-family: var(--ff-almm);
  font-size: var(--fs-6);
  letter-spacing: 1px;
}

.footer-main-right-item-item {
  line-height: 25px;
  letter-spacing: 2px;
  color: #6e6d6d;
  font-size: var(--fs-7);
  cursor: pointer;
}

.footer-main-right-item-item:hover {
  color: var(--blue-crayola);
}

@media (max-width: 640px) {
  .footer {
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-main {
    width: 80%;
    height: 90%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8%;
  }

  .footer-main-left {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .footer-main-left-icon {
    width: 180px;
  }

  .footer-main-left-text {
    margin-left: 4%;
    font-size: var(--fs-7);
    font-weight: var(--fw-600);
    color: #383838;
    font-family: '微軟正黑體';
    letter-spacing: 1px;
  }

  .footer-main-left-share-list {
    display: flex;
    align-items: flex-start;
    margin-left: 4%;

    font-size: var(--fs-5);
    margin-top: 3%;
    gap: 10px;
  }

  .footer-main-left-share-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-6);
    padding: 6px;
    background-color: #2c2c2c;
    border-radius: var(--radius-circle);
    color: white;
    cursor: pointer;
  }

  .footer-main-left-share-item:hover {
    transform: translateY(-5px);
    transition: var(--transition-3);
    background-color: #000000;
  }

  .footer-main-left-copyright {
    display: flex;
    align-items: center;
    margin-left: 4%;
    margin-top: 9%;
    font-size: var(--fs-8);
    color: #797979;
    line-height: 18px;
    letter-spacing: 1px;
    cursor: pointer;
  }

  .footer-main-left-copyright:hover {
    text-decoration: underline #989898 solid 1px;
  }

  .footer-main-right {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-main-right-list {
    width: 100%;
    height: 95%;
    margin-top: 3%;
    display: grid;
    align-items: flex-start;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .footer-main-right-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-main-right-item-topic {
    text-align: center;
    font-family: var(--ff-almm);
    font-size: var(--fs-6);
    letter-spacing: 1px;
  }

  .footer-main-right-item-item {
    line-height: 25px;
    letter-spacing: 2px;
    color: #6e6d6d;
    font-size: var(--fs-7);
    cursor: pointer;
  }

  .footer-main-right-item-item:hover {
    color: var(--blue-crayola);
  }
}
</style>