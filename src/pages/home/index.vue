<template>
  <view class="page">
    <view class="content">
      <image class="logo" src="/static/logo.svg" mode="widthFix" />
      <view class="text-area">
        <text class="title">{{ title }}</text>
      </view>
      <view class="button-area">
        <up-button text="开始" size="small" shape="circle" color="linear-gradient(to left, #009dfd, #00f5b6)"></up-button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const title = ref('Hello')

/**
 * 小程序分享示例
 */
onShareAppMessage((res) => {
  return {
    title: 'Hello World',
    path: '/pages/home/index',
    imageUrl: '/static/images/share.png',
    success: () => {
      uni.$u.toast('分享成功')
    },
    fail: () => {
      uni.$u.toast('分享失败')
    }
  }
})
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 160rpx;
  height: 110rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.button-area {
  margin-top: 30rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
