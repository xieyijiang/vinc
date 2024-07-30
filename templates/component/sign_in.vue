<template>
  <div class="min-h-screen flex flex-col">
    <div>
      <!-- 确保已存在相应组件 -->
      <!-- <TopNavigation>
        <template #right>
          <ThemeSwitcher />
          <LocaleSwitcher />
        </template>
</TopNavigation> -->
    </div>
    <div class="flex-1 flex flex-col items-center">
      <n-flex vertical align="center" justify="center">
        <n-flex align="center" class="mt-24">
          <n-icon size="28" color="#0e7a0d" :component="LogoVue" />
          <h1 class="text-2xl font-bold">{{ 'Vinc' }}</h1>
        </n-flex>
        <p class="text-gray-400">{{ t('slogan') }}</p>
      </n-flex>
      <n-card :bordered="false" class="max-w-72">
        <n-form :show-label="false" :model="form" :rules="rules">
          <n-form-item path="username">
            <n-input v-model:value="form.username" type="text" :placeholder="t('placeholder.username')"
              :input-props="{ autocomplete: 'username' }" />
          </n-form-item>
          <n-form-item>
            <n-input path="password" v-model:value="form.password" type="password" show-password-on="mousedown"
              :placeholder="t('placeholder.password')" :maxlength="16"
              :input-props="{ autocomplete: 'current-password' }" />
          </n-form-item>
          <n-form-item>
            <n-button :disabled="!form.username || !form.password" :loading="loading" :block="true" type="primary"
              @click="handleSignIn">
              {{ t('button.signIn') }}
            </n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { NButton, NCard, NFlex, NForm, NFormItem, NIcon, NInput, useMessage } from 'naive-ui'
import { LogoVue } from '@vicons/ionicons5'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
// import { io } from "socket.io-client"
// 确保已存在相应组件
// import TopNavigation from './TopNavigation.vue'
// import ThemeSwitcher from './ThemeSwitcher.vue'
// import LocaleSwitcher from './LocaleSwitcher.vue'
import api from '@/api'
import { axiosErrorHandler } from '@/utils/errorHandler'

const message = useMessage()
const { t } = useI18n()
const router = useRouter()

const form = reactive({
  username: null,
  password: null
})
const loading = ref(false)

const rules = {
  username: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("需要用户名");
        }
        return true;
      },
      trigger: ["input", "blur"]
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码"
    }
  ],
}

const handleSignIn = async () => {
  const payload = {
    username: form.username,
    password: form.password
  }
  loading.value = true
  try {
    const response = await api.signIn(payload)
    if (response.data.token) {
      message.success(t('message.success'))
      localStorage.setItem('token', response.data.token)
      router.push('/')
      // (可选) 连接socket.io
      // const socket = io(import.meta.env.VITE_SOCKET_IO_URL);
      // socket.on('connect', () => {
      //   console.log(`socket.io connected! id: ${socket.id}`)
      // })
    } else {
      message.error(t('message.fail'))
    }
  } catch (error) {
    axiosErrorHandler(error)
  } finally {
    loading.value = false
  }
}
</script>