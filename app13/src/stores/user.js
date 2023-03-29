import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const username = ref("")

  const firstName= ref("Gremmy")
  const lastName = ref("Lynn")
  const streetAddr = ref("Cutest Cat Corner")
  const city = ref("Kitty City")
  const state = ref("Washington")
  const zipCode = ref("999")

  return { username, firstName, lastName, streetAddr, city, state, zipCode }
})
