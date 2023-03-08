<template>
  <i :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { iconProps } from './icon'

const props = defineProps(iconProps);

defineOptions({
  name: 'lp-icon'
})

const style = computed(() => {
  if(!props.color && !props.size) return {}
  return {
    color: props.color || '',
    fontSize: props.size ? `${props.size}px` : ''
  }
})
</script>