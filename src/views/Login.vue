<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import loginService from "../services/loginService";

const router = useRouter();

const loginForm = reactive({
  email: "",
  password: "",
});

async function handleLogin(e) {
  e.preventDefault();
  try {
    const response = await loginService.login(loginForm);
    localStorage.setItem("token", response.data.access_token);
    router.push("/");
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
}

</script>

<template>
  <body
    class="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen flex items-center justify-center p-4"
  >
    <div class="w-full max-w-md">
      <!-- Card de Login -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <!-- Logo/Título -->
        <div class="text-center mb-8">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-slate-800">Bem-vindo</h1>
          <p class="text-slate-500 mt-2">
            Faça login para acessar suas negociações
          </p>
        </div>

        <!-- Formulário -->
        <form class="space-y-6" @submit.prevent="handleLogin">
          <!-- Campo Email -->
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-slate-700 mb-2"
            >
              E-mail
            </label>
            <input
              v-model="loginForm.email"
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="seu@email.com"
            />
          </div>

          <!-- Campo Senha -->
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-slate-700 mb-2"
            >
              Senha
            </label>
            <input
              v-model="loginForm.password"
              type="password"
              id="password"
              name="password"
              required
              class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <!-- Lembrar-me e Esqueci a senha -->
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input
                type="checkbox"
                class="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span class="ml-2 text-sm text-slate-600">Lembrar-me</span>
            </label>
            <a
              href="#"
              class="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Esqueceu a senha?
            </a>
          </div>

          <!-- Botão de Login -->
          <button
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/30"
          >
            Entrar
          </button>
        </form>

        <!-- Divisor -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-slate-200"></div>
          </div>
        </div>

        <!-- Cadastro -->
      </div>

      <!-- Footer -->
      <p class="text-center text-sm text-slate-500 mt-6">
        © 2025 Sistema de Negociações. Todos os direitos reservados.
      </p>
    </div>
  </body>
</template>

<style scoped></style>
