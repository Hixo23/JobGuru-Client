<script setup lang="ts">
import { useOffersStore } from '@/features/JobList/stores/offers'
import { useQuery } from '@tanstack/vue-query'
import JobListItem from '../JobListItem/JobListItem.vue'

const { getOffers } = useOffersStore()

const { data: offers, isLoading } = useQuery({ queryFn: getOffers, queryKey: ['offer'] })

console.log(offers)
</script>

<template>
  <section v-if="!isLoading" class="flex flex-col gap-4">
    <p>{{ offers[0].id }}</p>
    <JobListItem
      v-for="offer in offers"
      :title="offer.title"
      :description="offer.description"
      :company="offer.company"
      :location="offer.location"
      :key="offer.id"
      :salary="offer.salary"
      :technologies="offer.technologies"
    />
  </section>
</template>
