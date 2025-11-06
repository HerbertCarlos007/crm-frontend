<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import customerService from "@/services/customerService.js";

const router = useRouter();

const userName = localStorage.getItem("name");
const companyId = localStorage.getItem("company_id");

const customers = ref([]);
const selectedCustomer = ref("");

const getAllCustomer = async () => {
  try {
    const response = await customerService.getCustomer(companyId);
    customers.value = response.data;
    console.log("Customer data:", customers.value);
  } catch (error) {
    console.error("Error fetching customer data:", error);
  }
};

onMounted(() => {
  getAllCustomer();
});
</script>

<template>
  <body class="bg-gray-50 min-h-screen p-8">
    <div class="max-full mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-gray-900">Negociação</h1>
          <div class="flex gap-3">
            <button
              class="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Incluir
            </button>
            <button
              class="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              @click="() => router.push('/')"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Cancelar
            </button>
          </div>
        </div>
      </div>

      <!-- Form -->
      <form class="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <!-- Row 1: Usuário, Senha, Confirme a senha -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Numero da Negociação:</label
            >
            <div class="relative">
              <input
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Data de Criação:</label
            >
            <div class="relative">
              <input
                type="date"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Cliente</label
            >
            <div class="relative">
              <select
                v-model="selectedCustomer"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
              >
                <option value="">Selecione um cliente</option>
                <option
                  v-for="customer in customers"
                  :key="customer.id"
                  :value="customer.id"
                >
                  {{ customer.name }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Row 2: Nome, E-mail, Ativo -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Nome Contato:</label
            >
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Prev de Fechamento:</label
            >
            <input
              type="date"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Etapa do Funil:</label
            >
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <!-- Row 3 Telefone-->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex items-center gap-4">
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="tipo"
                value="pf"
                class="text-blue-600 focus:ring-blue-500"
              />
              <span>Aberto</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="tipo"
                value="pf"
                class="text-blue-600 focus:ring-blue-500"
              />
              <span>Ganho</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="tipo"
                value="pj"
                class="text-blue-600 focus:ring-blue-500"
              />
              <span>Perdido</span>
            </label>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Status Finalizador:</label
            >
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Valor do Pedido:</label
            >
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Campanha:</label
            >
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Anotações do Pedido:</label
            >
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Responsável:</label
            >
            <input
              type="tel"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <!-- Proxima linha -->
      </form>
    </div>
  </body>
</template>

<style scoped></style>
