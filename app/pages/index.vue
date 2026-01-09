<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <Navbar>
      <template #action>
        <form class="hidden items-center gap-2 md:flex" @submit.prevent="submitSearch">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Search components"
            class="w-56 border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
          <button
            class="border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
            type="submit"
          >
            Search
          </button>
        </form>
      </template>
    </Navbar>

    <main class="mx-auto max-w-7xl">
      <section class="border-b border-slate-200 bg-white px-6 py-14">
        <div class="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p class="text-xs font-semibold text-orange-600">Border-first UI kit</p>
            <h1 class="mt-3 text-4xl font-semibold tracking-tight">Simple Tailwind components, ready to copy.</h1>
            <p class="mt-3 text-sm text-slate-600">
              Clean borders, minimal shadows, and elegant spacing. Browse, preview, and paste into your project.
            </p>
            <form class="mt-6 flex flex-col gap-2 sm:flex-row" @submit.prevent="submitSearch">
              <input
                v-model="searchTerm"
                type="text"
                placeholder="Search buttons, forms, cards..."
                class="flex-1 border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
              <button
                class="border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                type="submit"
              >
                Search components
              </button>
            </form>
            <div class="mt-6 flex flex-wrap gap-2">
              <NuxtLink
                class="border border-slate-700 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                to="/components"
              >
                Browse all components
              </NuxtLink>
              <a
                class="border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 hover:bg-slate-100"
                href="#categories"
              >
                View categories
              </a>
            </div>
          </div>

          <div class="border border-slate-200 bg-slate-50 p-4">
            <p class="text-xs font-semibold text-slate-500">Featured preview</p>
            <div class="mt-4 space-y-3">
              <div class="border border-slate-700 bg-white p-4">
                <p class="text-sm font-semibold">Primary button set</p>
                <p class="mt-1 text-xs text-slate-600">Structured, direct, copy-ready.</p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <button class="border border-slate-900 bg-slate-900 px-3 py-2 text-xs font-medium text-white">
                    Primary
                  </button>
                  <button class="border border-slate-700 bg-white px-3 py-2 text-xs font-medium text-slate-700">
                    Outline
                  </button>
                </div>
              </div>
              <div class="border border-slate-700 bg-white p-4">
                <p class="text-sm font-semibold">Inline form</p>
                <div class="mt-3 flex items-center gap-2">
                  <input
                    class="flex-1 border border-slate-700 px-3 py-2 text-xs"
                    placeholder="Your email"
                  />
                  <button class="border border-slate-900 bg-slate-900 px-3 py-2 text-xs text-white">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" class="border-b border-slate-200 bg-white px-6 py-10">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">Categories</h2>
          <span class="text-xs text-slate-500">{{ componentCategories.length }} groups</span>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <NuxtLink
            v-for="category in componentCategories"
            :key="category"
            class="border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-slate-400"
            :to="`/components?category=${encodeURIComponent(category)}`"
          >
            {{ category }}
          </NuxtLink>
        </div>
      </section>

      <section class="bg-white px-6 py-10">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">Popular components</h2>
          <NuxtLink class="text-sm text-slate-600 hover:text-slate-900" to="/components">
            View all
          </NuxtLink>
        </div>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <NuxtLink
            v-for="component in featuredComponents"
            :key="component.slug"
            :to="`/components/${component.slug}`"
            class="border border-slate-700 bg-white p-4 hover:bg-slate-50"
          >
            <p class="text-sm font-semibold">{{ component.name }}</p>
            <p class="mt-1 text-xs text-slate-600">{{ component.description }}</p>
            <span class="mt-3 inline-flex border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-500">
              {{ component.category }}
            </span>
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '~/components/Navbar.vue'
import { componentCategories, components } from '~/data/components'

const router = useRouter()
const searchTerm = ref('')

const featuredComponents = computed(() => components.slice(0, 3))

const submitSearch = () => {
  const term = searchTerm.value.trim()
  if (!term) {
    router.push('/components')
    return
  }

  router.push(`/components?search=${encodeURIComponent(term)}`)
}
</script>
