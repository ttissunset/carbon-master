<template>
  <div>
    <div class="introduce">
      <div class="part-title-container">
        <span>我们的特点</span>
        <h1>为什么我们是您的最佳选择？</h1>
      </div>
      <div class="characteristics-container">
        <ul class="characteristics">
          <li>
            <div class="characteristics-top">
              <div class="characteristics-top-icon">
                <span class="radius">
                  <a class="iconfont icon-fangbian"></a>
                </span>
              </div>
              <h2>操作方便</h2>
            </div>
            <div class="characteristics-bottom">
              <div class="characteristics-bottom-text">
                我们的系统已把各个功能详细划分，您可以快速找到相应模块进行操作
              </div>
              <div class="characteristics-bottom-btn">
                <span>
                了解详情
                </span>
                <ion-icon name="chevron-forward"></ion-icon>
              </div>
            </div>
          </li>
          <li>
            <div class="characteristics-top">
              <div class="characteristics-top-icon">
                <span class="radius">
                  <a class="iconfont icon-bingtutubiao"></a>
                </span>
              </div>
              <h2>数据准确</h2>
            </div>
            <div class="characteristics-bottom">
              <div class="characteristics-bottom-text">
                我们的数据由相关企业提供，并细致划分，保证了数据的真实性
              </div>
              <div class="characteristics-bottom-btn">
                <span>
                了解详情
                </span>
                <ion-icon name="chevron-forward"></ion-icon>
              </div>
            </div>
          </li>
          <li>
            <div class="characteristics-top">
              <div class="characteristics-top-icon">
                <span class="radius">
                  <a class="iconfont icon-fuwu"></a>
                </span>
              </div>
              <h2>服务到位</h2>
            </div>
            <div class="characteristics-bottom">
              <div class="characteristics-bottom-text">
                若对操作步骤不清楚，我们的工作台会详细引导您进行计算
              </div>
              <div class="characteristics-bottom-btn">
                <span>
                了解详情
                </span>
                <ion-icon name="chevron-forward"></ion-icon>
              </div>
            </div>
          </li>
          <li>
            <div class="characteristics-top">
              <div class="characteristics-top-icon">
                <span class="radius">
                  <a class="iconfont icon-anquan"></a>
                </span>
              </div>
              <h2>信息安全</h2>
            </div>
            <div class="characteristics-bottom">
              <div class="characteristics-bottom-text">
                用户数据在登录时会进行保护，在退出登录后数据将在前台清除
              </div>
              <div class="characteristics-bottom-btn">
                <span>
                了解详情
                </span>
                <ion-icon name="chevron-forward"></ion-icon>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "introduce",
};
</script>

<style>
.introduce {
  margin-top: 30px;
  height: 400px;
  width: 1300px;
}

.part-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.part-title-container span {
  font-size: var(--fs-6);
  letter-spacing: 1px;
  color: var(--youth-blue-dark);
  font-family: var(--ff-albb-semibold);
}

.part-title-container h1 {
  font-size: var(--fs-2);
  letter-spacing: 1px;
  margin-top: 0.5%;
}

/*h1 {*/
/*  text-align: center;*/
/*  font-size: 35px;*/
/*  color: rgb(39, 133, 214);*/
/*}*/
.characteristics-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
}

.characteristics {
  display: flex;
  justify-content: space-between;
  width: 90%;
  /* display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr; */
}

.characteristics li {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 23%;
  /* border: 1px #999 solid; */
  border-radius: var(--radius-6);
  box-shadow: var(--shadow-2);
  /*box-shadow: 0 0 15px rgb(205, 205, 205);*/
  transition: .5s;
}

.characteristics li:hover {
  scale: 1.1;
}

.characteristics-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40%;
  margin-top: 10%;
}

.characteristics-top h2 {
  height: 30%;
  line-height: 50px;
  letter-spacing: 2px;
  font-size: var(--fs-5);
}

.characteristics-top-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 60%;
  /*border-bottom: 1px solid rgb(162, 162, 162);*/
}

.radius {
  display: inline-block;
  height: 55px;
  width: 55px;
  text-align: center;
  line-height: 50px;
  border-radius: var(--radius-circle);
  background-color: var(--youth-blue);
}

.radius a {
  font-size: 25px;
  color: white;
}

.characteristics-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  flex-direction: column;
}

.characteristics-bottom-text {
  width: 63%;
  height: 70%;
  font-size: 15px;
  line-height: 30px;
}

.characteristics-bottom-btn {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-7);
  font-family: var(--ff-almm);
  color: var(--youth-blue-purple);
  gap: 3px;
}

.characteristics-bottom-btn span, ion-icon {
  cursor: pointer;
}

@media (max-width: 1220px) {
  .introduce {
    margin-top: 30px;
    height: 800px;
    width: 100%;
  }

  .part-title-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .part-title-container span {
    font-size: var(--fs-6);
    letter-spacing: 1px;
    color: var(--youth-blue-dark);
    font-family: var(--ff-albb-semibold);
  }

  .part-title-container h1 {
    font-size: var(--fs-2);
    letter-spacing: 1px;
    margin-top: 0.5%;
  }

  /*h1 {*/
  /*  text-align: center;*/
  /*  font-size: 35px;*/
  /*  color: rgb(39, 133, 214);*/
  /*}*/
  .characteristics-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
  }

  .characteristics {
    display: grid;
    width: 90%;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 15px;
  }

  .characteristics li {
    display: flex;
    flex-direction: column;
    height: 320px;
    width: 70%;

    /*margin-left: 25%;*/
    /*margin-top: 20px;*/
    /* border: 1px #999 solid; */
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-2);
    /*box-shadow: 0 0 15px rgb(205, 205, 205);*/
    transition: .5s;
    z-index: 333;
  }

  .characteristics li:hover {
    scale: 1.1;
  }

  .characteristics-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40%;
    margin-top: 10%;
  }

  .characteristics-top h2 {
    height: 30%;
    line-height: 50px;
    letter-spacing: 2px;
    font-size: var(--fs-5);
  }

  .characteristics-top-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 60%;
    /*border-bottom: 1px solid rgb(162, 162, 162);*/
  }

  .radius {
    display: inline-block;
    height: 55px;
    width: 55px;
    text-align: center;
    line-height: 50px;
    border-radius: var(--radius-circle);
    background-color: var(--youth-blue);
  }

  .radius a {
    font-size: 25px;
    color: white;
  }

  .characteristics-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    flex-direction: column;
  }

  .characteristics-bottom-text {
    width: 63%;
    height: 70%;
    font-size: 15px;
    line-height: 30px;
  }

  .characteristics-bottom-btn {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-7);
    font-family: var(--ff-almm);
    color: var(--youth-blue-purple);
    gap: 3px;
  }

  .characteristics-bottom-btn span, ion-icon {
    cursor: pointer;
  }
}

@media (max-width: 1020px) {
  .introduce {
    margin-top: 30px;
    height: 100%;
  }

  .part-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .part-title-container span {
    font-size: var(--fs-6);
    letter-spacing: 1px;
    color: var(--youth-blue-dark);
    font-family: var(--ff-albb-semibold);
  }

  .part-title-container h1 {
    font-size: var(--fs-2);
    letter-spacing: 1px;
    margin-top: 0.5%;
  }

  /*h1 {*/
  /*  text-align: center;*/
  /*  font-size: 35px;*/
  /*  color: rgb(39, 133, 214);*/
  /*}*/
  .characteristics-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;

    justify-items: center;
  }

  .characteristics {
    display: grid;
    width: 75%;
    grid-template-columns: 1fr 1fr;
  }

  .characteristics li {
    display: flex;
    flex-direction: column;
    height: 320px;
    width: 90%;
    /* border: 1px #999 solid; */
    border-radius: var(--radius-6);
    box-shadow: var(--shadow-2);
    /*box-shadow: 0 0 15px rgb(205, 205, 205);*/
    transition: .5s;
    z-index: 333;
  }

  .characteristics li:hover {
    scale: 1.1;
  }

  .characteristics-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40%;
    margin-top: 10%;
  }

  .characteristics-top h2 {
    height: 30%;
    line-height: 50px;
    letter-spacing: 2px;
    font-size: var(--fs-5);
  }

  .characteristics-top-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 60%;
    /*border-bottom: 1px solid rgb(162, 162, 162);*/
  }

  .radius {
    display: inline-block;
    height: 55px;
    width: 55px;
    text-align: center;
    line-height: 50px;
    border-radius: var(--radius-circle);
    background-color: var(--youth-blue);
  }

  .radius a {
    font-size: 25px;
    color: white;
  }

  .characteristics-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    flex-direction: column;
  }

  .characteristics-bottom-text {
    width: 63%;
    height: 70%;
    font-size: 15px;
    line-height: 30px;
  }

  .characteristics-bottom-btn {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-7);
    font-family: var(--ff-almm);
    color: var(--youth-blue-purple);
    gap: 3px;
  }

  .characteristics-bottom-btn span, ion-icon {
    cursor: pointer;
  }
}

@media (max-width: 820px) {
  .introduce {
    margin-top: 30px;
    height: 800px;
    width: 100%;
  }

  .part-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .part-title-container span {
    font-size: var(--fs-6);
    letter-spacing: 1px;
    color: var(--youth-blue-dark);
    font-family: var(--ff-albb-semibold);
  }

  .part-title-container h1 {
    font-size: var(--fs-2);
    letter-spacing: 1px;
    margin-top: 0.5%;
  }

  /*h1 {*/
  /*  text-align: center;*/
  /*  font-size: 35px;*/
  /*  color: rgb(39, 133, 214);*/
  /*}*/
  .characteristics-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
  }

  .characteristics {
    width: 90%;
  }

  .characteristics li {
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
    /* border: 1px #999 solid; */
    border-radius: var(--radius-6);
    box-shadow: var(--shadow-2);
    /*box-shadow: 0 0 15px rgb(205, 205, 205);*/
    transition: .5s;
    z-index: 333;
  }

  .characteristics li:hover {
    scale: 1.1;
  }

  .characteristics-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40%;
    margin-top: 10%;
  }

  .characteristics-top h2 {
    height: 30%;
    line-height: 50px;
    letter-spacing: 2px;
    font-size: var(--fs-5);
  }

  .characteristics-top-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 60%;
    /*border-bottom: 1px solid rgb(162, 162, 162);*/
  }

  .radius {
    display: inline-block;
    height: 55px;
    width: 55px;
    text-align: center;
    line-height: 50px;
    border-radius: var(--radius-circle);
    background-color: var(--youth-blue);
  }

  .radius a {
    font-size: 25px;
    color: white;
  }

  .characteristics-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    flex-direction: column;
  }

  .characteristics-bottom-text {
    width: 63%;
    height: 70%;
    font-size: 15px;
    line-height: 30px;
  }

  .characteristics-bottom-btn {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-7);
    font-family: var(--ff-almm);
    color: var(--youth-blue-purple);
    gap: 3px;
  }

  .characteristics-bottom-btn span, ion-icon {
    cursor: pointer;
  }
}

@media (max-width: 560px) {
  .introduce {
    margin-top: 30px;
    height: fit-content;
    width: 100%;
  }

  .part-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .part-title-container span {
    font-size: var(--fs-6);
    letter-spacing: 1px;
    color: var(--youth-blue-dark);
    font-family: var(--ff-albb-semibold);
  }

  .part-title-container h1 {
    font-size: var(--fs-2);
    letter-spacing: 1px;
    margin-top: 0.5%;
  }

  /*h1 {*/
  /*  text-align: center;*/
  /*  font-size: 35px;*/
  /*  color: rgb(39, 133, 214);*/
  /*}*/
  .characteristics-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
  }

  .characteristics {
    width: 90%;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .characteristics li {
    display: flex;
    flex-direction: column;
    height: 320px;
    width: 80%;
    margin-right: 10%;
    /* border: 1px #999 solid; */
    border-radius: var(--radius-6);
    box-shadow: var(--shadow-2);
    /*box-shadow: 0 0 15px rgb(205, 205, 205);*/
    transition: .5s;
    z-index: 333;
  }

  .characteristics li:hover {
    scale: 1.1;
  }

  .characteristics-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40%;
    margin-top: 10%;
  }

  .characteristics-top h2 {
    height: 30%;
    line-height: 50px;
    letter-spacing: 2px;
    font-size: var(--fs-5);
  }

  .characteristics-top-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 60%;
    /*border-bottom: 1px solid rgb(162, 162, 162);*/
  }

  .radius {
    display: inline-block;
    height: 55px;
    width: 55px;
    text-align: center;
    line-height: 50px;
    border-radius: var(--radius-circle);
    background-color: var(--youth-blue);
  }

  .radius a {
    font-size: 25px;
    color: white;
  }

  .characteristics-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    flex-direction: column;
  }

  .characteristics-bottom-text {
    width: 63%;
    height: 70%;
    font-size: 15px;
    line-height: 25px;
  }

  .characteristics-bottom-btn {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-7);
    font-family: var(--ff-almm);
    color: var(--youth-blue-purple);
    gap: 3px;

  }

  .characteristics-bottom-btn span, ion-icon {
    cursor: pointer;
  }
}
</style>