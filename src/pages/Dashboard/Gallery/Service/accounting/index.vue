<template>
  <div class="body">
    <div class="dashboard-container">
      <DashboardLeft/>

      <div class="dashboard-container-main">

        <div class="dashboard-container-main-info">
          <div class="dashboard-container-main-info-block">
            <div class="dashboard-container-main-info-text">
              碳足迹核算
            </div>
            <div class="dashboard-container-main-info-btns">

              <div class="dashboard-container-main-info-btn btn-2" @click="calculateCarbonFoot">
                立即计算
              </div>

              <div class="dashboard-container-main-info-btn" @click="visualChart = true">
                查看报告
              </div>

            </div>
          </div>

        </div>

        <div class="dashboard-container-main-title stop-select">
          <div class="dashboard-container-main-title-main">
            原材料采集阶段
          </div>
          <div class="dashboard-container-main-title-sub">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们收集的原料采集阶段的数据通常包括供应商的基本信息、原材料的名称和数量、以及供应商的生产和交付情况等方面的数据。通过收集这些数据，我们可以帮助能源公司更好地了解他们的供应链，特别是原料采集的环节，以及对碳足迹的影响。
          </div>
          <div class="dashboard-container-main-title-list">
            <div class="dashboard-container-main-title-list-item" v-for="(item,index) in titleItemList1" :key="index">
              <ion-icon name="checkmark-circle"></ion-icon>
              <span>
                {{ item.text }}
              </span>
            </div>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              燃料使用
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在开采过程中机器使用的燃料所产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('one1')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择燃料类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-card-table">
            <table class="my-table">
              <thead>
              <tr>
                <th style="text-align:center" width="13%">燃料类型</th>
                <th style="text-align:center" width="13%">燃料使用量</th>
                <th style="text-align:center" width="21%" colspan="2">CO2</th>
                <th style="text-align:center" width="21%" colspan="2">CH4</th>
                <th style="text-align:center" width="21%" colspan="2">N2O</th>
                <th style="text-align:center" width="14%" colspan="2">CO2e</th>
              </tr>
              <tr>
                <th width="12%"></th>
                <th width="12%"></th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="13%"></th>
              </tr>
              </thead>
              <tbody v-if="tableDataCollect.length > 0">
              <tr v-for="(row, index) in tableDataCollect" :key="index" :class="{'odd-row': index%2 === 0}" ref="input">
                <td>
                  <div style="text-align:center" type="text">{{ row.fuelName }}</div>
                </td>
                <td><input style="text-align:center" type="text" v-model="row.fuelUsage"></td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.co2Emissions" disabled>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCO2Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.ch4Emissions" disabled>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCH4Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.n2oEmissions" disabled>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelN2OCoefficient"/>
                </td>
                <td>
                  <div style="text-align:center" type="text">{{ row.co2e }}</div>
                </td>
              </tr>
              </tbody>

              <tbody class="tbody-null" v-else>
              <tr class="no-data">
                <td colspan="8">
                  暂无数据，请点击右上方的“选择燃料类型”按钮添加数据吧。
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              能源消耗
            </span>
              </div>
              <div class="dashboard-container-main-card-title-text-sub">
                计算在开采过程中能源消耗所产生的温室气体的碳足迹，一般是外购电力、外购蒸汽（天然气(NG)、液化天然气(LNG)……）等部分
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('one2')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择燃料类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-card-table">
            <table class="my-table">
              <thead>
              <tr>
                <th style="text-align:center" width="13%">能源类型</th>
                <th style="text-align:center" width="13%">能源使用量</th>
                <th style="text-align:center" width="21%" colspan="2">CO2</th>
                <th style="text-align:center" width="21%" colspan="2">CH4</th>
                <th style="text-align:center" width="21%" colspan="2">N2O</th>
                <th style="text-align:center" width="14%" colspan="2">CO2e</th>
              </tr>
              <tr>
                <th width="12%"></th>
                <th width="12%"></th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="13%"></th>
              </tr>
              </thead>
              <tbody v-if="tableDataSteamCollect.length > 0">
              <tr v-for="(row, index) in tableDataSteamCollect" :key="index" :class="{'odd-row': index%2 === 0}"
                  ref="input">
                <td>
                  <div style="text-align:center" type="text">{{ row.steamFuelName }}</div>
                </td>
                <td><input style="text-align:center" type="text" v-model="row.steamFuelUsage"></td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.co2Emissions" disabled>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCO2Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.ch4Emissions" disabled>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCH4Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.n2oEmissions" disabled>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelN2OCoefficient"/>
                </td>
                <td>
                  <div style="text-align:center" type="text">{{ row.co2e }}</div>
                </td>
              </tr>
              </tbody>

              <tbody class="tbody-null" v-else>
              <tr class="no-data">
                <td colspan="8">
                  暂无数据，请点击右上方的“选择燃料类型”按钮添加数据吧。
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              原料运输
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在开采过程中运输时使用的燃料所产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('one3')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择燃料类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-card-table">
            <table class="my-table">
              <thead>
              <tr>
                <th style="text-align:center" width="13%">燃料类型</th>
                <th style="text-align:center" width="13%">燃料使用量</th>
                <th style="text-align:center" width="21%" colspan="2">CO2</th>
                <th style="text-align:center" width="21%" colspan="2">CH4</th>
                <th style="text-align:center" width="21%" colspan="2">N2O</th>
                <th style="text-align:center" width="14%" colspan="2">CO2e</th>
              </tr>
              <tr>
                <th width="12%"></th>
                <th width="12%"></th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="13%"></th>
              </tr>
              </thead>
              <tbody v-if="tableDataTranslationCollect.length > 0">
              <tr v-for="(row, index) in tableDataTranslationCollect" :key="index" :class="{'odd-row': index%2 === 0}"
                  ref="input">
                <td>
                  <div style="text-align:center" type="text">{{ row.translationFuelCollect }}</div>
                </td>
                <td><input style="text-align:center" type="text" v-model="row.translationFuelUsage"></td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.co2Emissions" disabled>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCO2Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.ch4Emissions" disabled>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCH4Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.n2oEmissions" disabled>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelN2OCoefficient"/>
                </td>
                <td>
                  <div style="text-align:center" type="text">{{ row.co2e }}</div>
                </td>
              </tr>
              </tbody>

              <tbody class="tbody-null" v-else>
              <tr class="no-data">
                <td colspan="8">
                  暂无数据，请点击右上方的“选择燃料类型”按钮添加数据吧。
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="dashboard-container-main-card small-card-200">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              消耗电能
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在加工时产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                输入消耗电量
              </div>
            </div>
          </div>

          <div class="search-box">
            <div class="search-container">
              <ion-icon name="thunderstorm-outline"></ion-icon>
              <input class="search-text" v-bind:style="inputStyle"
                     @input="saveInputToLocal('powerConsumptionCollect',$event)"
                     @focus="placeHolderOnFocus"
                     @blur="placeHolderOnBlur()"
                     type="text"
                     placeholder="请输入您消耗的电量"
                     v-model="CarbonFootprintDto.materialCollectDto.powerConsumption">
            </div>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              化学制品使用及污染物处理
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在开采过程中使用的化学制品及污染物处理所产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('one4')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择化学制品/污染物类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-div">
            <div class="dashboard-container-main-div-item" v-for="(item,index) in selectedItemsList" :key="index"
                 v-show="selectedItemsCollect[item.nameEnglish]">
              {{ item.name }}
            </div>
          </div>

        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              VOC排放源
            </span>
              </div>
              <div class="dashboard-container-main-card-title-text-sub">
                4个公式中选2个（需要在CH4的两个中选1个、CO2的两个中选1个）
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('one5')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择VOC计算公式
              </div>
            </div>
          </div>

          <div class="voc-list">
            <div class="voc-list-item" v-for="(item,index) in vocs" :key="index">
              {{ item.text }}
            </div>
          </div>

        </div>

        <div class="dashboard-container-placeholder"></div>

        <div class="dashboard-container-main-title stop-select">
          <div class="dashboard-container-main-title-main">
            产品加工阶段
          </div>
          <div class="dashboard-container-main-title-sub">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们收集的原料采集阶段的数据通常包括供应商的基本信息、原材料的名称和数量、以及供应商的生产和交付情况等方面的数据。通过收集这些数据，我们可以帮助能源公司更好地了解他们的供应链，特别是原料采集的环节，以及对碳足迹的影响。
          </div>
          <div class="dashboard-container-main-title-list">
            <div class="dashboard-container-main-title-list-item" v-for="(item,index) in titleItemList1" :key="index">
              <ion-icon name="checkmark-circle"></ion-icon>
              <span>
                {{ item.text }}
              </span>
            </div>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              原材料消耗
            </span>
              </div>
              <div class="dashboard-container-main-card-title-text-sub">
                计算在加工过程中原材料消耗所产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('two0')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择原材料类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-card-table">
            <table class="my-table">
              <thead>
              <tr>
                <th style="text-align:center" width="13%">原材料类型</th>
                <th style="text-align:center" width="13%">原材料使用量</th>
                <th style="text-align:center" width="21%" colspan="2">CO2</th>
                <th style="text-align:center" width="21%" colspan="2">CH4</th>
                <th style="text-align:center" width="21%" colspan="2">N2O</th>
                <th style="text-align:center" width="14%" colspan="2">CO2e</th>
              </tr>
              <tr>
                <th width="12%"></th>
                <th width="12%"></th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="13%"></th>
              </tr>
              </thead>
              <tbody v-if="tableMaterialConsumptionsProcess.length > 0">
              <tr v-for="(row, index) in tableMaterialConsumptionsProcess" :key="index"
                  :class="{'odd-row': index%2 === 0}"
                  ref="input">
                <td>
                  <div style="text-align:center" type="text">{{ row.materialName }}</div>
                </td>

                <td><input style="text-align:center" type="text" v-model="row.dosage"></td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.co2Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCO2Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.ch4Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCH4Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.n2oEmissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelN2OCoefficient"/>
                </td>
                <td>
                  <div style="text-align:center" type="text">{{ row.co2e }}</div>

                </td>
              </tr>
              </tbody>

              <tbody class="tbody-null" v-else>
              <tr class="no-data">
                <td colspan="8">
                  暂无数据，请点击右上方的“选择燃料类型”按钮添加数据吧。
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              能源消耗
            </span>
              </div>
              <div class="dashboard-container-main-card-title-text-sub">
                计算在开采过程中能源消耗所产生的温室气体的碳足迹，一般是外购电力、外购蒸汽（天然气(NG)、液化天然气(LNG)……）等部分
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('two2')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择燃料类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-card-table">
            <table class="my-table">
              <thead>
              <tr>
                <th style="text-align:center" width="13%">能源类型</th>
                <th style="text-align:center" width="13%">能源使用量</th>
                <th style="text-align:center" width="21%" colspan="2">CO2</th>
                <th style="text-align:center" width="21%" colspan="2">CH4</th>
                <th style="text-align:center" width="21%" colspan="2">N2O</th>
                <th style="text-align:center" width="14%" colspan="2">CO2e</th>
              </tr>
              <tr>
                <th width="12%"></th>
                <th width="12%"></th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="13%"></th>
              </tr>
              </thead>
              <tbody v-if="tableDataSteamProcess.length > 0">
              <tr v-for="(row, index) in tableDataSteamProcess" :key="index" :class="{'odd-row': index%2 === 0}"
                  ref="input">
                <td>
                  <div style="text-align:center" type="text">{{ row.steamFuelName }}</div>
                </td>

                <td><input style="text-align:center" type="text" v-model="row.steamFuelUsage"></td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.co2Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCO2Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.ch4Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCH4Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.n2oEmissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelN2OCoefficient"/>
                </td>
                <td>
                  <div style="text-align:center" type="text">{{ row.co2e }}</div>

                </td>
              </tr>
              </tbody>

              <tbody class="tbody-null" v-else>
              <tr class="no-data">
                <td colspan="8">
                  暂无数据，请点击右上方的“选择燃料类型”按钮添加数据吧。
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              交通运输
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在加工过程中运输时使用的燃料所产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('two1')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择燃料类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-card-table">
            <table class="my-table">
              <thead>
              <tr>
                <th style="text-align:center" width="13%">燃料类型</th>
                <th style="text-align:center" width="13%">燃料使用量</th>
                <th style="text-align:center" width="21%" colspan="2">CO2</th>
                <th style="text-align:center" width="21%" colspan="2">CH4</th>
                <th style="text-align:center" width="21%" colspan="2">N2O</th>
                <th style="text-align:center" width="14%" colspan="2">CO2e</th>
              </tr>
              <tr>
                <th width="12%"></th>
                <th width="12%"></th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="13%"></th>
              </tr>
              </thead>
              <tbody v-if="tableDataTranslationProcess.length > 0">
              <tr v-for="(row, index) in tableDataTranslationProcess" :key="index" :class="{'odd-row': index%2 === 0}"
                  ref="input">
                <td>
                  <div style="text-align:center" type="text">{{ row.translationFuelCollect }}</div>
                </td>

                <td><input style="text-align:center" type="text" v-model="row.translationFuelUsage"></td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.co2Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCO2Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.ch4Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCH4Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.n2oEmissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelN2OCoefficient"/>
                </td>
                <td>
                  <div style="text-align:center" type="text">{{ row.co2e }}</div>
                </td>
              </tr>
              </tbody>

              <tbody class="tbody-null" v-else>
              <tr class="no-data">
                <td colspan="8">
                  暂无数据，请点击右上方的“选择燃料类型”按钮添加数据吧。
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="dashboard-container-main-card small-card-200">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              消耗电能
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在加工时产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                输入消耗电量
              </div>
            </div>
          </div>

          <div class="search-box">
            <div class="search-container">
              <ion-icon name="thunderstorm-outline"></ion-icon>
              <input class="search-text" v-bind:style="inputStyle"
                     @input="saveInputToLocal('powerConsumptionProcess',$event)"
                     @focus="placeHolderOnFocus"
                     @blur="placeHolderOnBlur()"
                     type="text"
                     placeholder="请输入您消耗的电量"
                     v-model="CarbonFootprintDto.materialProcessing.powerConsumption">
            </div>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              化学制品使用及污染物处理
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在加工过程中使用的化学制品及污染物处理所产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('two4')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择化学制品/污染物类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-div">
            <div class="dashboard-container-main-div-item" v-for="(item,index) in selectedItemsListProcess" :key="index"
                 v-show="selectedItemsProcess[item.nameEnglish]">
              {{ item.name }}
            </div>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              VOC排放源
            </span>
              </div>
              <div class="dashboard-container-main-card-title-text-sub">
                4个公式中选2个（需要在CH4的两个中选1个、CO2的两个中选1个）
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('two3')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择VOC计算公式
              </div>
            </div>
          </div>

          <div class="voc-list">
            <div class="voc-list-item" v-for="(item,index) in vocs" :key="index">
              {{ item.text }}
            </div>
          </div>

        </div>

        <div class="dashboard-container-placeholder"></div>

        <div class="dashboard-container-main-title stop-select">
          <div class="dashboard-container-main-title-main">
            产品使用阶段
          </div>
          <div class="dashboard-container-main-title-sub">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们收集的原料采集阶段的数据通常包括供应商的基本信息、原材料的名称和数量、以及供应商的生产和交付情况等方面的数据。通过收集这些数据，我们可以帮助能源公司更好地了解他们的供应链，特别是原料采集的环节，以及对碳足迹的影响。
          </div>
          <div class="dashboard-container-main-title-list">
            <div class="dashboard-container-main-title-list-item" v-for="(item,index) in titleItemList1" :key="index">
              <ion-icon name="checkmark-circle"></ion-icon>
              <span>
                {{ item.text }}
              </span>
            </div>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              蒸汽燃料
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在开采过程中机器使用的燃料所产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three1')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择燃料类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-card-table">
            <table class="my-table">
              <thead>
              <tr>
                <th style="text-align:center" width="13%">燃料类型</th>
                <th style="text-align:center" width="13%">燃料使用量</th>
                <th style="text-align:center" width="21%" colspan="2">CO2</th>
                <th style="text-align:center" width="21%" colspan="2">CH4</th>
                <th style="text-align:center" width="21%" colspan="2">N2O</th>
                <th style="text-align:center" width="14%" colspan="2">CO2e</th>
              </tr>
              <tr>
                <th width="12%"></th>
                <th width="12%"></th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="13%"></th>
              </tr>
              </thead>
              <tbody v-if="tableDataSteamProcessed.length > 0">
              <tr v-for="(row, index) in tableDataSteamProcessed" :key="index" :class="{'odd-row': index%2 === 0}"
                  ref="input">
                <td>
                  <div style="text-align:center" type="text">{{ row.steamFuelName }}</div>
                </td>
                <td><input style="text-align:center" type="text" v-model="row.steamFuelUsage"></td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.co2Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCO2Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.ch4Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCH4Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.n2oEmissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelN2OCoefficient"/>
                </td>
                <td>
                  <div style="text-align:center" type="text">{{ row.co2e }}</div>
                </td>
              </tr>
              </tbody>

              <tbody class="tbody-null" v-else>
              <tr class="no-data">
                <td colspan="8">
                  暂无数据，请点击右上方的“选择燃料类型”按钮添加数据吧。
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              交通运输
            </span>
              </div>
              <div class="dashboard-container-main-card-title-text-sub">
                计算在使用过程中交通运输能源消耗所产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three2')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择燃料类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-card-table">
            <table class="my-table">
              <thead>
              <tr>
                <th style="text-align:center" width="13%">能源类型</th>
                <th style="text-align:center" width="13%">能源使用量</th>
                <th style="text-align:center" width="21%" colspan="2">CO2</th>
                <th style="text-align:center" width="21%" colspan="2">CH4</th>
                <th style="text-align:center" width="21%" colspan="2">N2O</th>
                <th style="text-align:center" width="14%" colspan="2">CO2e</th>
              </tr>
              <tr>
                <th width="12%"></th>
                <th width="12%"></th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="13%"></th>
              </tr>
              </thead>
              <tbody v-if="tableDataTranslationProcessed.length > 0">
              <tr v-for="(row, index) in tableDataTranslationProcessed" :key="index" :class="{'odd-row': index%2 === 0}"
                  ref="input">
                <td>
                  <div style="text-align:center" type="text">{{ row.translationFuelCollect }}</div>
                </td>

                <td><input style="text-align:center" type="text" v-model="row.translationFuelUsage"></td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.co2Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCO2Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.ch4Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCH4Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.n2oEmissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelN2OCoefficient"/>
                </td>
                <td>
                  <div style="text-align:center" type="text">{{ row.co2e }}</div>
                </td>
              </tr>
              </tbody>

              <tbody class="tbody-null" v-else>
              <tr class="no-data">
                <td colspan="8">
                  暂无数据，请点击右上方的“选择燃料类型”按钮添加数据吧。
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="dashboard-container-main-card small-card-200">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              消耗电能
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在使用时产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                输入消耗电量
              </div>
            </div>
          </div>

          <div class="search-box">
            <div class="search-container">
              <ion-icon name="thunderstorm-outline"></ion-icon>
              <input class="search-text" v-bind:style="inputStyle"
                     @input="saveInputToLocal('powerConsumptionProcessed',$event)"
                     @focus="placeHolderOnFocus"
                     @blur="placeHolderOnBlur()"
                     type="text"
                     placeholder="请输入您购入的电量"
                     v-model="CarbonFootprintDto.processedGoodsDto.powerConsumption">
            </div>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              化学制品使用及污染物处理
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在开采过程中使用的化学制品及污染物处理所产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three4')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择化学制品/污染物类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-div">
            <div class="dashboard-container-main-div-item" v-for="(item,index) in selectedItemsListProcessed"
                 :key="index"
                 v-show="selectedItemsProcessed[item.nameEnglish]">
              {{ item.name }}
            </div>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              VOC排放源
            </span>
              </div>
              <div class="dashboard-container-main-card-title-text-sub">
                4个公式中选2个（需要在CH4的两个中选1个、CO2的两个中选1个）
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three5')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择VOC计算公式
              </div>
            </div>
          </div>

          <div class="voc-list">
            <div class="voc-list-item" v-for="(item,index) in vocs" :key="index">
              {{ item.text }}
            </div>
          </div>

        </div>


        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              使用时产生
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在使用时产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three6')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择燃料类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-card-table">
            <table class="my-table">
              <thead>
              <tr>
                <th style="text-align:center" width="13%">燃料类型</th>
                <th style="text-align:center" width="13%">燃料使用量</th>
                <th style="text-align:center" width="21%" colspan="2">CO2</th>
                <th style="text-align:center" width="21%" colspan="2">CH4</th>
                <th style="text-align:center" width="21%" colspan="2">N2O</th>
                <th style="text-align:center" width="14%" colspan="2">CO2e</th>
              </tr>
              <tr>
                <th width="12%"></th>
                <th width="12%"></th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="13%"></th>
              </tr>
              </thead>
              <tbody v-if="tableDataUseOfProcessed.length > 0">
              <tr v-for="(row, index) in tableDataUseOfProcessed" :key="index" :class="{'odd-row': index%2 === 0}"
                  ref="input">
                <td>
                  <div style="text-align:center" type="text">{{ row.processedGoodsName }}</div>
                </td>

                <td><input style="text-align:center" type="text" v-model="row.processedGoodsUsage"></td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.co2Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.processedGoodsCO2Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.ch4Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.processedGoodsCH4Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.n2oEmissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.processedGoodsN2OCoefficient"/>
                </td>
                <td>
                  <div style="text-align:center" type="text">{{ row.co2e }}</div>
                </td>
              </tr>
              </tbody>

              <tbody class="tbody-null" v-else>
              <tr class="no-data">
                <td colspan="8">
                  暂无数据，请点击右上方的“选择燃料类型”按钮添加数据吧。
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div class="dashboard-container-main-card small-card-200">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              购入电力
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在使用时产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                输入购入电量
              </div>
            </div>
          </div>

          <div class="search-box">
            <div class="search-container">
              <ion-icon name="thunderstorm-outline"></ion-icon>
              <input class="search-text" v-bind:style="inputStyle"
                     @input="saveInputToLocal('purchasePower',$event)"
                     @focus="placeHolderOnFocus"
                     @blur="placeHolderOnBlur()"
                     type="text"
                     placeholder="请输入您购入的电量"
                     v-model="CarbonFootprintDto.processedGoodsDto.purchasePowerConsumption">
            </div>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              购入热力
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在使用时产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three8')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择燃料类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-card-table">
            <table class="my-table">
              <thead>
              <tr>
                <th style="text-align:center" width="13%">燃料类型</th>
                <th style="text-align:center" width="13%">燃料使用量</th>
                <th style="text-align:center" width="21%" colspan="2">CO2</th>
                <th style="text-align:center" width="21%" colspan="2">CH4</th>
                <th style="text-align:center" width="21%" colspan="2">N2O</th>
                <th style="text-align:center" width="14%" colspan="2">CO2e</th>
              </tr>
              <tr>
                <th width="12%"></th>
                <th width="12%"></th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="13%"></th>
              </tr>
              </thead>
              <tbody v-if="tablePurchaseSteamProcessed.length > 0">
              <tr v-for="(row, index) in tablePurchaseSteamProcessed" :key="index" :class="{'odd-row': index%2 === 0}"
                  ref="input">
                <td>
                  <div style="text-align:center" type="text">{{ row.steamFuelName }}</div>
                </td>

                <td><input style="text-align:center" type="text" v-model="row.steamFuelUsage"></td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.co2Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCO2Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.ch4Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCH4Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.n2oEmissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelN2OCoefficient"/>
                </td>
                <td>
                  <div style="text-align:center" type="text">{{ row.co2e }}</div>
                </td>
              </tr>
              </tbody>

              <tbody class="tbody-null" v-else>
              <tr class="no-data">
                <td colspan="8">
                  暂无数据，请点击右上方的“选择燃料类型”按钮添加数据吧。
                </td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>

        <div class="dashboard-container-main-card small-card-200">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              售出电力
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在使用时产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three9')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择燃料类型
              </div>
            </div>
          </div>

          <div class="search-box">
            <div class="search-container">
              <ion-icon name="thunderstorm-outline"></ion-icon>
              <input class="search-text" v-bind:style="inputStyle"
                     @input="saveInputToLocal('outSellPower',$event)"
                     @focus="placeHolderOnFocus"
                     @blur="placeHolderOnBlur()"
                     type="text"
                     placeholder="请输入您售出的电量"
                     v-model="CarbonFootprintDto.processedGoodsDto.outSellPowerConsumption">
            </div>
          </div>
        </div>

        <div class="dashboard-container-main-card">
          <div class="dashboard-container-main-card-title">
            <div class="dashboard-container-main-card-title-left">
              <div class="dashboard-container-main-card-title-top">
                <ion-icon name="layers"></ion-icon>
                <span class="dashboard-container-main-card-title-text">
              售出热力
            </span>
              </div>

              <div class="dashboard-container-main-card-title-text-sub">
                计算在使用时产生的温室气体的碳足迹
              </div>
            </div>
            <div class="dashboard-container-main-card-title-right">
              <div class="dashboard-container-main-card-title-right-btn" @click="openDrawer('three10')">
                <ion-icon name="navigate-circle-outline"></ion-icon>
                选择燃料类型
              </div>
            </div>
          </div>

          <div class="dashboard-container-main-card-table">
            <table class="my-table">
              <thead>
              <tr>
                <th style="text-align:center" width="13%">燃料类型</th>
                <th style="text-align:center" width="13%">燃料使用量</th>
                <th style="text-align:center" width="21%" colspan="2">CO2</th>
                <th style="text-align:center" width="21%" colspan="2">CH4</th>
                <th style="text-align:center" width="21%" colspan="2">N2O</th>
                <th style="text-align:center" width="14%" colspan="2">CO2e</th>
              </tr>
              <tr>
                <th width="12%"></th>
                <th width="12%"></th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="10.5%" style="text-align:center">排放量</th>
                <th width="10.5%" style="text-align:center">排放因子</th>
                <th width="13%"></th>
              </tr>
              </thead>
              <tbody v-if="tableSellSteamProcessed.length > 0">
              <tr v-for="(row, index) in tableSellSteamProcessed" :key="index" :class="{'odd-row': index%2 === 0}"
                  ref="input">
                <td>
                  <div style="text-align:center" type="text">{{ row.steamFuelName }}</div>
                </td>

                <td><input style="text-align:center" type="text" v-model="row.steamFuelUsage"></td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.co2Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCO2Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.ch4Emissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelCH4Coefficient"/>
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.n2oEmissions">
                </td>
                <td>
                  <input style="text-align:center" type="text" v-model="row.FuelN2OCoefficient"/>
                </td>
                <td>
                  <div style="text-align:center" type="text">{{ row.co2e }}</div>
                </td>
              </tr>
              </tbody>

              <tbody class="tbody-null" v-else>
              <tr class="no-data">
                <td colspan="8">
                  暂无数据，请点击右上方的“选择燃料类型”按钮添加数据吧。
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="dashboard-container-placeholder"></div>

      </div>

    </div>

    <div class="dashboard-drawer-right stop-select" ref="one1">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem(item,index)" ref="fuelItem"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>

    </div>
    <div class="dashboard-drawer-right stop-select" ref="one2">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem2(item,index)" ref="fuelItem2"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>

    </div>
    <div class="dashboard-drawer-right stop-select" ref="one3">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem3(item,index)" ref="fuelItem3"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>

    </div>
    <div class="dashboard-drawer-right stop-select" ref="one4">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem4(item,index)" ref="fuelItem4"
               :class="{ selected: selectedItemsCollect[item.nameEnglish] }"
               v-for="(item,index) in disChargeList" :key="index">
            {{ item.name }}
          </div>
        </div>

        <!-- 数据部分 -->
        <div v-if="selectedWastedOption" class="data-wrapper">
          <h3>{{ selectedWastedOption.name }}</h3>
          <div class="data-form" v-if="localStorageFormCollect === null">
            <div v-for="(param, index) in selectedWastedOptionParam" :key="index" class="form-group">
              <label :for="param.nameInChinese" class="form-label">{{ param.nameInChinese }}</label>
              <input :id="param.parameterName" v-model="formData[param.parameterName]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveWasted">保存</div>
              <div class="form-submit-2" @click="cancelSelected">取消选择</div>
            </div>
          </div>

          <div class="data-form" v-else>
            <div v-for="(param, index) in selectedWastedOptionParam" :key="index" class="form-group">
              <label :for="param.nameInChinese" class="form-label">{{ param.nameInChinese }}</label>
              <input :id="param.parameterName" v-model="localStorageFormCollect[param.parameterName]"
                     class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveWasted">保存</div>
              <div class="form-submit-2" @click="cancelSelected">取消选择</div>
            </div>
          </div>
        </div>

        <div style="width: 100%;min-height: 100px"></div>
      </div>

    </div>


    <div class="dashboard-drawer-right stop-select" ref="one5">
      <div class="dashboard-drawer-right-topic stop-select">
        选择你需要使用的VOC计算公式
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">


        <el-select style="width: 90%;" v-model="vocCh4" placeholder="请选择计算CH4的VOC公式"
                   @change="updateVocsCh4Form">
          <el-option
              v-for="(item,index) in vocsCH4"
              :key="index"
              :label="item.text"
              :value="item.nameEnglish">
          </el-option>
        </el-select>

        <!-- 数据部分 -->
        <div v-if="vocCh4" class="data-wrapper">
          <h3>{{ vocCh4.text }}</h3>
          <div class="data-form" v-if="vocCh4 === vocsParams[0].dtoName">
            <div v-for="(param, index) in vocsParams[0].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCh4[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveVocsCh4">保存</div>
            </div>
          </div>

          <div class="data-form" v-else>
            <div v-for="(param, index) in vocsParams[1].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCh4[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveVocsCh4">保存</div>
            </div>
          </div>
        </div>

        <div v-else style="width: 100%;height: 200px"></div>


        <el-select style="width: 90%;margin-top: 5%;" v-model="vocCo2" placeholder="请选择计算CO2的VOC公式"
                   @change="updateVocsCo2Form">
          <el-option
              v-for="(item,index) in vocsCO2"
              :key="index"
              :label="item.text"
              :value="item.nameEnglish">
          </el-option>
        </el-select>

        <!-- 数据部分 -->
        <div v-if="vocCo2" class="data-wrapper">
          <h3>{{ vocCo2.text }}</h3>
          <div class="data-form" v-if="vocCo2 === vocsParams[2].dtoName">
            <div v-for="(param, index) in vocsParams[2].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCo2[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveVocsCo2">保存</div>
            </div>
          </div>

          <div class="data-form" v-else>
            <div v-for="(param, index) in vocsParams[3].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCo2[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveWasted">保存</div>
              <!--              <div class="form-submit-2" @click="cancelSelected">取消选择</div>-->
            </div>
          </div>
        </div>


        <div style="width: 100%;min-height: 100px"></div>
      </div>

    </div>

    <!--原材料加工消耗-->
    <div class="dashboard-drawer-right stop-select" ref="two0">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台（原材料加工消耗）
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem8(item,index)" ref="fuelItem8"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <!--蒸汽燃料-->
    <div class="dashboard-drawer-right stop-select" ref="two2">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台（加工-蒸汽燃料）
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem5(item,index)" ref="fuelItem5"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <!--运输燃料-->
    <div class="dashboard-drawer-right stop-select" ref="two1">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台（运输燃料）
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem6(item,index)" ref="fuelItem6"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>

    </div>

    <!--废弃物-->
    <div class="dashboard-drawer-right stop-select" ref="two4">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem7(item,index)" ref="fuelItem7"
               :class="{ selected: selectedItemsProcess[item.nameEnglish] }"
               v-for="(item,index) in disChargeListProcess" :key="index">
            {{ item.name }}
          </div>
        </div>

        <!-- 数据部分 -->
        <div v-if="selectedWastedOptionProcess" class="data-wrapper">
          <h3>{{ selectedWastedOptionProcess.name }}</h3>
          <div class="data-form" v-if="localStorageFormProcess === null">
            <div v-for="(param, index) in selectedWastedOptionParamProcess" :key="index" class="form-group">
              <label :for="param.nameInChinese" class="form-label">{{ param.nameInChinese }}</label>
              <input :id="param.parameterName" v-model="formDataProcess[param.parameterName]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveWastedProcess">保存</div>
              <div class="form-submit-2" @click="cancelSelectedProcess">取消选择</div>
            </div>
          </div>

          <div class="data-form" v-else>
            <div v-for="(param, index) in selectedWastedOptionParamProcess" :key="index" class="form-group">
              <label :for="param.nameInChinese" class="form-label">{{ param.nameInChinese }}</label>
              <input :id="param.parameterName" v-model="localStorageFormProcess[param.parameterName]"
                     class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveWastedProcess">保存</div>
              <div class="form-submit-2" @click="cancelSelectedProcess">取消选择</div>
            </div>
          </div>
        </div>

        <div style="width: 100%;min-height: 100px"></div>
      </div>

    </div>


    <!--VOC-->
    <div class="dashboard-drawer-right stop-select" ref="two3">
      <div class="dashboard-drawer-right-topic stop-select">
        选择你需要使用的VOC计算公式
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">


        <el-select style="width: 90%;" v-model="vocCh4Process" placeholder="请选择计算CH4的VOC公式"
                   @change="updateVocsCh4FormProcess">
          <el-option
              v-for="(item,index) in vocsCH4"
              :key="index"
              :label="item.text"
              :value="item.nameEnglish">

          </el-option>
        </el-select>

        <!-- 数据部分 -->
        <div v-if="vocCh4Process" class="data-wrapper">
          <h3>{{ vocCh4Process.text }}</h3>
          <div class="data-form" v-if="vocCh4Process === vocsParams[0].dtoName">
            <div v-for="(param, index) in vocsParams[0].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCh4Process[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveVocsCh4Process">保存</div>
            </div>
          </div>

          <div class="data-form" v-else>
            <div v-for="(param, index) in vocsParams[1].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCh4Process[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveVocsCh4Process">保存</div>
            </div>
          </div>
        </div>

        <div v-else style="width: 100%;height: 200px"></div>


        <el-select style="width: 90%;margin-top: 5%;" v-model="vocCo2Process" placeholder="请选择计算CO2的VOC公式"
                   @change="updateVocsCo2FormProcess">
          <el-option
              v-for="(item,index) in vocsCO2"
              :key="index"
              :label="item.text"
              :value="item.nameEnglish">
          </el-option>
        </el-select>

        <!-- 数据部分 -->
        <div v-if="vocCo2Process" class="data-wrapper">
          <h3>{{ vocCo2Process.text }}</h3>
          <div class="data-form" v-if="vocCo2Process === vocsParams[2].dtoName">
            <div v-for="(param, index) in vocsParams[2].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCo2Process[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveVocsCo2Process">保存</div>
            </div>
          </div>

          <div class="data-form" v-else>
            <div v-for="(param, index) in vocsParams[3].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCo2Process[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveVocsCo2Process">保存</div>
              <!--              <div class="form-submit-2" @click="cancelSelected">取消选择</div>-->
            </div>
          </div>
        </div>
        <div style="width: 100%;min-height: 100px"></div>
      </div>
    </div>

    <div class="dashboard-drawer-right stop-select" ref="three1">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem9(item,index)" ref="fuelItem9"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>

    </div>

    <div class="dashboard-drawer-right stop-select" ref="three2">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem10(item,index)" ref="fuelItem10"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>

    </div>

    <div class="dashboard-drawer-right stop-select" ref="three3">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem(item,index)" ref="fuelItem"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <!--废弃物-->
    <div class="dashboard-drawer-right stop-select" ref="three4">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem11(item,index)" ref="fuelItem11"
               :class="{ selected: selectedItemsProcessed[item.nameEnglish] }"
               v-for="(item,index) in disChargeListProcessed" :key="index">
            {{ item.name }}
          </div>
        </div>

        <!-- 数据部分 -->
        <div v-if="selectedWastedOptionProcessed" class="data-wrapper">
          <h3>{{ selectedWastedOptionProcessed.name }}</h3>
          <div class="data-form" v-if="localStorageFormProcessed === null">
            <div v-for="(param, index) in selectedWastedOptionParamProcessed" :key="index" class="form-group">
              <label :for="param.nameInChinese" class="form-label">{{ param.nameInChinese }}</label>
              <input :id="param.parameterName" v-model="formDataProcessed[param.parameterName]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveWastedProcessed">保存</div>
              <div class="form-submit-2" @click="cancelSelectedProcessed">取消选择</div>
            </div>
          </div>

          <div class="data-form" v-else>
            <div v-for="(param, index) in selectedWastedOptionParamProcessed" :key="index" class="form-group">
              <label :for="param.nameInChinese" class="form-label">{{ param.nameInChinese }}</label>
              <input :id="param.parameterName" v-model="localStorageFormProcessed[param.parameterName]"
                     class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveWastedProcessed">保存</div>
              <div class="form-submit-2" @click="cancelSelectedProcessed">取消选择</div>
            </div>
          </div>
        </div>

        <div style="width: 100%;min-height: 100px"></div>
      </div>

    </div>

    <!--VOC-->
    <div class="dashboard-drawer-right stop-select" ref="three5">
      <div class="dashboard-drawer-right-topic stop-select">
        选择你需要使用的VOC计算公式
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">


        <el-select style="width: 90%;" v-model="vocCh4Processed" placeholder="请选择计算CH4的VOC公式"
                   @change="updateVocsCh4FormProcessed">
          <el-option
              v-for="(item,index) in vocsCH4"
              :key="index"
              :label="item.text"
              :value="item.nameEnglish"
          >
          </el-option>
        </el-select>

        <!-- 数据部分 -->
        <div v-if="vocCh4Processed" class="data-wrapper">
          <h3>{{ vocCh4Processed.text }}</h3>
          <div class="data-form" v-if="vocCh4Processed === vocsParams[0].dtoName">
            <div v-for="(param, index) in vocsParams[0].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCh4Processed[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveVocsCh4Processed">保存</div>
            </div>
          </div>

          <div class="data-form" v-else>
            <div v-for="(param, index) in vocsParams[1].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCh4Processed[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveVocsCh4Processed">保存</div>
            </div>
          </div>
        </div>

        <div v-else style="width: 100%;height: 200px"></div>


        <el-select style="width: 90%;margin-top: 5%;" v-model="vocCo2Processed" placeholder="请选择计算CO2的VOC公式"
                   @change="updateVocsCo2FormProcessed">
          <el-option
              v-for="(item,index) in vocsCO2"
              :key="index"
              :label="item.text"
              :value="item.nameEnglish">
          </el-option>
        </el-select>

        <!-- 数据部分 -->
        <div v-if="vocCo2Processed" class="data-wrapper">
          <h3>{{ vocCo2Processed.text }}</h3>
          <div class="data-form" v-if="vocCo2Processed === vocsParams[2].dtoName">
            <div v-for="(param, index) in vocsParams[2].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCo2Processed[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveVocsCo2Processed">保存</div>
            </div>
          </div>

          <div class="data-form" v-else>
            <div v-for="(param, index) in vocsParams[3].param" :key="index" class="form-group">
              <label :for="param.name" class="form-label">{{ param.name }}</label>
              <input :id="param.nameEnglish" v-model="formDataCo2Processed[param.nameEnglish]" class="form-input"/>
            </div>
            <div class="form-btns">
              <div class="form-submit" @click="saveVocsCo2Processed">保存</div>
              <!--              <div class="form-submit-2" @click="cancelSelected">取消选择</div>-->
            </div>
          </div>
        </div>

        <div style="width: 100%;min-height: 100px"></div>

      </div>
    </div>

    <!--使用时消耗-->
    <!--使用时消耗-->
    <!--使用时消耗-->
    <div class="dashboard-drawer-right stop-select" ref="three6">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem12(item,index)" ref="fuelItem12"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <!--购入热力-->
    <div class="dashboard-drawer-right stop-select" ref="three8">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem13(item,index)" ref="fuelItem13"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <!--售出热力-->
    <div class="dashboard-drawer-right stop-select" ref="three10">
      <div class="dashboard-drawer-right-topic stop-select">
        副工作台
      </div>
      <div @click="closeTheDrawer"
           style="display: flex;position: absolute;right: 30px;top: 20px;font-size: var(--fs-5);cursor: pointer">X
      </div>

      <div class="dashboard-drawer-right-main stop-select">
        <div class="dashboard-drawer-right-main-list">
          <div class="dashboard-drawer-right-main-list-item" @click="selectFuelItem14(item,index)" ref="fuelItem14"
               v-for="(item,index) in fuelList" :key="index">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <Charts v-model="visualChart" v-if="visualChart === true"></Charts>

    <PopComponent ref="pop"/>

  </div>

</template>

<script>

import DashboardLeft from "../../../../../../src/components/DashboardComponents/Left/index.vue"

import Charts from '../../../../../../src/components/DashboardComponents/Charts/index.vue'
import Vue from "vue";
import PopComponent from "@/components/pop/PopComponent";

export default {
  name: "index",
  components: {
    DashboardLeft,
    Charts,
    PopComponent
  },
  computed: {
    localStorageFormCollect() {
      console.log("11111111")
      console.log(this.selectedNameEnglish)
      var json = JSON.parse(localStorage.getItem(this.selectedNameEnglish + "Collect"));
      console.log(json)
      return json
    },
    localStorageFormProcess() {
      console.log("11111111")
      console.log(this.selectedNameEnglishProcess)
      var json = JSON.parse(localStorage.getItem(this.selectedNameEnglishProcess + "Process"));
      console.log(json)
      return json
    },
    localStorageFormProcessed() {
      console.log("11111111")
      console.log(this.selectedNameEnglishProcessed)
      var json = JSON.parse(localStorage.getItem(this.selectedNameEnglishProcessed + "Processed"));
      console.log(json)
      return json
    },
    // selectedItemsCollect() {
    //
    // },
    // selectedItemsProcess() {
    //
    // },
    // selectedItemsProcessed() {
    //
    // },
  },
  data() {
    return {
      companyId: "",

      selectedItemsCollect: {},
      selectedItemsProcess: {},
      selectedItemsProcessed: {},


      test: {
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

      CarbonFootprintDto: {
        "materialCollectDto": {
          "chemicalSubstancesUsingDto": {
            "additive": {
              "additiveName": "string",
              "consumption": 0,
              "fuelCO2Coefficient": 0
            },
            "adipicAcid": {
              "consumption": 0,
              "failureRateOfControlEquipment": 0,
              "materialName": "string",
              "n2OEmissionFactor": 0,
              "utilizationRateOfPreventionEquipment": 0
            },
            "calciumCarbide": {
              "consumption": 0,
              "fuelCO2Coefficient": 0,
              "materialName": "string"
            },
            "cement": {
              "clinkerToCementRatio": 0,
              "consumption": 0,
              "materialName": "string",
              "measurementRatioOfCO2ToCaCO3": 0,
              "metricTonsOfRawMaterialUsedPerMetricTonOfClinker": 0,
              "theProportionOfLimeCaCO3InRawMaterial": 0
            },
            "difluoroChloromethane": {
              "consumption": 0,
              "failureRateOfControlEquipment": 0,
              "hfc23EmissionFactor": 0,
              "materialName": "string",
              "utilizationRateOfPreventionEquipment": 0
            },
            "lime": {
              "caOrCaoMgOcontent": 0,
              "consumption": 0,
              "materialName": "string",
              "stoichiometricRatio": 0
            },
            "metal": {
              "carbonContain": 0,
              "co2ConversionFactor": 0,
              "consumption": 0,
              "metalName": "string"
            },
            "nitricAcid": {
              "consumption": 0,
              "failureRateOfControlEquipment": 0,
              "materialName": "string",
              "n2OEmissionFactor": 0,
              "utilizationRateOfPreventionEquipment": 0
            },
            "outSellContainCarbon": {
              "consumption": 0,
              "fuelCO2Coefficient": 0,
              "outSellContainCarbonName": "string"
            },
            "siliconCarbide": {
              "carbonContent": 0,
              "consumption": 0,
              "materialName": "string",
              "theProportioOfCarbonFixedInTheProduct": 0
            },
            "slaggingAgent": {
              "co2DisChargeCoefficient": 0,
              "consumption": 0,
              "fineness": 0,
              "slaggingAgentName": "string"
            },
            "sodiumCarbide": {
              "consumption": 0,
              "fuelCO2Coefficient": 0,
              "materialName": "string"
            }
          },
          "fuelDto": [{
            "fuelName": "原料煤",
            "fuelUsage": 0
          }],
          "powerConsumption": 0,
          "steamFuelDto": [
            //     {
            //   "steamFuelName": "原料煤",
            //   "steamFuelUsage": 0
            // }
            {
              "id": 33,
              "fuelName": "事业废弃物",
              "fuelUsage": "42",
              "co2Emissions": "待测",
              "FuelCO2Coefficient": "",
              "ch4Emissions": "待测",
              "FuelCH4Coefficient": "",
              "n2oEmissions": "待测",
              "FuelN2OCoefficient": "",
              "co2e": 0
            }
          ],
          "translationDto": [{
            "translationFuelCollect": "原料煤",
            "translationFuelUsage": 0
          }],
          wasteHandleDto: {
            septicTanKDto: {
              "disChargeCoefficient": 0,
              "disChargeCoefficientCollect": "string",
              "emissions": 0,
              "employeeSewage": 0,
              "employeeWorkTime": 0,
              "septicTanKProductiveness": 0,
              "sewagePotent": 0,
              "workDate": 0
            },
            voCsDto: {
              ch4First: {
                "voscPotency": 0
              },
              ch4Second: {
                "ch4Potency": 0,
                "combustionEquipmentEfficiency": 0,
                "supplementRateOfExhaustGasSupplementSystem": 0
              },
              co2First: {
                "co2DisChargeCoefficient": 0,
                "combustionEquipmentEfficiency": 0,
                "supplementRateOfExhaustGasSupplementSystem": 0
              },
              co2Second: {
                "combustionEquipmentEfficiency": 0,
                "supplementRateOfExhaustGasSupplementSystem": 0,
                "voscPotency": 0
              },
              "vocsEmissions": 0
            },
            wasteBuryDto: {
              "combustionEquipmentEfficiency": 0,
              "disChargeCoefficient": 0,
              "emissions": 0,
              "moistureContent": 0,
              "quantity": 0,
              "supplementRateOfExhaustGasSupplementSystem": 0,
              "wasteCategory": "string"
            },
            wasteIncinerateDto: {
              "carbonContent": 0,
              "disChargeCoefficient": 0,
              "emissions": 0,
              "quantity": 0,
              "wasteCategory": "string"
            },
            wasteWaterDto: {
              "combustionEquipmentEfficiency": 0,
              "containPotency": 0,
              "disChargeCoefficient": 0,
              "emissions": 0,
              "equipmentName": "string",
              "removePotency": 0,
              "supplementRateOfCH4SupplementSystem": 0,
              "wasteWaterCategory": "string"
            }
          }
        },
        "materialProcessing": {
          "chemicalSubstancesUsingDto": {
            "additive": {
              "additiveName": "string",
              "consumption": 0,
              "fuelCO2Coefficient": 0
            },
            "adipicAcid": {
              "consumption": 0,
              "failureRateOfControlEquipment": 0,
              "materialName": "string",
              "n2OEmissionFactor": 0,
              "utilizationRateOfPreventionEquipment": 0
            },
            "calciumCarbide": {
              "consumption": 0,
              "fuelCO2Coefficient": 0,
              "materialName": "string"
            },
            "cement": {
              "clinkerToCementRatio": 0,
              "consumption": 0,
              "materialName": "string",
              "measurementRatioOfCO2ToCaCO3": 0,
              "metricTonsOfRawMaterialUsedPerMetricTonOfClinker": 0,
              "theProportionOfLimeCaCO3InRawMaterial": 0
            },
            "difluoroChloromethane": {
              "consumption": 0,
              "failureRateOfControlEquipment": 0,
              "hfc23EmissionFactor": 0,
              "materialName": "string",
              "utilizationRateOfPreventionEquipment": 0
            },
            "lime": {
              "caOrCaoMgOcontent": 0,
              "consumption": 0,
              "materialName": "string",
              "stoichiometricRatio": 0
            },
            "metal": {
              "carbonContain": 0,
              "co2ConversionFactor": 0,
              "consumption": 0,
              "metalName": "string"
            },
            "nitricAcid": {
              "consumption": 0,
              "failureRateOfControlEquipment": 0,
              "materialName": "string",
              "n2OEmissionFactor": 0,
              "utilizationRateOfPreventionEquipment": 0
            },
            "outSellContainCarbon": {
              "consumption": 0,
              "fuelCO2Coefficient": 0,
              "outSellContainCarbonName": "string"
            },
            "siliconCarbide": {
              "carbonContent": 0,
              "consumption": 0,
              "materialName": "string",
              "theProportioOfCarbonFixedInTheProduct": 0
            },
            "slaggingAgent": {
              "co2DisChargeCoefficient": 0,
              "consumption": 0,
              "fineness": 0,
              "slaggingAgentName": "string"
            },
            "sodiumCarbide": {
              "consumption": 0,
              "fuelCO2Coefficient": 0,
              "materialName": "string"
            }
          },
          "materialConsumptions": [
            {
              "dosage": 0,
              "materialName": "原油"
            }
          ],
          "powerConsumption": 0,
          "steamFuelDto": [{
            "steamFuelName": "原料煤",
            "steamFuelUsage": 0
          }],
          "translationDto": [{
            "translationFuelCollect": "原料煤",
            "translationFuelUsage": 0
          }],
          wasteHandleDto: {
            "septicTanKDto": {
              "disChargeCoefficient": 0,
              "disChargeCoefficientCollect": "string",
              "emissions": 0,
              "employeeSewage": 0,
              "employeeWorkTime": 0,
              "septicTanKProductiveness": 0,
              "sewagePotent": 0,
              "workDate": 0
            },
            voCsDto: {
              ch4First: {
                "voscPotency": 0
              },
              ch4Second: {
                "ch4Potency": 0,
                "combustionEquipmentEfficiency": 0,
                "supplementRateOfExhaustGasSupplementSystem": 0
              },
              co2First: {
                "co2DisChargeCoefficient": 0,
                "combustionEquipmentEfficiency": 0,
                "supplementRateOfExhaustGasSupplementSystem": 0
              },
              co2Second: {
                "combustionEquipmentEfficiency": 0,
                "supplementRateOfExhaustGasSupplementSystem": 0,
                "voscPotency": 0
              },
              vocsEmissions: 0
            },
            "wasteBuryDto": {
              "combustionEquipmentEfficiency": 0,
              "disChargeCoefficient": 0,
              "emissions": 0,
              "moistureContent": 0,
              "quantity": 0,
              "supplementRateOfExhaustGasSupplementSystem": 0,
              "wasteCategory": "string"
            },
            "wasteIncinerateDto": {
              "carbonContent": 0,
              "disChargeCoefficient": 0,
              "emissions": 0,
              "quantity": 0,
              "wasteCategory": "string"
            },
            "wasteWaterDto": {
              "combustionEquipmentEfficiency": 0,
              "containPotency": 0,
              "disChargeCoefficient": 0,
              "emissions": 0,
              "equipmentName": "string",
              "removePotency": 0,
              "supplementRateOfCH4SupplementSystem": 0,
              "wasteWaterCategory": "string"
            }
          }
        },
        processedGoodsDto: {
          "chemicalSubstancesUsingDto": {
            "additive": {
              "additiveName": "string",
              "consumption": 0,
              "fuelCO2Coefficient": 0
            },
            "adipicAcid": {
              "consumption": 0,
              "failureRateOfControlEquipment": 0,
              "materialName": "string",
              "n2OEmissionFactor": 0,
              "utilizationRateOfPreventionEquipment": 0
            },
            "calciumCarbide": {
              "consumption": 0,
              "fuelCO2Coefficient": 0,
              "materialName": "string"
            },
            "cement": {
              "clinkerToCementRatio": 0,
              "consumption": 0,
              "materialName": "string",
              "measurementRatioOfCO2ToCaCO3": 0,
              "metricTonsOfRawMaterialUsedPerMetricTonOfClinker": 0,
              "theProportionOfLimeCaCO3InRawMaterial": 0
            },
            "difluoroChloromethane": {
              "consumption": 0,
              "failureRateOfControlEquipment": 0,
              "hfc23EmissionFactor": 0,
              "materialName": "string",
              "utilizationRateOfPreventionEquipment": 0
            },
            "lime": {
              "caOrCaoMgOcontent": 0,
              "consumption": 0,
              "materialName": "string",
              "stoichiometricRatio": 0
            },
            "metal": {
              "carbonContain": 0,
              "co2ConversionFactor": 0,
              "consumption": 0,
              "metalName": "string"
            },
            "nitricAcid": {
              "consumption": 0,
              "failureRateOfControlEquipment": 0,
              "materialName": "string",
              "n2OEmissionFactor": 0,
              "utilizationRateOfPreventionEquipment": 0
            },
            "outSellContainCarbon": {
              "consumption": 0,
              "fuelCO2Coefficient": 0,
              "outSellContainCarbonName": "string"
            },
            "siliconCarbide": {
              "carbonContent": 0,
              "consumption": 0,
              "materialName": "string",
              "theProportioOfCarbonFixedInTheProduct": 0
            },
            "slaggingAgent": {
              "co2DisChargeCoefficient": 0,
              "consumption": 0,
              "fineness": 0,
              "slaggingAgentName": "string"
            },
            "sodiumCarbide": {
              "consumption": 0,
              "fuelCO2Coefficient": 0,
              "materialName": "string"
            }
          },
          "outSellPowerConsumption": 0,
          "outSellSteamFuelDto": [{
            "steamFuelName": "原料煤",
            "steamFuelUsage": 0
          }],
          "powerConsumption": 0,
          "purchasePowerConsumption": 0,
          "purchaseSteamFuelDto": [{
            "steamFuelName": "原料煤",
            "steamFuelUsage": 0
          }],
          "steamFuelDto": [{
            "steamFuelName": "原料煤",
            "steamFuelUsage": 0
          }],
          "translationDto": [{
            "translationFuelCollect": "原料煤",
            "translationFuelUsage": 0
          }],
          "useOfProcessedGoods": [
            {
              "processedGoodsCH4Coefficient": 0,
              "processedGoodsCO2Coefficient": 0,
              "processedGoodsN2OCoefficient": 0,
              "processedGoodsName": "原料煤",
              "processedGoodsUsage": 0
            }
          ],
          wasteHandleDto: {
            "septicTanKDto": {
              "disChargeCoefficient": 0,
              "disChargeCoefficientCollect": "string",
              "emissions": 0,
              "employeeSewage": 0,
              "employeeWorkTime": 0,
              "septicTanKProductiveness": 0,
              "sewagePotent": 0,
              "workDate": 0
            },
            voCsDto: {
              ch4First: {
                "voscPotency": 0
              },
              ch4Second: {
                "ch4Potency": 0,
                "combustionEquipmentEfficiency": 0,
                "supplementRateOfExhaustGasSupplementSystem": 0
              },
              co2First: {
                "co2DisChargeCoefficient": 0,
                "combustionEquipmentEfficiency": 0,
                "supplementRateOfExhaustGasSupplementSystem": 0
              },
              co2Second: {
                "combustionEquipmentEfficiency": 0,
                "supplementRateOfExhaustGasSupplementSystem": 0,
                "voscPotency": 0
              },
              vocsEmissions: 0
            },
            "wasteBuryDto": {
              "combustionEquipmentEfficiency": 0,
              "disChargeCoefficient": 0,
              "emissions": 0,
              "moistureContent": 0,
              "quantity": 0,
              "supplementRateOfExhaustGasSupplementSystem": 0,
              "wasteCategory": "string"
            },
            "wasteIncinerateDto": {
              "carbonContent": 0,
              "disChargeCoefficient": 0,
              "emissions": 0,
              "quantity": 0,
              "wasteCategory": "string"
            },
            "wasteWaterDto": {
              "combustionEquipmentEfficiency": 0,
              "containPotency": 0,
              "disChargeCoefficient": 0,
              "emissions": 0,
              "equipmentName": "string",
              "removePotency": 0,
              "supplementRateOfCH4SupplementSystem": 0,
              "wasteWaterCategory": "string"
            }
          }
        },
        "timeLong": 200
      },

      // Collect 采集、Process 加工、Processed 使用

      localAllWastedCollect: {},
      localAllWastedProcess: {},
      localAllWastedProcessed: {},

      selectedItemsList: [],
      selectedItemsListProcess: [],
      selectedItemsListProcessed: [],

      vocs: [
        {text: "1.CH4排放系数＝VOCs浓度 × 16/22.4", nameEnglish: "ch4First"},
        {text: "2.CH4排放系数＝CH4浓度 × 16/22.4 × (1-废气补集系统补集率 × 燃烧设备效率)", nameEnglish: "ch4Second"},
        {text: "3.CO2排放系数＝CO2排放因子 × 废气补集系统补集率 × 燃烧设备效率", nameEnglish: "co2First"},
        {text: "4.CO2排放系数＝VOCs浓度 × 44/22.4 × 废气补集系统补集率 × 燃烧设备效率", nameEnglish: "co2Second"},
      ],
      vocsCO2: [
        {text: "3.CO2排放系数＝CO2排放因子 × 废气补集系统补集率 × 燃烧设备效率", nameEnglish: "co2First"},
        {text: "4.CO2排放系数＝VOCs浓度 × 44/22.4 × 废气补集系统补集率 × 燃烧设备效率", nameEnglish: "co2Second"},
      ],
      vocsCH4: [
        {text: "1.CH4排放系数＝VOCs浓度 × 16/22.4", nameEnglish: "ch4First"},
        {text: "2.CH4排放系数＝CH4浓度 × 16/22.4 × (1-废气补集系统补集率 × 燃烧设备效率)", nameEnglish: "ch4Second"},
      ],
      vocsParams: [
        {
          dtoName: "ch4First", param: [
            {nameEnglish: "voscPotency", name: "VOSc浓度"}
          ]
        },
        {
          dtoName: "ch4Second", param: [
            {nameEnglish: "ch4Potency", name: "CH4排放浓度"},
            {nameEnglish: "combustionEquipmentEfficiency", name: "燃烧设备效率"},
            {nameEnglish: "supplementRateOfExhaustGasSupplementSystem", name: "废气补集系统补集率"},
          ]
        },
        {
          dtoName: "co2First", param: [
            {nameEnglish: "co2DisChargeCoefficient", name: "自测CO2排放因子"},
            {nameEnglish: "combustionEquipmentEfficiency", name: "燃烧设备效率"},
            {nameEnglish: "supplementRateOfExhaustGasSupplementSystem", name: "废气补集系统补集率"},
          ]
        },
        {
          dtoName: "co2Second", param: [
            {nameEnglish: "combustionEquipmentEfficiency", name: "燃烧设备效率"},
            {nameEnglish: "supplementRateOfExhaustGasSupplementSystem", name: "废气补集系统补集率"},
            {nameEnglish: "voscPotency", name: "自测VOCs排放浓度"},
          ]
        },

        //特殊的单独参数
        {dtoName: "vocsEmissions", name: "排放量"}
      ],
      vocCo2: "",
      vocCh4: "",
      formDataCo2: {},
      formDataCh4: {},

      vocCo2Process: "",
      vocCh4Process: "",
      formDataCo2Process: {},
      formDataCh4Process: {},

      vocCo2Processed: "",
      vocCh4Processed: "",
      formDataCo2Processed: {},
      formDataCh4Processed: {},

      visualChart: false,
      visualWasted: false,
      // 图表数据
      data: [
        {name: 'CO2', value: 30},
        {name: 'N2O', value: 20},
        {name: 'CH4', value: 50},
      ],
      titleItemList1: [
        {text: "燃料使用"},
        {text: "能源消耗"},
        {text: "原料运输"},
        {text: "化学物质"},
        {text: "废弃物处理"},
      ],
      // 采集阶段，固定燃烧的能源
      tableDataCollect: [
        // {
        // id: id,
        // fuelName: item.name,
        // fuelUsage: "",
        // co2Emissions: "待测",
        // FuelCO2Coefficient: "",
        // ch4Emissions: "待测",
        // FuelCH4Coefficient: "",
        // n2oEmissions: "待测",
        // FuelN2OCoefficient: "",
        // co2e: 0
        // }
      ],
      // 采集阶段，蒸汽的能源
      tableDataSteamCollect: [],
      // 采集阶段，运输的能源
      tableDataTranslationCollect: [],
      // 采集阶段，废弃物的处理
      tableDataWastedCollect: [],

      // 加工阶段，蒸汽能源
      tableDataSteamProcess: [],
      // 加工阶段，运输的能源
      tableDataTranslationProcess: [],
      // 加工阶段，废弃物的处理
      tableDataWastedProcess: [],
      // 加工阶段，材料消耗
      tableMaterialConsumptionsProcess: [],

      // 使用阶段，蒸汽能源
      tableDataSteamProcessed: [],
      // 使用阶段，运输的能源
      tableDataTranslationProcessed: [],
      // 使用阶段，废弃物的处理
      tableDataWastedProcessed: [],
      // 使用阶段，产品使用消耗
      tableDataUseOfProcessed: [],
      // 外售电力
      tablePurchasePowerProcessed: "",
      // 购入热力
      tablePurchaseSteamProcessed: [],
      // 外售电力
      tableSellPowerProcessed: "",
      // 外售热力
      tableSellSteamProcessed: [],

      tableData: [],
      // 燃料列表
      fuelList: [
        // {name: "原料煤", id: 1}, {name: "燃料煤", id: 2}, {name: "无烟煤", id: 3}, {name: "焦煤", id: 4}
      ],
      // 采集阶段，排放因子列表
      disChargeList: [],

      // 加工阶段，排放因子列表
      disChargeListProcess: [],

      // 使用阶段，排放因子列表
      disChargeListProcessed: [],

      inputIndex: -1,
      inputValue: '',
      selectedrow: null,
      hoveredrow: null,
      isEditing: false,
      editfield: null,
      drawerType: '',

      selectedWastedOption: null, // 采集阶段，当前选中的废弃物选项
      selectedWastedOptionParam: null, // 采集阶段，当前选择的废弃物选项的参数列表
      formData: {}, // 采集阶段，存储用户填写的废弃物表单数据

      selectedWastedOptionProcess: null, // 加工阶段，当前选中的废弃物选项
      selectedWastedOptionParamProcess: null, // 加工阶段，当前选择的废弃物选项的参数列表
      formDataProcess: {}, // 加工阶段，存储用户填写的废弃物表单数据

      selectedWastedOptionProcessed: null, // 加工阶段，当前选中的废弃物选项
      selectedWastedOptionParamProcessed: null, // 加工阶段，当前选择的废弃物选项的参数列表
      formDataProcessed: {}, // 加工阶段，存储用户填写的废弃物表单数据

      // 采集阶段
      selectFuelItemList: [],
      selectFuelItemList2: [],
      selectFuelItemList3: [],
      selectFuelItemList4: [],

      // 加工阶段
      selectFuelItemList5: [],
      selectFuelItemList6: [],
      selectFuelItemList7: [],
      selectFuelItemList8: [],

      // 使用阶段
      selectFuelItemList9: [],
      selectFuelItemList10: [],
      selectFuelItemList11: [],
      selectFuelItemList12: [],
      selectFuelItemList13: [],
      selectFuelItemList14: [],

      // 采集阶段，选中的废弃物范围和名字
      selectedStage: "",
      selectedNameEnglish: "",

      // 加工阶段，选中的废弃物范围和名字
      selectedStageProcess: "",
      selectedNameEnglishProcess: "",

      // 使用阶段，选中的废弃物范围和名字
      selectedStageProcessed: "",
      selectedNameEnglishProcessed: "",

      // 最后提交计算的总JSON对象
      // CarbonFootprintDto: {
      //
      //   // 材料采集阶段的JSON对象
      //   materialCollectDto: {
      //
      //     chemicalSubstancesUsingDto: {},
      //     fuelDto: [],
      //     powerConsumption: 0,
      //     steamFuelDto: [
      //       {
      //         steamFuelName: "原料煤",
      //         steamFuelUsage: 0
      //       }
      //     ],
      //     translationDto: [
      //       {
      //         translationFuelCollect: "原料煤",
      //         translationFuelUsage: 0
      //       }
      //     ],
      //     wasteHandleDto: {
      //       voCsDto: {
      //         ch4First: {
      //           voscPotency: 0
      //         },
      //         ch4Second: {
      //           ch4Potency: 0,
      //           combustionEquipmentEfficiency: 0,
      //           supplementRateOfExhaustGasSupplementSystem: 0
      //         },
      //         co2First: {
      //           co2DisChargeCoefficient: 0,
      //           combustionEquipmentEfficiency: 0,
      //           supplementRateOfExhaustGasSupplementSystem: 0
      //         },
      //         co2Second: {
      //           combustionEquipmentEfficiency: 0,
      //           supplementRateOfExhaustGasSupplementSystem: 0,
      //           voscPotency: 0
      //         },
      //         vocsEmissions: 0
      //       },
      //     }
      //   },
      //
      //   materialProcessing: {
      //     chemicalSubstancesUsingDto: {},
      //     materialConsumptions: [       //原料消耗排放
      //       {
      //         dosage: 0.5,
      //         materialName: "原油"
      //       }
      //     ],
      //     powerConsumption: 0,
      //     steamFuelDto: [
      //       {
      //         steamFuelName: "原料煤",
      //         steamFuelUsage: 0
      //       }
      //     ],
      //     translationDto: [
      //       {
      //         translationFuelCollect: "原料煤",
      //         translationFuelUsage: 0
      //       }
      //     ],
      //     wasteHandleDto: {
      //       voCsDto: {
      //         ch4First: {
      //           voscPotency: 0
      //         },
      //         ch4Second: {
      //           ch4Potency: 0,
      //           combustionEquipmentEfficiency: 0,
      //           supplementRateOfExhaustGasSupplementSystem: 0
      //         },
      //         co2First: {
      //           co2DisChargeCoefficient: 0,
      //           combustionEquipmentEfficiency: 0,
      //           supplementRateOfExhaustGasSupplementSystem: 0
      //         },
      //         co2Second: {
      //           combustionEquipmentEfficiency: 0,
      //           supplementRateOfExhaustGasSupplementSystem: 0,
      //           voscPotency: 0
      //         },
      //         vocsEmissions: 0
      //       }
      //     }
      //
      //   },
      //   processedGoodsDto: {
      //     chemicalSubstancesUsingDto: {},
      //     outSellPowerConsumption: "",
      //     outSellSteamFuelDto: [],
      //     purchasePowerConsumption: "",
      //     purchaseSteamFuelDto: [],
      //     materialConsumptions: [       //原料消耗排放
      //       {
      //         dosage: 0.5,
      //         materialName: "原油"
      //       }
      //     ],
      //     useOfProcessedGoods: [				//使用消耗
      //       {
      //         processedGoodsCH4Coefficient: 0.5,
      //         processedGoodsCO2Coefficient: 0.5,
      //         processedGoodsN2OCoefficient: 0.5,
      //         processedGoodsName: "原料煤",
      //         processedGoodsUsage: 0.5
      //       }
      //     ],
      //     powerConsumption: 0,
      //     steamFuelDto: [
      //       {
      //         steamFuelName: "原料煤",
      //         steamFuelUsage: 0
      //       }
      //     ],
      //     translationDto: [
      //       {
      //         translationFuelCollect: "原料煤",
      //         translationFuelUsage: 0
      //       }
      //     ],
      //     wasteHandleDto: {
      //       voCsDto: {
      //         ch4First: {
      //           voscPotency: 0
      //         },
      //         ch4Second: {
      //           ch4Potency: 0,
      //           combustionEquipmentEfficiency: 0,
      //           supplementRateOfExhaustGasSupplementSystem: 0
      //         },
      //         co2First: {
      //           co2DisChargeCoefficient: 0,
      //           combustionEquipmentEfficiency: 0,
      //           supplementRateOfExhaustGasSupplementSystem: 0
      //         },
      //         co2Second: {
      //           combustionEquipmentEfficiency: 0,
      //           supplementRateOfExhaustGasSupplementSystem: 0,
      //           voscPotency: 0
      //         },
      //         vocsEmissions: 0
      //       },
      //     }
      //
      //   },
      // },


      inputStyle: {
        fontSize: '0.85rem',
        lineHeight: '1.7rem'
      },

      // wastedDtoList: {
      //   chemicalSubstancesUsingDto: "chemicalSubstancesUsingDto",
      //   wasteHandleDto: "wasteHandleDto",
      //   chemicalSubstancesUsingDtoList: [
      //
      //   ],
      //   wasteHandleDtoList: [
      //     {name:"化粪池",jsonName:"septicTanKDto"},
      //     {name:"",jsonName:"voCsDto"},
      //     {name:"掩埋处理废弃物排放源",jsonName:"wasteBuryDto"},
      //     {name:"焚化炉处理废弃物排放源",jsonName:"wasteIncinerateDto"},
      //     {name:"废水排放源",jsonName:"wasteWaterDto"},
      //   ],
      // }

      power: false

    }
  },
  methods: {

    validPower() {
      return new Promise(((resolve, reject) => {
        this.postRequest('/carbon-service/CarbonService/CarbonFootprint/' + this.companyId, this.test).then(res => {
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

    saveInputToLocal(key, event) {
      localStorage.setItem(key, event.target.value)
    },
    placeHolderOnFocus() {
      console.log("onfocus")
      this.inputStyle.fontSize = '0.7rem';
      this.inputStyle.marginTop = '0.15rem'
    },
    placeHolderOnBlur() {
      console.log("onblur")
      this.inputStyle.fontSize = '0.85rem';
    },


    async calculateCarbonFoot() {
      await this.validPower()
      if (this.power === false) {
        this.$refs.pop.messagePopShow("您所在的组织没有订阅这个服务")
        await this.$router.push("/gallery")
        return;
      }
      // this.getAllDisChargeOptions()
      console.log("calculate")
      console.log(this.tableDataCollect)
      console.log(this.tableDataSteamCollect)
      console.log(this.tableDataTranslationCollect)
      this.CarbonFootprintDto.materialCollectDto.fuelDto = Vue.observable(this.tableDataCollect)
      this.CarbonFootprintDto.materialCollectDto.steamFuelDto = Vue.observable(this.tableDataSteamCollect)
      this.CarbonFootprintDto.materialCollectDto.translationDto = Vue.observable(this.tableDataTranslationCollect)

      // 把三个阶段的VOC塞进去
      if (localStorage.getItem("co2FirstCollect")) {
        this.CarbonFootprintDto.materialCollectDto["wasteHandleDto"]["voCsDto"][this.vocCo2] = this.formDataCo2
      }
      if (localStorage.getItem("ch4SecondCollect")) {
        this.CarbonFootprintDto.materialCollectDto["wasteHandleDto"]["voCsDto"][this.vocCh4] = this.formDataCh4
      }
      if (localStorage.getItem("co2FirstProcess")) {
        this.CarbonFootprintDto.materialProcessing["wasteHandleDto"]["voCsDto"][this.vocCo2Process] = this.formDataCo2Process
      }
      if (localStorage.getItem("ch4SecondProcess")) {
        this.CarbonFootprintDto.materialProcessing["wasteHandleDto"]["voCsDto"][this.vocCh4Process] = this.formDataCh4Process
      }
      if (localStorage.getItem("co2FirstProcessed")) {
        this.CarbonFootprintDto.processedGoodsDto["wasteHandleDto"]["voCsDto"][this.vocCo2Processed] = this.formDataCo2Processed
      }
      if (localStorage.getItem("ch4SecondProcessed")) {
        this.CarbonFootprintDto.processedGoodsDto["wasteHandleDto"]["voCsDto"][this.vocCh4Processed] = this.formDataCh4Processed
      }

      console.log(localStorage.getItem("localAllWastedCollect"))
      this.tableDataWastedCollect = JSON.parse(localStorage.getItem("localAllWastedCollect"))

      // var collectJSON = JSON.parse(localStorage.getItem(this.selectedNameEnglish + "Collect"));
      // this.CarbonFootprintDto.materialCollectDto.wasteHandleDto = Vue.observable(collectJSON)

      if (localStorage.getItem("tableDataWastedCollect") !== {} && localStorage.getItem("localAllWastedCollect") !== {}) {
        this.tableDataWastedCollect = JSON.parse(localStorage.getItem("tableDataWastedCollect"))
        this.localAllWastedCollect = JSON.parse(localStorage.getItem("localAllWastedCollect"))
        for (let i = 0; i < this.tableDataWastedCollect.length; i++) {
          for (let j = 0; j < this.disChargeList.length; j++) {
            if (this.tableDataWastedCollect[i].englishName === this.disChargeList[j].nameEnglish) {
              console.log(this.disChargeList[j].nameEnglish + "满足")
              console.log(this.localAllWastedCollect[this.disChargeList[j].nameEnglish])
              console.log(this.localAllWastedCollect[this.disChargeList[j].nameEnglish] === undefined)
              if (this.localAllWastedCollect[this.disChargeList[j].nameEnglish] !== undefined && this.localAllWastedCollect[this.disChargeList[j].nameEnglish] !== {} && this.localAllWastedCollect[this.disChargeList[j].nameEnglish] !== null && Object.keys(this.localAllWastedCollect[this.disChargeList[j].nameEnglish]).length > 0) {
                this.CarbonFootprintDto.materialCollectDto[this.disChargeList[j].stage][this.disChargeList[j].nameEnglish]
                    = this.localAllWastedCollect[this.disChargeList[j].nameEnglish]
              } else {
                console.log("数据为空")
              }
            }
          }
        }
      }

      // this.CarbonFootprintDto.processedGoodsDto.fuelDto = Vue.observable(this.tableDataCollect)
      this.CarbonFootprintDto.materialProcessing.steamFuelDto = Vue.observable(this.tableDataSteamProcess)
      this.CarbonFootprintDto.materialProcessing.translationDto = Vue.observable(this.tableDataTranslationProcess)

      console.log("this.tableDataWastedProcess")
      console.log(this.tableDataWastedProcess)
      this.tableDataWastedProcess = JSON.parse(localStorage.getItem("tableDataWastedProcess"))

      // var processingJSON = JSON.parse(localStorage.getItem(this.selectedNameEnglishProcess + "Process"));
      // this.CarbonFootprintDto.materialProcessing.wasteHandleDto = Vue.observable(processingJSON)

      this.CarbonFootprintDto.processedGoodsDto.steamFuelDto = Vue.observable(this.tableDataSteamProcessed)
      this.CarbonFootprintDto.processedGoodsDto.translationDto = Vue.observable(this.tableDataTranslationProcessed)

      this.CarbonFootprintDto.processedGoodsDto.outSellSteamFuelDto = Vue.observable(this.tableSellSteamProcessed)
      this.CarbonFootprintDto.processedGoodsDto.purchaseSteamFuelDto = Vue.observable(this.tablePurchaseSteamProcessed)
      this.CarbonFootprintDto.processedGoodsDto.useOfProcessedGoods = Vue.observable(this.tableDataUseOfProcessed)

      if (localStorage.getItem("tableDataWastedProcess") !== {} && localStorage.getItem("localAllWastedProcess") !== {}) {
        this.tableDataWastedProcess = JSON.parse(localStorage.getItem("tableDataWastedProcess"))
        this.localAllWastedProcess = JSON.parse(localStorage.getItem("localAllWastedProcess"))
        for (let i = 0; i < this.tableDataWastedProcess.length; i++) {
          for (let j = 0; j < this.disChargeListProcess.length; j++) {
            if (this.tableDataWastedProcess[i].englishName === this.disChargeListProcess[j].nameEnglish) {
              console.log("process")
              console.log(this.disChargeListProcess[j].nameEnglish)
              console.log(this.localAllWastedProcess)
              console.log(this.localAllWastedProcess[this.disChargeListProcess[j].nameEnglish])
              if (this.localAllWastedProcess[this.disChargeList[j].nameEnglish] !== undefined && this.localAllWastedProcess[this.disChargeList[j].nameEnglish] !== {} && this.localAllWastedProcess[this.disChargeList[j].nameEnglish] !== null && Object.keys(this.localAllWastedProcess[this.disChargeList[j].nameEnglish]).length > 0) {
                this.CarbonFootprintDto.materialProcessing[this.disChargeListProcess[j].stage][this.disChargeListProcess[j].nameEnglish]
                    = this.localAllWastedProcess[this.disChargeListProcess[j].nameEnglish]
              }
            }
          }
        }
      }

      // this.disChargeListProcessed[j]
      // id:1
      // name:"焚化炉处理废弃物排放源"
      // nameEnglish:"wasteIncinerateDto"
      // stage:"wasteHandleDto"

      // this.tableDataWastedProcessed[i]
      // [
      // {
      //   "id": 17,
      //   "name": "己二酸制程",
      //   "englishName": "adipicAcid"
      // },
      // {
      //   "id": 9,
      //   "name": "金属进料",
      //   "englishName": "metal"
      // }
      // ]

      // localAllWastedProcessed
      // {
      //   "adipicAcid": {
      //   "materialName": "dsfa",
      //       "consumption": "dfa",
      //       "n2OEmissionFactor": "sfdasd",
      //       "failureRateOfControlEquipment": "fsda",
      //       "utilizationRateOfPreventionEquipment": "f"
      // },
      //   "metal": {
      //   "carbonContain": "dfsaf",
      //       "co2ConversionFactor": "fdsa",
      //       "consumption": "dfd",
      //       "metalName": "asf"
      // }
      // }
      if (localStorage.getItem("tableDataWastedProcessed") !== {} && localStorage.getItem("localAllWastedProcessed") !== {}) {
        this.tableDataWastedProcessed = JSON.parse(localStorage.getItem("tableDataWastedProcessed"))
        this.localAllWastedProcessed = JSON.parse(localStorage.getItem("localAllWastedProcessed"))
        for (let i = 0; i < this.tableDataWastedProcessed.length; i++) {
          for (let j = 0; j < this.disChargeListProcessed.length; j++) {
            if (this.tableDataWastedProcessed[i].englishName === this.disChargeListProcessed[j].nameEnglish) {
              if (this.localAllWastedProcessed[this.disChargeList[j].nameEnglish] !== undefined && this.localAllWastedProcessed[this.disChargeList[j].nameEnglish] !== {} && this.localAllWastedProcessed[this.disChargeList[j].nameEnglish] !== null && Object.keys(this.localAllWastedProcessed[this.disChargeList[j].nameEnglish]).length > 0) {
                this.CarbonFootprintDto.processedGoodsDto[this.disChargeListProcessed[j].stage][this.disChargeListProcessed[j].nameEnglish]
                    = this.localAllWastedProcessed[this.disChargeListProcessed[j].nameEnglish]
              }
            }
          }
        }
      }


      var companyId = localStorage.getItem("companyId")
      if (companyId) {
        this.postRequest('/carbon-service/CarbonService/CarbonFootprint/' + companyId, this.CarbonFootprintDto).then(res => {
          console.log(res)
        })
      }

      console.log(this.CarbonFootprintDto)
      console.log("===================================")
    },

    getAllFuelsOptions() {
      return new Promise((resolve, reject) => {
        var companyId = localStorage.getItem("companyId")
        if (companyId) {
          this.getRequest('/carbon-service/CarbonService/getCo2Fuels/' + companyId).then(res => {
            console.log(res)
            this.fuelList = res
            resolve()
          }).catch((err) => {
            reject(err)
          })
        } else {
          reject()
        }
      })

    },

    getAllDisChargeOptions() {
      return new Promise((resolve, reject) => {
        var companyId = localStorage.getItem("companyId")
        if (companyId) {
          this.getRequest('/carbon-service/CarbonService/getDischargeCollect/' + companyId).then(res => {
            console.log("getDischarge")
            console.log(res)
            this.disChargeList = res
            this.selectedItemsList = this.disChargeList.filter(item => localStorage.getItem(item.nameEnglish + "Collect") !== null)

            this.disChargeListProcess = res
            this.selectedItemsListProcess = this.disChargeList.filter(item => localStorage.getItem(item.nameEnglish + "Process") !== null)

            this.disChargeListProcessed = res
            this.selectedItemsListProcessed = this.disChargeList.filter(item => localStorage.getItem(item.nameEnglish + "Processed") !== null)
            resolve()
          }).catch((err) => {
            reject(err)
          })
        } else {
          reject()
        }
      })
    },


    // 材料收集阶段
    selectFuelItem(item, arrIndex) {
      const id = item.id;
      var index = this.selectFuelItemList.indexOf(id);
      // console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          fuelName: item.name,
          fuelUsage: "",
          co2Emissions: "待测",
          FuelCO2Coefficient: "",
          ch4Emissions: "待测",
          FuelCH4Coefficient: "",
          n2oEmissions: "待测",
          FuelN2OCoefficient: "",
          co2e: 0
        }
        this.tableDataCollect.push(one)
        this.selectFuelItemList.push(id)
        // console.log(this.$refs.fuelItem[arrIndex])
        this.$refs.fuelItem[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem[arrIndex].style.color = "white"
        this.$refs.fuelItem[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tableDataCollect.splice(index, 1)
        this.selectFuelItemList.splice(index, 1)
        this.$refs.fuelItem[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem[arrIndex].style.color = "black"
        this.$refs.fuelItem[arrIndex].style.border = "#8f8f8f 1px solid"
      }
      // console.log(this.tableDataCollect)
      // console.log(this.selectFuelItemList)
    },

    selectFuelItem2(item, arrIndex) {
      // console.log('item')
      // console.log(item)
      const id = item.id;
      var index = this.selectFuelItemList2.indexOf(id);
      // console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          steamFuelName: item.name,
          steamFuelUsage: "",
          co2Emissions: "待测",
          FuelCO2Coefficient: "",
          ch4Emissions: "待测",
          FuelCH4Coefficient: "",
          n2oEmissions: "待测",
          FuelN2OCoefficient: "",
          co2e: 0
        }
        // console.log('one')
        // console.log(one)
        this.tableDataSteamCollect.push(one)
        this.selectFuelItemList2.push(id)
        // console.log(this.$refs.fuelItem2)
        // console.log(this.$refs.fuelItem2[arrIndex])
        this.$refs.fuelItem2[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem2[arrIndex].style.color = "white"
        this.$refs.fuelItem2[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tableDataSteamCollect.splice(index, 1)
        this.selectFuelItemList2.splice(index, 1)
        this.$refs.fuelItem2[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem2[arrIndex].style.color = "black"
        this.$refs.fuelItem2[arrIndex].style.border = "#8f8f8f 1px solid"
      }
      // console.log(this.tableDataSteamCollect)
      // console.log(this.selectFuelItemList2)
    },

    selectFuelItem3(item, arrIndex) {
      const id = item.id;
      var index = this.selectFuelItemList3.indexOf(id);
      // console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          translationFuelCollect: item.name,
          translationFuelUsage: "",
          co2Emissions: "待测",
          FuelCO2Coefficient: "",
          ch4Emissions: "待测",
          FuelCH4Coefficient: "",
          n2oEmissions: "待测",
          FuelN2OCoefficient: "",
          co2e: 0
        }
        // console.log('one')
        // console.log(one)
        this.tableDataTranslationCollect.push(one)
        this.selectFuelItemList3.push(id)
        // console.log(this.$refs.fuelItem2)
        // console.log(this.$refs.fuelItem2[arrIndex])
        this.$refs.fuelItem3[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem3[arrIndex].style.color = "white"
        this.$refs.fuelItem3[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tableDataTranslationCollect.splice(index, 1)
        this.selectFuelItemList3.splice(index, 1)
        this.$refs.fuelItem3[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem3[arrIndex].style.color = "black"
        this.$refs.fuelItem3[arrIndex].style.border = "#8f8f8f 1px solid"
      }
      // console.log(this.tableDataTranslationCollect)
      // console.log(this.selectFuelItemList3)
    },

    async selectFuelItem4(item, arrIndex) {
      console.log('selectFuelItem4')
      console.log(this.selectedWastedOption)

      if (this.selectedWastedOption !== null) {
        const action = await this.$refs.pop.confirmPopShow("确认要在未保存的情况下选择另一项数据吗？这将导致当前数据不会被加入计算")
        if (action.action === 'ensure') {

          const id = this.selectedWastedOption.id;
          var index = this.selectFuelItemList4.indexOf(id);
          this.tableDataWastedCollect.splice(index, 1)
          localStorage.setItem("tableDataWastedCollect", JSON.stringify(this.tableDataWastedCollect))
          this.selectFuelItemList4.splice(index, 1)

          var oldList4Item = null
          for (let i = 0; i < this.$refs.fuelItem4.length; i++) {
            if (this.$refs.fuelItem4[i].innerText === this.selectedWastedOption.name) {
              oldList4Item = this.$refs.fuelItem4[i]
            }
          }

          if (this.localStorageFormCollect === null) {
            oldList4Item.style.backgroundColor = "white"
            oldList4Item.style.color = "black"
            oldList4Item.style.border = "#8f8f8f 1px solid"
          }

          this.changeWastedOpt(item, arrIndex)

        }
      } else {
        this.changeWastedOpt(item, arrIndex)
      }
    },

    selectFuelItem5(item, arrIndex) {
      console.log("selectFuelItem5")
      console.log(item)
      const id = item.id;
      var index = this.selectFuelItemList5.indexOf(id);
      // console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          steamFuelName: item.name,
          steamFuelUsage: "",
          co2Emissions: "待测",
          FuelCO2Coefficient: "",
          ch4Emissions: "待测",
          FuelCH4Coefficient: "",
          n2oEmissions: "待测",
          FuelN2OCoefficient: "",
          co2e: 0
        }
        this.tableDataSteamProcess.push(one)
        this.selectFuelItemList5.push(id)
        // console.log(this.$refs.fuelItem[arrIndex])
        this.$refs.fuelItem5[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem5[arrIndex].style.color = "white"
        this.$refs.fuelItem5[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tableDataSteamProcess.splice(index, 1)
        this.selectFuelItemList5.splice(index, 1)
        this.$refs.fuelItem5[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem5[arrIndex].style.color = "black"
        this.$refs.fuelItem5[arrIndex].style.border = "#8f8f8f 1px solid"
      }
    },

    selectFuelItem6(item, arrIndex) {
      const id = item.id;
      var index = this.selectFuelItemList6.indexOf(id);
      // console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          translationFuelCollect: item.name,
          translationFuelUsage: "",
          co2Emissions: "待测",
          FuelCO2Coefficient: "",
          ch4Emissions: "待测",
          FuelCH4Coefficient: "",
          n2oEmissions: "待测",
          FuelN2OCoefficient: "",
          co2e: 0
        }
        this.tableDataTranslationProcess.push(one)
        this.selectFuelItemList6.push(id)
        // console.log(this.$refs.fuelItem[arrIndex])
        this.$refs.fuelItem6[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem6[arrIndex].style.color = "white"
        this.$refs.fuelItem6[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tableDataTranslationProcess.splice(index, 1)
        this.selectFuelItemList6.splice(index, 1)
        this.$refs.fuelItem6[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem6[arrIndex].style.color = "black"
        this.$refs.fuelItem6[arrIndex].style.border = "#8f8f8f 1px solid"
      }
    },

    async selectFuelItem7(item, arrIndex) {

      console.log('selectFuelItem7')
      console.log(this.selectedWastedOptionProcess)

      if (this.selectedWastedOptionProcess !== null) {
        const action = await this.$refs.pop.confirmPopShow("确认要在未保存的情况下选择另一项数据吗？这将导致当前数据不会被加入计算")
        if (action.action === 'ensure') {

          const id = this.selectedWastedOptionProcess.id;
          var index = this.selectFuelItemList7.indexOf(id);
          this.tableDataWastedProcess.splice(index, 1)
          localStorage.setItem("tableDataWastedProcess", JSON.stringify(this.tableDataWastedProcess))
          this.selectFuelItemList7.splice(index, 1)

          var oldList4Item = null
          for (let i = 0; i < this.$refs.fuelItem7.length; i++) {
            if (this.$refs.fuelItem7[i].innerText === this.selectedWastedOptionProcess.name) {
              oldList4Item = this.$refs.fuelItem7[i]
            }
          }

          if (this.localStorageFormProcess === null) {
            oldList4Item.style.backgroundColor = "white"
            oldList4Item.style.color = "black"
            oldList4Item.style.border = "#8f8f8f 1px solid"
          }

          this.changeWastedOptProcess(item, arrIndex)
        }
      } else {
        this.changeWastedOptProcess(item, arrIndex)
      }
    },

    selectFuelItem8(item, arrIndex) {
      console.log("selectFuelItem8")
      console.log(item)
      const id = item.id;
      var index = this.selectFuelItemList8.indexOf(id);
      // console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          materialName: item.name,
          dosage: "",
          co2Emissions: "待测",
          FuelCO2Coefficient: "",
          ch4Emissions: "待测",
          FuelCH4Coefficient: "",
          n2oEmissions: "待测",
          FuelN2OCoefficient: "",
          co2e: 0
        }
        this.tableMaterialConsumptionsProcess.push(one)
        this.selectFuelItemList8.push(id)
        // console.log(this.$refs.fuelItem[arrIndex])
        this.$refs.fuelItem8[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem8[arrIndex].style.color = "white"
        this.$refs.fuelItem8[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tableMaterialConsumptionsProcess.splice(index, 1)
        this.selectFuelItemList8.splice(index, 1)
        this.$refs.fuelItem8[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem8[arrIndex].style.color = "black"
        this.$refs.fuelItem8[arrIndex].style.border = "#8f8f8f 1px solid"
      }
    },


    selectFuelItem9(item, arrIndex) {
      const id = item.id;
      var index = this.selectFuelItemList9.indexOf(id);
      // console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          steamFuelName: item.name,
          steamFuelUsage: "",
          co2Emissions: "待测",
          FuelCO2Coefficient: "",
          ch4Emissions: "待测",
          FuelCH4Coefficient: "",
          n2oEmissions: "待测",
          FuelN2OCoefficient: "",
          co2e: 0
        }
        this.tableDataSteamProcessed.push(one)
        this.selectFuelItemList9.push(id)
        // console.log(this.$refs.fuelItem[arrIndex])
        this.$refs.fuelItem9[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem9[arrIndex].style.color = "white"
        this.$refs.fuelItem9[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tableDataSteamProcessed.splice(index, 1)
        this.selectFuelItemList9.splice(index, 1)
        this.$refs.fuelItem9[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem9[arrIndex].style.color = "black"
        this.$refs.fuelItem9[arrIndex].style.border = "#8f8f8f 1px solid"
      }
    },

    selectFuelItem10(item, arrIndex) {
      const id = item.id;
      var index = this.selectFuelItemList10.indexOf(id);
      // console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          translationFuelCollect: item.name,
          translationFuelUsage: "",
          co2Emissions: "待测",
          FuelCO2Coefficient: "",
          ch4Emissions: "待测",
          FuelCH4Coefficient: "",
          n2oEmissions: "待测",
          FuelN2OCoefficient: "",
          co2e: 0
        }
        this.tableDataTranslationProcessed.push(one)
        this.selectFuelItemList10.push(id)
        // console.log(this.$refs.fuelItem[arrIndex])
        this.$refs.fuelItem10[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem10[arrIndex].style.color = "white"
        this.$refs.fuelItem10[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tableDataTranslationProcessed.splice(index, 1)
        this.selectFuelItemList10.splice(index, 1)
        this.$refs.fuelItem10[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem10[arrIndex].style.color = "black"
        this.$refs.fuelItem10[arrIndex].style.border = "#8f8f8f 1px solid"
      }
    },

    async selectFuelItem11(item, arrIndex) {

      console.log('selectFuelItem11')
      console.log(this.selectedWastedOptionProcessed)

      if (this.selectedWastedOptionProcessed !== null) {
        const action = await this.$refs.pop.confirmPopShow("确认要在未保存的情况下选择另一项数据吗？这将导致当前数据不会被加入计算")
        if (action.action === 'ensure') {

          const id = this.selectedWastedOptionProcessed.id;
          var index = this.selectFuelItemList11.indexOf(id);
          this.tableDataWastedProcessed.splice(index, 1)
          localStorage.setItem("tableDataWastedProcessed", JSON.stringify(this.tableDataWastedProcessed))
          this.selectFuelItemList11.splice(index, 1)

          var oldList4Item = null
          for (let i = 0; i < this.$refs.fuelItem11.length; i++) {
            if (this.$refs.fuelItem11[i].innerText === this.selectedWastedOptionProcessed.name) {
              oldList4Item = this.$refs.fuelItem11[i]
            }
          }

          if (this.localStorageFormProcessed === null) {
            oldList4Item.style.backgroundColor = "white"
            oldList4Item.style.color = "black"
            oldList4Item.style.border = "#8f8f8f 1px solid"
          }

          this.changeWastedOptProcessed(item, arrIndex)
        }
      } else {
        this.changeWastedOptProcessed(item, arrIndex)
      }
    },

    selectFuelItem12(item, arrIndex) {
      const id = item.id;
      var index = this.selectFuelItemList12.indexOf(id);
      // console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          processedGoodsName: item.name,
          processedGoodsUsage: "",
          co2Emissions: "待测",
          processedGoodsCO2Coefficient: "",
          ch4Emissions: "待测",
          processedGoodsCH4Coefficient: "",
          n2oEmissions: "待测",
          processedGoodsN2OCoefficient: "",
          co2e: 0
        }
        this.tableDataUseOfProcessed.push(one)
        this.selectFuelItemList12.push(id)
        // console.log(this.$refs.fuelItem[arrIndex])
        this.$refs.fuelItem12[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem12[arrIndex].style.color = "white"
        this.$refs.fuelItem12[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tableDataUseOfProcessed.splice(index, 1)
        this.selectFuelItemList12.splice(index, 1)
        this.$refs.fuelItem12[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem12[arrIndex].style.color = "black"
        this.$refs.fuelItem12[arrIndex].style.border = "#8f8f8f 1px solid"
      }
    },

    selectFuelItem13(item, arrIndex) {
      const id = item.id;
      var index = this.selectFuelItemList13.indexOf(id);
      // console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          steamFuelName: item.name,
          steamFuelUsage: "",
          co2Emissions: "待测",
          FuelCO2Coefficient: "",
          ch4Emissions: "待测",
          FuelCH4Coefficient: "",
          n2oEmissions: "待测",
          FuelN2OCoefficient: "",
          co2e: 0
        }
        this.tablePurchaseSteamProcessed.push(one)
        this.selectFuelItemList13.push(id)
        // console.log(this.$refs.fuelItem[arrIndex])
        this.$refs.fuelItem13[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem13[arrIndex].style.color = "white"
        this.$refs.fuelItem13[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tablePurchaseSteamProcessed.splice(index, 1)
        this.selectFuelItemList13.splice(index, 1)
        this.$refs.fuelItem13[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem13[arrIndex].style.color = "black"
        this.$refs.fuelItem13[arrIndex].style.border = "#8f8f8f 1px solid"
      }
    },

    selectFuelItem14(item, arrIndex) {
      const id = item.id;
      var index = this.selectFuelItemList14.indexOf(id);
      // console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          steamFuelName: item.name,
          steamFuelUsage: "",
          co2Emissions: "待测",
          FuelCO2Coefficient: "",
          ch4Emissions: "待测",
          FuelCH4Coefficient: "",
          n2oEmissions: "待测",
          FuelN2OCoefficient: "",
          co2e: 0
        }
        this.tableSellSteamProcessed.push(one)
        this.selectFuelItemList14.push(id)
        // console.log(this.$refs.fuelItem[arrIndex])
        this.$refs.fuelItem14[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem14[arrIndex].style.color = "white"
        this.$refs.fuelItem14[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      } else {
        this.tableSellSteamProcessed.splice(index, 1)
        this.selectFuelItemList14.splice(index, 1)
        this.$refs.fuelItem14[arrIndex].style.backgroundColor = "white"
        this.$refs.fuelItem14[arrIndex].style.color = "black"
        this.$refs.fuelItem14[arrIndex].style.border = "#8f8f8f 1px solid"
      }
    },

    updateVocsCh4Form() {
      console.log("11111111")
      // this.formDataCh4 = localStorage.getItem(this.vocCh4 + "Collect")
      // for (let i = 0; i < this.vocsCH4.length; i++) {
      //   if (this.vocsCH4[i].nameEnglish !== this.vocCh4) {
      //     localStorage.removeItem(this.vocsCH4[i].nameEnglish + "Collect")
      //   }
      // }

      // localStorage.removeItem("co2FirstCollect")

    },
    updateVocsCo2Form() {
      // this.formDataCh4 = localStorage.getItem(this.vocCo2 + "Collect")
      // for (let i = 0; i < this.vocsCO2.length; i++) {
      //   if (this.vocsCO2[i].nameEnglish !== this.vocCo2) {
      //     localStorage.removeItem(this.vocsCO2[i].nameEnglish + "Collect")
      //   }
      // }

      // localStorage.removeItem("ch4FirstCollect")

    },

    updateVocsCh4FormProcess() {
      // this.formDataCh4Process = localStorage.getItem(this.vocCh4Process + "Process")
      // for (let i = 0; i < this.vocsCH4.length; i++) {
      //   if (this.vocsCH4[i].nameEnglish !== this.vocCh4) {
      //     localStorage.removeItem(this.vocsCH4[i].nameEnglish + "Process")
      //   }
      // }
    },
    updateVocsCo2FormProcess() {
      // this.formDataCh4Process = localStorage.getItem(this.vocCo2Process + "Process")
      // for (let i = 0; i < this.vocsCO2.length; i++) {
      //   if (this.vocsCO2[i].nameEnglish !== this.vocCo2Process) {
      //     localStorage.removeItem(this.vocsCO2[i].nameEnglish + "Process")
      //   }
      // }
    },

    updateVocsCh4FormProcessed() {
      // this.formDataCh4Processed = localStorage.getItem(this.vocCh4Processed + "Processed")
      // for (let i = 0; i < this.vocsCH4.length; i++) {
      //   if (this.vocsCH4[i].nameEnglish !== this.vocCh4Processed) {
      //     localStorage.removeItem(this.vocsCH4[i].nameEnglish + "Processed")
      //   }
      // }
    },
    updateVocsCo2FormProcessed() {
      // console.log(33333333333333)
      // this.formDataCh4Processed = localStorage.getItem(this.vocCo2Processed + "Processed")
      // for (let i = 0; i < this.vocsCO2.length; i++) {
      //   if (this.vocsCO2[i].nameEnglish !== this.vocCo2Processed) {
      //     localStorage.removeItem(this.vocsCO2[i].nameEnglish + "Processed")
      //   }
      // }
    },

    saveVocsCh4() {
      console.log(JSON.stringify(this.formDataCh4))
      console.log(this.vocCh4)
      localStorage.setItem(this.vocCh4 + "Collect", JSON.stringify(this.formDataCh4))
      this.CarbonFootprintDto.materialCollectDto["wasteHandleDto"]["voCsDto"][this.vocCh4] = this.formDataCh4
      console.log(this.CarbonFootprintDto)
      this.$refs.pop.messagePopShow("保存成功")
    },

    saveVocsCo2() {
      // console.log(JSON.stringify(this.formDataCo2))
      localStorage.setItem(this.vocCo2 + "Collect", JSON.stringify(this.formDataCo2))
      this.CarbonFootprintDto.materialCollectDto["wasteHandleDto"]["voCsDto"][this.vocCo2] = this.formDataCo2

      console.log('this.CarbonFootprintDto.materialCollectDto["wasteHandleDto"]["voCsDto"][this.vocCo2]')
      console.log(this.CarbonFootprintDto.materialCollectDto["wasteHandleDto"]["voCsDto"][this.vocCo2])
      console.log('this.formDataCo2')
      console.log(this.formDataCo2)
      console.log(this.CarbonFootprintDto)
      this.$refs.pop.messagePopShow("保存成功")
    },

    saveVocsCh4Process() {
      console.log(JSON.stringify(this.formDataCh4Process))
      console.log(this.vocCh4Process)
      localStorage.setItem(this.vocCh4Process + "Process", JSON.stringify(this.formDataCh4Process))
      this.CarbonFootprintDto.materialProcessing["wasteHandleDto"]["voCsDto"][this.vocCh4Process] = this.formDataCh4Process
      console.log(this.CarbonFootprintDto)
      this.$refs.pop.messagePopShow("保存成功")
    },

    saveVocsCo2Process() {
      // console.log(JSON.stringify(this.formDataCo2))
      localStorage.setItem(this.vocCo2Process + "Process", JSON.stringify(this.formDataCo2Process))
      this.CarbonFootprintDto.materialProcessing["wasteHandleDto"]["voCsDto"][this.vocCo2Process] = this.formDataCo2Process

      console.log('this.CarbonFootprintDto.materialProcessing["wasteHandleDto"]["voCsDto"][this.vocCo2]')
      console.log(this.CarbonFootprintDto.materialProcessing["wasteHandleDto"]["voCsDto"][this.vocCo2Process])
      console.log('this.formDataCo2')
      console.log(this.formDataCo2Process)
      console.log(this.CarbonFootprintDto)
      this.$refs.pop.messagePopShow("保存成功")
    },

    saveWasted() {
      localStorage.setItem(this.selectedNameEnglish + "Collect", JSON.stringify(this.formData))
      var item1 = localStorage.getItem("localAllWastedCollect")
      if (item1) {
        this.localAllWastedCollect = JSON.parse(item1)
        // 寻找是修改还是新增
        var flag = false;
        for (let i = 0; i < item1.length; i++) {
          if (this.localAllWastedCollect[this.selectedNameEnglish] !== null) {
            this.localAllWastedCollect[this.selectedNameEnglish] = this.formData
            flag = true
            break;
          }
        }

        if (!flag) {
          this.localAllWastedCollect[this.selectedNameEnglish] = this.formData
        }

        localStorage.setItem("localAllWastedCollect", JSON.stringify(this.localAllWastedCollect))

        console.log("this.localAllWastedCollect")
        console.log(this.localAllWastedCollect)

      } else {
        // 缓存中的localAllWastedCollect不存在，初始化
        this.localAllWastedCollect[this.selectedNameEnglish] = this.formData

        localStorage.setItem("localAllWastedCollect", JSON.stringify(this.localAllWastedCollect))
      }
      this.CarbonFootprintDto.materialCollectDto[this.selectedStage][this.selectedNameEnglish] = this.formData
      this.selectedWastedOption = null
      this.selectedWastedOptionParam = null

      this.selectedItemsList = this.disChargeList.filter(item => localStorage.getItem(item.nameEnglish + "Collect") !== null)

      const selectedItems = {}
      this.disChargeList.forEach(item => {
        console.log(item)
        const isSelected = localStorage.getItem(item.nameEnglish + "Collect") !== null
        if (isSelected) {
          selectedItems[item.nameEnglish] = true
        }
      })
      console.log('selectedItems')
      console.log(selectedItems)
      this.selectedItemsCollect = selectedItems
      // return selectedItems

      // 强制更新组件
      // this.$forceUpdate()

    },

    cancelSelected() {
      if (this.CarbonFootprintDto.materialCollectDto[this.selectedStage][this.selectedNameEnglish] !== null) {
        this.CarbonFootprintDto.materialCollectDto[this.selectedStage][this.selectedNameEnglish] = null
        var oldList4Item = null
        for (let i = 0; i < this.$refs.fuelItem4.length; i++) {
          if (this.$refs.fuelItem4[i].innerText === this.selectedWastedOption.name) {
            oldList4Item = this.$refs.fuelItem4[i]
          }
        }
        if (localStorage.getItem(this.selectedNameEnglish + "Collect")) {
          localStorage.removeItem(this.selectedNameEnglish + "Collect")
        }
        if (localStorage.getItem("tableDataWastedCollect")) {
          var parse = JSON.parse(localStorage.getItem("tableDataWastedCollect"));
          for (let i = 0; i < parse.length; i++) {
            if (parse[i].englishName === this.selectedNameEnglish) {
              console.log("in if");
              console.log(parse[i].englishName);
              console.log(this.selectedNameEnglish);
              parse.splice(i, 1); // 使用 splice() 方法删除元素
              break;
            }
          }

          var item1 = localStorage.getItem("localAllWastedCollect")
          if (item1) {
            this.localAllWastedCollect = JSON.parse(item1)

            delete this.localAllWastedCollect[this.selectedNameEnglish]

            localStorage.setItem("localAllWastedCollect", JSON.stringify(this.localAllWastedCollect))

            console.log("delete this.localAllWastedCollect")
            console.log(this.localAllWastedCollect)
          }

          console.log("parse:");
          console.log(parse);
          localStorage.setItem("tableDataWastedCollect", JSON.stringify(parse));

        }
        oldList4Item.style.backgroundColor = "white"
        oldList4Item.style.color = "black"
        oldList4Item.style.border = "#8f8f8f 1px solid"
        this.selectedNameEnglish = null
        this.selectedStage = null
        this.selectedWastedOptionParam = null
        this.selectedWastedOption = null

        this.selectedItemsList = this.disChargeList.filter(item => localStorage.getItem(item.nameEnglish + "Collect") !== null)

        // 强制更新组件
        this.$forceUpdate()
      }
    },

    changeWastedOpt(item, arrIndex) {

      this.selectedWastedOption = item

      console.log("this.selectedWastedOption")
      console.log(item)

      this.selectedWastedOptionParam = null
      // this.formData = null
      this.selectedStage = this.selectedWastedOption.stage
      this.selectedNameEnglish = this.selectedWastedOption.nameEnglish

      console.log("localStorage.getItem(this.selectedNameEnglish---")
      console.log(localStorage.getItem(this.selectedNameEnglish + "Collect"))
      if (localStorage.getItem(this.selectedNameEnglish + "Collect")) {
        this.formData = JSON.parse(localStorage.getItem(this.selectedNameEnglish + "Collect"))
      } else {
        this.formData = {}
      }

      this.postRequest('/carbon-service/CarbonService/getParametersByDischargeCollect/' + localStorage.getItem("companyId"), item.id).then(
          res => {
            console.log(res)
            this.selectedWastedOptionParam = res
          }
      )

      // console.log(this.visualWasted)
      const id = item.id;
      var index = this.selectFuelItemList4.indexOf(id);
      console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          name: item.name,
          englishName: item.nameEnglish
        }
        // console.log('one')
        // console.log(one)
        if (localStorage.getItem("tableDataWastedCollect")) {
          this.tableDataWastedCollect = JSON.parse(localStorage.getItem("tableDataWastedCollect"))
          this.tableDataWastedCollect.push(one)
          localStorage.setItem("tableDataWastedCollect", JSON.stringify(this.tableDataWastedCollect))
        } else {
          this.tableDataWastedCollect.push(one)
          localStorage.setItem("tableDataWastedCollect", JSON.stringify(this.tableDataWastedCollect))
        }

        this.selectFuelItemList4.push(id)
        this.$refs.fuelItem4[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem4[arrIndex].style.color = "white"
        this.$refs.fuelItem4[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      }
    },


    saveWastedProcess() {
      localStorage.setItem(this.selectedNameEnglishProcess + "Process", JSON.stringify(this.formDataProcess))
      var item1 = localStorage.getItem("localAllWastedProcess")
      if (item1) {
        this.localAllWastedProcess = JSON.parse(item1)
        // 寻找是修改还是新增
        var flag = false;
        for (let i = 0; i < item1.length; i++) {
          if (this.localAllWastedProcess[this.selectedNameEnglishProcess] !== null) {
            this.localAllWastedProcess[this.selectedNameEnglishProcess] = this.formDataProcess
            flag = true
            break;
          }
        }

        if (!flag) {
          this.localAllWastedProcess[this.selectedNameEnglishProcess] = this.formDataProcess
        }

        localStorage.setItem("localAllWastedProcess", JSON.stringify(this.localAllWastedProcess))

        console.log("this.localAllWastedProcess")
        console.log(this.localAllWastedProcess)

      } else {
        // 缓存中的localAllWastedCollect不存在，初始化
        this.localAllWastedProcess[this.selectedNameEnglishProcess] = this.formData

        localStorage.setItem("localAllWastedProcess", JSON.stringify(this.localAllWastedProcess))
      }
      this.CarbonFootprintDto.materialProcessing[this.selectedStageProcess][this.selectedNameEnglishProcess] = this.formDataProcess
      this.selectedWastedOptionProcess = null
      this.selectedWastedOptionParamProcess = null

      this.selectedItemsListProcess = this.disChargeList.filter(item => localStorage.getItem(item.nameEnglish + "Process") !== null)

      const selectedItems = {}
      this.disChargeListProcess.forEach(item => {
        console.log(item)
        const isSelected = localStorage.getItem(item.nameEnglish + "Process") !== null
        if (isSelected) {
          selectedItems[item.nameEnglish] = true
        }
      })
      this.selectedItemsProcess = selectedItems
      console.log('selectedItems')
      console.log(selectedItems)

      // 强制更新组件
      this.$forceUpdate()


    },

    cancelSelectedProcess() {
      if (this.CarbonFootprintDto.materialProcessing[this.selectedStageProcess][this.selectedNameEnglishProcess] !== null) {
        this.CarbonFootprintDto.materialProcessing[this.selectedStageProcess][this.selectedNameEnglishProcess] = null
        var oldList4Item = null
        for (let i = 0; i < this.$refs.fuelItem7.length; i++) {
          if (this.$refs.fuelItem7[i].innerText === this.selectedWastedOptionProcess.name) {
            oldList4Item = this.$refs.fuelItem7[i]
          }
        }
        if (localStorage.getItem(this.selectedNameEnglishProcess + "Process")) {
          localStorage.removeItem(this.selectedNameEnglishProcess + "Process")
        }
        if (localStorage.getItem("tableDataWastedProcess")) {
          var parse = JSON.parse(localStorage.getItem("tableDataWastedProcess"));
          for (let i = 0; i < parse.length; i++) {
            if (parse[i].englishName === this.selectedNameEnglishProcess) {
              console.log("in if");
              console.log(parse[i].englishName);
              console.log(this.selectedNameEnglishProcess);
              parse.splice(i, 1); // 使用 splice() 方法删除元素
              break;
            }
          }

          var item1 = localStorage.getItem("localAllWastedProcess")
          if (item1) {
            this.localAllWastedProcess = JSON.parse(item1)

            delete this.localAllWastedProcess[this.selectedNameEnglish]

            localStorage.setItem("localAllWastedProcess", JSON.stringify(this.localAllWastedProcess))

            console.log("delete this.localAllWastedProcess")
            console.log(this.localAllWastedProcess)
          }

          console.log("parse:");
          console.log(parse);
          localStorage.setItem("tableDataWastedProcess", JSON.stringify(parse));

        }
        oldList4Item.style.backgroundColor = "white"
        oldList4Item.style.color = "black"
        oldList4Item.style.border = "#8f8f8f 1px solid"
        this.selectedNameEnglishProcess = null
        this.selectedStageProcess = null
        this.selectedWastedOptionParamProcess = null
        this.selectedWastedOptionProcess = null
        this.selectedItemsListProcess = this.disChargeList.filter(item => localStorage.getItem(item.nameEnglish + "Process") !== null)

        // 强制更新组件
        this.$forceUpdate()
      }


    },

    changeWastedOptProcess(item, arrIndex) {
      this.selectedWastedOptionProcess = item
      this.selectedWastedOptionParamProcess = null
      this.selectedStageProcess = this.selectedWastedOptionProcess.stage
      this.selectedNameEnglishProcess = this.selectedWastedOptionProcess.nameEnglish

      console.log("localStorage.getItem(this.selectedNameEnglish---")
      console.log(localStorage.getItem(this.selectedNameEnglishProcess + "Process"))
      if (localStorage.getItem(this.selectedNameEnglishProcess + "Process")) {
        this.formDataProcess = JSON.parse(localStorage.getItem(this.selectedNameEnglishProcess + "Process"))
      } else {
        this.formDataProcess = {}
      }

      this.postRequest('/carbon-service/CarbonService/getParametersByDischargeCollect/' + localStorage.getItem("companyId"), item.id).then(
          res => {
            console.log(res)
            this.selectedWastedOptionParamProcess = res
          }
      )

      const id = item.id;
      var index = this.selectFuelItemList7.indexOf(id);
      console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          name: item.name,
          englishName: item.nameEnglish
        }
        if (localStorage.getItem("tableDataWastedProcess")) {
          this.tableDataWastedProcess = JSON.parse(localStorage.getItem("tableDataWastedProcess"))
          this.tableDataWastedProcess.push(one)
          localStorage.setItem("tableDataWastedProcess", JSON.stringify(this.tableDataWastedProcess))
        } else {
          this.tableDataWastedProcess.push(one)
          localStorage.setItem("tableDataWastedProcess", JSON.stringify(this.tableDataWastedProcess))
        }

        this.selectFuelItemList7.push(id)
        this.$refs.fuelItem7[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem7[arrIndex].style.color = "white"
        this.$refs.fuelItem7[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      }
    },

    changeWastedOptProcessed(item, arrIndex) {
      this.selectedWastedOptionProcessed = item
      this.selectedWastedOptionParamProcessed = null
      this.selectedStageProcessed = this.selectedWastedOptionProcessed.stage
      this.selectedNameEnglishProcessed = this.selectedWastedOptionProcessed.nameEnglish

      console.log("localStorage.getItem(this.selectedNameEnglish---")
      console.log(localStorage.getItem(this.selectedNameEnglishProcessed + "Processed"))
      if (localStorage.getItem(this.selectedNameEnglishProcessed + "Processed")) {
        this.formDataProcessed = JSON.parse(localStorage.getItem(this.selectedNameEnglishProcessed + "Processed"))
      } else {
        this.formDataProcessed = {}
      }

      this.postRequest('/carbon-service/CarbonService/getParametersByDischargeCollect/' + localStorage.getItem("companyId"), item.id).then(
          res => {
            console.log(res)
            this.selectedWastedOptionParamProcessed = res
          }
      )

      const id = item.id;
      var index = this.selectFuelItemList11.indexOf(id);
      console.log(index)
      if (index === -1) {
        var one = {
          id: id,
          name: item.name,
          englishName: item.nameEnglish
        }
        if (localStorage.getItem("tableDataWastedProcessed")) {
          this.tableDataWastedProcessed = JSON.parse(localStorage.getItem("tableDataWastedProcessed"))
          this.tableDataWastedProcessed.push(one)
          localStorage.setItem("tableDataWastedProcessed", JSON.stringify(this.tableDataWastedProcessed))
        } else {
          this.tableDataWastedProcessed.push(one)
          localStorage.setItem("tableDataWastedProcessed", JSON.stringify(this.tableDataWastedProcessed))
        }

        this.selectFuelItemList11.push(id)
        this.$refs.fuelItem11[arrIndex].style.backgroundColor = "rgb(98, 217, 151)"
        this.$refs.fuelItem11[arrIndex].style.color = "white"
        this.$refs.fuelItem11[arrIndex].style.border = "rgb(98, 217, 151) 1px solid"
      }
    },

    saveWastedProcessed() {
      localStorage.setItem(this.selectedNameEnglishProcessed + "Processed", JSON.stringify(this.formDataProcessed))
      var item1 = localStorage.getItem("localAllWastedProcessed")
      if (item1) {
        this.localAllWastedProcessed = JSON.parse(item1)
        // 寻找是修改还是新增
        var flag = false;
        for (let i = 0; i < item1.length; i++) {
          if (this.localAllWastedProcessed[this.selectedNameEnglishProcessed] !== null) {
            this.localAllWastedProcessed[this.selectedNameEnglishProcessed] = this.formDataProcessed
            flag = true
            break;
          }
        }

        if (!flag) {
          this.localAllWastedProcessed[this.selectedNameEnglishProcessed] = this.formDataProcessed
        }

        localStorage.setItem("localAllWastedProcessed", JSON.stringify(this.localAllWastedProcessed))

        console.log("this.localAllWastedProcessed")
        console.log(this.localAllWastedProcessed)

      } else {
        // 缓存中的localAllWastedCollect不存在，初始化
        this.localAllWastedProcessed[this.selectedNameEnglishProcessed] = this.formDataProcessed

        localStorage.setItem("localAllWastedProcessed", JSON.stringify(this.localAllWastedProcessed))
      }
      this.CarbonFootprintDto.processedGoodsDto[this.selectedStageProcessed][this.selectedNameEnglishProcessed] = this.formDataProcessed
      this.selectedWastedOptionProcessed = null
      this.selectedWastedOptionParamProcessed = null
      this.selectedItemsListProcessed = this.disChargeList.filter(item => localStorage.getItem(item.nameEnglish + "Processed") !== null)

      const selectedItems = {}
      this.disChargeListProcessed.forEach(item => {
        console.log(item)
        const isSelected = localStorage.getItem(item.nameEnglish + "Processed") !== null
        if (isSelected) {
          selectedItems[item.nameEnglish] = true
        }
      })
      console.log('selectedItems')
      console.log(selectedItems)
      this.selectedItemsProcessed = selectedItems
      // 强制更新组件
      // this.$forceUpdate()

    },

    cancelSelectedProcessed() {
      if (this.CarbonFootprintDto.processedGoodsDto[this.selectedStageProcessed][this.selectedNameEnglishProcessed] !== null) {
        this.CarbonFootprintDto.processedGoodsDto[this.selectedStageProcessed][this.selectedNameEnglishProcessed] = null
        var oldList4Item = null
        for (let i = 0; i < this.$refs.fuelItem11.length; i++) {
          if (this.$refs.fuelItem11[i].innerText === this.selectedWastedOptionProcessed.name) {
            oldList4Item = this.$refs.fuelItem11[i]
          }
        }
        if (localStorage.getItem(this.selectedNameEnglishProcessed + "Processed")) {
          localStorage.removeItem(this.selectedNameEnglishProcessed + "Processed")
        }
        if (localStorage.getItem("tableDataWastedProcessed")) {
          var parse = JSON.parse(localStorage.getItem("tableDataWastedProcessed"));
          for (let i = 0; i < parse.length; i++) {
            if (parse[i].englishName === this.selectedNameEnglishProcessed) {
              console.log("in if");
              console.log(parse[i].englishName);
              console.log(this.selectedNameEnglishProcessed);
              parse.splice(i, 1); // 使用 splice() 方法删除元素
              break;
            }
          }

          var item1 = localStorage.getItem("localAllWastedProcessed")
          if (item1) {
            this.localAllWastedProcessed = JSON.parse(item1)

            delete this.localAllWastedProcessed[this.selectedNameEnglishProcessed]

            localStorage.setItem("localAllWastedProcessed", JSON.stringify(this.localAllWastedProcessed))

            console.log("delete this.localAllWastedProcessed")
            console.log(this.localAllWastedProcessed)
          }

          console.log("parse:");
          console.log(parse);
          localStorage.setItem("tableDataWastedProcessed", JSON.stringify(parse));

        }
        oldList4Item.style.backgroundColor = "white"
        oldList4Item.style.color = "black"
        oldList4Item.style.border = "#8f8f8f 1px solid"
        this.selectedNameEnglishProcessed = null
        this.selectedStageProcessed = null
        this.selectedWastedOptionParamProcessed = null
        this.selectedWastedOptionProcessed = null
        this.selectedItemsListProcess = this.disChargeList.filter(item => localStorage.getItem(item.nameEnglish + "Processed") !== null)

        // 强制更新组件
        this.$forceUpdate()
      }

    },

    saveVocsCh4Processed() {
      console.log(JSON.stringify(this.formDataCh4Processed))
      console.log(this.vocCh4Processed)
      localStorage.setItem(this.vocCh4Processed + "Processed", JSON.stringify(this.formDataCh4Processed))
      this.CarbonFootprintDto.processedGoodsDto["wasteHandleDto"]["voCsDto"][this.vocCh4Processed] = this.formDataCh4Processed
      console.log(this.CarbonFootprintDto)
      this.$refs.pop.messagePopShow("保存成功")
    },

    saveVocsCo2Processed() {
      // console.log(JSON.stringify(this.formDataCo2))
      localStorage.setItem(this.vocCo2Processed + "Processed", JSON.stringify(this.formDataCo2Processed))
      this.CarbonFootprintDto.processedGoodsDto["wasteHandleDto"]["voCsDto"][this.vocCo2Processed] = this.formDataCo2Processed

      console.log('this.CarbonFootprintDto.processedGoodsDto["wasteHandleDto"]["voCsDto"][this.vocCo2]')
      console.log(this.CarbonFootprintDto.processedGoodsDto["wasteHandleDto"]["voCsDto"][this.vocCo2Processed])
      console.log('this.formDataCo2')
      console.log(this.formDataCo2Processed)
      console.log(this.CarbonFootprintDto)
      this.$refs.pop.messagePopShow("保存成功")
    },

    openDrawer(type) {
      console.log(type)
      if (type === 'one1') {
        this.drawerType = type;
        var one1 = this.$refs.one1;
        one1.style.display = 'block'
      } else if (type === 'one2') {
        this.drawerType = type;
        var one2 = this.$refs.one2;
        one2.style.display = 'block'
      } else if (type === 'one3') {
        this.drawerType = type;
        var one3 = this.$refs.one3;
        one3.style.display = 'block'
      } else if (type === 'one4') {
        this.drawerType = type;
        var one4 = this.$refs.one4;
        one4.style.display = 'block'
      } else if (type === 'one5') {
        this.drawerType = type;
        var one5 = this.$refs.one5;
        one5.style.display = 'block'
      } else if (type === 'two0') {
        this.drawerType = type;
        var two0 = this.$refs.two0;
        two0.style.display = 'block'
      } else if (type === 'two1') {
        this.drawerType = type;
        var two1 = this.$refs.two1;
        two1.style.display = 'block'
      } else if (type === 'two2') {
        this.drawerType = type;
        var two2 = this.$refs.two2;
        two2.style.display = 'block'
      } else if (type === 'two3') {
        this.drawerType = type;
        var two3 = this.$refs.two3;
        two3.style.display = 'block'
      } else if (type === 'two4') {
        this.drawerType = type;
        var two4 = this.$refs.two4;
        two4.style.display = 'block'
      } else if (type === 'three1') {
        console.log(111111)
        this.drawerType = type;
        var three1 = this.$refs.three1;
        three1.style.display = 'block'
      } else if (type === 'three2') {
        this.drawerType = type;
        var three2 = this.$refs.three2;
        three2.style.display = 'block'
      } else if (type === 'three3') {
        this.drawerType = type;
        var three3 = this.$refs.three3;
        three3.style.display = 'block'
      } else if (type === 'three4') {
        this.drawerType = type;
        var three4 = this.$refs.three4;
        three4.style.display = 'block'
      } else if (type === 'three5') {
        this.drawerType = type;
        var three5 = this.$refs.three5;
        three5.style.display = 'block'
      } else if (type === 'three6') {
        this.drawerType = type;
        var three6 = this.$refs.three6;
        three6.style.display = 'block'
      } else if (type === 'three8') {
        this.drawerType = type;
        var three8 = this.$refs.three8;
        three8.style.display = 'block'
      } else if (type === 'three10') {
        this.drawerType = type;
        var three10 = this.$refs.three10;
        three10.style.display = 'block'
      }
    },
    closeTheDrawer(type) {
      if (type === 'wasted1') {
        console.log(2222222222)
        var wasted1 = this.$refs.wasted1;
        wasted1.style.display = 'none'
      } else if (this.drawerType === 'one1') {
        var one1 = this.$refs.one1;
        one1.style.display = 'none'
      } else if (this.drawerType === 'one2') {
        var one2 = this.$refs.one2;
        one2.style.display = 'none'
      } else if (this.drawerType === 'one3') {
        var one3 = this.$refs.one3;
        one3.style.display = 'none'
      } else if (this.drawerType === 'one4') {
        var one4 = this.$refs.one4;
        one4.style.display = 'none'
      } else if (this.drawerType === 'one5') {
        var one5 = this.$refs.one5;
        one5.style.display = 'none'
      } else if (this.drawerType === 'two0') {
        var two0 = this.$refs.two0;
        two0.style.display = 'none'
      } else if (this.drawerType === 'two1') {
        var two1 = this.$refs.two1;
        two1.style.display = 'none'
      } else if (this.drawerType === 'two2') {
        var two2 = this.$refs.two2;
        two2.style.display = 'none'
      } else if (this.drawerType === 'two3') {
        var two3 = this.$refs.two3;
        two3.style.display = 'none'
      } else if (this.drawerType === 'two4') {
        var two4 = this.$refs.two4;
        two4.style.display = 'none'
      } else if (this.drawerType === 'three1') {
        var three1 = this.$refs.three1;
        three1.style.display = 'none'
      } else if (this.drawerType === 'three2') {
        var three2 = this.$refs.three2;
        three2.style.display = 'none'
      } else if (this.drawerType === 'three3') {
        var three3 = this.$refs.three3;
        three3.style.display = 'none'
      } else if (this.drawerType === 'three4') {
        var three4 = this.$refs.three4;
        three4.style.display = 'none'
      } else if (this.drawerType === 'three5') {
        var three5 = this.$refs.three5;
        three5.style.display = 'none'
      } else if (this.drawerType === 'three6') {
        var three6 = this.$refs.three6;
        three6.style.display = 'none'
      } else if (this.drawerType === 'three8') {
        var three8 = this.$refs.three8;
        three8.style.display = 'none'
      } else if (this.drawerType === 'three10') {
        var three10 = this.$refs.three10;
        three10.style.display = 'none'
      }

    },
  },


  async mounted() {

    this.companyId = localStorage.getItem("companyId")

    await this.validPower()
    if (this.power === false) {
      this.$refs.pop.messagePopShow("您所在的组织没有订阅这个服务")
      await this.$router.push("/gallery")
      return;
    }

    await this.getAllDisChargeOptions()
    await this.getAllFuelsOptions()

    console.log("==================================")
    this.disChargeList.forEach(item => {
      console.log(item)
      const isSelected = localStorage.getItem(item.nameEnglish + "Collect") !== null
      if (isSelected) {
        this.selectedItemsCollect[item.nameEnglish] = true
      }
    })
    console.log(this.selectedItemsCollect)

    this.disChargeListProcess.forEach(item => {
      console.log(item)
      const isSelected = localStorage.getItem(item.nameEnglish + "Process") !== null
      if (isSelected) {
        this.selectedItemsProcess[item.nameEnglish] = true
      }
    })
    console.log(this.selectedItemsProcess)


    this.disChargeListProcessed.forEach(item => {
      console.log(item)
      const isSelected = localStorage.getItem(item.nameEnglish + "Processed") !== null
      if (isSelected) {
        this.selectedItemsProcessed[item.nameEnglish] = true
      }
    })
    console.log(this.selectedItemsProcessed)


    console.log("==================================")


    var that = this;
    for (let i = 0; i < that.vocsCH4.length; i++) {
      if (localStorage.getItem(that.vocsCH4[i].nameEnglish + "Collect") !== null) {
        that.vocCh4 = that.vocsCH4[i].nameEnglish
        var formDataCh4 = localStorage.getItem(that.vocsCH4[i].nameEnglish + "Collect")
        that.formDataCh4 = JSON.parse(formDataCh4)
      }
    }

    console.log(that.formDataCh4)

    for (let i = 0; i < that.vocsCO2.length; i++) {
      if (localStorage.getItem(this.vocsCO2[i].nameEnglish + "Collect") !== null) {
        that.vocCo2 = that.vocsCO2[i].nameEnglish
        var formDataCO2 = localStorage.getItem(that.vocsCO2[i].nameEnglish + "Collect")
        that.formDataCo2 = JSON.parse(formDataCO2)
      }
    }

    for (let i = 0; i < that.vocsCH4.length; i++) {
      if (localStorage.getItem(that.vocsCH4[i].nameEnglish + "Process") !== null) {
        that.vocCh4Process = that.vocsCH4[i].nameEnglish
        var formDataCh4Process = localStorage.getItem(that.vocsCH4[i].nameEnglish + "Process")
        that.formDataCh4Process = JSON.parse(formDataCh4Process)
      }
    }

    console.log(that.formDataCh4)

    for (let i = 0; i < that.vocsCO2.length; i++) {
      if (localStorage.getItem(this.vocsCO2[i].nameEnglish + "Process") !== null) {
        that.vocCo2Process = that.vocsCO2[i].nameEnglish
        var formDataCO2Process = localStorage.getItem(that.vocsCO2[i].nameEnglish + "Process")
        that.formDataCo2Process = JSON.parse(formDataCO2Process)
      }
    }

    for (let i = 0; i < that.vocsCH4.length; i++) {
      if (localStorage.getItem(that.vocsCH4[i].nameEnglish + "Processed") !== null) {
        that.vocCh4Processed = that.vocsCH4[i].nameEnglish
        var formDataCh4Processed = localStorage.getItem(that.vocsCH4[i].nameEnglish + "Processed")
        that.formDataCh4Processed = JSON.parse(formDataCh4Processed)
      }
    }

    console.log(that.formDataCh4)

    for (let i = 0; i < that.vocsCO2.length; i++) {
      if (localStorage.getItem(this.vocsCO2[i].nameEnglish + "Processed") !== null) {
        that.vocCo2Processed = that.vocsCO2[i].nameEnglish
        var formDataCO2Processed = localStorage.getItem(that.vocsCO2[i].nameEnglish + "Processed")
        that.formDataCo2Processed = JSON.parse(formDataCO2Processed)
      }
    }

    if (localStorage.getItem('outSellPower')) {
      this.CarbonFootprintDto.processedGoodsDto.outSellPowerConsumption = localStorage.getItem('outSellPower')
    }
    if (localStorage.getItem('purchasePower')) {
      this.CarbonFootprintDto.processedGoodsDto.purchasePowerConsumption = localStorage.getItem('purchasePower')
    }
    if (localStorage.getItem('powerConsumptionCollect')) {
      this.CarbonFootprintDto.materialCollectDto.powerConsumption = localStorage.getItem('powerConsumptionCollect')
    }
    if (localStorage.getItem('powerConsumptionProcess')) {
      this.CarbonFootprintDto.materialProcessing.powerConsumption = localStorage.getItem('powerConsumptionProcess')
    }
    if (localStorage.getItem('powerConsumptionProcessed')) {
      this.CarbonFootprintDto.processedGoodsDto.powerConsumption = localStorage.getItem('powerConsumptionProcessed')
    }
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

.dashboard-container-main-info {
  width: 90%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  /*margin-bottom: 2%;*/
  margin-top: 2%;
  background-color: rgba(255, 255, 255, .7);
  box-shadow: var(--shadow-3);
  border-radius: var(--radius-20);
  margin-bottom: 3%;
}

.dashboard-container-main-info-block {
  width: 90%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}


.dashboard-container-main-info-text {
  width: 50%;
  min-height: 100%;
  display: flex;
  align-items: center;
  font-size: var(--fs-4);
  font-weight: var(--fw-600);
  letter-spacing: 1px;
}

.dashboard-container-main-info-btns {
  width: 50%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 10px;
}

.dashboard-container-main-info-btn {
  width: 100px;
  height: 40px;
  background-color: var(--youth-green-2);
  border-radius: var(--radius-10);
  box-shadow: var(--shadow-5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  font-weight: var(--fw-600);
}

.btn-2 {
  background-color: var(--dark-pink);
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

.dashboard-container-main-title-list {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
  gap: 15px;
}

.dashboard-container-main-title-list-item {
  width: fit-content;
  height: 20px;
  background-color: var(--youth-green);

  /*background-color: rgba(255,255,255,0.8);*/
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 12px;
  border-radius: var(--radius-30);
  gap: 3px;
  font-weight: var(--fw-600);
  letter-spacing: 1px;
  color: white;
}

.dashboard-container-main-title-list-item ion-icon {
  font-size: var(--fs-7);
}

.dashboard-container-main-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  min-height: 400px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: var(--radius-20);
  box-shadow: var(--shadow-3);
  margin-top: 3%;
}

.small-card-200 {
  min-height: 200px;
}

.dashboard-container-main-card-title {
  display: flex;
  width: 95%;
  font-size: var(--fs-4);
  font-weight: var(--fw-600);
  justify-content: center;
  height: 120px;
  gap: 5px;
}

.dashboard-container-main-card-title-left {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.dashboard-container-main-card-title-right {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3%;
}

.dashboard-container-main-card-title-right-btn {
  width: fit-content;
  padding: 12px 16px;
  font-size: var(--fs-7);
  color: white;
  background-color: var(--youth-blue-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-10);
  box-shadow: var(--shadow-5);
  cursor: pointer;
  letter-spacing: 1px;
  font-weight: var(--fw-600);
  gap: 5px;
}

.dashboard-container-main-card-title-right-btn ion-icon {
  font-size: var(--fs-5);
}

.dashboard-container-main-card-title-right-btn:hover {
  box-shadow: var(--shadow-6);
  transform: translateY(-3px);
  transition: var(--transition-3);
}

.dashboard-container-main-div {
  width: 90%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.dashboard-container-main-div-item {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  background-color: #fff;
  border-radius: var(--radius-20);
  box-shadow: var(--shadow-5);
  cursor: pointer;
}

.dashboard-container-main-card-title-top {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;
  letter-spacing: 3px;
}

.dashboard-container-main-card-title-text {
  letter-spacing: 1px;
  color: #2c2c2c;
}

.dashboard-container-main-card-title-text-sub {
  color: #8f8f8f;
  font-size: var(--fs-8);
  letter-spacing: 1px;
  font-weight: var(--fw-500);
}


.dashboard-container-main-card-table {
  width: 95%;
  height: 400px;
  border-radius: var(--radius-10);
  overflow: auto;
}


.my-table thead {
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, .8);
}

.my-table th, .my-table td {
  padding: 10px;
  text-align: left;
  white-space: nowrap;
}

.my-table {
  border-collapse: collapse;
  width: 100%;
  overflow: auto;
}


.no-data {
  text-align: center;
  font-size: var(--fs-7);
  color: #999;
}

.no-data td {
  padding: 40px;
  text-align: center;
}

.no-data td[colspan="8"] {
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
}

/*.my-table th, .my-table td {*/
/*  padding: 10px;*/
/*  text-align: left;*/
/*}*/

.my-table th {
  /*background-color: #f1f1f1;*/
  border-bottom: 1px solid #ddd;
  letter-spacing: 1px;
  font-family: var(--ff-almm);
  font-size: var(--fs-7);
}

.my-table td {
  /*border-bottom: 1px solid #ddd;*/
}

.my-table td:first-child, .my-table th:first-child {
  border-left: none;
}

.my-table td:last-child, .my-table th:last-child {
  border-right: none;
}

.my-table .odd-row td {
  background-color: #eeeafa;
}

.my-table select, .my-table input[type="text"] {
  width: 100%;
  border: none;
  background-color: transparent;
  box-sizing: border-box;
}

.my-table select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%3E%3Cpath%20fill%3D%22%23333333%22%20d%3D%22M1%202.5l3%203%203-3%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 20px;
  cursor: pointer;
}

.my-table input[type="text"] {
  padding: 6px;
  border-radius: var(--radius-6);
}

.my-table input[type="text"]:hover {
  padding: 5px;
  border: #bdbdbd 1px solid;
  box-shadow: var(--shadow-6);
}

.my-table input[type="text"]:focus {
  -web-kit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  padding: 5px;
  border: #9a9a9a 0.01rem solid;;
  box-shadow: var(--shadow-6);
  background-color: white;
}

.my-table select:disabled {
  color: #999;
  background-image: none;
  cursor: default;
}

.dashboard-drawer-right {
  background-color: #fff;
  position: absolute;
  width: 40%;
  height: 100%;
  top: 0;
  right: 0;
  overflow-y: scroll;
  box-shadow: var(--shadow-2);
  display: none;
  z-index: 1000;

  /*在火狐浏览器中隐藏滚动条*/
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
}

/* 隐藏滚动条 */
.dashboard-drawer-right::-webkit-scrollbar {
  width: 0em;
  background-color: #F5F5F5;
}

/* 滚动条滑块 */
.dashboard-drawer-right::-webkit-scrollbar-thumb {
  background-color: #000000;
  opacity: 0.7;
  max-height: 50px;
}

.dashboard-drawer-right-form {

}

.form-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.option {
  margin-right: 20px;
}

.option-label {
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
}

.data-wrapper {
  margin-top: 4%;
  width: 80%;
  position: relative;
}

h3 {
  font-size: 18px;
  font-weight: bold;
}

.data-form {
  margin-top: 10px;
  width: 100%;
  height: fit-content;
  gap: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
}

.form-label {
  font-size: 14px;
  margin-bottom: 5px;
}

.form-input {
  border: 1px solid #ccc;
  padding: 5px 5px 5px 10px;
  font-size: 14px;
  width: 90%;
  border-radius: var(--radius-8);
}

.form-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: fit-content;
  gap: 30px;
  margin-top: 20px;
}


.form-submit {
  background-color: var(--youth-green);
  color: white;
  padding: 13px 24px;
  border: none;
  border-radius: var(--radius-10);
  cursor: pointer;
  font-size: 14px;
}

.form-submit-2 {
  background-color: lightcoral;
  color: white;
  padding: 13px 24px;
  border: none;
  border-radius: var(--radius-10);
  cursor: pointer;
  font-size: 14px;
}


.dashboard-drawer-right-topic {
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: var(--fs-4);
  font-weight: var(--fw-600);
  margin-left: 5%;
  letter-spacing: 2px;
  font-family: var(--ff-almm);
}

.dashboard-drawer-right-main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  flex-direction: column;
  margin-top: 5%;
}

.dashboard-drawer-right-main-list {
  width: 90%;
  height: fit-content;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.dashboard-drawer-right-main-list-item {
  padding: 10px 18px;
  border-radius: var(--radius-10);
  border: #8f8f8f 1px solid;
  cursor: pointer;
  letter-spacing: 1px;
  box-shadow: var(--shadow-2);
}

.selected {
  background-color: rgb(98, 217, 151);
  color: white;
  border: rgb(98, 217, 151) 1px solid;
}

.dashboard-charts-inner {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.voc-list {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  min-height: 100px;
  gap: 15px;
}

.voc-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  padding: 14px 20px;
  background-color: #fff;
  border-radius: var(--radius-10);
  box-shadow: var(--shadow-5);
  letter-spacing: 1px;
  cursor: pointer;
}

.select-wrapper {
  position: relative;
  width: 200px;
  font-size: 16px;
  color: #333;
}

.selected-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.arrow-down {
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #333;
}

.options {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  display: none;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
}

.options.active {
  display: block;
}

.option {
  padding: 10px;
  cursor: pointer;
}

.option:hover {
  background-color: #f0f0f0;
}

.search-box {
  width: 90%;
  height: 50px;
  background: transparent;
}

.search-container {
  display: flex;
  align-items: center;
  /*background-color: white;*/
  border-bottom: 1px solid #ccc;
  padding: 0 8px;
}

.search-container input[type="text"] {
  border: none;
  padding: 10px;
  flex: 1;
}

.search-container input[type="text"]:focus {
  outline: none;
}

.search-container button[type="submit"] {
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.search-container button[type="submit"]:hover {
  background-color: #f1f1f1;
}

/*.search-container::before {*/
/*  content: "";*/
/*  position: absolute;*/
/*  left: 0;*/
/*  bottom: 0;*/
/*  width: 100%;*/
/*  height: 1px;*/
/*  background-color: #ccc;*/
/*}*/

.search-text {
  font-weight: var(--fw-700);
  font-size: var(--fs-7);
  /*font-family: var(--ff-manrope);*/
  transition: font-size 0.5s ease;
  line-height: 1.7rem;
  background: transparent;

}


@media (max-width: 1120px) {
  .dashboard-container-main-title {
    width: 80%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /*margin-bottom: 2%;*/
    margin-top: 2%;
  }
}


@media (max-width: 845px) {
  .dashboard-container-main-title-list {
    width: 80%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
    flex-wrap: wrap;
    gap: 10px;
  }

  .dashboard-container-main-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    min-height: 400px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: var(--radius-20);
    box-shadow: var(--shadow-3);
    margin-top: 6%;
  }
}

</style>