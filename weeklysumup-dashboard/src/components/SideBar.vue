<template>
  <nav>
    <v-navigation-drawer app v-model="drawer">
      <v-container class="pa-10 d-flex align-center">
        <v-badge color="#ff9900">
          <!-- Main Icon -->

          <v-icon
            style="font-size: 32px; color: #4d4dff"
            icon="fas fa-cloud"
          ></v-icon>

          <!-- Badge Content: Custom Icon -->
          <template v-slot:badge>
            <v-icon
              style="font-size: 8px; color: black"
              icon="fas fa-bolt"
            ></v-icon>
          </template>
        </v-badge>

        <h4 class="ml-4" style="color: #003399; font-family: monospace">
          cloudcash
        </h4>
      </v-container>

      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <v-list nav dense class="pa-5">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            class="item-hover"
            :class="{ 'active-item': activedItem === item.name }"
            @click="setActive(item)"
          >
            <div class="list-content">
              <v-icon
                class="list-icon"
                :class="{
                  'text-primary': activedItem === item.name,
                  'text-grey': activedItem !== item.name,
                }"
              >
                {{ item.icon }}
              </v-icon>
              <span
                class="list-title"
                :class="{
                  'text-primary': activedItem === item.name,
                  'text-gray': activedItem !== item.name,
                }"
              >
                {{ item.name }}
              </span>
            </div>
          </v-list-item>
        </v-list>
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
          "
        >
          <img
            src="/public/logo.jpg"
            width="100px"
            height="100px"
            style="margin-left: 10px"
          />
          <small>Get your money</small>
          <small>awesome space in colud</small>
          <v-btn
            class="mt-1"
            flat
            color="#FFB300"
            style="text-transform: none; font-size: small; border-radius: 15px"
            >Upgrade to premium
            <v-icon
              icon="fas fa-arrow-up"
              style="font-size: 12px; margin-left: 1px"
            ></v-icon
          ></v-btn>
        </div>
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(true);
const activedItem = ref("Overview");

const setActive = (item) => {
  activedItem.value = item.name;
};

const items = [
  { icon: "fas fa-chart-line", name: "Overview" },
  { icon: "fas fa-dollar-sign", name: "Transaction" },
  { icon: "far fa-credit-card", name: "Cards " },
  { icon: "far fa-file-lines", name: "Invoices" },
  { icon: "fas fa-bullseye", name: "Goals" },
  { icon: "fas fa-gear", name: "Settings" },
];
</script>

<style>
.item-hover:hover {
  background-color: gainsboro;
}

.active-item {
  background-color: #e6e6ff !important;
}
.text-gray {
  color: gray;
}
.text-primary {
  color: #1976d2;
}

.list-content {
  display: flex;
  align-items: center; /* Ensure vertical alignment */
  gap: 15px; /* Add spacing between icon and text */
}

.list-title,
.list-icon {
  font-size: 15px !important;
}
</style>
