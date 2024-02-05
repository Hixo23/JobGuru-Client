<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { RouterLink } from 'vue-router'
import { z } from 'zod'

const schema = toTypedSchema(
  z.object({
    email: z.string().min(1).email(),
    password: z.string().min(8)
  })
)

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema
})

const { signIn } = useUserStore()

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit((values) => {
  signIn({ email: values.email, password: values.password })
})
</script>

<template>
  <main class="w-screeen flex h-screen items-center justify-center">
    <div
      class="flex w-1/4 flex-col justify-center gap-4 rounded-xl bg-light_secondary p-8 text-white dark:bg-slate-900"
    >
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-5xl font-bold">Hello!</h1>
        <p class="text-gray-500">You should be logged in to add offers</p>
      </div>
      <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
        <div class="flex flex-col gap-2 py-2">
          <label>Email</label>
          <input
            v-model="email"
            v-bind="emailAttrs"
            class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
            type="email"
          />
          <span v-if="errors.email">{{ errors.email }}</span>
        </div>
        <div class="flex flex-col gap-2 py-2">
          <label>Password</label>
          <input
            v-model="password"
            v-bind="passwordAttrs"
            class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
            type="password"
          />
          <span v-if="errors.password">{{ errors.password }}</span>
        </div>
        <button class="mx-auto w-32 rounded-xl bg-light_accent px-4 py-2 dark:bg-dark_accent">
          Login
        </button>
      </form>
      <p class="text-center">
        Don't have account?
        <RouterLink class="underline" to="/register">Register</RouterLink>
      </p>
    </div>
  </main>
</template>
