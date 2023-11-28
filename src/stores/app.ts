import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("counter", () => {
  const count = ref<number>(0);
  function increment(): void {
    count.value++;
  }

  return { count, increment };
});
