<template>
    <u-navbar :title="title" :bgColor="bgColor" :autoBack="true" placeholder safeAreaInsetTop fixed>
    </u-navbar>
</template>

<script setup lang="ts">
/**
 * @description: 页面标题
 * @param {string} title 页面标题
 * @param {string} bgColor  背景颜色
 * @example <Navbar title="页面标题" bgColor="#fff" />
 */
defineProps({
    title: {
        type: String,
        default: '页面标题',
    },
    bgColor: {
        type: String,
        default: '#fff',
    },
})
</script>

<style lang="scss" scoped></style>