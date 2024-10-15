<template>
    <div class="home">
      <h1>Welcome to IE Bank</h1>
      <button @click="goToAccounts">Go to Accounts</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToAccounts() {
        // Navigate to the Accounts page
        this.$router.push('/accounts');
      }
    }
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  </style>