<script lang="ts" setup>
import { ref } from 'vue'
import CloseIcon from '@/assets/icons/close.svg'

const props = defineProps({
  isMenuVisible: Boolean,
})

const emit = defineEmits<{(e: 'close')
}>()

const activeIndex = ref('1')

const handleMenuClose = (): void => {
  emit('close')
}

const handleOpenProjects = (): void => {
  window.open('https://github.com/KuratovIgor?tab=repositories')
}
</script>

<template>
  <el-drawer
      :model-value="props.isMenuVisible"
      direction="ltr"
      size="100%"
      :show-close="false"
      :before-close="handleMenuClose"
      class="menu"
  >
    <template #header>
      <el-row class="menu__header" align="middle">
        <el-col :span="7">
          <close-icon class="menu__header-icon" @click="handleMenuClose" />
        </el-col>
        <el-col :span="17">
          <p class="text-title text-bold">Igor Kuratov</p>
        </el-col>
      </el-row>
    </template>

    <div class="menu__content">
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="vertical"
      >
        <el-menu-item class="menu__item text-default" index="1">
          <router-link to="/">
            Home
          </router-link>
        </el-menu-item>
        <el-menu-item class="menu__item text-default" index="2">About</el-menu-item>
        <el-menu-item class="menu__item text-default" index="3">Portfolio</el-menu-item>
        <el-menu-item class="menu__item text-default" index="4">Contact</el-menu-item>
      </el-menu>
    </div>
    <div class="menu__footer">
      <el-button
          class="menu__footer-button"
          type="danger"
          @click="handleOpenProjects"
      >View projects</el-button>
    </div>
  </el-drawer>
</template>

<style lang="scss" scoped>
.menu {
  &__header {
    &-icon {
      width: 25px;
      height: 25px;
    }
  }

  &__content {
    margin-bottom: 60px;
    padding: 0 20px;
  }

  &__item {
    margin-bottom: 15px;
    font-size: 30px;
  }

  &__footer {
    display: flex;
    justify-content: center;

    &-button {
      width: 300px;
      height: 50px;
    }
  }
}
</style>
