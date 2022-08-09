<script lang="ts" setup>
import { ref } from 'vue'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import MobileMenu from '@/components/layout/MobileMenu.vue'

const isMenuVisible = ref(false)

const handleChangeMenuVisible = (): void => {
  isMenuVisible.value = !isMenuVisible.value
}
</script>

<template>
  <div class="layout">
    <mobile-menu :is-menu-visible="isMenuVisible" @close="handleChangeMenuVisible" />

    <layout-header class="layout__header" @open-menu="handleChangeMenuVisible" />
    <router-view />
    <layout-footer />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  &__header {
    margin-bottom: 50px;
  }
}
</style>
