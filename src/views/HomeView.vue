<template>
  
  <table class="table ">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Condutor</th>
        <th scope="col">Placa</th>
        <th scope="col">Horário entrada</th>
        <th scope="col">Horário saída</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr>
        <th scope="row"><span class="badge text-bg-success">EM ABERTO</span>
          1</th>
        <td>Vinicius</td>
        <td>ABC-0123</td>
        <td>20-06-23 12:06</td>
        <td><button type="button" class="btn btn-outline-danger">Editar</button>

        </td>

      </tr>
      <tr>
        <th scope="row"><span class="badge text-bg-success">EM ABERTO</span> 2</th>
        <td>Cliente 02</td>
        <td>Placa</td>
        <td>DD-MM-AA</td>
        <td><button type="button" class="btn btn-outline-danger">Editar</button>
        </td>
      </tr>
      <tr>
        <th scope="row"><span class="badge rounded-pill text-bg-danger">ENCERRADO</span>
          3</th>
        <td>Cliente 03</td>
        <td>Placa</td>
        <td>20-06-23 12:06</td>
        <td>20-06-23 17:06
        </td>
      </tr>
      <tr>
        <th scope="row"><span class="badge text-bg-success">EM ABERTO</span> 4</th>
        <td>Cliente 04</td>
        <td>Placa</td>
        <td>DD-MM-AA</td>
        <td><button type="button" class="btn btn-outline-danger">Editar</button>
        </td>
      </tr>

    </tbody>
  </table>
</template>

<script lang="ts">
import { VueElement, defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import HomeParking from '@/components/HomeParking.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,

  },
});

</script>
<style></style>
