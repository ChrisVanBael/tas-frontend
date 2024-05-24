<template>
  <v-container data-testid="home-page-container">
    <h1>Home</h1>
    <v-card>
      <v-divider :thickness="3"></v-divider>
      <v-card-title>Welcome to Lorum Ipsum</v-card-title>
      <v-divider :thickness="10"></v-divider>
      <v-card-text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien sit amet libero euismod ornare. Pellentesque elementum, turpis non imperdiet sagittis, arcu magna aliquet tellus, non mollis nisl nisl a risus. Nunc fermentum, nisi et facilisis condimentum, ex purus dignissim metus, in rutrum urna dui porttitor diam. Vivamus non risus quis augue aliquet consequat nec sit amet erat. Nulla cursus hendrerit diam non faucibus. Donec sed est quis turpis tristique tincidunt. Nullam et lectus felis. Vivamus viverra nulla vel blandit rutrum. Ut eget felis pulvinar nunc cursus sagittis in id tellus. Mauris suscipit mi dui, et congue nisi viverra ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam maximus posuere consectetur.</p>
        <br/>
        <v-divider :thickness="10"></v-divider>
        <v-card-actions>
          <v-btn :to="{ name: 'Register' }" data-testid="btn-register">Register</v-btn>
          <v-btn :to="{ name: 'Login' }" data-testid="btn-login">Login</v-btn>
        </v-card-actions>
        <v-divider :thickness="10"></v-divider>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
  //
</script>
