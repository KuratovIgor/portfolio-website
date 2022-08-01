<script lang="ts" setup>
import Email from '@/assets/icons/email.svg?component'
import Telegram from '@/assets/icons/telegram.svg?component'
import Vk from '@/assets/icons/vk.svg?component'

const handleOpenContact = (link: string): void => {
  window.open(link)
}
</script>

<template>
  <div class="footer">
    <el-row class="footer__wrapper" justify="space-between">
      <el-col :span="16">
        <p class="text-default">
          © 2022 Igor Kuratov
        </p>
      </el-col>

      <el-col :span="8">
        <el-row>
          <el-col :span="6">
            <telegram class="footer__icon" @click="handleOpenContact('https://t.me/igor_kuratovv')" />
          </el-col>
          <el-col :span="6">
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
  }

  &__icon {
    width: 35px;
    height: 35px;
    color: $color--gray-dark;
    cursor: pointer;
  }
}
</style>
