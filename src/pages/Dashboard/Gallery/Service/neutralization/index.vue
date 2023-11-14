<template>
  <div class="body">
    <div class="dashboard-container">
      <DashboardLeft/>
      <div class="dashboard-container-middle">
        <div class="dashboard-charts-top-text-container">
          <div class="dashboard-charts-top-topic-container">
            <div class="dashboard-charts-top-topic-line"></div>
            <div class="dashboard-charts-top-topic">
              碳中和 & 碳减排
            </div>
            <div class="dashboard-charts-top-topic-line"></div>
          </div>

          <div class="dashboard-charts-top-text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的碳中和 &
            碳减排服务包括评估碳排放情况、制定减排策略、推荐可再生能源解决方案、制定碳中和计划和实施等。我们的专业团队将根据客户的需求和情况量身定制服务，
            为企业提供全面的碳管理解决方案。我们致力于通过为企业提供碳中和和碳减排服务，推动全球的可持续发展，共同建设美好的未来。
          </div>

          <div class="dashboard-charts-top-text-container-switch">
            <div class="dashboard-charts-top-text-container-switch-item" ref="selectItem" v-for="(item,index) in item"
                 @click="switchItem(item.index)" :key="index">
              {{ item.text }}
            </div>
          </div>
        </div>

        <!--碳减排-->
        <div class="dashboard-charts-body-container" v-if="selectedIndex === 0">
          <div class="dashboard-charts-body-container-note">
            <div class="dashboard-charts-body-container-note-top">
              <ion-icon name="information-circle-outline"></ion-icon>
              注意
            </div>
            <span>
              碳减排服务与碳中和服务是可分离的，当你订阅了碳中和服务则一定也拥有碳减排服务，此外您还可以只单独订阅碳减排服务，为了满足部分没有能力进行植树造林等行为的企业。
            </span>
          </div>

          <div class="collection">
            <h1>采集减排</h1>
            <div class="lessBox">
              <div class="lessItem" v-if="item.data[0] !== null" v-for="(item,index) in collectionList" :key="index">
                <h2>{{ item.name }}</h2>
                <!-- @mousemove="move($event,1)"  @mouseleave="leave" -->
                <div class="bottomBox">
                  <div class="itemBoxFirst" ref="firstBox">
                    <h3>best</h3>
                    <div class="itemCircle">1</div>
                    <div class="itemRight" v-if="item.data[0] !== undefined">{{ item.data[1].name }}</div>
                  </div>
                  <div class="moveBox" ref="moveBox" id="1" v-if="mouseMove == 1">最优选可减少</div>
                  <div class="rightBox">
                    <div class="itemBox" v-for="(item1,index) in item.data[0]" :key="index">
                      <div class="itemCircle">{{ index + 2 }}</div>
                      <div class="itemRight">{{ item1.name }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="collection">
            <h1>加工减排</h1>
            <div class="lessBox">
              <div class="lessItem" v-if="item.data[0] !== null" v-for="(item,index) in processingList" :key="index">
                <h2>{{ item.name }}</h2>
                <div class="bottomBox">
                  <div class="itemBoxFirst" style="background:rgb(156, 210, 255)" ref="firstBox">
                    <h3>best</h3>
                    <div class="itemCircle">1</div>
                    <div class="itemRight" v-if="item.data[0] !== undefined">{{ item.data[1].name }}</div>
                  </div>
                  <div class="moveBox" ref="moveBox" id="1" v-if="mouseMove == 1">最优选可减少</div>
                  <div class="rightBox">
                    <div class="itemBox" v-for="(item1,index) in item.data[0]" :key="index">
                      <div class="itemCircle">{{ index + 2 }}</div>
                      <div class="itemRight">{{ item1.name }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="collection">
            <h1>生产减排</h1>
            <div class="lessBox">
              <div class="lessItem" v-if="item.data[0] !== null" v-for="(item,index) in producingList" :key="index">
                <h2>{{ item.name }}</h2>
                <div class="bottomBox">
                  <div class="itemBoxFirst" style="background:rgb(255, 156, 156)" ref="firstBox">
                    <h3>best</h3>
                    <div class="itemCircle">1</div>
                    <div class="itemRight" v-if="item.data[0] !== undefined">{{ item.data[1].name }}</div>
                  </div>
                  <div class="moveBox" ref="moveBox" id="1" v-if="mouseMove == 1">最优选可减少</div>
                  <div class="rightBox">
                    <div class="itemBox" v-for="(item1,index) in item.data[0]" :key="index">
                      <div class="itemCircle">{{ index + 2 }}</div>
                      <div class="itemRight">{{ item1.name }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!--碳中和-->
        <div class="dashboard-charts-body-container" v-else-if="selectedIndex === 1">
          <div class="dashboard-charts-body-container-note">
            <div class="dashboard-charts-body-container-note-top">
              <ion-icon name="information-circle-outline"></ion-icon>
              注意
            </div>
            <span>
              碳中和服务包含了碳减排，我们会遵循先减排再进行抵消中和的原则，为您的企业提供一套完整的可以在预设时间内减少碳排放，绿植抵消碳中和的方案。
            </span>
          </div>

          <div class="dashboard-charts-body-container-line">
            <div class="dashboard-charts-body-container-target-year-container">
              <div class="dashboard-charts-body-container-target-year" v-if="targetDate">
                您设置的预期实现时间: {{ targetDate }}
              </div>
              <div class="dashboard-charts-body-container-target-year" v-else>
                记得要先设置预期时间哦
              </div>
            </div>

            <div class="dashboard-charts-body-container-target-year-container">
              <div class="dashboard-charts-body-container-target-year" v-if="targetDate">
                距离预期目标还差: {{ dateLong }}天
              </div>
              <div class="dashboard-charts-body-container-target-year" v-else>
                距离目标暂无数据
              </div>
            </div>
          </div>

          <div class="dashboard-charts-body-container-neu-container">
            <div class="dashboard-charts-body-container-neu-container-left">

              <div class="dashboard-charts-body-container-neu-container-left-select-container"
                   v-if="targetDate===null || targetDate===''">
                <div class="dashboard-charts-body-container-neu-container-left-select-container-body">
                  <div class="dashboard-charts-body-container-neu-container-left-select-container-topic">
                    <ion-icon name="color-palette-outline"></ion-icon>
                    填写实现碳中和预期时间
                  </div>
                  <div class="date-form">
                    <el-date-picker
                        v-model="targetDate"
                        type="date"
                        format="yyyy-MM-dd"
                        placeholder="预期时间在第一次计算后就无法更改了"
                        style="width: 100%">
                    </el-date-picker>
                    <!--                    <div class="date-enter-btn">-->
                    <!--                      确认-->
                    <!--                    </div>-->
                  </div>

                </div>

              </div>

              <div class="dashboard-charts-body-container-neu-container-left-select-container">
                <div class="dashboard-charts-body-container-neu-container-left-select-container-body">
                  <div class="dashboard-charts-body-container-neu-container-left-select-container-topic">
                    <ion-icon name="color-palette-outline"></ion-icon>
                    选择树木
                  </div>
                  <div class="dashboard-charts-body-container-neu-container-left-select">
                    <el-select style="width: 100%" v-model="selectedTreeId" placeholder="请选择您打算种植的树木"
                               @change="addTree()">
                      <el-option
                          v-for="(item,index) in trees"
                          :key="index"
                          :label="item.name"
                          :value="item.id">
                        <span style="float: left">{{ item.name }}</span>
                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.type }}</span>
                      </el-option>
                    </el-select>
                  </div>
                </div>

              </div>

              <div class="dashboard-charts-body-container-neu-container-left-select-container">
                <div class="dashboard-charts-body-container-neu-container-left-select-container-body">
                  <div class="dashboard-charts-body-container-neu-container-left-select-container-topic">
                    <ion-icon name="color-palette-outline"></ion-icon>
                    选择草地/湿地
                  </div>
                  <div class="dashboard-charts-body-container-neu-container-left-select">
                    <el-select style="width: 100%" v-model="selectedGrassId" placeholder="请选择您打算添加的草地/湿地"
                               @change="addGrass()">
                      <el-option
                          v-for="item in grass"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                        <span style="float: left">{{ item.name }}</span>
                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.type }}</span>
                      </el-option>
                    </el-select>
                  </div>
                </div>

              </div>

              <div class="dashboard-charts-body-container-neu-container-left-submit" @click="postCarbonNeutralization"
                   v-if="forestData.length>0||grassData.length>0">
                <ion-icon name="arrow-down"></ion-icon>
                计算碳中和报告
                <ion-icon name="arrow-down"></ion-icon>
              </div>

              <div class="dashboard-charts-body-container-neu-container-left-submit" @click="postCarbonNeutralization"
                   v-else>
                计算碳中和报告
              </div>

              <div class="daylong">
                预计实现目标还需要:{{ dateLong }}天
              </div>

              <div class="dashboard-charts-body-container-neu-container-left-result" v-if="forestData.length > 0">
                <el-table
                    ref="singleTable"
                    :data="forestData"
                    highlight-current-row
                    @current-change="handleCurrentChange"
                    style="width: 100%">
                  <el-table-column
                      property="name"
                      label="树木名称"
                      style="width: 40%">
                  </el-table-column>
                  <el-table-column
                      property="area"
                      label="建议种植面积（公顷）"
                      style="width: 60%">
                  </el-table-column>
                </el-table>
              </div>

              <div class="dashboard-charts-body-container-neu-container-left-result" v-if="grassData.length > 0">
                <el-table
                    ref="singleTable"
                    :data="grassData"
                    highlight-current-row
                    @current-change="handleCurrentChange"
                    style="width: 100%">
                  <el-table-column
                      property="name"
                      label="湿地/草地名称"
                      style="width: 40%">
                  </el-table-column>
                  <el-table-column
                      property="area"
                      label="建议种植面积（公顷）"
                      style="width: 60%">
                  </el-table-column>
                </el-table>

              </div>

              <div class="dashboard-charts-body-container-neu-container-right-text"
                   style="margin-top: 1%;font-size: var(--fs-9)"
                   v-if="grassData.length>0 || forestData.length>0">
                根据您的选择，我们已为您计算出适合贵公司的碳中和规划，若存有疑问，可联系我们寻求帮助，我们将会有专业的咨询人员为您答疑解惑。
              </div>

            </div>

            <div class="dashboard-charts-body-container-neu-container-right">

              <div class="dashboard-charts-body-container-neu-container-right-body" v-if="treeList.length > 0">
                <!--                <div class="dashboard-charts-body-container-neu-container-right-item" v-for="(item,index) in treeList"-->
                <!--                     :key="index">-->
                <!--                  <div class="dashboard-charts-body-container-neu-container-right-item-name">-->
                <!--                    {{item.name}}-->
                <!--                  </div>-->
                <!--                  <div class="dashboard-charts-body-container-neu-container-right-item-type">-->
                <!--                    {{item.type}}-->
                <!--                  </div>-->
                <!--                  <div class="dashboard-charts-body-container-neu-container-right-item-btn">-->
                <!--                    <ion-icon name="trash-outline"></ion-icon>-->
                <!--                    删除-->
                <!--                  </div>-->
                <!--                </div>-->

                <el-table
                    stripe
                    :data="treeList"
                    height="250"
                    style="width: 100%;">
                  <el-table-column
                      prop="name"
                      label="名称"
                      style="width: 40%">
                  </el-table-column>
                  <el-table-column
                      prop="type"
                      label="类型"
                      style="width: 40%">
                  </el-table-column>
                  <el-table-column
                      fixed="right"
                      label="操作"
                      style="width: 20%">
                    <template slot-scope="scope">
                      <el-button @click="deleteTree(scope.row)"
                                 style="color: var(--dark-pink);display: flex;align-items: center;justify-content: center;"
                                 type="text" size="small">
                        <ion-icon name="trash"></ion-icon>
                        删除
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>

              </div>

              <div class="dashboard-charts-body-container-neu-container-right-nodata" v-else>
                暂时还没有选择树木，请先在左侧选择吧
              </div>

              <div class="dashboard-charts-body-container-neu-container-right-body" v-if="grassList.length > 0">
                <el-table
                    stripe
                    :data="grassList"
                    height="250"
                    style="width: 100%;">
                  <el-table-column
                      prop="name"
                      label="名称"
                      style="width: 40%">
                  </el-table-column>
                  <el-table-column
                      prop="type"
                      label="类型"
                      style="width: 40%">
                  </el-table-column>
                  <el-table-column
                      fixed="right"
                      label="操作"
                      style="width: 20%">
                    <template slot-scope="scope">
                      <el-button @click="deleteGrass(scope.row)"
                                 style="color: var(--dark-pink);display: flex;align-items: center;justify-content: center;"
                                 type="text" size="small">
                        <ion-icon name="trash"></ion-icon>
                        删除
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>

              </div>

              <div class="dashboard-charts-body-container-neu-container-right-nodata" v-else>
                暂时还没有选择草地/湿地，请先在左侧选择吧
              </div>


              <div class="dashboard-charts-body-container-neu-container-right-text">
                <p>
                  工具书类<br>
                  de Klein，J.J.和van der Werf，A.K.（2014）。在人工湿地中平衡碳固存和温室气体排放。生态工程，66，36-42。<br>
                  Gu，C.、Crane，J.、Hornberger，G.和Carrico，A.（2015）。家庭管理实践对城市草坪全球变暖潜力的影响。《环境管理杂志》，151233-242。<br>
                  宾夕法尼亚州麦克弗森。；Simpson，JR.（1999年）。通过城市林业减少二氧化碳：专业和志愿植树者指南。通用技术代表PSWGTR-171。加利福尼亚州奥尔巴尼：美国农业部林业局太平洋西南研究站。<br>
                  访问carbonHex/more了解更多信息。<br>
                </p>
              </div>
            </div>


          </div>

          <!--          <div class="dashboard-charts-body-container-neu-container">-->

          <!--          </div>-->


        </div>
        <div style="min-height: 100px;width: 100%"></div>

      </div>

    </div>

    <PopComponent ref="pop"/>
  </div>

</template>

<script>

import DashboardLeft from "../../../../../../src/components/DashboardComponents/Left/index.vue"
import PopComponent from "@/components/pop/PopComponent";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  components: {
    DashboardLeft,
    PopComponent
  },
  data() {
    return {

      reduceData: {},
      mouseMove: '',
      collectionList: [],
      fixedFuel: {
        name: '固定燃料减排',
        data: {}
      },
      movingCombustion: {
        name: '移动燃烧减排',
        data: {}
      },
      steamFuel: {
        name: '蒸汽燃料减排',
        data: {}
      },
      processingList: [],
      processingMaterial: {
        name: '原材料加工减排',
        data: {}
      },
      processingSteamFuel: {
        name: '蒸汽燃料加工减排',
        data: {}
      },
      producingList: [],
      producingMovingCombustion: {
        name: '移动燃烧减排',
        data: {}
      },
      producingSteamFuel: {
        name: '蒸汽使用燃料',
        data: {}
      },


      currentRow: null,

      companyId: '',
      // 碳中和记录返回数据
      CarbonNeutralizationData: [],
      // 碳中和树木数据
      forestData: [],
      // 碳中和湿地数据
      grassData: [],
      // 已完成目标百分比
      percentData: [],

      selectedTreeId: null,
      selectedGrassId: null,

      // 树和草地湿地的选项
      trees: [],
      grass: [],

      // 树和草地湿地的数据列表
      treeList: [],
      grassList: [],

      // 预期实现日期
      targetDate: "",
      // 还要多少天
      dateLong: "",
      selectedIndex: 0,

      item: [
        {text: "碳减排", index: 0},
        {text: "碳中和", index: 1},
      ],

    }
  },
  methods: {

    validPower() {
      return new Promise(((resolve, reject) => {
        this.getRequest('/carbon-service/CarbonService/CarbonReduce/' + this.companyId).then(res => {
          console.log(res)
          if (res.code === "00000") {
            // 验证成功
            this.power = true
          } else {
            this.$refs.pop.messagePopShow("你所在的组织没有订阅这个服务")
            this.$router.push("/gallery")
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      }))
    },

    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },


    addTree() {
      console.log("tree")
      console.log(this.selectedTreeId)
      if (localStorage.getItem("treeList")) {
        this.treeList = JSON.parse(localStorage.getItem("treeList"));
        for (let i = 0; i < this.treeList.length; i++) {
          // 如果树种类型列表中已经存在这棵树就return
          if (this.treeList[i].id === this.selectedTreeId) {
            return;
          }
        }
        // 能走到这说明列表没有这树
        var treeInArr = null;
        for (let i = 0; i < this.trees.length; i++) {
          if (this.trees[i].id === this.selectedTreeId) {
            treeInArr = this.trees[i]
          }
        }
        const newTree = {
          id: this.selectedTreeId,
          name: treeInArr.name,
          type: treeInArr.type
        }
        this.treeList.push(newTree)
        localStorage.setItem("treeList", JSON.stringify(this.treeList))
      } else {
        var treeInArr2 = null;
        for (let i = 0; i < this.trees.length; i++) {
          if (this.trees[i].id === this.selectedTreeId) {
            treeInArr2 = this.trees[i]
          }
        }
        const newTree = {
          id: this.selectedTreeId,
          name: treeInArr2.name,
          type: treeInArr2.type
        }
        this.treeList.push(newTree)
        localStorage.setItem("treeList", JSON.stringify(this.treeList))
      }
    },

    deleteTree(item) {
      console.log(item)
      if (localStorage.getItem("treeList")) {
        this.treeList = JSON.parse(localStorage.getItem("treeList"))
        console.log("this.treeList")
        console.log(this.treeList)
        console.log(this.treeList.indexOf(item))
        for (let i = 0; i < this.treeList.length; i++) {
          if (this.treeList[i].id === item.id) {
            this.treeList.splice(i, 1)
            localStorage.setItem("treeList", JSON.stringify(this.treeList))
            return;
          }
        }
      }
    },

    addGrass() {
      console.log("grass")
      console.log(this.selectedGrassId)
      if (localStorage.getItem("grassList")) {
        this.grassList = JSON.parse(localStorage.getItem("grassList"));
        for (let i = 0; i < this.grassList.length; i++) {
          // 如果树种类型列表中已经存在这棵树就return
          if (this.grassList[i].id === this.selectedGrassId) {
            return;
          }
        }
        // 能走到这说明列表没有这树
        var grassInArr = null;
        for (let i = 0; i < this.grass.length; i++) {
          if (this.grass[i].id === this.selectedGrassId) {
            grassInArr = this.grass[i]
          }
        }
        const newGrass = {
          id: this.selectedGrassId,
          name: grassInArr.name,
          type: grassInArr.type
        }
        this.grassList.push(newGrass)
        localStorage.setItem("grassList", JSON.stringify(this.grassList))
      } else {
        var grassInArr2 = null;
        for (let i = 0; i < this.grass.length; i++) {
          if (this.grass[i].id === this.selectedGrassId) {
            grassInArr2 = this.grass[i]
          }
        }
        const newGrass = {
          id: this.selectedGrassId,
          name: grassInArr2.name,
          type: grassInArr2.type
        }
        this.grassList.push(newGrass)
        localStorage.setItem("grassList", JSON.stringify(this.grassList))
      }
    },

    deleteGrass(item) {
      console.log("grass")
      console.log(this.selectedGrassId)
      if (localStorage.getItem("grassList")) {
        this.grassList = JSON.parse(localStorage.getItem("grassList"))
        console.log("this.grassList")
        console.log(this.grassList)
        console.log(this.grassList.indexOf(item))
        for (let i = 0; i < this.grassList.length; i++) {
          if (this.grassList[i].id === item.id) {
            this.grassList.splice(i, 1)
            localStorage.setItem("grassList", JSON.stringify(this.grassList))
            return;
          }
        }
      }
    },

    switchItem(index) {
      this.selectedIndex = index
      var selectItems = this.$refs.selectItem
      console.log(selectItems)
      for (let i = 0; i < selectItems.length; i++) {
        if (i !== this.selectedIndex) {
          selectItems[i].classList.remove('switch-item-selected')
        } else {
          selectItems[i].classList.add('switch-item-selected')
        }
      }
    },

    // 碳中和
    postCarbonNeutralization() {
      var data = {
        forestNames: [],
        meadowWetlandNames: [],
        targetDate: this.targetDate
      }
      for (let i = 0; i < this.treeList.length; i++) {
        data.forestNames[i] = this.treeList[i].name
      }
      for (let i = 0; i < this.grassList.length; i++) {
        data.meadowWetlandNames[i] = this.grassList[i].name
      }
      console.log(data)
      this.postRequest(`carbon-service/CarbonService/CarbonNeutralization/${this.companyId}`, data).then(res => {
        console.log(res);

        // 清空，否则会重复push
        this.CarbonNeutralizationData = []
        this.forestData = []
        this.grassData = []

        this.CarbonNeutralizationData = res.data

        if (res.data.forestHashMap !== null && res.data.forestHashMap !== {}) {
          for (let treeKey in this.CarbonNeutralizationData.forestHashMap) {
            this.forestData.push({
              name: treeKey,
              area: this.CarbonNeutralizationData.forestHashMap[treeKey]
            })
          }
        }

        if (res.data.meadowWetlandsHashMap !== null && res.data.meadowWetlandsHashMap !== {}) {
          for (let grassKey in this.CarbonNeutralizationData.meadowWetlandsHashMap) {
            this.grassData.push({
              name: grassKey,
              area: this.CarbonNeutralizationData.meadowWetlandsHashMap[grassKey]
            })
          }
        }

        console.log("this.forestData", this.forestData)
        console.log("this.grassData", this.grassData)
      })
    },
    // 获取碳中和记录
    async getCarbonNeutralization() {
      await this.validPower()
      if (this.power === false) {
        this.$refs.pop.messagePopShow("您所在的组织没有订阅这个服务")
        await this.$router.push("/gallery")
        return;
      }
      this.getRequest(`carbon-service/CarbonService/getCarbonNeutralizationResultRecords/${this.companyId}`).then(res => {
        this.CarbonNeutralizationData = res.data

        if (res.data.targetDate !== null) {
          this.targetDate = res.data.targetDate
          this.dateLong = res.data.dateLong
        }

        if (res.data.forestHashMap !== null && res.data.forestHashMap !== {}) {
          for (let treeKey in this.CarbonNeutralizationData.forestHashMap) {
            this.forestData.push({
              name: treeKey,
              area: this.CarbonNeutralizationData.forestHashMap[treeKey]
            })
          }
        }

        if (res.data.meadowWetlandsHashMap !== null && res.data.meadowWetlandsHashMap !== {}) {
          for (let grassKey in this.CarbonNeutralizationData.meadowWetlandsHashMap) {
            this.grassData.push({
              name: grassKey,
              area: this.CarbonNeutralizationData.meadowWetlandsHashMap[grassKey]
            })
          }
        }
        console.log('碳中和记录', this.CarbonNeutralizationData);
      })
    },

    // 获取碳中和树木参数
    getForestsData() {
      this.getRequest(`carbon-service/CarbonService/getForests/${this.companyId}`).then(res => {
        for (let i = 0; i < res.length; i++) {
          res[i]["type"] = "树木"
        }
        this.trees = res
        console.log('forest', this.trees);
      })
    },

    // 获取碳中和湿地与草地参数
    getMeadowWetland() {
      this.getRequest(`carbon-service/CarbonService/MeadowWetland/${this.companyId}`).then(res => {
        this.grass = res
        console.log('湿地与草地', this.grass);
      })
    },

    // 已完成目标百分比
    getPercent() {
      this.getRequest(`carbon-service/CarbonService/getTargetDistance/${this.companyId}`).then(res => {
        console.log('percent', res);
      })
    },


    // 碳减排的接口
    getCarbonReduce() {
      this.getRequest(`carbon-service/CarbonService/CarbonReduce/${this.companyId}`).then(res => {
        this.reduceData = res.data
        console.log(this.reduceData);
      })
    }

  },
  async mounted() {
    this.$refs.selectItem[this.selectedIndex].classList.add('switch-item-selected')

    this.companyId = localStorage.getItem("companyId")

    await this.validPower()
    if (this.power === false) {
      this.$refs.pop.messagePopShow("您所在的组织没有订阅这个服务")
      await this.$router.push("/gallery")
      return;
    }

    // 碳减排的mounted
    this.getCarbonReduce()

    setTimeout(() => {
      this.fixedFuel.data = [this.reduceData.collectingStationaryCombustionReplaces, this.reduceData.recommendStationaryCombustionReplace, this.reduceData.stationaryCombustionReduce]
      this.movingCombustion.data = [this.reduceData.collectingMovingCombustionReplaces, this.reduceData.recommendCollectingMovingCombustionReplace, this.reduceData.collectingMovingCombustionReduce]
      this.steamFuel.data = [this.reduceData.collectingSteamFuelReplaces, this.reduceData.recommendCollectingSteamFuelReplace, this.reduceData.collectingSteamFuelReduce]
      this.collectionList = [this.fixedFuel, this.movingCombustion, this.steamFuel]

      this.processingMaterial.data = [null, this.reduceData.recommendProcessingMaterialReplace, this.reduceData.processingMaterialReduce]
      this.movingCombustion.data = [this.reduceData.processingMovingCombustionReplaces, this.reduceData.recommendProcessingMovingCombustionReplace, this.reduceData.processingMovingCombustionReduce]
      this.processingSteamFuel.data = [this.reduceData.processingSteamFuelReplaces, this.reduceData.recommendProcessingSteamFuelReplace, this.reduceData.processingSteamFuelReduce]
      this.processingList = [this.processingMaterial, this.movingCombustion, this.processingSteamFuel]

      this.producingMovingCombustion.data = [this.reduceData.producingMovingCombustionReplaces, this.reduceData.recommendProducingMovingCombustionReplace, this.reduceData.producingMovingCombustionReduce]
      this.producingSteamFuel.data = [this.reduceData.producingSteamFuelReplaces, this.reduceData.recommendProducingSteamFuelReplace, this.reduceData.producingSteamFuelReduce]
      this.producingList = [this.producingMovingCombustion, this.producingSteamFuel]
      console.log(this.reduceData);
    }, 1000);


    // 碳中和的mounted
    if (localStorage.getItem("treeList") !== null && localStorage.getItem("treeList") !== {} && localStorage.getItem("treeList") !== undefined) {
      this.treeList = JSON.parse(localStorage.getItem("treeList"))
    }

    if (localStorage.getItem("grassList") !== null && localStorage.getItem("grassList") !== {} && localStorage.getItem("grassList") !== undefined) {
      this.grassList = JSON.parse(localStorage.getItem("grassList"))
    }

    this.getForestsData()
    this.getMeadowWetland()
    this.getCarbonNeutralization()

  }
}
</script>

<style scoped>
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
  width: 95%;
  min-height: 300px; /* 设置初始高度 */
  max-height: 92vh;
  margin-top: 2%;
  /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
  display: flex;
  overflow: hidden;

  border-radius: var(--radius-20);
  background: linear-gradient(to right bottom,
  rgba(255, 255, 255, 0.45),
  rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(1px);
  box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
}

.dashboard-container-middle {
  width: 100%;
  /*height: fit-content;*/
  min-height: 100%;
  padding-left: 1%;
  padding-right: 1%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;

  /*在火狐浏览器中隐藏滚动条*/
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
}

/* 隐藏滚动条 */
.dashboard-container-middle::-webkit-scrollbar {
  width: 0em;
  background-color: #F5F5F5;
}

/* 滚动条滑块 */
.dashboard-container-middle::-webkit-scrollbar-thumb {
  background-color: #000000;
  opacity: 0.7;
  max-height: 50px;
}

.dashboard-charts-top-text-container {
  width: 95%;
  min-height: 220px;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--youth-green-2);
  border-radius: var(--radius-20) var(--radius-20) 0 0;
  position: relative;
}

.dashboard-charts-top-topic-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: fit-content;
  gap: 15px;
  text-align: center;
}

.dashboard-charts-top-topic-line {
  width: 150px;
  border: #ffffff 1px solid;
}

.dashboard-charts-top-topic {
  font-size: var(--fs-2);
  color: white;
  font-weight: var(--fw-600);
  letter-spacing: 5px;
  font-family: var(--ff-almm);
}

.dashboard-charts-top-text {
  font-size: var(--fs-8);
  color: white;
  letter-spacing: 1px;
  margin-top: 2%;
  line-height: 25px;
  width: 80%;
}

.dashboard-charts-body-container {
  width: 95%;
  height: fit-content;
  /*min-height: 30%;*/
  background: rgba(255, 255, 255, .6);
  border-radius: 0 0 var(--radius-20) var(--radius-20);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
}

.dashboard-charts-body-container-note {
  display: flex;
  width: 86%;
  height: fit-content;
  padding: 15px 24px;
  background-color: #fdeeea;
  border-radius: var(--radius-20);
  margin-top: 3%;
  flex-direction: column;
  letter-spacing: 1px;
  gap: 8px;
  color: #6e6d6d;
  box-shadow: var(--shadow-3);
}

.dashboard-charts-body-container-note-top {
  display: flex;
  align-items: center;
  color: orange;
  font-weight: var(--fw-600);
  font-size: var(--fs-6);
  letter-spacing: 3px;
  gap: 3px;
}

.dashboard-charts-body-container-note-top ion-icon {
  font-size: var(--fs-5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dashboard-charts-body-container-note span {
  display: flex;
  align-items: center;
  color: orange;
  letter-spacing: 1px;
}

.dashboard-charts-body-container-line {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: fit-content;
  gap: 15px;
}

.dashboard-charts-body-container-target-year-container {
  height: fit-content;
  margin-top: 1%;
}

.dashboard-charts-body-container-target-year {
  padding: 10px 25px;
  width: fit-content;
  height: fit-content;
  background-color: var(--youth-green);
  border-radius: var(--radius-20);
  color: white;
  letter-spacing: 1px;
  font-weight: var(--fw-600);
  cursor: pointer;
  box-shadow: var(--shadow-4);
}

.dashboard-charts-body-container-target-year:hover {
  transform: translateY(-3px);
  transition: var(--transition-3);
}

.dashboard-charts-top-text-container-switch {
  width: 250px;
  height: 50px;
  background-color: #fff;
  border-radius: var(--radius-20);
  box-shadow: var(--shadow-6);
  position: absolute;
  bottom: -10%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dashboard-charts-top-text-container-switch-item {
  width: 115px;
  height: 40px;
  background-color: #fff;
  border-radius: var(--radius-20);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: var(--fw-600);
  letter-spacing: 2px;
}

.switch-item-selected {
  background-color: #aebeff;
  color: white;
}

.dashboard-charts-body-container-neu-container {
  display: grid;
  grid-template-columns: 4.2fr 5.8fr;
  align-items: center;
  justify-content: center;
  width: 90%;
  min-height: 400px;
  border-radius: var(--radius-20);
  margin-top: 3%;
  gap: 3%;
}

.dashboard-charts-body-container-neu-container-left {
  width: 100%;
  min-height: 500px;
  border-radius: var(--radius-20);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: flex-start;
}


.dashboard-charts-body-container-neu-container-left-select-container {
  width: 100%;
  height: 150px;
  border-radius: var(--radius-20);
  box-shadow: var(--shadow-2);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, .6);
  gap: 20px;
}

.dashboard-charts-body-container-neu-container-left-select-container-body {
  width: 90%;
}

.dashboard-charts-body-container-neu-container-left-select-container-topic {
  width: 98%;
  height: 75px;
  display: flex;
  align-items: center;
  font-size: var(--fs-5);
  font-weight: var(--fw-600);
  color: #3a3a3a;
  letter-spacing: 1px;
  gap: 10px;
}

.dashboard-charts-body-container-neu-container-left-select-container-topic ion-icon {
  font-size: var(--fs-4);
}

.dashboard-charts-body-container-neu-container-left-select {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: var(--fs-4);
  font-weight: var(--fw-600);
  gap: 10px;
}

.dashboard-charts-body-container-neu-container-left-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  background-color: var(--youth-green);
  box-shadow: var(--shadow-6);
  border-radius: var(--radius-10);
  color: white;
  font-size: var(--fs-6);
  font-weight: var(--fw-600);
  cursor: pointer;
  letter-spacing: 2px;
  gap: 8px;
}

.dashboard-charts-body-container-neu-container-left-submit:hover {
  transform: translateY(-3px);
  transition: var(--transition-2);
  background-color: rgb(126, 206, 163);
}

.dashboard-charts-body-container-neu-container-left-result {
  width: 90%;
  min-height: 280px;
  border-radius: var(--radius-20);
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(255, 255, 255, .7);
  padding: 20px;
  margin-bottom: 3%;
}

.dashboard-charts-body-container-neu-container-right {
  width: 98%;
  height: fit-content;
  align-items: center;
  display: flex;
  align-self: flex-start;
  flex-direction: column;

}

.dashboard-charts-body-container-neu-container-right-body {
  width: 90%;
  min-height: 280px;
  border-radius: var(--radius-20);
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(255, 255, 255, .7);
  padding: 20px;
  margin-bottom: 3%;

  /*在火狐浏览器中隐藏滚动条*/
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
}

el-table {
  /*在火狐浏览器中隐藏滚动条*/
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
}

/* 隐藏滚动条 */
.dashboard-charts-body-container-neu-container-right-body el-table::-webkit-scrollbar {
  width: 0em;
  background-color: #F5F5F5;
}

/* 滚动条滑块 */
.dashboard-charts-body-container-neu-container-right-body el-table::-webkit-scrollbar-thumb {
  background-color: #000000;
  opacity: 0.7;
  max-height: 50px;
}

.dashboard-charts-body-container-neu-container-right-body el-table {
  border-radius: var(--radius-20);

}

.dashboard-charts-body-container-neu-container-right-item {
  display: flex;
  align-items: center;
  width: 85%;
  height: fit-content;
  padding: 20px 28px;
  background-color: rgba(255, 255, 255, .7);
  border-radius: var(--radius-20);
  gap: 20px;
  box-shadow: var(--shadow-2);
  position: relative;
}

.dashboard-charts-body-container-neu-container-right-item-name {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  letter-spacing: 2px;
  font-size: var(--fs-3);
  font-weight: var(--fw-600);
  font-family: var(--ff-almm);
}

.dashboard-charts-body-container-neu-container-right-item-type {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 9px;
  background-color: var(--youth-green);
  border-radius: var(--radius-20);
  box-shadow: var(--shadow-3);
  font-size: 8px;
  color: white;
}

.dashboard-charts-body-container-neu-container-right-item-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-pink);
  border-radius: var(--radius-6);
  box-shadow: var(--shadow-3);
  font-size: var(--fs-8);
  gap: 5px;
  width: 80px;
  height: 35px;
  color: white;
  position: absolute;
  right: 5%;
  cursor: pointer;
}

.dashboard-charts-body-container-neu-container-right-nodata {
  width: 90%;
  /*background-color: rgba(255,255,255,.6);*/
  border-radius: var(--radius-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  box-shadow: var(--shadow-2);
  margin-bottom: 3%;

  height: fit-content;
  padding: 15px 24px;
  background-color: #fdeeea;
  letter-spacing: 1px;
  gap: 8px;
  /*color: #6e6d6d;*/
  color: orange;
}

.dashboard-charts-body-container-neu-container-right-text {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  font-size: var(--fs-8);
  letter-spacing: 1px;
  color: #969696;
  line-height: 20px;
}

.date-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.date-enter-btn {
  width: 24%;
  height: 38px;
  background-color: var(--youth-blue-purple);
  color: white;
  border-radius: var(--radius-10);
  box-shadow: var(--shadow-4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-7);
  cursor: pointer;
}

.daylong {
  font-weight: var(--fw-600);
  font-family: var(--ff-almm);
  letter-spacing: 1px;
}



/*碳减排的CSS*/

.collection {
  margin-top: 5%;
  width: 90%;
  height: 520px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgb(205, 205, 205);
  background-color: rgba(255, 255, 255, .6)
}

.collection h1 {
  text-align: center;
  font-size: var(--fs-2);
  font-weight: var(--fw-600);
  letter-spacing: 4px;
  font-family: var(--ff-almm);
  margin-top: 2%;
  margin-bottom: 1%;
}

.lessBox {
  width: 100%;
  height: 85%;
  overflow-y: scroll;
}

.lessBox::-webkit-scrollbar {
  width: 0px;
}

.lessItem {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  margin-bottom: 2%;
}

.lessItem h2 {
  text-align: left;
  margin-left: 4.5%;
}

.bottomBox {
  display: flex;
  align-items: center;
  margin-left: 4.5%;
  width: 95%;
  height: 100px;
  margin-bottom: 2%;
}

.moveBox {
  position: absolute;
  text-align: center;
  font-weight: 700;
  left: 140px;
  top: 0px;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  color: #4db543;
  box-shadow: 0 0 5px rgb(227, 227, 227);
  background-color: #ffffff;
}

.itemBoxFirst {
  margin-right: 2%;
  margin-top: 1%;
  width: 17%;
  height: 70%;
  border-radius: 10px;
  background-color: rgb(179, 156, 255);
  box-shadow: 0 0 5px rgb(196, 196, 196);
  user-select: none;
}

.itemBoxFirst h3 {
  margin-top: 3px;
  font-size: 10px;
  text-align: center;
  font-weight: 800;
  color: rgb(175, 228, 139);
}

.itemBoxFirst .itemCircle {
  display: inline-block;
  margin-left: 9%;
  width: 35px;
  height: 35px;
  font-size: 20px;
  text-align: center;
  line-height: 35px;
  border-radius: 30px;
  color: rgb(147, 114, 255);
  background-color: #ffffff;
}

.itemBoxFirst .itemRight {
  display: inline-block;
  margin-left: 10px;
  width: fit-content;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
}

.rightBox {
  /* display: grid;
  grid-template-columns: 1fr,1fr,1fr !important; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;

}

.itemBox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
  margin-right: 2%;
  width: 15%;
  height: 40%;
  border-radius: 10px;
  background-color: #e9e9e9;
}

.itemCircle {
  display: inline-block;
  text-align: center;
  line-height: 25px;
  width: 25px;
  height: 25px;
  font-size: 15px;
  border-radius: 25px;
  background-color: #ffffff;
}

.itemRight {
  display: inline-block;
  margin-left: 10px;
  width: fit-content;
  font-size: 12px;
  color: #6c6c6c;
}


@media (max-width: 1300px) {
  .dashboard-charts-body-container-neu-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    width: 90%;
    min-height: 400px;
    border-radius: var(--radius-20);
    margin-top: 3%;
    gap: 3%;
  }
}

@media (max-width: 965px) {
  .dashboard-charts-top-text-container {
    width: 95%;
    min-height: 220px;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-20) var(--radius-20) 0 0;
    position: relative;
  }

  .dashboard-charts-top-topic-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: fit-content;
    gap: 15px;
    text-align: center;
  }

  .dashboard-charts-top-topic-line {
    width: 100px;
    border: #ffffff 1px solid;
  }

  .dashboard-charts-top-topic {
    font-size: var(--fs-3);
    color: white;
    font-weight: var(--fw-600);
    letter-spacing: 5px;
    font-family: var(--ff-almm);
  }

  .dashboard-charts-top-text {
    font-size: var(--fs-8);
    color: white;
    letter-spacing: 1px;
    margin-top: 2%;
    line-height: 25px;
    width: 80%;
  }
}

@media (max-width: 745px) {
  .dashboard-charts-top-text-container {
    width: 95%;
    min-height: 220px;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-20) var(--radius-20) 0 0;
    position: relative;
  }

  .dashboard-charts-top-topic-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: fit-content;
    gap: 15px;
    text-align: center;
  }

  .dashboard-charts-top-topic-line {
    width: 60px;
    border: #ffffff 1px solid;
    display: none;
  }

  .dashboard-charts-top-topic {
    font-size: var(--fs-3);
    color: white;
    font-weight: var(--fw-600);
    letter-spacing: 5px;
    font-family: var(--ff-almm);
  }

  .dashboard-charts-top-text {
    font-size: var(--fs-8);
    color: white;
    letter-spacing: 1px;
    margin-top: 2%;
    line-height: 20px;
    width: 80%;
  }

  .dashboard-charts-body-container-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: fit-content;
    gap: 2px;
  }

}

@media (max-width: 500px) {
  .dashboard-charts-top-text-container {
    width: 95%;
    min-height: 220px;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--youth-green-2);
    border-radius: var(--radius-20) var(--radius-20) 0 0;
    position: relative;
  }

  .dashboard-charts-top-topic-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: fit-content;
    gap: 15px;
    text-align: center;
  }

  .dashboard-charts-top-topic-line {
    width: 60px;
    border: #ffffff 1px solid;
    display: none;
  }

  .dashboard-charts-top-topic {
    font-size: var(--fs-3);
    color: white;
    font-weight: var(--fw-600);
    letter-spacing: 5px;
    font-family: var(--ff-almm);
  }

  .dashboard-charts-top-text {
    font-size: var(--fs-8);
    color: white;
    letter-spacing: 1px;
    margin-top: 2%;
    line-height: 15px;
    width: 80%;
  }
}
</style>