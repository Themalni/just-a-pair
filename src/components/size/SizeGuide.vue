<template>
  <div class="modal fade" id="sizeGuideModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title font-weight-bold">Shoe Size Guide</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h4 class="table-title">Mens footwear</h4>
          <table
            class="table table-responsive-lg text-center"
            v-for="category in sizeGuideMen"
            :key="category.id"
          >
            <tbody>
              <tr>
                <th class="main-blue white-text table-category" colspan="4">USA</th>
                <td v-for="(value, index) in category.USA" :key="index">{{ value }}</td>
              </tr>
              <tr>
                <th class="main-blue white-text table-category" colspan="4">UK</th>
                <td v-for="(value, index) in category.UK" :key="index">{{ value }}</td>
              </tr>
              <tr>
                <th class="main-blue white-text table-category" colspan="4">EUR</th>
                <td v-for="(value, index) in category.EUR" :key="index">{{ value }}</td>
              </tr>
              <tr>
                <th class="main-blue white-text" colspan="4">cm</th>
                <td v-for="(value, index) in category.cm" :key="index">{{ value }}</td>
              </tr>
            </tbody>
          </table>
          <h4 class="table-title">Womens footwear</h4>
          <table
            class="table table-responsive-lg text-center"
            v-for="category in sizeGuideWomen"
            :key="category.id"
          >
            <tbody>
              <tr>
                <th class="main-blue white-text table-category" colspan="4">USA</th>
                <td v-for="(value, index) in category.USA" :key="index">{{ value }}</td>
              </tr>
              <tr>
                <th class="main-blue white-text table-category" colspan="4">UK</th>
                <td v-for="(value, index) in category.UK" :key="index">{{ value }}</td>
              </tr>
              <tr>
                <th class="main-blue white-text table-category" colspan="4">EUR</th>
                <td v-for="(value, index) in category.EUR" :key="index">{{ value }}</td>
              </tr>
              <tr>
                <th class="main-blue white-text" colspan="4">cm</th>
                <td v-for="(value, index) in category.cm" :key="index">{{ value }}</td>
              </tr>
            </tbody>
          </table>
          <h4 class="table-title">Childrens footwear</h4>
          <table
            class="table table-responsive-lg text-center"
            v-for="category in sizeGuideChildren"
            :key="category.id"
          >
            <tbody>
              <tr>
                <th class="main-blue white-text table-category" colspan="4">USA</th>
                <td v-for="(value, index) in category.USA" :key="index">{{ value }}</td>
              </tr>
              <tr>
                <th class="main-blue white-text table-category" colspan="4">UK</th>
                <td v-for="(value, index) in category.UK" :key="index">{{ value }}</td>
              </tr>
              <tr>
                <th class="main-blue white-text table-category" colspan="4">EUR</th>
                <td v-for="(value, index) in category.EUR" :key="index">{{ value }}</td>
              </tr>
              <tr>
                <th class="main-blue white-text" colspan="4">cm</th>
                <td v-for="(value, index) in category.cm" :key="index">{{ value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "SizeGuide",
  computed: {
    ...mapState(["sizeGuideMen", "sizeGuideWomen", "sizeGuideChildren"])
  },
  props: ["USA", "UK", "EUR", "cm"]
};
</script>
<style lang="scss" scoped>
.table {
  border: 1px solid $main-blue;
  td,
  th {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    border: 1px solid $main-blue;
    font-weight: 400;
  }
  th {
    border-bottom-color: #fff;
  }
}
tbody {
  tr {
    &:last-child {
      th {
        border-bottom-color: $main-blue;
      }
    }
    &:last-child {
      td {
        background-color: $dark-grey;
        color: #fff;
      }
    }
  }
}
.table-title {
  font-size: 1.1em;
  font-weight: 500;
}
.table-category {
  width: 15%;
}
</style>