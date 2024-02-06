<script setup lang="ts">
import Header from '@/shared/components/UI/Header/Header.vue'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/shared/components/UI/table'
import { useUserStore } from '@/shared/stores/user'
import { useQuery } from '@tanstack/vue-query'

const { getUser } = useUserStore()

const { data, isLoading } = useQuery({
  queryFn: getUser,
  queryKey: ['user']
})
</script>

<template>
  <Header />
  <main class="container flex h-[90svh] min-h-fit justify-center overflow-hidden">
    <div class="flex items-center">
      <Table v-if="!isLoading">
        <TableHeader>
          <TableRow>
            <TableHead class="">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Location</TableHead>
            <TableHead> Salary </TableHead>
            <TableHead class="text-right">Technologies</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow :key="offer.id" v-for="offer in data.offers">
            <TableCell class="font-medium">{{ offer.title }}</TableCell>
            <TableCell>{{ offer.description }}</TableCell>
            <TableCell>{{ offer.company }}</TableCell>
            <TableCell>{{ offer.location }}</TableCell>
            <TableCell>{{ offer.salary }}</TableCell>
            <TableCell class="text-right">{{ offer.technologies.join(', ') }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </main>
</template>
