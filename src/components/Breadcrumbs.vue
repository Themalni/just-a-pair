<template>
  <div>
    <div class="breadcrumbs">
      <a href="#" v-for="element in breadcrumbs" :key="element">
        {{ element }}
        <md-icon>keyboard_arrow_right</md-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  data() {
    return {
      breadcrumbs: ["Home", "Women", "Shoes"]
    };
  }
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  margin: 2em 0 1em;
  padding-top: 2em;
}
a {
  color: $dark-grey;
  font-size: 1.2em;

  &:last-child {
    color: #333;

    i {
      display: none;
    }
  }
}
i {
  font-size: 1.4em !important;
}
</style>
