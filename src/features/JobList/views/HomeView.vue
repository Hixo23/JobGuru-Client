<script lang="ts" setup>
import JobListItem from '@/features/JobList/components/JobListItem/JobListItem.vue'
import Header from '@/shared/components/Header/Header.vue'
</script>

<template>
  <Header />
  <main class="flex h-[90svh] w-full items-center justify-center">
    <JobListItem
      title="elozelo"
      description="fajnie"
      :salary="3000"
      location="fajnie"
      :technologies="['elozelo']"
      company="Hiko indastis"
    />
  </main>
</template>
