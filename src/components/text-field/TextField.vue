<script setup lang="ts">
import "./text-field.scss";
interface ITextField {
  id: string;
  label: string;
}

const props = withDefaults(defineProps<ITextField>(), {});
</script>

<template>
  <div class="text-field" :key="props.id">
    <label :for="props.id" class="text-field__label">
      {{ props.label }}
    </label>
    <input
      :id="props.id"
      type="text"
      class="text-field__input"
      @input="$emit('input', $event.target)"
    />
  </div>
</template>
