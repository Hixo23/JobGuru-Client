<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { useUserStore } from '@/stores/user'

const route = useRoute()

const { getUser } = useUserStore()

const { data, isLoading } = useQuery({
  queryFn: getUser,
  queryKey: ['user']
})

console.log(data.value)
</script>

<template>
  <header
    class="flex h-20 w-screen items-center justify-around border-b-2 border-b-light_primary/10 p-4 dark:border-b-dark_primary/10"
  >
    <h1 class="text-3xl font-bold text-light_text dark:text-dark_text" v-if="route.fullPath == '/'">
      JobGuru
    </h1>
    <a class="text-3xl font-bold text-light_text dark:text-dark_text" v-else href="/">JobGuru</a>

    <p v-if="!isLoading">{{ data.username }}</p>
    <router-link
      v-if="!data"
      to="/login"
      class="rounded-xl bg-light_primary px-4 py-2 text-white dark:bg-dark_primary dark:text-dark_text"
    >
      Login
    </router-link>
  </header>
</template>
