<script setup lang="ts">
const props = defineProps({
  buttonText: String,
});
import Button from "../../components/button/Button.vue";
import './modal-container.scss'
</script>

<template>
  <div class="modal-container">
    <Button :text="buttonText"></Button>
  </div>
</template>
