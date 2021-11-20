<template>
  <div>
    <h1>URL path test</h1>
    <p>{{ exampleString }}</p>
    <p>{{ slug }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { friendlyPath } from '../utility/urlPath'

export default defineComponent({
  setup() {
    let exampleString = '/take me to this & that/something else here'
    let slug = friendlyPath(exampleString)
    return {
      exampleString,
      slug,
    }
  },
})
</script>
