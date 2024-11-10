import { useUpdateAvailable } from '../composables/useUpdateAvailable'
import { defineNuxtPlugin } from '#imports'

const { updateAvailable } = useUpdateAvailable()

export default defineNuxtPlugin(async (nuxtApp) => {
	nuxtApp.hook('app:manifest:update', async () => {
		updateAvailable.value = true
	})
})
