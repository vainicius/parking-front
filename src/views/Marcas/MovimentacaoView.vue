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
              <th scope="col">Placa</th>
              <th scope="col">Condutor</th>
              <th scope="col">Entrada</th>
              <th scope="col">Saida</th>
        <td>
        <router-link type="button" to="/cadastrar-movimentacao" class="btn btn-success">Cadastrar</router-link>
        </td>
      </tr>
    </thead>
     <tbody class="table-group-divider">
      
      <tr v-for="item in movimentacaoList" :key="item.id">
        <th scope="row"><span v-if="item.ativo" class="badge text-bg-success">ATIVO</span>
          <span v-if="!item.ativo" class="badge rounded-pill text-bg-danger">INATIVO</span>
          {{ item.id }} </th>
          <th scope="row">{{ item.veiculo.placa}}</th>  
          <th scope="row">{{ item.condutor.nomeCondutor}} </th>
          <th scope="row">{{ item.entrada}}</th>
          <th scope="row">{{ item.saida}}</th>    
        
           
        <!--
        <td><router-link type="button" class="btn btn-warning" :to="{ name: 'editar-condutor', query: { id: item.id, form: 'editar' } }">
      Editar <i class="bi bi-pencil-square"></i></router-link>
        <router-link type="button" class="btn btn-danger" :to="{ name: 'deletar-condutor', query: {id: item.id, form: 'deletar'}}">
    Excluir <i class="bi bi-trash3"></i></router-link>
    
        </td>
        -->
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Movimentacao } from '@/model/movimentacao';
import {movimentacaoClient} from '@/client/movimentacao.client'

export default defineComponent({
  name: 'movimentacaoList',
  data() {
    return {
      movimentacaoList: new Array<Movimentacao>(),
      movimentacao: new Movimentacao(),
      MovimentacaoClient: new movimentacaoClient(),
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
      this.MovimentacaoClient.findAll()
      .then(sucess =>{
        this.movimentacaoList = sucess
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