<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/shared/components/UI/dialog'
import { FaLocationDot, FaRegMoneyBill1 } from '@kalimahapps/vue-icons'
defineProps<{
  title: string
  description: string
  salary: number
  location: string
  technologies: string[]
  company: string
  experience: string
  job_type: string
  company_website: string
}>()
</script>

<template>
  <div
    class="flex min-w-fit flex-col gap-4 rounded-sm bg-light_primary p-4 lg:flex-row lg:items-center lg:justify-between dark:bg-dark_primary"
  >
    <div class="flex items-center gap-4">
      <p
        class="flex h-12 w-12 items-center justify-center rounded-full bg-light_accent text-2xl text-white lg:h-16 lg:w-16 dark:bg-dark_accent"
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
    </div>
    <Dialog>
      <DialogTrigger class="rounded-xl bg-light_accent px-4 py-2 text-white dark:bg-dark_accent"
        >View details</DialogTrigger
      >
      <DialogContent>
        <DialogHeader>
          <DialogTitle class="text-2xl dark:text-white">{{ title }}</DialogTitle>
          <DialogDescription class="text-xl">{{ description }}</DialogDescription>
        </DialogHeader>
        <div class="flex flex-wrap gap-4 dark:text-white">
          <p class="flex items-center gap-2 text-sm">
            <span class="font-bold">Location:</span> {{ location }}
          </p>
          <p class="flex items-center gap-2 text-sm">
            <span class="font-bold">Salary:</span> {{ salary }}
          </p>
          <p class="flex items-center gap-2 text-sm">
            <span class="font-bold">Experience:</span> {{ experience }}
          </p>
          <ul class="flex items-center gap-2 text-sm">
            <span class="font-bold">Technologies:</span>
            <li
              class="rounded-md border px-2 py-1"
              :key="technology"
              v-for="technology in technologies"
            >
              {{ technology }}
            </li>
          </ul>
          <p :href="company_website" class="flex items-center gap-2 text-sm">
            <span class="font-bold">Company:</span>
            <a class="text-base text-blue-300" :href="company_website">{{ company }}</a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>
