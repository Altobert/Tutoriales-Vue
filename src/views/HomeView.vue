<template>
  <div class="home">        
    <Cabecera></Cabecera>
    <Lista></Lista>
  </div>
</template>

<script>
// @ is an alias to /src
import Cabecera   from '@/components/Cabecera.vue'
import Lista      from '@/components/Lista.vue'

export default {
  name: 'HomeView',
  components: {    
    Cabecera,
    Lista
  }
}
</script>
