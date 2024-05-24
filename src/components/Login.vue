<template>
  <v-container data-testid="login-container">
    <h1>Login</h1>
    <v-card width="75%">
      <v-divider></v-divider>
      <v-form @submit.prevent="handleLogin" ref="signInForm" v-model="valid" data-testid="login-form">
        <v-container>
          <v-row>
            <v-text-field
              prepend-inner-icon="mdi-email"
              v-model="email"
              label="Email"
              required
              :rules="[rules.emailRequired]"
              data-testid="email"
            ></v-text-field
          ></v-row>
          <v-row>
            <v-text-field
              prepend-inner-icon="mdi-key"
              v-model="password"
              label="Password"
              type="password"
              required
              :rules="[rules.passwordRequired, rules.passwordLength]"
              data-testid="password"
            ></v-text-field
          ></v-row>
          <v-row>
            <p class="text-red" data-testid="form-error-message">{{ errorMessage }}</p>
          </v-row>
          <v-row>
            <v-btn
              type="submit"
              block
              class="bg-blue mt-2"
              data-testid="login-button"
              :disabled="loading || email === '' || password === ''"
              >{{loading ? 'Logging in ... please be patient' : 'Login'}}</v-btn
            >
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/composables/auth'
import { ResponseError } from '@/types/ResponseError';

const loading: Ref<boolean> = ref(false);
const signInForm= ref();
const valid: Ref<boolean> = ref(false);
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const errorMessage: Ref<string> = ref("");
const errorExplanation: Ref<string> = ref("");

const router = useRouter();

const rules = {
  emailRequired: (value: any) => !!value || "It is required to enter an email address",
  passwordRequired: (value: any) => !!value || "Password is required.",
  email: (value: any) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail";
  },
  passwordLength: (value: any) => value.length >= 8 || "Password must be at least 8 characters.",
};

async function handleLogin() {

  loading.value = true;
  errorMessage.value = '';

  try {
    await login(email.value, password.value);
    await router.push('/login-success');
  } catch (error) {
    if (error instanceof ResponseError) {
      const errorResponse = await error.response.json();
      errorMessage.value = errorResponse.message;
      errorExplanation.value = errorResponse.message;
    } else if (error instanceof Error) {
      console.error(error.message);
      errorMessage.value = error.message;
    }
  } finally {
    loading.value = false;
  }

}

</script>
