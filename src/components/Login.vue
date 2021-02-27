<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="login">Connection</button>
    <p>
      You don't have an account? You can
      <router-link :to="{ name: 'Register' }">create</router-link>
      one.
    </p>
  </div>
</template>

<script>
import firebase from "../firebase";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert("You are now connected!");

            this.$router.push({ name: "BoardList" });
          },
          (err) => {
            alert("Opps! " + err);
          }
        );
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background: #eee;
  color: #444;
}

button {
  margin-top: 20px;
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 20px;
}

p {
  margin-top: 40px;
  font-size: 14px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (min-width: 900px) {
  input {
    width: 350px;
  }

  button {
    width: 200px;
  }
}
</style>