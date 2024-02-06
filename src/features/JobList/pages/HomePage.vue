<script lang="ts" setup>
import Header from '@/shared/components/UI/Header/Header.vue'
import JobListVue from '../components/JobList/JobList.vue'
</script>

<template>
  <Header />
  <main class="flex w-full items-center justify-center">
    <JobListVue />
  </main>
</template>
