<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import PokemonAPI from "../data/PokemonApi";

const route = useRoute();
const data = ref(null);
const fetchData = async () => {
  const response = await PokemonAPI.GetPokemonId(route.params.id);
  data.value = response.data;
  console.log(data);
};
onMounted(() => {
  fetchData();
});
</script>
<template>
  <div class="">
    <img :src="data?.images?.small" alt="" />
    <div class="">
      <h6>{{ data.name }}</h6>
      <h6>{{ data.rarity }}</h6>
      <h6>{{ data.cardmarket.prices.trendPrice }} $</h6>
    </div>
  </div>
</template>
