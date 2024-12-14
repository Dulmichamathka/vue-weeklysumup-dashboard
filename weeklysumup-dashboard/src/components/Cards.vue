<template>
  <v-card class="rounded-xl pa-4">
    <v-toolbar-title>Cards</v-toolbar-title>
    <v-row>
      <v-col cols="12" sm="8" style="position: relative">
        <v-slide-group center-active show-arrows>
          <template v-slot:prev="{ props }">
            <v-btn
              icon
              variant="text"
              v-bind="props"
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
              class="mt-4 ml-0 d-flex flex-column"
              style="
                position: relative;
                overflow: hidden;
                color: white;
                background: linear-gradient(to right, #1976d2, #64b5f6);
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
                  <h5
                    class="font-weight-500"
                    style="font-family: monospace; font-size: 15px"
                  >
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

.v-progress-linear__background {
}
</style>
