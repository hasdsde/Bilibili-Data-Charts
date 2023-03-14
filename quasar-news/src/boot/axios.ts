import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { CommonFail, CommonSuccess } from 'src/components/common';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'http://localhost:6688/api' });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API


    // 响应拦截器
    api.interceptors.response.use(res => {
      console.log(res);

      if (res.status == 200) {
        CommonSuccess('加载成功')
        return res
        // 如果再多一层 data 可能会导致某些 res 为空
      } else {
        CommonFail('错误:' + res.data.code + '  信息：' + res.data.msg)
      }
    }, error => {
      // 错误处理，错误不会有 res.data.code，不走上
      CommonFail('请求失败' + '  错误码:' + error.response.status)
    })
});

export { api };
