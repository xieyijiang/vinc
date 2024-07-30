import i18n from '@/i18n'

const { t } = i18n.global

export const axiosErrorHandler = (error) => {
  if (error.response) {
    // 请求已发出，服务器响应了
    switch (error.response.status) {
      case 400:
        window.$message.error(t('errorMessage[400]'))
      case 401:
        window.$message.error(t('errorMessage[401]'))
        break;
      default:
        // 其他错误处理
        window.$message.error(t('errorMessage.unknown'))
        break;
    }
  }
}