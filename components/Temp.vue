<template>
  <div>Temp</div>
</template>

<script>
export default {
  name: 'Temp',
  data() {
    return {
      something: 'else',
    }
  },
  created() {
    console.log('created, on the client:', process.client)
  },
  useAsyncData() {
    console.log('useAsyncData, on the server:', process.server)
  },
}
</script>
