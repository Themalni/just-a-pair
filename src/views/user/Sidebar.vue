<template>
  <div class="sidebar-container">
    <h3 class="sidebar-header pl-3 pt-4 pb-3">Your profile</h3>
    <div class="separator"></div>
    <div class="sidebar-user mt-3 ml-3 mb-2">Hello, {{ userName }}</div>
    <div class="sidebar-user mt-3 ml-3 mb-2">{{ userEmail }}</div>
    <div class="separator mt-3 mb-4"></div>
    <button class="button-reset text-white ml-3" @click="logout">
      <md-icon class="icon-sm">logout</md-icon>Logout
    </button>
  </div>
</template>

<script>
import { fb } from "@/firebase";
import { mapState } from "vuex";
import { CLEAR_USER } from "@/store/types";
import store from '@/store';

export default {
  name: "Sidebar",

  computed: {
    ...mapState(["user"]),

    userName() {
      return this.user ? this.user.displayName : '';
    },
    userEmail() {
      return this.user ? this.user.email : '';
    }
  },
  methods: {
    logout() {
      fb.auth().signOut()
        .then(() => {
          store.dispatch(CLEAR_USER);

          this.$notify({
            text: 'You logout successfully',
            type: 'success',
            duration: 3000
          });
          this.$router.push("/");
        })
        .catch(() => {
          this.$notify({
            text: 'Logout error',
            type: 'error',
            duration: 3000
          })
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar-container {
  margin-top: 60px;
  width: 240px;
  height: 93.9vh;
  background-color: $dark-blue;
}
.sidebar-header {
  color: #fff;
}
.btn {
  &.btn-link {
    color: #fff;
  }
}
.sidebar-user {
  color: #fff;
}
.separator {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
</style>
