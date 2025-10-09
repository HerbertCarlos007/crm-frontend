<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const openMenu = ref(null);

const toggleMenu = (menuName) => {
  openMenu.value = openMenu.value === menuName ? null : menuName;
};
</script>

<template>
  <div
    class="w-full h-20 bg-[#27374D] flex items-center justify-between shadow-md px-5"
  >
    <section class="flex items-center">
      <img src="../assets/logo.png" alt="logo" class="h-30 w-30 rounded-lg" />

      <ul class="flex text-white ml-10 gap-5">
        <!-- Negociações -->
        <li class="relative cursor-pointer" @click="toggleMenu('negociacoes')">
          Negociações
          <ul
            v-if="openMenu === 'negociacoes'"
            class="absolute left-0 top-full bg-[#27374D] mt-1 p-2 rounded shadow-lg"
          >
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Todas Negociações</li>
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Nova Negociação</li>
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Etapas</li>
          </ul>
        </li>

        <!-- Clientes -->
        <li class="relative cursor-pointer" @click="toggleMenu('clientes')">
          Clientes
          <ul
            v-if="openMenu === 'clientes'"
            class="absolute left-0 top-full bg-[#27374D] mt-1 p-2 rounded shadow-lg"
          >
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Lista de Clientes</li>
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Adicionar Cliente</li>
          </ul>
        </li>

        <!-- Tarefas -->
        <li class="relative cursor-pointer" @click="toggleMenu('tarefas')">
          Tarefas
          <ul
            v-if="openMenu === 'tarefas'"
            class="absolute left-0 top-full bg-[#27374D] mt-1 p-2 rounded shadow-lg"
          >
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Minhas Tarefas</li>
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Criar Tarefa</li>
          </ul>
        </li>

        <!-- Campanhas -->
        <li class="relative cursor-pointer" @click="toggleMenu('campanhas')">
          Campanhas
          <ul
            v-if="openMenu === 'campanhas'"
            class="absolute left-0 top-full bg-[#27374D] mt-1 p-2 rounded shadow-lg"
          >
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Campanhas Ativas</li>
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Nova Campanha</li>
          </ul>
        </li>

        <!-- Dashboard -->
        <li class="relative cursor-pointer" @click="toggleMenu('dashboard')">
          Dashboard
          <ul
            v-if="openMenu === 'dashboard'"
            class="absolute left-0 top-full bg-[#27374D] mt-1 p-2 rounded shadow-lg"
          >
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Visão Geral</li>
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Relatórios</li>
          </ul>
        </li>

        <!-- Empresas -->
        <li class="relative cursor-pointer" @click="toggleMenu('empresas')">
          Empresas
          <ul
            v-if="openMenu === 'empresas'"
            class="absolute left-0 top-full bg-[#27374D] mt-1 p-2 rounded shadow-lg"
          >
            <router-link to="/company">
              <li class="px-4 py-2 hover:bg-[#3b4a63]">Empresas</li>
            </router-link>
          </ul>
        </li>

        <!-- Configurações -->
        <li class="relative cursor-pointer" @click="toggleMenu('config')">
          Configurações
          <ul
            v-if="openMenu === 'config'"
            class="absolute left-0 top-full bg-[#27374D] mt-1 p-2 rounded shadow-lg"
          >
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Usuários</li>
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Permissões</li>
            <li class="px-4 py-2 hover:bg-[#3b4a63]">Sistema</li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <ul class="flex text-white gap-5">
        <li>Pesquisar</li>
        <li>Linguagem</li>
        <li>Tema</li>
        <li>Perfil</li>
      </ul>
    </section>
  </div>
</template>

<style scoped></style>
