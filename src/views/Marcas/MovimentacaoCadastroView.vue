<template>
  <div class="row">
    <div class="col-md-12 text-start">
      <label class="form-label">ID Veiculo:</label>
      <input
        type="text"
        class="form-control" v-on:change="findVeiculo()"
        v-model="idVeiculo"
        
      />
    </div>
     <div class="col-md-12 text-start">
      <label class="form-label">ID Condutor:</label>
      <input
        type="text"
        class="form-control" v-on:change="findCondutor()"
        v-model="idCondutor" 
      />
    </div>
     <div class="col-md-12 text-start">
      <label class="form-label">Data Entrada:</label>
      <input
        type="datetime-local"
        class="form-control"
        v-model="movimentacaoModel.entrada"  
      />
    </div>
    <div class="col-md-3 offset-md-9">
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <router-link type="button" to="/movimentacoes" class="btn btn-warning mb-1"
          >Voltar</router-link
        >

        <button
          type="button"
          class="btn btn-success mb-1"
          @click="onClickCadastrar"
        >
          Cadastrar
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
import { defineComponent } from "vue";
import { Condutor } from "@/model/Condutor";
import {condutorClient} from "@/client/condutor.client";
import { veiculoClient } from "@/client/veiculo.client";
import { Veiculo } from "@/model/veiculo";
import { movimentacaoClient } from "@/client/movimentacao.client";
import { Movimentacao } from "@/model/movimentacao";


export default defineComponent({
  name: "MovimentacaoCadasro",
  data() {
    return {
      idCondutor: 0 as Number,
      idVeiculo: 0 as Number,
      VeiculoClient: new veiculoClient(),
      VeiculoModel: new Veiculo(),
      CondutorClient: new condutorClient(),
      CondutorModel: new Condutor(),
      movimentacaoClient: new movimentacaoClient(),
      movimentacaoModel: new Movimentacao(),
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        texto: "" as string,
        css: "" as string,
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
    onClickCadastrar() {
      this.movimentacaoClient
        .cadastrar(this.movimentacaoModel)
        .then((sucess) => {
          this.movimentacaoModel = sucess;

          this.mensagem.ativo = true;
          this.mensagem.titulo = "Funciona!";
          this.mensagem.texto = "A movimentação foi cadastrada com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.titulo = "Algo deu errado!";
          this.mensagem.texto = error.data;
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    findById(id: number) {
      this.movimentacaoClient.findById(id).then((sucess) => {
        this.movimentacaoModel = sucess;
      });
    },
    findCondutor(){

      if(this.idCondutor != 0){
        this.CondutorClient.findById(Number(this.idCondutor))
      .then((sucess) => {
        this.movimentacaoModel.condutor = sucess;
      });
      }
    },
    findVeiculo(){

      if(this.idVeiculo != 0){
        this.VeiculoClient.findById(Number(this.idVeiculo))
      .then((sucess) => {
        this.movimentacaoModel.veiculo = sucess;
      });
      }
    }
  },
});
</script>
