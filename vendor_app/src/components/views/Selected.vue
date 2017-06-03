<template>
    <section class="hero is-warning  is-fullheight">
      <div class="hero-head">
            <h2 class="subtitle has-text-centered" style="margin:0.5rem">
                <span class="icon is-pulled-left">
                    <i class="fa fa-arrow-left"></i>  
                </span>
                <strong>地点切换</strong>
            </h2>
            <div class="field" style="margin-top: 1.5rem;">
                <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="search city">
                    <span class="icon">
                        <i class="fa fa-search"></i>
                    </span>
                </p>
            </div>

            <div class="columns is-mobile">
                <div class="column is-3">
                    <aside class="menu">
                    <p class="menu-label">
                        省份
                    </p>
                    <ul class="menu-list">
                        <li><a>北京</a></li>
                        <li><a>上海</a></li>
                        <li><a class="is-active">广东</a></li>
                        <li><a>重庆</a></li>
                        <li><a>广西</a></li>
                        <li><a>云南</a></li>
                        <li><a>黑龙江</a></li>
                        <li><a>四川</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                        <li><a>贵州</a></li>
                    </ul>
                    </aside>
                </div>
                <div class="column">
                    <div class="hero is-fullheight">
                        <div class="hero-head">
                            <div class="container"><!--GPS-->
                                <div class="notification">
                                    <h5 class="title is-5">定位城市:
                                        <span class="tag is-success is-medium" style="margin-left:3rem">广州</span>
                                    </h5>
                                </div>
                            </div>
                            <div class="container"><!--最近浏览-->
                                <div class="notification" style="padding-right:1.25rem">
                                    <h5 class="title is-5">最近浏览</h5>
                                    <span class="tag is-success">广州</span>
                                    <span class="tag is-success">广州</span>
                                    <span class="tag is-success">广州</span>
                                    <span class="tag is-success">广州</span>
                                    <span class="tag is-success">广州</span>
                                    <span class="tag is-success">广州</span>
                                    <span class="tag is-success">广州</span>
                                    <span class="tag is-success">广州</span>
                                </div>
                            </div>
                            <div class="container"><!--热门-->
                                <div class="notification"  style="padding-right:1.25rem">
                                    <h5 class="title is-5">热门城市</h5>
                                    <span class="tag is-success">广州</span>
                                    <span class="tag is-success">广州</span>
                                </div>
                            </div>
                            <div class="container"><!--选中-->
                                <div class="notification"  style="padding-right:1.25rem">
                                    <h5 class="title is-5">广东省</h5>
                                    <span class="tag is-success">广州</span>
                                    <span class="tag is-success">广州</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
