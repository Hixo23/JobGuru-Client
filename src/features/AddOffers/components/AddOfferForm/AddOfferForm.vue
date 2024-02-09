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
    technologies: z.string().min(1),
    company_website: z.union([z.literal(''), z.string().trim().url()]),
    experience: z.string().min(4),
    job_type: z.string().min(1)
  })
)

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema
})

const [title, titleAttrs] = defineField('title')
const [description, descriptionAttrs] = defineField('description')
const [company, companyAttrs] = defineField('company')
const [companyWebsite, companyWebsiteAttrs] = defineField('company_website')
const [salary, salaryAttrs] = defineField('salary')
const [location, locationAttrs] = defineField('location')
const [technologies, technologiesAttrs] = defineField('technologies')
const [experience, experienceAttrs] = defineField('experience')
const [jobType, jobTypeAttrs] = defineField('job_type')

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
        technologies: values.technologies.split(', '),
        company_website: values.company_website,
        experience: values.experience,
        job_type: values.job_type
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
      toast(error.response?.data.message)
    }
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-1/2 py-4">
    <div
      class="flex flex-col justify-center gap-1 rounded-xl bg-light_secondary p-12 text-white dark:bg-slate-900"
    >
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-3xl font-bold text-gray-500 dark:text-dark_text">Add new offer</h1>
      </div>

      <div class="flex flex-col gap-2 py-2">
        <div class="flex justify-between">
          <div class="flex flex-col gap-2 py-2">
            <label class="font-semibold text-light_text dark:text-dark_text">Company name</label>
            <input
              v-bind="companyAttrs"
              v-model="company"
              class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
              type="text"
            />
            <span class="text-sm text-red-500" v-if="errors.company">{{ errors.company }}</span>
          </div>
          <div class="flex flex-col gap-2 py-2">
            <label class="font-semibold text-light_text dark:text-dark_text">Company site</label>
            <input
              v-bind="companyWebsiteAttrs"
              v-model="companyWebsite"
              class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
              type="text"
            />
            <span class="text-sm text-red-500" v-if="errors.company">{{ errors.company }}</span>
          </div>
        </div>
        <label class="font-semibold text-light_text dark:text-dark_text">Title</label>
        <input
          v-model="title"
          v-bind="titleAttrs"
          class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          type="text"
        />
        <span class="text-sm text-red-500" v-if="errors.title">{{ errors.title }}</span>
      </div>
      <div class="flex flex-col gap-2 py-2">
        <label class="font-semibold text-light_text dark:text-dark_text">Description</label>
        <textarea
          v-model="description"
          v-bind="descriptionAttrs"
          class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          type="text"
        />
        <span class="text-sm text-red-500" v-if="errors.description">{{ errors.description }}</span>
      </div>

      <div class="flex flex-col gap-2 py-2">
        <label class="font-semibold text-light_text dark:text-dark_text">Salary</label>
        <input
          v-bind="salaryAttrs"
          v-model="salary"
          class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          type="number"
          min="1"
        />
        <span class="text-sm text-red-500" v-if="errors.salary">{{ errors.salary }}</span>
      </div>
      <div class="flex justify-between">
        <div class="flex flex-col gap-2 py-2">
          <label class="font-semibold text-light_text dark:text-dark_text">Job type</label>

          <input
            v-model="jobType"
            v-bind="jobTypeAttrs"
            type="text"
            class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          />
          <span class="text-sm text-red-500" v-if="errors.job_type">{{ errors.job_type }}</span>
        </div>
        <div class="flex flex-col gap-2 py-2">
          <label class="font-semibold text-light_text dark:text-dark_text">experience</label>

          <input
            v-model="experience"
            v-bind="experienceAttrs"
            type="text"
            class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          />
          <span class="text-sm text-red-500" v-if="errors.experience">{{ errors.experience }}</span>
        </div>
      </div>
      <div class="flex flex-col gap-2 py-2">
        <label class="font-semibold text-light_text dark:text-dark_text">Location</label>
        <input
          v-bind="locationAttrs"
          v-model="location"
          class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
          type="text"
        />
        <span class="text-sm text-red-500" v-if="errors.location">{{ errors.location }}</span>
      </div>
      <div class="flex flex-col gap-2 py-2">
        <label class="font-semibold text-light_text dark:text-dark_text">Technologies</label>
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

      <button class="mx-auto w-32 rounded-xl bg-light_accent px-4 py-2 dark:bg-dark_accent">
        Add offer
      </button>
    </div>
  </form>
</template>
