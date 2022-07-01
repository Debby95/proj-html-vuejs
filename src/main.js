import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/main.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
