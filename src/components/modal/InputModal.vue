<script setup lang="ts">
import './modal.scss'
import TextField from './../text-field/TextField.vue'
</script>
<script lang="ts">
import type { IInputModalData } from '@/components/modal/types'

export default {
  data(): IInputModalData {
    return {
      textFields: [
        { id: 'input-1', label: 'Enter value A:' },
        { id: 'input-2', label: 'Enter value B:' },
      ]
    }
  }
}
</script>

<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__close"></div>
      <div
          class="modal__textfield"
          v-for="textField in textFields"
      >
        <TextField
            v-if="textField.id && textField.label"
            :id="textField.id"
            :label="textField.label"
        />
      </div>
    </div>
  </div>
</template>
