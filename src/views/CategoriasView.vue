<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Marca</th><td><button type="button" class="btn btn-success">Cadastrar</button>

          </td>
        
      </tr>
    </thead>
     <tbody class="table-group-divider">
      
      <tr v-for="item in marcasList" :key="item.id">
        <th scope="row"><span v-if="item.ativo" class="badge text-bg-success">ATIVO</span>{{ item.id }} </th>
        <th scope="row"><span v-if="!item.ativo" class="badge rounded-pill text-bg-danger">INATIVO</span>{{ item.nomeMarca }} </th>
        
        
        <td><button type="button" class="btn btn-outline-danger">Editar</button>
        </td>
      </tr>
  

    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarcaClient  from '@/client/marca.clent';
import { Marca } from '@/model/marca';

export default defineComponent({
  name: 'MarcaLista',
  data() {
    return {
      marcasList: new Array<Marca>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {
    findAll() {
      MarcaClient.findAll()
      .then(sucess =>{
        this.marcasList = sucess
      })
      .catch(error => {
        console.log(error)
      });
   }
  }
});























</script>