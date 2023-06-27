<template>
  <div v-if="mensagem.ativo" :class="mensagem.css" role="alert">
    <h4 class="alert-heading">{{ mensagem.titulo }}</h4>
    <p>{{ mensagem.texto }}</p>
  </div>
  <div v-if="this.form === 'deleted'" :class="mensagem.css" role="alert">
    <h4 class="alert-heading">{{ mensagem.titulo }}</h4>
    <p>{{ mensagem.texto }}</p>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Modelo</th>
        <td>
          <router-link
            type="button"
            to="/cadastrar-modelo"
            class="btn btn-success"
            >Cadastrar</router-link
          >
        </td>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="item in modelosLista" :key="item.id">
        <th scope="row">
          <span v-if="item.ativo" class="badge text-bg-success">ATIVO</span>
          <span v-if="!item.ativo" class="badge rounded-pill text-bg-danger"
            >INATIVO</span
          >
          {{ item.id }}
        </th>
        <th scope="row">{{ item.nomeModelo }}</th>

        <td>
          <router-link
            type="button"
            class="btn btn-warning"
            :to="{
              name: 'editar-modelo',
              query: { id: item.id, form: 'editar' },
            }"
          >
            Editar <i class="bi bi-pencil-square"></i
          ></router-link>
          <router-link
            type="button"
            class="btn btn-danger"
            :to="{
              name: 'deletar-modelo',
              query: { id: item.id, form: 'deletar' },
            }"
          >
            Excluir <i class="bi bi-trash3"></i
          ></router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Modelo } from "@/model/modelo";
import modeloClient from "@/client/modelo.client";

export default defineComponent({
  name: "ModeloLista",
  data() {
    return {
      modelosLista: new Array<Modelo>(),
      modelo: new Modelo(),
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        texto: "" as string,
        css: "" as string,
      },
    };
  },
  mounted() {
    this.findAll();
  },
  methods: {
    findAll() {
      modeloClient
        .findAll()
        .then((sucess) => {
          this.modelosLista = sucess;
        })
        .catch((error) => {
          console.log(error);
          alert("deu erro");
        });
    },
    onClickExcluir() {
      modeloClient
        .delete(this.modelo.id)
        .then((sucess) => {
          this.modelo = new Modelo();
          this.mensagem.ativo = true;
          this.mensagem.texto = "Marca apagada com sucesso.";
          this.mensagem.titulo = "Funciona!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.texto = error;
          this.mensagem.titulo = "Algo deu errado! ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
  },
});
</script>

<style>
@import url("../../../node_modules/bootstrap-icons/font/bootstrap-icons.css");
</style>
