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
      <q-table style="width: 30vw;" title="番剧分类信息" :rows="HandledData" :columns="columns"
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
import data from '../bili.json'
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
import { number } from 'echarts';
import { api } from 'src/boot/axios';
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

// API:
// https://api.bilibili.com/pgc/season/index/result?st=1&style_id=10010&season_version=3&spoken_language_type=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&order=3&sort=0&page=1&season_type=1&pagesize=20&type=1
let keys = []
let SortData: any = []
let HandledData: any = ref([])
api.get('/bili_bangumi_sort').then(res => {
  keys = Object.keys(res.data)

  for (let i in keys) {
    const name = keys[i]
    SortData.push({ 'name': name, 'value': res.data[name] })
  }
  console.log(SortData);
  HandledData.value = handleData(SortData)
})

function handleData(sortdata: Array<object>) {
  sortdata.sort((a: any, b: any) => { return b.value - a.value })
  sortdata.forEach((item: any, index: number) => {
    item.index = index
  })
  return sortdata
}


const myInitialPagination: any = {
  sortby: 'score',
  rowsPerPage: '50'
}
//图表
provide(THEME_KEY, 'white');

let isShowChart = ref(true)

onUnmounted(() => {
  // 设置虚线
  isShowChart.value = false
})

const option = ref({
  title: {
    text: '番剧类型分类',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    left: 'center',
    top: '5%'
  },
  series: [
    {
      name: '视频数量(单位：个)',
      type: 'pie',
      radius: '50%',
      data: HandledData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});

//表格
const columns: any = [
  { name: 'index', label: '#', field: 'index', align: 'center' },
  { name: 'name', required: true, label: '标题', align: 'center', field: 'name', sortable: true },
  { name: 'count', align: 'center', label: '数量', field: 'value', sortable: true },
]


</script>
<style>
.chart {
  text-align: center;
  width: 70vw;
  height: 80vh;
}

.my-card {
  max-width: 600px;
  min-width: 500px;
}
</style>
