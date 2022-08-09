<script setup lang="ts">
import Profile from '@/components/home/Profile.vue'
import Experience from '@/components/home/Experience.vue'
import HardSkills from '@/components/home/HardSkills.vue'
import Projects from '@/components/home/Projects.vue'
</script>

<template>
  <div class="home-page">
    <profile class="home-page__profile" />
    <experience class="home-page__experience" />
    <hard-skills class="home-page__hard-skills" />
    <projects class="home-page__projects" />
  </div>
</template>

<style lang="scss" scoped >
.home-page {
  &__profile {
    margin-bottom: 60px;
    padding: 0 150px;
  }

  &__experience {
    padding: 0 300px;
    background-color: #E5EAF3;
  }

  &__hard-skills {
    margin-bottom: 60px;
    padding: 0 200px;
  }

  &__projects {
    padding: 0 200px 60px;
    background-color: #E5EAF3;
  }

  @media (max-width: $screen--desktop-max) {
    &__profile {
      padding: 0 30px;
    }

    &__experience {
      padding: 0 30px;
    }

    &__hard-skills {
      padding: 0 30px;
    }

    &__projects {
      padding: 0 30px 30px;
    }
  }
}
</style>
