<template>
  <v-row class="justify-center mt-4 d-flex">
    <div class="d-flex flex-column">
      <div
        class="text-h3"
        style="font-family: sans-serif; font-weight: 500; color: #404040"
      >
        Weekly sumup
      </div>
      <div class="text-subtitle-1" style="color: #d9d9d9">
        Get summery of your weekly online transaction here.
      </div>
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex align-center">
      <v-icon
        class="mr-6"
        icon="fas fa-envelope"
        style="color: #e6e6e6; font-size: 22px"
      ></v-icon>
      <v-badge offset-x="2" color="error" dot class="mr-6">
        <v-icon
          icon="fas fa-bell"
          style="color: #e6e6e6; font-size: 22px"
        ></v-icon
      ></v-badge>

      <v-avatar size="34" class="mr-2">
        <v-img src="/profile.jpg"></v-img>
      </v-avatar>
      <div class="mt-n1">
        <p style="font-size: 13px; font-weight: 600">Dulmi Chamathka</p>
        <p style="font-size: 13px; color: #d9d9d9">Admin account</p>
      </div>
    </div>
  </v-row>
</template>
