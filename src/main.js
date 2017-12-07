import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from 'components/goods/goods';

Vue.use(VueRouter);
// 通过 Vue.extend() 创建的组件构造器，
let app = Vue.extend(App);
let router = new VueRouter();

router.map({
  '/goods': {
    component: goods
  }
});
// 开始使用路由
router.start(app, '#app');
