<p align="center">
    <img alt="logo" src="https://www.zowlsat.com/usr/uploads/2023/11/3593509975.png" width="120">
</p>

<h1 align="center">FishApp</h1>

<p align="center">一个高效、可靠的移动端开发模板</p>

## 介绍

基于 `Uniapp-cli` 创建的 `Uniapp` 项目模板，该项目使用Vue3+Ts进行开发，UI框架使用 `uview-plus`

💡支持自动导入，编写代码时无需引入各种依赖<br />
💡内置uniAPI提示、代码块<br />
💡支持scss预处理器<br />
💡支持TypeScript<br />
💡支持热更新<br />
💡内置Pinia<br />

## 环境准备

Vue3/Vite版要求 `node` 版本 `^14.18.0` || `>=16.0.0`

## 使用

```bash
# 克隆项目
git clone https://github.com/CatKeee/fish-uniapp.git

# 运行至xx平台，xx可以在package.json中查看和配置
npm run dev:xx

# 发布至xx平台，xx可以在package.json中查看和配置
npm run build:xx

# 更新Uniapp依赖到最新正式版
npx @dcloudio/uvm@latest
```

> 运行到微信开发工具：打开 微信开发者工具, 导入 `dist\dev\mp-weixin` 运行。

## 预览
看到以下界面就是运行成功啦

<p align="center">
  <img src="https://www.zowlsat.com/usr/uploads/2023/11/1668793754.jpg" alt="demo" width="50%">
</p>

## 自动导入配置

如何配置自定义依赖或者文件？

```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        "vue", // 预置依赖配置
        "uni-app", // 预置依赖配置
        "pinia", // 预置依赖配置
        { "@/hooks/useCache": ["useCache"] },
        // 等效于import useCopy from '@/hooks/useCache'
        { "@/hooks/useDayjs": ["useDayjs"] },
        // 等效于import useCopy from '@/hooks/useDayjs'
        { "你想要导入的依赖路径": ["你想要导入的依赖名称"] }
      ],
      dts: "typings/auto-imports.d.ts", // 生成的类型声明文件路径
    }),
  ],
});
```
### 配置后的效果

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

## 如何开发？

打开 `src` 目录，你会看到里面的文件目录与常规 `Uniapp` 项目几乎一样，你只需要当做传统 `Uniapp` 项目开发即可。

## 目录结构

```
./
├──📂 dist                                # 打包输出目录
├──📂 node_modules # 依赖包
├──📂 src
│   ├──📂 api                             # 接口配置文件
│   ├──📂 components                      # 公共组件
│   ├──📂 config                          # 项目自定义配置文件
│   ├──📂 enums                           # 枚举
│   ├──📂 hooks                           # 自定义钩子
│   ├──📂 pages                           # 全部页面文件
│   ├──📂 static                          # 静态资源
│   ├──📂 store                           # 存放store
│   ├──📂 styles                          # 样式文件
│   ├──📂 utils                           # 存放工具类
│   ├──📄 App.vue                         # 入口文件
│   ├──📄 env.d.ts                        # 类型声明文件
│   ├──📄 main.ts                         # 入口文件
│   ├──📄 manifest.json                   # Uniapp项目配置
│   ├──📄 pages.json                      # 页面配置
│   ├──📄 shime-uni.d.ts                  # 类型声明文件
│   └──📄 uni.scss                        # 全局样式变量
├──📂 typings                             # 存放类型声明文件
├──📄 .env.development                    # 开发环境变量
├──📄 .env.production                     # 生产环境变量
├──📄 .gitignore                          # git忽略文件
├──📄 index.html                          # 项目说明文档
├──📄 package-lock.json                   # 依赖版本锁定文件
├──📄 package.json
├──📄 README.md                           # 项目说明文档
├──📄 shims-uni.d.ts                      # 类型声明文件
├──📄 tsconfig.json                       # ts配置文件
└──📄 vite.config.ts                      # vite配置文件
```