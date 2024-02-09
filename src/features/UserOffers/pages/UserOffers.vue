<script setup lang="ts">
import Header from '@/shared/components/UI/Header/Header.vue'
import { FaRegCircleXmark } from '@kalimahapps/vue-icons'
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
import { useRouter } from 'vue-router'
import axios, { isAxiosError } from 'axios'
import { toast } from 'vue-sonner'

const router = useRouter()

if (!localStorage.getItem('accessToken')) router.push('/')

const { getUser } = useUserStore()

const { data, isLoading } = useQuery({
  queryFn: getUser,
  queryKey: ['user']
})

const handleDelete = async (id: string) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/offer/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })

    if (response.status == 200) toast(response.data.message)
  } catch (error) {
    if (isAxiosError(error)) {
      toast(error.response?.data.message)
    }
  }
}
</script>

<template>
  <Header />
  <main class="container flex h-[90svh] min-h-fit justify-center overflow-hidden">
    <div class="flex items-center justify-center">
      <p
        class="text-light_text_text text-4xl font-bold dark:text-white"
        v-if="data.offers.length < 1"
      >
        Offers not found!
      </p>
    </div>
    <div class="flex items-center">
      <Table v-if="!isLoading && data.offers.length >= 1">
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
          <TableRow class=" " :key="offer.id" v-for="offer in data.offers">
            <TableCell class="font-medium">{{ offer.title }}</TableCell>
            <TableCell>{{ offer.description }}</TableCell>
            <TableCell>{{ offer.company }}</TableCell>
            <TableCell>{{ offer.location }}</TableCell>
            <TableCell>{{ offer.salary }}</TableCell>
            <TableCell class="text-right">{{ offer.technologies.join(', ') }}</TableCell>
            <div class="h-full w-full flex-col items-center p-4">
              <button @click="() => handleDelete(offer.id)" class="text-2xl">
                <FaRegCircleXmark />
              </button>
            </div>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </main>
</template>
