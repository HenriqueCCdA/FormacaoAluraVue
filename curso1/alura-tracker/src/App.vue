<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
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
        tarefas: [] as ITarefa[],
        modoEscuroAtivo: false,
      }
    },
    computed: {
      listaEstaVazia(): boolean {
        return this.tarefas.length === 0
      }
    },
    methods: {
      salvarTarefa(tarefa: ITarefa){
        this.tarefas.push(tarefa)
      },
      trocarTema(modoEscuroAtivo: boolean) {
        this.modoEscuroAtivo = modoEscuroAtivo
      }
    }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texo-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texo-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}

</style>
