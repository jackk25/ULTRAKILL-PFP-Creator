<script>
import { useWingStore } from '@/stores/WingStore'
const wingStore = useWingStore()

export default {
  data() {
    return {
      wingColor: 'Red'
    }
  },
  methods: {
    setWing() {
      wingStore.colors[wingStore.active - 1].color = this.wingColor
    },

    prevWing() {
      if (wingStore.active > 1) {
        wingStore.active--
      }
    },

    nextWing() {
      if (wingStore.active < 8) {
        wingStore.active++
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <fieldset>
      <input type="radio" value="Red" id="red" v-model="wingColor" checked="checked" /><label
        for="red"
        >Red</label
      >
      <input type="radio" value="Orange" id="orange" v-model="wingColor" /><label for="orange"
        >Orange</label
      >
      <input type="radio" value="Yellow" id="yellow" v-model="wingColor" /><label for="yellow"
        >Yellow</label
      >
      <input type="radio" value="Green" id="green" v-model="wingColor" /><label for="green"
        >Green</label
      >
      <input type="radio" value="Blue" id="blue" v-model="wingColor" /><label for="blue"
        >Blue</label
      >
      <input type="radio" value="Cyan" id="cyan" v-model="wingColor" /><label for="cyan"
        >Cyan</label
      >
      <input type="radio" value="Purple" id="purple" v-model="wingColor" /><label for="purple"
        >Purple</label
      >
      <input type="radio" value="Pink" id="pink" v-model="wingColor" /><label for="pink"
        >Pink</label
      >
      <input type="radio" value="Black" id="black" v-model="wingColor" /><label for="Black"
        >Black</label
      >
      <input type="radio" value="Grey" id="grey" v-model="wingColor" /><label for="Grey"
        >Grey</label
      >
      <input type="radio" value="White" id="white" v-model="wingColor" /><label for="White"
        >White</label
      >
    </fieldset>
    <div class="grid" id="buttons">
      <button @click="prevWing">Previous Wing</button>
      <button @click="setWing">Update Color!</button>
      <button @click="nextWing">Next Wing</button>
    </div>
  </div>
</template>
