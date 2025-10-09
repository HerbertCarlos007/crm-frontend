<script setup></script>

<template>
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
        <tr class="border-b border-gray-300 hover:bg-gray-50">
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
            1003
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            11.222.333/0001-55
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            Gamma Serviços S/A
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            (31) 90000-1111
          </td>
          <td class="p-3 text-sm text-gray-700 border-r border-gray-300">
            contato@gamma.com
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
