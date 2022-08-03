<script lang="ts" setup>
const handleOpenProjects = (): void => {
  window.open('https://github.com/KuratovIgor?tab=repositories')
}
</script>

<template>
  <el-row class="profile" align="center" justify="space-between">
    <el-col :xl="12" :lg="12" class="profile__image-wrapper">
      <img class="profile__image" src="../../assets/images/profile.png" alt="" />
    </el-col>
    <el-col :xl="12" :lg="12" class="profile__about">
      <p class="profile__title text-title">Hi! My name is Igor!</p>
      <p class="profile__description text-default">I'm frontend developer.
        I work with technologies such as Vue, Nuxt, TypeScript, Node JS, Git. In projects
        I worked with ESLint, StyleLint, Husky, Webpack, used Element-Plus.
        I have experience in work with databases and development REST API.
        In addition, I have the skill of refactoring and using design patterns.
      </p>
      <el-button type="warning" size="large">Contact me</el-button>
      <el-button type="danger" size="large" @click="handleOpenProjects">View projects</el-button>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.profile {
  width: 100%;

  &__image {
    max-width: 600px;
    max-height: 600px;
    border: 2px solid $color--gray-dark;
    border-radius: 50%;
    box-shadow: 0 0 10px $color--gray-dark;

    &-wrapper {
      display: flex;
      align-items: center;
    }

    @media (max-width: $screen--desktop-max) {
      max-width: 450px;
      max-height: 450px;
    }
  }

  &__about {
    padding-top: 100px;

    @media (max-width: $screen--desktop-max) {
      padding-top: 50px;
    }
  }

  &__title {
    margin-bottom: 50px;
  }

  &__description {
    margin-bottom: 50px;
    padding-right: 100px;
    color:  $color--text;
  }
}
</style>
