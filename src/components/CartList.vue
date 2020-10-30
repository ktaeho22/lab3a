<style scoped>
.wrapper {

}

.carts {
  margin-top: 20px;
  display: flex;
  flex-direction: column;


}

.cart {
  margin: 10px;
  margin-top: 50px;
  width: 200%;
}

.cart img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;

}

.cart .image {
  display: flex;
  justify-content: right;
  margin-bottom: 5px;
}

.info {

  color: #000;
  height: 90px;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;

}

.auto {
  margin-left: auto;
}

.list {
display: flex;
flex-direction: row;

}


.quantity{

padding-left: 50px;

}
</style>


<template>

<div class="wrapper">
  <div class="carts">

    <div class="cart" v-for="cart in carts" :key="cart.id">
    <hr>
      <div class="info">
        <h1>{{cart.product.name}}</h1>
        <p>{{cart.product.country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+ cart.product.image">
      </div>

      <div class="price">
      <div class="list">
      <h2>{{cart.product.price}}</h2>
      <h2 class = "quantity">{{cart.quantity}} Items</h2>
      </div>
      <button class="auto" @click="removeCart(cart)">Remove Item</button>

      </div>

      <hr>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'CartList',


  props: {
    carts: Array
  },
  methods:{
    removeCart(cart) {
      this.$root.$data.removeCart(cart);

    },
  }
}
</script>
