<script lang="ts" setup>
import Telegram from '@/assets/icons/telegram.svg'
import Vk from '@/assets/icons/vk.svg'

const handleOpenContact = (link: string): void => {
  window.open(link)
}
</script>

<template>
  <div class="footer">
    <el-row class="footer__wrapper" justify="space-between">
      <el-col :xl="16" :lg="16" :md="16" :sm="16" :xs="18">
        <p class="text-default">
          © 2022 Igor Kuratov
        </p>
      </el-col>

      <el-col :xl="8" :lg="8" :md="8" :sm="8" :xs="6">
        <el-row>
          <el-col :span="6" :xs="12">
            <telegram class="footer__icon" @click="handleOpenContact('https://t.me/igor_kuratovv')" />
          </el-col>
          <el-col :span="6" :xs="12">
            <vk class="footer__icon" @click="handleOpenContact('https://vk.com/write510657032')" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $color--gray;

  &__wrapper {
    padding: 20px 300px;

    @media (max-width: $screen--desktop-max) {
      padding: 20px 120px;
    }

    @media (max-width: $screen--laptop-max) {
      padding: 20px 30px;
    }

    @media (max-width: $screen--mobile-max) {
      padding: 10px 20px;
    }
  }

  &__icon {
    width: 35px;
    height: 35px;
    color: $color--gray-dark;
    cursor: pointer;

    @media (max-width: $screen--mobile-max) {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
