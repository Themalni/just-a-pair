<template>
  <div class="dashboard">
    <sidebar :user="name"></sidebar>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import { fb, db } from "@/firebase";

export default {
  name: "AdminDashboard",
  components: {
    Sidebar
  },
  data() {
    return {
      name: null,
      email: null
    };
  },
  mounted() {
    let user = fb.auth().currentUser;
    this.email = user.email;
    let userName = db
      .collection("profiles")
      .doc(user.uid)
      .get()
      .then(doc => {
        this.name = doc.data().name;
      });
  }
  // firestore() {
  //   const user = fb.auth().currentUser;
  //   console.log("From firestore:", user);
  //   return {
  //     profile: db.collection("profiles").doc(user.uid)
  //   };
  // }
};
</script>
<style lang="scss" scoped>
.dashboard {
  margin-top: 60px;
}
</style>

