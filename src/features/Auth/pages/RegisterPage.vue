<script setup lang="ts">
import { useUserStore } from '@/shared/stores/user'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { RouterLink } from 'vue-router'
import { z } from 'zod'

const schema = toTypedSchema(
  z.object({
    email: z.string().min(1).email(),
    password: z.string().min(8),
    username: z.string().min(5)
  })
)

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema
})

const { signIn } = useUserStore()

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [username, usernameAttrs] = defineField('password')

const onSubmit = handleSubmit((values) => {
  signIn({ email: values.email, password: values.password })
})
</script>

<template>
  <main class="w-screeen flex h-screen items-center justify-center p-4">
    <div
      class="flex flex-col justify-center gap-4 rounded-xl bg-light_secondary p-8 text-white lg:w-1/4 dark:bg-slate-900"
    >
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-5xl font-bold">Hello!</h1>
        <p class="text-gray-500">You should be registered to use Jobguru</p>
      </div>
      <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
        <div class="flex flex-col gap-2 py-2">
          <label>Username</label>
          <input
            v-model="username"
            v-bind="usernameAttrs"
            class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
            type="text"
          />
          <span class="text-sm text-red-500" v-if="errors.username">{{ errors.username }}</span>
        </div>
        <div class="flex flex-col gap-2 py-2">
          <label>Email</label>
          <input
            v-model="email"
            v-bind="emailAttrs"
            class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
            type="email"
          />
          <span class="text-sm text-red-500" v-if="errors.email">{{ errors.email }}</span>
        </div>
        <div class="flex flex-col gap-2 py-2">
          <label>Password</label>
          <input
            v-model="password"
            v-bind="passwordAttrs"
            class="rounded-xl bg-light_accent/20 px-4 py-2 dark:bg-slate-800"
            type="password"
          />
          <span class="text-red-500" v-if="errors.password">{{ errors.password }}</span>
        </div>
        <button class="mx-auto w-32 rounded-xl bg-light_accent px-4 py-2 dark:bg-dark_accent">
          Login
        </button>
      </form>
    </div>
  </main>
</template>
