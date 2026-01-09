<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <header class="border-b border-slate-700 bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between border-l border-r border-slate-700 px-4 py-3">
        <NuxtLink class="flex items-center gap-3" to="/">
          <div class="h-9 w-9 bg-orange-500"></div>
          <span class="text-sm font-semibold">Javara<span class="text-orange-500">UI</span></span>
        </NuxtLink>
        <nav class="hidden items-center gap-2 md:flex">
          <NuxtLink class="px-3 py-2 text-sm text-slate-700 hover:underline" to="/">Home</NuxtLink>
          <NuxtLink class="px-3 py-2 text-sm text-slate-700 hover:underline" to="/components">Components</NuxtLink>
        </nav>
        <NuxtLink
          class="border border-slate-700 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white"
          to="/components"
        >
          Explore
        </NuxtLink>
      </div>
    </header>

    <main class="mx-auto max-w-7xl border-l border-r border-slate-700 bg-white">
      <section class="border-b border-slate-200 px-6 py-10">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-xs font-semibold text-orange-600">Components Library</p>
            <h1 class="mt-2 text-3xl font-semibold">Border-first UI components</h1>
            <p class="mt-2 max-w-xl text-sm text-slate-600">
              Browse by category, preview every component, and copy the HTML snippet instantly.
            </p>
          </div>

          <form class="w-full max-w-md border border-slate-700 bg-slate-50 p-4">
            <label class="text-xs font-semibold text-slate-600">Search components</label>
            <div class="mt-2 flex items-center gap-2 border border-slate-700 bg-white px-3 py-2">
              <span class="h-3 w-3 bg-slate-400"></span>
              <input
                v-model="searchTerm"
                type="text"
                placeholder="Search buttons, forms, cards..."
                class="w-full text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <p class="mt-2 text-xs text-slate-500">Type to filter by name, tag, or category.</p>
          </form>
        </div>
      </section>

      <section class="border-b border-slate-200 px-6 py-10">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">Categories</h2>
          <span class="text-xs text-slate-500">{{ componentCategories.length }} categories</span>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <button
            v-for="category in componentCategories"
            :key="category"
            class="border border-slate-700 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            {{ category }}
          </button>
        </div>
      </section>

      <section class="px-6 py-10">
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
              <span
                v-for="tag in component.tags"
                :key="tag"
                class="border border-slate-200 bg-white px-2 py-1"
              >
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
import { computed, ref } from 'vue'
import { componentCategories, components } from '~/data/components'

const searchTerm = ref('')

const filteredComponents = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()
  if (!term) {
    return components
  }

  return components.filter((component) => {
    const haystack = [
      component.name,
      component.category,
      component.description,
      ...component.tags,
    ]
      .join(' ')
      .toLowerCase()

    return haystack.includes(term)
  })
})
</script>
