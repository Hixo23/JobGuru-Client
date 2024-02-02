<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.fullPath)
</script>

<template>
  <header
    class="w-screen h-20 p-4 flex items-center justify-around border-b-2 border-b-light_primary/10 dark:border-b-dark_primary/10"
  >
    <h1 class="text-3xl text-light_text font-bold dark:text-dark_text" v-if="route.fullPath == '/'">
      JobGuru
    </h1>
    <a class="text-3xl text-light_text font-bold dark:text-dark_text" v-else href="/">JobGuru</a>

    <router-link
      to="/login"
      class="py-2 px-4 bg-light_primary dark:bg-dark_primary text-white rounded-xl dark:text-dark_text"
    >
      Login
    </router-link>
  </header>
</template>
