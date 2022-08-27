<template>
  <div>
    <div>
      <h2 class="title">View</h2>
      <textarea
        :class="classes"
        :placeholder="placeholder"
        :maxlength="maxLength"
        :disabled="isDisabled"
        v-model="textData"
      />
    </div>
    <div class="helper__wrapper">
      <span class="helper__text">{{ helperText }}</span>
      <span class="helper__length"> {{ currentLength }} / {{ maxLength }}</span>
    </div>
  </div>
</template>

<script>
import './textarea.css'

export default {
  name: "my-textarea",
  props: {
    content: {
      type: String,
      required: false,
    },
    helperText: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    maxLength: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      default: 's',
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
      required: true,
    },
    isError: {
      type: Boolean,
      default: false,
      required: true,
    }
  },
  data() {
    return {
      textData: '',
    }
  },
  computed: {
    classes() {
      return {
        'textarea': true,
        [`textarea--${this.size}`]: true,
        'textarea--error': this.isError,
        'helper__text--error': this.isError,
      }
    },
    currentLength() {
      return this.textData.length
    }
  },
  watch: {
    content: {
      handler(value) {
        this.textData = value
      }
    },
  }
}
</script>

