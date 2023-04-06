<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <FormularioTarefa @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <TarefaVue v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxTarefa v-if="listaEstaVazia">
          Você não estaa muito produtuvo hoje :(
        </BoxTarefa>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';
import TarefaVue from './components/TarefaVue.vue';
import ITarefa from './interfaces/ITarefa';
import BoxTarefa from './components/BoxTarefa.vue';

export default defineComponent({
    name: "App",
    components: {
    BarraLateral,
    FormularioTarefa,
    TarefaVue,
    BoxTarefa
},
    data (){
      return {
        tarefas: [] as ITarefa[]
      }
    },
    computed: {
      listaEstaVazia(): boolean {
        return this.tarefas.length === 9
      }
    },
    methods: {
      salvarTarefa(tarefa: ITarefa){
        this.tarefas.push(tarefa)
      }
    }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>
