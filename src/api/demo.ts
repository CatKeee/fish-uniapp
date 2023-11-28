import request from "@/utils/http";

// 登录
export function getTest(data?: Record<string, any>) {
  return request.send("/login", "GET", { ...data });
}
