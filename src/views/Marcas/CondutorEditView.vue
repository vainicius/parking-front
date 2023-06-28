<template>
  <div class="row">
    <div class="col-md-12 text-start">
      <label class="form-label">Nome do Condutor</label>
      <input type="text" class="form-control" v-model="condutor.nomeCondutor" />
    </div>
    <div class="col-md-12 text-start">
      <label class="form-label">Telefone do Condutor</label>
      <input type="text" placeholder="(00)000000-0000" class="form-control" v-model="condutor.telefone" />
    </div>
    <div class="col-md-12 text-start">
      <label class="form-label">CPF do Condutor</label>
      <input type="text" placeholder="000.000.000-00" class="form-control" v-model="condutor.cpf" />
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
        <router-link type="button" to="/condutor" class="btn btn-warning mb-1"
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
import { Condutor } from "@/model/Condutor";
import condutorClient from "@/client/condutor.client";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MarcaCadastro",
  data() {
    return {
      condutorList: new Array<Condutor>(),
      condutor: new Condutor(),
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
        this.condutor.ativo = false;
        condutorClient.atualizar(this.condutor.id,this.condutor)
        .then((sucess) => {  
            
            this.condutor = new Condutor();
            this.mensagem.ativo = true;
          this.mensagem.titulo = "Funciona!";
          this.mensagem.texto = "O condutor foi desativado com sucesso!";
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
                
        this.condutor.ativo = true;
        condutorClient.atualizar(this.condutor.id,this.condutor)
        .then((sucess) => {  
            this.condutor = new Condutor();
            this.mensagem.ativo = true;
          this.mensagem.titulo = "Funciona!";
          this.mensagem.texto = "O condutor foi ativado com sucesso!";
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
      condutorClient.findById(id).then((sucess) => {
        this.condutor = sucess;
      });
    },
    onClickEditar() {
      condutorClient.atualizar(this.condutor.id, this.condutor)
        .then((sucess) => {
          this.condutor= new Condutor();
          this.mensagem.ativo = true;
          this.mensagem.texto = "O condutor foi editado com sucesso!";
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
