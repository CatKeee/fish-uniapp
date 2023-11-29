# Uniapp cli 前端项目模板

## 介绍

基于 `cli` 创建的 `Uniapp` 项目模板，该项目使用Vue3+Ts进行开发，UI框架使用 `uview-plus`

- 常规写法

```html
<template>
  <view>
    <view>{{ title }}</view>
    <up-button text="按钮"></up-button>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import {onLoad} from '@dcloudio/uni-app'
  const title = ref('Hello')

  onLoad(() => {
    console.log('onLoad')
  })
</script>
```

- 当前写法，无需引入各种依赖

```html
<template>
  <view>
    <view>{{ title }}</view>
    <up-button text="按钮"></up-button>
  </view>
</template>

<script setup lang="ts">
  const title = ref('Hello')
  
  onLoad(() => {
    console.log('onLoad')
  })
</script>
```

💡支持自动导入，编写代码时无需引入各种依赖

💡内置uniAPI提示、代码块

💡支持scss

💡支持TypeScript

💡支持热更新

💡内置Pinia

💡内置Mock

## 环境准备

Vue3/Vite版要求 `node` 版本 `^14.18.0` || `>=16.0.0`

## 使用

```bash
# 运行至xx平台，xx可以在package.json中查看和配置
npm run dev:xx

# 发布至xx平台，xx可以在package.json中查看和配置
npm run build:xx

# 更新Uniapp依赖到最新正式版
npx @dcloudio/uvm@latest
```

> 运行方式：打开 微信开发者工具, 导入 `dist\dev\mp-weixin` 运行。

## 预览
看到以下界面就是运行成功啦

<img src="https://www.zowlsat.com/usr/uploads/2023/11/1668793754.jpg" alt="demo">