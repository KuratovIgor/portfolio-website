<script lang="ts" setup>
import ExperienceIcon from '@/assets/icons/experience.svg'
</script>

<template>
  <div class="experience">
    <div class="experience__header">
      <p class="text-title">Work experience</p>
    </div>
    <el-row class="experience__content" justify="space-between">
      <el-col
          v-if="$screen.size !== 'xl' && $screen.size !== 'lg'"
          class="experience__content-title-wrapper"
          :xl="6" :lg="8"
      >
        <p class="experience__content-title text-title text-bold">More 1 year</p>
        <p class="experience__content-description text-default">Total work experience</p>
        <experience-icon v-if="$screen.size !== 'xs'" class="experience__content-icon" />
      </el-col>
      <el-col :xl="14" :lg="14">
        <el-timeline>
          <el-timeline-item center timestamp="2021/07 - 2022/04">
            <el-card>
              <template #header>
                <p class="experience__content-title text-large text-bold">
                  ЛУЧ, Novosibirsk
                </p>
              </template>
              <p class="experience__content-subtitle text-default text-bold">Software Engineer</p>
              <p class="experience__content-description text-default">
                Support and development of plugins for the developed
                hardware using C#. Development of an application for testing equipment.
              </p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item center timestamp="2022/04 - Now">
            <el-card>
              <template #header>
                <p class="experience__content-title text-large text-bold">
                  Digital Clouds, Novosibirsk
                </p>
              </template>
              <p class="experience__content-subtitle text-default text-bold">Frontend Developer</p>
              <p class="experience__content-description text-default">
                Website development and support of internal projects
                using Vue, Nuxt, Node JS, TypeScript.
              </p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <el-col v-if="$screen.size === 'xl' || $screen.size === 'lg'" :xl="6" :lg="8">
        <p class="experience__content-title text-title text-bold">More 1 year</p>
        <p class="experience__content-description text-default">Total work experience</p>
        <experience-icon class="experience__content-icon" />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  &__header {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    padding-top: 20px;

    @media (max-width: $screen--laptop-max) {
      margin-bottom: 70px;
    }

    @media (max-width: $screen--mobile-max) {
      margin-bottom: 30px;
    }
  }

  &__content {
    position: relative;

    &-title {
      color: $color--gray-dark;
      letter-spacing: 2px;

      &-wrapper {
        margin-bottom: 20px;
        padding-left: 80px;

        @media (max-width: $screen--mobile-max) {
          padding-left: 40px;
        }
      }
    }

    &-subtitle {
      margin-bottom: 10px;
      color: $color--gray-dark;
    }

    &-description {
      color: $color--text;
      opacity: 0.8;
    }

    &-icon {
      max-width: 100%;
      color: $color--gray;
      opacity: 0.4;

      @media (max-width: $screen--laptop-max) {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0.2;
      }

      @media (max-width: $screen--laptop-min) {
        max-width: 500px;
        max-height: 500px;
      }
    }
  }
}
</style>
