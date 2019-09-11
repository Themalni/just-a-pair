<template>
  <div class="sidebar-container">
    <h2 class="sidebar-header font-weight-bolder text-large pl-3 pt-4 pb-3">Admin dashboard</h2>
    <div class="sidebar-user mt-3 ml-3 mb-2">Hello, {{ user }}</div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <button class="button-reset text-white ml-3" @click="logout()">
          <md-icon class="icon-sm">logout</md-icon>Logout
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { fb } from "@/firebase";

export default {
  name: "Sidebar",
  props: {
    user: {
      type: String
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
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
