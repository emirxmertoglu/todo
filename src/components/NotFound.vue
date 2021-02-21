<template>
  <div class="not-found">
    <h1>
      <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
      The Page That You're Looking For Is Not Exist!
    </h1>
    <h3 class="back">
      Click <router-link to="/">here</router-link> to back main page!
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style>
.not-found {
  padding: 50px;
  color: crimson;
}

.back {
  color: #212121;
}
</style>