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
          Back to list
        </NuxtLink>
      </div>
    </header>

    <main class="mx-auto max-w-7xl border-l border-r border-slate-700 bg-white">
      <section class="border-b border-slate-200 px-6 py-10">
        <p class="text-xs font-semibold text-orange-600">{{ component.category }}</p>
        <h1 class="mt-2 text-3xl font-semibold">{{ component.name }}</h1>
        <p class="mt-2 max-w-2xl text-sm text-slate-600">{{ component.description }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in component.tags"
            :key="tag"
            class="border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600"
          >
            {{ tag }}
          </span>
        </div>
      </section>

      <section class="border-b border-slate-200 px-6 py-10">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">Preview</h2>
          <span class="text-xs text-slate-500">Mobile & Desktop</span>
        </div>
        <div class="mt-6 grid gap-6 md:grid-cols-2">
          <div class="border border-slate-700 bg-slate-50 p-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <p class="text-xs font-semibold text-slate-700">Mobile</p>
              <span class="border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600">375px</span>
            </div>
            <div class="mt-4 border border-slate-700 bg-white p-4" v-html="component.preview.mobile"></div>
          </div>

          <div class="border border-slate-700 bg-slate-50 p-4">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <p class="text-xs font-semibold text-slate-700">Desktop</p>
              <span class="border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600">1024px</span>
            </div>
            <div class="mt-4 border border-slate-700 bg-white p-4" v-html="component.preview.desktop"></div>
          </div>
        </div>
      </section>

      <section class="px-6 py-10">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="text-xl font-semibold">HTML Code</h2>
            <p class="mt-1 text-sm text-slate-600">Copy and paste the markup below.</p>
          </div>
          <button
            class="border border-slate-700 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white"
            type="button"
            @click="copyCode"
          >
            {{ copyLabel }}
          </button>
        </div>

        <pre class="mt-4 overflow-auto border border-slate-700 bg-slate-50 p-4 text-xs text-slate-800">
<code v-html="highlightedCode"></code>
        </pre>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { components } from '~/data/components'

const route = useRoute()
const slug = Array.isArray(route.params.slug)
  ? route.params.slug[0]
  : route.params.slug

const component = computed(() => {
  const match = components.find((item) => item.slug === slug)
  return (
    match ?? {
      slug: 'missing',
      name: 'Component not found',
      category: 'Buttons',
      description: 'We could not find this component in the library.',
      tags: ['missing'],
      preview: {
        mobile: '<div class="text-sm text-slate-600">No preview available.</div>',
        desktop: '<div class="text-sm text-slate-600">No preview available.</div>',
      },
      code: '<!-- Component not found -->',
    }
  )
})

const copyLabel = ref('Copy code')

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')

const highlightHtml = (value: string) => {
  const escaped = escapeHtml(value)
  return escaped
    .replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="text-orange-600">$2</span>')
    .replace(
      /([\w-]+)=(&quot;[^&]*?&quot;)/g,
      '<span class="text-slate-700">$1</span>=<span class="text-emerald-600">$2</span>'
    )
}

const highlightedCode = computed(() => highlightHtml(component.value.code))

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(component.value.code)
    copyLabel.value = 'Copied!'
    window.setTimeout(() => {
      copyLabel.value = 'Copy code'
    }, 2000)
  } catch (error) {
    copyLabel.value = 'Copy failed'
    window.setTimeout(() => {
      copyLabel.value = 'Copy code'
    }, 2000)
  }
}
</script>
