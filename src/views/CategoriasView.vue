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
        <th scope="row"><span v-if="item.ativo" class="badge text-bg-success">ATIVO</span>
        {{ item.id }}</th>
        <th scope="row"><span v-if="!item.ativo" class="badge rounded-pill text-bg-danger">INATIVO</span>
          {{ item.id }}</th>
        <td>Peugeot</td>
        <td><button type="button" class="btn btn-outline-danger">Editar</button>

        </td>

      </tr>
      <tr>
        <th scope="row"><span class="badge text-bg-success">ATIVO</span> 2</th>
        <td>Volkswagem</td>
        
        <td><button type="button" class="btn btn-outline-danger">Editar</button>
        </td>
      </tr>
      <tr>
        <th scope="row"><span class="badge rounded-pill text-bg-danger">INATIVO</span>
          3</th>
        <td>Renault</td>
        <td><button type="button" class="btn btn-outline-danger">Editar</button>
        </td>
      </tr>
      <tr>
        <th scope="row"><span class="badge text-bg-success">ATIVO</span> 4</th>
        <td>Fiat</td>
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