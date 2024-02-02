<script lang="ts" setup>
import JobListItem from '../components/JobDetails/JobListItem.vue'
</script>

<template>
  <main class="w-full h-[90svh] flex justify-center items-center">
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
