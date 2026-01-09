<template>
  <header class="border-b border-slate-200 bg-white">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <NuxtLink class="flex items-center gap-3" to="/">
        <div class="h-9 w-9 bg-orange-500"></div>
        <span class="text-sm font-semibold">Javara<span class="text-orange-500">UI</span></span>
      </NuxtLink>

      <nav class="hidden items-center gap-2 md:flex">
        <NuxtLink class="px-3 py-2 text-sm text-slate-600 hover:text-slate-900" to="/">Home</NuxtLink>
        <NuxtLink class="px-3 py-2 text-sm text-slate-600 hover:text-slate-900" to="/components">
          Components
        </NuxtLink>
      </nav>

      <slot name="action">
        <NuxtLink
          class="border border-slate-700 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white"
          to="/components"
        >
          Explore
        </NuxtLink>
      </slot>
    </div>
  </header>
</template>
