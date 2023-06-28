<template>
    <div class="row">
          <div class="col-md-12 text-start">
            <label class="form-label">Nome do Modelo:</label>
            <input type="text" class="form-control" v-model="modelo.nomeModelo">
          </div>
           <div class="col-md-3 offset-md-9">
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <router-link type="button" to="/modelos" class="btn btn-warning mb-1">Voltar</router-link>
      
      <button v-if="this.form === 'deletar'" type="button" class="btn btn-danger" @click="onClickExcluir()">Excluir</button>
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
import MarcaClient from '@/client/marca.clent';
import { Marca } from '@/model/marca';
import { defineComponent } from 'vue';
import { Modelo } from '@/model/modelo';
import modeloClient from '@/client/modelo.client';



export default defineComponent({
    name: 'ModeloDesativar',
    data(){
        return {
            modelo: new Modelo(),
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
            modeloClient.findById(id)
            .then( sucess =>{
                    this.modelo = sucess});
        },
           onClickExcluir() {
            modeloClient.delete(Number(this.id))
                .then(sucess => {
                    console.log(this.id)
                    this.modelo = new Modelo()
                    this.mensagem.ativo = true;
                    this.mensagem.texto = "O modelo foi deletado/desativada com sucesso."
                    this.mensagem.titulo = "Funciona!";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show";
                    
                })
                .catch(error => {
                    console.log(this.id)
                    this.mensagem.ativo = true;
                    this.mensagem.texto = error.data;
                    this.mensagem.titulo = "Algo deu errado! ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        }
    }
});

</script>