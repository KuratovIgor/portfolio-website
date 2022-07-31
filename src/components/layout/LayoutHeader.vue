<script lang="ts" setup>
import GithubLogo from '@/assets/icons/github.svg?component'
</script>

<template>
  <div class="header">
    <el-row class="header__wrapper" align="center">
      <el-col :span="12">
        <github-logo class="header__logo" />
      </el-col>
      <el-col :span="3" class="header__item text-default">Home</el-col>
      <el-col :span="3" class="header__item text-default">About</el-col>
      <el-col :span="3" class="header__item text-default">Portfolio</el-col>
      <el-col :span="3" class="header__item text-default">Contact</el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: #a6a9ad;

  &__wrapper {
    padding: 20px 300px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  &__logo {
    width: 80px;
    height: 80px;
    color:  #6b6d71;
    cursor: pointer;
  }
}
</style>
