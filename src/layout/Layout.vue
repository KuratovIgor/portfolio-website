<template>
  <div class="layout">
    <layout-header class="layout__header" />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
</script>

<style lang="scss" scoped>
.layout {
  &__header {
    margin-bottom: 50px;
  }
}
</style>
