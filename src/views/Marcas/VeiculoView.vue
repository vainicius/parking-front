<template>
   <div v-if="mensagem.ativo" :class= "mensagem.css" role="alert">
        <h4 class="alert-heading">{{ mensagem.titulo }}</h4>
        <p>{{ mensagem.texto }}</p>
      </div>
      <div v-if="this.form === 'deleted'" :class= "mensagem.css" role="alert">
          <h4 class="alert-heading">{{ mensagem.titulo }}</h4>
          <p>{{ mensagem.texto }}</p>
        </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Veiculo</th>
        <th scope="col">Cor</th>
        <th scope="col">Ano do veículo</th>
        <td>
        <router-link type="button" to="/cadastrar-condutor" class="btn btn-success">Cadastrar</router-link>
        </td>
      </tr>
    </thead>
     <tbody class="table-group-divider">
      
      <tr v-for="item in veiculoList" :key="item.id">
        <th scope="row"><span v-if="item.ativo" class="badge text-bg-success">ATIVO</span>
          <span v-if="!item.ativo" class="badge rounded-pill text-bg-danger">INATIVO</span>
          {{ item.id }} </th>
        <th scope="row">{{ item.placa}} </th>  
        <th scope="row">{{ item.cor}} </th>      

        <td><router-link type="button" class="btn btn-warning" :to="{ name: 'editar-veiculo', query: { id: item.id, form: 'editar' } }">
      Editar <i class="bi bi-pencil-square"></i></router-link>
        <router-link type="button" class="btn btn-danger" :to="{ name: 'deletar-veiculo', query: {id: item.id, form: 'deletar'}}">
    Excluir <i class="bi bi-trash3"></i></router-link>
    
        </td>
        
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Veiculo } from '@/model/veiculo';
import veiculoClient from '@/client/veiculo.client';
export default defineComponent({
  name: 'veiculoList',
  data() {
    return {
      veiculoList: new Array<Veiculo>(),
      veiculo: new Veiculo(),
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        texto: "" as string,
        css: "" as string
      }
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {
    findAll() {
      veiculoClient.findAll()
      .then(sucess =>{
        this.veiculoList = sucess
      })
      .catch(error => {
        console.log(error)
      });     
   },
 } 
});



</script>


<style>
@import url('../../../node_modules/bootstrap-icons/font/bootstrap-icons.css');



</style>