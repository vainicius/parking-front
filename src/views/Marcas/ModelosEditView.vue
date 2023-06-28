<template>
  <div class="row">
    <div class="col-md-12 text-start">
      <label class="form-label">Nome do Modelo:</label>
      <input type="text" class="form-control" v-model="modelo.nomeModelo" />
    </div>
    <!----------------------------------------------------------------------------------------------------------------------->
        <button type="button"  class="btn btn-danger"  v-if="modelo.ativo" @click="OnClickDesativar()">Desativar</button>
         <button type="button"  class="btn btn-success" v-if="!modelo.ativo" @click="OnClickAtivar()">Ativar</button>

    <!----------------------------------------------------------------------------------------------------------------------->
    <div class="col-md-3 offset-md-9">
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <router-link type="button" to="/modelos" class="btn btn-warning mb-1"
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
import MarcaClient from "@/client/marca.clent";
import { Marca } from "@/model/marca";
import { Modelo } from "@/model/modelo";
import modeloClient, { ModeloClient } from "@/client/modelo.client";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModelosEdit",
  data() {
    return {
      marcasList: new Array<Marca>(),
      modelo: new Modelo(),
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
    OnClickDesativar(){
        this.modelo.ativo = false;
        modeloClient.atualizar(this.modelo.id, this.modelo)
        .then((sucess) => {  
            
            this.modelo = new Modelo();
            this.mensagem.ativo = true;
          this.mensagem.titulo = "Funciona!";
          this.mensagem.texto = "O modelo foi editado com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
            this.mensagem.ativo = true;
            this.mensagem.titulo = "Algo deu errado!";
            this.mensagem.texto = error;
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";

        });

    },
    OnClickAtivar(){
                
        this.modelo.ativo = true;
        modeloClient.atualizar(this.modelo.id,this.modelo)
        .then((sucess) => {  
            this.modelo = new Modelo();
            this.mensagem.ativo = true;
          this.mensagem.titulo = "Funciona!";
          this.mensagem.texto = "O modelo foi editado com sucesso!";
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
      modeloClient.findById(id).then((sucess) => {
        this.modelo = sucess;
      });
    },
    onClickEditar() {
      modeloClient.atualizar(this.modelo.id, this.modelo)
        .then((sucess) => {
          this.modelo = new Modelo();
          this.mensagem.ativo = true;
          this.mensagem.texto = "O modelo foi editado com sucesso!";
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
