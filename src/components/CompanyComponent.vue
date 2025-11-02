<script setup>
import companyService from '@/services/companyService';
import { onMounted, ref } from 'vue';

const companies = ref([]);

onMounted(() => {
  getAllCompanies();
});

const getAllCompanies = async () => {
  try {
    const response = await companyService.getAllCompanies();
    companies.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar empresas:', error);
  }
};


</script>

<template>
  <h1
    class="text-2xl font-bold text-[#27374D] mt-3 mb-3 pl-3"
  >
    Empresas
  </h1>
  <div class="w-full overflow-x-auto bg-[#f4f6f9] p-5 rounded-lg shadow-md">
    <!-- Tabela com bordas -->
    <table class="w-full border-collapse rounded-lg border border-gray-300">
      <thead>
        <tr class="bg-gray-100 border-b border-gray-300">
          <th class="p-2 border-r border-l border-gray-300">
            <input type="checkbox" class="w-4 h-4" />
          </th>
          <th class="p-2 border-r border-gray-300"></th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Cód. Empresa
          </th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            CNPJ/CPF
          </th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Nome/Razão Social
          </th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            Telefone
          </th>
          <th
            class="p-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300"
          >
            E-mail
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in companies" :key="company.id" class="border-b border-gray-300 hover:bg-gray-50">
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
            {{ company.id }}
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{company.document_number}}
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ company.company_name }}
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ company.phone_number }}
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            {{ company.company_email }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
