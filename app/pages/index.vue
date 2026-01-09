<template>
    <!-- NAV -->
    <header class="border-b border-slate-700 bg-white">
        <div class="mx-auto flex max-w-7xl items-center justify-between border-l border-r border-slate-700 px-4 py-3">
            <a href="#home" class="flex items-center gap-3">
                <div class="h-9 w-9 bg-orange-500"></div>
                <span class="text-sm font-semibold">
                    Javara<span class="text-orange-500">UI</span>
                </span>
            </a>

            <nav class="hidden items-center gap-2 md:flex">
                <a class="px-3 py-2 text-sm text-slate-700 hover:underline" href="#home">Home</a>
                <a class="px-3 py-2 text-sm text-slate-700 hover:underline" href="#components">Components</a>
                <a class="px-3 py-2 text-sm text-slate-700 hover:underline" href="#docs">Docs</a>
                <a class="px-3 py-2 text-sm text-slate-700 hover:underline" href="#faq">FAQ</a>
            </nav>

            <div class="flex items-center gap-2">
                <input type="text" placeholder="Search components"
                    class="w-48 border border-slate-700 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 md:w-64" />
                <button
                    class="border border-slate-700 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-900/10">
                    Search
                </button>
            </div>
        </div>
    </header>

    <!-- PAGE -->
    <div class="min-h-screen bg-slate-50 text-slate-900">
        <main id="home" class="mx-auto max-w-7xl border-l border-r border-slate-700 bg-white">
            <!-- HERO -->
            <section class="border-b border-slate-200 px-6 py-12 md:py-16">
                <div class="grid items-center gap-10 md:grid-cols-2">
                    <div class="border-l-4 border-orange-500 pl-4">
                        <div
                            class="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                            <span class="h-2 w-2 bg-orange-500"></span>
                            Free & simple Tailwind v4 components
                        </div>

                        <h1 class="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Border-first components<br />
                            for fast UI shipping
                        </h1>

                        <p class="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                            <span class="font-medium text-slate-900">No Config</span> •
                            <span class="font-medium text-slate-900">No Install</span> •
                            <span class="font-medium text-slate-900">Just Copy & Paste</span>
                            <br />
                            Minimal, clean, and consistent — built with Tailwind CSS v4.
                        </p>

                        <div class="mt-6 flex flex-wrap gap-2">
                            <a href="#components"
                                class="border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-[0_1px_0_rgba(15,23,42,0.06)] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
                                Browse Components
                            </a>
                            <a href="#docs"
                                class="border border-slate-700 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
                                Read Docs
                            </a>
                            <a href="#getting-started"
                                class="border border-slate-700 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
                                Getting Started
                            </a>
                        </div>

                        <!-- quick install -->
                        <div id="getting-started" class="mt-8 border border-slate-700 bg-slate-50 p-4">
                            <div class="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
                                <p class="text-xs font-semibold text-slate-700">Quick start</p>
                                <span class="border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600">
                                    copy
                                </span>
                            </div>

                            <div class="mt-3 space-y-3 text-sm text-slate-700">
                                <div class="grid gap-2 md:grid-cols-2">
                                    <div class="border border-slate-700 bg-white p-3">
                                        <p class="text-xs font-semibold text-slate-700">1) Use Tailwind v4</p>
                                        <p class="mt-1 text-xs text-slate-600">On your project (any setup you like).</p>
                                    </div>
                                    <div class="border border-slate-700 bg-white p-3">
                                        <p class="text-xs font-semibold text-slate-700">2) Copy component</p>
                                        <p class="mt-1 text-xs text-slate-600">Paste HTML into your page.</p>
                                    </div>
                                </div>

                                <div class="border border-slate-700 bg-white p-3">
                                    <p class="text-xs font-semibold text-slate-700">3) Done</p>
                                    <p class="mt-1 text-xs text-slate-600">
                                        Tweak spacing/colors, keep border-first style.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- right: preview -->
                    <div class="border border-slate-700 bg-slate-50 p-4">
                        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
                            <p class="text-xs font-semibold text-slate-700">Preview</p>
                            <span class="border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600">
                                JavaraUI
                            </span>
                        </div>

                        <div class="mt-4 space-y-3">
                            <div class="border border-slate-700 bg-white p-4">
                                <div class="flex items-start justify-between gap-3">
                                    <div>
                                        <p class="text-sm font-semibold">Card</p>
                                        <p class="mt-1 text-sm text-slate-600">
                                            Borders define structure. Shadows stay minimal.
                                        </p>
                                    </div>
                                    <span
                                        class="border border-orange-200 bg-orange-50 px-2 py-1 text-xs text-orange-700">
                                        border-first
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-3">
                                <div class="border border-slate-700 bg-white p-4">
                                    <p class="text-sm font-semibold">No config</p>
                                    <p class="mt-1 text-xs text-slate-600">Works anywhere</p>
                                </div>
                                <div class="border border-slate-700 bg-white p-4">
                                    <p class="text-sm font-semibold">No install</p>
                                    <p class="mt-1 text-xs text-slate-600">Just paste</p>
                                </div>
                            </div>

                            <div class="border border-slate-700 bg-white p-4">
                                <p class="text-sm font-semibold">Button states</p>
                                <div class="mt-3 flex flex-wrap gap-2">
                                    <button
                                        class="border border-slate-900 bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-slate-800">
                                        Primary
                                    </button>
                                    <button
                                        class="border border-slate-700 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-900 hover:bg-slate-200">
                                        Secondary
                                    </button>
                                    <button
                                        class="border border-slate-900 bg-white px-3 py-2 text-xs font-medium text-slate-900 hover:bg-slate-50">
                                        Outline
                                    </button>
                                </div>
                            </div>

                            <div class="border border-slate-700 bg-white p-4">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-semibold">Loading</p>
                                    <p class="text-xs text-slate-500">fetching</p>
                                </div>
                                <div class="mt-3 h-2 w-full bg-slate-100">
                                    <div class="h-2 w-2/3 bg-orange-500 motion-safe:animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- TRUST / VALUE -->
            <section class="border-b border-slate-200 px-6 py-10">
                <div class="grid gap-3 md:grid-cols-3">
                    <div class="border border-slate-700 bg-white p-5">
                        <p class="text-sm font-semibold">Border-first system</p>
                        <p class="mt-1 text-sm text-slate-600">
                            Komponen konsisten dengan border sebagai “struktur”.
                        </p>
                    </div>
                    <div class="border border-slate-700 bg-white p-5">
                        <p class="text-sm font-semibold">Copy-paste docs</p>
                        <p class="mt-1 text-sm text-slate-600">
                            Setiap komponen punya snippet siap tempel.
                        </p>
                    </div>
                    <div class="border border-slate-700 bg-white p-5">
                        <p class="text-sm font-semibold">Simple by default</p>
                        <p class="mt-1 text-sm text-slate-600">
                            Tanpa rounded, tanpa efek berlebihan.
                        </p>
                    </div>
                </div>
            </section>

            <!-- COMPONENTS INDEX -->
            <section id="components" class="border-b border-slate-200 px-6 py-10">
                <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 class="text-2xl font-semibold">Components</h2>
                        <p class="mt-2 text-sm text-slate-600">
                            Pilih kategori, copas, lalu tweak seperlunya.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        <a class="border border-slate-700 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            href="#buttons">
                            Buttons
                        </a>
                        <a class="border border-slate-700 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            href="#forms">
                            Forms
                        </a>
                        <a class="border border-slate-700 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            href="#cards">
                            Cards
                        </a>
                        <a class="border border-slate-700 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            href="#tabs">
                            Tabs
                        </a>
                        <a class="border border-slate-700 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            href="#loading">
                            Loading
                        </a>
                    </div>
                </div>

                <div class="mt-6 grid gap-3 md:grid-cols-3">
                    <!-- Card item -->
                    <a href="#buttons" class="border border-slate-700 bg-white p-5 hover:bg-slate-50">
                        <p class="text-sm font-semibold">Buttons</p>
                        <p class="mt-1 text-sm text-slate-600">Primary, secondary, outline.</p>
                        <p class="mt-3 text-xs text-slate-500">3 variants</p>
                    </a>

                    <a href="#cards" class="border border-slate-700 bg-white p-5 hover:bg-slate-50">
                        <p class="text-sm font-semibold">Cards</p>
                        <p class="mt-1 text-sm text-slate-600">Simple layouts and sections.</p>
                        <p class="mt-3 text-xs text-slate-500">Examples</p>
                    </a>

                    <a href="#forms" class="border border-slate-700 bg-white p-5 hover:bg-slate-50">
                        <p class="text-sm font-semibold">Forms</p>
                        <p class="mt-1 text-sm text-slate-600">Inputs, select, textarea.</p>
                        <p class="mt-3 text-xs text-slate-500">Accessible states</p>
                    </a>

                    <a href="#tabs" class="border border-slate-700 bg-white p-5 hover:bg-slate-50">
                        <p class="text-sm font-semibold">Tabs</p>
                        <p class="mt-1 text-sm text-slate-600">Bordered tabs style.</p>
                        <p class="mt-3 text-xs text-slate-500">Static UI</p>
                    </a>

                    <a href="#faq" class="border border-slate-700 bg-white p-5 hover:bg-slate-50">
                        <p class="text-sm font-semibold">FAQ</p>
                        <p class="mt-1 text-sm text-slate-600">No-JS details blocks.</p>
                        <p class="mt-3 text-xs text-slate-500">3 questions</p>
                    </a>

                    <a href="#docs" class="border border-slate-700 bg-white p-5 hover:bg-slate-50">
                        <p class="text-sm font-semibold">Docs</p>
                        <p class="mt-1 text-sm text-slate-600">Guidelines & usage.</p>
                        <p class="mt-3 text-xs text-slate-500">Copy rules</p>
                    </a>
                </div>
            </section>

            <!-- DOCS -->
            <section id="docs" class="border-b border-slate-200 px-6 py-10">
                <h2 class="text-2xl font-semibold">Docs</h2>
                <p class="mt-2 text-sm text-slate-600">
                    Prinsip JavaraUI: border-first, no rounded, minimal shadow, clean spacing.
                </p>

                <div class="mt-6 grid gap-3 md:grid-cols-2">
                    <div class="border border-slate-700 bg-white p-5">
                        <p class="text-sm font-semibold">Design rules</p>
                        <ul class="mt-3 space-y-2 text-sm text-slate-700">
                            <li>• Border untuk struktur: <span class="font-mono text-xs">border border-slate-700</span>
                            </li>
                            <li>• Hover halus: <span class="font-mono text-xs">hover:bg-slate-50</span></li>
                            <li>• Focus ring tipis: <span class="font-mono text-xs">focus:ring-slate-900/10</span></li>
                            <li>• No rounded: jangan pakai <span class="font-mono text-xs">rounded-*</span></li>
                        </ul>
                    </div>

                    <div class="border border-slate-700 bg-slate-50 p-5">
                        <p class="text-sm font-semibold">Copy & paste workflow</p>
                        <ol class="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                            <li>Open komponen di halaman docs</li>
                            <li>Copy snippet</li>
                            <li>Paste ke project kamu</li>
                            <li>Ganti label/warna sesuai brand (border tetap)</li>
                        </ol>
                    </div>
                </div>
            </section>

            <!-- EXAMPLES (docs content blocks) -->
            <section class="border-b border-slate-200 px-6 py-10">
                <!-- BUTTONS -->
                <div id="buttons" class="border border-slate-700 bg-white p-6">
                    <div class="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
                        <div>
                            <h3 class="text-lg font-semibold">Buttons</h3>
                            <p class="mt-1 text-sm text-slate-600">Primary / Secondary / Outline</p>
                        </div>
                        <span class="border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600">copy</span>
                    </div>

                    <div class="mt-5 flex flex-wrap gap-2">
                        <button
                            class="border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
                            Primary
                        </button>
                        <button
                            class="border border-slate-700 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
                            Secondary
                        </button>
                        <button
                            class="border border-slate-900 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
                            Outline
                        </button>
                    </div>

                    <pre
                        class="mt-5 overflow-auto border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700"><code>&lt;button class="border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"&gt;Primary&lt;/button&gt;
&lt;button class="border border-slate-700 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200"&gt;Secondary&lt;/button&gt;
&lt;button class="border border-slate-900 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"&gt;Outline&lt;/button&gt;</code></pre>
                </div>

                <!-- CARDS -->
                <div id="cards" class="mt-6 border border-slate-700 bg-white p-6">
                    <div class="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
                        <div>
                            <h3 class="text-lg font-semibold">Cards</h3>
                            <p class="mt-1 text-sm text-slate-600">Simple card layout</p>
                        </div>
                        <span class="border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600">copy</span>
                    </div>

                    <div class="mt-5 border border-slate-700 bg-white p-5">
                        <div class="flex items-start justify-between gap-4">
                            <div>
                                <p class="text-sm font-semibold">Card title</p>
                                <p class="mt-1 text-sm text-slate-600">Short description for this card.</p>
                            </div>
                            <span
                                class="border border-orange-200 bg-orange-50 px-2 py-1 text-xs text-orange-700">new</span>
                        </div>
                        <div class="mt-4 border-t border-slate-200 pt-4 flex gap-2">
                            <button
                                class="border border-slate-900 bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
                                Action
                            </button>
                            <button
                                class="border border-slate-700 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
                                Secondary
                            </button>
                        </div>
                    </div>
                </div>

                <!-- FORMS -->
                <div id="forms" class="mt-6 border border-slate-700 bg-white p-6">
                    <div class="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
                        <div>
                            <h3 class="text-lg font-semibold">Forms</h3>
                            <p class="mt-1 text-sm text-slate-600">Inputs with border-first style</p>
                        </div>
                        <span class="border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600">copy</span>
                    </div>

                    <div class="mt-5 grid gap-4 md:grid-cols-2">
                        <label class="block">
                            <span class="mb-1 block text-sm font-medium text-slate-700">Name</span>
                            <input type="text" placeholder="Your name"
                                class="w-full border border-slate-700 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
                        </label>

                        <label class="block">
                            <span class="mb-1 block text-sm font-medium text-slate-700">Email</span>
                            <input type="email" placeholder="you@email.com"
                                class="w-full border border-slate-700 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
                        </label>

                        <label class="block md:col-span-2">
                            <span class="mb-1 block text-sm font-medium text-slate-700">Message</span>
                            <textarea rows="4" placeholder="Write something..."
                                class="w-full border border-slate-700 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10"></textarea>
                        </label>

                        <div class="md:col-span-2 flex flex-wrap gap-2">
                            <button
                                class="border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                                Submit
                            </button>
                            <button
                                class="border border-slate-700 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

                <!-- TABS -->
                <div id="tabs" class="mt-6 border border-slate-700 bg-white p-6">
                    <div class="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
                        <div>
                            <h3 class="text-lg font-semibold">Tabs</h3>
                            <p class="mt-1 text-sm text-slate-600">Bordered tabs (static)</p>
                        </div>
                        <span class="border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600">copy</span>
                    </div>

                    <div class="mt-5 border border-slate-700 bg-white">
                        <div class="flex border-b border-slate-200">
                            <button
                                class="border-r border-slate-200 bg-slate-900 px-4 py-3 text-sm font-medium text-white">
                                Overview
                            </button>
                            <button
                                class="border-r border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                                Examples
                            </button>
                            <button class="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                                API
                            </button>
                        </div>
                        <div class="p-5">
                            <p class="text-sm text-slate-600">Tab content area.</p>
                        </div>
                    </div>
                </div>

                <!-- LOADING -->
                <div id="loading" class="mt-6 border border-slate-700 bg-white p-6">
                    <div class="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
                        <div>
                            <h3 class="text-lg font-semibold">Loading</h3>
                            <p class="mt-1 text-sm text-slate-600">Spinner + skeleton</p>
                        </div>
                        <span class="border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600">copy</span>
                    </div>

                    <div class="mt-5 flex flex-wrap items-center gap-3">
                        <div class="inline-flex items-center gap-3 border border-slate-700 bg-white px-4 py-3">
                            <span class="h-4 w-4 animate-spin border-2 border-slate-700 border-t-orange-500"
                                aria-label="Loading"></span>
                            <span class="text-sm text-slate-700">Loading...</span>
                        </div>

                        <div class="border border-slate-700 bg-white p-4">
                            <div class="flex items-start gap-4">
                                <div class="h-10 w-10 bg-slate-200 animate-pulse"></div>
                                <div class="w-64 space-y-2">
                                    <div class="h-4 w-1/2 bg-slate-200 animate-pulse"></div>
                                    <div class="h-3 w-3/4 bg-slate-200 animate-pulse"></div>
                                    <div class="h-3 w-2/3 bg-slate-200 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- FAQ -->
            <section id="faq" class="border-b border-slate-200 px-6 py-10">
                <h2 class="text-2xl font-semibold">FAQ</h2>
                <p class="mt-2 text-sm text-slate-600">No config, no install — just copy & paste.</p>

                <div class="mt-6 space-y-3">
                    <details class="border border-slate-700 bg-white p-4">
                        <summary class="cursor-pointer text-sm font-semibold">Is JavaraUI really free?</summary>
                        <p class="mt-2 text-sm text-slate-600">
                            Yes. Use it in personal or commercial projects. (You can add your own license text.)
                        </p>
                    </details>

                    <details class="border border-slate-700 bg-white p-4">
                        <summary class="cursor-pointer text-sm font-semibold">Do I need a Tailwind config?</summary>
                        <p class="mt-2 text-sm text-slate-600">
                            No. Components are plain Tailwind utility classes — paste and go.
                        </p>
                    </details>

                    <details class="border border-slate-700 bg-white p-4">
                        <summary class="cursor-pointer text-sm font-semibold">Can I use it with Vue/React?</summary>
                        <p class="mt-2 text-sm text-slate-600">
                            Yes. The markup is framework-agnostic. Wrap it into components anytime.
                        </p>
                    </details>
                </div>
            </section>

            <!-- FOOTER -->
            <footer class="px-6 py-8">
                <div class="border border-slate-700 bg-slate-50 p-5">
                    <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <p class="text-sm text-slate-600">
                            © {{ new Date().getFullYear() }} <span class="font-medium text-slate-900">JavaraUI</span> —
                            Free and simple border-first TailwindCSS v4 components.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <a class="border border-slate-700 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                href="#components">
                                Components
                            </a>
                            <a class="border border-slate-700 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                href="#docs">
                                Docs
                            </a>
                            <a class="border border-slate-700 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                href="#faq">
                                FAQ
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    </div>
</template>
