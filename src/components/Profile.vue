<template>
  <div class="main">
    <Navbar />
    <div class="buttons">
      <b-button variant="outline-primary" @click="toggleShowChangePassword"
        >Change Password</b-button
      >
      <b-button variant="outline-success" :to="{ name: 'BoardList' }"
        >Back Home</b-button
      >
    </div>
    <div class="change-password" v-if="showChangePassword">
      <b-form @submit.prevent="">
        <b-form-group id="input-group-1" label="Password:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="password"
            type="password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Re-Password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="repassword"
            type="password"
            placeholder="Re-Password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" @click="changePassword"
          >Submit</b-button
        >
        <b-button type="reset" variant="danger">Reset</b-button>
        <div class="password-alert" v-if="showAlert">
          <b-alert show variant="warning">Passwords are not same</b-alert>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
import Navbar from "./Navbar";

export default {
  components: { Navbar },
  data() {
    return {
      showChangePassword: false,
      password: "",
      repassword: "",
      showAlert: false,
    };
  },
  methods: {
    toggleShowChangePassword() {
      this.showChangePassword = !this.showChangePassword;
    },
    changePassword() {
      if (this.password == this.repassword) {
        var user = firebase.auth().currentUser;

        user
          .updatePassword(this.password)
          .then(() => {
            alert("Password is changed!");
            this.$router.push({ name: "BroadList" });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.showAlert = true;
        this.password = "";
        this.repassword = "";
      }
    },
  },
};
</script>

<style scoped>
.change-password {
  width: 400px;
  margin: 30px auto;
}
.change-password button {
  margin: 0 5px;
}
.buttons button {
  margin: 0 10px;
}

.password-alert {
  margin: 20px auto;
}
</style>