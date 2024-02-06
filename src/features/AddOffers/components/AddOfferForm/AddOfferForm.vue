<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import axios, { isAxiosError } from 'axios'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { z } from 'zod'

const router = useRouter()

const schema = toTypedSchema(
  z.object({
    title: z.string().min(5),
    description: z.string().min(10),
    company: z.string().min(1),
    salary: z.number().min(1),
    location: z.string().min(1),
    technologies: z.string().min(1)
  })
)

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema
})

const [title, titleAttrs] = defineField('title')
const [description, descriptionAttrs] = defineField('description')
const [company, companyAttrs] = defineField('company')
const [salary, salaryAttrs] = defineField('salary')
const [location, locationAttrs] = defineField('location')
const [technologies, technologiesAttrs] = defineField('technologies')

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/offers/add`,
      {
        title: values.title,
        description: values.description,
        company: values.company,
        salary: values.salary,
        location: values.location,
        technologies: values.technologies.split(', ')
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }
    )

    if (response.status == 200) {
      toast('Offer has been added')
      router.push('/')
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response)
    }
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-1/2 p-8">
    <div
      class="flex flex-col justify-center gap-4 rounded-xl bg-light_secondary p-8 text-white dark:bg-slate-900"
    >
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-3xl font-bold">Add new offer</h1>
      </div>

      <div class="flex flex-col gap-2 py-2">
        <label>Title</label>
        <input
          v-model="title"
          v-bind="titleAttrs"
          class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          type="text"
        />
        <span class="text-sm text-red-500" v-if="errors.title">{{ errors.title }}</span>
      </div>
      <div class="flex flex-col gap-2 py-2">
        <label>Description</label>
        <textarea
          v-model="description"
          v-bind="descriptionAttrs"
          class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          type="text"
        />
        <span class="text-sm text-red-500" v-if="errors.description">{{ errors.description }}</span>
      </div>
      <div class="flex flex-col gap-2 py-2">
        <label>Company</label>
        <input
          v-bind="companyAttrs"
          v-model="company"
          class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          type="text"
        />
        <span class="text-sm text-red-500" v-if="errors.company">{{ errors.company }}</span>
      </div>
      <div class="flex flex-col gap-2 py-2">
        <label>Salary</label>
        <input
          v-bind="salaryAttrs"
          v-model="salary"
          class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          type="number"
          min="1"
        />
        <span class="text-sm text-red-500" v-if="errors.salary">{{ errors.salary }}</span>
      </div>
      <div class="flex flex-col gap-2 py-2">
        <label>Technologies</label>
        <input
          v-bind="technologiesAttrs"
          v-model="technologies"
          class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          type="text"
        />
        <span class="text-sm text-red-500" v-if="errors.technologies">{{
          errors.technologies
        }}</span>
      </div>
      <div class="flex flex-col gap-2 py-2">
        <label>Location</label>
        <input
          v-bind="locationAttrs"
          v-model="location"
          class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          type="text"
        />
        <span class="text-sm text-red-500" v-if="errors.location">{{ errors.location }}</span>
      </div>

      <button class="mx-auto w-32 rounded-xl bg-light_accent px-4 py-2 dark:bg-dark_accent">
        Add offer
      </button>
    </div>
  </form>
</template>
