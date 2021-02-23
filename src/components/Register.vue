<template>
  <div class="register">
    <h3>Sign Up</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signUp">Sign Up</button>
    <p>
      Back to
      <router-link :to="{ name: 'Login' }">login</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "../firebase";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (userCredential) => {
            alert("Your acoount has been created!");

            firebase
              .firestore()
              .collection("users")
              .doc(userCredential.user.uid)
              .set({
                email: userCredential.user.email,
                createdTime: Date.now(),
              });

            this.$router.push({ name: "BoardList" });
          },
          (err) => {
            alert("Opps! ") + err;
          }
        );
    },
  },
};
</script>

<style scoped>
.register {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin: 10px 0;
  width: 25%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background: #eee;
  color: #444;
}

button {
  margin-top: 20px;
  width: 15%;
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
</style>