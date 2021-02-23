<template>
  <div class="main">
    <Navbar />
    <b-row>
      <b-col cols="12">
        <h2>
          Board List
          <b-link href="/add-board">(Add Board)</b-link>
        </h2>
        <b-table striped hover :items="boards" :fields="fields">
          <template v-slot:cell(actions)="data">
            <b-button @click.stop="details(data.item)" variant="primary"
              >Details</b-button
            >
          </template>
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import firebase from "../firebase";
import router from "../router/index";
import Navbar from "./Navbar";

export default {
  name: "BoardList",
  components: { Navbar },
  data() {
    return {
      fields: [
        { key: "title", label: "Title", sortable: true, class: "text-left" },
        { key: "actions", label: "Action", class: "text-center" },
      ],
      boards: [],
      errors: [],
      ref: firebase.firestore().collection("users"),
      currentUserUID: firebase.auth().currentUser.uid,
    };
  },
  created() {
    this.ref
      .doc(this.currentUserUID)
      .collection("boards")
      .onSnapshot((querySnapshot) => {
        this.boards = [];

        querySnapshot.forEach((doc) => {
          this.boards.push({
            key: doc.id,
            title: doc.data().title,
          });
        });
      });
  },
  methods: {
    details(board) {
      router.push({ name: "ShowBoard", params: { id: board.key } });
    },
  },
};
</script>

<style>
.table {
  width: 96%;
  margin: 0 auto;
}
</style>