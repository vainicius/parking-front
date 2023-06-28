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

    <!----------------------------------------------------------------------------------------------------------------------->
        <button type="button"  class="btn btn-danger"  v-if="condutor.ativo" @click="OnClickDesativar()">Desativar</button>
         <button type="button"  class="btn btn-success" v-if="!condutor.ativo" @click="OnClickAtivar()">Ativar</button>

    <!----------------------------------------------------------------------------------------------------------------------->
    <div class="col-md-3 offset-md-9">
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <router-link type="button" to="/veiculos" class="btn btn-warning mb-1"
          >Voltar</router-link
        >

        <button
          v-if="this.form === 'editar'"
          type="button"
          class="btn btn-warning"
          @click="onClickEditar()"
        >
          Editar
        </button>
      </div>
    </div>
  </div>
  <!------------------------------------------------------------------------------------------------->
  <div v-if="mensagem.ativo" :class="mensagem.css" role="alert">
    <h4 class="alert-heading">{{ mensagem.titulo }}</h4>
    <p>{{ mensagem.texto }}</p>
  </div>
</template>

<script lang="ts">
import { Veiculo } from "@/model/veiculo";
import veiculoClient from "@/client/veiculo.client";
import { defineComponent } from "vue";
import { Modelo } from "@/model/modelo";
import modeloClient from "@/client/modelo.client";

export default defineComponent({
  name: "VeiculoEdit",
  data() {
    return {
      veiculoList: new Array<Veiculo>(),
      veiculoModel: new Veiculo(),
      idModelo: 0 as Number,
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        css: "" as string,
        texto: "" as string,
      },
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    form() {
      return this.$route.query.form;
    },
  },
  mounted() {
    if (this.id !== undefined) {
      this.findById(Number(this.id));
    }
  },
  methods: {

    OnClickAtivar(){
                
        this.veiculoModel.ativo = true;
        veiculoClient.atualizar(this.veiculoModel.id,this.veiculoModel)
        .then((sucess) => {  
            this.veiculoModel = new Veiculo();
            this.mensagem.ativo = true;
          this.mensagem.titulo = "Funciona!";
          this.mensagem.texto = "O veículo foi ativado com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
            this.mensagem.ativo = true;
            this.mensagem.titulo = "Algo deu errado!";
            this.mensagem.texto = error;
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";

        });

    },
    findById(id: number) {
      veiculoClient.findById(id).then((sucess) => {
        this.veiculoModel = sucess;
      });
    },
    findModelo(){

      if(this.idModelo != 0){
        modeloClient.findById(Number(this.idModelo))
      .then((sucess) => {
        this.veiculoModel.modelo = sucess;
      });
      }
    },
    onClickEditar() {
      veiculoClient.atualizar(this.veiculoModel.id, this.veiculoModel)
        .then((sucess) => {
          this.veiculoModel= new Veiculo();
          this.mensagem.ativo = true;
          this.mensagem.texto = "O veiculo foi editado com sucesso!";
          this.mensagem.titulo = "Funciona!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.texto = error.data;
          this.mensagem.titulo = "Algo deu errado! ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
  },
});
</script>
