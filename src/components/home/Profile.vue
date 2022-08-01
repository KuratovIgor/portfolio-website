<script lang="ts" setup>
const handleOpenProjects = (): void => {
  window.open('https://github.com/KuratovIgor?tab=repositories')
}
</script>

<template>
  <el-row class="profile" justify="space-between">
    <el-col :span="12">
      <img class="profile__image" src="../../assets/images/profile.png" alt="" />
    </el-col>
    <el-col class="profile__about" :span="12">
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
    width: 600px;
    height: 600px;
    border: 2px solid $color--gray-dark;
    border-radius: 50%;
    box-shadow: 0 0 10px $color--gray-dark;
  }

  &__about {
    padding-top: 100px;
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
