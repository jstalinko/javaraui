export type ComponentCategory =
  | 'Buttons'
  | 'Forms'
  | 'Cards'
  | 'Navigation'
  | 'Feedback'
  | 'Data Display'

export type ComponentPreview = {
  desktop: string
  mobile: string
}

export type ComponentItem = {
  slug: string
  name: string
  category: ComponentCategory
  description: string
  tags: string[]
  preview: ComponentPreview
  code: string
}

export const componentCategories: ComponentCategory[] = [
  'Buttons',
  'Forms',
  'Cards',
  'Navigation',
  'Feedback',
  'Data Display',
]

export const components: ComponentItem[] = [
  {
    slug: 'split-button-bar',
    name: 'Split Button Bar',
    category: 'Buttons',
    description: 'Primary + secondary actions with a border-first divider.',
    tags: ['button', 'actions', 'split'],
    preview: {
      desktop: `
        <div class="flex flex-wrap items-center gap-2">
          <button class="border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Save changes</button>
          <button class="border border-slate-700 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Preview</button>
          <button class="border border-slate-700 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200">Export</button>
        </div>
      `,
      mobile: `
        <div class="space-y-2">
          <button class="w-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white">Save changes</button>
          <button class="w-full border border-slate-700 bg-white px-4 py-2 text-sm font-medium text-slate-700">Preview</button>
        </div>
      `,
    },
    code: `<!-- Split button bar -->
<div class="flex flex-wrap items-center gap-2">
  <button class="border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Save changes</button>
  <button class="border border-slate-700 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Preview</button>
  <button class="border border-slate-700 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200">Export</button>
</div>`,
  },
  {
    slug: 'icon-input',
    name: 'Icon Input Field',
    category: 'Forms',
    description: 'Input with left icon and helper text.',
    tags: ['input', 'form', 'search'],
    preview: {
      desktop: `
        <label class="block">
          <span class="mb-1 block text-xs font-semibold text-slate-600">Search project</span>
          <div class="flex items-center gap-2 border border-slate-700 bg-white px-3 py-2">
            <span class="h-3 w-3 bg-slate-400"></span>
            <input class="w-full text-sm text-slate-700 outline-none" placeholder="Type keyword..." />
          </div>
        </label>
      `,
      mobile: `
        <label class="block">
          <span class="mb-1 block text-xs font-semibold text-slate-600">Search project</span>
          <div class="flex items-center gap-2 border border-slate-700 bg-white px-3 py-2">
            <span class="h-3 w-3 bg-slate-400"></span>
            <input class="w-full text-sm text-slate-700 outline-none" placeholder="Type keyword..." />
          </div>
        </label>
      `,
    },
    code: `<!-- Icon input -->
<label class="block">
  <span class="mb-1 block text-xs font-semibold text-slate-600">Search project</span>
  <div class="flex items-center gap-2 border border-slate-700 bg-white px-3 py-2">
    <span class="h-3 w-3 bg-slate-400"></span>
    <input class="w-full text-sm text-slate-700 outline-none" placeholder="Type keyword..." />
  </div>
</label>`,
  },
  {
    slug: 'stat-card',
    name: 'Stat Summary Card',
    category: 'Cards',
    description: 'Compact stats with emphasis on borders and structure.',
    tags: ['card', 'stats'],
    preview: {
      desktop: `
        <div class="grid gap-3 md:grid-cols-3">
          <div class="border border-slate-700 bg-white p-4">
            <p class="text-xs text-slate-500">Revenue</p>
            <p class="mt-2 text-xl font-semibold">$24.8k</p>
            <p class="mt-1 text-xs text-emerald-600">+12.4%</p>
          </div>
          <div class="border border-slate-700 bg-white p-4">
            <p class="text-xs text-slate-500">New users</p>
            <p class="mt-2 text-xl font-semibold">1,248</p>
            <p class="mt-1 text-xs text-orange-600">+4.1%</p>
          </div>
          <div class="border border-slate-700 bg-white p-4">
            <p class="text-xs text-slate-500">Churn</p>
            <p class="mt-2 text-xl font-semibold">2.1%</p>
            <p class="mt-1 text-xs text-slate-600">Stable</p>
          </div>
        </div>
      `,
      mobile: `
        <div class="space-y-3">
          <div class="border border-slate-700 bg-white p-4">
            <p class="text-xs text-slate-500">Revenue</p>
            <p class="mt-2 text-xl font-semibold">$24.8k</p>
            <p class="mt-1 text-xs text-emerald-600">+12.4%</p>
          </div>
          <div class="border border-slate-700 bg-white p-4">
            <p class="text-xs text-slate-500">New users</p>
            <p class="mt-2 text-xl font-semibold">1,248</p>
            <p class="mt-1 text-xs text-orange-600">+4.1%</p>
          </div>
        </div>
      `,
    },
    code: `<!-- Stat summary cards -->
<div class="grid gap-3 md:grid-cols-3">
  <div class="border border-slate-700 bg-white p-4">
    <p class="text-xs text-slate-500">Revenue</p>
    <p class="mt-2 text-xl font-semibold">$24.8k</p>
    <p class="mt-1 text-xs text-emerald-600">+12.4%</p>
  </div>
  <div class="border border-slate-700 bg-white p-4">
    <p class="text-xs text-slate-500">New users</p>
    <p class="mt-2 text-xl font-semibold">1,248</p>
    <p class="mt-1 text-xs text-orange-600">+4.1%</p>
  </div>
  <div class="border border-slate-700 bg-white p-4">
    <p class="text-xs text-slate-500">Churn</p>
    <p class="mt-2 text-xl font-semibold">2.1%</p>
    <p class="mt-1 text-xs text-slate-600">Stable</p>
  </div>
</div>`,
  },
  {
    slug: 'stacked-nav',
    name: 'Stacked Navigation',
    category: 'Navigation',
    description: 'Minimal navigation list with active state.',
    tags: ['navigation', 'sidebar'],
    preview: {
      desktop: `
        <nav class="border border-slate-700 bg-white">
          <a class="flex items-center justify-between border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900" href="#">Dashboard<span class="h-2 w-2 bg-orange-500"></span></a>
          <a class="block border-b border-slate-200 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50" href="#">Projects</a>
          <a class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50" href="#">Team</a>
        </nav>
      `,
      mobile: `
        <nav class="border border-slate-700 bg-white">
          <a class="flex items-center justify-between border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900" href="#">Dashboard<span class="h-2 w-2 bg-orange-500"></span></a>
          <a class="block border-b border-slate-200 px-4 py-3 text-sm text-slate-600" href="#">Projects</a>
          <a class="block px-4 py-3 text-sm text-slate-600" href="#">Team</a>
        </nav>
      `,
    },
    code: `<!-- Stacked navigation -->
<nav class="border border-slate-700 bg-white">
  <a class="flex items-center justify-between border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900" href="#">Dashboard<span class="h-2 w-2 bg-orange-500"></span></a>
  <a class="block border-b border-slate-200 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50" href="#">Projects</a>
  <a class="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50" href="#">Team</a>
</nav>`,
  },
  {
    slug: 'alert-banner',
    name: 'Alert Banner',
    category: 'Feedback',
    description: 'Bordered banner for success or warning states.',
    tags: ['alert', 'feedback'],
    preview: {
      desktop: `
        <div class="border border-slate-700 bg-white p-4">
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="text-sm font-semibold">Update available</p>
              <p class="mt-1 text-sm text-slate-600">Version 2.1.0 includes new API endpoints.</p>
            </div>
            <button class="border border-slate-700 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Review</button>
          </div>
        </div>
      `,
      mobile: `
        <div class="border border-slate-700 bg-white p-4">
          <p class="text-sm font-semibold">Update available</p>
          <p class="mt-1 text-sm text-slate-600">Version 2.1.0 includes new API endpoints.</p>
          <button class="mt-3 w-full border border-slate-700 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">Review</button>
        </div>
      `,
    },
    code: `<!-- Alert banner -->
<div class="border border-slate-700 bg-white p-4">
  <div class="flex items-start justify-between gap-3">
    <div>
      <p class="text-sm font-semibold">Update available</p>
      <p class="mt-1 text-sm text-slate-600">Version 2.1.0 includes new API endpoints.</p>
    </div>
    <button class="border border-slate-700 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Review</button>
  </div>
</div>`,
  },
  {
    slug: 'bordered-table',
    name: 'Bordered Table',
    category: 'Data Display',
    description: 'Clean table layout with divider rows.',
    tags: ['table', 'data'],
    preview: {
      desktop: `
        <div class="overflow-hidden border border-slate-700 bg-white">
          <table class="w-full text-left text-sm">
            <thead class="border-b border-slate-200 bg-slate-50">
              <tr>
                <th class="px-4 py-3 font-semibold text-slate-700">Project</th>
                <th class="px-4 py-3 font-semibold text-slate-700">Status</th>
                <th class="px-4 py-3 font-semibold text-slate-700">Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-slate-200">
                <td class="px-4 py-3">Javara UI</td>
                <td class="px-4 py-3 text-emerald-600">Active</td>
                <td class="px-4 py-3">Raka</td>
              </tr>
              <tr class="border-b border-slate-200">
                <td class="px-4 py-3">Border Kit</td>
                <td class="px-4 py-3 text-orange-600">Review</td>
                <td class="px-4 py-3">Sinta</td>
              </tr>
              <tr>
                <td class="px-4 py-3">V4 Docs</td>
                <td class="px-4 py-3 text-slate-600">Draft</td>
                <td class="px-4 py-3">Made</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      mobile: `
        <div class="border border-slate-700 bg-white">
          <div class="border-b border-slate-200 p-4">
            <p class="text-xs text-slate-500">Project</p>
            <p class="text-sm font-semibold">Javara UI</p>
            <p class="mt-1 text-xs text-emerald-600">Active · Raka</p>
          </div>
          <div class="border-b border-slate-200 p-4">
            <p class="text-xs text-slate-500">Project</p>
            <p class="text-sm font-semibold">Border Kit</p>
            <p class="mt-1 text-xs text-orange-600">Review · Sinta</p>
          </div>
          <div class="p-4">
            <p class="text-xs text-slate-500">Project</p>
            <p class="text-sm font-semibold">V4 Docs</p>
            <p class="mt-1 text-xs text-slate-600">Draft · Made</p>
          </div>
        </div>
      `,
    },
    code: `<!-- Bordered table -->
<div class="overflow-hidden border border-slate-700 bg-white">
  <table class="w-full text-left text-sm">
    <thead class="border-b border-slate-200 bg-slate-50">
      <tr>
        <th class="px-4 py-3 font-semibold text-slate-700">Project</th>
        <th class="px-4 py-3 font-semibold text-slate-700">Status</th>
        <th class="px-4 py-3 font-semibold text-slate-700">Owner</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-slate-200">
        <td class="px-4 py-3">Javara UI</td>
        <td class="px-4 py-3 text-emerald-600">Active</td>
        <td class="px-4 py-3">Raka</td>
      </tr>
      <tr class="border-b border-slate-200">
        <td class="px-4 py-3">Border Kit</td>
        <td class="px-4 py-3 text-orange-600">Review</td>
        <td class="px-4 py-3">Sinta</td>
      </tr>
      <tr>
        <td class="px-4 py-3">V4 Docs</td>
        <td class="px-4 py-3 text-slate-600">Draft</td>
        <td class="px-4 py-3">Made</td>
      </tr>
    </tbody>
  </table>
</div>`,
  },
  {
    slug: 'inline-form',
    name: 'Inline Form CTA',
    category: 'Forms',
    description: 'Horizontal sign-up form with border-first focus.',
    tags: ['form', 'newsletter'],
    preview: {
      desktop: `
        <form class="flex flex-wrap items-center gap-2 border border-slate-700 bg-white p-3">
          <input class="flex-1 border border-slate-700 px-3 py-2 text-sm" placeholder="Your email" />
          <button class="border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white">Join</button>
        </form>
      `,
      mobile: `
        <form class="space-y-2 border border-slate-700 bg-white p-3">
          <input class="w-full border border-slate-700 px-3 py-2 text-sm" placeholder="Your email" />
          <button class="w-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white">Join</button>
        </form>
      `,
    },
    code: `<!-- Inline form CTA -->
<form class="flex flex-wrap items-center gap-2 border border-slate-700 bg-white p-3">
  <input class="flex-1 border border-slate-700 px-3 py-2 text-sm" placeholder="Your email" />
  <button class="border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white">Join</button>
</form>`,
  },
  {
    slug: 'profile-card',
    name: 'Profile Card',
    category: 'Cards',
    description: 'Compact profile layout with border dividers.',
    tags: ['card', 'profile'],
    preview: {
      desktop: `
        <div class="border border-slate-700 bg-white p-4">
          <div class="flex items-center gap-3">
            <div class="h-12 w-12 bg-slate-200"></div>
            <div>
              <p class="text-sm font-semibold">Diana Putri</p>
              <p class="text-xs text-slate-500">Product Designer</p>
            </div>
          </div>
          <div class="mt-4 border-t border-slate-200 pt-4 flex gap-2">
            <button class="border border-slate-700 bg-white px-3 py-2 text-xs font-medium text-slate-700">Message</button>
            <button class="border border-slate-900 bg-slate-900 px-3 py-2 text-xs font-medium text-white">Follow</button>
          </div>
        </div>
      `,
      mobile: `
        <div class="border border-slate-700 bg-white p-4">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 bg-slate-200"></div>
            <div>
              <p class="text-sm font-semibold">Diana Putri</p>
              <p class="text-xs text-slate-500">Product Designer</p>
            </div>
          </div>
          <button class="mt-4 w-full border border-slate-900 bg-slate-900 px-3 py-2 text-xs font-medium text-white">Follow</button>
        </div>
      `,
    },
    code: `<!-- Profile card -->
<div class="border border-slate-700 bg-white p-4">
  <div class="flex items-center gap-3">
    <div class="h-12 w-12 bg-slate-200"></div>
    <div>
      <p class="text-sm font-semibold">Diana Putri</p>
      <p class="text-xs text-slate-500">Product Designer</p>
    </div>
  </div>
  <div class="mt-4 border-t border-slate-200 pt-4 flex gap-2">
    <button class="border border-slate-700 bg-white px-3 py-2 text-xs font-medium text-slate-700">Message</button>
    <button class="border border-slate-900 bg-slate-900 px-3 py-2 text-xs font-medium text-white">Follow</button>
  </div>
</div>`,
  },
  {
    slug: 'status-badges',
    name: 'Status Badge Row',
    category: 'Feedback',
    description: 'Inline status indicators with strong borders.',
    tags: ['badge', 'status'],
    preview: {
      desktop: `
        <div class="flex flex-wrap gap-2">
          <span class="border border-emerald-600 bg-white px-2 py-1 text-xs font-semibold text-emerald-700">Active</span>
          <span class="border border-orange-500 bg-white px-2 py-1 text-xs font-semibold text-orange-600">Pending</span>
          <span class="border border-slate-500 bg-white px-2 py-1 text-xs font-semibold text-slate-600">Paused</span>
        </div>
      `,
      mobile: `
        <div class="space-y-2">
          <span class="inline-flex border border-emerald-600 bg-white px-2 py-1 text-xs font-semibold text-emerald-700">Active</span>
          <span class="inline-flex border border-orange-500 bg-white px-2 py-1 text-xs font-semibold text-orange-600">Pending</span>
          <span class="inline-flex border border-slate-500 bg-white px-2 py-1 text-xs font-semibold text-slate-600">Paused</span>
        </div>
      `,
    },
    code: `<!-- Status badges -->
<div class="flex flex-wrap gap-2">
  <span class="border border-emerald-600 bg-white px-2 py-1 text-xs font-semibold text-emerald-700">Active</span>
  <span class="border border-orange-500 bg-white px-2 py-1 text-xs font-semibold text-orange-600">Pending</span>
  <span class="border border-slate-500 bg-white px-2 py-1 text-xs font-semibold text-slate-600">Paused</span>
</div>`,
  },
  {
    slug: 'tabs-minimal',
    name: 'Minimal Tabs',
    category: 'Navigation',
    description: 'Elegant tabs with subtle borders and active state.',
    tags: ['tabs', 'navigation'],
    preview: {
      desktop: `
        <div class="border border-slate-700 bg-white">
          <div class="flex border-b border-slate-200">
            <button class="border-r border-slate-200 bg-slate-900 px-4 py-3 text-sm font-medium text-white">Overview</button>
            <button class="border-r border-slate-200 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50">Usage</button>
            <button class="px-4 py-3 text-sm text-slate-600 hover:bg-slate-50">API</button>
          </div>
          <div class="p-4 text-sm text-slate-600">Tab content area.</div>
        </div>
      `,
      mobile: `
        <div class="border border-slate-700 bg-white">
          <div class="grid grid-cols-3 border-b border-slate-200 text-xs">
            <button class="border-r border-slate-200 bg-slate-900 px-2 py-3 text-white">Overview</button>
            <button class="border-r border-slate-200 px-2 py-3 text-slate-600">Usage</button>
            <button class="px-2 py-3 text-slate-600">API</button>
          </div>
          <div class="p-4 text-sm text-slate-600">Tab content area.</div>
        </div>
      `,
    },
    code: `<!-- Minimal tabs -->
<div class="border border-slate-700 bg-white">
  <div class="flex border-b border-slate-200">
    <button class="border-r border-slate-200 bg-slate-900 px-4 py-3 text-sm font-medium text-white">Overview</button>
    <button class="border-r border-slate-200 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50">Usage</button>
    <button class="px-4 py-3 text-sm text-slate-600 hover:bg-slate-50">API</button>
  </div>
  <div class="p-4 text-sm text-slate-600">Tab content area.</div>
</div>`,
  },
  {
    slug: 'loading-skeleton',
    name: 'Loading + Skeleton',
    category: 'Feedback',
    description: 'Spinner with a clean skeleton card layout.',
    tags: ['loading', 'skeleton'],
    preview: {
      desktop: `
        <div class="flex flex-wrap items-center gap-3">
          <div class="inline-flex items-center gap-2 border border-slate-700 bg-white px-4 py-2">
            <span class="h-4 w-4 animate-spin border-2 border-slate-700 border-t-orange-500"></span>
            <span class="text-sm text-slate-700">Loading...</span>
          </div>
          <div class="border border-slate-700 bg-white p-4">
            <div class="flex items-start gap-4">
              <div class="h-10 w-10 bg-slate-200 animate-pulse"></div>
              <div class="w-56 space-y-2">
                <div class="h-3 w-1/2 bg-slate-200 animate-pulse"></div>
                <div class="h-3 w-3/4 bg-slate-200 animate-pulse"></div>
                <div class="h-3 w-2/3 bg-slate-200 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      `,
      mobile: `
        <div class="space-y-3">
          <div class="inline-flex items-center gap-2 border border-slate-700 bg-white px-4 py-2">
            <span class="h-4 w-4 animate-spin border-2 border-slate-700 border-t-orange-500"></span>
            <span class="text-sm text-slate-700">Loading...</span>
          </div>
          <div class="border border-slate-700 bg-white p-4">
            <div class="flex items-start gap-4">
              <div class="h-10 w-10 bg-slate-200 animate-pulse"></div>
              <div class="w-full space-y-2">
                <div class="h-3 w-2/3 bg-slate-200 animate-pulse"></div>
                <div class="h-3 w-3/4 bg-slate-200 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    code: `<!-- Loading + skeleton -->
<div class="flex flex-wrap items-center gap-3">
  <div class="inline-flex items-center gap-2 border border-slate-700 bg-white px-4 py-2">
    <span class="h-4 w-4 animate-spin border-2 border-slate-700 border-t-orange-500"></span>
    <span class="text-sm text-slate-700">Loading...</span>
  </div>
  <div class="border border-slate-700 bg-white p-4">
    <div class="flex items-start gap-4">
      <div class="h-10 w-10 bg-slate-200 animate-pulse"></div>
      <div class="w-56 space-y-2">
        <div class="h-3 w-1/2 bg-slate-200 animate-pulse"></div>
        <div class="h-3 w-3/4 bg-slate-200 animate-pulse"></div>
        <div class="h-3 w-2/3 bg-slate-200 animate-pulse"></div>
      </div>
    </div>
  </div>
</div>`,
  },
]
