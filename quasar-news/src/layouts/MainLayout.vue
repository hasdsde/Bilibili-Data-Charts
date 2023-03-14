<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          BILIBILI 番剧分析
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          榜单列表
        </q-item-label>

        <q-item clickable v-for="(item, index) in links" :key="index" :to="item.link">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const links = [
  { icon: 'home', title: '番剧播放量排行', link: './play' },
  { icon: 'home', title: '番剧评分排行', link: './score' },
  { icon: 'home', title: '番剧分类', link: './sort' },
  { icon: 'home', title: '番剧地区分类', link: './area' },
  { icon: 'home', title: '技术说明', link: './about' },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
