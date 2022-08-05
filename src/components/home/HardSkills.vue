<script lang="ts" setup>
import DataIcon from '@/assets/icons/data.svg'
</script>

<template>
  <div class="hard-skills">
    <div class="hard-skills__header">
      <p class="text-title">Hard Skills</p>
    </div>
    <el-row class="hard-skills__content" justify="space-between">
      <el-col class="hard-skills__content-title-wrapper" :xl="7" :lg="8">
        <p class="hard-skills__content-title text-title text-bold">
          The main tools
        </p>
        <p class="hard-skills__content-description text-default">That I use in my work</p>
        <data-icon v-if="$screen.size !== 'xs'" class="hard-skills__content-icon" />
      </el-col>
      <el-col :xl="12" :lg="14" class="hard-skills__content-wrapper">
        <el-progress
            type="dashboard"
            :percentage="100"
            :width="$screen.size === 'xs' ? '140' : '200'"
            status="warning"
        >
          <template #default>
            <span class="hard-skills__content-item text-large">
              TypeScript
            </span>
          </template>
        </el-progress>

        <el-progress
            type="dashboard"
            :percentage="100"
            :width="$screen.size === 'xs' ? '140' : '200'"
            status="exception"
        >
          <template #default>
            <span class="hard-skills__content-item text-large">JavaScript</span>
          </template>
        </el-progress>

        <el-progress
            type="dashboard"
            :percentage="100"
            :width="$screen.size === 'xs' ? '140' : '200'"
            status="warning"
        >
          <template #default>
            <span class="hard-skills__content-item text-large">Vue JS</span>
          </template>
        </el-progress>

        <el-progress
            type="dashboard"
            :percentage="100"
            :width="$screen.size === 'xs' ? '140' : '200'"
            status="exception"
        >
          <template #default>
            <span class="hard-skills__content-item text-large">
              Webpack
            </span>
          </template>
        </el-progress>

        <el-progress
            type="dashboard"
            :percentage="100"
            :width="$screen.size === 'xs' ? '140' : '200'"
            status="warning"
        >
          <template #default>
            <span class="hard-skills__content-item text-large">Git</span>
          </template>
        </el-progress>

        <el-progress
            type="dashboard"
            :percentage="100"
            :width="$screen.size === 'xs' ? '140' : '200'"
            status="exception"
        >
          <template #default>
            <span class="hard-skills__content-item text-large">Nuxt JS</span>
          </template>
        </el-progress>

        <el-progress
            type="dashboard"
            :percentage="100"
            :width="$screen.size === 'xs' ? '140' : '200'"
            status="warning"
        >
          <template #default>
            <span class="hard-skills__content-item text-large">
              El - Plus
            </span>
          </template>
        </el-progress>

        <el-progress
            type="dashboard"
            :percentage="100"
            :width="$screen.size === 'xs' ? '140' : '200'"
            status="exception"
        >
          <template #default>
            <span class="hard-skills__content-item text-large">Linters</span>
          </template>
        </el-progress>

        <el-progress
            type="dashboard"
            :percentage="100"
            :width="$screen.size === 'xs' ? '140' : '200'"
            status="warning"
        >
          <template #default>
            <span class="hard-skills__content-item text-large">Node JS</span>
          </template>
        </el-progress>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.hard-skills {
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
    &-title {
      letter-spacing: 2px;

      &-wrapper {
        margin-bottom: 20px;
        padding-left: 80px;

        @media (max-width: $screen--mobile-max) {
          padding-left: 0;
        }
      }
    }

    &-description {
      color: $color--gray-dark;
      opacity: 0.8;
    }

    &-item {
      color: $color--text;
    }

    &-icon {
      max-width: 100%;
      color: $color--gray-dark;
      opacity: 0.4;

      @media (max-width: $screen--laptop-max) {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 500px;
        max-height: 500px;
        opacity: 0.05;
      }

      @media (max-width: $screen--laptop-min) {
      }
    }

    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
