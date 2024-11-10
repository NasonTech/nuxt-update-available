import { defineNuxtModule, createResolver, addImportsDir, addPlugin } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
	requests: boolean
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'nuxt-update-available',
	},
	setup(_options, _nuxt) {
		const resolver = createResolver(import.meta.url)

		addImportsDir(resolver.resolve('runtime/app/composables'))

		addPlugin(resolver.resolve('./runtime/app/plugins/update-available'))

		_nuxt.options.build.transpile.push(resolver.resolve('runtime'))
	},
})
