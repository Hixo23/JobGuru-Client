<script setup lang="ts">
import { FaLocationDot, FaRegMoneyBill1 } from '@kalimahapps/vue-icons'
defineProps<{
  title: string
  description: string
  salary: number
  location: string
  technologies: string[]
  company: string
}>()
</script>

<template>
  <div class="flex items-center gap-8 rounded-sm bg-light_primary p-4 dark:bg-dark_primary">
    <p
      class="flex h-16 w-16 items-center justify-center rounded-full bg-light_accent text-2xl text-white dark:bg-dark_accent"
    >
      {{ company.split('')[0] }}
    </p>
    <div class="flex flex-col gap-2">
      <span class="text-gray-400">{{ company }}</span>
      <p class="text-2xl font-semibold text-white">{{ title }}</p>
      <div class="flex gap-4 text-white">
        <p class="flex items-center gap-2 text-sm"><FaLocationDot /> {{ location }}</p>
        <p class="flex items-center gap-2 text-sm"><FaRegMoneyBill1 /> {{ salary }}</p>
      </div>
    </div>
    <router-link
      class="rounded-xl bg-light_accent px-4 py-2 text-white dark:bg-dark_accent"
      to="/elozelo"
      >View Details</router-link
    >
  </div>
</template>
