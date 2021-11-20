<template>
  <div>
    <h3>Data Structure Test</h3>
    <h4>Direction: {{ direction }}</h4>
    <p>Direction with enum</p>
    <button @click="findInEnum('Up')">Up</button>
    <button @click="findInEnum('Down')">Down</button>
    <button @click="findInEnum('Left')">Left</button>
    <button @click="findInEnum('Right')">Right</button>
    <hr />
    <p>Direction with object</p>
    <button @click="findInObject('Up')">Up</button>
    <button @click="findInObject('Down')">Down</button>
    <button @click="findInObject('Left')">Left</button>
    <button @click="findInObject('Right')">Right</button>
    <hr />
    <p>
      Use an object instead of a string enum, so we can reverse it using
      Object.entries, iterate through it, flip flop the keys and values.
    </p>
    <button @click="findInReversedObject('UP')">UP</button>
    <button @click="findInReversedObject('DOWN')">DOWN</button>
    <button @click="findInReversedObject('LEFT')">LEFT</button>
    <button @click="findInReversedObject('RIGHT')">RIGHT</button>
  </div>
</template>

<script lang="ts">
import { DirectionEnum, DirectionObject } from '~/constants'

export default {
  name: 'DataStructureTest',
  data() {
    return {
      direction: null as DirectionEnum | unknown,
    }
  },
  methods: {
    findInEnum(key: string): void {
      this.direction = DirectionEnum[key as keyof typeof DirectionEnum]
    },
    findInObject(key: string): void {
      this.direction = DirectionObject[key as keyof typeof DirectionObject]
    },
    findInReversedObject(key: string): void {
      this.direction = this.reversedDirectionObject[key]
    },
  },
  computed: {
    reversedDirectionObject() {
      return Object.entries(DirectionObject).reduce((acc, [key, value]) => {
        acc[value] = key
        return acc
      }, {} as Record<string, string>)
    },
  },
}
</script>
