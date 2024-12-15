<template>
  <div class="mb-3 d-flex">
    <h3 class="mr-1">Goals</h3>
    <img src="/add.png" width="30px" height="30px" alt="add" />
  </div>

  <v-slide-group show-arrows>
    <template v-slot:next="{ next }">
      <v-btn icon variant="text" @click="next">
        <v-icon color="primary">fas fa-chevron-right</v-icon>
      </v-btn>
    </template>
    <v-slide-group-item v-for="(goal, index) in goals" :key="index">
      <v-card
        class="mb-4 mr-3 rounded-xl pa-5"
        style="
          box-shadow: -7px 0 10px rgba(0, 0, 0, 0.1),
            7px 0 10px rgba(0, 0, 0, 0.1);
          height: 175px;
          width: 150px;
          margin: 6px;
        "
      >
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
          "
        >
          <div>
            <p style="font-weight: 700; font-size: 20px; color: #616161">
              ${{ goal.amount }}
            </p>
            <small style="color: #d9d9d9">{{ goal.date }}</small>
          </div>
          <div class="text-left">
            <v-icon :color="goal.color">{{ goal.icon }}</v-icon>
            <p class="mt-1">{{ goal.title }}</p>
          </div>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>
<script setup>
const goals = [
  {
    amount: 550,
    date: "12/12/24",
    title: "Holidays",
    icon: "fas fa-chart-line",
    color: "#0091EA",
  },
  {
    amount: 650,
    date: "01/01/25",
    title: "Renovation",
    icon: "fas fa-brush",
    color: "#FB8C00",
  },
  {
    amount: 700,
    date: "15/02/25",
    title: "Xbox",
    icon: "fas fa-gamepad",
    color: "#4CAF50",
  },
  {
    amount: 500,
    date: "20/03/25",
    title: "Savings",
    icon: "fas fa-sack-dollar",
    color: "#DD2C00",
  },
];
</script>
<style scoped>
.v-slide-group__prev {
  display: none !important;
}
.v-slide-group {
  padding-left: 0 !important;
}

.v-slide-group_container {
  margin-left: 0 !important;
}
</style>
