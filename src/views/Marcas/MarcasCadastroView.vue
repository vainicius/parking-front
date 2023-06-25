<template>
    <div class="row">
          <div class="col-md-12 text-start">
            <label class="form-label">Nome da Marca:</label>
            <input type="text" class="form-control" v-model="marca.nomeMarca">
          </div>
           <div class="col-md-3 offset-md-9">
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <router-link type="button" to="/marcas" class="btn btn-warning mb-1">Voltar</router-link>
      
      <button type="button" class="btn btn-success mb-1" @click="onClickCadastrar">Cadastrar</button>
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
import marcaClient from '@/client/marca.clent';
import { Marca } from '@/model/marca';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MarcaCadastro',
    data(){
        return {
            marca: new Marca(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                texto: "" as string,
                css: "" as string
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

        onClickCadastrar(){
            marcaClient.cadastrar(this.marca)
            .then(sucess => {
                this.marca = new Marca()
                
                this.mensagem.ativo = true;
                this.mensagem.titulo = "Funciona!";
                this.mensagem.texto = "A marca foi cadastrada com sucesso!";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            })
            .catch(error =>{
                this.mensagem.ativo = true;
                this.mensagem.titulo = "Algo deu errado!";
                this.mensagem.texto = error;
                this.mensagem.css = "alert alert-danger alert-dismissible fade show"

            });
        },
        findById(id: number){
            marcaClient.findById(id)
            .then(sucess =>{
                this.marca = sucess
            });
        }
    }
});

</script>