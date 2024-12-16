<template>
  <v-card class="rounded-xl pa-4 custom-shadow">
    <h3>Cards</h3>
    <v-row>
      <v-col cols="12" sm="8" md="8" style="position: relative">
        <v-slide-group center-active show-arrows>
          <template v-slot:prev="{ next }">
            <v-btn
              icon
              variant="text"
              @click="next"
              style="position: absolute; left: -4px; top: 105px"
              ><v-icon color="primary">fas fa-chevron-left</v-icon></v-btn
            >
          </template>
          <template v-slot:next="{ props }">
            <v-btn
              icon
              variant="text"
              v-bind="props"
              style="position: absolute; right: -4px; top: 105px"
              ><v-icon color="primary">fas fa-chevron-right</v-icon></v-btn
            >
          </template>
          <v-slide-group-item v-for="(card, i) in cards" :key="i">
            <div
              class="mt-4 ml-0 d-flex flex-column custom-card"
              style="
                position: relative;
                overflow: hidden;
                color: white;
                background: #1976d2;
                padding: 20px;
                border-radius: 20px;
                width: 308px;
                height: 200px;
              "
            >
              <div
                style="position: absolute; z-index: 0; top: 60px; left: 125px"
              >
                <img
                  src="/cloud.png"
                  width="200px"
                  style="opacity: 0.3; color: lightblue"
                />
              </div>
              <div style="position: relative; z-index: 100">
                <div>
                  <h5 class="font-weight-500" style="font-size: 15px">
                    {{ card.title }}
                  </h5>
                  <p style="font-size: 8px; color: #f2f2f2">
                    {{ card.subtitle }}
                  </p>
                </div>
                <div>
                  <p class="mt-10" style="letter-spacing: 2px">
                    {{ card.number }}
                  </p>
                  <div class="mt-6 d-flex">
                    <div class="mr-10">
                      <p style="font-size: 12px"><small> Card holder</small></p>
                      <p style="font-size: 14px">{{ card.holder }}</p>
                    </div>
                    <div>
                      <p style="font-size: 12px"><small> Expire date</small></p>
                      <p style="font-size: 14px">{{ card.expires }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-slide-group-item>
        </v-slide-group>

        <div class="mt-5">
          <v-progress-linear
            height="9"
            rounded
            model-value="20"
            style="width: 310px; margin-left: 21px"
          ></v-progress-linear>
        </div>

        <div class="mx-5 mt-3 mb-5 d-flex justify-space-between">
          <small style="color: #d9d9d9">Weekly payment limit</small>
          <p style="font-weight: 700; opacity: 0.8; font-size: 15px">
            $350.60/$4000
          </p>
        </div>
      </v-col>
      <v-col md="1" class="divider-col">
        <v-divider vertical></v-divider>
      </v-col>
      <v-col md="3">
        <div class="mt-5 d-flex" style="flex-wrap: wrap">
          <span class="font-weight-bold" style="color: #1976d2; margin-top: 7px"
            >$</span
          >
          <p
            class="ml-1"
            style="
              color: #1976d2;
              display: inline-block;
              font-size: 23px;
              font-weight: 600;
              margin-bottom: 0px;
            "
          >
            2850.75
          </p>
          <small class="ml-2" style="color: #d9d9d9">Current balance</small>
        </div>
        <div class="mt-4 d-flex" style="flex-wrap: wrap">
          <span class="ml-6" style="color: green">$ 1500.50</span>
          <small style="color: #d9d9d9; margin-left: 55px">Income</small>
        </div>
        <div class="mt-4 d-flex" style="flex-wrap: wrap">
          <span class="ml-8" style="color: red">$ 350.60</span>
          <small style="color: #d9d9d9; margin-left: 45px">Outcome</small>
        </div>
        <div class="mt-5 ml-14"><v-switch hide-details></v-switch></div>
        <small class="ml-1" style="color: #d9d9d9">Deactivate card</small>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
const cards = [
  {
    title: "cloudcash",
    subtitle: "PREMIUM ACCOUNT",
    number: "5789  * * * *     * * * *  2847",
    holder: "Mike Smith",
    expires: "06/21",
  },
  {
    title: "cloudcash",
    subtitle: "STANDARD ACCOUNT",
    number: "1234 **** **** 5678",
    holder: "Anna Taylor",
    expires: "12/22",
  },
  {
    title: "cloudcash",
    subtitle: "BUSINESS ACCOUNT",
    number: "9876 **** **** 5432",
    holder: "John Doe",
    expires: "03/25",
  },
];
</script>

<style>
html,
body {
  font-family: "Nunito", sans-serif !important;
}
.v-card {
  border-radius: 16px;
  height: 100%;
  overflow: hidden;
}

.v-slide-group__prev,
.v-slide-group__next {
  min-width: 22px !important;
}

.v-progress-linear__determinate {
  border-radius: 10px;
  color: rgb(0, 110, 220) !important;
}

.divider-col {
  display: flex;
  height: 220px;
  margin-top: 18px;
}

.v-switch__track {
  height: 20px !important;
  background-color: #e6e6e6 !important;
}
.v-switch__thumb {
  background-color: #cccccc !important;
  box-shadow: none !important;
}

.custom-shadow {
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.1), 0px 6px 15px rgba(0, 0, 0, 0.1) !important;
  border-radius: 16px; /* Match the card's rounded corners */
}

.v-slide-group__next--disabled,
.v-slide-group__prev--disabled {
  opacity: 1 !important;
}
</style>
