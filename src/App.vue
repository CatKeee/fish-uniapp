<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import config from '@/config/index'

onLaunch(() => {
  // 假如未开启缓存则首次打开时清除一次缓存
  if (!config.CACHE) {
    try {
      useCache().clear()
    } catch (error) {
      console.error(error)
    }
  }
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
@import "uview-plus/index.scss";
</style>
