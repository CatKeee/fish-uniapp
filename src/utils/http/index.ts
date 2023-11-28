import {
  ContentTypeEnum,
  RequestCodeEnum,
  StatusCode,
} from "@/enums/requestEnums";

import type { RequestMethod } from "./type";

class HttpRequest {
  constructor() {}

  /**
   * @description: 发送请求
   */
  send(
    url: string,
    method: RequestMethod,
    data?: Record<string, any>,
    headers?: Record<string, string>
  ) {
    return new Promise((resolve, reject) => {
      if (!import.meta.env.VITE_APP_BASE_URL) {
        uni.$u.toast("请先配置接口请求地址");
        reject({
          errorMsg: "请先配置接口请求地址",
        });
      }
      uni.request({
        url: `${import.meta.env.VITE_APP_BASE_URL || ""}${url || ""}`,
        data: data || {},
        header: {
          "Content-Type":
            method === "POST"
              ? ContentTypeEnum.FORM_DATA
              : ContentTypeEnum.JSON,
          ...headers,
        },
        method: method,
        success: (response: RequestSuccessCallbackResult) => {
          this.cancel();
          const { statusCode } = response;
          if (statusCode === StatusCode.SUCCESS) {
            this.interceptor(response, resolve, reject);
          } else {
            reject(this.error(statusCode));
          }
        },
        fail: (error) => {
          console.error(error);
          reject(error);
        },
      });
    });
  }

  /**
   * @description: 返回拦截器
   */
  interceptor(
    response: RequestSuccessCallbackResult,
    resolve: (value: any) => void,
    reject: (value: string) => void
  ) {
    const { code, data, msg } = response.data as any;
    if (code !== RequestCodeEnum.SUCCESS) {
      uni.$u.toast(msg);
      return reject(`ErrorInfo：${msg}`);
    } else {
      return resolve(data);
    }
  }

  /**
   * @description: 上传文件
   */
  upload<T>() {}

  /**
   * @description: 取消请求
   */
  cancel<T>() {}

  /**
   * @description: 重新请求
   */
  resend(options: RequestOptions) {
    return new Promise((resolve, reject) => {
      this.send(
        options.url as string,
        options.method,
        options.data as Record<string, any>
      )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /**
   * @description: 错误处理
   */
  error(statusCode: number | string | undefined) {
    const ErrorCodes: { [key: string]: string } = {
      400: "Bad Request",
      401: "Unauthorized",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      500: "Internal Server Error",
    };
    console.error(statusCode && ErrorCodes[statusCode]);
    statusCode && uni.$u.toast(ErrorCodes[statusCode] || "请求失败");
    return statusCode && ErrorCodes[statusCode];
  }
}

export default new HttpRequest();
