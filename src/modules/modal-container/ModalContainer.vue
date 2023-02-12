<script setup lang="ts">
const props = defineProps({
  buttonText: String,
})
import PrimaryButton from '../../components/button/PrimaryButton.vue'
import InputModal from '../../components/modal/InputModal.vue'
import './modal-container.scss'
</script>

<template>
  <div class="modal-container">
    <PrimaryButton :text="props.buttonText"></PrimaryButton>
  </div>
  <InputModal></InputModal>
</template>
