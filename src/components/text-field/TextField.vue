<script setup lang="ts">
interface ITextField {
  id: string,
  label: string,
  key: number
}
const props = withDefaults(defineProps<ITextField>(), {})
import './text-field.scss'
</script>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      inputs: []
    }
  }
})
</script>

<template>
  <div class="text-field" :key="props.key">
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
        @input="$emit('input', $event.target)"
    >
  </div>
</template>
