<template>
  <v-container data-testid="register-page-container">
    <h1>Register your new account</h1>
    <v-card width="75%">
      <v-divider>asd</v-divider>
      <v-form
        @submit.prevent="handleRegistration"
        ref="registerForm"
        v-model="valid"
        data-testid="register-form"
      >
        <v-container>
          <v-row>
            <v-text-field
              v-model="name"
              label="Name *"
              required
              data-testid="name"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              v-model="email"
              label="Email *"
              required
              data-testid="email"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              type="password"
              v-model="password"
              label="Password *"
              required
              data-testid="password"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              type="password"
              v-model="passwordCheck"
              label="Repeat password *"
              required
              data-testid="password-check"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              v-model="phone"
              label="Phone number"
              required
              data-testid="phone-number"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-checkbox
              label="I accept all terms and conditions *"
              v-model="terms"
              required
              data-testid="terms"
            ></v-checkbox>
          </v-row>
          <v-row data-testid="form-error">
            <p class="text-red" data-testid="form-error-message">
              {{ errorMessage }}
            </p>
            <v-divider></v-divider>
            <p class="text-red" data-testid="form-error-explanation">
              {{ errorExplanation }}
            </p>
          </v-row>
          <v-row>
            <v-btn
              type="submit"
              block
              class="bg-blue mt-2"
              :disabled="!terms || (password !== passwordCheck) || loading"
              data-testid="register-button"
              >Register</v-btn
            >
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import { registerUser } from "@/composables/register";
import { ResponseError } from "@/types/ResponseError";

const registerForm = ref();
const valid: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);
const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const passwordCheck: Ref<string> = ref("");
const phone: Ref<string> = ref("");

const terms: Ref<boolean> = ref(false);

const errorMessage: Ref<string> = ref("");
const errorExplanation: Ref<string> = ref("");

const router = useRouter();

async function handleRegistration() {

  loading.value = true;

  try {
    errorMessage.value = "";
    errorExplanation.value = "";
    const formValid = await registerForm.value.validate();
    const res = await registerUser(
      name.value,
      email.value,
      password.value,
      phone.value
    );

    await router.push("/register-success");
  } catch (error) {
    if (error instanceof ResponseError) {
      const errorResponse = await error.response.json();
      errorMessage.value = error.message;
      errorExplanation.value = errorResponse.message;
    } else if (error instanceof Error) {
      console.error("Error: \n" + error);
      errorMessage.value = error.message;
    }
  } finally {
    loading.value = false;
  }
}
</script>
