<template>
  <div class="details">
    <div class="container">
      <div class="row">
        <div
          class="col-md-12"
          v-for="(product, index) in products"
          :key="index"
        >
          <div v-if="proId == product.productId">
            <h1>{{ product.productTitle }}</h1>
            <img
              :src="product.image"
              class="img-fluid"
              style="width:500px;, height:300px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "details",
  data() {
    return {
      proId: this.$route.params.Pid,
      title: "details",
      products: [
        {
          productTitle: "Abcn",
          image: require("../assets/images/1.jpg"),
          productId: 1,
        },
        {
          productTitle: "Karma",
          image: require("../assets/images/2.jpg"),
          productId: 2,
        },
        {
          productTitle: "Tino",
          image: require("../assets/images/3.jpg"),
          productId: 3,
        },
        {
          productTitle: "Efg",
          image: require("../assets/images/4.jpg"),
          productId: 4,
        },
        {
          productTitle: "Mli",
          image: require("../assets/images/6.jpg"),
          productId: 5,
        },
        {
          productTitle: "Banans",
          image: require("../assets/images/7.jpg"),
          productId: 6,
        },
      ],
    };
  },
};
</script>
