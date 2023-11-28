<template>
    <view class="icon_container" v-if="iconName" :class="iconName"
        :style="`width: ${Number(size) * 2}rpx; height: ${Number(size) * 2}rpx;`"></view>
</template>
  
<script lang="ts" setup>
/**
 * @description: 图标
 * @param {String} icon 图标名称
 * @param {Number} size 图标大小
 */
const iconName = ref<string>('')
const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    size: {
        type: Number || String,
        default: 16,
    },
})

onMounted(() => {
    iconName.value = hasIcon(props.icon) ? `icon ${props.icon}` : `icon icon-${props.icon}`;
})

const hasIcon = (str: string) => {
    return new RegExp("\\bicon-\\b").test(str);
}
</script>
  
<style lang="scss" scoped>
@import url('./style/iconfont.css');

.icon_container {
    display: block;
}
</style>