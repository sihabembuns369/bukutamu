<template>
  <div class="home">
  <!-- <HelloWorld /> -->
  <BukuTamu />
  </div>
</template>

<script>
// @ is an alias to /src
import BukuTamu from '@/components/BukuTamu.vue'

export default {
  name: 'HomeView',
  components: {
    BukuTamu
  }
}
</script>
