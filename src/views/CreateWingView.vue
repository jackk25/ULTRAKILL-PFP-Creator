<script setup>
import WingSelector from '../components/WingSelector.vue'
import { useWingStore } from '@/stores/WingStore'
const wingStore = useWingStore()
</script>

<script>
export default {
  components: {
    WingSelector
  }
}
</script>

<template>
  <div class="container">
    <h2 id="wingNumber">Current Wing: {{ wingStore.active }}</h2>
    <li v-for="wing in wingStore.colors" :key="wing.id">
      <p :class="{ active: wing.active }">Wing {{ wing.id }}: {{ wing.color }}</p>
    </li>

    <WingSelector @color="setWing" />
  </div>
</template>

<style scoped>
li {
  list-style-type: none;
}

#wingNumber {
  color: white;
}

.active {
  background-color: black;
}
</style>
