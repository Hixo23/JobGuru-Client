<script setup lang="ts">
import Header from '@/shared/components/UI/Header/Header.vue'
import AddOfferForm from '../components/AddOfferForm/AddOfferForm.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

if (!localStorage.getItem('accessToken')) router.push('/')
</script>

<template>
  <Header />
  <main
    class="container relative flex h-[92svh] w-screen items-center justify-center overflow-hidden"
  >
    <AddOfferForm />
  </main>
</template>
