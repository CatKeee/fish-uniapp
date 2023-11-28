import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/couponPromotion",
  plugins: [
    uni(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        "vue",
        "uni-app",
        "pinia",
        { "@/hooks/useCopy": ["useCopy"] }, // 等效于import useCopy from '@/hooks/useCopy'
        { "@/hooks/useCache": ["useCache"] },
        { "@/hooks/useDayjs": ["useDayjs"] },
      ],
      dts: "typings/auto-imports.d.ts",
    }),
  ],
});
