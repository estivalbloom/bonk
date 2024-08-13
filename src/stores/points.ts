import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePointsStore = defineStore('points', () => {
	const count = ref(0)
	function increment() {
		count.value++
	}

	return { count, increment }
})
