<template>
  <div class="test-image-component">
    <h1>This is a test image</h1>
    <img src="@/assets/testimage.webp" alt="Test Image" />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.test-image-component {
  font-family: sans-serif;
  text-align: center;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>

