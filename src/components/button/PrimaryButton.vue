<script setup lang="ts">
const props = defineProps({
  text: String,
  class: String,
  modifier: String,
});
import "./button.scss";
const classString = `button ${props.class} ${props.modifier}`;
</script>

<template>
  <button :class="classString">
    {{ props.text }}
  </button>
</template>
