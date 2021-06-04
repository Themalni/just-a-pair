<template>
  <div class="dashboard">
    <sidebar />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: "AdminDashboard",
  components: {
    Sidebar
  }
};
</script>
<style lang="scss" scoped>
.dashboard {
  margin-top: 60px;
}
</style>

