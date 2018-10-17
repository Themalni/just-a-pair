<template>
    <div>
        <footer class="footer">
            <newsletter/>
            <div class="container links-container">
                <div class="row">
                    <div class="col-md-8 footer-links">
                        <div class="row">
                            <div class="col-md-3">
                                <h4 class="links-header">Departments</h4>
                                <div class="col-md-12 links">
                                    <a class="" href="#">Women</a>
                                    <a class="" href="#">Men</a>
                                    <a class="" href="#">Children</a>
                                    <a class="" href="#">Home</a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <h4 class="links-header">User Profile</h4>
                                <div class="col-md-12 links">
                                    <a class="" href="#">Orders</a>
                                    <a class="" href="#">Reviews</a>
                                    <a class="" href="#">Coupons</a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <h4 class="links-header">Help</h4>
                                <div class="col-md-12 links">
                                    <a class="" href="#">How to order</a>
                                    <a class="" href="#">How to pay</a>
                                    <a class="" href="#">Delivery</a>
                                    <a class="" href="#">Returns</a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <h4 class="links-header">About</h4>
                                <div class="col-md-12 links">
                                    <a class="" href="#">About Us</a>
                                    <a class="" href="#">Privacy Policy</a>
                                    <a class="" href="#">Career</a>
                                    <a class="" href="#">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-social">
                        <div class="text-right">
                            <a class="social-icon" href="#"><i class="fa fa-facebook fa-2x"></i></a>
                            <a class="social-icon" href="#"><i class="fa fa-instagram fa-2x"></i></a>
                            <a class="social-icon" href="#"><i class="fa fa-pinterest-p fa-2x"></i></a>
                            <a class="social-icon" href="#"><i class="fa fa-youtube-square fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
  name: 'app-footer'
}
</script>

<style lang="scss" scoped>
@import "../../../styles/scss/styles.scss";

.footer {
    background-color: $light-grey;
}
.links-container {
    padding-top: 30px;
    padding-bottom: 30px;
}
.links-header {
    font-family: $fancy-font;
    font-weight: 700;
    color: $dark-grey;
}
.links {
    padding: 0;

    a {
        display: block;
        color: $dark-grey;
        margin: 1em 0;
        font-size: 1.2em;
    }
}
.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $grey;
    display: inline-block;
    margin-left: 1.5em;
    padding: 7px;
    text-align: center;

    .fa {
        color: #fff;
    }

    &:hover {
        background-color: $dark-grey;
    }
}
</style>