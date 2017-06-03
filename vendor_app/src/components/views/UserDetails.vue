<template>
   <section class="hero is-warning  is-fullheight">
        <span class="user_level">一级美食家</span>
        <div class="hero-head">
            <h2 class="subtitle has-text-centered" style="margin:0.5rem">
                <span class="icon is-pulled-left">
                    <i class="fa fa-arrow-left"></i>  
                </span>
                <strong>美食家详情</strong>
                <span class="icon is-pulled-right">
                    <i class="fa fa-heart"></i>
                </span>
            </h2>
            <div class="container">
                <div class="card" style="margin-bottom: 0.2rem;">
                <div class="card-content">
                    <div class="media">
                    <div class="media-content">
                        <figure class="image is-128x128" style="margin:auto">
                        <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
                        </figure>
                    </div>
                    </div>
                    <hr>
                    <div class="content has-text-left">
                        <p class="title is-5">
                            <span class="icon"><i class="fa fa-user"></i></span>
                            &nbsp;&nbsp;&nbsp;&nbsp;<strong>Lucien Chu</strong>
                        </p>
                        <p class="title is-5">
                            <span class="icon"><i class="fa fa-dot-circle-o"></i></span>
                            &nbsp;&nbsp;&nbsp;&nbsp;<strong>Canton</strong>
                        </p>
                        <p class="title is-5">
                            <span class="icon"><i class="fa fa-pencil-square"></i></span>
                            &nbsp;&nbsp;&nbsp;&nbsp;<strong>吃也是一种信仰</strong>
                        </p>
                    </div>
                </div>
                <footer class="card-footer">
                    <a class="card-footer-item">
                        食评 200
                    </a>
                    <a class="card-footer-item">
                        解答 212
                    </a>
                </footer>
                </div>
            </div>  
            <!-- comment -->
            <div class="box is-marginless">
                <article class="media">
                    <div class="media-left">
                    <figure class="image is-32x32">
                        <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                    </div>
                    <div class="media-content">
                    <div class="content">
                        <p>
                        <strong>John Smith</strong> <small>31m</small>
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                    </div>
                    </div>
                </article>
            </div>
            <div class="box is-marginless">
                <article class="media">
                    <div class="media-left">
                    <figure class="image is-32x32">
                        <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                    </div>
                    <div class="media-content">
                    <div class="content">
                        <p>
                        <strong>John Smith</strong> <small>31m</small>
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                    </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .user_level{
        position: absolute;
        right: 7rem;
        top: 10.5rem;
        z-index: 1;
        transform: rotate(-23deg);
        font-size: larger;
        color:blueviolet
    }
</style>
