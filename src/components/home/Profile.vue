<script lang="ts" setup>
const handleOpenProjects = (): void => {
  window.open('https://github.com/KuratovIgor?tab=repositories')
}
</script>

<template>
  <el-row class="profile" align="center" justify="space-between">
    <el-col :xl="12" :lg="12" :md="14" :sm="14" class="profile__image-wrapper">
      <img class="profile__image" src="../../assets/images/profile.png" alt="" />
    </el-col>
    <el-col
        v-if="$screen.size === 'md' || $screen.size === 'sm'"
        class="profile__title-wrapper"
        :md="10" :sm="10">
      <div class="text-title">
        <p >Hi! I'm Igor!</p>
      </div>
    </el-col>
    <el-col :xl="12" :lg="12" class="profile__about">
      <p
          v-if="$screen.size !== 'md'
          && $screen.size !== 'sm'"
          class="profile__title text-title"
      >
        Hi! My name is Igor!
      </p>
      <p class="profile__description text-default">I'm frontend developer.
        I work with technologies such as Vue, Nuxt, TypeScript, Node JS, Git. In projects
        I worked with ESLint, StyleLint, Husky, Webpack, used Element-Plus.
        I have experience in work with databases and development REST API.
        In addition, I have the skill of refactoring and using design patterns.
      </p>
      <div>
        <el-button type="warning" size="large">Contact me</el-button>
        <el-button type="danger" size="large" @click="handleOpenProjects">View projects</el-button>
      </div>
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

    @media (max-width: $screen--laptop-max) {
      max-width: 300px;
      max-height: 300px;
    }
  }

  &__about {
    padding-top: 100px;

    @media (max-width: $screen--desktop-max) {
      padding-top: 50px;
    }

    @media (max-width: $screen--mobile-max) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
    }
  }

  &__title {
    margin-bottom: 50px;

    &-wrapper {
      padding-top: 50px;
    }

    @media (max-width: $screen--mobile-max) {
      margin-bottom: 20px;
    }
  }

  &__description {
    margin-bottom: 50px;
    padding-right: 100px;
    color:  $color--text;

    @media (max-width: $screen--mobile-max) {
      padding-right: 0;
    }

    @media (max-width: $screen--mobile-max) {
      margin-bottom: 20px;
    }
  }

  @media (max-width: $screen--mobile-max) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
