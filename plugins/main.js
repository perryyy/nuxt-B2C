import Vue from 'vue'
if(process.client){
    const VueStar= require('vue-star');
    Vue.component('VueStar', VueStar)
}
