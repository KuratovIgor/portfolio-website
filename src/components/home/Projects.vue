<script lang="ts" setup>
const projects = [
  {
    title: 'GitHub API',
    url: 'https://kuratovigor.github.io/github-users-worker/',
    description: 'App works with GitHub API to display\n'
        + 'user information and repositories',
  },
  {
    title: 'Pokedex',
    url: 'https://github.com/KuratovIgor/pokedex',
    description: 'Site with detailed information about all Pokemon',
  },
  {
    title: 'AIM training game',
    url: 'https://kuratovigor.github.io/aim-training/',
    description: 'Game for aim training before shooter game',
  },
  {
    title: 'Hover board',
    url: 'https://kuratovigor.github.io/hover-board/',
    description: 'Beautiful colorful hover board',
  },
]

const handleOpenProject = (url: string): void => {
  window.open(url)
}
</script>

<template>
  <div class="projects">
    <div class="projects__header">
      <p class="text-title">Some of my projects</p>
    </div>
    <div class="projects__content">
      <el-carousel
          v-if="$screen.size !== 'xs'"
          :interval="4000" type="card"
          :height="$screen.size === 'xs' ? '200px'
          : $screen.size === 'sm' || $screen.size === 'md'
           ? '250px' : '300px'"
      >
        <el-carousel-item v-for="project in projects" :key="project">
          <div class="projects__content-header">
            <p class="projects__content-title text-large text-bold">{{ project.title }}</p>
          </div>
          <div class="projects__content-wrapper">
            <p class="projects__content-description text-default">{{ project.description }}</p>
            <el-button
                class="projects__content-button"
                type="primary"
                @click="handleOpenProject(project.url)"
            >
              Look this
            </el-button>
          </div>
        </el-carousel-item>
      </el-carousel>
      <el-carousel
          v-else
          :interval="4000"
          indicator-position="outside"
          :height="$screen.size === 'xs' ? '200px' : '300px'"
      >
        <el-carousel-item v-for="project in projects" :key="project">
          <div class="projects__content-header">
            <p class="projects__content-title text-large text-bold">{{ project.title }}</p>
          </div>
          <div class="projects__content-wrapper">
            <p class="projects__content-description text-default">{{ project.description }}</p>
            <el-button
                class="projects__content-button"
                type="primary"
                @click="handleOpenProject(project.url)"
            >
              Look this
            </el-button>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="projects__footer">
      <p class="text-default">
        View my
        <a
            class="projects__footer-link text-bold"
            href="https://github.com/KuratovIgor?tab=repositories"
            target="_blank"
        >
          GitHub
        </a>
        with all projects
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
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
    margin-bottom: 20px;

    &-header {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      padding-top: 20px;
      color: $color--gray-dark;
      letter-spacing: 2px;

      @media (max-width: $screen--mobile-max) {
        margin-bottom: 10px;
      }
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 0 40px;
      height: 200px;

      @media (max-width: $screen--laptop-min) {
        padding: 0 20px;
        height: 150px;
      }

      @media (max-width: $screen--mobile-max) {
        height: 120px;
      }
    }

    &-description {
      color: $color--gray-dark;
    }

    &-button {
      box-shadow: 0 0 5px $color--gray-dark;
    }
  }

  &__footer {
    color: $color--gray-dark;

    &-link {
      color: $color--gray-dark
    }
  }
}
</style>
