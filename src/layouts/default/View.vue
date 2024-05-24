<template>
  <v-main>
    <v-toolbar data-testid="tas-menu">
      <v-btn to="/" data-testid="btn-home">Home</v-btn>
      <v-btn to="/register" data-testid="btn-register">Register</v-btn>
      <v-btn to="/login" data-testid="btn-login">Login</v-btn>
      <v-btn data-testid="btn-contact-us">Contact us</v-btn>
    </v-toolbar>
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>
