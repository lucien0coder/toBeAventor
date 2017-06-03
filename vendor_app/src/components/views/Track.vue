<template>
    <section class="hero is-warning  is-fullheight">
      <SearchBar :show="true"></SearchBar>
        <div class="hero-body">
            <div class="container">
            <div class="field has-addons">
            <p class="control">
                <a class="button">
                <span>我的食评</span>
                </a>
            </p>
            <p class="control">
                <a class="button">
                <span>我的寻食</span>
                </a>
            </p>
            <p class="control">
                <a class="button">
                <span>我的评论</span>
                </a>
            </p>
            <p class="control"><a class="button"><span>我的点赞</span></a></p>
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
                        <p class="title is-5"><strong>John Smith</strong></p>
                        <p class="subtitle is-6">11:09 PM - 1 Jan 2016</p>
                    </div>
                    </div>
                    <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a>#css</a> <a>#location</a>
                    <br>
                    </div>
                </div>
                <footer class="card-footer">
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-dot-circle-o"></i></span>
                         国学寿司店
                    </a>
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-comment-o"></i></span>
                        2000
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
                        <p class="title is-5"><strong>John Smith</strong></p>
                        <p class="subtitle is-6">11:09 PM - 1 Jan 2016</p>
                    </div>
                    </div>
                    <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a>#css</a> <a>#location</a>
                    <br>
                    </div>
                </div>
                <footer class="card-footer">
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-dot-circle-o"></i></span>
                        国学寿司店
                    </a>
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-comment-o"></i></span>
                        200
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
                        <p class="title is-5"><strong>John Smith</strong></p>
                        <p class="subtitle is-6">11:09 PM - 1 Jan 2016</p>
                    </div>
                    </div>
                    <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a>#css</a> 
                    </div>
                </div>
                <footer class="card-footer">
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-dot-circle-o"></i></span>
                        国学寿司店
                    </a>
                    <a class="card-footer-item">
                        <span class="icon is-small"><i class="fa fa-comment-o"></i></span>
                        10
                    </a>
                </footer>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import SearchBar from '../SearchBar'
export default {
  components: {
    SearchBar
  }
}
</script>
