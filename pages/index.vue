<template>
  <div>
    <h1>{{ greeting }}</h1>
    <p>{{ getSomething }}</p>
    <Temp />
    <CompositionTest someProp="I am some prop's value." :anotherProp="123" />
    <nuxt-link to="/ts-example">Go to ts example</nuxt-link>
    <UrlPathTest />
    <nuxt-link to="/ken/123">Go to ken/123</nuxt-link>
    <nuxt-link to="/ken/some-info-pizza">Go to ken/some-info-pizza</nuxt-link>
  </div>
</template>

<script lang="ts">
export default {
  layout: 'custom',
  data() {
    return {
      greeting: 'hello',
    }
  },
  computed: {
    getSomething(): string {
      // NOTE: specifying the return type got rid of the squiggly line below
      return this.greeting + ' there'
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm: any) => {
      vm.greeting = 'hola'
      console.log(to, from)
    })
  },
}
</script>
