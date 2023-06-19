<template>
 <table width="500">
         <thead>
             <tr>
                 <th scope="col">Marca</th>
                 <th scope="col">Veículo</th>
                 <th scope="col">Placa</th>
                 <th scope="col">Hora Entrada</th>
             </tr>
         </thead>
         <tbody>
           <tr>
               <td>Fiat</td>
               <td>Palio</td>
           </tr>
           <tr>
               <td>Volkswagem</td>
               <td>Nivus</td>
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
