import axios, { isAxiosError } from 'axios'
import { defineStore } from 'pinia'
import { toast } from 'vue-sonner'

export const useOffersStore = defineStore('offers', () => {
  const getOffers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/offers`)

      return response.data.offers
    } catch (error) {
      if (isAxiosError(error)) {
        toast(error.response?.data.message)
      }
    }
  }

  return { getOffers }
})
