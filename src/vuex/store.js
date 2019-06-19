import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from '@/vuex/modules/user_info'
import tabbar from  '@/vuex/modules/tabbar'
import toast from  '@/vuex/modules/toast'
import countdown from  '@/vuex/modules/countdown'
import products from  '@/vuex/modules/products'
import shopping_car from  '@/vuex/modules/shopping_car'

import * as actions from '@/vuex/actions'
import * as getters from '@/vuex/getters'

Vuex.use(Vuex)
Vue.config.debug=true

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store(
    {
        state:{
            web_share:'http://shopweb.siwei.me',
            h5_share:'http://shoph5.siwei.me/?#'
        },
        actions,
        getters,
        modules:{
            products,
            shopping_car,
            userInfo,
            tabbar,
            toast,
            countdown
        },
        strict:debug,
        middlewares:debug?[]:[]
    }
)