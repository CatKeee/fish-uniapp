import config from "@/config/index";

export function useCache() {
  /**
   * 设置缓存
   * @param key 缓存key
   * @param value 缓存值
   */
  const set = (key: string, value: any) => {
    return new Promise((resolve, reject) => {
      uni.setStorage({
        key: `${config.CACHE_PREFIX}${key}`,
        data: value,
        success: () => {
          resolve({
            key: `${config.CACHE_PREFIX}${key}`,
            value: value,
          });
        },
        fail: () => {
          reject("设置缓存失败");
        },
      });
    });
  };

  /**
   * 获取缓存
   * @param key 缓存key
   */
  const get = (key: string) => {
    return new Promise((resolve, reject) => {
      uni.getStorage({
        key: `${config.CACHE_PREFIX}${key}`,
        success: (res) => {
          resolve(res.data);
        },
        fail: () => {
          reject("获取缓存失败");
        },
      });
    });
  };

  /**
   * 删除缓存
   * @param key 缓存key
   */
  const del = async (key: string) => {
    const value = await get(key);
    return new Promise((resolve, reject) => {
      uni.removeStorage({
        key: `${config.CACHE_PREFIX}${key}`,
        success: () => {
          resolve({
            key: `${config.CACHE_PREFIX}${key}`,
            value: value,
          });
        },
        fail: () => {
          reject("删除缓存失败");
        },
      });
    });
  };

  /**
   * 清空缓存
   */
  const clear = () => {
    return new Promise((resolve, reject) => {
      try {
        uni.clearStorageSync();
        resolve("success");
      } catch (error) {
        reject(error);
      }
    });
  };

  /**
   * 判断缓存是否存在
   * @param key 缓存key
   */
  const has = (key: string) => {
    return new Promise((resolve, reject) => {
      uni.getStorageInfo({
        success: (res) => {
          const cacheList = res.keys as string[];
          if (cacheList.includes(`${config.CACHE_PREFIX}${key}`)) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        fail: () => {
          reject("获取缓存信息失败");
        },
      });
    });
  };
  return {
    set,
    get,
    del,
    clear,
    has,
  };
}
