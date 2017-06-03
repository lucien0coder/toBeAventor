import Vue from 'vue'
import Router from 'vue-router'
import FooComment from '@/components/views/FooComment'
import FoodCommentDetails from '@/components/views/FoodCommentDetails'
import Looking from '@/components/views/Looking'
import Track from '@/components/views/Track'
import Mine from '@/components/views/Mine'
import Signin from '@/components/views/Signin'
import Signup from '@/components/views/Signup'
import Selected from '@/components/views/Selected'
import ShopDetails from '@/components/views/ShopDetails'
import UserDetails from '@/components/views/UserDetails'
import NewPost from '@/components/views/Newpost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fooComment',
      components: {
        default: FooComment
      }
    },
    {
      path: '/fooComment/:id',
      name: 'fcDetails',
      components: {
        detailsPage: FoodCommentDetails
      }
    },
    {
      path: '/looking',
      name: 'looking',
      components: {
        default: Looking
      }
    },
    {
      path: '/track',
      name: 'track',
      components: {
        default: Track
      }
    },
    {
      path: '/mine',
      name: 'mypage',
      components: {
        default: Mine
      }
    },
    {
      path: '/signin',
      name: 'signin',
      components: {
        default: Signin
      }
    },
    {
      path: '/signup',
      name: 'signup',
      components: {
        default: Signup
      }
    },
    {
      path: '/selected',
      name: 'select_city',
      components: {
        detailsPage: Selected
      }
    },
    {
      path: '/details/shop/:id',
      name: 'shopDetails',
      components: {
        detailsPage: ShopDetails
      }
    },
    {
      path: '/details/user/:id',
      name: 'userDetails',
      components: {
        detailsPage: UserDetails
      }
    },
    {
      path: '/newpost',
      name: 'newPost',
      components: {
        newPage: NewPost
      }
    }
  ]
})
