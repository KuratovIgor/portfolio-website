<script lang="ts" setup>
import DataIcon from '@/assets/icons/data.svg'
</script>

<template>
  <div class="hard-skills">
    <div class="hard-skills__header">
      <p class="text-title">Hard Skills</p>
    </div>
    <el-row class="hard-skills__content" justify="space-between">
      <el-col :span="10">
        <p class="hard-skills__content-title text-title text-bold">
          The main tools
        </p>
        <p class="hard-skills__content-description text-default">That I use in my work</p>
        <data-icon class="hard-skills__content-icon" />
      </el-col>
      <el-col :span="14" class="hard-skills__content-wrapper">
        <el-progress type="dashboard" :percentage="100" width="200" status="warning">
          <template #default>
            <span class="hard-skills__content-item">
              TypeScript
            </span>
          </template>
        </el-progress>

        <el-progress type="dashboard" :percentage="100" width="200" status="exception">
          <template #default>
            <span class="hard-skills__content-item">JavaScript</span>
          </template>
        </el-progress>

        <el-progress type="dashboard" :percentage="100" width="200" status="warning">
          <template #default>
            <span class="hard-skills__content-item">Vue JS</span>
          </template>
        </el-progress>

        <el-progress type="dashboard" :percentage="100" width="200" status="exception">
          <template #default>
            <span class="hard-skills__content-item">
              Webpack
            </span>
          </template>
        </el-progress>

        <el-progress type="dashboard" :percentage="100" width="200" status="warning">
          <template #default>
            <span class="hard-skills__content-item">Git</span>
          </template>
        </el-progress>

        <el-progress type="dashboard" :percentage="100" width="200" status="exception">
          <template #default>
            <span class="hard-skills__content-item">Nuxt JS</span>
          </template>
        </el-progress>

        <el-progress type="dashboard" :percentage="100" width="200" status="warning">
          <template #default>
            <span class="hard-skills__content-item">
              El - Plus
            </span>
          </template>
        </el-progress>

        <el-progress type="dashboard" :percentage="100" width="200" status="exception">
          <template #default>
            <span class="hard-skills__content-item">Linters</span>
          </template>
        </el-progress>

        <el-progress type="dashboard" :percentage="100" width="200" status="warning">
          <template #default>
            <span class="hard-skills__content-item">Node JS</span>
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
  }

  &__content {
    &-title {
      letter-spacing: 2px;
    }

    &-description {
      color: $color--gray-dark;
      opacity: 0.8;
    }

    &-item {
      font-size: 30px;
      color: $color--text;
    }

    &-icon {
      width: 400px;
      color: $color--gray-dark;
      opacity: 0.4;
    }

    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
