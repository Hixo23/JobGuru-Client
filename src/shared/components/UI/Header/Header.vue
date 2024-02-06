<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { useUserStore } from '@/shared/stores/user'
import Loading from '@/shared/components/UI/Loading/Loading.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../dropdown-menu'

const route = useRoute()

const { getUser } = useUserStore()

const { data, isLoading } = useQuery({
  queryFn: getUser,
  queryKey: ['user']
})
</script>

<template>
  <Loading v-if="isLoading" />
  <header
    class="flex h-20 w-screen items-center justify-around border-b-2 border-b-light_primary/10 p-4 dark:border-b-dark_primary/10"
  >
    <h1 class="text-3xl font-bold text-light_text dark:text-dark_text" v-if="route.fullPath == '/'">
      JobGuru
    </h1>
    <a class="text-3xl font-bold text-light_text dark:text-dark_text" v-else href="/">JobGuru</a>

    <DropdownMenu v-if="data && !isLoading">
      <DropdownMenuTrigger>{{ data.username }}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <!-- <p>{{ JSON.stringify(data) }}</p> -->
        <DropdownMenuItem><RouterLink to="/myoffers">My offers</RouterLink></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <router-link
      v-if="!data"
      to="/login"
      class="rounded-xl bg-light_primary px-4 py-2 text-white dark:bg-dark_primary dark:text-dark_text"
    >
      Login
    </router-link>
  </header>
</template>
