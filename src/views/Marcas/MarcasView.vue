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
        <th scope="col">Marca</th>
        <td>
        <router-link type="button" to="/cadastrar-marca" class="btn btn-success">Cadastrar</router-link>
        </td>
      </tr>
    </thead>
     <tbody class="table-group-divider">
      
      <tr v-for="item in marcasList" :key="item.id">
        <th scope="row"><span v-if="item.ativo" class="badge text-bg-success">ATIVO</span>
          <span v-if="!item.ativo" class="badge rounded-pill text-bg-danger">INATIVO</span>
          {{ item.id }} </th>
        <th scope="row">{{ item.nomeMarca }} </th>
        
        
        <td><router-link type="button" class="btn btn-warning" :to="{ name: 'editar-marca', query: { id: item.id, form: 'editar' } }">
      Excluir <i class="bi bi-trash3"></i></router-link>
        <router-link type="button" class="btn btn-danger" :to="{ name: 'deletar-marca', query: {id: item.id, form: 'deletar'}}">
    Excluir <i class="bi bi-trash3"></i></router-link>
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
      marcasList: new Array<Marca>(),
      marca: new Marca(),
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
      MarcaClient.findAll()
      .then(sucess =>{
        this.marcasList = sucess
      })
      .catch(error => {
        console.log(error)
      });     
   },
   onClickExcluir() {
      MarcaClient.delete(this.marca.id)
        .then(sucess => {
          this.marca = new Marca()
          this.mensagem.ativo = true;
          this.mensagem.texto = "Marca apagada com sucesso.";
          this.mensagem.titulo = "Funciona!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.texto = error;
          this.mensagem.titulo = "Algo deu errado! ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    }
 } 
});



</script>


<style>
@import url('../../../node_modules/bootstrap-icons/font/bootstrap-icons.css');



</style>