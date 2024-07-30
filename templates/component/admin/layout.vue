<template>
  <div class="min-w-screen min-h-screen flex flex-col">
    <TopNavigation>
      <template #right>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </template>
    </TopNavigation>
    <div class="grow flex border-t">
      <n-layout has-sider>
        <n-layout-sider class="flex-1" bordered collapse-mode="width" :collapsed-width="64" :width="240"
          :collapsed="collapsed" show-trigger="arrow-circle" @collapse="collapsed = true"
          @expand="collapsed = false">
          <n-menu class="h-full" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22"
            :options="menuOptions" v-model:value="routerStore.selectedKey" />
        </n-layout-sider>
        <n-layout>
          <div class="p-2">
            <TabList />
            <router-view v-slot="{ Component }">
              <keep-alive :exclude="routerStore.exclude">
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </div>
        </n-layout>
      </n-layout>
    </div>
  </div>
</template>

<script setup>
import { h, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { NIcon, NLayout, NLayoutSider, NMenu } from "naive-ui";
// 根据实际文件名和变量名修改
import { useRouterStore } from "@/stores/routerStore";
import TopNavigation from "../TopNavigation.vue";
import TabList from './TabList.vue';
import ThemeSwitcher from "../ThemeSwitcher.vue";
import LocaleSwitcher from "../LocaleSwitcher.vue";

const route = useRoute()
const routerStore = useRouterStore()
const collapsed = ref(false)
const menuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: {
          path: '/admin',
        }
      },
      { default: () => '首页' }
    ),
    key: "/admin",
    icon: () => h('div', { class: 'i-material-symbols-home-outline' })
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          path: '/admin/user',
        }
      },
      { default: () => '用户中心' }
    ),
    key: "/admin/user",
    icon: () => h('div', { class: 'i-material-symbols-person-outline' })
  },
];

watch(route, (newRoute) => {
  console.log('new route: ', newRoute)
  const item = {
    name: newRoute.name,
    title: newRoute.meta.title,
    path: newRoute.path
  }
  routerStore.add(item)
})
</script>