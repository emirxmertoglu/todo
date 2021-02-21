import firebase from 'firebase';

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
    apiKey: "AIzaSyDoZ-MAvHpRRqggjkVLo1El29WZ9JTQm_E",
    authDomain: "vue-todo-app-5992f.firebaseapp.com",
    projectId: "vue-todo-app-5992f",
    storageBucket: "vue-todo-app-5992f.appspot.com",
    messagingSenderId: "280520633631",
    appId: "1:280520633631:web:042bfffc2c78571d32542a"
};

firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

firebase.firestore().settings(settings);

export default firebase;
