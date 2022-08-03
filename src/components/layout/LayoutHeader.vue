<script lang="ts" setup>
import { ref } from 'vue'
import GithubLogo from '@/assets/icons/github.svg'
import MenuBurger from '@/assets/icons/burger.svg'

const activeIndex = ref('1')
</script>

<template>
  <div class="header">
    <el-row class="header__wrapper" align="center">
      <el-col v-if="$screen.size === 'xs'" :xs="18">
        <menu-burger class="header__burger" />
      </el-col>
      <template v-else>
        <el-col :xl="12" :lg="10" :md="6" :sm="4">
          <a href="https://github.com/KuratovIgor" target="_blank">
            <github-logo class="header__logo" />
          </a>
        </el-col>
        <el-col
            :xl="12"
            :lg="14"
            :md="18"
            :sm="20"
            class="header__navigation"
        >
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
      </template>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.header {
  border-radius: 0 0 60% 0;
  background-color: $color--gray;

  &__wrapper {
    padding: 20px 300px;

    @media (max-width: $screen--desktop-min) {
      padding: 20px 120px;
    }

    @media (max-width: $screen--laptop-max) {
      padding: 20px 30px;
    }

    @media (max-width: $screen--mobile-max) {
      padding: 10px 20px;
    }
  }

  &__navigation {
    margin: auto 0;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: $color--white;
  }

  &__logo {
    width: 80px;
    height: 80px;
    color:  $color--gray-dark;
    cursor: pointer;

    @media (max-width: $screen--laptop-min) {
      width: 50px;
      height: 50px;
    }
  }

  &__burger {
    width: 40px;
    height: 40px;
    color: $color--gray-dark;
  }
}
</style>
