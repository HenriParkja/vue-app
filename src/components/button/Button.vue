<script lang="ts">
export default {
  props: ["text"],
}
import './button.scss'
</script>

<template>
  <button class="button">
    {{ text }}
  </button>
</template>
