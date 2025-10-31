<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import customerService from "@/services/customerService";

const router = useRouter();

const userName = localStorage.getItem("name");
const companyId = localStorage.getItem("company_id");

const customerForm = reactive({
  customer_type: "",
  document_number: "",
  name: "",
  postal_code: "",
  address: "",
  number: "",
  district: "",
  address_complement: "",
  city: "",
  state: "",
  country: "",
  phone_number: "",
  email: "",
  company_id: companyId,
  created_by: userName,
});

async function createCustomer() {
  try {
    await customerService.createCustomer(customerForm);
    // router.push("/customers");
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
}

</script>

<template>
  <body class="bg-gray-50 min-h-screen p-8">
    <div class="max-full mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-gray-900">Cliente</h1>
          <div class="flex gap-3">
            <button
               @click="createCustomer" class="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
              @click="() => router.push('/customers')"
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
      <form  class="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <!-- Row 1: Usuário, Senha, Confirme a senha -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Tipo:</label
            >
            <div class="flex items-center gap-4">
              <label class="flex items-center gap-2">
                <input
                 v-model="customerForm.customer_type"
                  type="radio"
                  name="tipo"
                  value="pf"
                  class="text-blue-600 focus:ring-blue-500"
                />
                <span>Pessoa Física</span>
              </label>
              <label class="flex items-center gap-2">
                <input
                  v-model="customerForm.customer_type"
                  type="radio"
                  name="tipo"
                  value="pj"
                  class="text-blue-600 focus:ring-blue-500"
                />
                <span>Pessoa Jurídica</span>
              </label>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >CNPJ/CPF:</label
            >
            <div class="relative">
              <input
               v-model="customerForm.document_number"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Nome/Razão Social</label
            >
            <div class="relative">
              <input
                v-model="customerForm.name"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
              />
            </div>
          </div>
        </div>

        <!-- Row 2: Nome, E-mail, Ativo -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >CEP:</label
            >
            <input
             v-model="customerForm.postal_code"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Rua:</label
            >
            <input
              v-model="customerForm.address"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Numero:</label
            >
            <input
              v-model="customerForm.number"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <!-- Row 3 Telefone-->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Bairro:</label
            >
            <input
              v-model="customerForm.district"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Complemento:</label
            >
            <input
            v-model="customerForm.address_complement"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Cidade:</label
            >
            <input
            v-model="customerForm.city"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >UF:</label
            >
            <input
            v-model="customerForm.state"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >País:</label
            >
            <input
            v-model="customerForm.country"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Telefone:</label
            >
            <input
              type="tel"
              v-model="customerForm.phone_number"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >E-mail:</label
            >
            <input
             v-model="customerForm.email"
              type="email"
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
