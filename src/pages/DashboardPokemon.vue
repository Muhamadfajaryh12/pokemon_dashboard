<script setup>
import { onMounted, ref } from "vue";
import PokemonAPI from "../data/PokemonApi";
import CardPokemon from "../components/common/CardPokemon.vue";
import RarityAPI from "../data/RarityApi";

const data_pokemon = ref([]);
const data_rarity = ref([]);

const fetchPokemon = async () => {
  const response = await PokemonAPI.GetPokemon();
  data_pokemon.value = response.data;
};

const fetchRarity = async () => {
  const response = await RarityAPI.GetRarity();
  data_rarity.value = response.data;
};

onMounted(() => {
  fetchPokemon();
  fetchRarity();
});

console.log(data_pokemon);
</script>
<template>
  <div class="flex w-full">
    <div class="w-72">
      <h6 class="text-center font-bold">
        Filter <span class="text-orange-400">Pokemon</span>
      </h6>
      <div class="flex w-64 flex-wrap gap-2 mx-auto">
        <button
          class="text-xs bg-gray-200 rounded-full py-1 px-3"
          v-for="data in data_rarity"
        >
          {{ data }}
        </button>
      </div>
    </div>
    <div class="grid grid-cols-5 gap-2 mx-auto">
      <div class="" v-for="data in data_pokemon">
        <CardPokemon :pokemon="data" />
      </div>
    </div>
  </div>
</template>
