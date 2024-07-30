/**
 * (可选) 确保全局使用axios单例，可在此配置
 */
import axios from "axios"

axios.interceptors.response.use(response => {
  // 这里可以对所有响应进行处理
  return response;
}, error => {
  // 这里可以捕获所有请求的响应错误
  return Promise.reject(error);
});

export default axios