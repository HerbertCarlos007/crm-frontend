<script setup>
import { ref, onMounted } from "vue";
import negotiationService from "@/services/negotiationService";

const negotiations = ref([]);

onMounted(() => {
  getAllNegotiations();
});

const companyId = localStorage.getItem("company_id");

const getAllNegotiations = async () => {
  try {
    const response = await negotiationService.getAllNegotiations(companyId);
    negotiations.value = response.data;
    console.log("Negociações:", response.data);
  } catch (error) {
    console.error("Erro ao buscar negociações:", error);
  }
}

const formatValue = (value) => {
  return value.toLocaleString("pt-BR", {
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
          <!-- <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Dias a Vencer/Vencidos
          </th> -->
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
          v-for="negotiation in negotiations"
          :key="negotiation.id"
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
            {{ negotiation.id }}
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ negotiation.customer_id }}
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ negotiation.created_at }}
          </td>
          <td
            class="p-3 text-sm text-gray-700 border-r border-gray-300 bg-green-400 text-center font-medium"
          >
            {{ negotiation.estimated_closing_date }}
          </td>
          <td
            class="p-3 text-sm text-gray-700 border-r border-gray-300 text-right"
          >
            {{ formatValue(negotiation.value) }}
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ negotiation.stage_id }}
          </td>
          <!-- <td
            class="p-3 text-sm text-center border-r border-gray-300 font-medium"
            :class="item.dias >= 0 ? 'bg-green-400' : 'bg-red-400'"
          >
           
          </td> -->
          <!--  Adicionando border-r na última coluna de cada linha -->
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ negotiation.created_by }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
