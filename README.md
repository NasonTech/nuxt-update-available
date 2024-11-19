# Update Available

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

React to app updates.

-   [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/@nasontech/nuxt-update-available?file=playground%2Fapp.vue) -->

## Minimum Requirements

This module will work with >= [Nuxt v3.7.4](https://github.com/nuxt/nuxt/releases/tag/v3.7.4) with a fixed update interval of 1 hour (Introduced via [Nuxt PR #21641](https://github.com/nuxt/nuxt/releases/tag/v3.7.4)).

[Nuxt v3.12.0](https://github.com/nuxt/nuxt/releases/tag/v3.12.0) introduced an experimental configuration option `checkOutdatedBuildInterval` (Introduced via [Nuxt PR #27324](https://github.com/nuxt/nuxt/pull/27324))

## Features

Respond to new versions of your application.

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @nasontech/nuxt-update-available
```

That's it! You can now use `useUpdateAvailable()` in your Nuxt app ✨


Set the `checkOutdatedBuildInterval` setting in your nuxt config. See [Nuxt Docs](https://nuxt.com/docs/api/nuxt-config#checkoutdatedbuildinterval) for more information.

```javascript
    experimental: {
        checkOutdatedBuildInterval: 1000 * 5, // 5 seconds
    }
```

```vue
<script setup lang="ts">
const { updateAvailable } = useUpdateAvailable()
</script>

<template>
    <div>
        <NuxtRouteAnnouncer />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>

        <ClientOnly>
            <UpdateDialog :open="updateAvailable" />
        </ClientOnly>
    </div>
</template>
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@nasontech/nuxt-update-available/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@nasontech/nuxt-update-available
[npm-downloads-src]: https://img.shields.io/npm/dm/@nasontech/nuxt-update-available.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@nasontech/nuxt-update-available
[license-src]: https://img.shields.io/npm/l/@nasontech/nuxt-update-available.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@nasontech/nuxt-update-available
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
