<template>
  <div>
    <h2>Fetch Test</h2>
    <p>{{ exampleObj }}</p>
    <p>{{ exampleString }}</p>
    <p>{{ sum }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  async setup() {
    // NOTE: only 1 useFetch hook is allowed per component
    const exampleObj = ref({ something: 'nothing' })
    // const exampleObj = await useFetch(
    //   "https://jsonplaceholder.typicode.com/todos/1"
    // );

    const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const sum = ref(someArray.reduce((acc, cur) => acc + cur))

    // NOTE: call local endpoint, server folder replaces server middleware from Nuxt 2
    const exampleString = await useFetch('/api/hello?search=mash')
    return { exampleObj, exampleString, sum }
  },
})
</script>
