<script lang="ts" setup>
import { ref } from 'vue'
import GithubLogo from '@/assets/icons/github.svg'

const activeIndex = ref('1')
</script>

<template>
  <div class="header">
    <el-row class="header__wrapper" align="center">
      <el-col :span="12">
        <a href="https://github.com/KuratovIgor" target="_blank">
          <github-logo class="header__logo" />
        </a>
      </el-col>
      <el-col class="header__navigation" :span="12">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
        >
          <el-menu-item class="header__item text-default" index="1">
            <router-link to="/">
              Home
            </router-link>
          </el-menu-item>
          <el-menu-item class="header__item text-default" index="2">About</el-menu-item>
          <el-menu-item class="header__item text-default" index="3">Portfolio</el-menu-item>
          <el-menu-item class="header__item text-default" index="4">Contact</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.header {
  border-radius: 0 0 60% 0;
  background-color: $color--gray;

  &__wrapper {
    padding: 20px 300px;
  }

  &__navigation {
    margin: auto 0;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 25px;
    color: $color--white;
  }

  &__logo {
    width: 80px;
    height: 80px;
    color:  $color--gray-dark;
    cursor: pointer;
  }
}
</style>
