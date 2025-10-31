<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <body class="bg-gray-50 min-h-screen p-8">
    <div class="max-full mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-gray-900">Usuário</h1>
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
               @click="() => router.push('/users')"
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
              >Usuário:</label
            >
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Senha:</label
            >
            <div class="relative">
              <input
                type="password"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Confirme a senha:</label
            >
            <div class="relative">
              <input
                type="password"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-10"
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Row 2: Nome, E-mail, Ativo -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Nome:</label
            >
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >E-mail:</label
            >
            <input
              type="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Ativo:</label
            >
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked />
              <div
                class="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"
              ></div>
            </label>
          </div>
        </div>

        <!-- Row 3 Telefone-->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Telefone:</label
            >
            <input
              type="tel"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Empresa:</label
            >
            <select
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
            >
              <option>Selecione ...</option>
              <option>Empresa A</option>
              <option>Empresa B</option>
              <option>Empresa C</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Equipe:</label
            >
            <select
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
            >
              <option>Selecione ...</option>
              <option>Equipe A</option>
              <option>Equipe B</option>
              <option>Equipe C</option>
            </select>
          </div>
        </div>

        <!-- Row 4: Empresa, Equipe -->
      </form>

      <!-- Permissions Section -->
      <div class="bg-white rounded-lg shadow-sm p-6 mt-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Permissões</h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Left: User/Team List -->
          <div>
            <h3 class="text-sm font-semibold text-gray-700 mb-3">
              Usuário | Equipe
            </h3>
            <div class="border border-gray-300 rounded-lg overflow-hidden">
              <div
                class="bg-gray-50 px-4 py-3 border-b border-gray-300 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
              >
                <span class="text-sm text-gray-700"
                  >Eder Rafael Domingues | Geral</span
                >
                <svg
                  class="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div
                class="bg-white px-4 py-3 border-b border-gray-300 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
              >
                <span class="text-sm text-gray-700">gabriel | Geral</span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div
                class="bg-white px-4 py-3 border-b border-gray-300 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
              >
                <span class="text-sm text-gray-700"
                  >Jhonatan Bicudo | Geral</span
                >
                <svg
                  class="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div
                class="bg-white px-4 py-3 border-b border-gray-300 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
              >
                <span class="text-sm text-gray-700"
                  >Ricardo Wilson Pinto | Geral</span
                >
                <svg
                  class="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div
                class="bg-white px-4 py-3 border-b border-gray-300 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
              >
                <span class="text-sm text-gray-700"
                  >Suporte | ERD Sistemas | Geral</span
                >
                <svg
                  class="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div
                class="bg-white px-4 py-3 border-b border-gray-300 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
              >
                <span class="text-sm text-gray-700">joao | Geral</span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div
                class="bg-white px-4 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
              >
                <span class="text-sm text-gray-700">herbert | Comercial</span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Right: Groups -->
          <div>
            <h3 class="text-sm font-semibold text-gray-700 mb-3">Grupos</h3>
            <div class="space-y-3">
              <label
                class="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <input
                  type="radio"
                  name="grupo"
                  class="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span class="ml-3 text-sm font-medium text-gray-700"
                  >Partner Admin</span
                >
              </label>
              <label
                class="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <input
                  type="radio"
                  name="grupo"
                  class="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span class="ml-3 text-sm font-medium text-gray-700"
                  >Administrador</span
                >
              </label>
              <label
                class="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <input
                  type="radio"
                  name="grupo"
                  class="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span class="ml-3 text-sm font-medium text-gray-700"
                  >Gestor</span
                >
              </label>
              <label
                class="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <input
                  type="radio"
                  name="grupo"
                  class="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span class="ml-3 text-sm font-medium text-gray-700"
                  >Colaborador</span
                >
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped></style>
