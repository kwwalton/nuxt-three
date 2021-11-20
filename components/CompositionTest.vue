<template>
  <div>
    <h1>CompositionTest</h1>
    <p>Counter: {{ count }}</p>
    <button @click="add">Add 1</button>
    <button @click="subtract">Subtract 1</button>
    <p>{{ someProp }}</p>
    <p v-if="anotherProp">{{ anotherProp }}</p>
    <p>Car engine: {{ car.engine }}</p>
    <p>Car tires: {{ car.tires }}</p>
    <button @click="addCarTire">Add car tire</button>
    <p>Route: {{ $route }}</p>
  </div>
</template>
<script>
import { h, ref, reactive } from 'vue'
export default {
  setup(props, context) {
    // Lifecycle
    onMounted(() => {
      console.log('count:', count.value)
      console.log(props, context)
    })

    // Counter stuff
    const count = ref(0)
    const add = () => count.value++
    const subtract = () => {
      if (count.value > 0) count.value--
    }

    // Car stuff
    const car = reactive({
      engine: 'v8',
      seats: 4,
      tires: 4,
    })
    const addCarTire = () => car.tires++

    return { count, add, subtract, car, addCarTire }
  },
  name: 'CompositionTest',
  props: { someProp: String, anotherProp: Number },
}
</script>
