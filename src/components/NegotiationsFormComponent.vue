<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import customerService from "@/services/customerService.js";
import negotiationService from "@/services/negotiationService.js";

const router = useRouter();

const userName = localStorage.getItem("name");
const companyId = localStorage.getItem("company_id");

const customers = ref([]);
const selectedCustomer = ref("");

const negotiationForm = reactive({
  customer_id: selectedCustomer,
  stage_id: "",
  company_id: companyId,
  closing_reason: "",
  value: "",
  status: "",
  observations: "",
  order_number: 1001,
  estimated_closing_date: "",
  created_by: userName,
});

const getAllCustomer = async () => {
  try {
    const response = await customerService.getCustomer(companyId);
    customers.value = response.data;
  } catch (error) {
    console.error("Error fetching customer data:", error);
  }
};

const createNegotiation = async () => {
  try {
    await negotiationService.createNegotiation(negotiationForm);

    if (respose.status === 201) {
      router.push("/");
    }
  } catch (error) {
    console.error("Erro ao criar negociação:", error);
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
              @click="createNegotiation"
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
              v-model="negotiationForm.estimated_closing_date"
              type="date"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Etapa do Funil:</label
            >
            <select
              v-model="negotiationForm.stage_id"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
            >
              <option value="">Selecione uma etapa</option>
              <option value="1">Contato Inicial</option>
              <option value="2">Pós Venda</option>
            </select>
          </div>
        </div>

        <!-- Row 3 Telefone-->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex items-center gap-4">
            <label class="flex items-center gap-2">
              <input
                v-model="negotiationForm.status"
                type="radio"
                value="Aberto"
                class="text-blue-600 focus:ring-blue-500"
              />
              <span>Aberto</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                v-model="negotiationForm.status"
                type="radio"
                value="Ganho"
                class="text-blue-600 focus:ring-blue-500"
              />
              <span>Ganho</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                v-model="negotiationForm.status"
                type="radio"
                value="Perdido"
                class="text-blue-600 focus:ring-blue-500"
              />
              <span>Perdido</span>
            </label>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Status Finalizador:</label
            >
            <select
              v-model="negotiationForm.closing_reason"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
            >
              <option value="">Selecione um status finalizador</option>
              <option value="1">Cliente Desistiu</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Valor do Pedido:</label
            >
            <input
              v-model="negotiationForm.value"
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
              v-model="negotiationForm.observations"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Responsável:</label
            >
            <select
              v-model="negotiationForm.created_by"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
            >
              <option value="">Selecione um responsável</option>
            </select>
          </div>
        </div>

        <!-- Proxima linha -->
      </form>
    </div>
  </body>
</template>

<style scoped></style>
