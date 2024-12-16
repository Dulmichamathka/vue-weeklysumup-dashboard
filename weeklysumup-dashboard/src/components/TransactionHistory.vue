<template>
  <v-card class="rounded-xl pa-4 custom-shadow">
    <h3>Transaction history</h3>
    <v-table>
      <thead>
        <tr style="color: #cccccc">
          <th class="text-left">Reciever</th>
          <th class="text-left">Type</th>
          <th class="text-left">Date</th>
          <th class="text-right">Amout</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.reciever">
          <td>
            <v-chip style="opacity: 0.7; margin-right: 2px"
              ><v-icon size="14px">{{ item.icon }}</v-icon>
            </v-chip>
            {{ item.reciever }}
          </td>

          <td style="color: #d9d9d9">{{ item.type }}</td>
          <td style="color: #d9d9d9">{{ item.date }}</td>
          <td style="font-weight: 700" class="text-right">{{ item.amount }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
const items = [
  {
    icon: "fas fa-cart-shopping",
    reciever: "Tesco Market",
    type: "Shopping",
    date: "14 Dec 2024",
    amount: "$75.67",
  },
  {
    icon: "fas fa-truck",
    reciever: "ElectroMen Market",
    type: "Shopping",
    date: "14 Dec 2024",
    amount: "$175.67",
  },
  {
    icon: "fas fa-utensils",
    reciever: "Fiargio Resturant",
    type: "Food",
    date: "14 Dec 2024",
    amount: "$275.67",
  },
  {
    icon: "fas fa-user",
    reciever: "John mathew kayne",
    type: "Sport",
    date: "14 Dec 2024",
    amount: "$55.67",
  },
  {
    icon: "fas fa-user",
    reciever: "Ann Marlin",
    type: "Shopping",
    date: "14 Dec 2024",
    amount: "$475.67",
  },
];
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.1), 0px 6px 15px rgba(0, 0, 0, 0.1) !important;
  border-radius: 16px; /* Match the card's rounded corners */
}
</style>
