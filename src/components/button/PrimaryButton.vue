<script setup lang="ts">
import "./button.scss";

const props = defineProps({
  text: String,
  class: String,
  modifier: String,
});
const classString = `button ${props.class} ${props.modifier}`;
</script>

<template>
  <button :class="classString">
    {{ props.text }}
  </button>
</template>
