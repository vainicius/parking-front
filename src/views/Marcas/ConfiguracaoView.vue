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
        <th scope="col">Vagas carro</th>
        <th scope="col">Vagas moto</th>
        <th scope="col">Valor por Hora</th>
        <th scope="col">Valor da Multa</th>
        <th scope="col">Vagas van</th>
        <th scope="col">Horas para desconto</th>
        <th scope="col">Horas de desconto</th>
        <th scope="col">Horário abertura</th>
        <th scope="col">Horário encerramento</th>


       
          <td><router-link type="button" class="btn btn-warning" :to="{ name: 'editar-configuracao', query: { id: configuracao.id, form: 'editar' } }">
      Editar <i class="bi bi-pencil-square"></i></router-link>
        </td>
      </tr>
    </thead>
     <tbody class="table-group-divider">
      
      <tr>
        <th scope="row">{{ configuracao.vagasCarro}} </th>  
        <th scope="row">{{ configuracao.vagasMoto}} </th> 
        <th scope="row">{{ configuracao.valorHora}} </th> 
        <th scope="row">{{ configuracao.valorMinutoMulta}} </th> 
        <th scope="row">{{ configuracao.vagasVan}} </th> 
        <th scope="row">{{ configuracao.tempoParaDesconto}} </th> 
        <th scope="row">{{ configuracao.tempoDeDesconto}} </th> 
        <th scope="row">{{ configuracao.InicioExpediente}} </th> 
        <th scope="row">{{ configuracao.fimExpediente}} </th>        
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Configuracao } from '@/model/Configuracao';
import {configuracaoClient} from '@/client/configuracao.client'

export default defineComponent({
  name: 'configList',
  data() {
    return {
      configuracao: new Configuracao(),
      ConfiguracaoClient: new configuracaoClient(),
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        texto: "" as string,
        css: "" as string
      }
    }
  },
  mounted() {
    this.getConfig();
  },
  methods: {
    getConfig(){


this.ConfiguracaoClient.findById(1)
  .then(sucess => {
  this.configuracao = sucess
  console.log(sucess)
  }
  )
  .catch(error => {
  console.log(error);
});



},
 } 
});



</script>


<style>
@import url('../../../node_modules/bootstrap-icons/font/bootstrap-icons.css');



</style>