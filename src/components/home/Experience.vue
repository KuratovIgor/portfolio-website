<script lang="ts" setup>
import ExperienceIcon from '@/assets/icons/experience.svg?component'
</script>

<template>
  <div class="experience">
    <div class="experience__header">
      <p class="text-title">Work experience</p>
    </div>
    <el-row class="experience__content" justify="space-between">
      <el-col :span="14">
        <el-timeline>
          <el-timeline-item center timestamp="2021/07 - 2022/04">
            <el-card>
              <template #header>
                <p class="experience__content-title text-large text-bold">
                  Enterprise "LUCH", Novosibirsk
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
      <el-col :span="6">
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
  }

  &__content {
    &-title {
      color: $color--gray-dark;
      letter-spacing: 2px;
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
      width: 450px;
      color: $color--gray;
      opacity: 0.4;
    }
  }
}
</style>
