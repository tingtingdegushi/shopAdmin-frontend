import Vue from 'vue'
import App from './App.vue'

// 导入axios
import axios from "axios";

// element-ui：1.引入
import ElementUI from "element-ui";
// element-ui: 2.引入样式
import 'element-ui/lib/theme-chalk/index.css';

//yru vuerouter
import VueRouter from "vue-router";

import Admin from './pages/Admin'
import Login from './pages/Login'


//注册路由
Vue.use(VueRouter);

// element-ui: 3.注册插件
Vue.use(ElementUI)

Vue.config.productionTip = false;

//配置路由
const routes=[
  {path:'/',redirect:"/Admin"},
  {path:'/Login',component:Login,meta:"登录页"},
  {path:'/Admin',component:Admin,meta:"首页"}
]
//  const router=new VueRouter({
//    routes
//  });
const router = new VueRouter({routes});

// 给vue构造函数的原型链添加$axios
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
// import Vue from 'vue'
// import App from './App.vue'

// // 导入axios
// import axios from "axios";

// // element-ui：1.引入
// import ElementUI from "element-ui";
// // element-ui: 2.引入样式
// import 'element-ui/lib/theme-chalk/index.css';

// // 引入vue-router
// import VueRouter from "vue-router";

// // 导入组件
// import Login from "./pages/Login";
// import Admin from "./pages/Admin";

// // 注册插件
// Vue.use(VueRouter)

// // element-ui: 3.注册插件
// Vue.use(ElementUI)

// Vue.config.productionTip = false;

// // 配置路由
// const routes = [
//   { path: "/", redirect: "/admin" },
//   { path: "/login", component: Login, meta: "登录页" },
//   { path: "/admin", component: Admin, meta: "首页" }
// ]

// // 创建路由对象
// const router = new VueRouter({routes});

// // 给vue构造函数的原型链添加$axios
// Vue.prototype.$axios = axios;

// new Vue({
//   // 挂载到根实例
//   router,
//   render: h => h(App),
// }).$mount('#app')
