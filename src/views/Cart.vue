<style scoped>
.wrapper {
  display: flex;
  align-items: right;
  justify-content: right;


}


.endLine {
  padding-top: 100px;
}

.emptyMessage{
display:flex;
font-size: 80px;
align-items: center;
justify-content: center;
}
.footer {
  padding-top: 10%;
  display: flex;
   justify-content: center;
   align-items: center;

}

</style>

<template>
  <div class = "container">
  <div class="wrapper">
  <h1>Shopping Cart</h1>
  </div>
  <hr>
  <p class = "emptyMessage" v-show="this.$root.$data.cartSize ===0">Cart is empty!</p>
  <CartList :carts="carts"/>

  <div class = "endLine">

  <hr>
  </div>
  <div class= 'footer'>
    <div class = 'github'><a href="https://github.com/ktaeho22/lab3a.git">github</a></div>
  </div>
</div>

</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Cart',
  components: {
    CartList
  },
  data() {
    return {
    }
  },
  computed: {
    carts() {
    return this.$root.$data.carts;
    }
}
}
</script>
