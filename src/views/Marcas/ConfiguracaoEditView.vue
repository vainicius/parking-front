<template>
  <div class="row">
    <div class="col-md-12 text-start">
      <label class="form-label">Vagas para carro:</label>
      <input type="text" class="form-control" v-model="ConfiguracaoModel.vagasCarro" />
    </div>
    <div class="col-md-12 text-start">
      <label class="form-label">Vagas para moto:</label>
      <input type="text" class="form-control"  v-model="ConfiguracaoModel.vagasMoto" />
    </div>
    <div class="col-md-12 text-start">
      <label class="form-label">Vagas para Van:</label>
      <input type="text"  class="form-control" v-model="ConfiguracaoModel.vagasVan" />
    </div>
    <div class="col-md-12 text-start">
      <label class="form-label">Valor por hora:</label>
      <input type="text" class="form-control" v-model="ConfiguracaoModel.valorHora" />
    </div>
    <div class="col-md-12 text-start">
      <label class="form-label">Valor da multa:</label>
      <input type="text" class="form-control" v-model="ConfiguracaoModel.valorMinutoMulta" />
    </div>
    <div class="col-md-12 text-start">
      <label class="form-label">Horas para desconto:</label>
      <input type="text"  v-maska data-maska="##:##:##" placeholder="##:##:##" class="form-control" v-model="ConfiguracaoModel.tempoParaDesconto" />
    </div>

    <div class="col-md-12 text-start">
      <label class="form-label">Horas de desconto:</label>
      <input type="text" v-maska data-maska="##:##:##" placeholder="##:##:##" class="form-control" v-model="ConfiguracaoModel.tempoDeDesconto" />
    </div>
    <div class="col-md-12 text-start">
      <label class="form-label">Horário de abertura:</label>
      <input type="text" v-maska data-maska="##:##:##" placeholder="##:##:##" class="form-control" v-model="ConfiguracaoModel.InicioExpediente" />
    </div>
    <div class="col-md-12 text-start">
      <label class="form-label">Horário de encerramento:</label>
      <input type="text" v-maska data-maska="##:##:##" placeholder="##:##:##" class="form-control" v-model="ConfiguracaoModel.fimExpediente" />
    </div>
    
    <!----------------------------------------------------------------------------------------------------------------------->
    <!----------------------------------------------------------------------------------------------------------------------->
    <div class="col-md-3 offset-md-9">
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <router-link type="button" to="/configuracoes" class="btn btn-warning mb-1"
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
import { Configuracao } from "@/model/Configuracao";
import { configuracaoClient } from "@/client/configuracao.client";
import { vMaska } from "maska";

import { defineComponent } from "vue";

export default defineComponent({
  name: "AtualizarConfig",
  data() {
    return {
      ConfiguracaoModel: new Configuracao(),
      ConfiguracaoClient: new configuracaoClient(),
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
  methods: {

    onClickEditar() {
      this.ConfiguracaoClient.atualizar(this.ConfiguracaoModel)
        .then((sucess) => {
          this.mensagem.ativo = true;
          this.mensagem.texto = "A Configuração foi editada com sucesso!";
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
