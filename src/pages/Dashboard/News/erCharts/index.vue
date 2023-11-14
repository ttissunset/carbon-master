<template>
  <div>
    <!-- 容器 -->
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { BarChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);
export default {
  name: "lineCharts",
  props:['lineChart'],
  data() {
    return {
        chartData: this.lineChart
    }
  },
  mounted() {
    // 初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    //    配置数据
    lineCharts.setOption({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: 0,
    width:'230px',
    height:'130px',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: this.chartData.xData,
      axisTick: {
        alignWithLabel: true
      },
        axisLabel: {
        formatter: function (value) {
            var startIndex
            var endIndex
            var newStr
            var str = value
            for(var i =0;i<str.length;i++){
                 if(str.substring(i,i+1) == '('){
                     startIndex = i
                 }
                 if(str.substring(startIndex,startIndex+1) ==')'){
                     endIndex = i
                 }
            }
               newStr =  str.substring(0,startIndex)+'\n'+str.substring(startIndex,endIndex)
         return newStr
            },
         textStyle: {
             fontSize:'10',
         }
    }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '70%',
      data: this.chartData.yData
    }
  ]
    });
  },
};
</script>

<style scoped>
.charts {
  width: 230px;
  height: 120px;
}
</style>