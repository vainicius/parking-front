<template>
    <div class="row">
          <div class="col-md-12 text-start">
            <label class="form-label">Nome do Condutor:</label>
            <input type="text" class="form-control" v-model="condutor.nomeCondutor">
          </div>
          <div class="col-md-12 text-start">
            <label class="form-label">CPF do Condutor:</label>
            <input type="text" class="form-control" v-maska data-maska="###.###.###-##" placeholder="000.000.000-00" v-model="condutor.cpf">
          </div>
          <div class="col-md-12 text-start">
            <label class="form-label">Telefone do Condutor:</label>
            <input type="text" class="form-control" v-maska data-maska="(##) # ####-####" placeholder="(00) 0 0000-0000" v-model="condutor.telefone">
          </div>
           <div class="col-md-3 offset-md-9">
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <router-link type="button" to="/condutor" class="btn btn-warning mb-1">Voltar</router-link>
      
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
import { defineComponent } from 'vue';
import { Condutor } from '@/model/Condutor';
import condutorClient from '@/client/condutor.client';
import { vMaska } from 'maska';



export default defineComponent({
    name: 'CondutorCadastro',
    data(){
        return {
            condutor: new Condutor(),
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
            condutorClient.cadastrar(this.condutor)
            .then(sucess => {
                this.condutor = new Condutor()
                
                this.mensagem.ativo = true;
                this.mensagem.titulo = "Funciona!";
                this.mensagem.texto = "O condutor foi cadastrado com sucesso!";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            })
            .catch(error =>{
                this.mensagem.ativo = true;
                this.mensagem.titulo = "Algo deu errado!";
                this.mensagem.texto = error.data;
                this.mensagem.css = "alert alert-danger alert-dismissible fade show"

            });
        },
        findById(id: number){
            condutorClient.findById(id)
            .then(sucess =>{
                this.condutor = sucess
            });
        }
    }
});

</script>