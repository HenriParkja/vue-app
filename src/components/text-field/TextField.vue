<script setup lang="ts">
interface ITextField {
  id: string,
  label: string
}
const props = withDefaults(defineProps<ITextField>(), {})
import './text-field.scss'
</script>

<template>
  <div class="text-field">
    <label
        :for="props.id"
        class="text-field__label"
    >
      {{ props.label }}
    </label>
    <input
        :id="props.id"
        type="text"
        class="text-field__input"
    >
  </div>
</template>
