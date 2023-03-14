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
      <q-table style="width: 50vw;" title="番剧分数排行" :rows="chartDatas" :columns="columns" :pagination="myInitialPagination"
        row-key="index">
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
import data from '../bili.json'
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide, onUnmounted } from 'vue';

import "echarts";
import { api } from 'src/boot/axios';


let isShowChart = ref(true)

onUnmounted(() => {
  // 设置虚线
  isShowChart.value = false
})
const myInitialPagination: any = {
  sortby: 'score',
  rowsPerPage: '50'
}
//图表
function handleData(list: Array<any>) {
  const returnData: any = []
  list.forEach((item: any, index: number) => {
    if (item.order.includes('亿')) {
      item.order = item.order.replace(/[^0-9.]/ig, "")
      const n = Number.parseFloat(item.order) * 10000
      item.order = n.toString()
    }
    if (item.score == '') {
      item.score = 0
    }
    item.order = item.order.replace(/[^0-9.]/ig, "")
    returnData.push({ name: item.title, value: Number.parseFloat(item.order), link: item.link, score: Number.parseFloat(item.score), index: index })
  })
  console.log(returnData);
  return returnData.sort((a: any, b: any) => { return a.score - b.score })
}
let chartData: any = ref([])
let chartDatas: any = ref([])
const yaxis: any = ref([])
const series: any = ref([])
api.get('/bili_bangumi_list').then(res => {
  chartData.value = handleData(res.data.data.list)
  chartDatas.value = handleData(res.data.data.list)
  chartDatas.value.sort((a: any, b: any) => { return b.score - a.score })
  chartData.value.forEach((item: any) => {
    yaxis.value.push(item.name)
    series.value.push(item.score)
  })
})


provide(THEME_KEY, 'white');


//图表


const option = ref({
  title: {
    text: '番剧评分排行'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: yaxis
  },
  series: [
    {
      name: '分数',
      type: 'bar',
      data: series
    },
  ]
});

//表格
const columns: any = [
  { name: 'index', label: '#', field: 'index', align: 'center' },
  { name: 'name', required: true, label: '标题', align: 'left', field: 'name', sortable: true },
  { name: 'play', align: 'center', label: '播放量(单位：万)', field: 'value', sortable: true },
  { name: 'score', label: '评分', field: 'score', sortable: true },
  { name: 'link', label: '链接', field: 'link', align: 'center' },
]
</script>
<style>
.chart {
  text-align: center;
  width: 70vw;
  height: 100vh;
}
</style>
