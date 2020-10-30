import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'


let data = {
  products: mock,
  carts: [],
  cartSize:0,
  quantity:0,
  switch:-1,


  addCart(product) {



    for (var i = 0; i <this.carts.length;i++) {
      if(this.carts[i].product.name === product.name) {
        this.switch = i;

      }
    }

    if(this.switch > -1) {
      this.carts[this.switch].quantity++;
    }
    else {
      this.cartSize += 1;
      this.quantity = 1;

      this.carts.push({
        product: product,
        id: this.cartSize,
        quantity: this.quantity,
      })
    }

    this.switch = -1;





  },


  removeCart(cart) {
    var index = this.carts.indexOf(cart);
    if(index > -1) {
      this.carts.splice(index,1);
    }
    this.cartSize -=1;

  },
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
