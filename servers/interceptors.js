import Taro from "@tarojs/taro"
import { getCurrentPageUrl } from "./utils"

const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

const customInterceptor = function (chain) {
  
  const requestParams = chain.requestParams

  return chain.proceed(requestParams).then(res => {
    // 只要请求成功，不管返回什么状态码，都走这个回调
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      return Promise.reject("请求资源不存在")
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject("服务端出现了问题")
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      Taro.setStorageSync("Authorization", "")
      let path = getCurrentPageUrl()
      if (path !== "pages/login/login") {
        Taro.navigateTo({
          url: "/pages/login/login"
        });
      }
      // TODO 根据自身业务修改
      return Promise.reject("没有权限访问");
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      Taro.setStorageSync("Authorization", "")
      let path = getCurrentPageUrl()
      if (path !== "pages/login/login") {
        Taro.navigateTo({
          url: "/pages/login/login"
        });
      }
      return Promise.reject("需要鉴权")
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return res.data
    }
  });
};

const interceptors = [customInterceptor, Taro.interceptors.logInterceptor]

export default interceptors
