<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to VisiGoals"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
