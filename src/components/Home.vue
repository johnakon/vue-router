<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <div class="row">
      <div
        class="col-md-4 col-lg4"
        v-for="(data, index) in products"
        :key="index"
      >
        <img :src="data.image" class="img-fluid" style="width:500px; height:300px"/>
        <h3 @click="goTodetail(data.productId)">{{ data.productTitle }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      title: "Home",
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
  methods: {
    goTodetail(prodId) {
      let proId = prodId;
      this.$router.push({ name: "details", params: { Pid: proId } });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img {
  max-height: 15em;
  width: 100%;
}
.row h3 {
  cursor: pointer;
}
</style>
