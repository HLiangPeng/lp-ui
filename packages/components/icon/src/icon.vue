<template>
  <i :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { iconProps } from './icon'
import type { CSSProperties } from 'vue' // css类型
const props = defineProps(iconProps);

defineOptions({
  name: 'lp-icon'
})

const style = computed<CSSProperties>((): CSSProperties => {
  const { color, size } = props
  if(!color && !size) return {}
  return {
    color: color,
    fontSize: size ?? `${size}px`
  }
})
</script>