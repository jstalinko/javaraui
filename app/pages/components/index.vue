<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <Navbar>
      <template #action>
        <NuxtLink
          class="border border-slate-700 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white"
          to="/"
        >
          Back home
        </NuxtLink>
      </template>
    </Navbar>

    <main class="mx-auto max-w-7xl">
      <section class="border-b border-slate-200 bg-white px-6 py-10">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-xs font-semibold text-orange-600">Components Library</p>
            <h1 class="mt-2 text-3xl font-semibold">Border-first UI components</h1>
            <p class="mt-2 max-w-xl text-sm text-slate-600">
              Browse by category, preview every component, and copy the HTML snippet instantly.
            </p>
          </div>

          <form class="w-full max-w-md border border-slate-200 bg-white p-4" @submit.prevent="applySearch">
            <label class="text-xs font-semibold text-slate-600">Search components</label>
            <div class="mt-2 flex items-center gap-2 border border-slate-200 bg-white px-3 py-2">
              <span class="h-3 w-3 bg-slate-300"></span>
              <input
                v-model="searchTerm"
                type="text"
                placeholder="Search buttons, forms, cards..."
                class="w-full text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <div class="mt-3 flex items-center gap-2">
              <button
                class="border border-slate-900 bg-slate-900 px-3 py-2 text-xs font-medium text-white"
                type="submit"
              >
                Search
              </button>
              <button
                class="border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 hover:border-slate-400"
                type="button"
                @click="clearFilters"
              >
                Clear filters
              </button>
            </div>
          </form>
        </div>
      </section>

      <section class="border-b border-slate-200 bg-white px-6 py-8">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold">Categories</h2>
          <span class="text-xs text-slate-500">{{ componentCategories.length }} categories</span>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <button
            v-for="category in componentCategories"
            :key="category"
            class="border px-3 py-2 text-sm"
            :class="
              activeCategory === category
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
            "
            type="button"
            @click="setCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </section>

      <section class="bg-white px-6 py-10">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">All components</h2>
          <span class="text-xs text-slate-500">{{ filteredComponents.length }} items</span>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <NuxtLink
            v-for="component in filteredComponents"
            :key="component.slug"
            :to="`/components/${component.slug}`"
            class="border border-slate-700 bg-white p-5 hover:bg-slate-50"
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-semibold">{{ component.name }}</p>
                <p class="mt-1 text-sm text-slate-600">{{ component.description }}</p>
              </div>
              <span class="border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600">
                {{ component.category }}
              </span>
            </div>
            <div class="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
              <span v-for="tag in component.tags" :key="tag" class="border border-slate-200 bg-white px-2 py-1">
                {{ tag }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Navbar from '~/components/Navbar.vue'
import { componentCategories, components } from '~/data/components'

const route = useRoute()
const router = useRouter()

const searchTerm = ref('')
const activeCategory = ref<string | null>(null)

const hydrateFromQuery = () => {
  const { search, category } = route.query
  searchTerm.value = typeof search === 'string' ? search : ''
  activeCategory.value = typeof category === 'string' ? category : null
}

hydrateFromQuery()

watch(
  () => route.query,
  () => {
    hydrateFromQuery()
  }
)

const filteredComponents = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()
  return components.filter((component) => {
    const matchesCategory = activeCategory.value
      ? component.category === activeCategory.value
      : true

    const haystack = [
      component.name,
      component.category,
      component.description,
      ...component.tags,
    ]
      .join(' ')
      .toLowerCase()

    const matchesSearch = term ? haystack.includes(term) : true

    return matchesCategory && matchesSearch
  })
})

const applySearch = () => {
  const query: Record<string, string> = {}
  if (searchTerm.value.trim()) {
    query.search = searchTerm.value.trim()
  }
  if (activeCategory.value) {
    query.category = activeCategory.value
  }
  router.push({ path: '/components', query })
}

const setCategory = (category: string) => {
  activeCategory.value = category
  applySearch()
}

const clearFilters = () => {
  searchTerm.value = ''
  activeCategory.value = null
  router.push('/components')
}
</script>
