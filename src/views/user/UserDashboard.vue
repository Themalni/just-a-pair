<template>
  <div class="dashboard mt-6">
    <sidebar />
    <div>Profile</div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: "UserDashboard",
  components: {
    Sidebar
  }
}

</script>
<style lang="scss" scoped>
.dashboard {
  height: 300px;

  h1 {
    margin-top: 50px;
  }
}
</style>
