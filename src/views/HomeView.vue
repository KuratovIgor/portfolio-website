<script setup lang="ts">
</script>

<template>
  <div class="home-page">
    <div class="home-page__profile">
      <img class="home-page__profile-image" src="../assets/images/pprofile.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped >
.home-page {
  display: flex;
  justify-content: center;
  &__profile {
    &-image {
      width: 600px;
      height: 600px;
      border: 2px solid #6b6d71;
      border-radius: 50%;
      box-shadow: 0 0 20px #6b6d71;
    }
  }
}
</style>
