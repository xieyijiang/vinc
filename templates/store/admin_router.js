import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router"

export const useRouterStore = defineStore('router', () => {
  const router = useRouter()
  const route = useRoute()
  // 根据实际根目录修改
  const rootPath = ref('/admin')
  const selectedKey = ref(route.path)
  const list = ref([])
  const exclude = ref([])

  function add(item) {
    if (item.path === rootPath.value) return
    // 排除exclude
    const indexExclude = exclude.value.findIndex((i) => i === item.name)
    if (indexExclude !== -1) {
      exclude.value.splice(indexExclude, 1)
    }
    // 加入list
    const existsList = list.value.some(i => i.name === item.name)
    if (!existsList) {
      list.value.push(item)
    }
  }

  function close(name) {
    const indexList = list.value.findIndex((item) => item.name === name)
    if (indexList === -1) return
    // 找到前一个元素
    const previousItem = list.value[indexList - 1]
    // 设置selectedKey为前一个元素的key属性值
    if (previousItem) {
      selectedKey.value = previousItem.path;
    } else {
      // 如果没有前一个元素，则设为根路径
      selectedKey.value = rootPath.value;
    }
    // 改变路由
    router.push(selectedKey.value)
    // 删除满足条件的元素
    const [deletedItem] = list.value.splice(indexList, 1)
    // 加入exclude
    exclude.value.push(deletedItem.name)
  }

  return { rootPath, selectedKey, list, exclude, add, close }
})