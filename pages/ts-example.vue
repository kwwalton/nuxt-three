<template>
  <div>
    <h1>{{ something }}</h1>
    <FetchTest />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
interface IBook {
  title: string
  author: string
  year: number
}
export default defineComponent({
  name: 'TsExample',

  data() {
    return {
      something: 'I am something',
      someBook: {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        year: 1954,
      } as IBook,
    }
  },
})
</script>
