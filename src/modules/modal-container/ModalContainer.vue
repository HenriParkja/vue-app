<script setup lang="ts">
const props = defineProps({
  buttonText: String,
});
import PrimaryButton from "../../components/button/PrimaryButton.vue";
import InputModal from "../../components/modal/InputModal.vue";
import "./modal-container.scss";
</script>

<script lang="ts">
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
};
</script>

<template>
  <div class="modal-container">
    <PrimaryButton
      :text="props.buttonText"
      @click="isModalOpen = true"
    ></PrimaryButton>
  </div>
  <InputModal
    :isModalOpen="isModalOpen"
    @modal-close="isModalOpen = false"
  ></InputModal>
</template>
