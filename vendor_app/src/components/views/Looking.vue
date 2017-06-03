<template>
    <section class="hero is-warning  is-fullheight">
      <SearchBar :show="true"></SearchBar>
        <div class="hero-body">
            <div class="container">
                <Location :show="true"></Location>
                <div class="card" style="margin-bottom: 0.2rem;">
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                      <router-link to="/details/user/222">
                        <figure class="image is-48x48" @click="userDetails">
                        <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                        </figure>
                      </router-link>
                    </div>
                    <div class="media-content">
                        <p class="title is-5"><strong>John Smith</strong>
                            <span class="icon is-pulled-right"><i class="fa fa-question"></i></span>
                        </p>
                        <p class="subtitle is-6">11:09 PM - 1 Jan 2016</p>
                    </div>
                    </div>
                    <div class="content">
                    <span class="tag is-warning">广州</span>
                    <span class="tag is-warning">小吃</span>
                    <span class="tag is-warning">早点</span>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. 
                    <br>
                    ￥ 免费
                    </div>
                </div>
                <footer class="card-footer">
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-comment-o">2000</i></span>
                    </a>
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-heart-o">2000</i></span>
                    </a>
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-star-o">2000</i></span>
                    </a>
                </footer>
                </div>

                <div class="card" style="margin-bottom: 0.2rem;">
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5"><strong>John Smith</strong>
                            <span class="icon is-pulled-right"><i class="fa fa-question"></i></span>
                        </p>
                        <p class="subtitle is-6">11:09 PM - 1 Jan 2016</p>
                    </div>
                    </div>
                    <div class="content">
                        <span class="tag is-warning">广州</span>
                        <span class="tag is-warning">小吃</span>
                        <span class="tag is-warning">早点</span>
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
                        <br>
                        ￥ 10
                    </div>
                </div>
                <footer class="card-footer">
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-comment-o">2000</i></span>
                    </a>
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-heart-o">2000</i></span>
                    </a>
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-star-o">2000</i></span>
                    </a>
                </footer>
                </div>

                <div class="card" style="margin-bottom: 0.2rem;">
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">
                            <strong>John Smith</strong>
                            <span class="icon is-pulled-right"><i class="fa fa-bullhorn"></i></span>
                        </p>
                        <p class="subtitle is-6">11:09 PM - 1 Jan 2016</p>
                        
                    </div>
                    </div>
                    <div class="content">
                        <span class="tag is-warning">广州</span>
                        <span class="tag is-warning">小吃</span>
                        <span class="tag is-warning">早点</span>
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
                        <br>
                        ￥ 20
                    </div>
                </div>
                <footer class="card-footer">
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-comment-o">2000</i></span>
                    </a>
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-heart-o">2000</i></span>
                    </a>
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-star-o">2000</i></span>
                    </a>
                </footer>
                </div>
            </div>
        </div>   
    </section>
</template>
<script>
import Location from '../Location'
import SearchBar from '../SearchBar'
export default {
  components: {
    Location,
    SearchBar
  },
  methods: {
    userDetails () {
      console.log('dd')
    }
  }
}
</script>
