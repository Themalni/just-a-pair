<template>
    <div class="newsletter">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <p class="newsletter-text">Subscribe to our newsletter and receive a coupon for 15% off your first purchase</p>
                </div>
                <div class="col-md-3 text-right">
                    <button class="btn btn-outline-light newsletter-button mt-3">Subscribe</button>
                </div> 
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.newsletter {
    border-bottom: 1px solid $grey;
    padding: 30px 0;
    background-color: $main-blue;
    color: #fff;
}
.newsletter-button {
    font-size: 1.2em;
    box-shadow: none;
    color: #fff !important;
    border-color: #fff !important;

    @include device-size(xl) {
        min-width: 250px;    
    }

    &:hover {
        box-shadow: 0 1px 3px #333;
    }
}
.newsletter-text {
    font-size: 1.7em;
    line-height: 2;
    color: $dark-grey;
    margin-bottom: 0;
    color: #fff;

    @include device-size(xs, sm) {
        line-height: 1.4;    
    }
}
</style>