<template>
  <div>
    <ul class="list-group">
      <!--key id permite indicar que tendre elementos unicos-->
      <!--por cada list item, se pasa su indice a la funcion aumentar-->
      <li v-for="(item, index) of arregloOrdenado" :key="item.id" @click="aumentar(index)"
                                        class="list-group-item d-flex justify-content-between align-items-center">
            {{ index }} - {{item.nombre}}
            <span class="badge bg-primary rounded-pill">
                {{item.cantidad}}
            </span>
      </li>            
    </ul>
    <button class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

//objeto js que va a tener un nombre
export default {
  name: "myLista",

  computed:{
    ...mapState(['frutas']),        
    arregloOrdenado(){

        //Se debe hacer una copia local y luego utilizar
        let frutas = this.frutas;

        return frutas.sort((a,b) => b.cantidad - a.cantidad)
    }
  },
  methods:{
    ...mapMutations(['aumentar', 'reiniciar'])
  }
};
</script>
