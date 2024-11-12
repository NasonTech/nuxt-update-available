import { ref } from '#imports'

const updateAvailable = ref(false)

export const useUpdateAvailable = () => {
	return { updateAvailable }
}
