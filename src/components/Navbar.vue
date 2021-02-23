<template>
  <div class="navbar-main">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="/">Trello Board</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item :to="{ name: 'Profile' }">Profile</b-dropdown-item>
            <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "../firebase";
export default {
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("You're currently signed out!");
          this.$router.push({ name: "Login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.navbar-main {
  width: 100%;
  margin-bottom: 20px;
}
</style>