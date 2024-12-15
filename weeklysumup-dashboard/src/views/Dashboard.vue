<template>
  <v-container>
    <Header />
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-row>
          <v-col cols="12" sm="12" md="12"> <Cards /></v-col>
          <v-col cols="12" sm="12" md="12"><TransactionHistory /> </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="12" md="6">
        <v-col cols="12" sm="12" md="12"><Goals /></v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import Header from "../components/Header.vue";
import Cards from "../components/Cards.vue";
import TransactionHistory from "../components/TransactionHistory.vue";
import Goals from "../components/Goals.vue";
</script>
<style scoped></style>
