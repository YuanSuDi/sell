import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import ratings from 'components/ratings/ratings';
import 'common/stylus/index.styl'; // 加载公共样式

Vue.use(VueRouter);
Vue.use(VueResource);
// 通过 Vue.extend() 创建的组件构造器，
let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/goods': {
    component: goods
  },
  '/seller': {
    component: seller
  },
  '/ratings': {
    component: ratings
  }
});
// 开始使用路由
router.start(app, '#app');
// 跳到默认的页面
router.go('/goods');
