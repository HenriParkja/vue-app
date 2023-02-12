<script setup lang="ts">
import "./modal.scss";
import TextField from "./../text-field/TextField.vue";
import PrimaryButton from "@/components/button/PrimaryButton.vue";
</script>
<script lang="ts">
import type { IInputModalData, ISingleInput } from "@/components/modal/types";
import { defineComponent } from "vue";

export default defineComponent({
  data(): IInputModalData {
    return {
      textFields: [
        { id: "input-1", label: "Enter value A:" },
        { id: "input-2", label: "Enter value B:" },
      ],
      textFieldData: [],
    };
  },
  props: {
    isModalOpen: Boolean,
  },
  methods: {
    handleInputChange(event: InputEvent) {
      if (event.target) {
        const elementId = (event.target as HTMLInputElement).getAttribute("id");
        const value = (event.target as HTMLInputElement).value;

        if (
          this.textFieldData.filter((obj) => obj.elementId === elementId)
            .length <= 0
        ) {
          this.textFieldData.push({
            elementId,
            value,
          });
        } else {
          this.textFieldData[
            this.textFieldData.findIndex((obj) => obj.elementId === elementId)
          ] = {
            elementId,
            value,
          };
        }
      }
    },
    handleSubmit() {
      this.textFieldData.forEach((el: ISingleInput) => {
        console.log("Input element: " + el.elementId, "Value: " + el.value);
      });
    },
  },
});
</script>

<template>
  <div v-show="isModalOpen" class="modal">
    <div class="modal__content">
      <PrimaryButton
        class="modal__close"
        modifier="button--text"
        @click="$emit('modal-close')"
      ></PrimaryButton>
      <div
        class="modal__text-field"
        v-for="textField in textFields"
        :key="textField.id"
      >
        <TextField
          v-if="textField.id && textField.label"
          :id="textField.id"
          :label="textField.label"
          @input="handleInputChange"
        />
      </div>
      <div class="modal__submit">
        <PrimaryButton text="Submit" @click="handleSubmit"> </PrimaryButton>
      </div>
    </div>
  </div>
</template>
