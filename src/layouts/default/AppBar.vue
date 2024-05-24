<template>
  <v-app-bar :elevation="2" class="bg-green">
    <!-- <v-app-bar-nav-icon/> -->
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-4" />
      TAD2024 - Reframing Test Automation
    </v-app-bar-title>
    <v-btn
      icon="mdi-home"
      to="/"
      title="Home"
      data-testid="btn-home" />
    <v-btn
      icon="mdi-login"
      to="/login"
      title="Sign in"
      data-testid="btn-sign-in" />
    <v-btn icon="mdi-magnify" title="Search" />
    <v-btn icon="mdi-dots-vertical" />
  </v-app-bar>
</template>

<script lang="ts" setup>
//
</script>
