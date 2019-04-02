<template>
  <div>
    <div class="product-details">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="details-header">Product details</h2>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-md-7">
                    <p class="description">{{ description }}</p>
                </div>
                <div class="col-md-5">
                    <ul v-for="item in additionalInfo" :key="item.id" class="additional-info">
                        <li>Material: <span class="font-weight-bold">{{ item.material }}</span></li>
                        <li>Style: <span class="font-weight-bold">{{ item.styleGeneral }}</span></li>
                        <li>Season: <span class="font-weight-bold">{{ item.season }}</span></li>
                        <li>Fastening: <span class="font-weight-bold">{{ item.fastening }}</span></li>
                        <li>Open front: <span class="font-weight-bold">{{ item.front }}</span></li>
                        <li>Open heal: <span class="font-weight-bold">{{ item.heal }}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
        return {
            description: "Elegant sandals, perfect for stroles in the park as well as a night out on a hot summer evening. Made with the best material that includes soft leather stripes and platform of hight quality cork.",
            additionalInfo: [
                {
                    material: "Leather",
                    styleGeneral: "Sandals",
                    season: "Late Spring, Summer",
                    fastening: "Stripe",
                    front: "Yes",
                    heal: "Yes"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.product-details {
    padding: 30px 0;
    color: #333;
}
.details-header {
    font-family: $fancy-font;
    font-weight: bold;
}
.description,
.additional-info {
    line-height: 2;
    margin: 1em 0;
    font-size: 1.2em;
}
</style>