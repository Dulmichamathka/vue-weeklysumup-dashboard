<template>
  <v-row>
    <v-col cols="12" sm="12" md="8">
      <v-card
        class="pt-4 pb-4 pl-3 pr-3 mt-1 rounded-xl"
        style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)"
      >
        <h3>New Transaction</h3>

        <div class="mt-3 d-flex ga-3">
          <div
            v-for="(avatar, i) in avatars"
            :key="i"
            class="justify-center flex-column d-flex"
          >
            <v-avatar size="40">
              <v-img :src="avatar.img"></v-img>
            </v-avatar>
            <small class="text-center">{{ avatar.name }}</small>
          </div>
          <div class="justify-center align-center d-flex flex-column">
            <img src="/add.png" width="30px" height="30px" alt="add" />
            <small class="mt-2">Add New</small>
          </div>
        </div>
        <div class="d-flex">
          <div class="p-8 pb-0">
            <input
              style="
                margin-top: 15px;
                width: 170px;
                height: 38px;
                border: 2px solid #039be5;
                border-radius: 5px;
              "
              type="text"
              v-model="data"
              placeholder="   0                                $"
            />
          </div>

          <v-btn
            class="mt-4 ml-1"
            flat
            color="#FFB300"
            style="text-transform: none; font-size: small; border-radius: 15px"
            >Sent the transfer
            <v-icon
              icon="fas fa-chevron-right"
              style="font-size: 12px; margin-left: 1px"
            ></v-icon
          ></v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="3">
      <v-card
        style="
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: end;
          padding: 5px;
        "
        width="150px"
        height="185px"
        color="#DE5E47"
        class="rounded-xl"
      >
        <div style="position: absolute; color: black; opacity: 0.08">
          <v-icon
            size="60"
            icon="fas fa-cloud"
            style="top: -90px; right: 12px"
          ></v-icon>
          <v-icon
            size="40"
            icon="fas fa-cloud"
            style="bottom: 100px; left: 10px"
          ></v-icon>
          <v-icon
            size="30"
            icon="fas fa-comment-dollar"
            style="bottom: 40px; right: 50px; rotate: -100deg"
          ></v-icon>
          <v-icon
            size="30"
            icon="fas fa-comment-dollar"
            style="bottom: 65px; left: 10px; rotate: -20deg"
          ></v-icon>
        </div>
        <div>
          <h4 style="color: white; margin-left: 12px">
            Get great<br />
            loan!
            <v-icon
              icon="fas fa-chevron-right"
              color="white"
              style="font-size: small"
            ></v-icon>
          </h4>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";

const data = ref("");
const avatars = [
  { img: "/profile.jpg", name: "Dulmi" },
  { img: "/boy1.jpg", name: "John" },
  { img: "/gir1.jpg", name: "Marico" },
  { img: "/girl2.jpg", name: "Mia" },
  { img: "/boy2.jpg", name: "Mike" },
];
</script>
