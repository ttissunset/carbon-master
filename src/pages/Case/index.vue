<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="case-container">
    <div class="body">
      <Header></Header>
      <div class="body-info">
        <div class="body-info-placeholder"></div>
        <div class="body-info-main">
          <div class="body-info-name">
            <div class="body-info-name-text">
              <!-- 字符跳动 -->

              {{ this.caseData.enterpriseName }}
              <div class="body-info-name-trade">
                能源企业
              </div>
            </div>
          </div>

          <div class="body-info-title-container">
            <div class="body-info-title">
              <div class="body-info-title-icon-container">
                <ion-icon name="aperture-outline"></ion-icon>
              </div>
              <div class="body-info-title-text">
                企业介绍
              </div>
            </div>
          </div>

          <div class="body-info-description">
            &nbsp;&nbsp;&nbsp;&nbsp;{{ this.caseData.enterpriseDescription }}
          </div>

          <div class="body-info-title-container">
            <div class="body-info-title">
              <div class="body-info-title-icon-container">
                <ion-icon name="aperture-outline"></ion-icon>
              </div>
              <div class="body-info-title-text">
                曾经遇到过的问题以及我们的解决方案
              </div>
            </div>
          </div>

          <div class="body-problem">
            <div class="body-problem-left">
              <div class="item-1">
                <div class="item-head">
                  <ion-icon style="display: flex;align-item: center;" name="folder-open"></ion-icon>
                  <div class="item-head-text" v-if="this.difficulty1.length >= 25">{{
                      this.difficulty1.substring(0, 25)
                    }}……
                  </div>
                  <div class="item-head-text" v-else>{{ this.difficulty1 }}</div>
                </div>
                <div class="item-main">
                  <div class="item-main-text">{{ this.requireData1 }}</div>
                </div>
              </div>
              <div class="item-1">
                <div class="item-head">
                  <ion-icon name="hardware-chip"></ion-icon>
                  <div class="item-head-text">{{ this.difficulty2 }}</div>
                </div>
                <div class="item-main">
                  <div class="item-main-text">{{ this.requireData2 }}</div>
                </div>
              </div>
            </div>
            <div class="body-problem-right">
              <div class="item-2">
                <div class="item-head">
                  <ion-icon name="layers"></ion-icon>
                  <div class="item-head-text">{{ this.difficulty3 }}</div>
                </div>
                <div class="item-main">
                  <div class="item-main-text">{{ this.requireData3 }}</div>
                </div>
              </div>
              <div class="item-2">
                <div class="item-head">
                  <ion-icon name="shield-checkmark"></ion-icon>
                  <div class="item-head-text">{{ this.difficulty4 }}</div>
                </div>
                <div class="item-main">
                  <div class="item-main-text">{{ this.requireData4 }}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="show">
      <!-- 切换按钮和图片 -->
      <div class="btn-container">
        <span class="btns btn_1" @mouseover="switchImg(0)"><i class="iconfont icon-shuzi1"></i></span>
        <span class="btns btn_2" @mouseover="switchImg(1)"><i class="iconfont icon-shuzi2"></i></span>
        <span class="btns btn_3" @mouseover="switchImg(2)"><i class="iconfont icon-shuzi3"></i></span>
        <span class="btns btn_4" @mouseover="switchImg(3)"><i class="iconfont icon-shuzi4"></i></span>
        <span class="img-container" ref="img"></span>
      </div>
    </div>

    <div class="body2">
      <div class="body2-title">
        <div class="body2-title-text-sub">
          What do they get from our service?
        </div>
        <div class="body2-title-text">
          {{ this.caseData.enterpriseName }}从我们的服务中获得了什么？
        </div>
      </div>
      <div class="body2-main-container">
        <div class="body2-main">
          <div class="body2-main-item" v-for="item in this.caseData.caseTargets" :key="item.id">
            <div class="body2-main-item-left">
              <div class="body2-main-item-percent">
                <div class="body2-main-item-percent-text">
                  {{ item.advance + '%' }}
                </div>
                <div class="body2-main-item-percent-icon">
                  <ion-icon name="arrow-up"></ion-icon>
                </div>
              </div>
              <div class="body2-main-item-percent-name"></div>
            </div>
            <div class="body2-main-item-right">
              <div class="body2-main-item-right-text">
                &nbsp;&nbsp;&nbsp;&nbsp;{{ '"' + item.target + '"' }}
              </div>
              <div class="body2-main-item-right-from">
                <span class="body2-main-item-right-from-container">数据来源：</span>
                字符跳动2022年度合作企业财务数据收集报告
              </div>
            </div>
          </div>
          <!-- <div class="body2-main-item">
              <div class="body2-main-item-left">
                <div class="body2-main-item-percent">
                  <div class="body2-main-item-percent-text">
                    78%
                  </div>
                  <div class="body2-main-item-percent-icon">
                    <ion-icon name="arrow-up"></ion-icon>
                  </div>
                </div>
                <div class="body2-main-item-percent-name">碳中和效率</div>
              </div>
              <div class="body2-main-item-right">
                <div class="body2-main-item-right-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;"我们的服务产品已经成功地帮助字符跳动实现了碳中和效率的提升，达到了惊人的78%！
                  这是我们与字符跳动紧密合作的成果，同时也证明了我们的解决方案能够为客户实现在环境保护方面的可持续发展目标
                  。我们致力于不断提供优质的服务和可靠的解决方案，帮助客户在可持续发展方面取得成功。"
                </div>
                <div class="body2-main-item-right-from">
                  <span class="body2-main-item-right-from-container">数据来源：</span>
                  字符跳动2022碳进制碳数据报告
                </div>
              </div>
                                                                                                                                </div> -->
        </div>
      </div>

      <div class="body2-comments-list-container">
        <div class="body2-comments-list">
          <div class="body2-comments-list-item" v-for="item in this.caseData.caseComments" :key="item.id">
            <svg class="body2-comments-list-item-quotes-top" height="200px" width="200px" version="1.1" id="Capa_1"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"
                 xml:space="preserve" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g id="right_x5F_quote">
                    <g>
                      <path style="fill:#e4e1f9;" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                      <path style="fill:#e4e1f9;"
                            d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="body2-comments-list-item-quotes-bottom" height="200px" width="200px" version="1.1" id="Capa_1"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"
                 xml:space="preserve" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g id="right_x5F_quote">
                    <g>
                      <path style="fill:#e4e1f9;" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                      <path style="fill:#e4e1f9;"
                            d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>

            <div class="body2-comments-list-item-text-container">
              <div class="body2-comments-list-item-text">
                &nbsp;&nbsp;&nbsp;&nbsp;{{ item.comment }}
              </div>
            </div>
            <div class="body2-comments-list-item-text-from-container">
              <div class="body2-comments-list-item-text-from-avatar">
                <img :src="item.url">
              </div>
              <div class=" body2-comments-list-item-text-from-name">
                {{ item.commentator }}
              </div>
            </div>
          </div>
          <!-- <div class="body2-comments-list-item">
              <svg class="body2-comments-list-item-quotes-top" height="200px" width="200px" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"
                xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g id="right_x5F_quote">
                      <g>
                        <path style="fill:#e4e1f9;" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path style="fill:#e4e1f9;" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg class="body2-comments-list-item-quotes-bottom" height="200px" width="200px" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"
                xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g id="right_x5F_quote">
                      <g>
                        <path style="fill:#e4e1f9;" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path style="fill:#e4e1f9;" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>

              <div class="body2-comments-list-item-text-container">
                <div class="body2-comments-list-item-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;我们的服务产品已经成功地帮助字符跳动实现了碳中和效率的提升，达到了惊人的78%！
                  这是我们与字符跳动紧密合作的成果，同时也证明了我们的解决方案能够为客户实现在环境保护方面的可持续发展目标
                  。我们致力于不断提供优质的服务和可靠的解决方案，帮助客户在可持续发展方面取得成功。
                </div>
              </div>
              <div class="body2-comments-list-item-text-from-container">
                <div class="body2-comments-list-item-text-from-avatar">
                  <img src="https://p3-passport.byteimg.com/img/user-avatar/e3004c671a547800f0ca5db8c0add42d~100x100.awebp">
                </div>
                <div class=" body2-comments-list-item-text-from-name">
                  恩佐费尔南德斯
                </div>
              </div>
            </div>
            <div class="body2-comments-list-item">
              <svg class="body2-comments-list-item-quotes-top" height="200px" width="200px" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"
                xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g id="right_x5F_quote">
                      <g>
                        <path style="fill:#e4e1f9;" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path style="fill:#e4e1f9;" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg class="body2-comments-list-item-quotes-bottom" height="200px" width="200px" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"
                xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g id="right_x5F_quote">
                      <g>
                        <path style="fill:#e4e1f9;" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path style="fill:#e4e1f9;" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>

              <div class="body2-comments-list-item-text-container">
                <div class="body2-comments-list-item-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;我们的服务产品已经成功地帮助字符跳动实现了碳中和效率的提升，达到了惊人的78%！
                  这是我们与字符跳动紧密合作的成果，同时也证明了我们的解决方案能够为客户实现在环境保护方面的可持续发展目标
                  。我们致力于不断提供优质的服务和可靠的解决方案，帮助客户在可持续发展方面取得成功。
                </div>
              </div>
              <div class="body2-comments-list-item-text-from-container">
                <div class="body2-comments-list-item-text-from-avatar">
                  <img src="https://p3-passport.byteimg.com/img/user-avatar/e3004c671a547800f0ca5db8c0add42d~100x100.awebp">
                </div>
                <div class="body2-comments-list-item-text-from-name">
                  恩佐费尔南德斯
                </div>
              </div>
                                                                                                                                  </div> -->
        </div>
      </div>

      <div class="body2-title-middle">
        <div class="body2-title-text-sub-middle">
          Why don't you try it at once?
        </div>
        <div class="body2-title-text-middle">
          便捷高效地帮助您提升碳中和效率的优质服务<br>
          现新人超低价折扣起，无需信用卡。
        </div>
        <div class="body2-title-btn-middle" @click="$router.push('/navigationhome')">
          前往订阅
        </div>
      </div>
      <div class="body2-placeholder"></div>
      <Footer></Footer>
    </div>
  </div>
</template>


<script>
// 接口:43.139.67.87:9998/case-control/swagger-ui.html
/**
 * 新增：/caseBase/add (post)
 * 删除：/caseBase/delete (delete)
 * 案例按id查询： /caseBase/getCaseById/{id} (get)
 * 案例查询: /caseBase/page (post)
 * 案例媒资绑定接口: caseMedia/bindCaseMedia (post)
 * 删除案例媒资绑定接口: caseMedia/deleteByIds (delete)
 * 获取案例媒资绑定接口: caseMedia/getCaseMediaList (post)
 */
import Header from '@/components/header'
import Footer from '@/components/footer'
import {getRequest} from '../../api/axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  components: {
    Header, Footer
  },
  data() {
    return {
      // 接收接口传递的案例数据
      firstCaseData: [],
      caseData: [],
      id: '',
      mediaIds: [],
      mediaUrl: [],
      txid: [],
      // txurl: [],
      requireData1: '',
      requireData2: '',
      requireData3: '',
      requireData4: '',
      difficulty1: '',
      difficulty2: '',
      difficulty3: '',
      difficulty4: ''
    }
  },
  methods: {
    switchImg(index) {
      this.$refs.img.style.background = "url(" + this.mediaUrl[index] + ") no-repeat"
      this.$refs.img.style.backgroundSize = "100%"
    },
  },
  mounted() {
    this.id = this.$route.query.id
    console.log(this.$route);
    // console.log('11',this.$route.query.id);
    console.log(2345678);
    this.getRequest(`/case-control/caseBase/getCaseById/${this.$route.query.id}`).then(res => {
      console.log(123421);
      const data = res.data
      // console.log('bb',this.caseData);

      this.caseData = data
      console.log('aa', this.caseData);
      this.requireData1 = this.caseData.caseRequirements[0].requirement
      if (this.caseData.caseRequirements[1]) {
        this.requireData2 = this.caseData.caseRequirements[1].requirement
      }
      if (this.caseData.caseRequirements[2]) {
        this.requireData3 = this.caseData.caseRequirements[2].requirement
      }
      if (this.caseData.caseRequirements[3]) {
        this.requireData4 = this.caseData.caseRequirements[3].requirement
      }
      this.difficulty1 = this.caseData.caseRequirements[0].difficulty
      if (this.caseData.caseRequirements[1]) {
        this.difficulty2 = this.caseData.caseRequirements[1].difficulty
      }

      if (this.caseData.caseRequirements[2]) {
        this.difficulty3 = this.caseData.caseRequirements[3].difficulty
      }
      if (this.caseData.caseRequirements[3]) {
        this.difficulty4 = this.caseData.caseRequirements[3].difficulty
      }

      // 获取媒资图片
      this.mediaIds = data.mediaIds
      this.mediaIds.forEach((id, index) => {
        getRequest(`media-control/media/preview/${id}`).then(res => {
          // console.log(6898);
          this.mediaUrl.push(res.data)
          this.$refs.img.style.background = "url(" + this.mediaUrl[index] + ") no-repeat"
          this.$refs.img.style.backgroundSize = '100%'
          // console.log(this.mediaUrl);
        })
      })
      // 获取评论者图片
      // this.txid = data.caseComments
      // this.txid.forEach((value, index) => {
      //   console.log("forEach");
      //   getRequest(`media-control/media/preview/${value.commentatorAvatarMediaId}`).then(res => {
      //     console.log('a', res);
      //     this.caseData.caseComments[index] = { ...this.caseData.caseComments[index], 'url': res.data }
      //     console.log(index);
      //     console.log(this.caseData.caseComments);
      //   })
      // })
    })
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.body {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at top left, #ddf6f2 15%, transparent 40%),
  radial-gradient(circle at top right, #f3dcfc 20%, transparent 50%),
  radial-gradient(circle at bottom left, #f6d0e4 25%, transparent 70%),
  radial-gradient(circle at bottom right, #e6eec3 30%, transparent 70%);
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
}

.body-info {
  width: 40%;
  height: 100vh;
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.body-info-placeholder {
  width: 100%;
  height: 80px;
  flex-grow: 0;
}

.body-info-main {
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.body-info-name {
  width: 90%;
  height: 100px;
  font-size: var(--fs-1);
  letter-spacing: 5px;
  font-weight: var(--fw-600);
  display: flex;
  align-items: center;
}

.body-info-name-text {
  display: flex;
  height: fit-content;
  width: 100%;
  overflow: hidden;
}

.body-info-name-trade {
  margin-left: 2%;
  margin-top: 3%;
  width: fit-content;
  height: fit-content;
  padding: 6px 12px;
  background-color: var(--youth-green-2);
  border-radius: var(--radius-20);
  font-size: var(--fs-8);
  letter-spacing: 1px;
  color: white;
}

.body-info-description {
  width: 90%;
  height: fit-content;
  letter-spacing: 1px;
  color: #6e6d6d;
}

.body-info-title-container {
  width: 90%;
  margin-top: 5%;
  margin-bottom: 2%;
}

.body-info-title {
  width: 100%;
  display: flex;
  align-items: center;
  align-self: flex-start;
  letter-spacing: 1px;
}

.body-info-title-icon-container {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to top right, #919cef, #5871f1);
  border-radius: var(--radius-10) var(--radius-10) var(--radius-10) 0;
  font-size: var(--fs-6);
  color: white;
}

.body-info-title-text {
  font-size: var(--fs-5);
  font-weight: var(--fw-600);
  margin-left: 1%;
  color: #484848;
}

.body-problem {
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-top: 1%;
}

.body-problem-left {
  width: 50%;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.body-problem-right {
  width: 48%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.item-1 {
  width: 95%;
  height: 168px;
  margin-bottom: 5%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}

.item-2 {
  width: 95%;
  height: 175px;
  margin-bottom: 5%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-10);
  box-shadow: var(--shadow-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}

.item-1:hover,
.item-2:hover {
  transform: scale(1.02);
  transition: var(--transition-2);
}

.item-head {
  width: 85%;
  height: 90px;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.item-main {
  width: 82%;
  flex-grow: 1;
  letter-spacing: 1px;
  color: #6e6d6d;
}

.item-head-text {
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  color: #31313d;
}

.item-head ion-icon {
  color: #31313d;
  font-size: var(--fs-3);
  margin-bottom: 3%;
}


.body2 {
  width: 100%;
  height: fit-content;
  background: radial-gradient(circle at top left, #ecf2e4 20%, transparent 40%),
  radial-gradient(circle at top right, #E7F5FF 20%, transparent 50%),
  radial-gradient(circle at bottom left, #D3F7F8 25%, transparent 70%),
  radial-gradient(circle at bottom right, #E9F6FA 30%, transparent 70%);
}

.body2-title {
  width: 80%;
  margin-top: 10%;
  height: 120px;
  margin-left: 5%;
}

.body2-title-text-sub {
  font-size: var(--fs-6);
  color: var(--light-raisin-black);
}

.body2-title-text {
  font-size: var(--fs-1);
  font-weight: var(--fw-600);
  letter-spacing: 3px;
}

.body2-main-container {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.body2-main {
  width: 90%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.body2-main:after {
  position: absolute;
  bottom: 0;
  content: "";
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
}

.body2-main-item {
  width: 95%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.body2-main-item-left {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.body2-main-item-percent {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 0;
}

.body2-main-item-percent-text {
  font-size: var(--fs-2);
  font-weight: var(--fw-800);
  font-family: "Adobe Garamond Pro Bold";
}

.body2-main-item-percent-icon {
  margin-left: 5%;
  color: #2c966a;
  font-size: var(--fs-3-5);
  font-weight: var(--fw-800);
}

.body2-main-item-percent-name {
  font-weight: var(--fw-600);
  font-size: var(--fs-7);
  letter-spacing: 3px;
  color: #6e6d6d;
}

.body2-main-item-right {
  width: 60%;
}

.body2-main-item-right-text {
  font-size: var(--fs-6);
  letter-spacing: 2px;
  font-family: '微软雅黑 Light';
  font-weight: var(--fw-600);
}

.body2-main-item-right-from {
  margin-top: 5%;
  display: flex;
  align-items: flex-end;
  font-size: var(--fs-7);
  color: #6e6d6d;
}

.body2-main-item-right-from-container {
  font-size: 0.7rem;
}


.body2-comments-list-container {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
}

.body2-comments-list {
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.body2-comments-list-item {
  width: 92%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: var(--radius-20);
  position: relative;
  box-shadow: var(--shadow-3);
}

.body2-comments-list-item-quotes-bottom {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 10px;
  right: 20px;
}

.body2-comments-list-item-quotes-top {
  position: absolute;
  width: 80px;
  height: 80px;
  transform: rotate(180deg);
  top: 10px;
  left: 20px;
}

.body2-comments-list-item-text-container {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.body2-comments-list-item-text {
  width: 85%;
  font-size: var(--fs-7);
  letter-spacing: 1px;
  color: #595959;
}

.body2-comments-list-item-text-from-container {
  width: 50%;
  display: flex;
  align-items: center;
  margin-left: 6%;
  gap: 15px;
  position: absolute;
  bottom: 20px;
  left: 2px;
}

.body2-comments-list-item-text-from-avatar {
  width: 45px;
  height: 45px;
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
}

.body2-comments-list-item-text-from-name {
  font-size: var(--fs-6);
  font-family: var(--ff-almm);
  letter-spacing: 1px;
}

.show {
  width: 1000px;
  height: auto;
  position: absolute;
  top: 8%;
  right: -100px;
}

.btn-container {
  width: 100%;
  height: 100%;
}

.case-container {
  position: relative;
  overflow-x: hidden;
}

span:nth-child(1),
span:nth-child(2),
span:nth-child(3),
span:nth-child(4) {
  display: inline-block;
}

.btns {
  overflow: hidden;
  position: relative;
  width: 90px;
  height: 90px;
  text-align: center;
  margin: 0 15px;
  border-radius: 25px;
  background-color: #fff;
}

.iconfont {
  font-size: 38px;
  transform: scale(0.8);
  line-height: 90px;
  transition: all 0.4s cubic-bezier(0.31, -0.1, 0.43, 1.59);
}

.btns:nth-child(1) {
  margin-left: 250px;
}

.btns::before {
  content: '';
  position: absolute;
  top: 90%;
  left: -100%;
  width: 120%;
  height: 120%;
  transform: rotate(45deg);
  transition: all 0.4s cubic-bezier(0.31, -0.1, 0.43, 1.59);
}

.icon-shuzi1 {
  color: #3b5988;
}

.btn_1::before {
  background-color: #3b5988;
}

.icon-shuzi2 {
  color: #00aff0;
}

.btn_2::before {
  background-color: #00aff0;
}

.icon-shuzi3 {
  color: #dc4a38;
}

.btn_3::before {
  background-color: #dc4a38;
}

.icon-shuzi4 {
  color: #bf00ff;
}

.btn_4::before {
  background-color: #bf00ff;
}

.btns:hover::before {
  top: -10%;
  left: -10%;
}

.btns:hover .iconfont {
  position: relative;
  color: #fff;
  transform: scale(1);
}

.img-container {
  width: 900px;
  height: 60vh;
  margin: 0 0 0 0;
  margin-top: 10px;
  /* border: #f3f2f0 solid 1px; */
  /* background: var(--url1) no-repeat; */
  background-size: cover;
  transition: all 0.5s;
  display: block;
  border-radius: var(--radius-20);
  box-shadow: var(--shadow-2);
}

.body2-title-middle {
  width: 90%;
  margin-top: 10%;
  height: 220px;
  margin-left: 5%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.body2-title-text-sub-middle {
  font-size: var(--fs-6);
  color: var(--light-raisin-black);
}

.body2-title-text-middle {
  font-size: 2.4rem;
  font-weight: var(--fw-600);
  letter-spacing: 3px;
}

.body2-title-btn-middle {
  width: 180px;
  height: 50px;
  background-color: var(--youth-green-2);
  border-radius: var(--radius-6);
  color: white;
  font-size: var(--fs-5);
  font-family: var(--ff-almm);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-2);
  margin-top: 2%;
  letter-spacing: 3px;
  cursor: pointer;
}

.body2-placeholder {
  width: 100%;
  height: 150px;
}

.body2-title-btn-middle:hover {
  transform: scale(1.01) translateY(-5px);
  transition: var(--transition-3);
}

@media (max-width: 1380px) {
  .body {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: radial-gradient(circle at top left, #ddf6f2 15%, transparent 40%),
    radial-gradient(circle at top right, #f3dcfc 20%, transparent 50%),
    radial-gradient(circle at bottom left, #f6d0e4 25%, transparent 70%),
    radial-gradient(circle at bottom right, #e6eec3 30%, transparent 70%);
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .body-info {
    width: 40%;
    height: 100vh;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .body-info-placeholder {
    width: 100%;
    height: 80px;
    flex-grow: 0;
  }

  .body-info-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .body-info-name {
    width: 90%;
    height: 100px;
    font-size: var(--fs-1);
    letter-spacing: 5px;
    font-weight: var(--fw-600);
    display: flex;
    align-items: center;
  }

  .body-info-name-text {
    display: flex;
    height: fit-content;
    width: 100%;
  }

  .body-info-name-trade {
    margin-left: 2%;
    margin-top: 3%;
    width: fit-content;
    height: fit-content;
    padding: 6px 12px;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-20);
    font-size: var(--fs-8);
    letter-spacing: 1px;
    color: white;
  }

  .body-info-description {
    width: 90%;
    height: fit-content;
    letter-spacing: 1px;
    color: #6e6d6d;
  }

  .body-info-title-container {
    width: 90%;
    margin-top: 5%;
    margin-bottom: 2%;
  }

  .body-info-title {
    width: 100%;
    display: flex;
    align-items: center;
    align-self: flex-start;
    letter-spacing: 1px;
  }

  .body-info-title-icon-container {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to top right, #919cef, #5871f1);
    border-radius: var(--radius-10) var(--radius-10) var(--radius-10) 0;
    font-size: var(--fs-6);
    color: white;
  }

  .body-info-title-text {
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    margin-left: 1%;
    color: #484848;
  }

  .body-problem {
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-top: 1%;
  }

  .body-problem-left {
    width: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .body-problem-right {
    width: 48%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .item-1 {
    width: 95%;
    height: 185px;
    margin-bottom: 5%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-10);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-2 {
    width: 95%;
    height: 190px;
    margin-bottom: 5%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-4);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-1:hover,
  .item-2:hover {
    transform: scale(1.02);
    transition: var(--transition-2);
  }

  .item-head {
    width: 85%;
    height: 90px;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .item-main {
    width: 82%;
    flex-grow: 1;
    letter-spacing: 1px;
    color: #6e6d6d;
  }

  .item-head-text {
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    color: #31313d;
  }

  .item-head ion-icon {
    color: #31313d;
    font-size: var(--fs-3);
    margin-bottom: 3%;
  }


  .body2 {
    width: 100%;
    height: fit-content;
    background: radial-gradient(circle at top left, #ecf2e4 20%, transparent 40%),
    radial-gradient(circle at top right, #E7F5FF 20%, transparent 50%),
    radial-gradient(circle at bottom left, #D3F7F8 25%, transparent 70%),
    radial-gradient(circle at bottom right, #E9F6FA 30%, transparent 70%);
  }

  .body2-title {
    width: 80%;
    margin-top: 10%;
    height: 120px;
    margin-left: 5%;
  }

  .body2-title-text-sub {
    font-size: var(--fs-6);
    color: var(--light-raisin-black);
  }

  .body2-title-text {
    font-size: var(--fs-1);
    font-weight: var(--fw-600);
    letter-spacing: 3px;
  }

  .body2-main-container {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .body2-main {
    width: 90%;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .body2-main:after {
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    border-bottom: 1px solid #d3d3d3;
  }

  .body2-main-item {
    width: 95%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body2-main-item-left {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .body2-main-item-percent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-grow: 0;
  }

  .body2-main-item-percent-text {
    font-size: var(--fs-2);
    font-weight: var(--fw-800);
    font-family: "Adobe Garamond Pro Bold";
    overflow: hidden;
  }

  .body2-main-item-percent-icon {
    margin-left: 5%;
    color: #2c966a;
    font-size: var(--fs-3-5);
    font-weight: var(--fw-800);
  }

  .body2-main-item-percent-name {
    font-weight: var(--fw-600);
    font-size: var(--fs-7);
    letter-spacing: 3px;
    color: #6e6d6d;
  }

  .body2-main-item-right {
    width: 60%;
  }

  .body2-main-item-right-text {
    font-size: var(--fs-6);
    letter-spacing: 2px;
    font-family: '微软雅黑 Light';
    font-weight: var(--fw-600);
  }

  .body2-main-item-right-from {
    margin-top: 5%;
    display: flex;
    align-items: flex-end;
    font-size: var(--fs-7);
    color: #6e6d6d;
  }

  .body2-main-item-right-from-container {
    font-size: 0.7rem;
  }


  .body2-comments-list-container {
    width: 100%;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
  }

  .body2-comments-list {
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .body2-comments-list-item {
    width: 92%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: var(--radius-20);
    position: relative;
    box-shadow: var(--shadow-3);
  }

  .body2-comments-list-item-quotes-bottom {
    width: 65px;
    height: 65px;
    position: absolute;
    bottom: 10px;
    right: 20px;
  }

  .body2-comments-list-item-quotes-top {
    position: absolute;
    width: 65px;
    height: 65px;
    transform: rotate(180deg);
    top: 10px;
    left: 20px;
  }

  .body2-comments-list-item-text-container {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body2-comments-list-item-text {
    width: 85%;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    color: #595959;
  }

  .body2-comments-list-item-text-from-container {
    width: 60%;
    display: flex;
    align-items: center;
    margin-left: 6%;
    gap: 15px;
    position: absolute;
    bottom: 10px;
    left: 5px;
  }

  .body2-comments-list-item-text-from-avatar {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-circle);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body2-comments-list-item-text-from-name {
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    letter-spacing: 1px;
  }

  .show {
    width: 750px;
    height: auto;
    position: absolute;
    top: 10%;
    right: 0px;
  }

  .btn-container {
    width: 100%;
    height: 100%;
  }

  .case-container {
    position: relative;
    overflow-x: hidden;
  }

  span:nth-child(1),
  span:nth-child(2),
  span:nth-child(3),
  span:nth-child(4) {
    display: inline-block;
  }

  /* 图片切换 */
  /* span:nth-child(1):hover ~ .img-container {
  background-image: url(@/assets/01.png);
}

span:nth-child(2):hover ~ .img-container {
  background-image: url(@/assets/02.png);
}

span:nth-child(3):hover ~ .img-container {
  background-image: url(@/assets/01.png);
}

span:nth-child(4):hover ~ .img-container {
  background-image: url(@/assets/02.png);
} */
  .btns {
    overflow: hidden;
    position: relative;
    width: 80px;
    height: 80px;
    text-align: center;
    margin: 0 15px;
    border-radius: 25px;
    background-color: #fff;
  }

  .iconfont {
    font-size: 38px;
    transform: scale(0.8);
    line-height: 90px;
    transition: all 0.4s cubic-bezier(0.31, -0.1, 0.43, 1.59);
  }

  .btns:nth-child(1) {
    margin-left: 160px;
  }

  .btns::before {
    content: '';
    position: absolute;
    top: 90%;
    left: -100%;
    width: 120%;
    height: 120%;
    transform: rotate(45deg);
    transition: all 0.4s cubic-bezier(0.31, -0.1, 0.43, 1.59);
  }

  .icon-shuzi1 {
    color: #3b5988;
  }

  .btn_1::before {
    background-color: #3b5988;
  }

  .icon-shuzi2 {
    color: #00aff0;
  }

  .btn_2::before {
    background-color: #00aff0;
  }

  .icon-shuzi3 {
    color: #dc4a38;
  }

  .btn_3::before {
    background-color: #dc4a38;
  }

  .icon-shuzi4 {
    color: #bf00ff;
  }

  .btn_4::before {
    background-color: #bf00ff;
  }

  .btns:hover::before {
    top: -10%;
    left: -10%;
  }

  .btns:hover .iconfont {
    position: relative;
    color: #fff;
    transform: scale(1);
  }

  .img-container {
    width: 700px;
    height: 45vh;
    margin: 0 auto;
    margin-top: 10px;
    /* border: #f3f2f0 solid 1px; */
    /* background: url(@/assets/01.png) no-repeat; */
    background-size: cover;
    transition: all 0.5s;
    display: block;
    /* border: #00aff0 solid 1px; */
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-2);
  }

  .body2-title-middle {
    width: 90%;
    margin-top: 10%;
    height: 220px;
    margin-left: 5%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .body2-title-text-sub-middle {
    font-size: var(--fs-6);
    color: var(--light-raisin-black);
  }

  .body2-title-text-middle {
    font-size: 2.4rem;
    font-weight: var(--fw-600);
    letter-spacing: 3px;
  }

  .body2-title-btn-middle {
    width: 180px;
    height: 50px;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-6);
    color: white;
    font-size: var(--fs-5);
    font-family: var(--ff-almm);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-2);
    margin-top: 2%;
    letter-spacing: 3px;
    cursor: pointer;
  }

  .body2-placeholder {
    width: 100%;
    height: 150px;
  }

  .body2-title-btn-middle:hover {
    transform: scale(1.01) translateY(-5px);
    transition: var(--transition-3);
  }
}

@media (max-width: 1211px) {
  .body {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: radial-gradient(circle at top left, #ddf6f2 15%, transparent 40%),
    radial-gradient(circle at top right, #f3dcfc 20%, transparent 50%),
    radial-gradient(circle at bottom left, #f6d0e4 25%, transparent 70%),
    radial-gradient(circle at bottom right, #e6eec3 30%, transparent 70%);
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .body-info {
    width: 40%;
    height: 100vh;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .body-info-placeholder {
    width: 100%;
    height: 80px;
    flex-grow: 0;
  }

  .body-info-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .body-info-name {
    width: 90%;
    height: 100px;
    font-size: var(--fs-1);
    letter-spacing: 5px;
    font-weight: var(--fw-600);
    display: flex;
    align-items: center;
  }

  .body-info-name-text {
    display: flex;
    height: fit-content;
    width: 100%;
    overflow: hidden;
  }

  .body-info-name-trade {
    margin-left: 2%;
    margin-top: 3%;
    width: fit-content;
    height: fit-content;
    padding: 6px 12px;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-20);
    font-size: var(--fs-8);
    letter-spacing: 1px;
    color: white;
  }

  .body-info-description {
    width: 90%;
    height: fit-content;
    letter-spacing: 1px;
    color: #6e6d6d;
  }

  .body-info-title-container {
    width: 90%;
    margin-top: 5%;
    margin-bottom: 2%;
  }

  .body-info-title {
    width: 100%;
    display: flex;
    align-items: center;
    align-self: flex-start;
    letter-spacing: 1px;
  }

  .body-info-title-icon-container {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to top right, #919cef, #5871f1);
    border-radius: var(--radius-10) var(--radius-10) var(--radius-10) 0;
    font-size: var(--fs-6);
    color: white;
  }

  .body-info-title-text {
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    margin-left: 1%;
    color: #484848;
  }

  .body-problem {
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-top: 1%;
  }

  .body-problem-left {
    width: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .body-problem-right {
    width: 48%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .item-1 {
    width: 95%;
    height: 200px;
    margin-bottom: 5%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-10);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-2 {
    width: 95%;
    height: 210px;
    margin-bottom: 5%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-4);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-1:hover,
  .item-2:hover {
    transform: scale(1.02);
    transition: var(--transition-2);
  }

  .item-head {
    width: 85%;
    height: 90px;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .item-main {
    width: 82%;
    flex-grow: 1;
    letter-spacing: 1px;
    color: #6e6d6d;
  }

  .item-head-text {
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    color: #31313d;
  }

  .item-head ion-icon {
    color: #31313d;
    font-size: var(--fs-3);
    margin-bottom: 3%;
  }


  .body2 {
    width: 100%;
    height: fit-content;
    background: radial-gradient(circle at top left, #ecf2e4 20%, transparent 40%),
    radial-gradient(circle at top right, #E7F5FF 20%, transparent 50%),
    radial-gradient(circle at bottom left, #D3F7F8 25%, transparent 70%),
    radial-gradient(circle at bottom right, #E9F6FA 30%, transparent 70%);
  }

  .body2-title {
    width: 80%;
    margin-top: 10%;
    height: 150px;
    margin-left: 5%;
    overflow: hidden;
  }

  .body2-title-text-sub {
    font-size: var(--fs-6);
    color: var(--light-raisin-black);
  }

  .body2-title-text {
    font-size: var(--fs-1);
    font-weight: var(--fw-600);
    letter-spacing: 3px;
    overflow: hidden;
  }

  .body2-main-container {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .body2-main {
    width: 90%;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .body2-main:after {
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    border-bottom: 1px solid #d3d3d3;
  }

  .body2-main-item {
    width: 95%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body2-main-item-left {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .body2-main-item-percent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-grow: 0;
  }

  .body2-main-item-percent-text {
    font-size: var(--fs-2);
    font-weight: var(--fw-800);
    font-family: "Adobe Garamond Pro Bold";
  }

  .body2-main-item-percent-icon {
    margin-left: 5%;
    color: #2c966a;
    font-size: var(--fs-3-5);
    font-weight: var(--fw-800);
  }

  .body2-main-item-percent-name {
    font-weight: var(--fw-600);
    font-size: var(--fs-7);
    letter-spacing: 3px;
    color: #6e6d6d;
  }

  .body2-main-item-right {
    width: 60%;
  }

  .body2-main-item-right-text {
    font-size: var(--fs-6);
    letter-spacing: 2px;
    font-family: '微软雅黑 Light';
    font-weight: var(--fw-600);
  }

  .body2-main-item-right-from {
    margin-top: 5%;
    display: flex;
    align-items: flex-end;
    font-size: var(--fs-7);
    color: #6e6d6d;
  }

  .body2-main-item-right-from-container {
    font-size: 0.7rem;
  }


  .body2-comments-list-container {
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
  }

  .body2-comments-list {
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .body2-comments-list-item {
    width: 92%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: var(--radius-20);
    position: relative;
    box-shadow: var(--shadow-3);
  }

  .body2-comments-list-item-quotes-bottom {
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 10px;
    right: 20px;
  }

  .body2-comments-list-item-quotes-top {
    position: absolute;
    width: 50px;
    height: 50px;
    transform: rotate(180deg);
    top: 10px;
    left: 20px;
  }

  .body2-comments-list-item-text-container {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body2-comments-list-item-text {
    width: 85%;
    font-size: var(--fs-7);
    letter-spacing: 1px;
    color: #595959;
  }

  .body2-comments-list-item-text-from-container {
    width: 60%;
    display: flex;
    align-items: center;
    margin-left: 6%;
    gap: 15px;
    position: absolute;
    bottom: 10px;
    left: 2px;
  }

  .body2-comments-list-item-text-from-avatar {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-circle);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body2-comments-list-item-text-from-name {
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    letter-spacing: 1px;
  }

  .show {
    width: 560px;
    height: auto;
    position: absolute;
    top: 10%;
    right: 3%;
  }

  .btn-container {
    width: 100%;
    height: 100%;
  }

  .case-container {
    position: relative;
    overflow-x: hidden;
  }

  span:nth-child(1),
  span:nth-child(2),
  span:nth-child(3),
  span:nth-child(4) {
    display: inline-block;
  }

  /* 图片切换 */
  /* span:nth-child(1):hover ~ .img-container {
  background-image: url(@/assets/01.png);
}

span:nth-child(2):hover ~ .img-container {
  background-image: url(@/assets/02.png);
}

span:nth-child(3):hover ~ .img-container {
  background-image: url(@/assets/01.png);
}

span:nth-child(4):hover ~ .img-container {
  background-image: url(@/assets/02.png);
} */
  .btns {
    overflow: hidden;
    position: relative;
    width: 60px;
    height: 60px;
    text-align: center;
    margin: 0 15px;
    border-radius: 15px;
    background-color: #fff;
  }

  .iconfont {
    font-size: 38px;
    transform: scale(0.8);
    line-height: 90px;
    transition: all 0.4s cubic-bezier(0.31, -0.1, 0.43, 1.59);
  }

  .btns:nth-child(1) {
    margin-left: 120px;
  }

  .btns::before {
    content: '';
    position: absolute;
    top: 90%;
    left: -100%;
    width: 120%;
    height: 120%;
    transform: rotate(45deg);
    transition: all 0.4s cubic-bezier(0.31, -0.1, 0.43, 1.59);
  }

  .icon-shuzi1 {
    color: #3b5988;
  }

  .btn_1::before {
    background-color: #3b5988;
  }

  .icon-shuzi2 {
    color: #00aff0;
  }

  .btn_2::before {
    background-color: #00aff0;
  }

  .icon-shuzi3 {
    color: #dc4a38;
  }

  .btn_3::before {
    background-color: #dc4a38;
  }

  .icon-shuzi4 {
    color: #bf00ff;
  }

  .btn_4::before {
    background-color: #bf00ff;
  }

  .btns:hover::before {
    top: -10%;
    left: -10%;
  }

  .btns:hover .iconfont {
    position: relative;
    color: #fff;
    transform: scale(1);
  }

  .img-container {
    width: 560px;
    height: 40vh;
    margin: 0 auto;
    margin-top: 10px;
    /* border: #f3f2f0 solid 1px; */
    background: var(--url1) no-repeat;
    background-size: cover;
    transition: all 0.5s;
    display: block;
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-2);
  }

  .body2-title-middle {
    width: 90%;
    margin-top: 10%;
    height: 220px;
    margin-left: 5%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .body2-title-text-sub-middle {
    font-size: var(--fs-6);
    color: var(--light-raisin-black);
  }

  .body2-title-text-middle {
    font-size: 2.4rem;
    font-weight: var(--fw-600);
    letter-spacing: 3px;
  }

  .body2-title-btn-middle {
    width: 180px;
    height: 50px;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-6);
    color: white;
    font-size: var(--fs-5);
    font-family: var(--ff-almm);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-2);
    margin-top: 2%;
    letter-spacing: 3px;
    cursor: pointer;
  }

  .body2-placeholder {
    width: 100%;
    height: 150px;
  }

  .body2-title-btn-middle:hover {
    transform: scale(1.01) translateY(-5px);
    transition: var(--transition-3);
  }
}

@media (max-width: 1020px) {
  .body-info {
    width: 70%;
    height: 100vh;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .body-info-name-text {
    display: flex;
    overflow: hidden;
    width: 100%;
  }

  .body-info-name-trade {
    margin-left: 2%;
    margin-top: 3%;
    width: fit-content;
    height: fit-content;
    padding: 6px 12px;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-20);
    font-size: var(--fs-8);
    letter-spacing: 1px;
    color: white;
  }

  .show {
    display: none;
    width: 1000px;
    height: auto;
    position: absolute;
    top: 10%;
    right: -100px;
  }

  .body2-comments-list-item-quotes-bottom {
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 5px;
    right: 20px;
  }

  .body2-comments-list-container {
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
  }

  .body2-comments-list-item-text-from-container {
    width: 65%;
    display: flex;
    align-items: center;
    margin-left: 6%;
    gap: 15px;
    position: absolute;
    bottom: 5px;
    left: 2px;
  }

  .body2-comments-list-item-text-from-avatar {
    width: 45px;
    height: 45px;
    border-radius: var(--radius-circle);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body2-comments-list-item-text-from-name {
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    letter-spacing: 1px;
  }

  .body2-comments-list-item-quotes-top {
    position: absolute;
    width: 50px;
    height: 50px;
    transform: rotate(180deg);
    top: 5px;
    left: 20px;
  }

  .body2-title {
    width: 80%;
    margin-top: 10%;
    height: 150px;
    margin-left: 5%;
  }

  .body2-title-text-sub {
    font-size: var(--fs-6);
    color: var(--light-raisin-black);
  }

  .body2-title-text {
    font-size: var(--fs-1);
    font-weight: var(--fw-600);
    letter-spacing: 3px;
    overflow: hidden;
  }

  .body2-title-middle {
    width: 90%;
    margin-top: 10%;
    height: 250px;
    margin-left: 5%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .body2-main-container {
    width: 100%;
    height: 355px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .body2-main {
    width: 90%;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .body2-main:after {
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    border-bottom: 1px solid #d3d3d3;
  }

  .body2-main-item {
    width: 95%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body2-main-item-left {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .body2-main-item-percent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-grow: 0;
  }

  .body2-main-item-percent-text {
    font-size: var(--fs-2);
    font-weight: var(--fw-800);
    overflow: hidden;
    font-family: "Adobe Garamond Pro Bold";
  }

  .body2-main-item-percent-icon {
    margin-left: 5%;
    color: #2c966a;
    font-size: var(--fs-3-5);
    font-weight: var(--fw-800);
  }

  .body2-main-item-percent-name {
    font-weight: var(--fw-600);
    font-size: var(--fs-7);
    letter-spacing: 3px;
    color: #6e6d6d;
  }

  .body2-main-item-right {
    width: 60%;
  }

  .body2-main-item-right-text {
    font-size: var(--fs-6);
    letter-spacing: 2px;
    font-family: '微软雅黑 Light';
    font-weight: var(--fw-600);
  }

  .body2-main-item-right-from {
    margin-top: 5%;
    display: flex;
    align-items: flex-end;
    font-size: var(--fs-7);
    color: #6e6d6d;
  }

  .body2-main-item-right-from-container {
    font-size: 0.7rem;
  }

  .body-problem {
    width: 95%;
    height: auto;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-top: 1%;
  }

  .body-problem-left {
    width: 52%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .body-problem-right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .item-1 {
    width: 95%;
    height: 168px;
    margin-bottom: 5%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-10);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-2 {
    width: 95%;
    height: 175px;
    margin-bottom: 5%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-4);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 850px) {
  .body-info {
    width: 80%;
    height: 100vh;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .body-info-name-text {
    display: flex;
    overflow: hidden;
    width: 100%;
  }

  .body-info-name-trade {
    margin-left: 2%;
    margin-top: 3%;
    width: fit-content;
    height: fit-content;
    padding: 6px 12px;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-20);
    font-size: var(--fs-8);
    letter-spacing: 1px;
    color: white;
  }

  .show {
    display: none;
    width: 1000px;
    height: auto;
    position: absolute;
    top: 10%;
    right: -100px;
  }

  .body2-comments-list-item-quotes-bottom {
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 5px;
    right: 20px;
  }

  .body2-comments-list-container {
    width: 100%;
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
  }

  .body2-comments-list {
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .body2-comments-list-item-text-from-container {
    width: 60%;
    display: flex;
    align-items: center;
    margin-left: 6%;
    gap: 15px;
    position: absolute;
    bottom: 5px;
    left: 2px;
  }

  .body2-comments-list-item-text-from-avatar {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-circle);
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .body2-comments-list-item-text-from-name {
    font-size: var(--fs-7);
    font-family: var(--ff-almm);
    letter-spacing: 1px;
  }

  .body2-comments-list-item-quotes-top {
    position: absolute;
    width: 50px;
    height: 50px;
    transform: rotate(180deg);
    top: 5px;
    left: 20px;
  }

  .body2-title {
    width: 80%;
    margin-top: 10%;
    height: 180px;
    margin-left: 5%;
  }

  .body2-title-text-sub {
    font-size: var(--fs-6);
    color: var(--light-raisin-black);
  }

  .body2-title-text {
    font-size: var(--fs-1);
    font-weight: var(--fw-600);
    letter-spacing: 3px;
    overflow: hidden;
  }

  .body2-title-middle {
    width: 90%;
    margin-top: 10%;
    height: 300px;
    margin-left: 5%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .body2-main-container {
    width: 100%;
    height: 355px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .body2-main {
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .body2-main:after {
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    border-bottom: 1px solid #d3d3d3;
  }

  .body2-main-item {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .body2-main-item-left {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .body2-main-item-percent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    flex-grow: 0;
  }

  .body2-main-item-percent-text {
    font-size: var(--fs-3);
    font-weight: var(--fw-800);
    font-family: "Adobe Garamond Pro Bold";
  }

  .body2-main-item-percent-icon {
    margin-left: 5%;
    color: #2c966a;
    font-size: var(--fs-3-5);
    font-weight: var(--fw-800);
  }

  .body2-main-item-percent-name {
    font-weight: var(--fw-600);
    font-size: var(--fs-7);
    letter-spacing: 3px;
    color: #6e6d6d;
    overflow: hidden;
  }

  .body2-main-item-right {
    width: 80%;
  }

  .body2-main-item-right-text {
    font-size: var(--fs-6);
    letter-spacing: 2px;
    font-family: '微软雅黑 Light';
    font-weight: var(--fw-600);
  }

  .body2-main-item-right-from {
    margin-top: 5%;
    display: flex;
    align-items: flex-end;
    font-size: var(--fs-7);
    color: #6e6d6d;
  }

  .body2-main-item-right-from-container {
    font-size: 0.7rem;
  }

  .body-problem {
    width: 95%;
    height: auto;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-top: 1%;
  }

  .body-problem-left {
    width: 52%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .body-problem-right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .item-1 {
    width: 95%;
    height: 168px;
    margin-bottom: 5%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-10);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-2 {
    width: 95%;
    height: 175px;
    margin-bottom: 5%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-4);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

}

@media (max-width: 650px) {
  .body2-main-container {
    width: 100%;
    height: 569px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .body2-main {
    width: 80%;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: start;
  }

  .body2-comments-list-container {
    width: 90%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-left: 30px;
    margin-top: 3%;
  }

  .body2-comments-list {
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .body2-comments-list-item-text-from-avatar {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-circle);
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .body2-comments-list-item-text-from-name {
    font-size: var(--fs-6);
    font-family: var(--ff-almm);
    letter-spacing: 1px;
  }

  .body-info {
    width: 85%;
    height: 100vh;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

}

@media (max-width: 545px) {
  .body-info-name {
    width: 90%;
    height: 150px;
    font-size: var(--fs-1);
    letter-spacing: 5px;
    font-weight: var(--fw-600);
    display: flex;
    align-items: center;
  }

  .body2-main-container {
    width: 100%;
    height: 580px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .body2-main {
    width: 80%;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: start;
  }

  .body2-main-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .body2-main-item-right {
    width: 80%;
    overflow: hidden;
  }

  .body2-comments-list-container {
    width: 90%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-left: 30px;
    margin-top: 3%;
  }

  .body2-comments-list {
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .body-info {
    width: 85%;
    height: 140vh;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .body-problem {
    width: 90%;
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    margin-top: 1%;
  }

  .body-problem-left {
    width: 80%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .body-problem-right {
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .item-1 {
    width: 95%;
    height: 200px;
    margin-bottom: 5%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-10);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-2 {
    width: 95%;
    height: 200px;
    margin-bottom: 5%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-10);
    box-shadow: var(--shadow-4);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .body-info-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .body-info-name {
    width: 80%;
    height: 100px;
    font-size: var(--fs-1);
    letter-spacing: 5px;
    font-weight: var(--fw-600);
    display: flex;
    align-items: center;
  }

  .body-info-name-text {
    display: flex;
    height: fit-content;
    width: 100%;
  }

  .body-info-name-trade {
    margin-left: 2%;
    margin-top: 3%;
    width: fit-content;
    height: fit-content;
    padding: 6px 12px;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-20);
    font-size: var(--fs-8);
    letter-spacing: 1px;
    color: white;
  }

  .body-info-description {
    width: 90%;
    height: 125px;
    letter-spacing: 1px;
    color: #6e6d6d;
  }

  .body-info-title-container {
    width: 90%;
    margin-top: 3%;
    margin-bottom: 2%;
    overflow: hidden;
  }

  .body-info-title {
    width: 100%;
    display: flex;
    align-items: center;
    align-self: flex-start;
    letter-spacing: 1px;
  }

  .body-info-title-icon-container {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to top right, #919cef, #5871f1);
    border-radius: var(--radius-10) var(--radius-10) var(--radius-10) 0;
    font-size: var(--fs-6);
    color: white;
  }

  .body-info-title-text {
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    margin-left: 1%;
    color: #484848;
  }

  .body2-comments-list-item-quotes-bottom {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 5px;
    right: 20px;
  }

  .body2-comments-list-item-text-from-avatar {
    width: 35px;
    height: 35px;
    border-radius: var(--radius-circle);
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .body2-comments-list-item-text-from-name {
    font-size: var(--fs-7);
    font-family: var(--ff-almm);
    letter-spacing: 1px;
  }

  .body2-comments-list-item-quotes-top {
    position: absolute;
    width: 40px;
    height: 40px;
    transform: rotate(180deg);
    top: 5px;
    left: 20px;
  }

}
</style>