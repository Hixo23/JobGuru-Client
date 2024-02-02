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
  <div class="bg-light_primary dark:bg-dark_primary p-4 flex items-center gap-8 rounded-sm">
    <p
      class="text-white text-2xl rounded-full bg-light_accent dark:bg-dark_accent w-16 h-16 flex items-center justify-center"
    >
      {{ company.split('')[0] }}
    </p>
    <div class="flex flex-col gap-2">
      <span class="text-gray-400">{{ company }}</span>
      <p class="text-white text-2xl font-semibold">{{ title }}</p>
      <div class="flex text-white gap-4">
        <p class="flex items-center gap-2 text-sm"><FaLocationDot /> {{ location }}</p>
        <p class="flex items-center gap-2 text-sm"><FaRegMoneyBill1 /> {{ salary }}</p>
      </div>
    </div>
    <router-link
      class="text-white bg-light_accent dark:bg-dark_accent py-2 px-4 rounded-xl"
      to="/elozelo"
      >View Details</router-link
    >
  </div>
</template>
