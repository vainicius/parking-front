<template>
    <div class="row">
          <div class="col-md-12 text-start">
            <label class="form-label">Placa:</label>
            <input type="text" class="form-control" v-model="veiculoModel.placa">
          </div>
          <div class="col-md-12 text-start">
            <label class="form-label">Cor:</label>
            <input type="text" class="form-control" v-model="veiculoModel.cor">
          </div>
          <div class="col-md-12 text-start">
            <label class="form-label">Tipo:</label>
            <input type="text" class="form-control" v-model="veiculoModel.tipo">
          </div>
             <div class="col-md-12 text-start">
      <label class="form-label">Id do Modelo:</label>
      <input v-on:change="findModelo()" type="text" class="form-control" v-model="idModelo" />
    </div>


          
           <div class="col-md-3 offset-md-9">
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <router-link type="button" to="/veiculo" class="btn btn-warning mb-1">Voltar</router-link>
      
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
import { Veiculo } from '@/model/veiculo';
import veiculoClient from '@/client/veiculo.client';
import { vMaska } from "maska";
import { Modelo } from '@/model/modelo';
import modeloClient from '@/client/modelo.client';



export default defineComponent({
    name: 'CondutorCadastro',
    data(){
        return {
            veiculoModel: new Veiculo(),
            modeloList: new Array<Modelo>(),
            idModelo: 0 as Number,
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
            veiculoClient.cadastrar(this.veiculoModel)
            .then(sucess => {   
                
                this.veiculoModel = sucess;
                
                this.mensagem.ativo = true;
                this.mensagem.titulo = "Funciona!";
                this.mensagem.texto = "O veiculo foi cadastrado com sucesso!";
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
            veiculoClient.findById(id)
            .then(sucess =>{
                this.veiculoModel = sucess
            });
        },
           findAll() {
      modeloClient
        .findAll()
        .then((sucess) => {
          this.modeloList = sucess;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    findModelo(){

      if(this.idModelo != 0){
        modeloClient.findById(Number(this.idModelo))
      .then((sucess) => {
        this.veiculoModel.modelo = sucess;
      });
      }
    }
    }
});

</script>