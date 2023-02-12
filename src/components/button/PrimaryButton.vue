<script setup lang="ts">
const props = defineProps({
  text: String,
})
import './button.scss'
</script>

<template>
  <button class="button">
    {{ props.text }}
  </button>
</template>
