<template>
  <div class="body">
    <div class="dashboard-container">
      <DashboardLeft/>

      <div class="dashboard-container-main stop-select">
        <div class="dashboard-container-main-title">
          <div class="dashboard-container-main-title-main">
            请选择您当前需要使用的服务
          </div>
        </div>

        <div class="dashboard-container-main-list">
          <div class="dashboard-container-main-list-item" @click="toService(item.url)" v-for="(item,index) in services"
               :key="index">
            <div class="dashboard-container-main-list-item-top">
              <div :class="['dashboard-container-main-list-item-top-icon-container',icons[index % 4].class]">
                <div class="dashboard-container-main-list-item-top-icon">
                  <ion-icon :name="icons[index % 4].name"></ion-icon>
                </div>
              </div>
              <div class="dashboard-container-main-list-item-top-name">
                {{ item.serviceName }}
              </div>
              <div class="dashboard-container-main-list-item-top-name-sub">
                {{ item.time }} 到期
              </div>
            </div>
            <div class="dashboard-container-main-list-item-bottom">
              <div class="dashboard-container-main-list-item-btn">
                <span>进入服务</span>
                <ion-icon name="chevron-forward"></ion-icon>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-container-placeholder"></div>

      </div>

    </div>

    <PopComponent ref="pop"/>

  </div>
</template>

<script>
import DashboardLeft from "../../../../src/components/DashboardComponents/Left/index.vue"
import PopComponent from "@/components/pop/PopComponent";

export default {
  name: "index",
  components: {
    DashboardLeft,
    PopComponent
  },
  data() {
    return {
      CarbonFootprintDto: {
        "materialCollectDto": {
          "chemicalSubstancesUsingDto": {
            "additive": {
              "additiveName": "string",
              "consumption": 0.5,
              "fuelCO2Coefficient": 0.5
            },
            "adipicAcid": {
              "consumption": 0.5,
              "failureRateOfControlEquipment": 0.5,
              "materialName": "string",
              "n2OEmissionFactor": 0.5,
              "utilizationRateOfPreventionEquipment": 0.5
            },
            "calciumCarbide": {
              "consumption": 0.5,
              "fuelCO2Coefficient": 0.5,
              "materialName": "string"
            },
            "cement": {
              "clinkerToCementRatio": 0.5,
              "consumption": 0.5,
              "materialName": "string",
              "measurementRatioOfCO2ToCaCO3": 0.5,
              "metricTonsOfRawMaterialUsedPerMetricTonOfClinker": 0.5,
              "theProportionOfLimeCaCO3InRawMaterial": 0.5
            },
            "difluoroChloromethane": {
              "consumption": 0.5,
              "failureRateOfControlEquipment": 0.5,
              "hfc23EmissionFactor": 0.5,
              "materialName": "string",
              "utilizationRateOfPreventionEquipment": 0.5
            },
            "lime": {
              "caOrCaoMgOcontent": 0.5,
              "consumption": 0.5,
              "materialName": "string",
              "stoichiometricRatio": 0.5
            },
            "metal": {
              "carbonContain": 0.5,
              "co2ConversionFactor": 0.5,
              "consumption": 0.5,
              "metalName": "string"
            },
            "nitricAcid": {
              "consumption": 0.5,
              "failureRateOfControlEquipment": 0.5,
              "materialName": "string",
              "n2OEmissionFactor": 0.5,
              "utilizationRateOfPreventionEquipment": 0.5
            },
            "outSellContainCarbon": {
              "consumption": 0.5,
              "fuelCO2Coefficient": 0.5,
              "outSellContainCarbonName": "string"
            },
            "siliconCarbide": {
              "carbonContent": 0.5,
              "consumption": 0.5,
              "materialName": "string",
              "theProportioOfCarbonFixedInTheProduct": 0.5
            },
            "slaggingAgent": {
              "co2DisChargeCoefficient": 0.5,
              "consumption": 0.5,
              "fineness": 0.5,
              "slaggingAgentName": "string"
            },
            "sodiumCarbide": {
              "consumption": 0.5,
              "fuelCO2Coefficient": 0.5,
              "materialName": "string"
            }
          },
          "fuelDto": [{
            "fuelName": "原料煤",
            "fuelUsage": 0.5
          }],
          "powerConsumption": 0.5,
          "steamFuelDto": [{
            "steamFuelName": "原料煤",
            "steamFuelUsage": 0.5
          }],
          "translationDto": [{
            "translationFuelCollect": "原料煤",
            "translationFuelUsage": 0.5
          }],
          "wasteHandleDto": {
            "septicTanKDto": {
              "disChargeCoefficient": 0.5,
              "disChargeCoefficientCollect": "string",
              "emissions": 0.5,
              "employeeSewage": 0.5,
              "employeeWorkTime": 0.5,
              "septicTanKProductiveness": 0.5,
              "sewagePotent": 0.5,
              "workDate": 0.5
            },
            "voCsDto": {
              ch4First: {
                "voscPotency": 0.5
              },
              ch4Second: {
                "ch4Potency": 0.5,
                "combustionEquipmentEfficiency": 0.5,
                "supplementRateOfExhaustGasSupplementSystem": 0.5
              },
              co2First: {
                "co2DisChargeCoefficient": 0.5,
                "combustionEquipmentEfficiency": 0.5,
                "supplementRateOfExhaustGasSupplementSystem": 0.5
              },
              co2Second: {
                "combustionEquipmentEfficiency": 0.5,
                "supplementRateOfExhaustGasSupplementSystem": 0.5,
                "voscPotency": 0.5
              },
              "vocsEmissions": 0.5
            },
            "wasteBuryDto": {
              "combustionEquipmentEfficiency": 0.5,
              "disChargeCoefficient": 0.5,
              "emissions": 0.5,
              "moistureContent": 0.5,
              "quantity": 0.5,
              "supplementRateOfExhaustGasSupplementSystem": 0.5,
              "wasteCategory": "string"
            },
            "wasteIncinerateDto": {
              "carbonContent": 0.5,
              "disChargeCoefficient": 0.5,
              "emissions": 0.5,
              "quantity": 0.5,
              "wasteCategory": "string"
            },
            "wasteWaterDto": {
              "combustionEquipmentEfficiency": 0.5,
              "containPotency": 0.5,
              "disChargeCoefficient": 0.5,
              "emissions": 0.5,
              "equipmentName": "string",
              "removePotency": 0.5,
              "supplementRateOfCH4SupplementSystem": 0.5,
              "wasteWaterCategory": "string"
            }
          }
        },
        "materialProcessing": {
          "chemicalSubstancesUsingDto": {
            "additive": {
              "additiveName": "string",
              "consumption": 0.5,
              "fuelCO2Coefficient": 0.5
            },
            "adipicAcid": {
              "consumption": 0.5,
              "failureRateOfControlEquipment": 0.5,
              "materialName": "string",
              "n2OEmissionFactor": 0.5,
              "utilizationRateOfPreventionEquipment": 0.5
            },
            "calciumCarbide": {
              "consumption": 0.5,
              "fuelCO2Coefficient": 0.5,
              "materialName": "string"
            },
            "cement": {
              "clinkerToCementRatio": 0.5,
              "consumption": 0.5,
              "materialName": "string",
              "measurementRatioOfCO2ToCaCO3": 0.5,
              "metricTonsOfRawMaterialUsedPerMetricTonOfClinker": 0.5,
              "theProportionOfLimeCaCO3InRawMaterial": 0.5
            },
            "difluoroChloromethane": {
              "consumption": 0.5,
              "failureRateOfControlEquipment": 0.5,
              "hfc23EmissionFactor": 0.5,
              "materialName": "string",
              "utilizationRateOfPreventionEquipment": 0.5
            },
            "lime": {
              "caOrCaoMgOcontent": 0.5,
              "consumption": 0.5,
              "materialName": "string",
              "stoichiometricRatio": 0.5
            },
            "metal": {
              "carbonContain": 0.5,
              "co2ConversionFactor": 0.5,
              "consumption": 0.5,
              "metalName": "string"
            },
            "nitricAcid": {
              "consumption": 0.5,
              "failureRateOfControlEquipment": 0.5,
              "materialName": "string",
              "n2OEmissionFactor": 0.5,
              "utilizationRateOfPreventionEquipment": 0.5
            },
            "outSellContainCarbon": {
              "consumption": 0.5,
              "fuelCO2Coefficient": 0.5,
              "outSellContainCarbonName": "string"
            },
            "siliconCarbide": {
              "carbonContent": 0.5,
              "consumption": 0.5,
              "materialName": "string",
              "theProportioOfCarbonFixedInTheProduct": 0.5
            },
            "slaggingAgent": {
              "co2DisChargeCoefficient": 0.5,
              "consumption": 0.5,
              "fineness": 0.5,
              "slaggingAgentName": "string"
            },
            "sodiumCarbide": {
              "consumption": 0.5,
              "fuelCO2Coefficient": 0.5,
              "materialName": "string"
            }
          },
          "materialConsumptions": [
            {
              "dosage": 0.5,
              "materialName": "原油"
            }
          ],
          "powerConsumption": 0.5,
          "steamFuelDto": [{
            "steamFuelName": "原料煤",
            "steamFuelUsage": 0.5
          }],
          "translationDto": [{
            "translationFuelCollect": "原料煤",
            "translationFuelUsage": 0.5
          }],
          "wasteHandleDto": {
            "septicTanKDto": {
              "disChargeCoefficient": 0.5,
              "disChargeCoefficientCollect": "string",
              "emissions": 0.5,
              "employeeSewage": 0.5,
              "employeeWorkTime": 0.5,
              "septicTanKProductiveness": 0.5,
              "sewagePotent": 0.5,
              "workDate": 0.5
            },
            "voCsDto": {
              "ch4First": {
                "voscPotency": 0.5
              },
              "ch4Second": {
                "ch4Potency": 0.5,
                "combustionEquipmentEfficiency": 0.5,
                "supplementRateOfExhaustGasSupplementSystem": 0.5
              },
              "co2First": {
                "co2DisChargeCoefficient": 0.5,
                "combustionEquipmentEfficiency": 0.5,
                "supplementRateOfExhaustGasSupplementSystem": 0.5
              },
              "co2Second": {
                "combustionEquipmentEfficiency": 0.5,
                "supplementRateOfExhaustGasSupplementSystem": 0.5,
                "voscPotency": 0.5
              },
              "vocsEmissions": 0.5
            },
            "wasteBuryDto": {
              "combustionEquipmentEfficiency": 0.5,
              "disChargeCoefficient": 0.5,
              "emissions": 0.5,
              "moistureContent": 0.5,
              "quantity": 0.5,
              "supplementRateOfExhaustGasSupplementSystem": 0.5,
              "wasteCategory": "string"
            },
            "wasteIncinerateDto": {
              "carbonContent": 0.5,
              "disChargeCoefficient": 0.5,
              "emissions": 0.5,
              "quantity": 0.5,
              "wasteCategory": "string"
            },
            "wasteWaterDto": {
              "combustionEquipmentEfficiency": 0.5,
              "containPotency": 0.5,
              "disChargeCoefficient": 0.5,
              "emissions": 0.5,
              "equipmentName": "string",
              "removePotency": 0.5,
              "supplementRateOfCH4SupplementSystem": 0.5,
              "wasteWaterCategory": "string"
            }
          }
        },
        "processedGoodsDto": {
          "chemicalSubstancesUsingDto": {
            "additive": {
              "additiveName": "string",
              "consumption": 0.5,
              "fuelCO2Coefficient": 0
            },
            "adipicAcid": {
              "consumption": 0.5,
              "failureRateOfControlEquipment": 0.5,
              "materialName": "string",
              "n2OEmissionFactor": 0.5,
              "utilizationRateOfPreventionEquipment": 0.5
            },
            "calciumCarbide": {
              "consumption": 0.5,
              "fuelCO2Coefficient": 0.5,
              "materialName": "string"
            },
            "cement": {
              "clinkerToCementRatio": 0.5,
              "consumption": 0.5,
              "materialName": "string",
              "measurementRatioOfCO2ToCaCO3": 0.5,
              "metricTonsOfRawMaterialUsedPerMetricTonOfClinker": 0.5,
              "theProportionOfLimeCaCO3InRawMaterial": 0.5
            },
            "difluoroChloromethane": {
              "consumption": 0.5,
              "failureRateOfControlEquipment": 0.5,
              "hfc23EmissionFactor": 0.5,
              "materialName": "string",
              "utilizationRateOfPreventionEquipment": 0.5
            },
            "lime": {
              "caOrCaoMgOcontent": 0.5,
              "consumption": 0.5,
              "materialName": "string",
              "stoichiometricRatio": 0.5
            },
            "metal": {
              "carbonContain": 0.5,
              "co2ConversionFactor": 0.5,
              "consumption": 0.5,
              "metalName": "string"
            },
            "nitricAcid": {
              "consumption": 0.5,
              "failureRateOfControlEquipment": 0.5,
              "materialName": "string",
              "n2OEmissionFactor": 0.5,
              "utilizationRateOfPreventionEquipment": 0.5
            },
            "outSellContainCarbon": {
              "consumption": 0.5,
              "fuelCO2Coefficient": 0.5,
              "outSellContainCarbonName": "string"
            },
            "siliconCarbide": {
              "carbonContent": 0.5,
              "consumption": 0.5,
              "materialName": "string",
              "theProportioOfCarbonFixedInTheProduct": 0.5
            },
            "slaggingAgent": {
              "co2DisChargeCoefficient": 0.5,
              "consumption": 0.5,
              "fineness": 0.5,
              "slaggingAgentName": "string"
            },
            "sodiumCarbide": {
              "consumption": 0.5,
              "fuelCO2Coefficient": 0.5,
              "materialName": "string"
            }
          },
          "outSellPowerConsumption": 0.5,
          "outSellSteamFuelDto": [{
            "steamFuelName": "原料煤",
            "steamFuelUsage": 0.5
          }],
          "powerConsumption": 0.5,
          "purchasePowerConsumption": 0.5,
          "purchaseSteamFuelDto": [{
            "steamFuelName": "原料煤",
            "steamFuelUsage": 0.5
          }],
          "steamFuelDto": [{
            "steamFuelName": "原料煤",
            "steamFuelUsage": 0.5
          }],
          "translationDto": [{
            "translationFuelCollect": "原料煤",
            "translationFuelUsage": 0.5
          }],
          "useOfProcessedGoods": [
            {
              "processedGoodsCH4Coefficient": 0.5,
              "processedGoodsCO2Coefficient": 0.5,
              "processedGoodsN2OCoefficient": 0.5,
              "processedGoodsName": "原料煤",
              "processedGoodsUsage": 0.5
            }
          ],
          "wasteHandleDto": {
            "septicTanKDto": {
              "disChargeCoefficient": 0.5,
              "disChargeCoefficientCollect": "string",
              "emissions": 0.5,
              "employeeSewage": 0.5,
              "employeeWorkTime": 0.5,
              "septicTanKProductiveness": 0.5,
              "sewagePotent": 0.5,
              "workDate": 0.5
            },
            "voCsDto": {
              "ch4First": {
                "voscPotency": 0.5
              },
              "ch4Second": {
                "ch4Potency": 0.5,
                "combustionEquipmentEfficiency": 0.5,
                "supplementRateOfExhaustGasSupplementSystem": 0.5
              },
              "co2First": {
                "co2DisChargeCoefficient": 0.5,
                "combustionEquipmentEfficiency": 0.5,
                "supplementRateOfExhaustGasSupplementSystem": 0.5
              },
              "co2Second": {
                "combustionEquipmentEfficiency": 0.5,
                "supplementRateOfExhaustGasSupplementSystem": 0.5,
                "voscPotency": 0.5
              },
              "vocsEmissions": 0.5
            },
            "wasteBuryDto": {
              "combustionEquipmentEfficiency": 0.5,
              "disChargeCoefficient": 0.5,
              "emissions": 0.5,
              "moistureContent": 0.5,
              "quantity": 0.5,
              "supplementRateOfExhaustGasSupplementSystem": 0.5,
              "wasteCategory": "string"
            },
            "wasteIncinerateDto": {
              "carbonContent": 0.5,
              "disChargeCoefficient": 0.5,
              "emissions": 0.5,
              "quantity": 0.5,
              "wasteCategory": "string"
            },
            "wasteWaterDto": {
              "combustionEquipmentEfficiency": 0.5,
              "containPotency": 0.5,
              "disChargeCoefficient": 0.5,
              "emissions": 0.5,
              "equipmentName": "string",
              "removePotency": 0.5,
              "supplementRateOfCH4SupplementSystem": 0.5,
              "wasteWaterCategory": "string"
            }
          }
        },
        "timeLong": 200
      },

      icons: [
        {name: 'cloud-done', class: "icon-container-green"},
        {name: 'color-filter', class: "icon-container-blue"},
        {name: 'compass', class: "icon-container-pink"},
        {name: 'hardware-chip', class: "icon-container-orange"}
      ],
      services: [
        // {url: "/accounting", serviceName: '碳足迹核算', time: "2025-3-4"},
        // {url: "/accounting", serviceName: '碳足迹核算', time: "2025-12-14"},
        // {url: "/accounting", serviceName: '碳足迹核算', time: "2023-3-8"},
        // {url: "/accounting", serviceName: '碳足迹核算', time: "2026-5-28"},
        // {url: "/accounting", serviceName: '碳足迹核算', time: "2026-5-28"},
        // {url: "/accounting", serviceName: '碳足迹核算', time: "2026-5-28"},
        // {url: "/accounting", serviceName: '碳足迹核算', time: "2026-5-28"}
      ],
      companyId: ""
    }
  },
  async mounted() {
    if (localStorage.getItem("companyId")) {
      this.companyId = localStorage.getItem("companyId")
    }
    await this.getAllService()
  },
  methods: {
    toService(url) {
      return new Promise(((resolve, reject) => {
        if (url === "/accounting") {
          this.postRequest('/carbon-service/CarbonService/CarbonFootprint/' + this.companyId, this.CarbonFootprintDto).then(res => {
            console.log(res)
            if (res.code === "00000") {
              this.$router.push('/dashboard/gallery/service' + url)
            } else {
              this.$refs.pop.messagePopShow("你所在的组织没有订阅这个服务")
            }
            resolve()
          }).catch(error => {
            reject(error)
          })
        } else {
          this.getRequest(`carbon-service/CarbonService/getCarbonNeutralizationResultRecords/${this.companyId}`).then(res => {
            console.log(res)
            if (res.code === "00000") {
              this.$router.push('/dashboard/gallery/service' + url)
            } else {
              this.$refs.pop.messagePopShow("你所在的组织没有订阅这个服务")
            }
            resolve()
          }).catch(error => {
            reject(error)
          })
        }
      }))
    },
    getAllService() {
      return new Promise((resolve, reject) => {
        this.getRequest("/tance-service-serve/service/company/getServices/" + this.companyId).then(res => {
          console.log(res)
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].serviceId === 88888888) {
              this.services.push({
                serviceName: res.data[i].serviceName,
                url: '/accounting',
                time: res.data[i].overTime.substring(0, res.data[i].overTime.indexOf("T"))
              })
            } else if (res.data[i].serviceId === 66666666) {
              this.services.push({
                serviceName: res.data[i].serviceName,
                url: '/neutralization',
                time: res.data[i].overTime.substring(0, res.data[i].overTime.indexOf("T"))
              })
            } else if (res.data[i].serviceId === 99999999) {
              this.services.push({
                serviceName: res.data[i].serviceName,
                url: '/neutralization',
                time: res.data[i].overTime.substring(0, res.data[i].overTime.indexOf("T"))
              })
            }
          }
          resolve()
        }).catch((err) => {
          reject(err)
        })
      })
    }
  },

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
  position: relative;
  min-height: 300px; /* 设置初始高度 */
  max-height: 92vh;
  margin-top: 2%;
  /*overflow-y: auto; !* 添加滚动条以防止内容溢出 *!*/
  display: flex;
  border-radius: var(--radius-20);
  background: linear-gradient(to right bottom,
  rgba(255, 255, 255, 0.45),
  rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(1px);
  box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.08);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
}

.dashboard-container-placeholder {
  display: flex;
  width: 100%;
  min-height: 100px;
}

.dashboard-container-main {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;

  /*在火狐浏览器中隐藏滚动条*/
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
}

/* 隐藏滚动条 */
.dashboard-container-main::-webkit-scrollbar {
  width: 0em;
  background-color: #F5F5F5;
}

/* 滚动条滑块 */
.dashboard-container-main::-webkit-scrollbar-thumb {
  background-color: #000000;
  opacity: 0.7;
  max-height: 50px;
}

.dashboard-container-main-list {
  width: 80%;
  height: fit-content;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 2%;
}


.dashboard-container-main-list-item {
  width: 96%;
  height: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, .7);
  border-radius: var(--radius-20);
  box-shadow: var(--shadow-5);
  cursor: pointer;
}

.dashboard-container-main-list-item:hover {
  transform: scale(1.05);
  transition: var(--transition-3);
}

.dashboard-container-main-list-item-top {
  width: 90%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}

.dashboard-container-main-list-item-top-name {
  font-size: var(--fs-6);
  font-weight: var(--fw-600);
  letter-spacing: 1px;
  color: #626161;
}

.dashboard-container-main-list-item-top-name-sub {
  font-size: var(--fs-7);
  letter-spacing: 1px;
  color: #838383;
}

.dashboard-container-main-list-item-top-icon-container {
  margin-top: 20%;
  width: 64px;
  height: 64px;
  border-radius: var(--radius-circle);
  box-shadow: var(--shadow-4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-container-green {
  background-color: var(--youth-green-2);
}

.icon-container-blue {
  background-color: var(--youth-blue-purple);
}

.icon-container-pink {
  background-color: #fdb7c1;
}

.icon-container-orange {
  background-color: #f3c876;
}

.dashboard-container-main-list-item-top-icon {
  color: white;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dashboard-container-main-list-item-bottom {
  width: 90%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dashboard-container-main-list-item-btn {
  padding: 12px 20px;
  background-color: #e8e9ff;
  border-radius: var(--radius-30);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-4);
}

.dashboard-container-main-list-item-btn span {
  font-size: var(--fs-8);
  color: #6e6d6d;
  font-weight: var(--fw-600);
  letter-spacing: 1px;
}

.dashboard-container-main-list-item-btn ion-icon {
  font-size: var(--fs-5);
  color: #888888;
}


.dashboard-container-main-title {
  width: 60%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /*margin-bottom: 2%;*/
  margin-top: 2%;

}


.dashboard-container-main-title-main {
  font-size: var(--fs-2);
  font-weight: var(--fw-600);
  letter-spacing: 4px;
  font-family: var(--ff-almm);
  margin-bottom: 1%;
}

.dashboard-container-main-title-sub {
  color: #808080;
  letter-spacing: 2px;
  margin-top: 0.5%;
}

</style>