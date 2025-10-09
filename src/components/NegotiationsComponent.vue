<script setup>
import { ref } from "vue";

const negociacoes = ref([
  {
    numero: 1434,
    cliente: "FUNFER FUNDICAO DE FERRO LIMITADA",
    data: "03/10/2025",
    prevFechamento: "28/11/2025",
    valor: 9600.0,
    etapa: "Negociação",
    dias: 1,
    responsavel: "Marilian Souza",
  },
  {
    numero: 1433,
    cliente: "ASSIST24 ADVANCED SUPPORT LTDA",
    data: "01/10/2025",
    prevFechamento: "30/10/2025",
    valor: 225.0,
    etapa: "Negociação",
    dias: -1,
    responsavel: "Marilian Souza",
  },
  {
    numero: 1432,
    cliente: "ARCELORMITTAL BRASIL S.A.",
    data: "01/10/2025",
    prevFechamento: "31/10/2025",
    valor: 10740.0,
    etapa: "Negociação",
    dias: -1,
    responsavel: "Marilian Souza",
  },
  {
    numero: 1431,
    cliente: "YPÊ/QUIMICA AMPARO LTDA",
    data: "01/10/2025",
    prevFechamento: "31/10/2025",
    valor: 3250.0,
    etapa: "Negociação",
    dias: -1,
    responsavel: "Marilian Souza",
  },
  {
    numero: 1425,
    cliente: "BECK LIDER MAQUINAS",
    data: "29/09/2025",
    prevFechamento: "30/10/2025",
    valor: 1274.5,
    etapa: "Negociação",
    dias: -3,
    responsavel: "Marilian Souza",
  },
  {
    numero: 1424,
    cliente: "WECHSEL LTDA /",
    data: "25/09/2025",
    prevFechamento: "30/10/2025",
    valor: 1303.5,
    etapa: "Negociação",
    dias: -1,
    responsavel: "Marilian Souza",
  },
  {
    numero: 1423,
    cliente: "UNIVERSIDADE ESTADUAL DE CAMPINAS",
    data: "25/09/2025",
    prevFechamento: "30/10/2025",
    valor: 5961.84,
    etapa: "Negociação",
    dias: -1,
    responsavel: "Marilian Souza",
  },
  {
    numero: 1413,
    cliente: "RENOVENT EQUIPAMENTOS E INSTALACOES LTDA",
    data: "23/09/2025",
    prevFechamento: "26/11/2025",
    valor: 648.0,
    etapa: "Negociação",
    dias: -1,
    responsavel: "Marilian Souza",
  },
  {
    numero: 1410,
    cliente: "W. D. E. REFRIGERACAO COMERCIAL, MONTAGEM E INSTALACAO LTDA",
    data: "22/09/2025",
    prevFechamento: "31/10/2025",
    valor: 246.6,
    etapa: "Negociação",
    dias: -1,
    responsavel: "Marilian Souza",
  },
  {
    numero: 1408,
    cliente: "FUNFER FUNDICAO DE FERRO LIMITADA",
    data: "18/09/2025",
    prevFechamento: "25/11/2025",
    valor: 5400.0,
    etapa: "Negociação",
    dias: -1,
    responsavel: "Marilian Souza",
  },
]);

const formatarValor = (valor) => {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
</script>

<template>
  <h1 class="text-2xl font-bold text-[#27374D] mt-3 mb-3 pl-3">Negociações</h1>
  <div class="w-full overflow-x-auto bg-[#f4f6f9] p-5 rounded-lg shadow-md">
    <!--  Adicionando border na tabela para bordas laterais e superior -->
    <table class="w-full border-collapse rounded-lg border border-gray-300">
      <thead>
        <!--  Adicionando border-t para borda superior -->
        <tr class="bg-gray-100 border-b border-gray-300">
          <!--  Adicionando border-l na primeira coluna -->
          <th class="p-2 border-r border-l border-gray-300">
            <input type="checkbox" class="w-4 h-4" />
          </th>
          <th class="p-2 border-r border-gray-300"></th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Número Pedido
          </th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Cliente
          </th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Data
          </th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Prev. Fechamento
          </th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Valor
          </th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Etapa do Funil
          </th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Dias a Vencer/Vencidos
          </th>
          <!--  Adicionando border-r na última coluna -->
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Responsável
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in negociacoes"
          :key="item.numero"
          class="border-b border-gray-300 hover:bg-gray-50"
        >
          <!--  Adicionando border-l na primeira coluna de cada linha -->
          <td class="p-2 border-r border-l border-gray-300 text-center">
            <input type="checkbox" class="w-4 h-4" />
          </td>
          <td class="p-2 border-r border-gray-300 text-center">
            <button class="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                />
              </svg>
            </button>
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ item.numero }}
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ item.cliente }}
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ item.data }}
          </td>
          <td
            class="p-3 text-sm text-gray-700 border-r border-gray-300 bg-green-400 text-center font-medium"
          >
            {{ item.prevFechamento }}
          </td>
          <td
            class="p-3 text-sm text-gray-700 border-r border-gray-300 text-right"
          >
            {{ formatarValor(item.valor) }}
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ item.etapa }}
          </td>
          <td
            class="p-3 text-sm text-center border-r border-gray-300 font-medium"
            :class="item.dias >= 0 ? 'bg-green-400' : 'bg-red-400'"
          >
            {{ item.dias }}
          </td>
          <!--  Adicionando border-r na última coluna de cada linha -->
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ item.responsavel }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
