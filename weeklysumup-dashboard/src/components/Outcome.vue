<template>
  <h3 class="mb-2">Outcome Statistics</h3>

  <div class="mt-4 d-flex">
    <v-btn
      flat
      style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)"
      tonal
      color="#FBE9E7"
      ><v-icon color="#EF6C00" icon="fas fa-cart-shopping"></v-icon
    ></v-btn>
    <div class="progress">
      <v-progress-linear
        height="9"
        rounded
        color="orange"
        model-value="52"
        style="width: 400px; margin-left: 21px; margin-top: 5px"
      ></v-progress-linear>
      <small style="color: #d9d9d9; margin-left: 20px">Shopping</small>
    </div>
    <div>
      <p
        style="
          font-weight: 600;
          font-size: 20px;
          color: #616161;
          margin-left: 20px;
        "
      >
        52%
      </p>
    </div>
  </div>

  <div class="mt-7 d-flex">
    <v-btn
      style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)"
      flat
      tonal
      color="#E8F5E9"
      ><v-icon color="green" icon="fas fa-truck"></v-icon
    ></v-btn>
    <div class="progress">
      <v-progress-linear
        height="9"
        rounded
        color="green"
        model-value="21"
        style="width: 400px; margin-left: 21px; margin-top: 5px"
      ></v-progress-linear>
      <small style="color: #d9d9d9; margin-left: 20px">Electronic</small>
    </div>
    <div>
      <p
        style="
          font-weight: 600;
          font-size: 20px;
          color: #616161;
          margin-left: 20px;
        "
      >
        21%
      </p>
    </div>
  </div>

  <div class="mt-7 d-flex">
    <v-btn
      flat
      style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)"
      tonal
      color="#E1F5FE"
      ><v-icon color="#039BE5" icon="fas fa-plane-up"></v-icon
    ></v-btn>
    <div class="progress">
      <v-progress-linear
        height="9"
        rounded
        color="#039BE5"
        model-value="74"
        style="width: 400px; margin-left: 21px; margin-top: 5px"
      ></v-progress-linear>
      <small style="color: #d9d9d9; margin-left: 20px">Travels</small>
    </div>
    <div>
      <p
        style="
          font-weight: 600;
          font-size: 20px;
          color: #616161;
          margin-left: 20px;
        "
      >
        74%
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.v-btn--size-default {
  min-width: 0px;
  padding: 0 13px;
}

.v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + 9px);
}

.v-progress-linear__determinate {
  background: rgb(228, 119, 10) !important;
}
</style>
