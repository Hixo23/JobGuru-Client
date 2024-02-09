<script setup lang="ts">
import { useOffersStore } from '@/features/JobList/stores/offers'
import { useQuery } from '@tanstack/vue-query'
import JobListItem from '../JobListItem/JobListItem.vue'

const { getOffers } = useOffersStore()

const { data: offers, isLoading } = useQuery({ queryFn: getOffers, queryKey: ['offer'] })
</script>

<template>
  <div class="flex items-center">
    <p
      class="text-light_text_text text-4xl font-bold dark:text-white"
      v-if="!isLoading && offers.length < 1"
    >
      Offers not found!
    </p>
  </div>
  <section v-if="!isLoading" class="relative flex flex-col gap-4">
    <JobListItem
      v-for="offer in offers"
      :title="offer.title"
      :description="offer.description"
      :company="offer.company"
      :location="offer.location"
      :key="offer.id"
      :salary="offer.salary"
      :technologies="offer.technologies"
      :company_website="offer.company_website"
      :experience="offer.experience"
      :job_type="offer.job_type"
    />
  </section>
</template>
