<template>
  <div class="dashboard-charts">
    <div class="dashboard-charts-top stop-select">
      <ion-icon class="close-icon" @click="closeCharts()" name="close-circle-outline"></ion-icon>
      <div class="dashboard-charts-top-text-container">
        <div class="dashboard-charts-top-topic-container">
          <div class="dashboard-charts-top-topic-line"></div>
          <div class="dashboard-charts-top-topic">
            碳盘查报告
          </div>
          <div class="dashboard-charts-top-topic-line"></div>
        </div>

        <div class="dashboard-charts-top-text">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;产品碳盘查报告是一份关于企业产品碳足迹的详细分析报告，包含了碳排放数据、碳足迹分析等内容。
          通过对碳排放数据的收集和分析，可以帮助企业了解自己产品各个生命周期的碳足迹以及在生产的碳排放情况，
          碳盘查报告对于企业的可持续发展战略和环保意识培养都具有重要意义。
        </div>

        <div class="dashboard-charts-top-btn" @click="gotoNeu">
          前往碳中和服务
        </div>

      </div>
    </div>

    <div class="dashboard-charts-body" ref="chartsBody">
      <div class="dashboard-target">
        <div class="body-container-ranks">
          <div v-for="(item,ind) in targets" :key="ind" class="body-container-ranks-item">
            <div class="body-container-ranks-item-top">
              <div class="body-container-ranks-item-top-icon-container">
                <ion-icon class="body-container-ranks-item-top-icon" :name="item.icon"></ion-icon>
              </div>
              <div class="body-container-ranks-item-top-text-container">
                <div class="body-container-ranks-item-top-text-title">
                  {{ item.name }}
                </div>
                <div class="body-container-ranks-item-top-text-main">
                  {{ item.data }} kg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dashboard-charts-body-container">
        <div class="charts-div">
          <div id="carbon-footprint-chart" style="width: 80%; height: 400px;z-index: 6666;"></div>
        </div>
        <div class="charts-div">
          <div ref="pieChart" style="width: 80%; height: 400px;z-index: 6666"></div>
        </div>
        <div class="charts-div">
          <div class="pie-chart" style="width: 80%; height: 400px;z-index: 6666"></div>
        </div>
        <div class="charts-div">
          <div class="carbon-footprint" style="width: 80%; height: 400px;z-index: 6666"></div>
        </div>
        <div class="charts-div">
          <div class="material-collect-result-pie" style="width: 80%; height: 400px;z-index: 6666"></div>
        </div>
        <div class="charts-div">
          <div class="material-process-result-pie" style="width: 80%; height: 400px;z-index: 6666"></div>
        </div>
        <div class="charts-div">
          <div class="material-use-result-pie" style="width: 80%; height: 400px;z-index: 6666"></div>
        </div>
      </div>

    </div>
    <div class="dashboard-container-placeholder"></div>

    <PopComponent ref="pop"/>

  </div>

</template>

<script>
import * as echarts from "echarts";
import PopComponent from "@/components/pop/PopComponent";

export default {
  name: "index",
  components: {
    PopComponent
  },
  data() {
    return {
      visualChart: true,
      targets: [
        {icon: 'caret-up-circle-outline', name: '总CO2E', name2: '销售毛利率', data: '', rankAll: '', rankSameTrade: ''},
        {icon: 'caret-back-circle-outline', name: '总CO2', name2: '销售净利率', data: '', rankAll: '', rankSameTrade: ''},
        {icon: 'caret-down-circle-outline', name: '总CH4', name2: '归属净利润', data: '', rankAll: '', rankSameTrade: ''},
        {icon: 'caret-forward-circle-outline', name: '总N2O', name2: '扣非净利润', data: '', rankAll: '', rankSameTrade: ''},
      ],
      materialCollectResultPercent: {
        co2e: 100,
        co2: 0,
        ch4: 0,
        n2O: 0
      },
      materialProcessingResultPercent: {
        co2e: 100,
        co2: 0,
        ch4: 0,
        n2O: 0
      },
      useOfProcessedGoodsPercent: {
        co2e: 100,
        co2: 0,
        ch4: 0,
        n2O: 0
      },
      totalPercent: {
        co2e: 100,
        co2: 0,
        ch4: 0,
        n2O: 0
      },
      // result: {
      //   materialCollectResult: {
      //     stationaryCombustion: 47533.5,
      //     processDischarge: 172.78645,
      //     movingCombustion: 47533.5,
      //     co2: 141902.12,
      //     co2e: 142773.28,
      //     electricHeat: 47533.5,
      //     ch4: 38.65848,
      //     n2O: 832.5
      //   },
      //   materialProcessingResult: {
      //     processDischarge: 172.78645,
      //     energyProcessingAndConversion: 0.5219,
      //     movingCombustion: 47533.5,
      //     co2: 94602.555,
      //     co2e: 95240.31,
      //     electricHeat: 47533.5,
      //     ch4: 27.215982,
      //     n2O: 610.5444
      //   },
      //   useOfProcessedGoodsResult: {
      //     processDischarge: 252.53645,
      //     movingCombustion: 47533.5,
      //     co2: 94602.13,
      //     co2e: 95319.54,
      //     electricHeat: 47533.5,
      //     ch4: 32.90848,
      //     n2O: 684.5
      //   },
      //   rangeOne: {
      //     processDischargeProportion: 0.0024928483,
      //     movingCombustionProportion: 0.59850305,
      //     co2e: 238261.94,
      //     energyProcessingAndConversionProportion: 0.19950102,
      //     stationaryCombustionProportion: 0.19950102
      //   },
      //   rangeTwo: {
      //     outSellSteamFuelDtoProportion: 0.0024561626,
      //     purchaseSteamFuelDtoProportion: 0.49999675,
      //     co2e: 95067,
      //     outSellPowerConsumptionProportion: 0.49754384,
      //     purchasePowerConsumptionProportion: 0.5
      //   },
      //   processDischargeProportion: 0.0017943293,
      //   stationaryCombustion: 47533.5,
      //   processDischarge: 598.1093,
      //   energyProcessingAndConversion: 0.5219,
      //   movingCombustion: 142600.5,
      //   movingCombustionProportion: 0.42780182,
      //   electricHeatProportion: 142600.5,
      //   co2: 331106.8,
      //   co2e: 333333.1,
      //   electricHea: 142600.5,
      //   ch4: 98.78295,
      //   n2O: 2226.3,
      //   energyProcessingAndConversionProportion: 0.0000015657012,
      //   stationaryCombustionProportion: 0.1426006
      // },
      result: {}
    }

  },
  async mounted() {
    if (localStorage.getItem("companyId")) {
      this.companyId = localStorage.getItem("companyId")
    }
    console.log("1111111111")
    await this.getCarbonFootPrintHistory()
    console.log("2222222222")
    console.log("3333333333")
    this.setChartsBodyHeight();
    window.addEventListener('resize', this.setChartsBodyHeight);
    // 使用 ECharts API 渲染图表
    console.log("4444444444")

    const chart = echarts.init(document.getElementById('carbon-footprint-chart'))

    console.log("555555")


    this.initChart();

    this.targets[0].data = this.result.co2e.toFixed(2)
    this.targets[1].data = this.result.co2.toFixed(2)
    this.targets[2].data = this.result.ch4.toFixed(2)
    this.targets[3].data = this.result.n2O.toFixed(2)

    this.totalPercent.co2 = this.result.co2 / this.result.co2e
    this.totalPercent.ch4 = this.result.ch4 / this.result.co2e
    this.totalPercent.n2O = this.result.n2O / this.result.co2e
    console.log(this.totalPercent.co2 + "%")
    console.log(this.totalPercent.ch4 + "%")
    console.log(this.totalPercent.n2O + "%")

    chart.setOption({
      title: {
        text: '产品总碳足迹扇形图',
        left: 'center',
        top: 'bottom',
        textStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          letterSpacing: 2 + 'px'
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      series: [
        {
          name: 'CO2',
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['50%', '50%'],
          data: [
            {value: this.result.co2, name: 'CO2'},
            {value: this.result.n2O, name: 'N2O'},
            {value: this.result.ch4, name: 'CH4'}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })

    const chartDom2 = document.querySelector('.pie-chart');
    const myChart2 = echarts.init(chartDom2);
    const option2 = {
      title: {
        text: '碳排放情况',
        textStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          letterSpacing: 2 + 'px'
        },
        left: 'center',
        top: '5%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['CO2', 'CH4', 'N2O']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: [
          '材料[采集]阶段',
          '材料[加工]阶段',
          '产品使用阶段'
        ]
      },
      yAxis: {
        type: 'value',
        name: '排放量（tCO2e）'
      },
      series: [
        {
          name: 'CO2',
          type: 'bar',
          stack: '总量',
          emphasis: {
            focus: 'series'
          },
          data: [this.result.materialCollectResult.co2, this.result.materialProcessingResult.co2, this.result.useOfProcessedGoodsResult.co2]
        },
        {
          name: 'CH4',
          type: 'bar',
          stack: '总量',
          emphasis: {
            focus: 'series'
          },
          data: [this.result.materialCollectResult.ch4, this.result.materialProcessingResult.ch4, this.result.useOfProcessedGoodsResult.ch4]
        },
        {
          name: 'N2O',
          type: 'bar',
          stack: '总量',
          emphasis: {
            focus: 'series'
          },
          data: [this.result.materialCollectResult.n2O, this.result.materialProcessingResult.n2O, this.result.useOfProcessedGoodsResult.n2O]
        }
      ],
      companyId: ""
    };
    myChart2.setOption(option2);


    this.renderPieChart()


    this.renderMaterialCollectResult()
    this.renderMaterialProcessingResult()
    this.renderUseOfProcessedGoodsResult()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setChartsBodyHeight);
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async getCarbonFootPrintHistory() {
      return new Promise((resolve, reject) => {
            if (this.companyId !== "" && this.companyId !== null) {
              this.getRequest("http://43.139.67.87:9998/carbon-service/CarbonService/getCarbonFootprintResultRecords/" + this.companyId).then((res) => {
                console.log("getCarbonFootPrintHistory")
                console.log(res)
                console.log("--------------------------")
                this.result = res.data
                resolve()
              }).catch((err) => {
                reject(err)
              })
            } else {
              this.$refs.pop.messagePopShow("请先选择一个组织")
              reject()
            }
          }
      )
    },
    gotoNeu() {
      // this.postRequest("/carbon-service/CarbonService/CarbonNeutralization")
      this.$router.push("/dashboard/gallery/service/neutralization")
    }
    ,
    closeCharts() {
      this.$emit('input', false)
      // this.visualChart = false
    }
    ,

    selectFuelItem(item, arrIndex) {
      const id = item.id;
      var index = this.selectFuelItemList.indexOf(id);
      console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          fuelType: item.name,
          fuelUsage: "",
          co2Emissions: "",
          co2Factor: "default",
          ch4Emissions: "",
          ch4Factor: "default",
          n2oEmissions: "",
          n2oFactor: "default",
          co2e: 0
        }
        this.tableData.push(one)
        this.selectFuelItemList.push(id)
        this.$refs.fuelItem[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem[arrIndex].style.color = "white"
        this.$refs.fuelItem[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tableData.splice(index, 1)
        this.selectFuelItemList.splice(index, 1)
        this.$refs.fuelItem[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem[arrIndex].style.color = "black"
        this.$refs.fuelItem[arrIndex].style.border = "#8f8f8f 1px solid"
      }
      console.log(this.tableData)
      console.log(this.selectFuelItemList)
    }
    ,

    renderMaterialProcessingResult() {
      const materialProcessingResult = this.result.materialProcessingResult;
      const data = [
        {name: '静置燃烧', value: materialProcessingResult.stationaryCombustion},
        {name: '能源加工消耗', value: materialProcessingResult.energyProcessingAndConversion},
        {name: '移动燃烧', value: materialProcessingResult.movingCombustion},
      ];

      const createPieChart = (data, title) => {
        // const chartDom = document.createElement('div');
        // chartDom.classList.add('material-collect-result-pie');
        // this.$el.appendChild(chartDom);

        const chartDom = document.querySelector('.material-process-result-pie');
        const myChart = echarts.init(chartDom, null, {
          width: chartDom.clientWidth,
          height: chartDom.clientHeight
        });


        // const myChart = echarts.init(chartDom);

        myChart.setOption({
          title: {
            text: title,
            left: 'center',
            top: 'bottom',
            textStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              letterSpacing: 2 + 'px'
            },
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
          },
          series: [
            {
              name: title,
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['50%', '50%'],
              data,
              label: {
                show: true,
                formatter: '{b}: {d}%'
              },
              labelLine: {
                show: true
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal: {
                  color: function (params) {
                    const colorList = [
                      '#C91E1E', '#FAD02C', '#276F86', '#0095D9', '#ED7C30', '#00BA38'
                    ];
                    return colorList[params.dataIndex % colorList.length];
                  }
                }
              },
            }
          ],
        });
      }
      createPieChart(data, "加工阶段固定燃烧，过程排放，移动燃烧碳排放量");
    }
    ,

    renderUseOfProcessedGoodsResult() {
      const useOfProcessedGoodsResult = this.result.useOfProcessedGoodsResult;
      const data = [
        {name: '生产排放', value: useOfProcessedGoodsResult.processDischarge},
        {name: '移动燃烧', value: useOfProcessedGoodsResult.movingCombustion},
      ];

      const createPieChart = (data, title) => {
        const chartDom = document.querySelector('.material-use-result-pie');
        const myChart = echarts.init(chartDom, null, {
          width: chartDom.clientWidth,
          height: chartDom.clientHeight
        });

        myChart.setOption({
          title: {
            text: title,
            left: 'center',
            top: 'bottom',
            textStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              letterSpacing: 2 + 'px'
            },
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
          },
          series: [
            {
              name: title,
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['50%', '50%'],
              data,
              label: {
                show: true,
                formatter: '{b}: {d}%'
              },
              labelLine: {
                show: true
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal: {
                  color: function (params) {
                    const colorList = [
                      '#C91E1E', '#FAD02C', '#276F86', '#0095D9', '#ED7C30', '#00BA38'
                    ];
                    return colorList[params.dataIndex % colorList.length];
                  }
                }
              },
            }
          ],
        });
      }
      createPieChart(data, "使用阶段固定燃烧，过程排放，移动燃烧碳排放量");
    }
    ,


    renderMaterialCollectResult() {
      const materialCollectResult = this.result.materialCollectResult;
      const data = [
        {name: '静置燃烧', value: materialCollectResult.stationaryCombustion},
        {name: '生产排放', value: materialCollectResult.processDischarge},
        {name: '移动燃烧', value: materialCollectResult.movingCombustion},
      ];

      const createPieChart = (data, title) => {
        const chartDom = document.querySelector('.material-collect-result-pie');
        const myChart = echarts.init(chartDom, null, {
          width: chartDom.clientWidth,
          height: chartDom.clientHeight
        });

        myChart.setOption({
          title: {
            text: title,
            left: 'center',
            top: 'bottom',
            textStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              letterSpacing: 2 + 'px'
            },
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
          },
          series: [
            {
              name: title,
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['50%', '50%'],
              data,
              label: {
                show: true,
                formatter: '{b}: {d}%'
              },
              labelLine: {
                show: true
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal: {
                  color: function (params) {
                    const colorList = [
                      '#C91E1E', '#FAD02C', '#276F86', '#0095D9', '#ED7C30', '#00BA38'
                    ];
                    return colorList[params.dataIndex % colorList.length];
                  }
                }
              },
            }
          ],
        });
      }
      createPieChart(data, "采集阶段固定燃烧，过程排放，移动燃烧碳排放量");
    }
    ,


    renderPieChart() {
      const chartDom = document.querySelector('.carbon-footprint');
      const chart = echarts.init(chartDom);
      chart.setOption({
        title: {
          text: '三阶段碳足迹占比扇形图',
          left: 'center',
          top: 'bottom',
          textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            letterSpacing: 2 + 'px'
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        series: [
          {
            name: 'CO2',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            data: [
              {value: this.result.materialCollectResult.co2e, name: '材料[采集]阶段'},
              {value: this.result.materialProcessingResult.co2e, name: '材料[加工]阶段'},
              {value: this.result.useOfProcessedGoodsResult.co2e, name: '产品使用阶段'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
    ,
    setChartsBodyHeight() {
      const chartsBody = this.$refs.chartsBody;
      const chartsTop = chartsBody.previousSibling;
      const chartsHeight = chartsBody.parentNode.offsetHeight;
      const chartsTopHeight = chartsTop.offsetHeight;
      const chartsBodyHeight = chartsHeight - chartsTopHeight;
      chartsBody.style.minHeight = `${chartsBodyHeight}px`;
    }
    ,
    initChart() {
      const chart = echarts.init(this.$refs.pieChart);

      const option = {
        title: {
          text: '各个阶段的总CO2E占比',
          left: 'center',
          top: 20,
          textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            letterSpacing: 2 + 'px'
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['范围一', '范围二'],
        },
        series: [
          {
            name: 'CO2E占比',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {value: this.result.rangeOne.co2e, name: '范围一'},
              {value: this.result.rangeTwo.co2e, name: '范围二'},
            ],
          },
        ],
      };

      chart.setOption(option);
    }
    ,
  }
}
</script>

<style scoped>
.dashboard-charts {
  width: 85%;
  min-height: 90%;
  max-height: 95%;
  /*max-height: 94%;*/
  position: absolute;
  overflow-y: scroll;
  z-index: 666;
  background-color: rgba(255, 255, 255, .98);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 3%;
  border-radius: var(--radius-20);

  /*在火狐浏览器中隐藏滚动条*/
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
}

/* 隐藏滚动条 */
.dashboard-charts::-webkit-scrollbar {
  width: 0em;
  background-color: #F5F5F5;
}

/* 滚动条滑块 */
.dashboard-charts::-webkit-scrollbar-thumb {
  background-color: #000000;
  opacity: 0.7;
  max-height: 0px;
}

.dashboard-charts-top {
  width: 100%;
  min-height: 320px;
  background-color: var(--youth-green-2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-icon {
  position: absolute;
  top: 1.5%;
  right: 1%;
  font-size: var(--fs-3-5);
  color: white;
  cursor: pointer;
}

.close-icon:hover {
  transform: rotate(720deg) scale(1.4);
  transition: var(--transition-3);
}

.dashboard-charts-top-text-container {
  width: 75%;
  height: 95%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dashboard-charts-top-topic-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
}

.dashboard-charts-top-btn {
  width: 140px;
  height: 45px;
  background-color: #ff718b;
  box-shadow: var(--shadow-3);
  border-radius: var(--radius-10);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  font-weight: var(--fw-600);
  letter-spacing: 1px;
  cursor: pointer;
}

.dashboard-charts-top-btn:hover {
  background-color: #fd8ba0;
  box-shadow: var(--shadow-6);
  transform: translateY(-5px);
  transition: var(--transition-3);
}

.dashboard-target {
  width: 100%;
  min-height: 200px;
}

.body-container-ranks {
  width: 100%;
  height: auto;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px 25px;
  justify-items: center;
}

.body-container-ranks-item {
  width: 100%;
  height: 90px;
  border-radius: var(--radius-10);
  border: var(--light-gray) 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.body-container-ranks-item:is(:hover,:focus-visible) {
  transform: scale(1.03);
  transition: var(--transition-1);
  box-shadow: var(--shadow-2);
}

.body-container-ranks-item-top {
  width: 90%;
  height: fit-content;
  display: flex;
}

.body-container-ranks-item-top-icon-container {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-8);
  background-color: #efeef8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.body-container-ranks-item-top-icon {
  width: 30px;
  height: 30px;
  color: #8c68e8;
}

.body-container-ranks-item-top-icon-container-2 {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-8);
  background-color: #efeef8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.body-container-ranks-item-top-icon-2 {
  width: 26px;
  height: 26px;
  color: #8c68e8;
}

.body-container-ranks-item-top-text-container {
  width: 60%;
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.body-container-ranks-item-top-text-title {
  color: var(--light-raisin-black);
  font-size: var(--fs-9);
}

.body-container-ranks-item-top-text-main {
  font-size: var(--fs-3-5);
  font-weight: var(--fw-700);
  font-family: var(--ff-albb-semibold);
}

.body-container-ranks-item-bottom {
  width: 90%;
  height: 40%;
  display: flex;
  align-items: flex-start;
}

.body-container-ranks-item-bottom-item {
  width: 50%;
  height: 80%;
}

.body-container-ranks-item-bottom-title {
  color: #8c8b8b;
  font-size: var(--fs-9);
  font-family: var(--ff-albb-light);
}

.body-container-ranks-item-bottom-main {
  margin-top: 2px;
  font-size: var(--fs-7);
  font-family: var(--ff-albb-semibold);
  color: black;
}

.dashboard-charts-body {
  margin-top: 3%;
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
}

.dashboard-charts-body-container {
  width: 100%;
  height: 100%;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.charts-div {
  display: flex;
  align-items: center;
  justify-content: center;
}


@media (max-width: 940px) {
  .body-container-ranks {
    width: 100%;
    height: auto;
    padding: 10px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 25px;
    justify-items: center;
  }

  .dashboard-charts-body-container {
    width: 100%;
    height: 100%;
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-top: 5%;
  }
}

@media (max-width: 760px) {
  .body-container-ranks {
    width: 100%;
    height: auto;
    padding: 10px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 25px;
    justify-items: center;
  }

  .dashboard-charts-body-container {
    width: 100%;
    height: 100%;
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr;
    gap: 60px;
    margin-top: 5%;
  }
}

@media (max-width: 700px) {
  .body-container-ranks {
    width: 100%;
    height: auto;
    padding: 10px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 25px;
    justify-items: center;
  }

  .dashboard-charts-body-container {
    width: 100%;
    height: 100%;
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr;
    gap: 60px;
    margin-top: 5%;
  }

  .body-container-ranks-item-top-text-main {
    font-size: var(--fs-5);
    font-weight: var(--fw-700);
    font-family: var(--ff-albb-semibold);
  }
}
</style>