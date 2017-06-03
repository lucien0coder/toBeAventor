<template>
    <section class="hero is-warning  is-fullheight">
       <div class="hero-head">
            <span class="user_level">一级美食家</span>
            <div class="container">
                <div class="card" style="margin-bottom: 0.2rem;">
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-96x96">
                        <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">
                            <strong>Lucien Chu</strong>
                        </p>
                        <p class="subtitle is-6">panyu</p>
                        <a class="button is-success">修改个人信息</a>
                        <span class="icon is-pulled-right is-medium">
                            <i class="fa fa-bookmark"></i>
                        </span>
                    </div>
                    </div>
                    <hr>
                    <div class="content">
                        <p>当前账号积分：1500分</p>
                    </div>
                    <hr>
                    <div class="content"  style="background-color: aliceblue;">
                        <a class="is-large"><h1 class="title is-3 is-spaced ">$ 500 赏金</h1></a>
                    </div>
                </div>
                </div>
            </div>  
        </div>
        <div class="hero-body">
            <div class="container">
                <aside class="menu">
                <p class="menu-label">
                    游戏规则
                </p>
                <ul class="menu-list">
                </ul>
                <p class="menu-label">
                    赏金说明
                </p>
                <ul class="menu-list">
                    <li><a>Team Settings</a></li>
                    <li>
                    <a class="is-active">Manage Your Team</a>
                    <ul>
                        <li><a>Members</a></li>
                        <li><a>Plugins</a></li>
                        <li><a>Add a member</a></li>
                    </ul>
                    </li>
                    <li><a>Invitations</a></li>
                    <li><a>Cloud Storage Environment Settings</a></li>
                    <li><a>Authentication</a></li>
                </ul>
                <p class="menu-label">
                    意见建议
                </p>
                <ul class="menu-list">
                </ul>
                <p class="menu-label">
                    版本信息
                </p>
                <ul class="menu-list">
                </ul>
                </aside>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .user_level{
        position: absolute;
        left: 3rem;
        top: 6rem;
        z-index: 1;
        transform: rotate(-23deg);
        font-size: larger;
        color:blueviolet
    }
</style>
