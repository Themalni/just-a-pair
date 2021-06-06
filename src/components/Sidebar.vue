<template>
  <div class="sidebar-container">
    <h2 class="sidebar-header font-weight-bolder text-large pl-3 pt-4 pb-3">Your profile</h2>
    <div class="sidebar-user mt-3 ml-3 mb-2">Hello, {{ userName }}</div>
    <div class="sidebar-user mt-3 ml-3 mb-2">{{ userEmail }}</div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <button class="button-reset text-white ml-3" @click="logout">
          <md-icon class="icon-sm">logout</md-icon>Logout
        </button>
      </li>
    </ul>
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
  width: 240px;
  height: 100vh;
  background-color: $dark-blue;
}
.sidebar-header {
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
.btn {
  &.btn-link {
    color: #fff;
  }
}
.sidebar-user {
  color: #fff;
}
</style>
