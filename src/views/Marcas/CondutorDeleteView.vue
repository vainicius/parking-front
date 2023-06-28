<template>
    <div class="row">
          <div class="col-md-12 text-start">
            <label class="form-label">Nome do Condutor:</label>
            <input type="text" class="form-control" v-model="condutor.nomeCondutor">
          </div>
           <div class="col-md-3 offset-md-9">
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <router-link type="button" to="/condutor" class="btn btn-warning mb-1">Voltar</router-link>
      
      <button v-if="this.form === 'deletar'" type="button" class="btn btn-danger" @click="onClickExcluir">Excluir</button>
            </div>   
        </div> 
    </div>
    <!------------------------------------------------------------------------------------------------->
      <div v-if="mensagem.ativo" :class= "mensagem.css" role="alert">
      <h4 class="alert-heading">{{mensagem.titulo}}</h4>
      <p>{{ mensagem.texto }}</p>
    </div>
   
    
</template>

<script lang="ts">
import condutorClient from '@/client/condutor.client';
import { Condutor } from '@/model/Condutor';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CondutorDelete',
    data(){
        return {
            condutor: new Condutor(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                css: "" as string,
                texto: "" as string
            }
        }
    },
    computed: {
        id () {
            return this.$route.query.id
        },
        form () {
            return this.$route.query.form
        }
    },
    mounted(){
        
        if(this.id !== undefined){
            this.findById(Number(this.id));
        }
    },
    methods:{
        findById(id: number){
            condutorClient.findById(id)
            .then( sucess =>{
                    this.condutor = sucess});
        },
           onClickExcluir() {
            condutorClient.delete(this.condutor.id)
                .then(sucess => {
                    this.condutor = new Condutor()
                    this.mensagem.ativo = true;
                    this.mensagem.texto = "O Condutor deletado/desativado com sucesso."
                    this.mensagem.titulo = "Funciona!";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show";
                    
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.texto = error.data;
                    this.mensagem.titulo = "Algo deu errado! ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        }
    }
});

</script>