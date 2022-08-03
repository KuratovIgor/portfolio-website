<template>
  <div class="layout">
    <layout-header class="layout__header" />
    <router-view />
    <layout-footer />
  </div>
</template>

<script lang="ts" setup>
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
</script>

<style lang="scss" scoped>
.layout {
  &__header {
    margin-bottom: 50px;
  }
}
</style>
