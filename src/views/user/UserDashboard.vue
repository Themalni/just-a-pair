<template>
  <div class="dashboard mt-6">
    <h1 class="mt-6 d-block">Welcome User, {{ name }}</h1>
    <button class="btn-default" @click="logout()">Logout</button>
  </div>
</template>

<script>
import { fb } from "@/firebase";

export default {
  name: "UserDashboard",
  data() {
    return {
      name: null,
      email: null
    };
  },
  created() {
    var user = fb.auth().currentUser;
    this.email = user.email;
    this.name = user.displayName;

    console.log("Profile from FB:", this.profile);
  },
  firestore() {
    const user = fb.auth().currentUser;
    return {
      profile: db.collection("profiles").doc(user.uid)
    };
  },
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          console.log("User has been signed out!");
          this.$router.push("/");
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.dashboard {
  height: 300px;

  h1 {
    margin-top: 50px;
  }
}
</style>
