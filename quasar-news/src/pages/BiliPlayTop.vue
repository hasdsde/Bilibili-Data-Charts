<template>
  <div class="q-mt-lg tmp">
    <!-- 图表 -->
    <div class="row">
      <div class="col-1">
      </div>
      <div class="col-6">
        <v-chart class="chart" :option="option" autoresize v-if="isShowChart" />
      </div>
      <div class="col-1">
      </div>
    </div>
    <!-- 表格  -->
    <div class="q-pa-md fit row wrap justify-center items-center content-center">
      <q-table style="width: 50vw;" title="番剧Top250信息" :rows="chartData" :columns="columns"
        :pagination="myInitialPagination" row-key="index">
        <template v-slot:body-cell-link="props">
          <q-td :props="props">
            <q-btn color="primary" size="sm" :href="props.value" target="_blank">跳转</q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { List, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide, onUnmounted } from 'vue';
import { link } from 'fs';
import { api } from 'src/boot/axios';
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

let isShowChart = ref(true)

onUnmounted(() => {
  // 设置虚线
  isShowChart.value = false
})

const myInitialPagination: any = {
  sortby: 'score',
  rowsPerPage: '50'
}
let data: any = []
let chartData: any = ref([])
api.get('/bili_bangumi_list').then(res => {
  data = res.data
  chartData.value = handleData(data.data.list)
  // console.log(chartData.value);
})
//图表
function handleData(list: Array<any>) {
  const returnData: any = []
  list.forEach((item: any, index: number) => {
    if (item.order.includes('亿')) {
      item.order = item.order.replace(/[^0-9.]/ig, "")
      const n = Number.parseFloat(item.order) * 10000
      item.order = n.toString()
    }
    item.order = item.order.replace(/[^0-9.]/ig, "")
    returnData.push({ name: item.title, value: Number.parseFloat(item.order), link: item.link, score: item.score, index: index })
  })
  return returnData;
}

provide(THEME_KEY, 'white');
const option = ref({
  title: {
    text: '番剧 Top250 播放量占比',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: '播放量(单位：万)',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: chartData,
    },
  ],
});

//表格
const columns: any = [
  { name: 'index', label: '#', field: 'index', align: 'center' },
  { name: 'name', required: true, label: '标题', align: 'left', field: 'name', sortable: true },
  { name: '播放量(单位：万)', align: 'center', label: '播放量(单位：万)', field: 'value', sortable: true },
  { name: '评分', label: '评分', field: 'score', sortable: true },
  { name: 'link', label: '链接', field: 'link', align: 'center' },
]
</script>
<style>
.chart {
  text-align: center;
  width: 70vw;
  height: 80vh;
}
</style>
