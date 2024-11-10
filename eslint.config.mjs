// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
	features: {
		// Rules for module authors
		tooling: true,
		// Rules for formatting
		stylistic: true,
	},
	dirs: {
		src: ['./playground'],
	},
})
	.append([{
		rules: {
			'@stylistic/no-tabs': 'off',
			'@stylistic/indent': ['error', 'tab'],
			'vue/html-indent': ['error', 'tab'],
			'vue/singleline-html-element-content-newline': 'off',
			'nuxt/nuxt-config-keys-order': 'off',
		},
	}])
