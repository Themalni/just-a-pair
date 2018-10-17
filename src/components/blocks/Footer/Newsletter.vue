<template>
    <div class="newsletter">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <p class="newsletter-text">Subscribe to our newsletter and receive a coupon for 15% off your first purchase</p>
                </div>
                <div class="col-md-3 text-right">
                    <button class="btn btn-outline-light newsletter-button">Subscribe</button>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../../../styles/scss/styles.scss";

.newsletter {
    border-bottom: 1px solid $grey;
    padding: 30px 0;
    background-color: $main-blue;
    color: #fff;
}
.newsletter-button {
    min-width: 250px;
    font-size: 1.2em;
    box-shadow: none;
    color: #fff !important;
    border-color: #fff !important;

    &:hover {
        box-shadow: 0 1px 3px #333;
    }
}
p {
    font-size: 1.7em;
    line-height: 2;
    color: $dark-grey;
    margin-bottom: 0;
    color: #fff;
}
</style>